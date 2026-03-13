// const express = require("express");
// const router = express.Router();

// const {
//     createicegateRegistration,
// } = require("../controllers/icegateRegistration.controller");   

// router.post("/", createicegateRegistration);

// module.exports = router;

// routes/icegateRegistration.routes.js

const express = require("express");
const router  = express.Router();
const icegateController = require("../controllers/icegateRegistration.controller");

router.post("/", icegateController.createIcegateRegistration);

module.exports = router;