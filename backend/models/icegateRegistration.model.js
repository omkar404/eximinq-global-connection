const mongoose = require("mongoose");

const icegateRegistrationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,

            required: function (){
                return this.type !== "QUICK_FORM";
            },
        },
        mobile: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            enum: ["Importer / Exporter", "CHA", "Logistics", "Forwarder"],

            required: function () {
                return this.type !== "QUICK_FORM";
            },
        },
        partner: {
            type: Boolean,
            required: true,
        },

        type: {
            type: String,
            required: true,
            enum: [
                "ENROLL",
                "ENROLL",
                "IEC_OPTIONS",
                "IEC_PROFILE_UPDATATION",
                "IEC_REGISTRATION",
                "IEC_ANNUAL_UPDATE",
                "QUICK_FORM",
            ],
        },

        category: {
            type: String,
            default: null,
        },
        issue: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model(
    "icegateRegistration",
    icegateRegistrationSchema
);