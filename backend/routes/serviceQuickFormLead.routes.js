const express = require("express");
const router = express.Router();

const {
  createServiceQuickFormLead,
} = require("../controllers/serviceQuickFormLead.controller");

router.post("/", createServiceQuickFormLead);

module.exports = router;
