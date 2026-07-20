const express = require("express");
const router = express.Router();

const {
  createdesignRegistrationRoutes,
  designRegistrationRoutes,
  designRegistrationRoutesById,
} = require("../controllers/designRegistrationRoutes.controller");

router.post("/", createdesignRegistrationRoutes);
router.get("/", designRegistrationRoutes);
router.get("/:id", designRegistrationRoutesById);

module.exports = router;
