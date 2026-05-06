const express = require("express");
const router = express.Router();

const { createtrademarkRegistrationRoutes } = require("../controllers/trademarkRegistrationRoutes.controller");

router.post("/", createtrademarkRegistrationRoutes);

module.exports = router;