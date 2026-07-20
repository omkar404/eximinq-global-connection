const express = require("express");
const router = express.Router();

const {
  createwarehousingSolutionsRoutes,
  warehousingSolutionsRoutes,
  warehousingSolutionsRoutesById,
} = require("../controllers/warehousingSolutionsRoutes.controller");

router.post("/", createwarehousingSolutionsRoutes);
router.get("/", warehousingSolutionsRoutes);
router.get("/:id", warehousingSolutionsRoutesById);

module.exports = router;
