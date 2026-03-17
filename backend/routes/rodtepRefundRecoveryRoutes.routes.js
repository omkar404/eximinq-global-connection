const express = require("express");
const router = express.Router();

const controller = require("../controllers/rodtepRefundRecoveryRoutes.controller");

// ✅ Correct function name
router.post("/", controller.createRecoveryAudit);

module.exports = router;