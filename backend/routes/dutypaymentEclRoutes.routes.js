const express = require("express");
const router = express.Router();

const { createdutypaymentEclRoutes } = require("../controllers/dutypaymentEclRoutes.controller");

router.post("/", createdutypaymentEclRoutes);

module.exports = router;