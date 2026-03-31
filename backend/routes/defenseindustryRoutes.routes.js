const express = require("express");
const router = express.Router();
const defenseindustryRoutes = require("../controllers/defenseindustryRoutes.controller");

router.post("/", defenseindustryRoutes.createdefenseindustryRoutes);

module.exports = router;
