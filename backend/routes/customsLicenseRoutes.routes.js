const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {createcustomsLicenseRoutes} = require("../controllers/customsLicenseRoutes.controller");

router.post("/", createcustomsLicenseRoutes);

module.exports = router;