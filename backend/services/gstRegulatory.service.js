const fs = require("fs");
const XLSX = require("xlsx");
const legacyActs = require("../data/regulatory/gst/acts");
const legacyOrders = require("../data/regulatory/gst/orders");
const path = require("path");
const {
  buildPdfDownloadUrl,
  clearPdfCache,
  findBestPdfMatch,
} = require("../utils/regulatoryPdf");

const GST_BASE_FOLDER = path.join(__dirname, "../PDF_DOC/GST");
const GST_DOWNLOAD_ROUTE = "/api/gst/pdf-download";
const GST_ACTS_FOLDER = path.join(GST_BASE_FOLDER, "Acts");
const GST_RULES_FOLDER = path.join(GST_BASE_FOLDER, "Rules");
const GST_FORMS_FILE = path.join(GST_BASE_FOLDER, "Forms", "Forms.xlsx");
const GST_CIRCULARS_FOLDER = path.join(GST_BASE_FOLDER, "Circulars");
const GST_INSTRUCTIONS_FILE = path.join(
  GST_BASE_FOLDER,
  "Instruction And Guidelines",
  "Instruction And Guidelines.xlsx"
);
const GST_NOTIFICATIONS_FOLDER = path.join(GST_BASE_FOLDER, "Notifications");
const GST_ORDERS_FOLDER = path.join(GST_BASE_FOLDER, "Orders");

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
let gstCacheSignature = "";

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

  const workbook = XLSX.readFile(GST_FORMS_FILE, { cellDates: false });
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

    const workbook = XLSX.readFile(excelPath, { cellDates: false });
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

  const workbook = XLSX.readFile(GST_INSTRUCTIONS_FILE, { cellDates: false });
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

function loadGstOrdersFromFolder() {
  if (!fs.existsSync(GST_ORDERS_FOLDER)) return legacyOrders;
  const items = [];

  getExcelFiles(GST_ORDERS_FOLDER).forEach((filePath) => {
    const workbook = XLSX.readFile(filePath, { cellDates: false });
    workbook.SheetNames.forEach((sheetName) => {
      const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: "" });
      const headerRowIndex = findHeaderRowIndex(rows, "Number");
      rows.slice((headerRowIndex >= 0 ? headerRowIndex : 0) + 1).forEach((row, index) => {
        if (!row.some((cell) => String(cell || "").trim())) return;
        const number = String(row[0] || "").trim();
        const subject = String(row[2] || row[1] || "").trim();
        if (!number || number === "Number") return;
        items.push({
          id: `gst-order-${normalizeKey(path.basename(filePath))}-${normalizeKey(sheetName)}-${index}`,
          type: "orders",
          folderCategory: path.basename(path.dirname(filePath)),
          number,
          date: formatDate(row[1]),
          year: String(sheetName).trim(),
          financialYear: getFinancialYearFromYear(sheetName),
          subject,
          sourceFileName: path.basename(filePath),
          sourceSheet: sheetName,
        });
      });
    });
  });

  return items.length > 0 ? items : legacyOrders;
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

    const workbook = XLSX.readFile(excelPath, { cellDates: false });
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

function normalizeCell(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\r\n?/g, "\n")
    .trim();
}

function getExcelFiles(folderPath) {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(folderPath, entry.name);
      if (entry.isDirectory()) return getExcelFiles(entryPath);
      if (entry.name.startsWith("._") || entry.name.startsWith("~$")) return [];
      return /\.xlsx?$/i.test(entry.name) ? [entryPath] : [];
    })
    .sort((left, right) => left.localeCompare(right));
}

function getGstSourceFiles(folderPath) {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(folderPath, entry.name);
      if (entry.isDirectory()) return getGstSourceFiles(entryPath);
      if (entry.name.startsWith("._") || entry.name.startsWith("~$")) return [];
      return /\.(xlsx?|pdf)$/i.test(entry.name) ? [entryPath] : [];
    })
    .sort((left, right) => left.localeCompare(right));
}

function getGstFolderSignature() {
  return getGstSourceFiles(GST_BASE_FOLDER)
    .map((filePath) => {
      const stats = fs.statSync(filePath);
      return `${filePath}:${stats.size}:${stats.mtimeMs}`;
    })
    .join("|");
}

