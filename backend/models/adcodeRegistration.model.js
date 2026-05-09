const mongoose = require("mongoose");

const AdcodeRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,   // ✅ change to false (or remove required)
      trim: true,
      default: null,
    },
    portCategory: {
      type: String,
      required: true,
      trim: true,
    },
    portCode: {
      type: String,
      required: true,
      trim: true,
    },
    portLocation: {
      type: String,
      required: true,
      trim: true,
    },
    bank: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: false,   // ✅ change to false (or remove required)
      trim: true,
      default: null,
    },
    entity: { type: String, trim: true, default: "" },
    role: { type: String, trim: true, default: "" },
    partner: { type: Boolean, default: false },
    type: { type: String, required: true, trim: true },
    category: { type: String, trim: true, default: "" },
    issue: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdcodeRegistration", AdcodeRegistrationSchema);