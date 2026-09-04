const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

const PDF_DOC_FOLDER = path.join(__dirname, "../PDF_DOC");
const EXCHANGE_RATES_FOLDERS = [
  path.join(PDF_DOC_FOLDER, "EXCHANGE_RATES"),
  path.join(PDF_DOC_FOLDER, "DGFT", "EXCHANGE_RATES"),
];
const EXCHANGE_RATE_NOTIFICATION_FOLDERS = EXCHANGE_RATES_FOLDERS.flatMap((folderPath) => [
  path.join(folderPath, "Exchange Rate Notifications"),
  path.join(folderPath, "Exchange Rate Notification"),
]);

let exchangeRatesData = [];
let notificationSummaries = [];
let lastUpdated = "";
let lastFileName = "";
let sourceSignature = "";

const MANUAL_EXCHANGE_RATE_OVERRIDES = [
  ["AED", "UAE Dirham", 1, 26.2, 24.7],
  ["AUD", "Australian Dollar", 1, 68.6, 65.65],
  ["BHD", "Bahraini Dinar", 1, 256.6, 238.75],
  ["CAD", "Canadian Dollar", 1, 69.2, 66.95],
  ["CHF", "Swiss Franc", 1, 122.35, 117],
  ["CNY", "Chinese Yuan", 1, 13.9, 13.45],
  ["DKK", "Danish Kroner", 1, 14.95, 14.55],
  ["EUR", "Euro", 1, 112.2, 108.45],
  ["GBP", "Pound Sterling", 1, 128.85, 124.8],
  ["HKD", "Hongkong Dollar", 1, 12.05, 11.75],
  ["JPY", "Japanese Yen", 100, 59.85, 58],
  ["KRW", "Korean Won", 100, 6.55, 6.15],
  ["KWD", "Kuwaiti Dinar", 1, 311.9, 293.15],
  ["NOK", "Norwegian Kroner", 1, 10.1, 9.85],
  ["NZD", "New Zealand Dollar", 1, 56.65, 53.9],
  ["QAR", "Qatari Riyal", 1, 27.4, 24.1],
  ["SAR", "Saudi Arabian Riyal", 1, 25.65, 24.25],
  ["SEK", "Swedish Kroner", 1, 10.35, 10.1],
  ["SGD", "Singapore Dollar", 1, 74.85, 72.25],
  ["TRY", "Turkish Lira", 1, 2.15, 2.05],
  ["USD", "US Dollar", 1, 94.2, 92.5],
  ["ZAR", "South African Rand", 1, 5.9, 5.55],
].map(([currency, currencyName, unit, importRate, exportRate], index) => ({
  id: `13/2026-${currency}-manual-${index}`,
  notification: "13/2026",
  notificationDate: "16-04-2026",
  effectiveDate: "17-04-2026",
  tillDate: "",
  currency,
  currencyName,
  unit,
  importRate,
  exportRate,
  downloadUrl: `/api/exchange-rates/download?notification=${encodeURIComponent("13/2026")}`,
  source: "manual",
}));

function ensureFolder() {
  EXCHANGE_RATES_FOLDERS.forEach((folderPath) => fs.mkdirSync(folderPath, { recursive: true }));
}

function formatDate(value) {
  if (!value) return "";

  if (value instanceof Date) {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatter.format(value).replace(/\//g, "-");
  }

  if (typeof value === "number") {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      return `${String(parsed.d).padStart(2, "0")}-${String(parsed.m).padStart(2, "0")}-${parsed.y}`;
    }
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
      const [year, month, day] = trimmed.slice(0, 10).split("-");
      return `${day}-${month}-${year}`;
    }
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(trimmed)) {
      const [day, month, year] = trimmed.split("/");
      return `${day}-${month}-${year}`;
    }
    return trimmed.replace(/\//g, "-");
  }

  return "";
}

function normalizeHeader(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function normalizeNotification(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "");
}

function normalizeNotificationKey(value) {
  const match = String(value || "").match(/(\d{1,3})\D+(\d{4})/);
  return match ? `${Number(match[1])}/${match[2]}` : "";
}

function normalizeDateKey(value) {
  const match = String(value || "").match(/(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})/);
  if (!match) return "";
  return `${match[1].padStart(2, "0")}-${match[2].padStart(2, "0")}-${match[3]}`;
}

