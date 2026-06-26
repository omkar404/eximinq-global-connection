const chokidar = require("chokidar");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");
const {
  buildPdfDownloadUrl,
  clearPdfCache,
  findBestPdfMatch,
  listPdfFilesRecursive,
  normalizeText,
  resolvePdfDownloadPath,
} = require("../utils/regulatoryPdf");

// Paths
const CBIC_BASE_FOLDER = path.join(__dirname, "../PDF_DOC/CBIC");
const CUSTOMS_BASE_FOLDER = CBIC_BASE_FOLDER;
const PDF_FOLDER = CBIC_BASE_FOLDER;
const CUSTOMS_DOWNLOAD_ROUTE = "/api/customs/pdf-download";

// Data store
let customsData = {
  acts: [],
  rules: [],
  regulations: [],
  forms: [],
  notifications: {
    antiDumping: [],
    cvd: [],
    nonTariff: [],
    safeguards: [],
    tariff: []
  },
  circulars: [],
  instructionsGuidelines: [],
  orders: [],
  alliedActs: []
};

let lastUpdated = "";

function getNotificationCountMap() {
  return {
    antiDumping: customsData.notifications.antiDumping.length,
    cvd: customsData.notifications.cvd.length,
    nonTariff: customsData.notifications.nonTariff.length,
    safeguards: customsData.notifications.safeguards.length,
    tariff: customsData.notifications.tariff.length
  };
}

function getTotalNotificationCount() {
  var notificationCounts = getNotificationCountMap();
  return Object.values(notificationCounts).reduce(function(total, count) {
    return total + count;
  }, 0);
}

// Create folders if not exist
if (!fs.existsSync(CUSTOMS_BASE_FOLDER)) {
  fs.mkdirSync(CUSTOMS_BASE_FOLDER, { recursive: true });
  console.log("✅ Created Customs Excel folder: " + CUSTOMS_BASE_FOLDER);
}

if (!fs.existsSync(PDF_FOLDER)) {
  fs.mkdirSync(PDF_FOLDER, { recursive: true });
  console.log("✅ Created Customs PDF folder: " + PDF_FOLDER);
}

// Helper: Format date
function formatDate(value) {
  if (!value) return value;
  
  if (value instanceof Date) {
    var day = String(value.getDate()).padStart(2, "0");
    var month = String(value.getMonth() + 1).padStart(2, "0");
    var year = value.getFullYear();
    return day + "/" + month + "/" + year;
  }
  
  if (typeof value === "number") {
    var parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      return String(parsed.d).padStart(2, "0") + "/" + 
             String(parsed.m).padStart(2, "0") + "/" + 
             parsed.y;
    }
  }
  
  return value;
}

// Helper: Normalize string for search
function normalizeString(str) {
  if (!str) return "";
  return str.toString().toLowerCase().replace(/[\/\\\-\_\s]/g, "");
}

function getCbicFormCategoryLabel(sheetName) {
  var categoryMap = {
    "Bill of Entry": "Bill of Entry Forms"
  };

  return categoryMap[sheetName] || sheetName;
}

function getCustomsPdfMetadata(filePath) {
  return {
    pdfPath: filePath || null,
    pdfUrl: filePath ? buildPdfDownloadUrl(CUSTOMS_DOWNLOAD_ROUTE, PDF_FOLDER, filePath) : null,
    pdfFileName: filePath ? path.basename(filePath) : null,
  };
}

function findCustomsRulePdf(ruleName) {
  if (!ruleName) return null;

  var rulesFolder = path.join(PDF_FOLDER, "Rules");
  if (!fs.existsSync(rulesFolder)) return null;

  var normalizedRuleName = normalizeText(ruleName);
  var entries = fs.readdirSync(rulesFolder, { withFileTypes: true });
  var matchingEntry = entries.find(function(entry) {
    return entry.isDirectory() && normalizeText(entry.name) === normalizedRuleName;
  });

  if (!matchingEntry) return null;

  var pdfFiles = listPdfFilesRecursive(path.join(rulesFolder, matchingEntry.name));
  return pdfFiles.length > 0 ? pdfFiles[0] : null;
}

