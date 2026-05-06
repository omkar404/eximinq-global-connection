const express = require("express");
const router = express.Router();

const { createdpdRegistrationRoutes } = require("../controllers/dpdRegistrationRoutes.controller");

router.post("/", createdpdRegistrationRoutes);

module.exports = router;