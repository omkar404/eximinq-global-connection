const mongoose = require("mongoose"); // ✅ This line was missing

const uniipCertificationRoutesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "EDPMS  Registration",
    },
    unNumber: {
      type: String,
      trim: true,
      default: null,
    },
    packagingType: {
      type: String,
      trim: true,
      default: null,
    },
    name: {
      type: String,
      trim: true,
      default: null,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: null,
    },
    entity: {
      type: String,
      trim: true,
      default: null,
    },
    role: {
      type: String,
      trim: true,
      default: null,
    },
    partner: {
      type: Boolean,
      default: false,
    },
    portName: {
      type: String,
      trim: true,
      default: null,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
      default: null,
    },
    issue: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "uniipCertificationRoutes",
  uniipCertificationRoutesSchema
);