const express = require("express");
const router = express.Router();

const { createwpcLicenseRoutes  } = require("../controllers/wpcLicenseRoutes.controller");

router.post("/", createwpcLicenseRoutes );

module.exports = router;