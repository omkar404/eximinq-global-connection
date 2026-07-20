const express = require("express");
const router = express.Router();

const {
  createpollutionControlRoutes,
  pollutionControlRoutes,
  pollutionControlRoutesById,
} = require("../controllers/pollutionControlRoutes.controller");

router.post("/", createpollutionControlRoutes);
router.get("/", pollutionControlRoutes);
router.get("/:id", pollutionControlRoutesById);

module.exports = router;
