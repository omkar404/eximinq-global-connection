const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// ── Schema ──────────────────────────────────────────────
const StarExportHouseSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    mobile:   { type: String, required: true, trim: true },
    email:    { type: String, required: true, trim: true, lowercase: true },
    entity:   { type: String, default: null, trim: true },
    role:     { type: String, default: null },
    partner:  { type: Boolean, default: false },
    type:     { type: String, required: true },
    category: { type: String, default: null },
    issue:    { type: String, default: null },
  },
  { timestamps: true }
);

const StarExportHouse = mongoose.model("StarExportHouse", StarExportHouseSchema);

// ── SMTP Transporter (reuse your existing env vars) ─────
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ── Controller ──────────────────────────────────────────
exports.createStarExportHouse = async (req, res) => {
  try {
    console.log("Star Export House Incoming:", req.body);

    const { name, mobile, email, entity, role, type, category, issue, partner } = req.body;

    if (!name || !mobile || !email || !type) {
      return res.status(400).json({
        success: false,
        message: "Name, Mobile, Email and Type are required",
      });
    }

    // Save to DB
    const record = await StarExportHouse.create({
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

    console.log("Saved Star Export House record:", record._id);

    // Send email — fire and forget (email failure won't break the 201)
    sendEmail(record).catch((err) =>
      console.error("Email failed (record was saved):", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "Star Export House registration submitted successfully",
      data: record,
    });

  } catch (error) {
    console.error("Star Export House Error:", error.message);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: "Validation failed", errors: messages });
    }

    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// ── Email helper ─────────────────────────────────────────
async function sendEmail(record) {
  const { _id, name, mobile, email, entity, role, type, category, issue, partner } = record;

  await transporter.sendMail({
    from:    `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to:      "crm@eximinq.com, omkarmhetar100@gmail.com",
    subject: `New Star Export House Registration — ${type}`,
    html: `
      <h3>New Star Export House Registration</h3>
      <table cellpadding="6" style="border-collapse:collapse; font-family:Arial,sans-serif;">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Entity</b></td><td>${entity  || "N/A"}</td></tr>
        <tr><td><b>Role</b></td><td>${role     || "N/A"}</td></tr>
        <tr><td><b>Service Type</b></td><td>${type}</td></tr>
        <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
        <tr><td><b>Issue</b></td><td>${issue    || "N/A"}</td></tr>
        <tr><td><b>Partner Interest</b></td><td>${partner ? "Yes" : "No"}</td></tr>
      </table>
      <hr/>
      <p><small>Registration ID: ${_id}</small></p>
      <p><small>Submitted (IST): ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
    `,
  });

  console.log("Email sent for Star Export House:", _id);
}








