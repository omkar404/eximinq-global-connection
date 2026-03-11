// models/dscServices.model.js

const mongoose = require("mongoose");

const VALID_TYPES = [
  "Enroll",
  "DGFT_ICEGATE",
  "Combo_Pack",
  "IEC_PROFILE_UPDATE",
  "IEC_REGISTRATION",
  "IEC_ANNUAL_UPDATE",
];

const dscServicesSchema = new mongoose.Schema(
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
    // Populated when type === "Enroll"
    category: {
      type: String,
      default: null,
    },
    // Populated when type === "IEC_PROFILE_UPDATE"
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
    timestamps: true,
  }
);

// FIX 2: was exporting 'dscServicesRoutesSchema' which doesn't exist.
//         The schema is declared as 'dscServicesSchema' — must match exactly.
//         This caused: ReferenceError: dscServicesRoutesSchema is not defined
module.exports = mongoose.model("DscServices", dscServicesSchema);