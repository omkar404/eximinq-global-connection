// const mongoose = require("mongoose");

// const importExportCodeSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//       required: function () {
//         return this.type !== "QUICK_FORM";
//       },
//     },
//     mobile: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     entity: {
//       type: String,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//     },
//     role: {
//       type: String,
//       required: true,
//       enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder"],
//       required: function () {
//         return this.type !== "QUICK_FORM";
//       },
//     },
//     partner: {
//       type: Boolean,
//       required: true,
//     },

//     type: {
//       type: String,
//       required: true,
//       enum: [
//         "ENROLL_NOW",
//         "IEC_PROFILE_UPDATATION",
//         "IEC_REGISTRATION",
//         "IEC_ANNUAL_UPDATE",
//         "QUICK_FORM",
//       ],
//     },

//     category: {
//       type: String,
//       default: null,
//     },

//     issue: {
//       type: String,
//       default: null,
//     },
//   },
//   { timestamps: true }
// );

// // export default mongoose.model(
// //   "ImportExportCode",
// //   importExportCodeSchema
// // );

// module.exports = mongoose.model("ImportExportCode", importExportCodeSchema);


// models/importExportCode.model.js

const mongoose = require("mongoose");

const importExportCodeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      // FIX 2: Original had BOTH `required: true` AND `required: function()`.
      // In Mongoose, when you declare a key twice in the same object,
      // the LAST value wins — but this is unpredictable across versions.
      // The clean fix is a single conditional required function.
      required: function () {
        return this.type !== "QUICK_FORM";
      },
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    entity: {
      type: String,
      trim: true,
      default: null,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      // FIX 2: Same duplicate required issue as 'name' above.
      // Single conditional function replaces both.
      required: function () {
        return this.type !== "QUICK_FORM";
      },
      enum: {
        values: ["Importer / Exporter", "CHA", "Logistics", "Forwarder", null],
        message: "Invalid role value: {VALUE}",
      },
      default: null,
    },
    partner: {
      type: Boolean,
      // Not required at schema level — controller handles this validation
      default: false,
    },
    type: {
      type: String,
      required: true,
      enum: {
        values: [
          "ENROLL_NOW",
          "IEC_PROFILE_UPDATATION",
          "IEC_REGISTRATION",
          "IEC_ANNUAL_UPDATE",
          "QUICK_FORM",
        ],
        message: "Invalid type value: {VALUE}",
      },
    },
    category: {
      type: String,
      default: null,
    },
    issue: {
      type: String,
      default: null,
    },
    // FIX 3: Added submittedAt — controller was saving this field
    // but it wasn't in the schema, so Mongoose silently dropped it.
    submittedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ImportExportCode", importExportCodeSchema);