const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const {createigstrefundRoutes} = require("../controllers/igstrefundRoutes.controller");

router.post("/", createigstrefundRoutes);

module.exports = router;