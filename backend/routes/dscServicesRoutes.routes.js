const express = require("express");
const router = express.Router();
const dscServiceRoutes = require("../controllers/dscServicesRoutes.controller");

router.post("/", dscServiceRoutes.createdscServiceRoutes);

module.exports = router;