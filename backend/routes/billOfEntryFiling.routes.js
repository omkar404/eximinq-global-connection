const express = require("express");
const router = express.Router();
const billOfEntryFilling = require("../controllers/billOfEntryFilingRoutes.controller");

// '/' because server.js already mounts at /api/star-export-house
router.post("/", billOfEntryFilling.createbillOfEntryFilling);

module.exports = router;