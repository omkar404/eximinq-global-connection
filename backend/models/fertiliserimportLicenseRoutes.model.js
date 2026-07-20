const mongoose = require("mongoose"); // ✅ This line was missing

const fertiliserimportLicenseRoutesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "Fertilizer Registration",
    },
    fertilizerType: {
      type: String,
      trim: true,
      default: null,
    },
    state: {
      type: String,
      trim: true,
      default: null,
    },
    name: {
      type: String,
      trim: true,
      default: null,
    },
    companyName: {
      type: String,
      trim: true,
      default: null,
    },
    contactPersonName: {
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
  "fertiliserimportLicenseRoutes",
  fertiliserimportLicenseRoutesSchema
);