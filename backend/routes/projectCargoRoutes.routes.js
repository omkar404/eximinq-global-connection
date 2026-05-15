const express = require("express");
const router = express.Router();

const { createprojectCargoRoutes } = require("../controllers/projectCargoRoutes.controller");

router.post("/", createprojectCargoRoutes);

module.exports = router;