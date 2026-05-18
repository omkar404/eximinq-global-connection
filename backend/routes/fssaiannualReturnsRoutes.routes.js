const express = require("express");
const router = express.Router();

const { createfssaiannualReturnsRoutes } = require("../controllers/fssaiannualReturnsRoutes.controller");

router.post("/", createfssaiannualReturnsRoutes);

module.exports = router;