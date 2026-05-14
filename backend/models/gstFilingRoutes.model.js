const mongoose = require("mongoose");

const gstFilingRoutesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "GST Filing Health Check",
    },
    gstin: {
      type: String,
      trim: true,
      default: null,
    },
    financialYear: {
      type: String,
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
    type: {
      type: String,
      required: true,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("gstFilingRoutes", gstFilingRoutesSchema);