function getCustomsPdfForRow(item) {
  if (!item) return getCustomsPdfMetadata(null);

  if (item.type === "notifications") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.number], {
        pathHints: ["Notifications", item.category, item.year],
      })
    );
  }

  if (item.type === "circulars") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.circularNo], {
        pathHints: ["Circulars", item.year],
      })
    );
  }

  if (item.type === "instructions") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.number], {
        pathHints: ["Instruction and Guidelines", item.year],
      })
    );
  }

  if (item.type === "orders") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.orderNumber], {
        pathHints: ["Orders", "Non-Tariff", item.year],
      })
    );
  }

  if (item.type === "forms") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.formNumber, item.formName], {
        pathHints: ["Forms", item.category],
      })
    );
  }

  if (item.type === "acts") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.act], {
        pathHints: ["Acts"],
      })
    );
  }

  if (item.type === "rules") {
    return getCustomsPdfMetadata(findCustomsRulePdf(item.ruleName || item.ruleSet));
  }

  if (item.type === "regulations") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.regulationNo, item.title], {
        pathHints: ["Regulations"],
      })
    );
  }

  if (item.type === "alliedActs") {
    return getCustomsPdfMetadata(
      findBestPdfMatch(PDF_FOLDER, [item.actName, item.section, item.title], {
        pathHints: ["Allied Acts"],
      })
    );
  }

  return getCustomsPdfMetadata(null);
}

function enrichCustomsRecord(item) {
  return {
    ...item,
    ...getCustomsPdfForRow(item),
  };
}

function resolveExistingSubfolder(basePath, candidates) {
  if (!fs.existsSync(basePath)) return path.join(basePath, candidates[0]);

  var entries = fs.readdirSync(basePath, { withFileTypes: true });
  var normalizedCandidates = candidates.map(function(candidate) {
    return normalizeString(candidate);
  });

  var matchedEntry = entries.find(function(entry) {
    if (!entry.isDirectory()) return false;
    var normalizedEntry = normalizeString(entry.name);
    return normalizedCandidates.includes(normalizedEntry);
  });

  return matchedEntry
    ? path.join(basePath, matchedEntry.name)
    : path.join(basePath, candidates[0]);
}

// ==================== ACTS PROCESSING ====================
function processActsFolder(folderPath) {
  var actsData = [];
  
  var customsActPath = path.join(folderPath, "Customs Act, 1962.xlsx");
  if (fs.existsSync(customsActPath)) {
    console.log("📖 Reading: Customs Act, 1962.xlsx");
    var workbook = XLSX.readFile(customsActPath, { cellDates: true });
    console.log("  - Chapters found: " + workbook.SheetNames.length);
    
    workbook.SheetNames.forEach(function(sheetName) {
      var worksheet = workbook.Sheets[sheetName];
      var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
      
      if (sheetData.length < 2) return;
      
      var rows = sheetData;
      var currentSection = "";
      var currentContent = "";
      
      rows.forEach(function(row, index) {
        if (row[0] && row[0].toString().includes("Section")) {
          if (currentSection) {
            actsData.push({
              id: "customs_act_" + sheetName + "_" + currentSection,
              type: "acts",
              act: "Customs Act, 1962",
              chapter: sheetName,
              section: currentSection,
              title: currentContent.substring(0, 100),
              description: currentContent,
              authority: "Customs"
            });
          }
          currentSection = row[0].toString().trim();
          currentContent = row[1] ? row[1].toString().trim() : "";
        } else if (currentSection && row[1] && row[1].toString().trim() !== "") {
          currentContent += " " + row[1].toString().trim();
        }
      });
      
      if (currentSection) {
        actsData.push({
          id: "customs_act_" + sheetName + "_" + currentSection,
          type: "acts",
          act: "Customs Act, 1962",
          chapter: sheetName,
          section: currentSection,
          title: currentContent.substring(0, 100),
          description: currentContent,
          authority: "Customs"
        });
      }
    });
  }
  
  var tariffActPath = path.join(folderPath, "Customs Tariff Act, 1975.xlsx");
  if (fs.existsSync(tariffActPath)) {
    console.log("📖 Reading: Customs Tariff Act, 1975.xlsx");
    var workbook2 = XLSX.readFile(tariffActPath, { cellDates: true });
    
    workbook2.SheetNames.forEach(function(sheetName) {
      var worksheet = workbook2.Sheets[sheetName];
      var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
      
      if (sheetData.length < 2) return;
      
      var rows = sheetData.slice(1);
      rows.forEach(function(row, index) {
        if (row[0] && row[0].toString().includes("Section")) {
          actsData.push({
            id: "tariff_act_" + sheetName + "_" + index,
            type: "acts",
            act: "Customs Tariff Act, 1975",
            chapter: sheetName,
            section: row[0] ? row[0].toString().trim() : "",
            title: row[1] ? row[1].toString().trim() : "",
            description: row[2] || "",
            authority: "Customs"
          });
        }
      });
    });
  }
  
  var provisionalActPath = path.join(folderPath, "Provisional Collection of Taxes Act, 1931.xlsx");
  if (fs.existsSync(provisionalActPath)) {
    console.log("📖 Reading: Provisional Collection of Taxes Act, 1931.xlsx");
    var workbook3 = XLSX.readFile(provisionalActPath, { cellDates: true });
    
    workbook3.SheetNames.forEach(function(sheetName) {
      var worksheet = workbook3.Sheets[sheetName];
      var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
      
      if (sheetData.length < 2) return;
      
      var rows = sheetData.slice(1);
      rows.forEach(function(row, index) {
        if (row[0] && row[0].toString().includes("Section")) {
          actsData.push({
            id: "provisional_act_" + sheetName + "_" + index,
            type: "acts",
            act: "Provisional Collection of Taxes Act, 1931",
            chapter: sheetName,
            section: row[0] ? row[0].toString().trim() : "",
            title: row[1] ? row[1].toString().trim() : "",
            description: row[2] || "",
            authority: "Customs"
          });
        }
      });
    });
  }
  
  return actsData;
}

