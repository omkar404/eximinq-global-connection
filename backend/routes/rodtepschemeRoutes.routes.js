const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const rodtepschemeRoutes = require("../controllers/rodtepschemeRoutes.controller");

router.post("/", rodtepschemeRoutes.createrodtepschemeRoutes);

module.exports = router;