const express = require("express");
const router = express.Router();
const ecommerceindustryRoutes = require("../controllers/ecommerceindustryRoutes.controller");

router.post("/", ecommerceindustryRoutes.createecommerceindustryRoutes);

module.exports = router;
