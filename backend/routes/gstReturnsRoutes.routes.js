const express = require("express");
const router = express.Router();

const {
  creategstReturnsRoutes,
  gstReturnsRoutes,
  gstReturnsRoutesById,
} = require("../controllers/gstReturnsRoutes.controller");

router.post("/", creategstReturnsRoutes);
router.get("/", gstReturnsRoutes);
router.get("/:id", gstReturnsRoutesById);

module.exports = router;