function getNotificationPdfEntries() {
  return EXCHANGE_RATE_NOTIFICATION_FOLDERS.flatMap((folderPath) => {
    if (!fs.existsSync(folderPath)) return [];

    return fs.readdirSync(folderPath, { withFileTypes: true })
      .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === ".pdf")
      .map((entry) => {
        const notificationMatch = entry.name.match(/Notification\s*No\s*-\s*(\d{1,3})-(\d{4})/i);
        const notificationDateMatch = entry.name.match(/dated\s+(\d{1,2}[.\/-]\d{1,2}[.\/-]\d{4})/i);
        const dateOnlyFileMatch = entry.name.match(/Notification\s*No\s*-\s*(\d{1,2}[.\/-]\d{1,2}[.\/-]\d{4})\.pdf$/i);
        const effectiveDateMatch = entry.name.match(/w\.?e\.?f\.?\s+(\d{1,2}[.\/-]\d{1,2}[.\/-]\d{4})/i);

        return {
          fileName: entry.name,
          filePath: path.join(folderPath, entry.name),
          notification: notificationMatch
            ? `${Number(notificationMatch[1])}/${notificationMatch[2]}`
            : "",
          notificationDate: normalizeDateKey(notificationDateMatch?.[1] || dateOnlyFileMatch?.[1]),
          effectiveDate: normalizeDateKey(effectiveDateMatch?.[1]),
        };
      });
  });
}

function findNotificationPdf(
  { notification, notificationDate, effectiveDate },
  entries = getNotificationPdfEntries()
) {
  const notificationKey = normalizeNotificationKey(notification);
  const notificationDateKey = normalizeDateKey(notificationDate);
  const effectiveDateKey = normalizeDateKey(effectiveDate);
  return entries.find((entry) => notificationKey && entry.notification === notificationKey)
    || entries.find((entry) => notificationDateKey && entry.notificationDate === notificationDateKey)
    || entries.find((entry) => effectiveDateKey && entry.effectiveDate === effectiveDateKey)
    || null;
}

function getNotificationPdfUrl(record, entries) {
  const match = findNotificationPdf(record, entries);
  if (!match) return "";

  const params = new URLSearchParams({ notification: record.notification || match.notification });
  if (record.notificationDate) params.set("notificationDate", record.notificationDate);
  if (record.effectiveDate) params.set("effectiveDate", record.effectiveDate);
  return `/api/exchange-rates/pdf?${params.toString()}`;
}

function detectHeaderRow(rows) {
  return rows.findIndex((row) => {
    const normalizedRow = row.map(normalizeHeader);
    return normalizedRow.includes("wef") && normalizedRow.includes("currencycode");
  });
}

function detectNotificationColumn(rows, headerRowIndex, mappedIndexes) {
  const searchStart = headerRowIndex + 1;
  const candidateIndexes = rows[headerRowIndex].map((_, index) => index).filter((index) => !mappedIndexes.has(index));

  for (const index of candidateIndexes) {
    for (let rowIndex = searchStart; rowIndex < Math.min(rows.length, searchStart + 80); rowIndex += 1) {
      const value = String(rows[rowIndex][index] || "").trim();
      if (/^\d{1,3}\/\d{4}$/.test(value)) {
        return index;
      }
    }
  }

  return 9;
}

function sortByLatestDate(items, fieldName) {
  return items.sort((left, right) => {
    const [ld, lm, ly] = String(left[fieldName] || "00-00-0000").split("-").map(Number);
    const [rd, rm, ry] = String(right[fieldName] || "00-00-0000").split("-").map(Number);
    return new Date(ry, rm - 1, rd) - new Date(ly, lm - 1, ld);
  });
}

function getRowKey(item) {
  return `${normalizeNotification(item.notification)}::${String(item.currency || "").trim().toUpperCase()}`;
}

function applyManualFallbacks(parsedRows) {
  const existingKeys = new Set(parsedRows.map(getRowKey));
  const missingManualRows = MANUAL_EXCHANGE_RATE_OVERRIDES.filter(
    (item) => !existingKeys.has(getRowKey(item))
  );

  return parsedRows.concat(missingManualRows);
}

