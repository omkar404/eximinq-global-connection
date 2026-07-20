const mongoose = require("mongoose");

const foodagroindustryRoutesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: null,
    },
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

    mobile: {
      type: String,
      trim: true,
      default: null,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },
    entity: {
      type: String,
      trim: true,
      default: null,
    },
    role: {
      type: String,
      trim: true,
      default: null,
    },
    partner: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      trim: true,
      default: null, // ✅ Fixed: was required:true but controller sets type || null
    },
    category: {
      type: String,
      trim: true,
      default: null,
    },
    issue: {
      type: String,
      trim: true,
      default: null,
    },
    // ✅ Added missing fields that controller saves
    licenseType: {
      type: String,
      trim: true,
      default: null,
    },
    estimatedAmount: {
      type: String,
      trim: true,
      default: null,
    },
    issueDescription: {
      type: String,
      trim: true,
      default: null,
    },
    additionalDetails: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "foodagroindustryRoutes",
  foodagroindustryRoutesSchema
);