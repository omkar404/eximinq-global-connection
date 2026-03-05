const express = require("express");
const router = express.Router();

const {
    createicegateRegistration,
} = require("../controllers/icegateRegistration.controller");   

router.post("/", createicegateRegistration);

module.exports = router;