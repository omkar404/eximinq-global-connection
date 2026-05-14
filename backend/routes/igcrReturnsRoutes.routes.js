const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {createigcrReturnsRoutes} = require("../controllers/igcrReturnsRoutes.controller");

router.post("/", createigcrReturnsRoutes);

module.exports = router;