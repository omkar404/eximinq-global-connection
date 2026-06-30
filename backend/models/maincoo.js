const mongoose = require("mongoose");

const MainCooSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    entity: { type: String, trim: true },

    role: {
      type: String,
      enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder"],
      required: true,
    },

    partner: { type: Boolean, default: false },

    type: {
      type: String,
      required: true,
      enum: [
        "ENROLL",
        "certificate_of_origin_enroll",
        "HERO",
        "CTA",
        "PREFERENTIAL_COO",
        "NON_PREFERENTIAL_COO",
        "FooterCTA",
        "Startup_Small_Plan",
        "MID_SIZE_EXPORTER_PLAN",
        "LARGE_EXPORTER_PLAN",
      ],
    },

    flow: {
      type: String,
      enum: ["PREFERENTIAL_COO", "NON_PREFERENTIAL_COO"],
    },

    cooType: { type: String },

    /* 🔑 NEW: FTA Agreement selected (Preferential CoO only) */
    ftaagreement: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MainCoo", MainCooSchema);