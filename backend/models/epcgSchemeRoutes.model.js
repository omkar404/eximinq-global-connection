const mongoose = require("mongoose");

const epcgSchemeRoutesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      trim: true,
      default: "EPCG Scheme",
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
    mobile: {
      type: String,
      required: true,
      trim: true,
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

module.exports = mongoose.model("epcgSchemeRoutes", epcgSchemeRoutesSchema);
