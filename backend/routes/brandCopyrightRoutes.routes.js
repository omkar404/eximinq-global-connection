const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {createbrandCopyrightRoutes} = require("../controllers/brandCopyrightRoutes.controller");

router.post("/", createbrandCopyrightRoutes);

module.exports = router;