function parseRuleHeading(value) {
  const heading = normalizeCell(value);
  const match = heading.match(/^rule\s+([0-9]+[a-z]*)\s*[.\-:–—]*\s*(.*)$/i);
  if (!match) return null;

  return {
    number: match[1].toUpperCase(),
    title: match[2].replace(/\s*[-–—]\s*$/, "").trim() || `Rule ${match[1]}`,
    heading,
  };
}

function getRuleChapterLabel(sheetName, rows) {
  const chapterHeading = rows
    .flat()
    .map(normalizeCell)
    .find((value) => /^chapter\s+[ivxlcdm0-9]+\b/i.test(value));
  if (chapterHeading) return chapterHeading;

  const normalizedSheet = normalizeCell(sheetName);
  if (normalizedSheet && !/^sheet\d*$/i.test(normalizedSheet)) return normalizedSheet;
  return "Rules";
}

function parseRuleWorkbook(filePath, folderName) {
  const workbook = XLSX.readFile(filePath, { cellDates: false });
  const chaptersById = new Map();
  let ruleSetTitle = normalizeCell(folderName);
  let ruleSequence = 0;

  workbook.SheetNames.forEach((sheetName) => {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
      defval: "",
      raw: false,
    });
    const workbookTitle = rows.flat().map(normalizeCell).find(Boolean);
    if (
      workbookTitle &&
      !parseRuleHeading(workbookTitle) &&
      !/^chapter\b/i.test(workbookTitle) &&
      /\brules?\b/i.test(workbookTitle)
    ) {
      ruleSetTitle = workbookTitle;
    }

    const chapterLabel = getRuleChapterLabel(sheetName, rows);
    const chapterId = normalizeKey(chapterLabel) || "rules";
    if (!chaptersById.has(chapterId)) {
      chaptersById.set(chapterId, {
        id: chapterId,
        label: chapterLabel,
        title: chapterLabel,
        rules: [],
      });
    }

    let activeRule = null;
    const commitRule = () => {
      if (!activeRule) return;
      ruleSequence += 1;
      const label = `Rule ${activeRule.number}`;
      const content = activeRule.content.filter(Boolean);
      chaptersById.get(chapterId).rules.push({
        id: `${chapterId}-${normalizeKey(label)}-${ruleSequence}`,
        kind: "rule",
        number: activeRule.number,
        label,
        title: activeRule.title,
        heading: activeRule.heading,
        content,
        searchableText: [label, activeRule.title, ...content].join(" "),
      });
      activeRule = null;
    };

    rows.forEach((row) => {
      const cells = row.map(normalizeCell).filter(Boolean);
      if (cells.length === 0) return;
      const marker = parseRuleHeading(cells[0]);
      if (marker) {
        commitRule();
        activeRule = { ...marker, content: cells.slice(1) };
      } else if (activeRule) {
        activeRule.content.push(...cells);
      }
    });
    commitRule();
  });

  const id = normalizeKey(folderName || ruleSetTitle);
  const pdfMetadata = getGstPdfMetadata(
    findBestPdfMatch(GST_RULES_FOLDER, [ruleSetTitle, folderName], { pathHints: [folderName] }),
    null
  );
  const chapters = Array.from(chaptersById.values())
    .filter((chapter) => chapter.rules.length > 0)
    .map((chapter) => ({ ...chapter, ruleCount: chapter.rules.length }));

  return {
    id,
    type: "rules",
    ruleSet: ruleSetTitle,
    title: ruleSetTitle,
    year: String(ruleSetTitle.match(/\b(20\d{2})\b/)?.[1] || ""),
    sourceFileName: path.basename(filePath),
    chapters,
    ruleCount: chapters.reduce((total, chapter) => total + chapter.rules.length, 0),
    ...pdfMetadata,
  };
}

function loadGstRulesFromFolder() {
  return getExcelFiles(GST_RULES_FOLDER)
    .map((filePath) => parseRuleWorkbook(filePath, path.basename(path.dirname(filePath))))
    .filter((ruleSet) => ruleSet.ruleCount > 0)
    .sort((left, right) => left.title.localeCompare(right.title));
}

