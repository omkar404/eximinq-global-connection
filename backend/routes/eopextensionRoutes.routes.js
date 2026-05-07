const express = require("express");
const router = express.Router();

const { createeopextensionRoutes } = require("../controllers/eopextensionRoutes.controller");

router.post("/", createeopextensionRoutes);

module.exports = router;