const express = require("express");
const router = express.Router();

const {
    createEnroll,
} = require("../controllers/importExportCode.controller");

router.post("/", createEnroll);

module.exports = router;