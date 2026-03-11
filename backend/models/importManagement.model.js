// models/importManagement.model.js

const mongoose = require("mongoose");

const VALID_TYPES = [
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
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    entity: {
      type: String,
      default: null,
      trim: true,
    },
    role: {
      type: String,
      default: null,
      enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder", null],
    },
    type: {
      type: String,
      required: true,
      enum: VALID_TYPES,
    },
    // Only populated when type === "Enroll"
    category: {
      type: String,
      default: null,
    },
    // Only populated when type === "IEC_PROFILE_UPDATE"
    issue: {
      type: String,
      default: null,
    },
    // "Interested in being a Partner" checkbox
    partner: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // auto adds createdAt + updatedAt
  }
);

module.exports = mongoose.model("ImportManagement", importManagementSchema);