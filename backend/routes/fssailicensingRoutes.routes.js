const express = require("express");
const router = express.Router();

const { createfssailicensingRoutes } = require("../controllers/fssailicensingRoutes.controller");

router.post("/", createfssailicensingRoutes);

module.exports = router;