const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const {
  createnoincentiveCertificateRoutes,
  noincentiveCertificateRoutes,
  noincentiveCertificateRoutesById,
} = require("../controllers/noincentiveCertificateRoutes.controller");

router.post("/", createnoincentiveCertificateRoutes);
router.get("/", noincentiveCertificateRoutes);
router.get("/:id", noincentiveCertificateRoutesById);

module.exports = router;
