const mongoose = require("mongoose"); // ✅ This line was missing

const servicecertificateoforiginSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "Certificate of Origin Registration",
    },
    destinationCountry: {
      type: String,
      trim: true,
      default: null,
    },
    hsCode: {
      type: String,
      trim: true,
      default: null,
    },
    ftaagreement: {
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
    planCategory: {
      type: String,
      trim: true,
      default: null,
    },
    planName: {
      type: String,
      trim: true,
      default: null,
    },
    monthlyCooLimit: {
      type: String,
      trim: true,
      default: null,
    },
    additionalCooRate: {
      type: String,
      trim: true,
      default: null,
    },
    planPrice: {
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
  "servicecertificateoforigin",
  servicecertificateoforiginSchema
);
