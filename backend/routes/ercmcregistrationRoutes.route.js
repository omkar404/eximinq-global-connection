const express = require("express");
const router = express.Router();

const { createercmcregistrationRoutes } = require("../controllers/ercmcregistrationRoutes.controller");

router.post("/", createercmcregistrationRoutes);

module.exports = router;