const express = require("express");
const router  = express.Router();

const { createEpcgSchemeLead } = require("../controllers/epcgSchemeRoutes.controller");

router.post("/", createEpcgSchemeLead);

module.exports = router;