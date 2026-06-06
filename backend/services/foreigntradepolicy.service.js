const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

// ─────────────────────────────────────────────
//  FOLDER PATHS
// ─────────────────────────────────────────────
const EXCEL_FOLDER = path.join(__dirname, "../PDF_DOC/Foreign_Trade_Policy");
const PDF_FOLDER   = path.join(__dirname, "../PDF_DOC/FTP_PDF_FILES");

// ─────────────────────────────────────────────
//  DATA STORES + SOURCE FILE TRACKING
// ─────────────────────────────────────────────
let anfData        = [];
let appendicesData = [];
let ftpData        = [];
let ftsData        = [];
let hopData        = [];
let ftdrActData    = [];
let ftdrRulesData  = [];
let rodtepData     = [];
let scometExportData = [];
let scometImportData = [];
let scometOnlyData    = [];

// ✅ NEW: store source filename for each category
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

// ─────────────────────────────────────────────
//  CREATE FOLDERS IF MISSING
// ─────────────────────────────────────────────
if (!fs.existsSync(EXCEL_FOLDER)) {
  fs.mkdirSync(EXCEL_FOLDER, { recursive: true });
  console.log(`✅ Created Excel folder: ${EXCEL_FOLDER}`);
}
if (!fs.existsSync(PDF_FOLDER)) {
  fs.mkdirSync(PDF_FOLDER, { recursive: true });
  console.log(`✅ Created PDF folder: ${PDF_FOLDER}`);
}

// ─────────────────────────────────────────────
//  HELPER FUNCTIONS (unchanged)
// ─────────────────────────────────────────────
function formatDate(value) {
  if (!value) return value;
  if (value instanceof Date) {
    const day = String(value.getDate()).padStart(2, "0");
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const year = value.getFullYear();
    return `${day}/${month}/${year}`;
  }
  if (typeof value === "number") {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      return `${String(parsed.d).padStart(2, "0")}/${String(parsed.m).padStart(2, "0")}/${parsed.y}`;
    }
  }
  return value;
}

function normalizeString(str) {
  if (!str) return "";
  return str.toString().toLowerCase().replace(/[\/\\\-\_\s]/g, "");
}

function findPDFFile(srNo) {
  if (!srNo) return null;
  srNo = srNo.toString().trim();
  try {
    const files = fs.readdirSync(PDF_FOLDER);
    const pdfFiles = files.filter(f => path.extname(f).toLowerCase() === ".pdf");
    if (pdfFiles.length === 0) return null;
    const normalizedSrNo = normalizeString(srNo);
    let pdfFile = pdfFiles.find(file => path.parse(file).name.trim() === srNo);
    if (!pdfFile) {
      pdfFile = pdfFiles.find(file => {
        const normalizedName = normalizeString(path.parse(file).name);
        return normalizedName === normalizedSrNo || normalizedName.includes(normalizedSrNo);
      });
    }
    return pdfFile ? path.join(PDF_FOLDER, pdfFile) : null;
  } catch (error) {
    console.error("❌ Error finding PDF:", error);
    return null;
  }
}

function processSheet(sheetData, targetArray, categoryName, sourceFile) {
  if (!sheetData || sheetData.length < 3) return;
  let headerRowIndex = -1;
  for (let i = 0; i < Math.min(sheetData.length, 15); i++) {
    const row = sheetData[i];
    if (row && row.length && (row[0] === "Sr.No." || row[0] === "Sr. No." || row[0] === "S. No.")) {
      headerRowIndex = i;
      break;
    }
  }
  if (headerRowIndex === -1) headerRowIndex = 2;
  const dataRows = sheetData.slice(headerRowIndex + 1);
  dataRows.forEach((row, idx) => {
    if (!row[0] && !row[1] && !row[2]) return;
    const has3Cols = row.length >= 3 && row[2] && row[2].toString().trim() !== "";
    targetArray.push({
      id: idx + 1,
      category: categoryName,
      srNo: (row[0] || "").toString().trim(),
      name: has3Cols ? (row[1] || "").toString().trim() : "",
      description: has3Cols ? (row[2] || "").toString().trim() : (row[1] || "").toString().trim(),
      authority: "DGFT",
      sourceFile: sourceFile,
    });
  });
}

// ─────────────────────────────────────────────
//  FILE PROCESSORS (now store source filename)
// ─────────────────────────────────────────────

function processAnfAndAppendices(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  workbook.SheetNames.forEach(sheetName => {
    const ws = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
    if (sheetName.toLowerCase() === "anf") {
      processSheet(data, anfData, "Aayat Niryat Form", filePath);
      categorySourceFile.anf = fileName;
      console.log(`   ✅ ANF sheet → ${anfData.length} records (from ${fileName})`);
    } else if (sheetName.toLowerCase() === "appendices") {
      processSheet(data, appendicesData, "Appendices", filePath);
      categorySourceFile.appendices = fileName;
      console.log(`   ✅ Appendices sheet → ${appendicesData.length} records (from ${fileName})`);
    }
  });
}

function processFTP(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets["FTP"] || workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  processSheet(data, ftpData, "Foreign Trade Policy", filePath);
  categorySourceFile.ftp = fileName;
  console.log(`   ✅ FTP → ${ftpData.length} records (from ${fileName})`);
}

function processFTS(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets["FTS"] || workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  processSheet(data, ftsData, "Foreign Trade Statement", filePath);
  categorySourceFile.fts = fileName;
  console.log(`   ✅ FTS → ${ftsData.length} records (from ${fileName})`);
}

