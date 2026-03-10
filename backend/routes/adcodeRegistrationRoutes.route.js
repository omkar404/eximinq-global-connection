// // const express = require("express");
// // const router = express.Router();

// // const { createAdcodeRegistration } = require("../controllers/adcodeRegistration.controller");

// // router.post("/ad-code-registration", createAdcodeRegistration);

// // module.exports = router;


// const express = require("express");
// const router = express.Router();

// const {
//     createAdcodeRegistration,
// } = require("../controllers/adcodeRegistration.controller");   

// router.post("/", createAdcodeRegistration);

// module.exports = router;


// const express = require("express");
// const router = express.Router();

// const { createAdcodeRegistration } = require("../controllers/adcodeRegistration.controller");

// // call controller
// router.post("/", createAdcodeRegistration);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { createAdcodeRegistration } = require("../controllers/adcodeRegistration.controller");

router.post("/", createAdcodeRegistration);

module.exports = router;