const express = require("express");
const router = express.Router();

const { createfertiliserimportLicenseRoutes } = require("../controllers/fertiliserimportLicenseRoutes.controller");

router.post("/", createfertiliserimportLicenseRoutes);

module.exports = router;