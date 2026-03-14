const express = require("express");
const router = express.Router();

// ✅ Fix: correct controller filename
const { createMoowrScheme } = require("../controllers/moowrschemeRoutes.controller");

router.post("/", createMoowrScheme);

module.exports = router;