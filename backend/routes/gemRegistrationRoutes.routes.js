const express = require("express");
const router = express.Router();

const { creategemRegistrationRoutes } = require("../controllers/gemRegistrationRoutes.controller");

router.post("/", creategemRegistrationRoutes);

module.exports = router;