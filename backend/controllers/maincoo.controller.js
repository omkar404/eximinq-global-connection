const MainCoo = require("../models/maincoo");
const nodemailer = require("nodemailer");
const { getISTTime, getISTDateString } = require("../utils/dateTime");

const ALLOWED_ENROLL_TYPES = [
  "certificate_of_origin_enroll",
  "HERO",
  "PREFERENTIAL",
  "NON_PREFERENTIAL",
  "CTA",
  "FooterCTA",
];

const ENROLL_TYPE_LABELS = {
  certificate_of_origin_enroll: "Certificate of Origin – Enrollment",
  HERO: "COO – Hero Section Enrollment",
  PREFERENTIAL: "Preferential Certificate of Origin",
  NON_PREFERENTIAL: "Non-Preferential Certificate of Origin",
  CTA: "COO – CTA Enrollment",
  FooterCTA: "COO – Footer CTA Enrollment",
};

const PREFERENTIAL_OPTIONS = [
  "SAPTA / SAFTA",
  "ASEAN-India FTA (AIFTA)",
  "India-UAE CEPA",
  "GSP (Generalized System of Preferences)",
  "Free Trade Agreements (FTAs) - Others",
];

const NON_PREFERENTIAL_OPTIONS = [
  "Chamber of Commerce Attestation",
  "Embassy Legalization",
  "European Union Exports",
  "Middle East Export Documentation",
];


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
      flow,     // HERO only
      cooType,  // Preferential / Non-Preferential only
    } = req.body;

    /* 🔒 BASE VALIDATION */
    if (!name || !mobile || !email || !role || !type) {
      return res.status(400).json({
        success: false,
        error: "name, mobile, email, role and type are required",
      });
    }

    /* 🔒 TYPE VALIDATION */
    if (!ALLOWED_ENROLL_TYPES.includes(type)) {
      return res.status(400).json({
        success: false,
        error: "Invalid enrollment type",
      });
    }

    /* 🔥 TYPE-BASED RULES */
    switch (type) {
      case "HERO":
        if (!flow || !["preferential", "non_preferential"].includes(flow)) {
          return res.status(400).json({
            success: false,
            error: "Invalid HERO flow",
          });
        }
        break;

      case "PREFERENTIAL":
        if (!PREFERENTIAL_OPTIONS.includes(cooType)) {
          return res.status(400).json({
            success: false,
            error: "Invalid Preferential COO type",
          });
        }
        break;

      case "NON_PREFERENTIAL":
        if (!NON_PREFERENTIAL_OPTIONS.includes(cooType)) {
          return res.status(400).json({
            success: false,
            error: "Invalid Non-Preferential COO type",
          });
        }
        break;

      case "CTA":
      case "FooterCTA":
      case "certificate_of_origin_enroll":
        // No extra validation
        break;
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
    });

    await transporter.sendMail({
      from: `"CloudDesk Helpdesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New Enrollment – ${label}`,
      html: `
        <h2>New Enrollment Request</h2>
        <p><strong>Type:</strong> ${label}</p>
        ${flow ? `<p><strong>Flow:</strong> ${flow}</p>` : ""}
        ${cooType ? `<p><strong>COO Type:</strong> ${cooType}</p>` : ""}
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
