const express = require("express");
const router = express.Router();

const {
  createcooEnroll,
} = require("../controllers/maincoo.controller");

/* ===========================
   ENROLLMENT ROUTE
=========================== */
router.post("/", createcooEnroll);

module.exports = router;
