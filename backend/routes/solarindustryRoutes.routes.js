const express = require("express");
const router = express.Router();
const solarindustryRoutes = require("../controllers/solarindustryRoutes.controller");

router.post("/", solarindustryRoutes.createsolarindustryRoutes);

module.exports = router;
