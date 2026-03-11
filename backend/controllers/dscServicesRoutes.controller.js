// controllers/dscServicesRoutes.controller.js

const nodemailer = require("nodemailer");
const DscServices = require("../models/dscServicesRoutes.model");

// FIX 1: Removed the stray broken line:
//   const dscServiceRoutes = require("..mp")
// This was a typo/leftover that caused an immediate MODULE_NOT_FOUND
// crash the moment the server started — nothing would work at all.

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
  const {
    _id, name, mobile, email,
    entity, role, type, category, issue, partner,
  } = record;

  await transporter.sendMail({
    from:    `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to:      "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `New DSC Service Registration — ${type}`,
    html: `
      <h3>New DSC Service Registration</h3>
      <table cellpadding="6" style="border-collapse:collapse; font-family:Arial,sans-serif;">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Entity</b></td><td>${entity   || "N/A"}</td></tr>
        <tr><td><b>Role</b></td><td>${role      || "N/A"}</td></tr>
        <tr><td><b>Service Type</b></td><td>${type}</td></tr>
        <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
        <tr><td><b>Issue / Update Type</b></td><td>${issue    || "N/A"}</td></tr>
        <tr><td><b>Partner Interest</b></td><td>${partner ? "Yes" : "No"}</td></tr>
      </table>
      <hr/>
      <p><small>Registration ID: ${_id}</small></p>
      <p><small>Submitted (IST): ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
    `,
  });

  console.log("Email sent for DSC Service:", _id);
}

/* ─────────────────────────────────────────────
   MAIN CONTROLLER
   POST /api/dsc-services

   Accepts types:
     "Enroll" | "DGFT_ICEGATE" | "Combo_Pack" |
     "IEC_PROFILE_UPDATE" | "IEC_REGISTRATION" | "IEC_ANNUAL_UPDATE"
───────────────────────────────────────────── */
exports.createdscServiceRoutes = async (req, res) => {
  try {
    console.log("DSC Service Incoming:", req.body);

    const {
      name, mobile, email, entity,
      role, type, category, issue, partner,
    } = req.body;

    // Basic validation
    if (!name || !mobile || !email || !type) {
      return res.status(400).json({
        success: false,
        message: "Name, Mobile, Email and Type are required",
      });
    }

    // Save to MongoDB
    const record = await DscServices.create({
      name:     name.trim(),
      mobile:   mobile.trim(),
      email:    email.trim().toLowerCase(),
      entity:   entity   ? entity.trim() : null,
      role:     role     || null,
      type,
      category: category || null,
      issue:    issue    || null,
      partner:  Boolean(partner),
    });

    console.log("Saved DSC Service record:", record._id);

    // Send email — does not block the response
    sendEmail(record).catch((err) =>
      console.error("Email failed (record was saved):", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "DSC Service registration submitted successfully",
      data: record,
    });

  } catch (error) {
    console.error("DSC Service Error:", error.message);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};