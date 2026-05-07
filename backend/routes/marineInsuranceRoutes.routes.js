const express = require("express");
const router = express.Router();

const { createmarineInsuranceRoutes } = require("../controllers/marineInsuranceRoutes.controller");

router.post("/", createmarineInsuranceRoutes);

module.exports = router;