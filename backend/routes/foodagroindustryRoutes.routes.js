const express = require("express");
const router = express.Router();
const foodagroindustryRoutes = require("../controllers/foodagroindustryRoutes.controller");

router.post("/", foodagroindustryRoutes.createfoodagroindustryRoutes);

module.exports = router;
