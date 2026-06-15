const express = require("express");
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

router.get("/:type", (req, res) => {
  try {
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
