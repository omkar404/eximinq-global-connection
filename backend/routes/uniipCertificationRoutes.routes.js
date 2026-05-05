const express = require("express");
const router = express.Router();

const { createuniipCertificationRoutes } = require("../controllers/uniipCertificationRoutes.controller");

router.post("/", createuniipCertificationRoutes);

module.exports = router;