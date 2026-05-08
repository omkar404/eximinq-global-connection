const express = require("express");
const router = express.Router();

const { createdscServiceRoutes } = require("../controllers/dscServicesRoutes.controller");

router.post("/", createdscServiceRoutes);

module.exports = router;