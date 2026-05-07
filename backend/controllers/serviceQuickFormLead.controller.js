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

async function sendEmail(record) {
  const detailsRows = Object.entries(record.details || {})
    .filter(([, value]) => value !== "" && value !== null && value !== undefined)
    .map(
      ([key, value]) =>
        `<tr><td><b>${escapeHtml(key)}</b></td><td>${escapeHtml(value)}</td></tr>`
    )
    .join("");

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `Quick Form Lead - ${record.serviceLabel}`,
    html: `
      <div style="font-family:Arial,sans-serif;">
        <h2>Quick Form Lead</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Service</b></td><td>${escapeHtml(record.serviceLabel)}</td></tr>
          <tr><td><b>Service Key</b></td><td>${escapeHtml(record.serviceKey)}</td></tr>
          <tr><td><b>Type</b></td><td>${escapeHtml(record.type)}</td></tr>
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
    const { serviceKey, serviceLabel, mobile, type, source, details } = req.body;

    if (!serviceKey || !serviceLabel || !mobile) {
      return res.status(400).json({
        success: false,
        message: "serviceKey, serviceLabel and mobile are required",
      });
    }

    const record = await ServiceQuickFormLead.create({
      serviceKey: serviceKey.trim(),
      serviceLabel: serviceLabel.trim(),
      mobile: mobile.trim(),
      type: (type || "QUICK_FORM").trim(),
      source: source ? source.trim() : null,
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
