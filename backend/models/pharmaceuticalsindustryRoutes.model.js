
const mongoose = require("mongoose");

const pharmaceuticalsindustryRoutesSchema = new mongoose.Schema(
  {
    // service: {
    //   type: String,
    //   trim: true,
    //   default: null,     // ✅ Not required — can be null
    // },
    // port: {          // ✅ Fixed: was "port{" with missing colon, wrong field name
    //   type: String,
    //   trim: true,
    //   default: null,
    // },
    name: {
      type: String,
      trim: true,
      default: null,     // ✅ Not required — null for QUICK_FORM
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
      default: null,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: null,     // ✅ Not required — null for QUICK_FORM
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
      required: true,
      trim: true,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("pharmaceuticalsindustryRoutes", pharmaceuticalsindustryRoutesSchema);