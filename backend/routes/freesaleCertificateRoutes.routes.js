const express = require("express");
const router = express.Router();

const { createfreesaleCertificateRoutes } = require("../controllers/freesaleCertificateRoutes.controller");

router.post("/", createfreesaleCertificateRoutes);

module.exports = router;