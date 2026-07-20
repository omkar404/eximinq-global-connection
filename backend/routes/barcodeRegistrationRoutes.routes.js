const express = require("express");
const router = express.Router();

const {
  createbarcodeRegistrationRoutes,
  barcodeRegistrationRoutes,
  barcodeRegistrationRoutesById,
} = require("../controllers/barcodeRegistrationRoutes.controller");

router.post("/", createbarcodeRegistrationRoutes);
router.get("/", barcodeRegistrationRoutes);
router.get("/:id", barcodeRegistrationRoutesById);

module.exports = router;
