// const mongoose = require("mongoose");

// const adcodeRegistrationSchema = new mongoose.Schema(
// {
//   name: {
//     type: String,
//     required: [true, "Name is required"],
//     trim: true,
//   },

//   mobile: {
//     type: String,
//     required: [true, "Mobile is required"],
//     trim: true,
//   },

//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     trim: true,
//     lowercase: true,
//   },

//   entity: {
//     type: String,
//     trim: true,
//     default: null,
//   },

//   role: {
//     type: String,
//     default: null,
//   },

//   partner: {
//     type: Boolean,
//     default: false,
//   },

//   type: {
//     type: String,
//     required: [true, "Type is required"],
//   },

//   category: {
//     type: String,
//     default: null,
//   },

//   issue: {
//     type: String,
//     default: null,
//   }
// },
// {
//   timestamps: true
// }
// );

// const AdcodeRegistration = mongoose.model(
//   "AdcodeRegistration",
//   adcodeRegistrationSchema
// );

// module.exports = AdcodeRegistration;

const mongoose = require("mongoose");

const adcodeRegistrationSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  entity: String,
  role: String,
  partner: Boolean,
  type: String,
  category: String,
  issue: String
},{
  timestamps:true
});

module.exports = mongoose.model(
  "AdcodeRegistration",
  adcodeRegistrationSchema
);

