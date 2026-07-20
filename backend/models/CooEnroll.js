const mongoose = require("mongoose");

const CooEnrollSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
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

    mobile: { type: String, required: true },
    entity: { type: String },
    email: { type: String, required: true },
    role: { type: String, required: true },
    partner: { type: Boolean, default: false },
    // certificateType: {
    //   type: String,
    //   enum: ["PREFERENTIAL_COO", "NON_PREFERENTIAL_COO", "Startup_Small_Plan", "MID_SIZE_EXPORTER_PLAN", "LARGE_EXPORTER_PLAN"],
    //   default: null, // 👈 IMPORTANT
    // },
    certificateType: {
  type: String,
  enum: [
    "PREFERENTIAL_COO",
    "NON_PREFERENTIAL_COO",
    "Startup_Small_Plan",
    "MID_SIZE_EXPORTER_PLAN",
    "LARGE_EXPORTER_PLAN",
  ],
  default: null,
},
    type: {
      type: String,
      required: true, // ENROLL / PREFERENTIAL_COO / NON_PREFERENTIAL_COO
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CooEnroll", CooEnrollSchema);
