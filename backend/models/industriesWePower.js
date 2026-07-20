const mongoose = require("mongoose");

const IndustrialSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      trim: true,
      default: null,
    },
    contactPersonName: {
      type: String,
      trim: true,
      default: null,
    },
    name: String,
    mobile: String,
    entity: String,
    email: String,
    role: String,
    partner: Boolean,

    // 🔑 landing page identifier
    type: {
      type: String,
      required: true,
    },

    // 🔑 conditional fields (future-safe)
    dgftService: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IndustriesWePower", IndustrialSchema);