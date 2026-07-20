
const express = require("express");
const router = express.Router();
const {
  createshippingBillFilingRoutes,
  shippingBillFilingRoutes,
  shippingBillFilingRoutesById,
} = require("../controllers/shippingBillFilingRoutes.controller");

router.post("/", createshippingBillFilingRoutes);
router.get("/", shippingBillFilingRoutes);
router.get("/:id", shippingBillFilingRoutesById);

module.exports = router;
