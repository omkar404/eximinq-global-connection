// routes/importManagementRoutes.route.js

// const express = require("express");
// const router = express.Router();
// const importController = require("../controllers/importManagement.controller");

// router.post("/", importController.createImportManagement);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { createimportManagementRoutes } = require("../controllers/importManagement.controller");

router.post("/", createimportManagementRoutes);

module.exports = router;