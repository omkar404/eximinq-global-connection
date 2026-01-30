const express = require("express");
const router = express.Router();

const { createEnroll } = require("../controllers/industriesWePower.controller");

// 🔑 Single API for all landing pages
router.post("/", createEnroll);

module.exports = router;