// ==================== RULES PROCESSING ====================
function processRulesFolder(folderPath) {
  var rulesData = [];
  var rulesFilePath = path.join(folderPath, "CUSTOMS RULES.xlsx");
  
  if (fs.existsSync(rulesFilePath)) {
    console.log("📖 Reading: CUSTOMS RULES.xlsx");
    var workbook = XLSX.readFile(rulesFilePath, { cellDates: true });
    
    workbook.SheetNames.forEach(function(sheetName) {
      var worksheet = workbook.Sheets[sheetName];
      var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
      
      if (sheetData.length < 2) return;
      
      var rows = sheetData.slice(1);
      rows.forEach(function(row, index) {
        var firstCell = row[0] ? row[0].toString().trim() : "";
        var secondCell = row[1] ? row[1].toString().trim() : "";
        if (!firstCell || !/^rule\b/i.test(firstCell)) return;
        
        var ruleNumber = firstCell;
        var title = secondCell;
        
        if (firstCell.includes(":")) {
          var parts = firstCell.split(":");
          ruleNumber = parts.shift().trim();
          title = parts.join(":").trim() || secondCell;
        }

        rulesData.push({
          id: "rules_" + normalizeString(sheetName) + "_" + index,
          type: "rules",
          ruleName: sheetName,
          ruleSet: sheetName,
          chapter: sheetName,
          ruleNumber: ruleNumber,
          number: ruleNumber,
          title: title,
          description: [title, secondCell].filter(Boolean).join(" ").trim(),
          authority: "Customs"
        });
      });
    });
    console.log("  - Rules loaded: " + rulesData.length);
  }
  
  return rulesData;
}

// ==================== REGULATIONS PROCESSING ====================
function processRegulationsFolder(folderPath) {
  var regulationsData = [];
  var regulationsFilePath = path.join(folderPath, "Regulations.xlsx");
  
  if (fs.existsSync(regulationsFilePath)) {
    console.log("📖 Reading: Regulations.xlsx");
    var workbook = XLSX.readFile(regulationsFilePath, { cellDates: true });
    
    workbook.SheetNames.forEach(function(sheetName) {
      if (sheetName === "Regulations") {
        var worksheet = workbook.Sheets[sheetName];
        var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
        
        if (sheetData.length < 2) return;
        
        var rows = sheetData.slice(1);
        var currentRegulation = "";
        var currentContent = "";
        
        rows.forEach(function(row, index) {
          if (row[0] && row[0].toString().includes("Regulation")) {
            if (currentRegulation) {
              regulationsData.push({
                id: "regulations_" + index,
                type: "regulations",
                regulationNo: currentRegulation,
                title: currentContent.substring(0, 100),
                description: currentContent,
                authority: "Customs"
              });
            }
            currentRegulation = row[0].toString().trim();
            currentContent = row[1] ? row[1].toString().trim() : "";
          } else if (currentRegulation && row[1]) {
            currentContent += " " + (row[1] ? row[1].toString().trim() : "");
          }
        });
        
        if (currentRegulation) {
          regulationsData.push({
            id: "regulations_" + regulationsData.length,
            type: "regulations",
            regulationNo: currentRegulation,
            title: currentContent.substring(0, 100),
            description: currentContent,
            authority: "Customs"
          });
        }
      }
    });
    console.log("  - Regulations loaded: " + regulationsData.length);
  }
  
  return regulationsData;
}

