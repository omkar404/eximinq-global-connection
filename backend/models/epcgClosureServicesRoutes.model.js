const mongoose = require("mongoose");

const VALID_TYPES = ["epcg_closure"];

const LICENSE_TYPES = [
  "EPCG",
  "AA",
  "DFIA"
];

const ISSUE_TYPES = [
  "Stuck at EODC Stage",
  "Bond Cancellation Pending",
  "Shipping Bill Mismatch",
  "Lost Original License",
  "Block-wise Extension",
  "Annual Average Shortfall",
  "Other"
];

const epcgClosureServicesSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  mobile: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  licenseType: {
    type: String,
    enum: LICENSE_TYPES,
    default: null
  },

  licenseNumber: {
    type: String,
    default: null,
    trim: true
  },

  issueDescription: {
    type: String,
    enum: ISSUE_TYPES,
    default: null
  },

  additionalDetails: {
    type: String,
    default: null
  },

  type: {
    type: String,
    required: true,
    enum: VALID_TYPES
  }

},
{ timestamps: true }
);

module.exports = mongoose.model(
  "epcgClosureServices",
  epcgClosureServicesSchema
);