// const mongoose = require("mongoose");

// const VALID_TYPES = [
//   "QUICK_FORM",
//   "Enroll",
//   "Start_Application",
// ];



// const StarExportHouseSchema = new mongoose.Schema(
// {
//   name: {
//     type: String,
//     trim: true,
//     default: null
//   },

//   mobile: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   email: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     default: null
//   },

//   entity: {
//     type: String,
//     default: null,
//     trim: true
//   },

//   role: {
//     type: String,
//     default: null
//   },

//   partner: {
//     type: Boolean,
//     default: false
//   },

//   type: {
//     type: String,
//     enum: VALID_TYPES,
//     default: "QUICK_FORM"
//   },

//   category: {
//     type: String,
//     default: null
//   },

//   issue: {
//     type: String,
//     default: null
//   }
// },
// { timestamps: true }
// );

// mongoose.model("StarExportHouseSchema", StarExportHouseSchema)

const mongoose = require("mongoose");

const VALID_TYPES = [
  "QUICK_FORM",
  "Enroll",
  "Start_Application",
];

const StarExportHouseSchema = new mongoose.Schema(
{
  name: {
    type: String,
    trim: true,
    default: null
  },

  mobile: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    default: null
  },

  entity: {
    type: String,
    trim: true,
    default: null
  },

  role: {
    type: String,
    default: null
  },

  partner: {
    type: Boolean,
    default: false
  },

  type: {
    type: String,
    enum: VALID_TYPES,
    default: "QUICK_FORM"
  },

  category: {
    type: String,
    default: null
  },

  issue: {
    type: String,
    default: null
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("StarExportHouse", StarExportHouseSchema);