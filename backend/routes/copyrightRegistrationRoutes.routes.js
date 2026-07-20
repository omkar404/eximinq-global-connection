const express = require("express");
const router = express.Router();

const {
  createcopyrightRegistrationRoutes,
  copyrightRegistrationRoutes,
  ccopyrightRegistrationRoutesById,
} = require("../controllers/copyrightRegistrationRoutes.controller");

router.post("/", createcopyrightRegistrationRoutes);
router.get("/", copyrightRegistrationRoutes);
router.get("/:id", ccopyrightRegistrationRoutesById);

module.exports = router;