function flattenGstRules(ruleDocuments) {
  return ruleDocuments.flatMap((ruleSet) =>
    ruleSet.chapters.flatMap((chapter) =>
      chapter.rules.map((rule) => ({
        id: `${ruleSet.id}-${rule.id}`,
        type: "rules",
        ruleName: ruleSet.title,
        ruleSet: ruleSet.title,
        ruleSetId: ruleSet.id,
        year: ruleSet.year,
        chapter: chapter.label,
        chapterId: chapter.id,
        ruleNumber: rule.number,
        ruleId: rule.id,
        title: rule.title,
        description: rule.content.join("\n\n"),
        content: rule.content,
        pdfUrl: ruleSet.pdfUrl,
        pdfFileName: ruleSet.pdfFileName,
      }))
    )
  );
}

function parseSectionHeading(value) {
  const heading = normalizeCell(value);
  const sectionMatch = heading.match(/^section\s+([0-9]+[a-z]?)\s*[.\-:]*\s*(.*)$/i);
  if (sectionMatch) {
    return {
      kind: "section",
      number: sectionMatch[1].toUpperCase(),
      title: sectionMatch[2].replace(/\s*[-–—]\s*$/, "").trim() || `Section ${sectionMatch[1]}`,
      heading,
    };
  }

  const scheduleMatch = heading.match(/^schedule\s*([ivxlcdm0-9]*)\s*[.\-:]*\s*(.*)$/i);
  if (scheduleMatch) {
    const number = scheduleMatch[1] || "";
    return {
      kind: "schedule",
      number: number.toUpperCase(),
      title: scheduleMatch[2].trim() || `Schedule${number ? ` ${number.toUpperCase()}` : ""}`,
      heading,
    };
  }

  if (/^introduction\b/i.test(heading)) {
    return { kind: "introduction", number: "", title: "Introduction", heading };
  }

  return null;
}

function getChapterLabel(sheetName, sectionKind) {
  const normalizedSheet = normalizeCell(sheetName);
  if (sectionKind === "schedule" || /schedule/i.test(normalizedSheet)) return "Schedules";
  if (normalizedSheet && !/^sheet\d*$/i.test(normalizedSheet) && normalizedSheet !== "Section") {
    return normalizedSheet;
  }
  return "Act Sections";
}

function parseActWorkbook(filePath, folderName) {
  const workbook = XLSX.readFile(filePath, { cellDates: false });
  const chaptersById = new Map();
  let actTitle = normalizeCell(folderName);
  let sectionSequence = 0;

  workbook.SheetNames.forEach((sheetName) => {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
      defval: "",
      raw: false,
    });
    const workbookTitle = rows.flat().map(normalizeCell).find(Boolean);
    if (workbookTitle && !parseSectionHeading(workbookTitle)) actTitle = workbookTitle;

    let activeSection = null;

    const commitSection = () => {
      if (!activeSection) return;
      const content = activeSection.content.filter(Boolean);
      const chapterLabel = getChapterLabel(sheetName, activeSection.kind);
      const chapterId = normalizeKey(chapterLabel) || "act-sections";
      if (!chaptersById.has(chapterId)) {
        chaptersById.set(chapterId, {
          id: chapterId,
          label: chapterLabel,
          title: chapterLabel,
          sections: [],
        });
      }

      sectionSequence += 1;
      const sectionLabel =
        activeSection.kind === "section"
          ? `Section ${activeSection.number}`
          : activeSection.kind === "schedule"
            ? `Schedule${activeSection.number ? ` ${activeSection.number}` : ""}`
            : "Introduction";
      const sectionId = `${chapterId}-${normalizeKey(sectionLabel)}-${sectionSequence}`;
      chaptersById.get(chapterId).sections.push({
        id: sectionId,
        kind: activeSection.kind,
        number: activeSection.number,
        label: sectionLabel,
        title: activeSection.title,
        heading: activeSection.heading,
        content,
        searchableText: [sectionLabel, activeSection.title, ...content].join(" "),
      });
      activeSection = null;
    };

    rows.forEach((row, rowIndex) => {
      const cells = row.map(normalizeCell).filter(Boolean);
      if (cells.length === 0) return;

      const marker = parseSectionHeading(cells[0]);
      if (marker) {
        commitSection();
        activeSection = { ...marker, content: cells.slice(1) };
        return;
      }

      if (!activeSection) {
        if (rowIndex <= 3 || cells.every((cell) => cell === actTitle)) return;
        activeSection = {
          kind: "introduction",
          number: "",
          title: "Introduction",
          heading: "Introduction",
          content: [],
        };
      }
      activeSection.content.push(...cells);
    });

    commitSection();
  });

  const id = normalizeKey(folderName || actTitle);
  const pdfMetadata = getGstPdfMetadata(
    findBestPdfMatch(GST_ACTS_FOLDER, [actTitle, folderName], {
      pathHints: [folderName],
    }),
    null
  );
  const chapters = Array.from(chaptersById.values()).map((chapter) => ({
    ...chapter,
    sectionCount: chapter.sections.length,
  }));

  return {
    id,
    type: "acts",
    act: actTitle,
    title: actTitle,
    sourceFileName: path.basename(filePath),
    chapters,
    sectionCount: chapters.reduce((total, chapter) => total + chapter.sections.length, 0),
    ...pdfMetadata,
  };
}

