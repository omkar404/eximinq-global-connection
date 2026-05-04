const express = require("express");
const router = express.Router();

const { createesanchitFilingRoutes } = require("../controllers/esanchitFilingRoutes.controller");

router.post("/", createesanchitFilingRoutes);

module.exports = router;