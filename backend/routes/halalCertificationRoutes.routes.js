const express = require("express");
const router = express.Router();

const { createhalalCertificationRoutes } = require("../controllers/halalCertificationRoutes.controller");

router.post("/", createhalalCertificationRoutes);

module.exports = router;