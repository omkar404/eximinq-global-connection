const express = require("express");
const router = express.Router();

const {
  createcdscoComplianceRoutes,
  cdscoComplianceRoutes,
  cdscoComplianceRoutesById,
} = require("../controllers/cdscoComplianceRoutes.controller");

router.post("/", createcdscoComplianceRoutes);
router.get("/", cdscoComplianceRoutes);
router.get("/:id", cdscoComplianceRoutesById);

module.exports = router;
