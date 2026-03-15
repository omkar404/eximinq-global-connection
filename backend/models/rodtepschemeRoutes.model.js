const mongoose = require("mongoose");

const VALID_TYPES = [
  "Enroll",
  "Get_Expert_Help",
  "QUICK_FORM",
];

const rodtepschemeRoutes = new mongoose.Schema( // ✅ Fix: scometlicensingSchema → eopextensionSchema
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

module.exports = mongoose.model("rodtepschemeRoutes", rodtepschemeRoutes); // ✅ Fix: ScometLicensing → EopExtension