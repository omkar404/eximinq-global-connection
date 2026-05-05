const express = require("express");
const router = express.Router();

const { createdefenceeximLicenseRoutes } = require("../controllers/defenceeximLicenseRoutes.controller");

router.post("/", createdefenceeximLicenseRoutes);

module.exports = router;