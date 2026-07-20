/*-----------------------*/
// models/icegateRegistration.model.js

const mongoose = require("mongoose");

const icegateRegistrationSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: null,     // ✅ Not required — can be null
    },
    port: {
      type: String,
      trim: true,
      default: null,
    },
    companyName: {
      type: String,
      trim: true,
      default: null,     // ✅ ADDED
    },
    personName: {
      type: String,
      trim: true,
      default: null,     // ✅ ADDED
    },
    name: {
      type: String,
      trim: true,
      default: null,     // ✅ Not required — null for QUICK_FORM
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
      default: null,     // ✅ Not required — null for QUICK_FORM
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("IcegateRegistration", icegateRegistrationSchema);