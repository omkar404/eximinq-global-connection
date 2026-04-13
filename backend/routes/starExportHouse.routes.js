// const express = require("express");
// const router = express.Router();
// const starExportHouseController = require("../controllers/starExportHouse.controller");

// // '/' because server.js already mounts at /api/star-export-house
// router.post("/", starExportHouseController.createStarExportHouse);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { createstarExportHouse } = require("../controllers/starExportHouse.controller");

router.post("/", createstarExportHouse);

module.exports = router;