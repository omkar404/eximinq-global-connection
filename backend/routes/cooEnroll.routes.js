const express = require("express");
const router = express.Router();

const {
  createcooEnroll,
} = require("../controllers/maincoo.controller");

router.post("/", createcooEnroll);

module.exports = router;
