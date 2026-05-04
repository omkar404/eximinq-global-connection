const express = require("express");
const router = express.Router();

const { createpollutionControlRoutes } = require("../controllers/pollutionControlRoutes.controller");

router.post("/", createpollutionControlRoutes);

module.exports = router;