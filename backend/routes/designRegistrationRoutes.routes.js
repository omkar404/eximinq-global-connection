const express = require("express");
const router = express.Router();

const { createdesignRegistrationRoutes } = require("../controllers/designRegistrationRoutes.controller");

router.post("/", createdesignRegistrationRoutes);

module.exports = router;