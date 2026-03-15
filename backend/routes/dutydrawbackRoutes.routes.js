const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  dutydrawbackRoutes = require("../controllers/dutydrawbackRoutes.controller");

router.post("/", dutydrawbackRoutes.createdutydrawbackRoutes);

module.exports = router;