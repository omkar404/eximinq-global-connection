const express = require("express");
const router = express.Router();

const { createwarehouseLicenseRoutes } = require("../controllers/warehouseLicenseRoutes.controller");

router.post("/", createwarehouseLicenseRoutes);

module.exports = router;