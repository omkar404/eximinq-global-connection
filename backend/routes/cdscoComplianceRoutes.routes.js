const express = require("express");
const router = express.Router();

const { createcdscoComplianceRoutes } = require("../controllers/cdscoComplianceRoutes.controller");

router.post("/", createcdscoComplianceRoutes);

module.exports = router;