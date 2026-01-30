const express = require("express");
const router = express.Router();
const {
  createDutyCheck,
} = require("../controllers/dutyCheck.controller");

router.post("/", createDutyCheck);

module.exports = router;
