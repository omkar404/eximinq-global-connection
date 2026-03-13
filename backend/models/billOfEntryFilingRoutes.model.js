// models/billOfEntryFiling.model.js

const mongoose = require("mongoose");

const VALID_TYPES = [
  "Enroll",
  "QUICK_FORM",
  "File_Bill_Of_Entry",
  "Submit_Documents",
];

const billOfEntryFilingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      trim: true,
      default: null
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      trim: true,
      lowercase: true,
      default: null
    },
    entity: {
      type: String,
      default: null,
      trim: true,
    },
    role: {
      type: String,
      default: null,
      enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder", null],
    },
    type: {
      type: String,
      required: true,
      enum: ["BILL_OF_ENTRY", "EXPORT", "IMPORT", "QUICK_FORM"],
      default: "QUICK_FORM"
    },
    // Populated when type === "Enroll"
    category: {
      type: String,
      default: null,
    },
    // Populated when type === "File_Bill_Of_Entry"
    issue: {
      type: String,
      default: null,
    },
    // "Interested in being a Partner" checkbox
    partner: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BillOfEntryFiling", billOfEntryFilingSchema);