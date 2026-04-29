const express = require("express");
const router = express.Router();

const { createeprauthorizationRoutes } = require("../controllers/eprauthorizationRoutes.controller");

router.post("/", createeprauthorizationRoutes);

module.exports = router;