const mongoose = require("mongoose");

const EnrollSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    entity: { type: String },
    email: { type: String, required: true },
    role: { type: String, required: true },
    partner: { type: Boolean, default: false },
    type: {
      type: String,
      enum: ["ENROLL"],
      required: true,
    },
    source: {
      type: String,
      default: "Import Export Code (IEC) Registration Online",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enroll", EnrollSchema);
