const express = require("express");
const router = express.Router();

const { createcustomsAdjudicationRoutes } = require("../controllers/customsAdjudicationRoutes.controller");

router.post("/", createcustomsAdjudicationRoutes);

module.exports = router;