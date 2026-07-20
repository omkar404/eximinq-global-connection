const express = require("express");
const router = express.Router();

const {
  createesanchitFilingRoutes,
  esanchitFilingRoutes,
  esanchitFilingRoutesById,
} = require("../controllers/esanchitFilingRoutes.controller");

router.post("/", createesanchitFilingRoutes);
router.get("/", esanchitFilingRoutes);
router.get("/:id", esanchitFilingRoutesById);

module.exports = router;
