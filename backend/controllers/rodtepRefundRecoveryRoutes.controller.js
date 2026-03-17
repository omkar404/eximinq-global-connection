const nodemailer = require("nodemailer");
const rodtepRefundRecoveryRoutes = require("../models/rodtepRefundRecoveryRoutes.model");

/* ---------------- Allowed Values ---------------- */

const VALID_LICENSE_TYPES = ["RoDTEP", "IGST", "Drawback"];

const VALID_ISSUES_BY_TYPE = {
  RoDTEP: [
    "Scroll Expired / Lapsed",
    "Scroll Amount Mismatch",
    "EGM Error (Export General Manifest)",
    "Scrip Generation Issue",
    "Other"
  ],
  IGST: [
    "SB005 Error (Invoice Mismatch)",
    "PFMS Validation Pending",
    "Scroll Generated but Not Credited",
    "EGM Not Filed",
    "Other"
  ],
  Drawback: [
    "Brand Rate Fixation",
    "Supplementary Claim",
    "Drawback Amount Short Credited",
    "Section 74 Re-Export Claim",
    "Other"
  ]
};

const Incentive_Type = {
  RoDTEP: "RoDTEP / RoSCTL",
  IGST: "IGST Refund",
  Drawback: "Duty Drawback"
};

/* ---------------- SMTP ---------------- */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ---------------- Email ---------------- */

async function sendEmail(record) {
  try {
    const {
      _id,
      name,
      email,
      licenseType,
      estimatedAmount,
      issueDescription,
      type,
    } = record;

    await transporter.sendMail({
      from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
      subject: `New Recovery Audit — ${Incentive_Type[licenseType] || ""}`,
      html: `
        <h3>New Recovery Audit Request</h3>

        <table cellpadding="6" style="border-collapse:collapse;font-family:Arial;">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Incentive Type</b></td><td>${Incentive_Type[licenseType] || "N/A"}</td></tr>
          <tr><td><b>Estimated Amount</b></td><td>${estimatedAmount || "N/A"}</td></tr>
          <tr><td><b>Issue</b></td><td>${issueDescription || "N/A"}</td></tr>
          <tr><td><b>Service Type</b></td><td>${type}</td></tr>
        </table>

        <hr/>

        <p><small>ID: ${_id}</small></p>
      `,
    });

    console.log("✅ Email Sent:", _id);

  } catch (err) {
    console.error("❌ Email Error:", err.message);
  }
}

/* ---------------- CONTROLLER ---------------- */

exports.createRecoveryAudit = async (req, res) => {
  try {

    console.log("Incoming Request:", req.body);

    let {
      name,
      email,
      licenseType,
      incentiveType,
      estimatedAmount,
      issueDescription,
      additionalDetails,
      type
    } = req.body;

    // Map frontend → backend
    licenseType = licenseType || incentiveType;

    /* -------- REQUIRED -------- */

    if (!name || !email || !type) {
      return res.status(400).json({
        success: false,
        message: "Name, Mobile, Email and Type are required"
      });
    }

    /* -------- EMAIL -------- */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address"
      });
    }

    /* -------- LICENSE -------- */

    if (licenseType && !VALID_LICENSE_TYPES.includes(licenseType)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Incentive Type"
      });
    }

    /* -------- ISSUE -------- */

    if (
      issueDescription &&
      licenseType &&
      VALID_ISSUES_BY_TYPE[licenseType] &&
      !VALID_ISSUES_BY_TYPE[licenseType].includes(issueDescription)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid Issue Description"
      });
    }

    /* -------- SAVE -------- */

    const record = await rodtepRefundRecoveryRoutes.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      licenseType: licenseType || null,
      estimatedAmount: estimatedAmount || null,
      issueDescription: issueDescription || null,
      additionalDetails: additionalDetails || null,
      type
    });

    console.log("✅ Saved:", record._id);

    sendEmail(record);

    return res.status(201).json({
      success: true,
      message: "Recovery Audit submitted successfully",
      data: record
    });

  } catch (error) {
    console.error("❌ Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};