// ==================== FORMS PROCESSING ====================
function processFormsFolder(folderPath) {
  var formsData = [];
  var formsFilePath = path.join(folderPath, "Forms.xlsx");
  
  if (fs.existsSync(formsFilePath)) {
    console.log("📖 Reading: Forms.xlsx");
    var workbook = XLSX.readFile(formsFilePath, { cellDates: true });
    
    var formSheets = [
      "Appeals", "Bill of Entry", "Bonds", "Customs Broker", "Drawback",
      "Electronic Declaration", "Furnishing of Information", "Passenger or Baggage",
      "Refunds", "Settlement Commission", "Shipping Bill Forms", "Transhipment",
      "Warehousing", "Others"
    ];
    
    formSheets.forEach(function(sheetName) {
      if (workbook.SheetNames.includes(sheetName)) {
        var worksheet = workbook.Sheets[sheetName];
        var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
        
        if (sheetData.length < 2) return;
        
        var headerRowIndex = 0;
        for (var i = 0; i < Math.min(10, sheetData.length); i++) {
          if (sheetData[i] && sheetData[i][0] === "Form Number") {
            headerRowIndex = i;
            break;
          }
        }

        var rows = sheetData.slice(headerRowIndex + 1);
        var count = 0;
        rows.forEach(function(row, index) {
          var formNumber = row[0] ? row[0].toString().trim() : "";
          var formName = row[1] ? row[1].toString().trim() : "";
          if (formNumber && formNumber !== "Form Number" && formName && formName !== "Form Name") {
            formsData.push({
              id: "forms_" + sheetName + "_" + index,
              type: "forms",
              category: getCbicFormCategoryLabel(sheetName),
              formNumber: formNumber,
              formName: formName,
              description: row[2] || "",
              authority: "Customs"
            });
            count++;
          }
        });
        console.log("  - " + sheetName + ": " + count + " forms");
      }
    });
  }
  
  return formsData;
}

// ==================== NOTIFICATIONS PROCESSING ====================
function processNotificationsFolder(basePath) {
  var notificationsData = {
    antiDumping: [],
    cvd: [],
    nonTariff: [],
    safeguards: [],
    tariff: []
  };
  
  var categories = {
    "Anti-Dumping Duty": "antiDumping",
    "CVD": "cvd",
    "Non-Tariff": "nonTariff",
    "Safeguards": "safeguards",
    "Tariff": "tariff"
  };
  
  var categoryNames = Object.keys(categories);
  
  categoryNames.forEach(function(categoryName) {
    var folderPath = path.join(basePath, categoryName);
    if (fs.existsSync(folderPath)) {
      console.log("📖 Processing: " + categoryName);
      
      var files = fs.readdirSync(folderPath);
      files.forEach(function(file) {
        if (path.extname(file) === ".xlsx") {
          var excelFile = path.join(folderPath, file);
          console.log("  - Reading: " + file);
          
          var workbook = XLSX.readFile(excelFile, { cellDates: true });
          
          workbook.SheetNames.forEach(function(sheetName) {
            var worksheet = workbook.Sheets[sheetName];
            var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
            
            if (sheetData.length < 2) return;
            
            var startRow = 0;
            for (var i = 0; i < Math.min(10, sheetData.length); i++) {
              if (sheetData[i] && sheetData[i].length > 0) {
                var firstCell = sheetData[i][0];
                if (firstCell === "Number" || firstCell === "No." || firstCell === "Sr. No.") {
                  startRow = i;
                  break;
                }
              }
            }
            
            var rows = sheetData.slice(startRow + 1);
            var itemCount = 0;
            
            rows.forEach(function(row, index) {
              if (row[0] && row[0].toString().trim() !== "" && row[0] !== "Number" && row[0] !== "No.") {
                var notificationItem = {
                  id: categoryName + "_" + sheetName + "_" + index,
                  type: "notifications",
                  category: categoryName,
                  year: sheetName,
                  number: row[0] ? row[0].toString().trim() : "",
                  date: formatDate(row[1]),
                  subject: row[2] ? row[2].toString().trim() : "",
                  authority: "Customs"
                };
                notificationsData[categories[categoryName]].push(notificationItem);
                itemCount++;
              }
            });
            
            if (itemCount > 0) {
              console.log("    - " + sheetName + ": " + itemCount + " items");
            }
          });
        }
      });
      
      var totalCount = notificationsData[categories[categoryName]].length;
      console.log("    - Total " + categoryName + ": " + totalCount + " notifications");
    }
  });
  
  return notificationsData;
}

