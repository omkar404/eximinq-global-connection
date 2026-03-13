const express = require("express");
const router = express.Router();
const {
  servicecertificateoforigin,
} = require("../controllers/servicecertificateoforigin.controller");

router.post("/", servicecertificateoforigin);

module.exports = router;
