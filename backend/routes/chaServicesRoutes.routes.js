const express = require("express");
const router = express.Router();

const { createchaServicesRoutes } = require("../controllers/chaServicesRoutes.controller");

router.post("/", createchaServicesRoutes);

module.exports = router;