const express = require("express");
const router = express.Router();
const textilesindustryRoutes = require("../controllers/textilesindustryRoutes.controller");

router.post("/", textilesindustryRoutes.createtextilesindustryRoutes);

module.exports = router;
