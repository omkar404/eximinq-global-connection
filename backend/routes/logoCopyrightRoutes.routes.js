const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {createlogoCopyrightRoutes} = require("../controllers/logoCopyrightRoutes.controller");

router.post("/", createlogoCopyrightRoutes);

module.exports = router;