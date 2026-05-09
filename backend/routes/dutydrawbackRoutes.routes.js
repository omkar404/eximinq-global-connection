const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const  {createdutydrawbackRoutes} = require("../controllers/dutydrawbackRoutes.controller");

router.post("/", createdutydrawbackRoutes);

module.exports = router;