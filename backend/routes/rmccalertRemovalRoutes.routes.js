const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {creatermccalertRemovalRoutes} = require("../controllers/rmccalertRemovalRoutes.controller");

router.post("/", creatermccalertRemovalRoutes);

module.exports = router;