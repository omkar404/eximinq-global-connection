const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

const DGFT_BASE_FOLDER = path.join(__dirname, "../PDF_DOC/DGFT");
const EXCEL_FOLDER = path.join(DGFT_BASE_FOLDER, "Foreign_Trade_Policy");
const PDF_ROOT_FOLDER = path.join(DGFT_BASE_FOLDER, "Foreign_Trade_Policy_PDF");

const CATEGORY_CONFIG = {
  anf: {
    sourceKey: "anf",
    label: "Aayat Niryat Form",
    folderAliases: ["aayatniryatformpdf", "aayatniryatform"],
    matchType: "name",
  },
  appendices: {
    sourceKey: "appendices",
    label: "Appendices",
    folderAliases: ["appendicespdf", "appendices"],
    matchType: "name",
  },
  ftp: {
    sourceKey: "ftp",
    label: "Foreign Trade Policy",
    folderAliases: ["foreigntradepolicypdf", "foreigntradepolicy"],
    matchType: "chapter",
  },
  fts: {
    sourceKey: "fts",
    label: "Foreign Trade Statement",
    folderAliases: ["foreigntradestatementpdf", "foreigntradestatement"],
    matchType: "single",
  },
  hop: {
    sourceKey: "hop",
    label: "Handbook of Procedures",
    folderAliases: ["handbookofprocedurespdf", "handbookofprocedures"],
    matchType: "chapter",
  },
  ftdr_act: {
    sourceKey: "ftdr_act",
    label: "FT D&R Act",
    folderAliases: ["ftdractpdf", "ftdract", "ftdandractpdf", "ftdandract"],
    matchType: "number",
    numberLabel: "actno",
  },
  ftdr_rules: {
    sourceKey: "ftdr_rules",
    label: "FT D&R Rules",
    folderAliases: ["ftdrrulespdf", "ftdrrules", "ftdandrrulespdf", "ftdandrrules"],
    matchType: "number",
    numberLabel: "ruleno",
  },
  rodtep: {
    sourceKey: "rodtep",
    label: "RoDTEP Rates",
    folderAliases: ["rodteppdf", "rodtep"],
    matchType: "rodtep",
  },
  scomet_export: {
    sourceKey: "scomet_export",
    label: "Export Policy (SCOMET)",
    folderAliases: ["exportpolicyitchs2022pdf", "exportpolicypdf", "exportpolicy"],
    matchType: "chapter-number",
  },
  scomet_import: {
    sourceKey: "scomet_import",
    label: "Import Policy (SCOMET)",
    folderAliases: ["importpolicyitchs2022pdf", "importpolicypdf", "importpolicy"],
    matchType: "chapter-number",
  },
  scomet_only: {
    sourceKey: "scomet_only",
    label: "SCOMET",
    folderAliases: ["scometpdf", "scomet"],
    matchType: "list-number",
  },
};

const categorySourceFile = Object.fromEntries(
  Object.values(CATEGORY_CONFIG).map((config) => [config.sourceKey, ""])
);

let anfData = [];
let appendicesData = [];
let ftpData = [];
let ftsData = [];
let hopData = [];
let ftdrActData = [];
let ftdrRulesData = [];
let rodtepData = [];
let scometExportData = [];
let scometImportData = [];
let scometOnlyData = [];

if (!fs.existsSync(EXCEL_FOLDER)) {
  fs.mkdirSync(EXCEL_FOLDER, { recursive: true });
  console.log(`Created Excel folder: ${EXCEL_FOLDER}`);
}

if (!fs.existsSync(PDF_ROOT_FOLDER)) {
  fs.mkdirSync(PDF_ROOT_FOLDER, { recursive: true });
  console.log(`Created PDF folder: ${PDF_ROOT_FOLDER}`);
}

function normalizeString(value) {
  if (!value) return "";
  return value
    .toString()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");
}

function isValidExcelFile(fileName) {
  return (
    fileName &&
    fileName.toLowerCase().endsWith(".xlsx") &&
    !path.basename(fileName).startsWith("~$")
  );
}

function listPdfFiles(folderPath) {
  if (!folderPath || !fs.existsSync(folderPath)) return [];

  return fs.readdirSync(folderPath, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(folderPath, entry.name);
    if (entry.isDirectory()) return listPdfFiles(entryPath);
    return path.extname(entry.name).toLowerCase() === ".pdf" ? [entryPath] : [];
  });
}

