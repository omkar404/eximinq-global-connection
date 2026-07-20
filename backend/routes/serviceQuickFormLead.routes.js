const express = require("express");
const router = express.Router();

const {
  createServiceQuickFormLead,
  getServiceQuickFormLeadById,
  getServiceQuickFormLeads,
} = require("../controllers/serviceQuickFormLead.controller");

router.get("/", getServiceQuickFormLeads);
router.get("/:id", getServiceQuickFormLeadById);
router.post("/", createServiceQuickFormLead);

module.exports = router;
