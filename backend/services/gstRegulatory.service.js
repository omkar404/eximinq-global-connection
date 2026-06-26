const fs = require("fs");
const XLSX = require("xlsx");
const acts = require("../data/regulatory/gst/acts");
const rules = require("../data/regulatory/gst/rules");
const orders = require("../data/regulatory/gst/orders");
const path = require("path");
const {
  buildPdfDownloadUrl,
  clearPdfCache,
  findBestPdfMatch,
} = require("../utils/regulatoryPdf");

const GST_BASE_FOLDER = path.join(__dirname, "../PDF_DOC/GST");
const GST_DOWNLOAD_ROUTE = "/api/gst/pdf-download";
const GST_FORMS_FILE = path.join(GST_BASE_FOLDER, "Forms", "Forms.xlsx");
const GST_CIRCULARS_FOLDER = path.join(GST_BASE_FOLDER, "Circulars");
const GST_INSTRUCTIONS_FILE = path.join(
  GST_BASE_FOLDER,
  "Instruction And Guidelines",
  "Instruction And Guidelines.xlsx"
);
const GST_NOTIFICATIONS_FOLDER = path.join(GST_BASE_FOLDER, "Notifications");

const GST_NOTIFICATION_FOLDER_MAP = {
  centralTax: "Central Tax",
  centralTaxRate: "Central Tax (Rate)",
  integratedTax: "Integrated Tax",
  integratedTaxRate: "Integrated Tax (Rate)",
  unionTerritoryTax: "Union Territory Tax",
  unionTerritoryTaxRate: "Union Territory Tax (Rate)",
  compensationCess: "Compensation Cess",
  compensationCessRate: "Compensation Cess (Rate)",
};

let gstCache = null;

function getYearHint(item) {
  const value = String(item?.year || item?.date || "").trim();
  const yearMatch = value.match(/(20\d{2})/);
  return yearMatch ? yearMatch[1] : "";
}

function formatDate(value) {
  if (!value) return "";
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number") {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      return `${parsed.y}-${String(parsed.m).padStart(2, "0")}-${String(parsed.d).padStart(2, "0")}`;
    }
  }

  return String(value).trim();
}

function getFinancialYearFromYear(yearValue) {
  const year = Number(yearValue);
  if (!Number.isFinite(year)) return null;
  return `${year}-${String(year + 1).slice(-2)}`;
}

function findHeaderRowIndex(rows, headerValue) {
  for (let index = 0; index < Math.min(10, rows.length); index += 1) {
    const firstCell = String(rows[index]?.[0] || "").trim();
    if (firstCell === headerValue || firstCell === `${headerValue} `) return index;
  }

  return -1;
}

function loadGstFormsFromFolder() {
  if (!fs.existsSync(GST_FORMS_FILE)) return [];

  const workbook = XLSX.readFile(GST_FORMS_FILE, { cellDates: true });
  const items = [];

  workbook.SheetNames.forEach((rawSheetName) => {
    const sheetName = String(rawSheetName || "").trim();
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[rawSheetName], { header: 1, defval: "" });
    if (rows.length < 2) return;

    const headerRowIndex = findHeaderRowIndex(rows, "Form Number");
    const dataRows = rows.slice((headerRowIndex >= 0 ? headerRowIndex : 0) + 1);
    const folderCategory = sheetName === "All Forms" ? "All Forms - Hindi" : sheetName;

    dataRows.forEach((row, index) => {
      const formNumber = String(row[0] || "").trim();
      const formName = String(row[1] || "").trim();
      if (!formNumber || !formName || formNumber === "Form Number" || formName === "Form Name") return;

      items.push({
        id: `gst-form-${normalizeKey(folderCategory)}-${index}`,
        type: "forms",
        folderCategory,
        formNumber,
        formName,
        title: formName,
        description: String(row[2] || "").trim(),
        financialYear: "2026-27",
      });
    });
  });

  return items;
}

