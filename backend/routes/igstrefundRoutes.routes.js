const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const igstrefundRoutes = require("../controllers/igstrefundRoutes.controller");

router.post("/", igstrefundRoutes.createigstrefundRoutes);

module.exports = router;