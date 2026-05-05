const express = require("express");
const router = express.Router();

const { createinterestequalisationSchemeRoutes } = require("../controllers/interestequalisationSchemeRoutes.controller");

router.post("/", createinterestequalisationSchemeRoutes);

module.exports = router;