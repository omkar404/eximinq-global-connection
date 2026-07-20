const mongoose = require("mongoose");

const freightForwardingSchema = new mongoose.Schema(
  {
    service: { type: String, default: "Freight Forwarding" },
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

    mobile: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    mode: { type: String, enum: ["import", "export"], default: "import" },
    originPort: { type: String, trim: true },
    destinationPort: { type: String, trim: true },
    transportMode: { type: String, trim: true },
    shipmentDate: { type: String, trim: true },
    cifValue: { type: String, trim: true },
    quantity: { type: String, trim: true },
    goodsDescription: { type: String, trim: true },
    name: { type: String, trim: true, default: null },
    entity: { type: String, trim: true, default: null },
    role: { type: String, trim: true, default: null },
    partner: { type: Boolean, default: false },
    type: { type: String, default: "FREIGHT_FORWARDING" },
    category: { type: String, default: null },
    issue: { type: String, default: null },
    companyName: {
      type: String,
      trim: true,
      default: null,
    },
    personName: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model(
  "freightForwardingRoutes",
  freightForwardingSchema,
);
