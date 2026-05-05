const express = require("express");
const router = express.Router();

const { createinlandTransportationRoutes } = require("../controllers/inlandTransportationRoutes.controller");

router.post("/", createinlandTransportationRoutes);

module.exports = router;