// ==================== CIRCULARS PROCESSING ====================
function processCircularsFolder(folderPath) {
  var circularsData = [];
  var circularsFilePath = path.join(folderPath, "Circulars.xlsx");
  
  if (fs.existsSync(circularsFilePath)) {
    console.log("📖 Reading: Circulars.xlsx");
    var workbook = XLSX.readFile(circularsFilePath, { cellDates: true });
    
    workbook.SheetNames.forEach(function(sheetName) {
      var worksheet = workbook.Sheets[sheetName];
      var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
      
      if (sheetData.length < 3) return;
      
      var startRow = 0;
      for (var i = 0; i < Math.min(5, sheetData.length); i++) {
        if (sheetData[i] && sheetData[i][0] === "Circular No.") {
          startRow = i + 1;
          break;
        }
      }
      
      var rows = sheetData.slice(startRow);
      var count = 0;
      
      rows.forEach(function(row, index) {
        if (!row[0] || row[0].toString().trim() === "" || row[0] === "Circular No.") return;
        
        circularsData.push({
          id: "circular_" + sheetName + "_" + index,
          type: "circulars",
          year: sheetName,
          circularNo: row[0] ? row[0].toString().trim() : "",
          date: formatDate(row[1]),
          subject: row[2] ? row[2].toString().trim() : "",
          authority: "Customs"
        });
        count++;
      });
      
      console.log("  - " + sheetName + ": " + count + " circulars");
    });
  }
  
  return circularsData;
}

// ==================== INSTRUCTIONS PROCESSING (FIXED - CORRECT PATH) ====================
function processInstructionsFolder(folderPath) {
  var instructionsData = [];
  
  // Look for Instructions and Guidelines.xlsx file
  var instructionsFilePath = path.join(folderPath, "Instructions and Guidelines.xlsx");
  
  if (!fs.existsSync(instructionsFilePath)) {
    console.log("⚠️ Instructions and Guidelines.xlsx not found at:", instructionsFilePath);
    return instructionsData;
  }
  
  console.log("📖 Reading: Instructions and Guidelines.xlsx");
  
  try {
    var workbook = XLSX.readFile(instructionsFilePath, { cellDates: true });
    console.log("  - Sheets found:", workbook.SheetNames.join(", "));
    
    workbook.SheetNames.forEach(function(sheetName) {
      var worksheet = workbook.Sheets[sheetName];
      var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
      
      if (!sheetData || sheetData.length < 3) {
        console.log("  - " + sheetName + ": No data found");
        return;
      }
      
      console.log("  - Processing sheet: " + sheetName);
      
      // Find header row
      var startRow = 0;
      for (var i = 0; i < Math.min(10, sheetData.length); i++) {
        if (sheetData[i] && sheetData[i].length > 0) {
          var firstCell = sheetData[i][0];
          if (firstCell === "Number" || firstCell === "Instruction No." || firstCell === "Sr. No.") {
            startRow = i + 1;
            break;
          }
          if (sheetData[i][1] === "Date") {
            startRow = i + 1;
            break;
          }
        }
      }
      
      // If header not found, start from row 2
      if (startRow === 0 && sheetData[2]) {
        startRow = 2;
      }
      
      var rows = sheetData.slice(startRow);
      var count = 0;
      
      rows.forEach(function(row, index) {
        if (!row || row.length === 0) return;
        
        var number = row[0] ? row[0].toString().trim() : "";
        var date = row[1];
        var subject = row[2] ? row[2].toString().trim() : "";
        
        if (number === "" || number === "Number" || number === "Instruction No.") return;
        if (subject === "" || subject === "Subject") return;
        
        instructionsData.push({
          id: "instruction_" + sheetName + "_" + index + "_" + Date.now(),
          type: "instructions",
          year: sheetName,
          number: number,
          date: formatDate(date),
          subject: subject,
          description: subject,
          authority: "Customs"
        });
        count++;
      });
      
      console.log("    - " + sheetName + ": " + count + " instructions loaded");
    });
    
    console.log("  - ✅ Total instructions loaded: " + instructionsData.length);
    
  } catch (error) {
    console.error("❌ Error reading Instructions and Guidelines.xlsx:", error.message);
  }
  
  return instructionsData;
}

