// routes/importManagementRoutes.route.js

const express = require("express");
const router = express.Router();
const importController = require("../controllers/importManagement.controller");

// '/' because server.js already mounts this router at
// app.use("/api/import-management-registration", importManagementRoutes)
// Final URL: POST /api/import-management-registration
router.post("/", importController.createImportManagement);

module.exports = router;