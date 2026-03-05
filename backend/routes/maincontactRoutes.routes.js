const express = require("express");
const router = express.Router();

const {
    createContactInfo,
} = require("../controllers/maincontact.controller");

router.post("/", createContactInfo);

module.exports = router;