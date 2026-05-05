const express = require("express");
const router = express.Router();

const { createwarehousingSolutionsRoutes } = require("../controllers/warehousingSolutionsRoutes.controller");

router.post("/", createwarehousingSolutionsRoutes);

module.exports = router;