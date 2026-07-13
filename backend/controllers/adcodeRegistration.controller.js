const AdcodeRegistration = require("../models/adcodeRegistration.model");
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
    portCategory,
    portCode,
    portLocation,
    bank,
    companyName, // ✅ ADDED
    personName,

  } = record;

  const serviceDisplay = service || "AD Code Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `AD Code Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>AD Code Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${portCategory ? `<tr><td><b>Port Category</b></td><td>${portCategory}</td></tr>` : ""}
          ${portCode ? `<tr><td><b>Port Code</b></td><td>${portCode}</td></tr>` : ""}
          ${portLocation ? `<tr><td><b>Port Location</b></td><td>${portLocation}</td></tr>` : ""}
          ${bank ? `<tr><td><b>Bank Name</b></td><td>${bank}</td></tr>` : ""}
          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
          ${companyName ? `<tr><td><b>Company Name</b></td><td>${companyName}</td></tr>` : ""}
          ${personName ? `<tr><td><b>Contact Person Name</b></td><td>${personName}</td></tr>` : ""}
          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
          ${email ? `<tr><td><b>Email</b></td><td>${email}</td></tr>` : ""}
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
exports.createAdcodeRegistration = async (req, res) => {
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
      portCategory,
      portCode,
      portLocation,
      bank,
      companyName, // ✅ ADDED
      personName,  // ✅ ADDED
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const recordData = {
      service: service || "AD Code Registration",
      mobile: mobile.trim(),
      portCategory: portCategory ? portCategory.trim() : null, // ✅ use the correct variable
      portCode: portCode ? portCode.trim() : null,
      portLocation: portLocation ? portLocation.trim() : null, // ✅ use correct variable
      bank : bank ? bank.trim() : null,
      companyName: companyName ? companyName.trim() : null, // ✅ ADDED
      personName : personName ? personName.trim() : null ,
      // 🔥 FIX: Quick Form now collects the person's name + email itself,
      // so they're no longer forced to null for QUICK_FORM submissions.
      name: name ? name.trim() : null,
      email: email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      category: category || null,
      issue: issue || null,
    };

    console.log("📦 Saving:", recordData);

    const record = await AdcodeRegistration.create(recordData);
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
exports.AdcodeRegistration = async (req, res) => {
  try {
    const data = await AdcodeRegistration.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.AdcodeRegistrationById = async (req, res) => {
  try {
    const data = await AdcodeRegistration.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};