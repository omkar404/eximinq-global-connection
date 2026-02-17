const express = require("express");
const router = express.Router();

const {
    createImportExportCode,
} = require("../controllers/importExportCode.controller");

router.post("/", createImportExportCode);

module.exports = router;