const express = require("express");
const router = express.Router();

const { createbarcodeRegistrationRoutes  } = require("../controllers/barcodeRegistrationRoutes.controller");

router.post("/", createbarcodeRegistrationRoutes );

module.exports = router;