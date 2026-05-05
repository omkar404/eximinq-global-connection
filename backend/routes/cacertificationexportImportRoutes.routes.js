const express = require("express");
const router = express.Router();

const { createcacertificationexportImportRoutes } = require("../controllers/cacertificationexportImportRoutes.controller");

router.post("/", createcacertificationexportImportRoutes);

module.exports = router;