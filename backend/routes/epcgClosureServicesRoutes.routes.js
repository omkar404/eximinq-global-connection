const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  epcgClosureServicesRoutes = require("../controllers/epcgClosureServicesRoutes.controller");

router.post("/", epcgClosureServicesRoutes.createepcgClosureServicesRoutes);

module.exports = router;