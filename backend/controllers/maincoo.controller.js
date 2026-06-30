const MainCoo = require("../models/maincoo");
const nodemailer = require("nodemailer");
const { getISTTime, getISTDateString } = require("../utils/dateTime");

const ALLOWED_ENROLL_TYPES = [
  "ENROLL",
  "certificate_of_origin_enroll",
  "HERO",
  "CTA",
  "PREFERENTIAL_COO",
  "NON_PREFERENTIAL_COO",
  "FooterCTA",
  "Startup_Small_Plan",
  "MID_SIZE_EXPORTER_PLAN",
  "LARGE_EXPORTER_PLAN",
];

const ENROLL_TYPE_LABELS = {
  ENROLL: "Enrollment",
  certificate_of_origin_enroll: "Certificate of Origin – Enrollment",
  HERO: "COO – Hero Section Enrollment",
  CTA: "COO – CTA Enrollment",
  PREFERENTIAL_COO: "Preferential Certificate of Origin",
  NON_PREFERENTIAL_COO: "Non-Preferential Certificate of Origin",
  STARTUP_SMALL_PLAN: "Startup Small Plan",
  MID_SIZE_EXPORTER_PLAN: "Mid-Size Exporter Plan",
  LARGE_EXPORTER_PLAN: "Large Exporter Plan",
  FooterCTA: "COO – Footer CTA Enrollment",
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.createcooEnroll = async (req, res) => {
  try {
    const {
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
      flow,
      cooType,
      ftaagreement, // 🔑 NEW
    } = req.body;

    if (!name || !mobile || !email || !role || !type) {
      return res.status(400).json({
        success: false,
        error: "name, mobile, email, role and type are required",
      });
    }

    if (!ALLOWED_ENROLL_TYPES.includes(type)) {
      return res.status(400).json({
        success: false,
        error: "Invalid enrollment type",
      });
    }

    // Preferential CoO requires an FTA agreement selection
    if (type === "PREFERENTIAL_COO" && !ftaagreement) {
      return res.status(400).json({
        success: false,
        error: "Please select an applicable agreement / scheme",
      });
    }

    const istDate = getISTDateString();
    const istTime = getISTTime();
    const label = ENROLL_TYPE_LABELS[type];

    const saved = await MainCoo.create({
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
      flow,
      cooType,
      ftaagreement,
    });

await transporter.sendMail({
  from: `"CloudDesk Helpdesk" <${process.env.SMTP_USER}>`,
  to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
  subject: `Certificate-of-Origin – ${label}`,
  html: `
    <h2>Certificate-of-Origin</h2>
    <p><strong>Type:</strong> ${label}</p>
    ${flow ? `<p><strong>Flow:</strong> ${flow}</p>` : ""}
    ${cooType ? `<p><strong>COO Type:</strong> ${cooType}</p>` : ""}
    ${ftaagreement ? `<p><strong>FTA Agreement:</strong> ${ftaagreement}</p>` : ""}
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
    console.error("MainCoo API Error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};