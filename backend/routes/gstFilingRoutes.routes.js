const express = require("express");
const router = express.Router();

const {
  creategstFilingRoutes,
  gstFilingRoutes,
  gstFilingRoutesById,
} = require("../controllers/gstFilingRoutes.controller");

router.post("/", creategstFilingRoutes);
router.get("/", gstFilingRoutes);
router.get("/:id", gstFilingRoutesById);

module.exports = router;
