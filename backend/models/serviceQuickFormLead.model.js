const mongoose = require("mongoose");

const serviceQuickFormLeadSchema = new mongoose.Schema(
  {
    serviceKey: {
      type: String,
      required: true,
      trim: true,
    },
    serviceLabel: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
      default: "QUICK_FORM",
    },
    source: {
      type: String,
      trim: true,
      default: null,
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "serviceQuickFormLead",
  serviceQuickFormLeadSchema
);
