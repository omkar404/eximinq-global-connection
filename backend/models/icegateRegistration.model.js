// const mongoose = require("mongoose");

// const icegateRegistrationSchema = new mongoose.Schema(
// {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   mobile: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   email: {
//     type: String,
//     required: true,
//     lowercase: true,
//     trim: true
//   },

//   entity: {
//     type: String,
//     trim: true,
//     default: null
//   },

//   role: {
//     type: String,
//     required: true,
//     enum: [
//       "Importer / Exporter",
//       "CHA",
//       "Logistics",
//       "Forwarder"
//     ]
//   },

//   partner: {
//     type: Boolean,
//     default: false
//   },

//   type: {
//     type: String,
//     required: true,
//     enum: [
        // "QUICK_FORM",             // ← QuickForm uses this
        // "Enroll",
        // "Apply Now",
        // "GET_ICEGATE_ID",
        // "Check_Eligibility",
        // "AD_CODE_REGISTRATION",
        // "ICEGATE_REGISTRATION",
        // "IFSC_CODE_REGISTRATION",
//     ]
//   },

//   category: {
//     type: String,
//     required: function () {
//       return this.type === "Apply Now";
//     },
//     default: null
//   },

//   status: {
//     type: String,
//     enum: ["pending", "processing", "completed", "rejected"],
//     default: "pending"
//   }

// },
// {
//   timestamps: true
// }
// );

// module.exports = mongoose.model(
//   "icegateRegistrationModel",
//   icegateRegistrationSchema
// );



// models/icegateRegistration.model.js

const mongoose = require("mongoose");

const icegateRegistrationSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      // required: true,
      trim: true,
      enum: [
        "New ICEGATE Registration",
        "AD Code Registration",
        "e-Sanchit Registration",
        "DSC Update on ICEGATE",
      ],
    },

    port: {
      type: String,
      trim: true,
      default: null,
    },

    mobile: {
      type: String,
      required: true,  // ✅ only required field from QuickForm
      trim: true,
    },

    // FIX 1: was required: true — QuickForm doesn't send name
    name: {
      type: String,
      trim: true,
      default: null,
    },

    // FIX 2: was required: true — QuickForm doesn't send email
    email: {
      type: String,
      lowercase: true,
      trim: true,
      default: null,
    },

    entity: {
      type: String,
      trim: true,
      default: null,
    },

    // FIX 3: was required: true — QuickForm doesn't send role
    role: {
      type: String,
      default: null,
      enum: [
        "Importer / Exporter",
        "CHA",
        "Logistics",
        "Forwarder",
        null,
      ],
    },

    partner: {
      type: Boolean,
      default: false,
    },

    // FIX 4: added QUICK_FORM to enum — was missing so QuickForm always failed
    type: {
      type: String,
      default: "QUICK_FORM",
      enum: [
        "QUICK_FORM",             // ← QuickForm uses this
        "Enroll",
        "Apply Now",
        "GET_ICEGATE_ID",
        "Check_Eligibility",
        "AD_CODE_REGISTRATION",
        "ICEGATE_REGISTRATION",
        "IFSC_CODE_REGISTRATION",
      ],
    },

    category: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      enum: ["pending", "processing", "completed", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IcegateRegistration", icegateRegistrationSchema);