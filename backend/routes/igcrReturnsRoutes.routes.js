const express = require("express");
const router = express.Router();

// ✅ Fix: "controll" → "controller"
const {
  createigcrReturnsRoutes,
  igcrReturnsRoutes,
  igcrReturnsRoutesById,
} = require("../controllers/igcrReturnsRoutes.controller");

router.post("/", createigcrReturnsRoutes);
router.get("/", igcrReturnsRoutes);
router.get("/:id", igcrReturnsRoutesById);

module.exports = router;
