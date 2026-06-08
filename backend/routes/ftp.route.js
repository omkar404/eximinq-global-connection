// routes/ftp.route.js  — ya jahan bhi aapke routes hain

const express = require("express");
const router  = express.Router();
const ftpService = require("../services/foreigntradepolicy.service");
const path = require("path");

// ─────────────────────────────────────────────
//  KEY MAP  — frontend tab key → service category key
// ─────────────────────────────────────────────
const TAB_TO_CATEGORY = {
  "ftp-anf":           "anf",
  "ftp-policy":        "ftp",
  "ftp-statement":     "fts",
  "ftp-act":           "ftdr_act",
  "ftp-rules":         "ftdr_rules",
  "ftp-hop":           "hop",
  "ftp-rodtep-4r":     "rodtep",
  "ftp-scomet-export": "anf",    // apna sahi category lagao
  "ftp-scomet-import": "anf",    // apna sahi category lagao
  "ftp-scomet-only":   "anf",    // apna sahi category lagao
};

// GET /api/ftp/data/:key
router.get("/data/:key", (req, res) => {
  const tabKey   = req.params.key;
  const category = TAB_TO_CATEGORY[tabKey];

  if (!category) {
    return res.status(400).json({
      success: false,
      message: `Unknown FTP tab key: "${tabKey}"`,
    });
  }

  const result = ftpService.getCategoryData(category);

  if (!result) {
    return res.status(404).json({
      success: false,
      message: `No data found for category: "${category}"`,
    });
  }

  return res.json({
    success:  true,
    key:      tabKey,
    category,
    filename: result.filename,
    count:    result.count,
    data:     result.data,
  });
});

// GET /api/ftp/pdf-download?srNo=...
router.get("/pdf-download", (req, res) => {
  const { srNo } = req.query;

  if (!srNo) {
    return res.status(400).json({ success: false, message: "srNo is required" });
  }

  const pdfPath = ftpService.findPDFFile(srNo);

  if (!pdfPath) {
    return res.status(404).json({ success: false, message: "PDF not found" });
  }

  res.download(pdfPath, path.basename(pdfPath));
});

// GET /api/ftp/all  — debug ke liye
router.get("/all", (req, res) => {
  const result = ftpService.getExcelData();
  return res.json({ success: true, ...result });
});

module.exports = router;