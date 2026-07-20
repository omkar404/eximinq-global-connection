const nodemailer = require("nodemailer");
const EPCGClosure = require("../models/epcgClosureServicesRoutes.model");
const { normalizeQuickContactFields } = require("../utils/quickContactFields");

/* ---------------- Allowed Values ---------------- */

const VALID_LICENSE_TYPES = ["EPCG", "AA", "DFIA"];

const VALID_ISSUE_TYPES = [
  "Stuck at EODC Stage",
  "Bond Cancellation Pending",
  "Shipping Bill Mismatch",
  "Lost Original License",
  "Block-wise Extension",
  "Annual Average Shortfall",
  "Other"
];

const LICENSE_LABELS = {
  EPCG: "EPCG Scheme",
  AA: "Advance Authorization (AA)",
  DFIA: "DFIA License"
};

/* ---------------- SMTP Transport ---------------- */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ---------------- Send Email ---------------- */

async function sendEmail(record) {

  const {
    _id,
    name,
    mobile,
    email,
    companyName,
    contactPersonName,
    personName,
    licenseType,
    licenseNumber,
    issueDescription,
    additionalDetails,
    type,
  } = record;

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",

    subject: `New EPCG Closure Request — ${LICENSE_LABELS[licenseType] || ""}`,

    html: `
      <h3>New EPCG Closure Services Request</h3>

      <table cellpadding="6" style="border-collapse:collapse;font-family:Arial;">
      
        <tr>
          <td><b>Company Name</b></td>
          <td>${companyName || "N/A"}</td>
        </tr>

        <tr>
          <td><b>Contact Person Name</b></td>
          <td>${contactPersonName || personName || name || "N/A"}</td>
        </tr>

        <tr>
          <td><b>Mobile</b></td>
          <td>${mobile}</td>
        </tr>

        <tr>
          <td><b>Email ID</b></td>
          <td>${email}</td>
        </tr>

        <tr>
          <td><b>License Type</b></td>
          <td>${LICENSE_LABELS[licenseType] || "N/A"}</td>
        </tr>

        <tr>
          <td><b>License Number</b></td>
          <td>${licenseNumber || "N/A"}</td>
        </tr>

        <tr>
          <td><b>Issue Description</b></td>
          <td>${issueDescription || "N/A"}</td>
        </tr>

        <tr>
          <td><b>Additional Details</b></td>
          <td>${additionalDetails || "N/A"}</td>
        </tr>

        <tr>
          <td><b>Service Type</b></td>
          <td>${type}</td>
        </tr>

      </table>

      <hr/>

      <p><small>Registration ID: ${_id}</small></p>

      <p>
        <small>
          Submitted (IST): 
          ${new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          })}
        </small>
      </p>
    `,
  });

  console.log("EPCG Closure Email Sent:", _id);
}

/* ---------------- Create Controller ---------------- */

exports.createepcgClosureServicesRoutes = async (req, res) => {

  try {

    console.log("Incoming EPCG Closure Request:", req.body);

    const {
      name,
      mobile,
      email,
      licenseType,
      licenseNumber,
      issueDescription,
      additionalDetails,
      type
    } = req.body;

    /* -------- Required Fields -------- */

    if (!name || !mobile || !email || !type) {
      return res.status(400).json({
        success: false,
        message: "Name, Mobile, Email and Type are required"
      });
    }

    /* -------- Mobile Validation -------- */

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Indian mobile number"
      });
    }

    /* -------- Email Validation -------- */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address"
      });
    }

    /* -------- License Validation -------- */

    if (licenseType && !VALID_LICENSE_TYPES.includes(licenseType)) {
      return res.status(400).json({
        success: false,
        message: "Invalid License Type"
      });
    }

    /* -------- Issue Validation -------- */

    if (issueDescription && !VALID_ISSUE_TYPES.includes(issueDescription)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Issue Description"
      });
    }

    /* -------- Save Record -------- */

    const recordData = {
      name: name.trim(),

      mobile: mobile.trim(),

      email: email.trim().toLowerCase(),

      licenseType: licenseType || null,

      licenseNumber: licenseNumber || null,

      issueDescription: issueDescription || null,

      additionalDetails: additionalDetails || null,

      type
    };

    normalizeQuickContactFields(recordData, req.body);

    const record = await EPCGClosure.create(recordData);

    console.log("Saved EPCG Closure Record:", record._id);

    /* -------- Send Email -------- */

    sendEmail(record).catch((err) =>
      console.error("Email sending failed:", err.message)
    );

    /* -------- Response -------- */

    return res.status(201).json({
      success: true,
      message: "EPCG Closure request submitted successfully",
      data: record
    });

  } catch (error) {

    console.error("EPCG Closure Error:", error.message);

    if (error.name === "ValidationError") {

      const messages = Object.values(error.errors).map(
        (e) => e.message
      );

      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};
