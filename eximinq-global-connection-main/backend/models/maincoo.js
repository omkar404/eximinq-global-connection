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
        "certificate_of_origin_enroll",
        "HERO",
        "PREFERENTIAL",
        "NON_PREFERENTIAL",
        "CTA",
        "FooterCTA",
      ],
    },

    /* HERO only */
    flow: {
      type: String,
      enum: ["preferential", "non_preferential"],
    },

    /* Preferential / Non-Preferential only */
    cooType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MainCoo", MainCooSchema);
