// const express = require("express");
// const router = express.Router();

// // ✅ Fix: "controll" → "controller"
// const scometlicensingRoutes = require("../controllers/scometlicensingRoutes.controller");

// router.post("/", scometlicensingRoutes.createscometlicensingRoutes);

// module.exports = router;

const express = require("express");
const router = express.Router();

const { createscometlicensingRoutes } = require("../controllers/scometlicensingRoutes.controller");

router.post("/", createscometlicensingRoutes);

module.exports = router;