const express = require("express");
const router = express.Router();

const {
  createdutypaymentEclRoutes,
  dutypaymentEclRoutes,
  dutypaymentEclRoutesById,
} = require("../controllers/dutypaymentEclRoutes.controller");

router.post("/", createdutypaymentEclRoutes);
router.get("/", dutypaymentEclRoutes);
router.get("/:id", dutypaymentEclRoutesById);

module.exports = router;
