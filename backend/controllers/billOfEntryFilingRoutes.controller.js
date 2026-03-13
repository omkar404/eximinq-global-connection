// controllers/billOfEntryFilingRoutes.controller.js

const mongoose = require("mongoose");
const BillOfEntryFiling = require("../models/billOfEntryFilingRoutes.model");
const nodemailer = require("nodemailer");

/* ─────────────────────────────────────────────
   SCHEMA
───────────────────────────────────────────── */
// const BillOfEntryFilingSchema = new mongoose.Schema(
//   {
//     name:     { type: String, required: true, trim: true },
//     mobile:   { type: String, required: true, trim: true },
//     email:    { type: String, required: true, trim: true, lowercase: true },
//     entity:   { type: String, default: null, trim: true },
//     role:     { type: String, default: null },
//     partner:  { type: Boolean, default: false },
//     type:     { type: String, required: true },
//     category: { type: String, default: null },
//     issue:    { type: String, default: null },
//   },
//   { timestamps: true }
// );

// const BillOfEntryFiling = mongoose.model("BillOfEntryFiling", BillOfEntryFilingSchema);

/* ─────────────────────────────────────────────
   SMTP TRANSPORTER
───────────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ─────────────────────────────────────────────
   EMAIL HELPER — fire and forget
   Email failure will NOT break the 201 response
───────────────────────────────────────────── */
async function sendEmail(record) {
  const { _id, name, mobile, email, entity, role, type, category, issue, partner } = record;

  await transporter.sendMail({
    from:    `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to:      "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `New Bill of Entry Filing Registration — ${type}`,
    html: `
      <h3>New Bill of Entry Filing Registration</h3>
      <table cellpadding="6" style="border-collapse:collapse; font-family:Arial,sans-serif;">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Entity</b></td><td>${entity   || "N/A"}</td></tr>
        <tr><td><b>Role</b></td><td>${role      || "N/A"}</td></tr>
        <tr><td><b>Service Type</b></td><td>${type}</td></tr>
        <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
        <tr><td><b>Issue</b></td><td>${issue     || "N/A"}</td></tr>
        <tr><td><b>Partner Interest</b></td><td>${partner ? "Yes" : "No"}</td></tr>
      </table>
      <hr/>
      <p><small>Registration ID: ${_id}</small></p>
      <p><small>Submitted (IST): ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
    `,
  });

  console.log("Email sent for Bill of Entry Filing:", _id);
}

/* ─────────────────────────────────────────────
   MAIN CONTROLLER
   POST /api/bill-of-entry-filing
───────────────────────────────────────────── */
exports.createbillOfEntryFilling = async (req, res) => {

  try {

    console.log("Bill of Entry Filing Incoming:", req.body);

    const { service, port, cargo, mobile } = req.body;

    if (!mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const record = await BillOfEntryFiling.create({

      mobile: mobile.trim(),
      entity: port || null,
      issue: cargo || null,
      type: service || "QUICK_FORM"

    });

    console.log("Saved record:", record._id);

    sendEmail(record).catch(err =>
      console.error("Email failed:", err.message)
    );

    res.status(201).json({
      success: true,
      message: "Bill of Entry Filing request submitted",
      data: record,
    });

  } catch (error) {

    console.error("Bill Of Entry Filing Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });

  }

};