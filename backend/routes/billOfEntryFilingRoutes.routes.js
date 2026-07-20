const express = require("express");
const router = express.Router();

const {
  createbillOfEntryFilingRoutes,
  billOfEntryFilingRoutes,
  billOfEntryFilingRoutesById,
} = require("../controllers/billOfEntryFilingRoutes.controller");

router.post("/", createbillOfEntryFilingRoutes);
router.get("/", billOfEntryFilingRoutes);
router.get("/:id", billOfEntryFilingRoutesById);

module.exports = router;
