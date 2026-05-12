const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {creategstReturnsRoutes} = require("../controllers/gstReturnsRoutes.controller");

router.post("/", creategstReturnsRoutes);

module.exports = router;