const mongoose = require("mongoose");

// ✅ Fix: VALID_TYPES updated to match all types controller handles
const VALID_TYPES = [
  "Enroll",
  "Process_Payment",
  "QUICK_FORM",
  "IEC_PROFILE_UPDATE",
  "IEC_REGISTRATION",
  "IEC_ANNUAL_UPDATE",
  "AD_Code_Registration",
  "IFSC_Registration",
];

const moowrSchemeSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    mobile:   { type: String, required: true, trim: true },
    email:    { type: String, default: null , trim: true, lowercase: true },
    entity:   { type: String, default: null, trim: true },
    role: {
      type: String,
      default: null,
      enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder", null],
    },
    type:     { type: String, required: true, enum: VALID_TYPES },
    category: { type: String, default: null },
    issue:    { type: String, default: null },
    partner:  { type: Boolean, default: false },
  },
  { timestamps: true }
);

// ✅ Fix: consistent variable name
module.exports = mongoose.model("MoowrScheme", moowrSchemeSchema);