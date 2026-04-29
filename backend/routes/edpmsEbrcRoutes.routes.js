const express = require("express");
const router = express.Router();

const { createedpmsEbrcRoutes } = require("../controllers/edpmsEbrcRoutes.controller");

router.post("/", createedpmsEbrcRoutes);

module.exports = router;