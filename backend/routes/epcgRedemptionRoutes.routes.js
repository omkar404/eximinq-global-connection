const express = require("express");
const router = express.Router();

const { createepcgRedemptionRoutes } = require("../controllers/epcgRedemptionRoutes.controller");

router.post("/", createepcgRedemptionRoutes);

module.exports = router;