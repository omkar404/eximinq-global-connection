const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

const EXCEL_FOLDER = path.join(__dirname, "../PDF_DOC/ALL_PDF");
const PDF_FOLDER = path.join(__dirname, "../PDF_DOC/PDF_FILES");


let excelData = [];
let lastFileName = "";

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

function normalizeString(str) {
  if (!str) return "";

  return str
    .toString()
    .toLowerCase()
    .replace(/[\/\\\-\_\s]/g, ""); 
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

  // 🔥 TRIM HERE
  noticeNo = noticeNo.toString().trim();

  console.log(`\n🔍 Searching for PDF with Notice No: "${noticeNo}"`);
  
  try {
    const files = fs.readdirSync(PDF_FOLDER);
    console.log(`📂 Total files in PDF folder: ${files.length}`);
    
    if (files.length === 0) {
      console.log('⚠️  PDF folder is empty!');
      return null;
    }
    
    const pdfFiles = files.filter(f => path.extname(f).toLowerCase() === '.pdf');
    console.log(`📄 PDF files found: ${pdfFiles.length}`);
    
    const normalizedNotice = normalizeString(noticeNo);
    console.log(`🔤 Normalized Notice No: "${noticeNo}" → "${normalizedNotice}"`);
    
    // Exact match
    let pdfFile = pdfFiles.find(file => {
      const fileNameWithoutExt = path.parse(file).name.trim();
      return fileNameWithoutExt === noticeNo;
    });
    
    if (pdfFile) {
      return path.join(PDF_FOLDER, pdfFile);
    }
    
    // Normalized match
    pdfFile = pdfFiles.find(file => {
      const fileNameWithoutExt = path.parse(file).name.trim();
      const normalizedFileName = normalizeString(fileNameWithoutExt);

      return normalizedFileName === normalizedNotice || 
             normalizedFileName.includes(normalizedNotice);
    });

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

  // 🔥 First load existing files
  const existingFiles = fs.readdirSync(EXCEL_FOLDER);
  existingFiles.forEach((file) => {
    const fullPath = path.join(EXCEL_FOLDER, file);
    if (path.extname(fullPath) === ".xlsx") {
      console.log("📥 Loading existing file:", fullPath);
      processExcel(fullPath);
    }
  });

  // 🔥 Then start watcher
  const watcher = chokidar.watch(EXCEL_FOLDER, {
    persistent: true,
  });

  watcher.on("ready", () => {
    console.log("✅ DGFT Watcher is ready...");
  });

  watcher.on("add", (filePath) => {
    console.log("📥 New file detected:", filePath);
    processExcel(filePath);
  });

  watcher.on("error", (err) => {
    console.error("❌ Watcher Error:", err);
  });
}

function processExcel(filePath) {
  if (path.extname(filePath) !== ".xlsx") return;

  console.log("📊 Processing:", filePath);

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
  findPDFFile
};