const mongoose = require("mongoose");

const MainContactInfoSchema = new mongoose.Schema(
    {
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
        firstname: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        issuecategory: {
            type: String,
            enum: [
                "EPCG / Advance Auth Closure",
                "RoDTEP / Refund Recovery",
                "AEO Certification Audit",
                "Retainer (Virtual Desk)",
                "Urgent Customs Clearance",
            ],
            required: true,
        },

        details: {
            type: String,
            trim: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("MainContactInfo", MainContactInfoSchema);
