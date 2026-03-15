const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const eopextensionRoutes = require("../controllers/eopextensionRoutes.controller");

router.post("/", eopextensionRoutes.createeopextensionRoutes);

module.exports = router;