const mongoose = require("mongoose"); // ✅ This line was missing

const marineInsuranceRoutesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "Marine Insurance Registration",
    },
    commodityType: {
      type: String,
      trim: true,
      default: null,
    },
    sumInsured: {
      type: String,
      trim: true,
      default: null,
    },
    fromCountry: {
      type: String,
      trim: true,
      default: null,
    },
    toCountry: {
      type: String,
      trim: true,
      default: null,
    },
    name: {
      type: String,
      trim: true,
      default: null,
    },
    // mobile: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
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
  "marineInsuranceRoutes",
  marineInsuranceRoutesSchema
);