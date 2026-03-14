const express = require("express");
const router = express.Router();
const {
  serviceaeocertification,
} = require("../controllers/serviceaeocertification.controller");

router.post("/", serviceaeocertification);

module.exports = router;