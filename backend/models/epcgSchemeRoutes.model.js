const mongoose = require("mongoose");

const EpcgSchemeLeadSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "EPCG Scheme Enquiry Registration",
    },
    machineValue: {
      type: String,
      trim: true,
      default: null,
    },
    dutyRate: {
      type: String,
      trim: true,
      default: null,
    },
    companyName: {
      type: String,
      trim: true,
      default: null,
    },
    personName: {
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
    name: {
      type: String,
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
    source: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("EpcgSchemeLead", EpcgSchemeLeadSchema);
