const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const {
  creatermccalertRemovalRoutes,
  rmccalertRemovalRoutes,
  rmccalertRemovalRoutesById,
} = require("../controllers/rmccalertRemovalRoutes.controller");

router.post("/", creatermccalertRemovalRoutes);
router.get("/", rmccalertRemovalRoutes);
router.get("/:id", rmccalertRemovalRoutesById);

module.exports = router;
