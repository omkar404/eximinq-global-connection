const express = require("express");
const router = express.Router();

const { createbillOfEntryFilingRoutes } = require("../controllers/billOfEntryFilingRoutes.controller");

router.post("/", createbillOfEntryFilingRoutes);

module.exports = router;