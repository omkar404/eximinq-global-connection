const express = require("express");
const router = express.Router();

const {
  createmarineInsuranceRoutes,
  marineInsuranceRoutes,
  marineInsuranceRoutesById,
} = require("../controllers/marineInsuranceRoutes.controller");

router.post("/", createmarineInsuranceRoutes);
router.get("/", marineInsuranceRoutes);
router.get("/:id", marineInsuranceRoutesById);

module.exports = router;
