const express = require("express");
const router = express.Router();
const engineeringindustryRoutes = require("../controllers/engineeringindustryRoutes.controller");

router.post("/", engineeringindustryRoutes.createengineeringindustryRoutes);

module.exports = router;
