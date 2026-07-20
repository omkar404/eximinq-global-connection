const express = require("express");
const router = express.Router();

const {
  createnodueCertificateRoutes,
  getAllnodueCertificateRoutes,
  nodueCertificateRoutesById,
} = require("../controllers/nodueCertificateRoutes.controller");

router.post("/", createnodueCertificateRoutes);
router.get("/", getAllnodueCertificateRoutes);
router.get("/:id", nodueCertificateRoutesById);

module.exports = router;
