const express = require("express");
const router = express.Router();

const { createfactoryLicenseRoutes } = require("../controllers/factoryLicenseRoutes.controller");

router.post("/", createfactoryLicenseRoutes);

module.exports = router;