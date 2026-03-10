// models/importManagement.model.js

const mongoose = require("mongoose");

const VALID_TYPES = [
  "Enroll",
  "Start_Application",
];

const starexportRoutesSchema = new mongoose.Schema(
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

module.exports = mongoose.model("starexportRoutes", starexportRoutesSchema);