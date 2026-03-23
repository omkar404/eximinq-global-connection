const express = require("express");
const router  = express.Router();
const pharmaceuticalsindustryRoutes = require("../controllers/pharmaceuticalsindustryRoutes.controller");

router.post("/", pharmaceuticalsindustryRoutes.createpharmaceuticalsindustryRoutes);

module.exports = router;