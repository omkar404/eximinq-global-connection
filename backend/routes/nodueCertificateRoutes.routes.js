const express = require("express");
const router = express.Router();

const { createnodueCertificateRoutes } = require("../controllers/nodueCertificateRoutes.controller");

router.post("/", createnodueCertificateRoutes);

module.exports = router;