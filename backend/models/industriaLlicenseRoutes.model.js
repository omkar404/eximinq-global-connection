const mongoose = require("mongoose"); // ✅ This line was missing

const industriaLlicenseRoutesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "EDPMS  Registration",
    },
    product: {
      type: String,
      trim: true,
      default: null,
    },
    investment: {
      type: String,
      trim: true,
      default: null,
    },
    location: {
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
    //   required: true,
      trim: true,
      default: null,
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
  "industriaLlicenseRoutes",
  industriaLlicenseRoutesSchema
);