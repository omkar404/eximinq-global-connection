const express = require("express");
const router = express.Router();

const {
  createinlandTransportationRoutes,
  inlandTransportationRoutes,
  inlandTransportationRoutesById,
} = require("../controllers/inlandTransportationRoutes.controller");

router.post("/", createinlandTransportationRoutes);
router.get("/", inlandTransportationRoutes);
router.get("/:id", inlandTransportationRoutesById);

module.exports = router;
