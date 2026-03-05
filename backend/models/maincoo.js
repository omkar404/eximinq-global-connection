const mongoose = require("mongoose");

const MainCooSchema = new mongoose.Schema(
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
      lowercase: true,
      trim: true,
    },

    entity: {
      type: String,
      trim: true,
    },

    role: {
      type: String,
      enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder"],
      required: true,
    },

    partner: {
      type: Boolean,
      default: false,
    },

    /* 🔑 SOURCE / TYPE */
    type: {
      type: String,
      required: true,
      enum: [
        "ENROLL",
        "certificate_of_origin_enroll",
        "HERO",
        "PREFERENTIAL_COO",
        "NON_PREFERENTIAL_COO",
        "CTA",
        "FooterCTA",
        "Startup_Small_Plan",
        "MID_SIZE_EXPORTER_PLAN",
        "LARGE_EXPORTER_PLAN",
      ],
    },

    /* HERO only */
    flow: {
      type: String,
      enum: ["PREFERENTIAL_COO", "NON_PREFERENTIAL_COO"],
    },

    /* Preferential / Non-Preferential only */
    cooType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MainCoo", MainCooSchema);
