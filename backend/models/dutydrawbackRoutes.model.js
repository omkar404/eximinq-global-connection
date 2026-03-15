const mongoose = require("mongoose");

const VALID_TYPES = [
  "Enroll",
  "Apply_for_Brand_Rate",
  "QUICK_FORM",
];

const dutydrawbackRoutes = new mongoose.Schema( // ✅ Fix: scometlicensingSchema → eopextensionSchema
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

module.exports = mongoose.model("dutydrawbackRoutes", dutydrawbackRoutes); // ✅ Fix: ScometLicensing → EopExtension