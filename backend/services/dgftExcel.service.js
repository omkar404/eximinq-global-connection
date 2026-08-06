const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

const DGFT_BASE_FOLDER = path.join(__dirname, "../PDF_DOC/DGFT");
const EXCEL_FOLDER = path.join(DGFT_BASE_FOLDER, "ALL_PDF");
const PDF_FOLDER = path.join(DGFT_BASE_FOLDER, "PDF_FILES");


let excelData = [];
let lastFileName = "";
let sourceSignature = "";

// right now what i wanted 

// 🔹 Create folders if they don't exist
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

function normalizeFinancialYear(value, fallbackDate = "") {
  const text = String(value || "").trim();

  if (/^\d{4}-\d{2}$/.test(text)) return text;
  if (/^\d{4}-\d{4}$/.test(text)) {
    const [start, end] = text.split("-");
    return `${start}-${end.slice(-2)}`;
  }
  const normalizedDate = String(fallbackDate || "").trim();
  const match = normalizedDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (match) {
    const [, day, month, year] = match;
    const monthNumber = Number(month);
    const startYear = monthNumber >= 4 ? Number(year) : Number(year) - 1;
    return `${startYear}-${String(startYear + 1).slice(-2)}`;
  }

  if (/^\d{4}$/.test(text)) {
    const start = Number(text);
    return `${start}-${String(start + 1).slice(-2)}`;
  }

  return text;
}

function normalizeNoticeNumber(value, sheetName) {
  const raw = String(value || "").trim().replace(/\s+/g, " ");

  if (!raw) return raw;

  if (sheetName.toLowerCase().includes("notification")) {
    return raw.replace(/^NOTIFIACTION/i, "NOTIFICATION");
  }

  return raw;
}

