const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

// 🔥 Correct Paths (one level up from services)
const EXCEL_FOLDER = path.join(__dirname, "../PDF_DOC/ALL_PDF");
const PDF_FOLDER = path.join(__dirname, "../PDF_DOC/PDF_FILES");

let excelData = [];
let lastFileName = "";

// 🔹 Ensure folders exist
if (!fs.existsSync(EXCEL_FOLDER)) {
  fs.mkdirSync(EXCEL_FOLDER, { recursive: true });
  console.log(`✅ Created Excel folder: ${EXCEL_FOLDER}`);
} else {
  console.log(`✅ Excel folder exists: ${EXCEL_FOLDER}`);
}

if (!fs.existsSync(PDF_FOLDER)) {
  fs.mkdirSync(PDF_FOLDER, { recursive: true });
  console.log(`✅ Created PDF folder: ${PDF_FOLDER}`);
} else {
  console.log(`✅ PDF folder exists: ${PDF_FOLDER}`);
}

// 🔹 Format Excel Date
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

// 🔹 Normalize sheet → type
function normalizeSheetType(sheetName) {
  const name = sheetName.toLowerCase();

  if (name.includes("policy circular")) return "circular";
  if (name.includes("public")) return "public";
  if (name.includes("notification")) return "notification";
  if (name.includes("trade")) return "trade";
  if (name.includes("policy")) return "policy";

  return "";
}

// 🔹 Normalize string for PDF match
function normalizeString(str) {
  if (!str) return "";
  return str
    .toString()
    .toLowerCase()
    .replace(/[\/\\\-_\s]/g, "");
}

// 🔹 Find PDF File
function findPDFFile(noticeNo) {
  try {
    const files = fs.readdirSync(PDF_FOLDER);
    const pdfFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".pdf"
    );

    if (!pdfFiles.length) return null;

    const normalizedNotice = normalizeString(noticeNo);

    // Exact match
    let pdfFile = pdfFiles.find(
      (file) => path.parse(file).name === noticeNo
    );

    if (pdfFile) {
      return path.join(PDF_FOLDER, pdfFile);
    }

    // Normalized match
    pdfFile = pdfFiles.find((file) => {
      const fileNameWithoutExt = path.parse(file).name;
      const normalizedFileName = normalizeString(fileNameWithoutExt);

      return (
        normalizedFileName === normalizedNotice ||
        normalizedFileName.includes(normalizedNotice)
      );
    });

    if (pdfFile) {
      return path.join(PDF_FOLDER, pdfFile);
    }

    return null;
  } catch (error) {
    console.error("❌ PDF search error:", error.message);
    return null;
  }
}

// 🔹 Process Excel File
function processExcel(filePath) {
  if (path.extname(filePath) !== ".xlsx") return;

  console.log("📊 Processing Excel:", filePath);

  const workbook = XLSX.readFile(filePath, { cellDates: true });

  excelData = [];

  workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];

    const sheetData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    });

    if (sheetData.length < 4) return;

    const type = normalizeSheetType(sheetName);
    const rows = sheetData.slice(3);

    rows.forEach((row) => {
      if (!row[1]) return;

      excelData.push({
        id: excelData.length + 1,
        type,
        srNo: row[0],
        noticeNo: row[1],
        year: row[2],
        title: row[3],
        date: formatDate(row[4]),
        authority: "DGFT",
      });
    });
  });

  lastFileName = path.basename(filePath);

  console.log("✅ DGFT Excel Loaded:", lastFileName);
  console.log("📦 Total Records:", excelData.length);
}

// 🔹 Start Watcher
function startWatcher() {
  console.log("📂 Watching folder:", EXCEL_FOLDER);

  // Load existing Excel files on startup
  const existingFiles = fs.readdirSync(EXCEL_FOLDER);
  existingFiles.forEach((file) => {
    const fullPath = path.join(EXCEL_FOLDER, file);
    if (path.extname(fullPath) === ".xlsx") {
      processExcel(fullPath);
    }
  });

  const watcher = chokidar.watch(EXCEL_FOLDER, {
    persistent: true,
    ignoreInitial: true,
  });

  watcher.on("ready", () => {
    console.log("✅ DGFT Watcher is ready...");
  });

  watcher.on("add", (filePath) => {
    console.log("📥 New Excel detected:", filePath);
    processExcel(filePath);
  });

  watcher.on("error", (err) => {
    console.error("❌ Watcher error:", err);
  });
}

// 🔹 Get Excel Data
function getExcelData() {
  return {
    filename: lastFileName,
    count: excelData.length,
    data: excelData,
  };
}

module.exports = {
  startWatcher,
  getExcelData,
  findPDFFile,
};
