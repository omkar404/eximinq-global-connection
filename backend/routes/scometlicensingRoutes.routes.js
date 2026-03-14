const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const scometlicensingRoutes = require("../controllers/scometlicensingRoutes.controller");

router.post("/", scometlicensingRoutes.createscometlicensingRoutes);

module.exports = router;