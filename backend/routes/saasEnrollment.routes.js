const express = require("express");
const router = express.Router();

const {
    enrollSaas,
} = require("../controllers/saasEnrollment.controller");

router.post("/", enrollSaas);

module.exports = router;