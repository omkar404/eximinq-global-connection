const express = require("express");
const router = express.Router();

const { createfactoryStuffingRoutes } = require("../controllers/factoryStuffingRoutes.controller");

router.post("/", createfactoryStuffingRoutes);

module.exports = router;