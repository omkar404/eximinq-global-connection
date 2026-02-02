const express = require("express");
const router = express.Router();

const { createEnroll } = require("../controllers/mainenroll.controller");

// 🔑 ONE ROUTE FOR ALL PAGES
router.post("/", createEnroll);

module.exports = router;
