const { normalizeQuickContactFields } = require("../utils/quickContactFields");
const horticultureRoutes = require("../models/horticultureRoutes.model");
const nodemailer = require("nodemailer");

/* SMTP TRANSPORTER */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
    
/* EMAIL HELPER */
async function sendEmail(record) {
  const {
    _id,
    service,
    mobile,
    name,
    email,
    entity,
    role,
    partner,
    type,
    category,
    issue,
    projectType,
    projectCost,
    companyName,
    personName,
  } = record;

  const serviceDisplay = service || "Horticulture Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `Horticulture Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Horticulture Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${record.companyName ? `<tr><td><b>Company Name</b></td><td>${record.companyName}</td></tr>` : ""}
          ${record.contactPersonName || record.personName ? `<tr><td><b>Contact Person Name</b></td><td>${record.contactPersonName || record.personName}</td></tr>` : ""}
          ${record.email ? `<tr><td><b>Email ID</b></td><td>${record.email}</td></tr>` : ""}
          ${projectType ? `<tr><td><b>Project Type</b></td><td>${projectType}</td></tr>` : ""}
          ${projectCost ? `<tr><td><b>Estimated Project Cost</b></td><td>${projectCost}</td></tr>` : ""}
          ${companyName ? `<tr><td><b>Company Name</b></td><td>${companyName}</td></tr>` : ""}
          ${personName ? `<tr><td><b>Contact Person Name</b></td><td>${personName}</td></tr>` : ""}
          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
          ${entity ? `<tr><td><b>Entity</b></td><td>${entity}</td></tr>` : ""}
          ${role ? `<tr><td><b>Role</b></td><td>${role}</td></tr>` : ""}
          ${type !== "QUICK_FORM_COMPLIANCE" ? `<tr><td><b>Partner</b></td><td>${partner ? "Yes" : "No"}</td></tr>` : ""}
        </table>
        <p><b>ID:</b> ${_id}<br/><b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </div>
    `,
  });

  console.log("✅ Email sent:", _id);
}

/* CREATE API */
exports.createhorticultureRoutes = async (req, res) => {
  try {
    console.log("📥 Incoming:", req.body);

    const {
      service,
      mobile,
      name,
      email,
      entity,
      role,
      partner,
      type,
      category,
      issue,
      projectType, // ✅ camelCase
      projectCost, // ✅ camelCase
      companyName,
      personName,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const recordData = {
      service: service || "Horticulture Registration",
      mobile: mobile.trim(),
      projectType: projectType ? projectType.trim() : null, // ✅ use the correct variable
      projectCost: projectCost ? projectCost.trim() : null, // ✅ use correct variable
      companyName: companyName ? companyName.trim() : null,
      personName: personName ? personName.trim() : null,
      name: isQuickForm ? null : name ? name.trim() : null,
      email: isQuickForm ? null : email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      category: category || null,
      issue: issue || null,
    };

    normalizeQuickContactFields(recordData, req.body);

    console.log("📦 Saving:", recordData);

    const record = await horticultureRoutes.create(recordData);
    console.log("✅ Saved:", record._id);

    sendEmail(record).catch((err) =>
      console.error("❌ Email Error:", err.message),
    );

    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
    // For debugging – show real error (remove in production)
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

/* GET ALL */
exports.horticultureRoutes = async (req, res) => {
  try {
    const data = await horticultureRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.horticultureRoutesById = async (req, res) => {
  try {
    const data = await horticultureRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
