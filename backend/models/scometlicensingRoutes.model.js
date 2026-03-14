const mongoose = require("mongoose");

const VALID_TYPES = [
  "Enroll",
  "Check_GAEC_Eligibility", // ✅ Fix: "Eligibilit" → "Eligibility" (typo)
  "QUICK_FORM",
];

const scometlicensingSchema = new mongoose.Schema( // ✅ Fix: renamed schema
  {
    name:     { type: String, required: true, trim: true },
    mobile:   { type: String, required: true, trim: true },
    email:    { type: String, required: true, trim: true, lowercase: true },
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

// ✅ Fix: model name updated to ScometLicensing
module.exports = mongoose.model("ScometLicensing", scometlicensingSchema);