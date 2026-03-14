// const express = require("express");
// const router = express.Router();
// const shippingBillFilingRoutes = require("../controllers/shippingBillFilingRoutes.controller");

// router.post("/", shippingBillFilingRoutes.createshippingBillFilingRoutes);

// module.exports = router; // ✅ Yeh line missing thi!

// routes/shippingBillFilingRoutes.routes.js
const express = require("express");
const router = express.Router();
const { createShippingBillFilingRoutes } = require("../controllers/shippingBillFilingRoutes.controller");

router.post("/", createShippingBillFilingRoutes);

module.exports = router;