function findPrimaryExchangeRatesFile() {
  const xlsxFiles = EXCHANGE_RATES_FOLDERS.flatMap((folderPath) =>
    fs.readdirSync(folderPath, { withFileTypes: true })
      .filter((entry) => entry.isFile() && /\.xlsx?$/i.test(entry.name) && !entry.name.startsWith("~$"))
      .map((entry) => {
        const fullPath = path.join(folderPath, entry.name);
        const stats = fs.statSync(fullPath);
        return { fullPath, mtimeMs: stats.mtimeMs };
      })
  )
    .sort((left, right) => right.mtimeMs - left.mtimeMs);

  return xlsxFiles[0]?.fullPath || path.join(EXCHANGE_RATES_FOLDERS[0], "Exchange Rates.xlsx");
}

function getSourceSignature() {
  const filePath = findPrimaryExchangeRatesFile();
  if (!fs.existsSync(filePath)) return "";
  const stats = fs.statSync(filePath);
  return `${filePath}:${stats.size}:${stats.mtimeMs}`;
}

function processExchangeRatesFile(filePath) {
  if (!fs.existsSync(filePath)) {
    exchangeRatesData = [];
    notificationSummaries = [];
    lastFileName = "";
    lastUpdated = "";
    return;
  }

  // Keep date cells as Excel serials. Converting them to JavaScript Date first
  // can shift legal notification dates across a timezone boundary.
  const workbook = XLSX.readFile(filePath, { cellDates: false });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
  const headerRowIndex = detectHeaderRow(rows);

  if (headerRowIndex === -1) {
    throw new Error("Exchange Rates header row not found");
  }

  const headerRow = rows[headerRowIndex];
  const columnIndexes = {};

  headerRow.forEach((header, index) => {
    const normalized = normalizeHeader(header);
    if (!normalized) return;
    if (!columnIndexes.notificationDate && (normalized === "notdate" || normalized === "notificationdate")) {
      columnIndexes.notificationDate = index;
    } else if (!columnIndexes.effectiveDate && normalized === "wef") {
      columnIndexes.effectiveDate = index;
    } else if (!columnIndexes.tillDate && normalized === "till") {
      columnIndexes.tillDate = index;
    } else if (!columnIndexes.currency && normalized === "currencycode") {
      columnIndexes.currency = index;
    } else if (!columnIndexes.currencyName && normalized === "currencyname") {
      columnIndexes.currencyName = index;
    } else if (!columnIndexes.unit && normalized === "currencyunit") {
      columnIndexes.unit = index;
    } else if (!columnIndexes.importRate && normalized === "rateimport") {
      columnIndexes.importRate = index;
    } else if (!columnIndexes.exportRate && normalized === "rateexport") {
      columnIndexes.exportRate = index;
    }
  });

  const mappedIndexes = new Set(Object.values(columnIndexes));
  columnIndexes.notification = detectNotificationColumn(rows, headerRowIndex, mappedIndexes);

  let currentNotification = "";
  let currentNotificationDate = "";
  let currentEffectiveDate = "";
  let currentTillDate = "";

  const parsedRows = [];
  const summaryMap = new Map();

  for (let rowIndex = headerRowIndex + 1; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex];
    const currency = String(row[columnIndexes.currency] || "").trim();

    if (!currency) {
      continue;
    }

    const rowNotification = normalizeNotification(row[columnIndexes.notification]);
    if (rowNotification) {
      currentNotification = rowNotification;
    }

    const rowNotificationDate = formatDate(row[columnIndexes.notificationDate]);
    if (rowNotificationDate) {
      currentNotificationDate = rowNotificationDate;
    }

    const rowEffectiveDate = formatDate(row[columnIndexes.effectiveDate]);
    if (rowEffectiveDate) {
      currentEffectiveDate = rowEffectiveDate;
    }

    const rowTillDate = formatDate(row[columnIndexes.tillDate]);
    if (rowTillDate || row[columnIndexes.tillDate] === "") {
      currentTillDate = rowTillDate;
    }

    const record = {
      id: `${currentNotification || "row"}-${currency}-${rowIndex}`,
      notification: currentNotification,
      notificationDate: currentNotificationDate,
      effectiveDate: currentEffectiveDate,
      tillDate: currentTillDate,
      currency,
      currencyName: String(row[columnIndexes.currencyName] || "").trim(),
      unit: Number(row[columnIndexes.unit] || 0),
      importRate: Number(row[columnIndexes.importRate] || 0),
      exportRate: Number(row[columnIndexes.exportRate] || 0),
      downloadUrl: `/api/exchange-rates/download?notification=${encodeURIComponent(currentNotification)}`,
      source: "excel",
    };

    parsedRows.push(record);

    if (!summaryMap.has(currentNotification)) {
      summaryMap.set(currentNotification, {
        notification: currentNotification,
        notificationDate: currentNotificationDate,
        effectiveDate: currentEffectiveDate,
        tillDate: currentTillDate,
        count: 0,
        downloadUrl: record.downloadUrl,
      });
    }

    summaryMap.get(currentNotification).count += 1;
  }

  const mergedRows = applyManualFallbacks(parsedRows);
  const mergedSummaryMap = new Map();

  mergedRows.forEach((record) => {
    if (!mergedSummaryMap.has(record.notification)) {
      mergedSummaryMap.set(record.notification, {
        notification: record.notification,
        notificationDate: record.notificationDate,
        effectiveDate: record.effectiveDate,
        tillDate: record.tillDate,
        count: 0,
        downloadUrl: record.downloadUrl,
      });
    }

    mergedSummaryMap.get(record.notification).count += 1;
  });

  exchangeRatesData = sortByLatestDate(mergedRows, "notificationDate");
  notificationSummaries = sortByLatestDate(Array.from(mergedSummaryMap.values()), "notificationDate");
  lastUpdated = new Date().toISOString();
  lastFileName = path.basename(filePath);
  sourceSignature = getSourceSignature();
}