function getPdfFolderForCategory(category) {
  const config = CATEGORY_CONFIG[category];
  if (!config || !fs.existsSync(PDF_ROOT_FOLDER)) return null;

  const allDirectories = fs
    .readdirSync(PDF_ROOT_FOLDER, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  return (
    allDirectories
      .map((entry) => path.join(PDF_ROOT_FOLDER, entry.name))
      .find((dirPath) => {
        const normalizedDirName = normalizeString(path.basename(dirPath));
        return config.folderAliases.some((alias) => {
          const normalizedAlias = normalizeString(alias);
          return (
            normalizedDirName === normalizedAlias ||
            normalizedDirName.includes(normalizedAlias) ||
            normalizedAlias.includes(normalizedDirName)
          );
        });
      }) || null
  );
}

function extractLeadingNumber(value) {
  const match = String(value || "").match(/^(\d+(?:-\d+)?)/);
  return match ? match[1] : "";
}

function extractChapterNumber(value) {
  const match = String(value || "").match(/chapter\s*0*(\d+)/i);
  return match ? String(Number(match[1])) : "";
}

function extractChapterNumberFromFileName(value) {
  const match = String(value || "").match(/chapterno0*(\d+)/i);
  return match ? String(Number(match[1])) : "";
}

function extractListNumberFromFileName(value) {
  const match = String(value || "").match(/listno0*(\d+)/i);
  return match ? String(Number(match[1])) : "";
}

function getPdfMatchCandidates(category, row = {}) {
  const config = CATEGORY_CONFIG[category];
  const folderPath = getPdfFolderForCategory(category);
  if (!config || !folderPath) return [];

  const pdfFiles = listPdfFiles(folderPath);
  if (!pdfFiles.length) return [];

  if (config.matchType === "single") {
    return pdfFiles.length ? [pdfFiles[0]] : [];
  }

  if (config.matchType === "chapter") {
    const chapterNumber = extractChapterNumber(row.description || row.name || row.title);
    if (!chapterNumber) return [];

    return pdfFiles.filter((filePath) => {
      const normalizedName = normalizeString(path.parse(filePath).name);
      return extractChapterNumberFromFileName(normalizedName) === chapterNumber;
    });
  }

  if (config.matchType === "number") {
    const recordNumber = normalizeString(extractLeadingNumber(row.srNo));
    if (!recordNumber) return [];

    return pdfFiles.filter((filePath) => {
      const normalizedName = normalizeString(path.parse(filePath).name);
      if (config.numberLabel && normalizedName.includes(config.numberLabel)) {
        return normalizedName.endsWith(recordNumber) || normalizedName.includes(`${config.numberLabel}${recordNumber}`);
      }

      return (
        normalizedName.endsWith(recordNumber) ||
        normalizedName.includes(`no${recordNumber}`) ||
        normalizedName.includes(recordNumber)
      );
    });
  }

  if (config.matchType === "rodtep") {
    const recordNumber = normalizeString(extractLeadingNumber(row.srNo));
    if (!recordNumber) return [];

    return pdfFiles.filter((filePath) => {
      const normalizedName = normalizeString(path.parse(filePath).name);
      return normalizedName === recordNumber;
    });
  }

  if (config.matchType === "list-number") {
    const recordNumber = String(Number(extractLeadingNumber(row.srNo)));
    if (!recordNumber || recordNumber === "NaN") return [];

    return pdfFiles.filter((filePath) => {
      const normalizedName = normalizeString(path.parse(filePath).name);
      return extractListNumberFromFileName(normalizedName) === recordNumber;
    });
  }

  if (config.matchType === "chapter-number") {
    const recordNumber = String(Number(extractLeadingNumber(row.srNo)));
    if (!recordNumber || recordNumber === "NaN") return [];

    return pdfFiles.filter((filePath) => {
      const normalizedName = normalizeString(path.parse(filePath).name);
      return extractChapterNumberFromFileName(normalizedName) === recordNumber;
    });
  }

  const lookupKeys = [row.name, row.formName, row.appendix, row.title, row.srNo].filter(Boolean);

  for (const key of lookupKeys) {
    const normalizedKey = normalizeString(key);
    if (!normalizedKey) continue;

    const exactMatches = pdfFiles.filter((filePath) => {
      const normalizedName = normalizeString(path.parse(filePath).name);
      return normalizedName === normalizedKey;
    });
    if (exactMatches.length) return exactMatches;

    const partialMatches = pdfFiles.filter((filePath) => {
      const normalizedName = normalizeString(path.parse(filePath).name);
      return normalizedName.startsWith(normalizedKey) || normalizedKey.startsWith(normalizedName);
    });
    if (partialMatches.length) return partialMatches;
  }

  return [];
}

function enrichRecordWithPdf(row, category) {
  const matches = getPdfMatchCandidates(category, row);
  return {
    ...row,
    sectionKey: category,
    pdfAvailable: matches.length > 0,
    pdfFiles: matches.map((filePath) => ({
      fileName: path.basename(filePath),
      category,
    })),
  };
}

function resolvePdfDownloadPath(category, fileName) {
  const folderPath = getPdfFolderForCategory(category);
  if (!folderPath || !fileName) return null;

  const safeFileName = path.basename(fileName);
  return (
    listPdfFiles(folderPath).find(
      (filePath) => path.basename(filePath).toLowerCase() === safeFileName.toLowerCase()
    ) || null
  );
}

function processSheet(sheetData, targetArray, categoryName, sourceFile) {
  if (!sheetData || sheetData.length < 3) return;

  let headerRowIndex = -1;
  for (let i = 0; i < Math.min(sheetData.length, 15); i += 1) {
    const row = sheetData[i];
    if (
      row &&
      row.length &&
      (row[0] === "Sr.No." || row[0] === "Sr. No." || row[0] === "S. No.")
    ) {
      headerRowIndex = i;
      break;
    }
  }

  if (headerRowIndex === -1) headerRowIndex = 2;

  const dataRows = sheetData.slice(headerRowIndex + 1);
  dataRows.forEach((row, index) => {
    if (!row[0] && !row[1] && !row[2]) return;

    const hasThreeColumns =
      row.length >= 3 && row[2] && row[2].toString().trim() !== "";

    targetArray.push({
      id: index + 1,
      category: categoryName,
      srNo: (row[0] || "").toString().trim(),
      name: hasThreeColumns ? (row[1] || "").toString().trim() : "",
      description: hasThreeColumns
        ? (row[2] || "").toString().trim()
        : (row[1] || "").toString().trim(),
      authority: "DGFT",
      sourceFile,
    });
  });
}

function processAnfAndAppendices(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });

  workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

    if (sheetName.toLowerCase() === "anf") {
      processSheet(data, anfData, CATEGORY_CONFIG.anf.label, filePath);
      categorySourceFile.anf = fileName;
      return;
    }

    if (sheetName.toLowerCase() === "appendices") {
      processSheet(data, appendicesData, CATEGORY_CONFIG.appendices.label, filePath);
      categorySourceFile.appendices = fileName;
    }
  });
}