function loadGstCircularsFromFolder() {
  if (!fs.existsSync(GST_CIRCULARS_FOLDER)) return [];

  const items = [];
  const folders = fs.readdirSync(GST_CIRCULARS_FOLDER, { withFileTypes: true }).filter((entry) => entry.isDirectory());

  folders.forEach((folder) => {
    const folderPath = path.join(GST_CIRCULARS_FOLDER, folder.name);
    const excelPath = path.join(folderPath, `${folder.name}.xlsx`);
    if (!fs.existsSync(excelPath)) return;

    const workbook = XLSX.readFile(excelPath, { cellDates: true });
    workbook.SheetNames.forEach((sheetName) => {
      const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: "" });
      if (rows.length < 2) return;

      const headerRowIndex = findHeaderRowIndex(rows, "Number");
      const dataRows = rows.slice((headerRowIndex >= 0 ? headerRowIndex : 0) + 1);

      dataRows.forEach((row, index) => {
        const number = String(row[0] || "").trim();
        const subject = String(row[2] || "").trim();
        if (!number || number === "Number" || !subject) return;

        items.push({
          id: `gst-circular-${normalizeKey(folder.name)}-${sheetName}-${index}`,
          type: "circulars",
          folderCategory: folder.name,
          number,
          date: formatDate(row[1]),
          year: String(sheetName).trim(),
          financialYear: getFinancialYearFromYear(sheetName),
          subject,
        });
      });
    });
  });

  return items;
}

function loadGstInstructionsFromFolder() {
  if (!fs.existsSync(GST_INSTRUCTIONS_FILE)) return [];

  const workbook = XLSX.readFile(GST_INSTRUCTIONS_FILE, { cellDates: true });
  const items = [];

  workbook.SheetNames.forEach((sheetName) => {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: "" });
    if (rows.length < 2) return;

    const headerRowIndex = findHeaderRowIndex(rows, "Number");
    const dataRows = rows.slice((headerRowIndex >= 0 ? headerRowIndex : 0) + 1);

    dataRows.forEach((row, index) => {
      const number = String(row[0] || "").trim();
      const subject = String(row[2] || "").trim();
      if (!number || number === "Number" || !subject) return;

      items.push({
        id: `gst-instruction-${sheetName}-${index}`,
        type: "instructions",
        folderCategory: "Instruction And Guidelines",
        number,
        date: formatDate(row[1]),
        year: String(sheetName).trim(),
        financialYear: getFinancialYearFromYear(sheetName),
        subject,
      });
    });
  });

  return items;
}

function loadGstNotificationsFromFolder() {
  if (!fs.existsSync(GST_NOTIFICATIONS_FOLDER)) return {};

  const notificationsData = Object.fromEntries(
    Object.keys(GST_NOTIFICATION_FOLDER_MAP).map((key) => [key, []])
  );

  Object.entries(GST_NOTIFICATION_FOLDER_MAP).forEach(([categoryKey, folderName]) => {
    const folderPath = path.join(GST_NOTIFICATIONS_FOLDER, folderName);
    const excelPath = path.join(folderPath, `${folderName}.xlsx`);
    if (!fs.existsSync(excelPath)) return;

    const workbook = XLSX.readFile(excelPath, { cellDates: true });
    workbook.SheetNames.forEach((sheetName) => {
      const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: "" });
      if (rows.length < 2) return;

      const headerRowIndex = findHeaderRowIndex(rows, "Number");
      const dataRows = rows.slice((headerRowIndex >= 0 ? headerRowIndex : 0) + 1);

      dataRows.forEach((row, index) => {
        const number = String(row[0] || "").trim();
        const subject = String(row[2] || "").trim();
        if (!number || number === "Number" || !subject) return;

        notificationsData[categoryKey].push({
          id: `gst-notification-${normalizeKey(categoryKey)}-${sheetName}-${index}`,
          type: "notifications",
          category: categoryKey,
          folderCategory: folderName,
          number,
          date: formatDate(row[1]),
          year: String(sheetName).trim(),
          financialYear: getFinancialYearFromYear(sheetName),
          subject,
        });
      });
    });
  });

  return notificationsData;
}

function normalizeKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getGstDataStore() {
  if (gstCache) return gstCache;

  gstCache = {
    acts,
    rules,
    forms: loadGstFormsFromFolder(),
    notifications: loadGstNotificationsFromFolder(),
    circulars: loadGstCircularsFromFolder(),
    instructions: loadGstInstructionsFromFolder(),
    orders,
  };

  return gstCache;
}

function getGstPdfMetadata(filePath, fallbackUrl) {
  return {
    pdfPath: filePath || null,
    pdfUrl: filePath ? buildPdfDownloadUrl(GST_DOWNLOAD_ROUTE, GST_BASE_FOLDER, filePath) : fallbackUrl || null,
    pdfFileName: filePath ? path.basename(filePath) : null,
  };
}

function getGstFolderCategory(filePath, type) {
  if (!filePath) return null;

  if (type === "forms") {
    return path.basename(path.dirname(filePath));
  }

  if (type === "circulars") {
    return path.basename(path.dirname(path.dirname(filePath)));
  }

  if (type === "acts" || type === "rules") {
    return path.basename(path.dirname(filePath));
  }

  return null;
}

