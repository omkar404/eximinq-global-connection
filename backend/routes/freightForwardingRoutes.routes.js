const express = require("express");
const router = express.Router();

const { createfreightForwardingRoutes } = require("../controllers/freightForwardingRoutes.controller");

router.post("/", createfreightForwardingRoutes);

module.exports = router;