const express = require("express");
const router = express.Router();

const { createsvbRegistrationRoutes } = require("../controllers/svbRegistrationRoutes.controller");

router.post("/", createsvbRegistrationRoutes);

module.exports = router;