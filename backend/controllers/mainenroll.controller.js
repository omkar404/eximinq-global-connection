// want to update the Frontend code and Backend code.

const MainEnroll = require("../models/MainEnroll");
const nodemailer = require("nodemailer");
const { getISTTime, getISTDateString } = require("../utils/dateTime");

/* ===========================
   ALLOWED PAGE TYPES
=========================== */
const ALLOWED_LANDING_TYPES = [
  "home_enroll",
  "services_enroll",
  "foreign_trade_policy_enroll",
  "dgft_customs_consultancy_enroll",
  "gst_filing_enroll",
  "gst_lut_filing_enroll",
  "rmcc_alert_removal_enroll",
  "igcr_returns_enroll",
  "aqcs_pqms_enroll",
  "barcode_registration_enroll",
  "bis_registration_enroll",
  "epcg_scheme_enroll",
  "compliance_trade_india_enroll",
  "contact-us_enroll",
  "clouddesk_saas_enroll",
];

/* ===========================
   HUMAN LABELS
=========================== */
const LANDING_TYPE_LABELS = {
  home_enroll: "Home Page Enrollment",
  services_enroll: "Services Page Enrollment",
  "foreign_trade_policy_enroll": "Foreign Trade Policy Enrollment",
  dgft_customs_consultancy_enroll: "DGFT & Customs Consultancy Enrollment",
  gst_filing_enroll: "GST Filing Enrollment",
  gst_lut_filing_enroll: "GST LUT Filing Enrollment",
  rmcc_alert_removal_enroll: "RMCC Alert Removal Enrollment",
  igcr_returns_enroll: "IGCR Returns Enrollment",
  aqcs_pqms_enroll: "AQCS / PQMS Enrollment",
  barcode_registration_enroll: "Barcode Registration Enrollment",
  bis_registration_enroll: "BIS Registration Enrollment",
  epcg_scheme_enroll: "EPCG Scheme Enrollment",
  compliance_trade_india_enroll: "Compliance & Trade India Enrollment",
  "contact-us_enroll": "Contact Us Enrollment",
  clouddesk_saas_enroll: "CloudDesk SaaS Enrollment",
};

/* ===========================
   MAIL TRANSPORT
=========================== */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ===========================
   CONTROLLER
=========================== */
exports.createEnroll = async (req, res) => {
  try {
    const { name, mobile, entity, email, role, partner, type, actionType, source } = req.body;

    // 🔒 BASE VALIDATION
    if (!name || !mobile || !email || !role || !type) {
      return res.status(400).json({
        success: false,
        error: "name, mobile, email, role and type are required",
      });
    }

    // 🔒 PAGE VALIDATION
    if (!ALLOWED_LANDING_TYPES.includes(type)) {
      return res.status(400).json({
        success: false,
        error: "Invalid enrollment source",
      });
    }

    const serviceLabel = LANDING_TYPE_LABELS[type];
    const istDate = getISTDateString();
    const istTime = getISTTime();

    const saved = await MainEnroll.create({
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
      actionType: actionType || null,
      source: source || null,
    });

    await transporter.sendMail({
      from: `"CloudDesk Helpdesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New Enrollment – ${serviceLabel}`,
      html: `
        <h2>New Enrollment Request</h2>
        <p><strong>Type:</strong> ${actionType || "Enroll Now"}</p>
        <p><strong>Source:</strong> ${source || serviceLabel}</p>
        <p><strong>Landing Category:</strong> ${serviceLabel}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Entity:</strong> ${entity || "NA"}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Partner Interest:</strong> ${partner ? "Yes" : "No"}</p>
        <p><strong>Submitted (IST):</strong> ${istDate} at ${istTime}</p>
      `,
    });

    res.json({
      success: true,
      id: saved._id,
      message: "Enrollment submitted successfully",
    });
  } catch (err) {
    console.error("MainEnroll API Error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