function loadGstActsFromFolder() {
  return getExcelFiles(GST_ACTS_FOLDER)
    .map((filePath) => parseActWorkbook(filePath, path.basename(path.dirname(filePath))))
    .filter((act) => act.sectionCount > 0)
    .sort((left, right) => left.title.localeCompare(right.title));
}

function flattenGstActs(actDocuments) {
  return actDocuments.flatMap((act) =>
    act.chapters.flatMap((chapter) =>
      chapter.sections.map((section) => ({
        id: `${act.id}-${section.id}`,
        type: "acts",
        act: act.title,
        actId: act.id,
        chapter: chapter.label,
        chapterId: chapter.id,
        section: section.label,
        sectionId: section.id,
        title: section.title,
        description: section.content.join("\n\n"),
        content: section.content,
        pdfUrl: act.pdfUrl,
        pdfFileName: act.pdfFileName,
      }))
    )
  );
}

function getGstDataStore() {
  const currentSignature = getGstFolderSignature();
  if (gstCache && currentSignature === gstCacheSignature) return gstCache;

  clearPdfCache(GST_BASE_FOLDER);
  const actDocuments = loadGstActsFromFolder();
  const ruleDocuments = loadGstRulesFromFolder();

  gstCache = {
    actDocuments,
    ruleDocuments,
    acts: flattenGstActs(actDocuments),
    rules: flattenGstRules(ruleDocuments),
    forms: loadGstFormsFromFolder(),
    notifications: loadGstNotificationsFromFolder(),
    circulars: loadGstCircularsFromFolder(),
    instructions: loadGstInstructionsFromFolder(),
    orders: loadGstOrdersFromFolder(),
  };
  gstCacheSignature = currentSignature;

  return gstCache;
}

function getGstRulesCatalog() {
  return getGstDataStore().ruleDocuments.map((ruleSet) => ({
    id: ruleSet.id,
    title: ruleSet.title,
    ruleSet: ruleSet.ruleSet,
    year: ruleSet.year,
    ruleCount: ruleSet.ruleCount,
    sourceFileName: ruleSet.sourceFileName,
    pdfUrl: ruleSet.pdfUrl,
    pdfFileName: ruleSet.pdfFileName,
    chapters: ruleSet.chapters.map((chapter) => ({
      id: chapter.id,
      label: chapter.label,
      title: chapter.title,
      ruleCount: chapter.ruleCount,
    })),
  }));
}

function getGstRuleById(ruleId) {
  return getGstDataStore().ruleDocuments.find((ruleSet) => ruleSet.id === ruleId) || null;
}

function getGstActsCatalog() {
  return getGstDataStore().actDocuments.map((act) => ({
    id: act.id,
    title: act.title,
    act: act.act,
    sectionCount: act.sectionCount,
    sourceFileName: act.sourceFileName,
    pdfUrl: act.pdfUrl,
    pdfFileName: act.pdfFileName,
    chapters: act.chapters.map((chapter) => ({
      id: chapter.id,
      label: chapter.label,
      title: chapter.title,
      sectionCount: chapter.sectionCount,
    })),
  }));
}

function getGstActById(actId) {
  return getGstDataStore().actDocuments.find((act) => act.id === actId) || null;
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
  const document = legacyActs.find((item) => item.act === documentName);
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
  getGstActsCatalog,
  getGstActById,
  getGstRulesCatalog,
  getGstRuleById,
  getNotificationsByCategory,
  resolveGstPdfDownloadPath,
};
