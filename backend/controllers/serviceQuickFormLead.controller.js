const nodemailer = require("nodemailer");
const ServiceQuickFormLead = require("../models/serviceQuickFormLead.model");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const CONTACT_DETAIL_KEYS = new Set([
  "Company Name",
  "Contact Person Name",
  "Email ID",
]);

const sanitizeString = (value) =>
  typeof value === "string" ? value.trim() : "";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function sendEmail(record) {
  const detailsRows = Object.entries(record.details || {})
    .filter(
      ([key, value]) =>
        !CONTACT_DETAIL_KEYS.has(key) &&
        value !== "" &&
        value !== null &&
        value !== undefined
    )
    .map(
      ([key, value]) =>
        `<tr><td><b>${escapeHtml(key)}</b></td><td>${escapeHtml(value)}</td></tr>`
    )
    .join("");

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `Quick Form Lead - ${record.serviceLabel}`,
    html: `
      <div style="font-family:Arial,sans-serif;">
        <h2>Quick Form Lead</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Service</b></td><td>${escapeHtml(record.serviceLabel)}</td></tr>
          <tr><td><b>Service Key</b></td><td>${escapeHtml(record.serviceKey)}</td></tr>
          <tr><td><b>Type</b></td><td>${escapeHtml(record.type)}</td></tr>
          ${
            record.companyName
              ? `<tr><td><b>Company Name</b></td><td>${escapeHtml(record.companyName)}</td></tr>`
              : ""
          }
          ${
            record.contactPersonName
              ? `<tr><td><b>Contact Person Name</b></td><td>${escapeHtml(record.contactPersonName)}</td></tr>`
              : ""
          }
          ${
            record.email
              ? `<tr><td><b>Email ID</b></td><td>${escapeHtml(record.email)}</td></tr>`
              : ""
          }
          ${
            record.source
              ? `<tr><td><b>Source</b></td><td>${escapeHtml(record.source)}</td></tr>`
              : ""
          }
          <tr><td><b>Mobile</b></td><td>${escapeHtml(record.mobile)}</td></tr>
          ${detailsRows}
        </table>
        <p><b>ID:</b> ${record._id}</p>
        <p><b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </div>
    `,
  });
}

exports.createServiceQuickFormLead = async (req, res) => {
  try {
    const {
      serviceKey,
      serviceLabel,
      companyName,
      contactPersonName,
      email,
      mobile,
      type,
      source,
      details,
    } = req.body;

    const rawServiceKey = sanitizeString(serviceKey);
    const allowsMissingMobile = rawServiceKey === "industrial-license";

    if (!serviceKey || !serviceLabel || (!mobile && !allowsMissingMobile)) {
      return res.status(400).json({
        success: false,
        message: allowsMissingMobile
          ? "serviceKey and serviceLabel are required"
          : "serviceKey, serviceLabel and mobile are required",
      });
    }

    const cleanServiceKey = rawServiceKey;
    const cleanServiceLabel = sanitizeString(serviceLabel);
    const cleanCompanyName = sanitizeString(companyName);
    const cleanContactPersonName = sanitizeString(contactPersonName);
    const cleanEmail = sanitizeString(email).toLowerCase();
    const cleanMobile = sanitizeString(mobile);
    const cleanType = sanitizeString(type) || "QUICK_FORM";
    const cleanSource = source ? sanitizeString(source) : null;
    const requiresContactDetails = [
      "aeo-certification",
      "bill-of-entry-filing",
      "ca-certification-export-import",
      "customs-adjudication",
      "defence-exim-license",
      "epr-authorization",
      "factory-license",
      "fssai-licensing",
      "iem-registration",
      "industrial-license",
      "lmpc-registration",
      "no-due-certificate",
      "no-incentive-certificate",
      "pollution-control",
      "prc-relaxation",
      "project-cargo",
      "rex-registration",
      "un-iip-certification",
      "wpc-license",
    ].includes(cleanServiceKey);

    if (
      requiresContactDetails &&
      (!cleanCompanyName || !cleanContactPersonName || !cleanEmail)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "companyName, contactPersonName and email are required for this quick form",
      });
    }

    if (cleanEmail && !isValidEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email ID",
      });
    }

    const record = await ServiceQuickFormLead.create({
      serviceKey: cleanServiceKey,
      serviceLabel: cleanServiceLabel,
      companyName: cleanCompanyName || null,
      contactPersonName: cleanContactPersonName || null,
      email: cleanEmail || null,
      mobile: cleanMobile || null,
      type: cleanType,
      source: cleanSource,
      details: details && typeof details === "object" ? details : {},
    });

    sendEmail(record).catch((error) =>
      console.error("Service quick form email error:", error.message)
    );

    return res.status(201).json({
      success: true,
      message: "Quick form submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("Service quick form error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

exports.getServiceQuickFormLeads = async (_req, res) => {
  try {
    const records = await ServiceQuickFormLead.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: records,
    });
  } catch (error) {
    console.error("Service quick form fetch error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

exports.getServiceQuickFormLeadById = async (req, res) => {
  try {
    const record = await ServiceQuickFormLead.findById(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Quick form lead not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: record,
    });
  } catch (error) {
    console.error("Service quick form fetch by id error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
