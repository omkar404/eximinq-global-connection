const mongoose = require("mongoose");

const DutyCheckSchema = new mongoose.Schema(
  {
    destinationCountry: {
      type: String,
      required: true,
      trim: true,
    },
    hsCode: {
      type: String,
      required: true,
      length: 6,
    },
    mobile: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DutyCheck", DutyCheckSchema);
