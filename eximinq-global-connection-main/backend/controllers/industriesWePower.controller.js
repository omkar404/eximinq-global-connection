const IndustriesWePower = require("../models/industriesWePower");
const nodemailer = require("nodemailer");
const { getISTTime, getISTDateString } = require("../utils/dateTime");

/* ===========================
   ALLOWED LANDING PAGES
=========================== */
const ALLOWED_LANDING_TYPES = [
  "pharmaceuticals_indust_y_import_export",
  "engineering_industry_import_export",
  "electronics_it_industry_import_export",
  "chemicals_industry_import_export",
  "textiles_apparels_industry_import_export",
  "food_agro_industry_import_export",
  "solar_and_renewables_industry_import_export",
  "defense_aerospace_industry_import_export",
  "ecommerce_industry_import_export",
];

/* ===========================
   HUMAN READABLE LABELS
=========================== */
const LANDING_TYPE_LABELS = {
  pharmaceuticals_industry_import_export:
    "Pharmaceuticals Industry Import Export",
  engineering_industry_import_export: "Engineering Industry Import Export",
  "electronics_it_industry_import_export":
    "Electronics & IT Industry Import Export",
  "chemicals_industry_import_export": "Chemicals Industry Import Export",
  "textiles_apparels_industry_import_export":
    "Textiles & Apparels Industry Import Export",
  "food_agro_industry_import_export": "Food & Agro Industry Import Export",
  "solar_and_renewables_industry_import_export":
    "Solar & Renewables Industry Import Export",
  "defense_aerospace_industry_import_export":
    "Defense & Aerospace Industry Import Export",
  "ecommerce_industry_import_export": "E-Commerce Industry Import Export",
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
    const { name, mobile, entity, email, role, partner, type } = req.body;

    // 🔒 BASE VALIDATION
    if (!name || !mobile || !email || !role || !type) {
      return res.status(400).json({
        success: false,
        error: "name, mobile, email, role and type are required",
      });
    }

    // 🔒 LANDING PAGE VALIDATION
    if (!ALLOWED_LANDING_TYPES.includes(type)) {
      return res.status(400).json({
        success: false,
        error: "Invalid landing page type",
      });
    }

    const serviceLabel = LANDING_TYPE_LABELS[type];
    const istDate = getISTDateString();
    const istTime = getISTTime();

    const saved = await IndustriesWePower.create({
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
    });

    await transporter.sendMail({
      from: `"CloudDesk Helpdesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New Enrollment Request – ${serviceLabel}`,
      html: `
        <h2>New Enrollment Request</h2>
        <p><strong>Service:</strong> ${serviceLabel}</p>
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
      message: "Enrollment request submitted successfully",
    });
  } catch (err) {
    console.error("IndustriesWePower API Error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
