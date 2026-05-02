const express = require("express");
const router = express.Router();

const { createrexRegistrationRoutes } = require("../controllers/rexRegistrationRoutes.controller");

router.post("/", createrexRegistrationRoutes);

module.exports = router;