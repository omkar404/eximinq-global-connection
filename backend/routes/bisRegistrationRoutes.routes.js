const express = require("express");
const router = express.Router();

const {
  createbisRegistrationRoutes,
  bisRegistrationRoutes,
  bisRegistrationRoutesById,
} = require("../controllers/bisRegistrationRoutes.controller");

router.post("/", createbisRegistrationRoutes);
router.get("/", bisRegistrationRoutes);
router.get("/:id", bisRegistrationRoutesById);

module.exports = router;