// ==================== ORDERS PROCESSING ====================
function processOrdersFolder(folderPath) {
  var ordersData = [];
  var nonTariffPath = path.join(folderPath, "Non-Tariff");
  
  if (fs.existsSync(nonTariffPath)) {
    console.log("📖 Processing Orders from Non-Tariff folder");
    
    var files = fs.readdirSync(nonTariffPath);
    files.forEach(function(file) {
      if (path.extname(file) === ".xlsx") {
        var ordersFilePath = path.join(nonTariffPath, file);
        console.log("  - Reading: " + file);
        
        var workbook = XLSX.readFile(ordersFilePath, { cellDates: true });
        
        workbook.SheetNames.forEach(function(sheetName) {
          var worksheet = workbook.Sheets[sheetName];
          var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
          
          if (sheetData.length < 2) return;
          
          var startRow = 0;
          for (var i = 0; i < Math.min(5, sheetData.length); i++) {
            if (sheetData[i] && (sheetData[i][0] === "Order Number" || sheetData[i][0] === "Order No.")) {
              startRow = i + 1;
              break;
            }
          }
          
          var rows = sheetData.slice(startRow);
          var count = 0;
          
          rows.forEach(function(row, index) {
            if (!row[0] || row[0].toString().trim() === "") return;
            
            ordersData.push({
              id: "order_" + sheetName + "_" + index,
              type: "orders",
              category: "Non-Tariff",
              year: sheetName,
              orderNumber: row[0] ? row[0].toString().trim() : "",
              orderDate: formatDate(row[1]),
              subject: row[2] ? row[2].toString().trim() : "",
              authority: "Customs"
            });
            count++;
          });
          
          console.log("    - " + sheetName + ": " + count + " orders");
        });
      }
    });
  }
  
  return ordersData;
}

// ==================== ALLIED ACTS PROCESSING ====================
function processAlliedActsFolder(folderPath) {
  var alliedActsData = [];
  
  if (fs.existsSync(folderPath)) {
    var files = fs.readdirSync(folderPath);
    files.forEach(function(file) {
      if (path.extname(file) === ".xlsx") {
        var alliedFilePath = path.join(folderPath, file);
        console.log("📖 Reading: " + file);
        var workbook = XLSX.readFile(alliedFilePath, { cellDates: true });
        
        workbook.SheetNames.forEach(function(sheetName) {
          var worksheet = workbook.Sheets[sheetName];
          var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
          
          if (sheetData.length < 2) return;
          
          var rows = sheetData.slice(1);
          rows.forEach(function(row, index) {
            if (row[0] && row[0].toString().trim() !== "") {
              alliedActsData.push({
                id: "allied_" + sheetName + "_" + index,
                type: "alliedActs",
                actName: file.replace(".xlsx", ""),
                section: row[0] ? row[0].toString().trim() : "",
                title: row[1] ? row[1].toString().trim() : "",
                description: row[2] || "",
                authority: "Customs"
              });
            }
          });
        });
      }
    });
  }
  
  return alliedActsData;
}

// ==================== PDF FINDER ====================
function findPDFFile(noticeNo, category) {
  if (!noticeNo) return null;

  return findBestPdfMatch(PDF_FOLDER, [noticeNo], {
    pathHints: category ? ["Notifications", category] : ["Notifications"],
  });
}

