const express = require("express");
const router = express.Router();

const { createisoCertificationRoutes } = require("../controllers/isoCertificationRoutes.controller");

router.post("/", createisoCertificationRoutes );

module.exports = router;