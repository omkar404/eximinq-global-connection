const mongoose = require("mongoose"); // ✅ This line was missing

const igstrefundRoutesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "IGST Refund Registration",
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
    shippingBillNo: {
      type: String,
      trim: true,
      default: null,
    },
    shippingBillDate: {
      type: String,
      trim: true,
      default: null,
    },
    portCode: {
      type: String,
      trim: true,
      default: null,
    },
    igstAmount: {
      type: String,
      trim: true,
      default: null,
    },
    numberOfBills: {
      type: String,
      trim: true,
      default: null,
    },
    igstPortCode: {
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
  "igstrefundRoutes",
  igstrefundRoutesSchema
);