// ==================== MAIN PROCESS FUNCTION ====================
function processAllCustomsData() {
  console.log("\n🔄 ========== PROCESSING ALL CUSTOMS DATA ==========\n");
  clearPdfCache(PDF_FOLDER);
  
  try {
    // Process Acts
    var actsPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Acts", "acts"]);
    if (fs.existsSync(actsPath)) {
      customsData.acts = processActsFolder(actsPath);
      console.log("✅ Acts loaded: " + customsData.acts.length + " records\n");
    } else {
      console.log("Acts folder not found at:", actsPath);
    }
    
    // Process Rules
    var rulesPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Rules", "rules"]);
    if (fs.existsSync(rulesPath)) {
      customsData.rules = processRulesFolder(rulesPath);
      console.log("✅ Rules loaded: " + customsData.rules.length + " records\n");
    } else {
      console.log("Rules folder not found at:", rulesPath);
    }
    
    // Process Regulations
    var regulationsPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Regulations", "regulations"]);
    if (fs.existsSync(regulationsPath)) {
      customsData.regulations = processRegulationsFolder(regulationsPath);
      console.log("✅ Regulations loaded: " + customsData.regulations.length + " records\n");
    } else {
      console.log("Regulations folder not found at:", regulationsPath);
    }
    
    // Process Forms
    var formsPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Forms", "forms"]);
    if (fs.existsSync(formsPath)) {
      customsData.forms = processFormsFolder(formsPath);
      console.log("✅ Forms loaded: " + customsData.forms.length + " records\n");
    } else {
      console.log("Forms folder not found at:", formsPath);
    }
    
    // Process Notifications
    var notificationsPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Notifications", "notifications"]);
    if (fs.existsSync(notificationsPath)) {
      customsData.notifications = processNotificationsFolder(notificationsPath);
      console.log("✅ Notifications loaded\n");
    } else {
      console.log("Notifications folder not found at:", notificationsPath);
    }
    
    // Process Circulars
    var circularsPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Circulars", "circulars"]);
    if (fs.existsSync(circularsPath)) {
      customsData.circulars = processCircularsFolder(circularsPath);
      console.log("✅ Circulars loaded: " + customsData.circulars.length + " records\n");
    } else {
      console.log("Circulars folder not found at:", circularsPath);
    }
    
    // Process Instructions/Guidelines - CORRECTED PATH
    var instructionsPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Instruction and Guidelines"]);
    if (fs.existsSync(instructionsPath)) {
      customsData.instructionsGuidelines = processInstructionsFolder(instructionsPath);
      console.log("✅ Instructions/Guidelines loaded: " + customsData.instructionsGuidelines.length + " records\n");
    } else {
      console.log("⚠️ Instruction and Guidelines folder not found at:", instructionsPath);
    }
    
    // Process Orders
    var ordersPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Orders", "orders"]);
    if (fs.existsSync(ordersPath)) {
      customsData.orders = processOrdersFolder(ordersPath);
      console.log("✅ Orders loaded: " + customsData.orders.length + " records\n");
    } else {
      console.log("Orders folder not found at:", ordersPath);
    }
    
    // Process Allied Acts
    var alliedActsPath = resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Allied Acts", "allied_acts"]);
    if (fs.existsSync(alliedActsPath)) {
      customsData.alliedActs = processAlliedActsFolder(alliedActsPath);
      console.log("✅ Allied Acts loaded: " + customsData.alliedActs.length + " records\n");
    } else {
      console.log("Allied Acts folder not found at:", alliedActsPath);
    }
    
    lastUpdated = new Date().toISOString();
    
    console.log("\n📊 ========== FINAL SUMMARY SHESHNATH ==========");
    console.log("  Acts: " + customsData.acts.length);
    console.log("  Rules: " + customsData.rules.length);
    console.log("  Regulations: " + customsData.regulations.length);
    console.log("  Forms: " + customsData.forms.length);
    console.log("  Circulars: " + customsData.circulars.length);
    console.log("  Instructions: " + customsData.instructionsGuidelines.length);
    console.log("  Orders: " + customsData.orders.length);
    console.log("  Allied Acts: " + customsData.alliedActs.length);
    
    var totalNotifications = getTotalNotificationCount();
    console.log("  Notifications: " + totalNotifications);
    console.log("  TOTAL RECORDS: " + (
      customsData.acts.length + customsData.rules.length + 
      customsData.regulations.length + customsData.forms.length +
      customsData.circulars.length + customsData.instructionsGuidelines.length +
      customsData.orders.length + customsData.alliedActs.length + totalNotifications
    ));
    console.log("=====================================\n");
    
  } catch (error) {
    console.error("❌ Error processing customs data:", error);
  }
}

// ==================== WATCHER ====================
function startWatcher() {
  console.log("📂 Watching Customs folder:", CUSTOMS_BASE_FOLDER);
  processAllCustomsData();
  
  var watcher = chokidar.watch(CUSTOMS_BASE_FOLDER, {
    persistent: true,
    ignoreInitial: true,
    depth: 4
  });
  
  watcher.on("ready", function() {
    console.log("✅ Customs Watcher is ready...\n");
  });
  
  watcher.on("add", function(filePath) {
    if (path.extname(filePath) === ".xlsx") {
      console.log("📥 New Excel file detected:", filePath);
      setTimeout(function() { processAllCustomsData(); }, 1000);
    }
  });
  
  watcher.on("change", function(filePath) {
    if (path.extname(filePath) === ".xlsx") {
      console.log("📝 Excel file changed:", filePath);
      setTimeout(function() { processAllCustomsData(); }, 1000);
    }
  });
  
  watcher.on("error", function(err) {
    console.error("❌ Watcher Error:", err);
  });
}

