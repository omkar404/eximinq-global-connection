const express = require("express");
const router = express.Router();

const { createadvanceauthorizationRedemptionRoutes } = require("../controllers/advanceauthorizationRedemptionRoutes.controller");

router.post("/", createadvanceauthorizationRedemptionRoutes);

module.exports = router;