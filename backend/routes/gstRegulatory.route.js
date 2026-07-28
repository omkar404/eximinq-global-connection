const express = require("express");
const path = require("path");
const gstRegulatoryService = require("../services/gstRegulatory.service");

const router = express.Router();

router.get("/all", (_req, res) => {
  res.json(gstRegulatoryService.getAllGstData());
});

router.get("/amendment-history", (req, res) => {
  const { act } = req.query;

  if (!act) {
    return res.status(400).json({ success: false, message: "act is required" });
  }

  return res.json({
    success: true,
    count: gstRegulatoryService.getAmendmentHistory(act).length,
    data: gstRegulatoryService.getAmendmentHistory(act),
  });
});

router.get("/notifications/category/:category", (req, res) => {
  try {
    const data = gstRegulatoryService.getNotificationsByCategory(req.params.category);
    return res.json({
      success: true,
      category: req.params.category,
      count: data.length,
      data,
    });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
});

router.get("/pdf-download", (req, res) => {
  try {
    const { file } = req.query;

    if (!file) {
      return res.status(400).json({ success: false, message: "file is required" });
    }

    const pdfPath = gstRegulatoryService.resolveGstPdfDownloadPath(file);
    if (!pdfPath) {
      return res.status(404).json({ success: false, message: "PDF not found" });
    }

    return res.download(pdfPath, path.basename(pdfPath));
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/acts/catalog", (_req, res) => {
  try {
    res.set("Cache-Control", "no-store, max-age=0");
    const data = gstRegulatoryService.getGstActsCatalog();
    return res.json({ success: true, count: data.length, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/acts/:actId", (req, res) => {
  try {
    res.set("Cache-Control", "no-store, max-age=0");
    const data = gstRegulatoryService.getGstActById(req.params.actId);
    if (!data) {
      return res.status(404).json({ success: false, message: "GST Act not found" });
    }
    return res.json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/rules/catalog", (_req, res) => {
  try {
    res.set("Cache-Control", "no-store, max-age=0");
    const data = gstRegulatoryService.getGstRulesCatalog();
    return res.json({ success: true, count: data.length, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/rules/:ruleId", (req, res) => {
  try {
    res.set("Cache-Control", "no-store, max-age=0");
    const data = gstRegulatoryService.getGstRuleById(req.params.ruleId);
    if (!data) {
      return res.status(404).json({ success: false, message: "GST Rules not found" });
    }
    return res.json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/:type", (req, res) => {
  try {
    res.set("Cache-Control", "no-store, max-age=0");
    const data = gstRegulatoryService.getGstDataByType(req.params.type);
    return res.json({
      success: true,
      type: req.params.type,
      count: data.length,
      data,
    });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
});

module.exports = router;