function processHOP(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets["HOP"] || workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  processSheet(data, hopData, "Handbook of Procedures", filePath);
  categorySourceFile.hop = fileName;
  console.log(`   ✅ HOP → ${hopData.length} records (from ${fileName})`);
}

function processActRules(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  workbook.SheetNames.forEach(sheetName => {
    const ws = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
    if (sheetName.toLowerCase().includes("act")) {
      processSheet(data, ftdrActData, "FT D&R Act", filePath);
      categorySourceFile.ftdr_act = fileName;
      console.log(`   ✅ Act sheet → ${ftdrActData.length} records (from ${fileName})`);
    } else if (sheetName.toLowerCase().includes("rules")) {
      processSheet(data, ftdrRulesData, "FT D&R Rules", filePath);
      categorySourceFile.ftdr_rules = fileName;
      console.log(`   ✅ Rules sheet → ${ftdrRulesData.length} records (from ${fileName})`);
    }
  });
}

function processRodtep(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  processSheet(data, rodtepData, "RoDTEP Rates", filePath);
  categorySourceFile.rodtep = fileName;
  console.log(`   ✅ RoDTEP → ${rodtepData.length} records (from ${fileName})`);
}

function processScometExport(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  processSheet(data, scometExportData, "Export Policy (SCOMET)", filePath);
  categorySourceFile.scomet_export = fileName;
  console.log(`   ✅ SCOMET Export → ${scometExportData.length} records (from ${fileName})`);
}

function processScometImport(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  processSheet(data, scometImportData, "Import Policy (SCOMET)", filePath);
  categorySourceFile.scomet_import = fileName;
  console.log(`   ✅ SCOMET Import → ${scometImportData.length} records (from ${fileName})`);
}

function processScometOnly(filePath) {
  const fileName = path.basename(filePath);
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  processSheet(data, scometOnlyData, "SCOMET", filePath);
  categorySourceFile.scomet_only = fileName;
  console.log(`   ✅ SCOMET Only → ${scometOnlyData.length} records (from ${fileName})`);
}

// ─────────────────────────────────────────────
//  MAIN DISPATCHER
// ─────────────────────────────────────────────
function processExcel(filePath) {
  const fileName = path.basename(filePath);
  const lowerName = fileName.toLowerCase();
  console.log(`\n📂 Processing: ${fileName}`);

  if (lowerName.includes("aayat niryat form")) {
    processAnfAndAppendices(filePath);
  } else if (lowerName.includes("foreign trade policy")) {
    processFTP(filePath);
  } else if (lowerName.includes("foreign trade statement")) {
    processFTS(filePath);
  } else if (lowerName.includes("handbook of procedures")) {
    processHOP(filePath);
  } else if (lowerName.includes("ft d&r") && (lowerName.includes("act") || lowerName.includes("rules"))) {
    processActRules(filePath);
  } else if (lowerName.includes("rates under rodtep")) {
    processRodtep(filePath);
  } else if (lowerName.includes("export policy") || (lowerName.includes("itc(hs)") && lowerName.includes("export"))) {
    processScometExport(filePath);
  } else if (lowerName.includes("import policy") || (lowerName.includes("itc(hs)") && lowerName.includes("import"))) {
    processScometImport(filePath);
  } else if (lowerName.includes("scomet") && !lowerName.includes("export") && !lowerName.includes("import")) {
    processScometOnly(filePath);
  } else {
    console.log(`⚠️  Unknown or unsupported file: ${fileName}`);
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
  // Reset source filenames
  for (let key in categorySourceFile) {
    categorySourceFile[key] = "";
  }
}

function startWatcher() {
  console.log(`📂 Watching FTP folder: ${EXCEL_FOLDER}`);
  const existing = fs.readdirSync(EXCEL_FOLDER);
  resetAllStores();
  existing.forEach(file => {
    if (path.extname(file) === ".xlsx") {
      processExcel(path.join(EXCEL_FOLDER, file));
    }
  });

  const watcher = chokidar.watch(EXCEL_FOLDER, { persistent: true });
  watcher.on("ready", () => console.log("✅ FTP Watcher is ready"));
  watcher.on("add", filePath => {
    if (path.extname(filePath) === ".xlsx") {
      console.log("📥 New file added:", filePath);
      processExcel(filePath);
    }
  });
  watcher.on("change", filePath => {
    if (path.extname(filePath) === ".xlsx") {
      console.log("📝 File changed:", filePath);
      resetAllStores();
      const files = fs.readdirSync(EXCEL_FOLDER);
      files.forEach(f => {
        if (path.extname(f) === ".xlsx") {
          processExcel(path.join(EXCEL_FOLDER, f));
        }
      });
    }
  });
  watcher.on("error", err => console.error("❌ FTP Watcher error:", err));
}

// ─────────────────────────────────────────────
//  DATA ACCESS FUNCTIONS
// ─────────────────────────────────────────────
function getCategoryData(category) {
  const map = {
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
  const data = map[category];
  if (!data) return null;
  // ✅ Return the correct source filename for this category
  const sourceFile = categorySourceFile[category] || "Unknown.xlsx";
  return {
    filename: sourceFile,
    count: data.length,
    data,
  };
}

function getExcelData() {
  return {
    filename: "", // not used per‑category, but kept for compatibility
    count: anfData.length + appendicesData.length + ftpData.length + ftsData.length +
           hopData.length + ftdrActData.length + ftdrRulesData.length + rodtepData.length +
           scometExportData.length + scometImportData.length + scometOnlyData.length,
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
  findPDFFile,
};