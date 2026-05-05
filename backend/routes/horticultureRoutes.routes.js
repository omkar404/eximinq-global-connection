const express = require("express");
const router = express.Router();

const { createhorticultureRoutes } = require("../controllers/horticultureRoutes.controller");

router.post("/", createhorticultureRoutes);

module.exports = router;