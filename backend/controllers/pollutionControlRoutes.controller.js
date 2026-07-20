const { normalizeQuickContactFields } = require("../utils/quickContactFields");
const pollutionControlRoutes = require("../models/pollutionControlRoutes.model");
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
    companyName,
    contactPersonName,
    entity,
    role,
    partner,
    type,
    category,
    issue,
    sector,
    investment,
  } = record;

  const serviceDisplay = service || "Pollution Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `Pollution Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Pollution Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${record.companyName ? `<tr><td><b>Company Name</b></td><td>${record.companyName}</td></tr>` : ""}
          ${record.contactPersonName || record.personName ? `<tr><td><b>Contact Person Name</b></td><td>${record.contactPersonName || record.personName}</td></tr>` : ""}
          ${record.email ? `<tr><td><b>Email ID</b></td><td>${record.email}</td></tr>` : ""}
          ${sector ? `<tr><td><b>Industry Sector</b></td><td>${sector}</td></tr>` : ""}
          ${investment ? `<tr><td><b>Investment (Plant & Machinery)</b></td><td>${investment}</td></tr>` : ""}
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
exports.createpollutionControlRoutes = async (req, res) => {
  try {
    console.log("📥 Incoming:", req.body);

    const {
      service,
      mobile,
      name,
      email,
      companyName,
      contactPersonName,
      entity,
      role,
      partner,
      type,
      category,
      issue,
      sector, // ✅ camelCase
      investment, // ✅ camelCase
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";
    const cleanCompanyName = typeof companyName === "string" ? companyName.trim() : "";
    const cleanContactPersonName =
      typeof contactPersonName === "string" ? contactPersonName.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

    if (!mobile || !/^[6-9]\d{9}$/.test(mobile.trim())) {
      return res.status(400).json({
        success: false,
        message: "Enter valid 10 digit Indian mobile number",
      });
    }

    if (isQuickForm && (!cleanCompanyName || !cleanContactPersonName || !cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Company name, contact person name and email ID are required",
      });
    }

    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email ID",
      });
    }

    const recordData = {
      service: service || "Pollution Registration",
      mobile: mobile.trim(),
      companyName: cleanCompanyName || null,
      contactPersonName: cleanContactPersonName || null,
      sector: sector ? sector.trim() : null, // ✅ use the correct variable
      investment: investment ? investment.trim() : null, // ✅ use correct variable
      name: isQuickForm ? null : name ? name.trim() : null,
      email: cleanEmail || null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      category: category || null,
      issue: issue || null,
    };

    normalizeQuickContactFields(recordData, req.body);

    console.log("📦 Saving:", recordData);

    const record = await pollutionControlRoutes.create(recordData);
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
exports.pollutionControlRoutes = async (req, res) => {
  try {
    const data = await pollutionControlRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.pollutionControlRoutesById = async (req, res) => {
  try {
    const data = await pollutionControlRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
