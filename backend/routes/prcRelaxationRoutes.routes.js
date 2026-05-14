const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {createprcRelaxationRoutes} = require("../controllers/prcRelaxationRoutes.controller");

router.post("/", createprcRelaxationRoutes);

module.exports = router;