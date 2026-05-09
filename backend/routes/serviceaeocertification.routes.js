const express = require("express");
const router = express.Router();
const {
  createserviceaeocertification,
} = require("../controllers/serviceaeocertification.controller");

router.post("/", createserviceaeocertification);
module.exports = router;