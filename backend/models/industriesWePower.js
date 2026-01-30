const mongoose = require("mongoose");

const IndustrialSchema = new mongoose.Schema(
  {
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