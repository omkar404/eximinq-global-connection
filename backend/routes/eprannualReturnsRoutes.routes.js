const express = require("express");
const router = express.Router();

const { createeprannualReturnsRoutes } = require("../controllers/eprannualReturnsRoutes.controller");

router.post("/", createeprannualReturnsRoutes);

module.exports = router;