function getGstPdfForRow(item, type, category) {
  if (!item) return getGstPdfMetadata(null, null);

  if (type === "acts") {
    return getGstPdfMetadata(
      findBestPdfMatch(GST_BASE_FOLDER, [item.act, item.title], {
        pathHints: ["Acts", item.act],
      }),
      item.pdfUrl
    );
  }

  if (type === "rules") {
    return getGstPdfMetadata(
      findBestPdfMatch(GST_BASE_FOLDER, [item.ruleSet, item.ruleName, item.ruleNumber], {
        pathHints: ["Rules", item.ruleSet || item.ruleName],
      }),
      item.pdfUrl
    );
  }

  if (type === "forms") {
    return getGstPdfMetadata(
      findBestPdfMatch(GST_BASE_FOLDER, [item.formNumber, item.formName, item.title], {
        pathHints: ["Forms", item.folderCategory],
      }),
      item.pdfUrl
    );
  }

  if (type === "notifications") {
    return getGstPdfMetadata(
      findBestPdfMatch(GST_BASE_FOLDER, [item.number], {
        pathHints: ["Notifications", GST_NOTIFICATION_FOLDER_MAP[category], getYearHint(item)],
      }),
      item.pdfUrl
    );
  }

  if (type === "circulars") {
    return getGstPdfMetadata(
      findBestPdfMatch(GST_BASE_FOLDER, [item.number], {
        pathHints: ["Circulars", item.folderCategory, getYearHint(item)],
      }),
      item.pdfUrl
    );
  }

  if (type === "instructions") {
    return getGstPdfMetadata(
      findBestPdfMatch(GST_BASE_FOLDER, [item.number], {
        pathHints: ["Instruction And Guidelines", getYearHint(item)],
      }),
      item.pdfUrl
    );
  }

  if (type === "orders") {
    return getGstPdfMetadata(
      findBestPdfMatch(GST_BASE_FOLDER, [item.number, item.subject], {
        pathHints: ["Orders", getYearHint(item)],
      }),
      item.pdfUrl
    );
  }

  return getGstPdfMetadata(null, item.pdfUrl);
}

function enrichGstRecord(item, type, category) {
  const pdfMetadata = getGstPdfForRow(item, type, category);
  return {
    ...item,
    ...pdfMetadata,
    folderCategory: item.folderCategory || getGstFolderCategory(pdfMetadata.pdfPath, type),
  };
}

function getGstDataByType(type) {
  const gstData = getGstDataStore();
  if (!Object.prototype.hasOwnProperty.call(gstData, type) || type === "notifications") {
    throw new Error(`Unknown GST type: ${type}`);
  }

  clearPdfCache(GST_BASE_FOLDER);
  return gstData[type].map((item) => enrichGstRecord(item, type));
}

function getNotificationsByCategory(category) {
  const gstData = getGstDataStore();
  if (!Object.prototype.hasOwnProperty.call(gstData.notifications, category)) {
    throw new Error(`Unknown GST notification category: ${category}`);
  }

  clearPdfCache(GST_BASE_FOLDER);
  return gstData.notifications[category].map((item) =>
    enrichGstRecord(item, "notifications", category)
  );
}

function getAmendmentHistory(documentName) {
  const document = acts.find((item) => item.act === documentName);
  return document?.amendmentHistory || [];
}

function getAllGstData() {
  const gstData = getGstDataStore();
  clearPdfCache(GST_BASE_FOLDER);
  return {
    success: true,
    lastUpdated: new Date().toISOString(),
    data: {
      acts: gstData.acts.map((item) => enrichGstRecord(item, "acts")),
      rules: gstData.rules.map((item) => enrichGstRecord(item, "rules")),
      forms: gstData.forms.map((item) => enrichGstRecord(item, "forms")),
      notifications: Object.fromEntries(
        Object.entries(gstData.notifications).map(([category, items]) => [
          category,
          items.map((item) => enrichGstRecord(item, "notifications", category)),
        ])
      ),
      circulars: gstData.circulars.map((item) => enrichGstRecord(item, "circulars")),
      instructions: gstData.instructions.map((item) => enrichGstRecord(item, "instructions")),
      orders: gstData.orders.map((item) => enrichGstRecord(item, "orders")),
    },
  };
}

function resolveGstPdfDownloadPath(relativeFilePath) {
  const { resolvePdfDownloadPath } = require("../utils/regulatoryPdf");
  return resolvePdfDownloadPath(GST_BASE_FOLDER, relativeFilePath);
}

module.exports = {
  getAllGstData,
  getAmendmentHistory,
  getGstDataByType,
  getNotificationsByCategory,
  resolveGstPdfDownloadPath,
};