function normalizePdfKey(value) {
  if (!value) return "";

  return String(value)
    .trim()
    .replace(/\.pdf$/i, "")
    .replace(/\((?:copy\s*)?\d+\)\s*$/i, "")
    .toLowerCase()
    .replace(/notifiaction/g, "notification")
    .replace(/(\d{4})[\/.\-](\d{4})/g, (_, startYear, endYear) =>
      `${startYear}-${endYear.slice(-2)}`
    )
    .replace(/\b(?:the|no\.?)\b/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function getPdfLookupKeys(value) {
  const rawValue = String(value || "").trim();
  const keys = new Set([normalizePdfKey(rawValue)]);
  const singleYearMatch = rawValue.match(/(?:^|[\/.\-])(\d{4})\s*$/);

  if (singleYearMatch) {
    const startYear = Number(singleYearMatch[1]);
    keys.add(normalizePdfKey(`${rawValue}-${String(startYear + 1).slice(-2)}`));
  }

  keys.delete("");
  return keys;
}


function normalizeSheetType(sheetName) {
  const name = sheetName.toLowerCase();

  if (name.includes("policy circular")) return "circular";
  if (name.includes("public")) return "public";
  if (name.includes("notification")) return "notification";
  if (name.includes("trade")) return "trade";
  if (name.includes("policy")) return "policy";

  return "";
}

// function findPDFFile(noticeNo) {

//   if (!noticeNo) return null;

//   noticeNo = noticeNo.toString().trim();

//   console.log(`\n🔍 Searching for PDF with Notice No: "${noticeNo}"`);
  
//   try {
//     const files = fs.readdirSync(PDF_FOLDER);
//     console.log(`📂 Total files in PDF folder: ${files.length}`);
    
//     if (files.length === 0) {
//       console.log('⚠️  PDF folder is empty!');
//       return null;
//     }
    
//     const pdfFiles = files.filter(f => path.extname(f).toLowerCase() === '.pdf');
//     console.log(`📄 PDF files found: ${pdfFiles.length}`);
    
//     if (pdfFiles.length > 0) {
//       console.log(`📄 Available PDF files:`);
//       pdfFiles.forEach((file, index) => {
//         console.log(`   ${index + 1}. ${file}`);
//       });
//     }
    
//     const normalizedNotice = normalizeString(noticeNo);
//     console.log(`🔤 Normalized Notice No: "${noticeNo}" → "${normalizedNotice}"`);
    
//     // Try exact match first
//     let pdfFile = pdfFiles.find(file => {
//       const fileNameWithoutExt = path.parse(file).name;
//       return fileNameWithoutExt === noticeNo;
//     });
    
//     if (pdfFile) {
//       console.log(`✅ Exact match found: ${pdfFile}`);
//       return path.join(PDF_FOLDER, pdfFile);
//     }
    
//     // Try normalized match
//     pdfFile = pdfFiles.find(file => {
//       const fileNameWithoutExt = path.parse(file).name;
//       const normalizedFileName = normalizeString(fileNameWithoutExt);
      
//       console.log(`   Checking "${file}"`);
//       console.log(`     File normalized: "${normalizedFileName}"`);
//       console.log(`     Match: ${normalizedFileName === normalizedNotice || normalizedFileName.includes(normalizedNotice)}`);
      
//       return normalizedFileName === normalizedNotice || 
//              normalizedFileName.includes(normalizedNotice);
//     });

//     if (pdfFile) {
//       const fullPath = path.join(PDF_FOLDER, pdfFile);
//       console.log(`✅ Match found: ${pdfFile}`);
//       console.log(`📍 Full path: ${fullPath}\n`);
//       return fullPath;
//     }
    
//     console.log(`❌ No matching PDF found for Notice No: "${noticeNo}"\n`);
//     return null;
    
//   } catch (error) {
//     console.error('❌ Error finding PDF:', error);
//     return null;
//   }
// }

function findPDFFile(noticeNo) {
  if (!noticeNo) return null;

  try {
    const files = fs.readdirSync(PDF_FOLDER);
    const pdfFiles = files.filter(f => path.extname(f).toLowerCase() === '.pdf');
    const lookupKeys = getPdfLookupKeys(noticeNo);
    const pdfFile = pdfFiles.find(file => lookupKeys.has(normalizePdfKey(file)));

    if (pdfFile) {
      return path.join(PDF_FOLDER, pdfFile);
    }
    
    return null;
    
  } catch (error) {
    console.error('❌ Error finding PDF:', error);
    return null;
  }
}


function startWatcher() {
  console.log("📂 Watching folder:", EXCEL_FOLDER);
  loadAllExcelFiles();

  // 🔥 Then start watcher
  const watcher = chokidar.watch(EXCEL_FOLDER, {
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 750, pollInterval: 100 },
  });

  watcher.on("ready", () => {
    console.log("✅ DGFT Watcher is ready...");
  });

  ["add", "change", "unlink"].forEach((eventName) => {
    watcher.on(eventName, (filePath) => {
      if (/\.xlsx?$/i.test(filePath)) {
        console.log(`📥 DGFT Excel ${eventName}:`, filePath);
        loadAllExcelFiles();
      }
    });
  });

  watcher.on("error", (err) => {
    console.error("❌ Watcher Error:", err);
  });
}

function getExcelFiles() {
  return fs.readdirSync(EXCEL_FOLDER, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.xlsx?$/i.test(entry.name) && !entry.name.startsWith("~$"))
    .map((entry) => path.join(EXCEL_FOLDER, entry.name))
    .sort();
}

function getSourceSignature() {
  return getExcelFiles().map((filePath) => {
    const stat = fs.statSync(filePath);
    return `${filePath}:${stat.size}:${stat.mtimeMs}`;
  }).join("|");
}

function parseExcel(filePath) {
  if (!/\.xlsx?$/i.test(filePath)) return [];

  console.log("📊 Processing:", filePath);

  // Keep Excel dates as serial numbers. Converting them to JS Date here causes
  // timezone-dependent one-day shifts for date-only cells.
  const workbook = XLSX.readFile(filePath, { cellDates: false });

  const records = [];

  workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];

    const decodedRange = XLSX.utils.decode_range(worksheet["!ref"] || "A1:E1");
    const sheetData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
      range: { s: { r: 0, c: 0 }, e: { r: decodedRange.e.r, c: 4 } },
    });

    if (sheetData.length < 4) return;

    const type = normalizeSheetType(sheetName);
    const rows = sheetData.slice(3);

    rows.forEach((row) => {
      if (!row[1]) return;

      const noticeNo = normalizeNoticeNumber(row[1], sheetName);
      const formattedDate = formatDate(row[4]);
      const financialYear = normalizeFinancialYear(row[2], formattedDate);

      records.push({
        id: 0,
        type,
        srNo: row[0],
        noticeNo,
        year: row[2],
        financialYear,
        title: row[3],
        date: formattedDate,
        authority: "DGFT",
        sourceFile: path.basename(filePath),
        sourceSheet: sheetName,
      });
    });
  });

  return records;
}

function loadAllExcelFiles() {
  try {
    const files = getExcelFiles();
    const nextData = files.flatMap(parseExcel).map((record, index) => ({ ...record, id: index + 1 }));
    const nextFileName = files.map((filePath) => path.basename(filePath)).join(", ");
    const nextSignature = getSourceSignature();

    // Publish the new snapshot only after every workbook has parsed successfully.
    // Requests therefore never observe a partially rebuilt dataset.
    excelData = nextData;
    lastFileName = nextFileName;
    sourceSignature = nextSignature;
    console.log("✅ DGFT Excel Loaded:", lastFileName);
    console.log("📦 Total Records:", excelData.length);
  } catch (error) {
    console.error("❌ DGFT reload failed; retaining the last complete snapshot:", error.message);
  }
}


function getExcelData() {
  if (getSourceSignature() !== sourceSignature) loadAllExcelFiles();
  return {
    filename: lastFileName,
    count: excelData.length,
    data: excelData,
  };
}

module.exports = {
  startWatcher,
  getExcelData,
  findPDFFile
};
