const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

const EXCEL_FOLDER = path.join(__dirname, "../PDF_DOC/Foreign_Trade_Policy");
const PDF_ROOT_FOLDER = path.join(__dirname, "../PDF_DOC/Foreign_Trade_Policy_PDF");
const PDF_CATEGORY_FOLDERS = {
  anf: path.join(PDF_ROOT_FOLDER, "Aayat Niryat Form"),
  appendices: path.join(PDF_ROOT_FOLDER, "Appendices"),
};

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

const categorySourceFile = {
  anf: "",
  appendices: "",
  ftp: "",
  fts: "",
  hop: "",
  ftdr_act: "",
  ftdr_rules: "",
  rodtep: "",
  scomet_export: "",
  scomet_import: "",
  scomet_only: "",
};

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

function listPdfFiles(folderPath) {
  if (!folderPath || !fs.existsSync(folderPath)) return [];

  return fs.readdirSync(folderPath, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(folderPath, entry.name);
    if (entry.isDirectory()) return listPdfFiles(entryPath);
    return path.extname(entry.name).toLowerCase() === ".pdf" ? [entryPath] : [];
  });
}

function getPdfFolderForCategory(category) {
  return PDF_CATEGORY_FOLDERS[category] || null;
}

function getPdfMatchCandidates(category, row = {}) {
  const folderPath = getPdfFolderForCategory(category);
  if (!folderPath) return [];

  const pdfFiles = listPdfFiles(folderPath);
  if (!pdfFiles.length) return [];

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

    const has3Cols = row.length >= 3 && row[2] && row[2].toString().trim() !== "";
    targetArray.push({
      id: index + 1,
      category: categoryName,
      srNo: (row[0] || "").toString().trim(),
      name: has3Cols ? (row[1] || "").toString().trim() : "",
      description: has3Cols
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
      processSheet(data, anfData, "Aayat Niryat Form", filePath);
      categorySourceFile.anf = fileName;
      return;
    }

    if (sheetName.toLowerCase() === "appendices") {
      processSheet(data, appendicesData, "Appendices", filePath);
      categorySourceFile.appendices = fileName;
    }
  });
}

function processSingleSheetFile(filePath, targetArray, categoryName, sourceKey, preferredSheetName) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const worksheet =
    workbook.Sheets[preferredSheetName] || workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

  processSheet(data, targetArray, categoryName, filePath);
  categorySourceFile[sourceKey] = fileName;
}

function processActRules(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });

  workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
    const normalizedSheetName = sheetName.toLowerCase();

    if (normalizedSheetName.includes("act")) {
      processSheet(data, ftdrActData, "FT D&R Act", filePath);
      categorySourceFile.ftdr_act = fileName;
    } else if (normalizedSheetName.includes("rules")) {
      processSheet(data, ftdrRulesData, "FT D&R Rules", filePath);
      categorySourceFile.ftdr_rules = fileName;
    }
  });
}

function processExcel(filePath) {
  const fileName = path.basename(filePath);
  const lowerName = fileName.toLowerCase();

  if (lowerName.includes("aayat niryat form")) {
    processAnfAndAppendices(filePath);
  } else if (lowerName.includes("foreign trade policy")) {
    processSingleSheetFile(filePath, ftpData, "Foreign Trade Policy", "ftp", "FTP");
  } else if (lowerName.includes("foreign trade statement")) {
    processSingleSheetFile(filePath, ftsData, "Foreign Trade Statement", "fts", "FTS");
  } else if (lowerName.includes("handbook of procedures")) {
    processSingleSheetFile(filePath, hopData, "Handbook of Procedures", "hop", "HOP");
  } else if (lowerName.includes("ft d&r") && (lowerName.includes("act") || lowerName.includes("rules"))) {
    processActRules(filePath);
  } else if (lowerName.includes("rates under rodtep")) {
    processSingleSheetFile(filePath, rodtepData, "RoDTEP Rates", "rodtep");
  } else if (lowerName.includes("export policy") || (lowerName.includes("itc(hs)") && lowerName.includes("export"))) {
    processSingleSheetFile(
      filePath,
      scometExportData,
      "Export Policy (SCOMET)",
      "scomet_export"
    );
  } else if (lowerName.includes("import policy") || (lowerName.includes("itc(hs)") && lowerName.includes("import"))) {
    processSingleSheetFile(
      filePath,
      scometImportData,
      "Import Policy (SCOMET)",
      "scomet_import"
    );
  } else if (lowerName.includes("scomet") && !lowerName.includes("export") && !lowerName.includes("import")) {
    processSingleSheetFile(filePath, scometOnlyData, "SCOMET", "scomet_only");
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
    if (path.extname(fileName).toLowerCase() === ".xlsx") {
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
    if (path.extname(filePath).toLowerCase() === ".xlsx") {
      loadAllExcelFiles();
    }
  });
  watcher.on("change", (filePath) => {
    if (path.extname(filePath).toLowerCase() === ".xlsx") {
      loadAllExcelFiles();
    }
  });
  watcher.on("unlink", (filePath) => {
    if (path.extname(filePath).toLowerCase() === ".xlsx") {
      loadAllExcelFiles();
    }
  });
  watcher.on("error", (error) => console.error("FTP Watcher error:", error));
}

function getCategoryData(category) {
  if (category === "anf_appendices") {
    const data = [
      ...anfData.map((row) => enrichRecordWithPdf(row, "anf")),
      ...appendicesData.map((row) => enrichRecordWithPdf(row, "appendices")),
    ];

    return {
      filename:
        categorySourceFile.anf || categorySourceFile.appendices || "Aayat Niryat Form & Appendices.xlsx",
      count: data.length,
      data,
    };
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

  const enrichedData =
    category === "anf" || category === "appendices"
      ? data.map((row) => enrichRecordWithPdf(row, category))
      : data;

  return {
    filename: categorySourceFile[category] || "Unknown.xlsx",
    count: enrichedData.length,
    data: enrichedData,
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
