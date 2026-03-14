const nodemailer = require("nodemailer");

// ✅ Fix: correct model filename
const MoowrScheme = require("../models/moowrschemeRoutes.model");

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendEmail(record) {
  const { _id, name, mobile, email, entity, role, type, category, issue, partner } = record;

  await transporter.sendMail({
    from:    `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to:      "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `New Moowr Scheme Registration — ${type}`,
    html: `
      <h3>New Moowr Scheme Registration</h3>
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

  console.log("Email sent for Moowr Scheme:", _id);
}

exports.createMoowrScheme = async (req, res) => {
  try {
    console.log("Moowr Scheme Incoming:", req.body);

    const { name, mobile, email, entity, role, type, category, issue, partner } = req.body;

    if (!name || !mobile || !email || !type) {
      return res.status(400).json({
        success: false,
        message: "Name, Mobile, Email and Type are required",
      });
    }

    // ✅ Fix: using correct model variable name
    const record = await MoowrScheme.create({
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

    console.log("Saved Moowr Scheme record:", record._id);

    sendEmail(record).catch((err) =>
      console.error("Email failed (record was saved):", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "Moowr Scheme registration submitted successfully",
      data: record,
    });

  } catch (error) {
    console.error("Moowr Scheme Error:", error.message);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: "Validation failed", errors: messages });
    }

    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};