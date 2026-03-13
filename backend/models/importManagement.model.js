// // models/importManagement.model.js

// const mongoose = require("mongoose");

// const VALID_TYPES = [
//   "Enroll",
//   "IEC_REGISTRATION",
//   "IEC_ANNUAL_UPDATE",
//   "IEC_PROFILE_UPDATE",
//   "Steel_Import_NOC_SIMS",
//   "Copper_(NFMIMS)",
//   "Register_Aluminium",
//   "Get_CIMS_No",
//   "Get_PIMS_No",
//   "Register_Chips",
//   "AD_Code_Registration",
//   "IFSC_Registration",
//   "IMS_Registration",
// ];

// const importManagementSchema = new mongoose.Schema(
//   {

//     service: {
//       type: String,
//       // required: true,
//       trim: true,
//       enum: [
//     "Steel Import NOC (SIMS)",
//     "Coal Import Reg (CIMS)",
//     "Paper Import Reg (PIMS)",
//     "Chip Import Reg (CHIMS)",
//     "Non-Ferrous Reg (NFMIMS)",
//       ],
//     },

//     company: {
//       type: String,
//       required: true,
//       default: null,
//     },

//     mobile: {
//       type: String,
//       required: true,  // ✅ only required field from QuickForm
//       trim: true,
//     },

//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     mobile: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//     },
//     entity: {
//       type: String,
//       default: null,
//       trim: true,
//     },
//     role: {
//       type: String,
//       default: null,
//       enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder", null],
//     },
//     type: {
//       type: String,
//       required: true,
//       enum: VALID_TYPES,
//     },
//     // Only populated when type === "Enroll"
//     category: {
//       type: String,
//       default: null,
//     },
//     // Only populated when type === "IEC_PROFILE_UPDATE"
//     issue: {
//       type: String,
//       default: null,
//     },
//     // "Interested in being a Partner" checkbox
//     partner: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true, // auto adds createdAt + updatedAt
//   }
// );

// module.exports = mongoose.model("ImportManagement", importManagementSchema);

// models/importManagement.model.js

const mongoose = require("mongoose");

const VALID_TYPES = [
  "QUICK_FORM",
  "Enroll",
  "IEC_REGISTRATION",
  "IEC_ANNUAL_UPDATE",
  "IEC_PROFILE_UPDATE",
  "Steel_Import_NOC_SIMS",
  "Copper_(NFMIMS)",
  "Register_Aluminium",
  "Get_CIMS_No",
  "Get_PIMS_No",
  "Register_Chips",
  "AD_Code_Registration",
  "IFSC_Registration",
  "IMS_Registration",
];

const importManagementSchema = new mongoose.Schema(
{
  service: {
    type: String,
    trim: true,
    enum: [
      "Steel Import NOC (SIMS)",
      "Coal Import Reg (CIMS)",
      "Paper Import Reg (PIMS)",
      "Chip Import Reg (CHIMS)",
      "Non-Ferrous Reg (NFMIMS)",
      null
    ],
    default: null
  },

  company: {
    type: String,
    trim: true,
    default: null
  },

  name: {
    type: String,
    trim: true,
    default: null
  },

  mobile: {
    type: String,
    required: true,
    trim: true,
    match: [/^[6-9]\d{9}$/, "Please enter valid Indian mobile number"]
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please use valid email address"]
  },

  entity: {
    type: String,
    trim: true,
    default: null
  },

  role: {
    type: String,
    enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder", null],
    default: null
  },

  type: {
    type: String,
    enum: VALID_TYPES,
    required: true
  },

  // Only used when type === "Enroll"
  category: {
    type: String,
    default: null
  },

  // Only used when type === "IEC_PROFILE_UPDATE"
  issue: {
    type: String,
    default: null
  },

  partner: {
    type: Boolean,
    default: false
  }

},
{
  timestamps: true
});

module.exports = mongoose.model(
  "ImportManagement",
  importManagementSchema
);