const express = require("express");
const router = express.Router();
const chemicalindustryRoutes = require("../controllers/chemicalindustryRoutes.controller");

router.post("/", chemicalindustryRoutes.createchemicalindustryRoutes);

module.exports = router;
