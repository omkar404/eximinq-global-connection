const express = require("express");
const router = express.Router();

const { createindustriaLlicenseRoutes } = require("../controllers/industriaLlicenseRoutes.controller");

router.post("/", createindustriaLlicenseRoutes);

module.exports = router;