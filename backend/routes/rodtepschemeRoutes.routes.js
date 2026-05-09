const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const {createrodtepschemeRoutes} = require("../controllers/rodtepschemeRoutes.controller");

router.post("/", createrodtepschemeRoutes);

module.exports = router;