function loadExchangeRates() {
  ensureFolder();
  processExchangeRatesFile(findPrimaryExchangeRatesFile());
}

function startWatcher() {
  ensureFolder();
  loadExchangeRates();

  const watcher = chokidar.watch(EXCHANGE_RATES_FOLDERS, {
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 },
  });

  ["add", "change", "unlink"].forEach((eventName) => {
    watcher.on(eventName, (filePath) => {
      if (/\.xlsx?$/i.test(filePath)) loadExchangeRates();
    });
  });

  watcher.on("error", (error) => {
    console.error("Exchange rates watcher error:", error.message);
  });
}

function getExchangeRatesData() {
  if (getSourceSignature() !== sourceSignature) loadExchangeRates();
  const pdfEntries = getNotificationPdfEntries();
  const data = exchangeRatesData.map((record) => {
    const pdfUrl = getNotificationPdfUrl(record, pdfEntries);
    return { ...record, pdfUrl, hasPdf: Boolean(pdfUrl) };
  });
  const notifications = notificationSummaries.map((record) => {
    const pdfUrl = getNotificationPdfUrl(record, pdfEntries);
    return { ...record, pdfUrl, hasPdf: Boolean(pdfUrl) };
  });
  return {
    success: true,
    filename: lastFileName,
    lastUpdated,
    count: data.length,
    notifications,
    data,
  };
}

function getExchangeRateNotificationPdf(criteria) {
  return findNotificationPdf(criteria);
}

function getExchangeRatesByNotification(notification) {
  if (getSourceSignature() !== sourceSignature) loadExchangeRates();
  const normalizedNotification = normalizeNotification(notification);
  return exchangeRatesData.filter((item) => item.notification === normalizedNotification);
}

function buildNotificationWorkbook(notification) {
  const items = getExchangeRatesByNotification(notification);
  if (!items.length) {
    return null;
  }

  const worksheet = XLSX.utils.json_to_sheet(
    items.map((item) => ({
      "Notification No.": item.notification,
      "Notification Date": item.notificationDate.replace(/-/g, "/"),
      WEF: item.effectiveDate.replace(/-/g, "/"),
      Till: item.tillDate ? item.tillDate.replace(/-/g, "/") : "",
      "Currency Code": item.currency,
      "Currency Name": item.currencyName,
      "Currency Unit": item.unit,
      "Rate Import": item.importRate,
      "Rate Export": item.exportRate,
    }))
  );

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Exchange Rates");
  return workbook;
}

module.exports = {
  startWatcher,
  loadExchangeRates,
  getExchangeRatesData,
  getExchangeRatesByNotification,
  getExchangeRateNotificationPdf,
  buildNotificationWorkbook,
};