function processSingleSheetFile(filePath, targetArray, category, preferredSheetName) {
  const config = CATEGORY_CONFIG[category];
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const worksheet =
    workbook.Sheets[preferredSheetName] || workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

  processSheet(data, targetArray, config.label, filePath);
  categorySourceFile[config.sourceKey] = path.basename(filePath);
}

function processActRules(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });

  workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
    const normalizedSheetName = sheetName.toLowerCase();

    if (normalizedSheetName.includes("act")) {
      processSheet(data, ftdrActData, CATEGORY_CONFIG.ftdr_act.label, filePath);
      categorySourceFile.ftdr_act = fileName;
    } else if (normalizedSheetName.includes("rules")) {
      processSheet(data, ftdrRulesData, CATEGORY_CONFIG.ftdr_rules.label, filePath);
      categorySourceFile.ftdr_rules = fileName;
    }
  });
}

function processExcel(filePath) {
  const fileName = path.basename(filePath);
  const lowerName = fileName.toLowerCase();

  if (!isValidExcelFile(fileName)) return;

  if (lowerName.includes("aayat niryat form")) {
    processAnfAndAppendices(filePath);
  } else if (lowerName.includes("foreign trade policy")) {
    processSingleSheetFile(filePath, ftpData, "ftp", "FTP");
  } else if (lowerName.includes("foreign trade statement")) {
    processSingleSheetFile(filePath, ftsData, "fts", "FTS");
  } else if (lowerName.includes("handbook of procedures")) {
    processSingleSheetFile(filePath, hopData, "hop", "HOP");
  } else if (lowerName.includes("ft d&r") && (lowerName.includes("act") || lowerName.includes("rules"))) {
    processActRules(filePath);
  } else if (lowerName.includes("rates under rodtep")) {
    processSingleSheetFile(filePath, rodtepData, "rodtep");
  } else if (
    lowerName.includes("export policy") ||
    (lowerName.includes("itc(hs)") && lowerName.includes("export"))
  ) {
    processSingleSheetFile(filePath, scometExportData, "scomet_export");
  } else if (
    lowerName.includes("import policy") ||
    (lowerName.includes("itc(hs)") && lowerName.includes("import"))
  ) {
    processSingleSheetFile(filePath, scometImportData, "scomet_import");
  } else if (lowerName.includes("scomet") && !lowerName.includes("export") && !lowerName.includes("import")) {
    processSingleSheetFile(filePath, scometOnlyData, "scomet_only");
  } else {
    console.log(`Unknown or unsupported file: ${fileName}`);
  }
}

