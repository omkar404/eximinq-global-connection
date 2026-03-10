const mongoose = require("mongoose");

const icegateRegistrationSchema = new mongoose.Schema(
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
    lowercase: true,
    trim: true
  },

  entity: {
    type: String,
    trim: true,
    default: null
  },

  role: {
    type: String,
    required: true,
    enum: [
      "Importer / Exporter",
      "CHA",
      "Logistics",
      "Forwarder"
    ]
  },

  partner: {
    type: Boolean,
    default: false
  },

  type: {
    type: String,
    required: true,
    enum: [
      "Enroll",
      "Apply Now",
      "AD_CODE_REGISTRATION",
      "ICEGATE_REGISTRATION",
      "IFSC_CODE_REGISTRATION"
    ]
  },

  category: {
    type: String,
    required: function () {
      return this.type === "Apply Now";
    },
    default: null
  },

  status: {
    type: String,
    enum: ["pending", "processing", "completed", "rejected"],
    default: "pending"
  }

},
{
  timestamps: true
}
);

module.exports = mongoose.model(
  "icegateRegistrationModel",
  icegateRegistrationSchema
);