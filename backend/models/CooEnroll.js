const mongoose = require("mongoose");

const CooEnrollSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    entity: { type: String },
    email: { type: String, required: true },
    role: { type: String, required: true },
    partner: { type: Boolean, default: false },
    certificateType: {
      type: String,
      enum: ["PREFERENTIAL_COO", "NON_PREFERENTIAL_COO"],
      default: null, // 👈 IMPORTANT
    },
    type: {
      type: String,
      required: true, // ENROLL / PREFERENTIAL_COO / NON_PREFERENTIAL_COO
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CooEnroll", CooEnrollSchema);
