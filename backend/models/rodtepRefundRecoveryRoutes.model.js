// const mongoose = require("mongoose");

// const VALID_TYPES = ["epcg_closure"];

// const LICENSE_TYPES = [
// "RoDTEP", "IGST", "Drawback"
// ];

// const ISSUE_TYPES = [
//   "Scroll Expired / Lapsed",
//   "Scroll Amount Mismatch",
//   "EGM Error (Export General Manifest)",
//   "Scrip Generation Issue",
//   "Other"
// ];

// const rodtepRefundRecoveryRoutes = new mongoose.Schema(
// {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   mobile: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true
//   },

//   licenseType: {
//     type: String,
//     enum: LICENSE_TYPES,
//     default: null
//   },

//   licenseNumber: {
//     type: String,
//     default: null,
//     trim: true
//   },

//   issueDescription: {
//     type: String,
//     enum: ISSUE_TYPES,
//     default: null
//   },

//   additionalDetails: {
//     type: String,
//     default: null
//   },

//   type: {
//     type: String,
//     required: true,
//     enum: VALID_TYPES
//   }

// },
// { timestamps: true }
// );

// module.exports = mongoose.model(
//   "rodtepRefundRecoveryRoutes",
//   rodtepRefundRecoveryRoutes
// );

const mongoose = require("mongoose");

// ✅ Fix: "epcg_closure" → "recovery_audit" (frontend yahi bhejta hai)
const VALID_TYPES = ["recovery_audit"];

const LICENSE_TYPES = ["RoDTEP", "IGST", "Drawback"];

// ✅ Fix: IGST aur Drawback issues bhi add kiye
const ISSUE_TYPES = [
  // RoDTEP
  "Scroll Expired / Lapsed",
  "Scroll Amount Mismatch",
  "EGM Error (Export General Manifest)",
  "Scrip Generation Issue",
  // IGST
  "SB005 Error (Invoice Mismatch)",
  "PFMS Validation Pending",
  "Scroll Generated but Not Credited",
  "EGM Not Filed",
  // Drawback
  "Brand Rate Fixation",
  "Supplementary Claim",
  "Drawback Amount Short Credited",
  "Section 74 Re-Export Claim",
  // Common
  "Other",
];

const rodtepRefundRecoverySchema = new mongoose.Schema(
  {
    name:              { type: String, required: true, trim: true },
    mobile:            { type: String, default: null, trim: true }, // ✅ Fix: required → optional
    email:             { type: String, required: true, trim: true, lowercase: true },
    licenseType:       { type: String, enum: LICENSE_TYPES, default: null },
    licenseNumber:     { type: String, default: null, trim: true },
    issueDescription:  { type: String, enum: ISSUE_TYPES, default: null },
    additionalDetails: { type: String, default: null },
    estimatedAmount:   { type: String, default: null }, // ✅ Fix: frontend se aata hai
    type:              { type: String, required: true, enum: VALID_TYPES },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RodtepRefundRecovery", rodtepRefundRecoverySchema);