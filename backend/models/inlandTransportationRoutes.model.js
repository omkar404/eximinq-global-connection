const mongoose = require("mongoose");

const inlandTransportationRoutesSchema = new mongoose.Schema({
  service: { type: String, default: "Inland Transport" },
  mobile: { type: String, required: true, trim: true },
  mode: { type: String, enum: ["pickup", "drop"], default: null },
  pickupLocation: { type: String, trim: true, default: null },
  dropLocation: { type: String, trim: true, default: null },
  portYardIcd: { type: String, trim: true, default: null },
  vehicleType: { type: String, trim: true, default: null },
  name: { type: String, trim: true, default: null },
  email: { type: String, trim: true, lowercase: true, default: null },
  entity: { type: String, trim: true, default: null },
  role: { type: String, trim: true, default: null },
  partner: { type: Boolean, default: false },
  type: { type: String, default: "INLAND_TRANSPORT" },
  category: { type: String, default: null },
  issue: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model("inlandTransportationRoutes", inlandTransportationRoutesSchema);