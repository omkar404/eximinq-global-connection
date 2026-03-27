const express = require("express");
const router = express.Router();
const electronicsindustryRoutes = require("../controllers/electronicsindustryRoutes.controller");

router.post("/", electronicsindustryRoutes.createelectronicsindustryRoutes);

module.exports = router;
