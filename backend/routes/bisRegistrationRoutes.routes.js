const express = require("express");
const router = express.Router();

const { createbisRegistrationRoutes } = require("../controllers/bisRegistrationRoutes.controller");

router.post("/", createbisRegistrationRoutes);

module.exports = router;