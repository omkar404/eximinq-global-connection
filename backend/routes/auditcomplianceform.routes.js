const express = require("express");
const router = express.Router();

const {
    createAuditComplianceForm,
} = require("../controllers/auditcomplianceform.controller");

router.post("/", createAuditComplianceForm);

module.exports = router;