const mongoose = require("mongoose");

const EnrollSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    entity: { type: String },
    email: { type: String, required: true },
    role: { type: String, required: true },
    partner: { type: Boolean, default: false },

    // 🔑 page-based enrollment source
    type: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MainEnroll", EnrollSchema);
