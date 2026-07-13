const mongoose = require("mongoose");

const AdcodeRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    companyName: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    personName: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    portCategory: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    portCode: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    portLocation: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    bank: {
      type: String,
      required: false,
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
      required: false,
      trim: true,
      default: null,
    },
    entity: {
      type: String,
      trim: true,
      default: "",
    },
    role: {
      type: String,
      trim: true,
      default: "",
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
      default: "",
    },
    issue: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdcodeRegistration", AdcodeRegistrationSchema);