// ==================== EXPORT FUNCTIONS ====================
function getCustomsData() {
  var allNotifications = []
    .concat(customsData.notifications.antiDumping)
    .concat(customsData.notifications.cvd)
    .concat(customsData.notifications.nonTariff)
    .concat(customsData.notifications.safeguards)
    .concat(customsData.notifications.tariff);
  
  return {
    success: true,
    lastUpdated: lastUpdated,
    data: {
      acts: { title: "Acts", items: customsData.acts.map(enrichCustomsRecord) },
      rules: { title: "Rules", items: customsData.rules.map(enrichCustomsRecord) },
      regulations: { title: "Regulations", items: customsData.regulations.map(enrichCustomsRecord) },
      forms: { title: "Forms", items: customsData.forms.map(enrichCustomsRecord) },
      notifications: { title: "Notifications", items: allNotifications.map(enrichCustomsRecord) },
      circulars: { title: "Circulars", items: customsData.circulars.map(enrichCustomsRecord) },
      "instructions / guidelines": { title: "Instructions / Guidelines", items: customsData.instructionsGuidelines.map(enrichCustomsRecord) },
      orders: { title: "Orders", items: customsData.orders.map(enrichCustomsRecord) },
      "allied acts": { title: "Allied Acts", items: customsData.alliedActs.map(enrichCustomsRecord) }
    }
  };
}

function getRawCustomsData() {
  return { lastUpdated: lastUpdated, data: customsData };
}

function getCustomsDataByType(type) {
  var typeMap = {
    acts: customsData.acts,
    rules: customsData.rules,
    regulations: customsData.regulations,
    forms: customsData.forms,
    circulars: customsData.circulars,
    instructions: customsData.instructionsGuidelines,
    orders: customsData.orders,
    alliedActs: customsData.alliedActs,
    notifications: []
  };
  
  typeMap.notifications = []
    .concat(customsData.notifications.antiDumping)
    .concat(customsData.notifications.cvd)
    .concat(customsData.notifications.nonTariff)
    .concat(customsData.notifications.safeguards)
    .concat(customsData.notifications.tariff);
  
  return (typeMap[type] || []).map(enrichCustomsRecord);
}

function getNotificationsByCategory(category) {
  var categoryMap = {
    antiDumping: customsData.notifications.antiDumping,
    cvd: customsData.notifications.cvd,
    nonTariff: customsData.notifications.nonTariff,
    safeguards: customsData.notifications.safeguards,
    tariff: customsData.notifications.tariff
  };
  return (categoryMap[category] || []).map(enrichCustomsRecord);
}

function getCustomsDiagnostics() {
  var notificationCounts = getNotificationCountMap();
  var totalNotifications = getTotalNotificationCount();
  var folderMap = {
    base: CUSTOMS_BASE_FOLDER,
    pdf: PDF_FOLDER,
    acts: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Acts", "acts"]),
    rules: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Rules", "rules"]),
    regulations: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Regulations", "regulations"]),
    forms: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Forms", "forms"]),
    notifications: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Notifications", "notifications"]),
    circulars: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Circulars", "circulars"]),
    instructionsGuidelines: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Instruction and Guidelines"]),
    orders: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Orders", "orders"]),
    alliedActs: resolveExistingSubfolder(CUSTOMS_BASE_FOLDER, ["Allied Acts", "allied_acts"])
  };

  return {
    lastUpdated: lastUpdated,
    paths: folderMap,
    folders: Object.fromEntries(
      Object.entries(folderMap).map(function(entry) {
        return [entry[0], fs.existsSync(entry[1])];
      })
    ),
    counts: {
      acts: customsData.acts.length,
      rules: customsData.rules.length,
      regulations: customsData.regulations.length,
      forms: customsData.forms.length,
      circulars: customsData.circulars.length,
      instructions: customsData.instructionsGuidelines.length,
      orders: customsData.orders.length,
      alliedActs: customsData.alliedActs.length,
      notifications: notificationCounts
    },
    totals: {
      notifications: totalNotifications,
      records:
        customsData.acts.length +
        customsData.rules.length +
        customsData.regulations.length +
        customsData.forms.length +
        customsData.circulars.length +
        customsData.instructionsGuidelines.length +
        customsData.orders.length +
        customsData.alliedActs.length +
        totalNotifications
    }
  };
}

function resolveCustomsPdfDownloadPath(relativeFilePath) {
  return resolvePdfDownloadPath(PDF_FOLDER, relativeFilePath);
}

// Export all functions
module.exports = {
  startWatcher: startWatcher,
  getCustomsData: getCustomsData,
  getRawCustomsData: getRawCustomsData,
  getCustomsDataByType: getCustomsDataByType,
  getNotificationsByCategory: getNotificationsByCategory,
  getCustomsDiagnostics: getCustomsDiagnostics,
  findPDFFile: findPDFFile,
  processAllCustomsData: processAllCustomsData,
  resolveCustomsPdfDownloadPath: resolveCustomsPdfDownloadPath
};



