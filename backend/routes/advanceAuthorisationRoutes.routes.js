const express = require("express");
const router = express.Router();

const { createadvanceAuthorisationRoutes } = require("../controllers/advanceAuthorisationRoutes.controller");

router.post("/", createadvanceAuthorisationRoutes);

module.exports = router;