const mongoose = require("mongoose");

const AuditComplianceFormSchema = new mongoose.Schema(
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
        company: {
            type: String,
            required: true,
            trim: true,
        },
        name:
        {
            type: String,
            required: true,
            trim: true,
        },
        mobile: {
            type: String,
            required: true,
            trim: true,
        },
        epcgActive: {
            type: String,
            required: true,
        },
        aaActive: {
            type: String,
            required: true,
        },
        igstPending: {
            type: String,
            required: true,
        },
        drawbackFrequency: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("auditcomplianceformService", AuditComplianceFormSchema);