const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {createnoincentiveCertificateRoutes} = require("../controllers/noincentiveCertificateRoutes.controller");

router.post("/", createnoincentiveCertificateRoutes);

module.exports = router;