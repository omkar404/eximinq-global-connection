const express = require("express");
const router = express.Router();

const { createaqcsPqmsRoutes } = require("../controllers/aqcsPqmsRoutes.controller");

router.post("/", createaqcsPqmsRoutes);

module.exports = router;