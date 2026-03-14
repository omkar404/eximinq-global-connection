const mongoose = require("mongoose");
// "Enroll",
// "End_to_End_AEO_Consultancy",
const VALID_TYPES = [
  "Enroll",
  "End_to_End_AEO_Consultancy",
  "QUICK_FORM",
];

const serviceaeocertification = new mongoose.Schema(
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

module.exports = mongoose.model("serviceaeocertification", serviceaeocertification);