function resetAllStores() {
  anfData = [];
  appendicesData = [];
  ftpData = [];
  ftsData = [];
  hopData = [];
  ftdrActData = [];
  ftdrRulesData = [];
  rodtepData = [];
  scometExportData = [];
  scometImportData = [];
  scometOnlyData = [];

  Object.keys(categorySourceFile).forEach((key) => {
    categorySourceFile[key] = "";
  });
}

function loadAllExcelFiles() {
  resetAllStores();

  fs.readdirSync(EXCEL_FOLDER).forEach((fileName) => {
    if (isValidExcelFile(fileName)) {
      processExcel(path.join(EXCEL_FOLDER, fileName));
    }
  });
}

function startWatcher() {
  console.log(`Watching FTP folder: ${EXCEL_FOLDER}`);
  loadAllExcelFiles();

  const watcher = chokidar.watch(EXCEL_FOLDER, { persistent: true });
  watcher.on("ready", () => console.log("FTP Watcher is ready"));
  watcher.on("add", (filePath) => {
    if (isValidExcelFile(filePath)) loadAllExcelFiles();
  });
  watcher.on("change", (filePath) => {
    if (isValidExcelFile(filePath)) loadAllExcelFiles();
  });
  watcher.on("unlink", (filePath) => {
    if (isValidExcelFile(filePath)) loadAllExcelFiles();
  });
  watcher.on("error", (error) => console.error("FTP Watcher error:", error));
}

function getEnrichedCategoryData(category) {
  if (
    !anfData.length &&
    !appendicesData.length &&
    !ftpData.length &&
    !ftsData.length &&
    !hopData.length &&
    !ftdrActData.length &&
    !ftdrRulesData.length &&
    !rodtepData.length &&
    !scometExportData.length &&
    !scometImportData.length &&
    !scometOnlyData.length
  ) {
    loadAllExcelFiles();
  }

  const categoryMap = {
    anf: anfData,
    appendices: appendicesData,
    ftp: ftpData,
    fts: ftsData,
    hop: hopData,
    ftdr_act: ftdrActData,
    ftdr_rules: ftdrRulesData,
    rodtep: rodtepData,
    scomet_export: scometExportData,
    scomet_import: scometImportData,
    scomet_only: scometOnlyData,
  };

  const data = categoryMap[category];
  if (!data) return null;

  return data.map((row) => enrichRecordWithPdf(row, category));
}

function getCategoryData(category) {
  if (category === "anf_appendices") {
    const data = [
      ...getEnrichedCategoryData("anf"),
      ...getEnrichedCategoryData("appendices"),
    ];

    return {
      filename:
        categorySourceFile.anf ||
        categorySourceFile.appendices ||
        "Aayat Niryat Form & Appendices.xlsx",
      count: data.length,
      data,
    };
  }

  const data = getEnrichedCategoryData(category);
  if (!data) return null;

  return {
    filename: categorySourceFile[category] || "Unknown.xlsx",
    count: data.length,
    data,
  };
}

function getExcelData() {
  return {
    filename: "",
    count:
      anfData.length +
      appendicesData.length +
      ftpData.length +
      ftsData.length +
      hopData.length +
      ftdrActData.length +
      ftdrRulesData.length +
      rodtepData.length +
      scometExportData.length +
      scometImportData.length +
      scometOnlyData.length,
    data: {
      anf: { count: anfData.length, data: anfData },
      appendices: { count: appendicesData.length, data: appendicesData },
      ftp: { count: ftpData.length, data: ftpData },
      fts: { count: ftsData.length, data: ftsData },
      hop: { count: hopData.length, data: hopData },
      ftdr_act: { count: ftdrActData.length, data: ftdrActData },
      ftdr_rules: { count: ftdrRulesData.length, data: ftdrRulesData },
      rodtep: { count: rodtepData.length, data: rodtepData },
      scomet_export: { count: scometExportData.length, data: scometExportData },
      scomet_import: { count: scometImportData.length, data: scometImportData },
      scomet_only: { count: scometOnlyData.length, data: scometOnlyData },
    },
  };
}

module.exports = {
  startWatcher,
  getExcelData,
  getCategoryData,
  resolvePdfDownloadPath,
};
