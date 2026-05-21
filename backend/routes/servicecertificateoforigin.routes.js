const express = require("express");
const router = express.Router();

const {
    createservicecertificateoforigin,
} = require("../controllers/servicecertificateoforigin.controller");

router.post("/", createservicecertificateoforigin);

module.exports = router;