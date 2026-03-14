const express = require("express");
const router = express.Router();
const advanceAuthorisationRoutes = require("../controllers/advanceAuthorisationRoutes.controller");

// ✅ Fix: "creatadvance" → "createadvance"
router.post("/", advanceAuthorisationRoutes.createadvanceAuthorisationRoutes);

module.exports = router;