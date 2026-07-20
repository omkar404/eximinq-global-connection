const express = require("express");
const router = express.Router();

const {
  createaqcsPqmsRoutes,
  aqcsPqmsRoutes,
  aqcsPqmsRoutesById,
} = require("../controllers/aqcsPqmsRoutes.controller");

router.post("/", createaqcsPqmsRoutes);
router.get("/", aqcsPqmsRoutes);
router.get("/:id", aqcsPqmsRoutesById);

module.exports = router;
