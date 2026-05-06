const express = require("express");
const router = express.Router();

const { createcopyrightRegistrationRoutes } = require("../controllers/copyrightRegistrationRoutes.controller");

router.post("/", createcopyrightRegistrationRoutes);

module.exports = router;