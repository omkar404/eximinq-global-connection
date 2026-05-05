const express = require("express");
const router = express.Router();

const { createiemRegistrationRoutes } = require("../controllers/iemRegistrationRoutes.controller");

router.post("/", createiemRegistrationRoutes);

module.exports = router;