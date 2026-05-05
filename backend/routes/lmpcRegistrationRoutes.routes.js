const express = require("express");
const router = express.Router();

const { createlmpcRegistrationRoutes } = require("../controllers/lmpcRegistrationRoutes.controller");

router.post("/", createlmpcRegistrationRoutes);

module.exports = router;