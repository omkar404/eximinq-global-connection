const mongoose = require("mongoose");

const saasEnrollmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    entity: {
      type: String,
      default: null,
    },

    role: {
      type: String,
      default: null,
    },

    partner: {
      type: Boolean,
      default: false,
    },

    /* request classification */

    category: {
      type: String,
      enum: ["HISTORICAL_DATA", "SAAS_SUBSCRIPTION", "WAITLIST"],
      required: true,
    },

    /* selections */

    selectedPlan: {
      type: String,
      default: null,
    },

    billing: {
      type: String,
      enum: ["quarterly", "annual"],
      default: null,
    },

    price: {
      type: String,
      default: null,
    },

    interest: {
      type: String,
      default: null,
    },

    createdDate: {
      type: String,
    },

    createdTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("saasEnrollmentModel", saasEnrollmentSchema);