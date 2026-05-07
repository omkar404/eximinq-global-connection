const express = require("express");
const router = express.Router();

const {
  creategstFilingRoutes,
} = require("../controllers/gstFilingRoutes.controller");

router.post("/", creategstFilingRoutes);

module.exports = router;
