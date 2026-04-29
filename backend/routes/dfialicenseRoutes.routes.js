const express = require("express");
const router = express.Router();

const { createdfialicenseRoutes } = require("../controllers/dfialicenseRoutes.controller");

router.post("/", createdfialicenseRoutes);

module.exports = router;