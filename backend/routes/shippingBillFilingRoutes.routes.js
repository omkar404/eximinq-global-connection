
const express = require("express");
const router = express.Router();
const { createshippingBillFilingRoutes } = require("../controllers/shippingBillFilingRoutes.controller");

router.post("/", createshippingBillFilingRoutes);

module.exports = router;