// routes/importManagementRoutes.route.js

// const express = require("express");
// const router = express.Router();
// const importController = require("../controllers/importManagement.controller");

// router.post("/", importController.createImportManagement);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { createimportController } = require("../controllers/importManagement.controller");

router.post("/", createimportController);

module.exports = router;