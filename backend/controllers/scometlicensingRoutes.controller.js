const scometlicensingRoutes = require("../models/scometlicensingRoutes.model");
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
    productName,
    technicalSpec,
    endUserCountry,
  } = record;

  const serviceDisplay = service || "SCOMET Licensing Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `SCOMET Licensing Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>SCOMET Licensing Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${productName ? `<tr><td><b>Product Name / CAS No.</b></td><td>${productName}</td></tr>` : ""}
          ${technicalSpec ? `<tr><td><b>Technical Specification</b></td><td>${technicalSpec}</td></tr>` : ""}
          ${endUserCountry ? `<tr><td><b>End User Country</b></td><td>${endUserCountry}</td></tr>` : ""}
          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}
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
exports.createscometlicensingRoutes = async (req, res) => {
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
      productName,
      technicalSpec,
      endUserCountry,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    // ✅ CHANGE 1: Only require mobile for non-quick forms
    if (!isQuickForm && (!mobile || !mobile.trim())) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required for full enrollment",
      });
    }

    const recordData = {
      service: service || "SCOMET Licensing Registration",
      mobile: mobile ? mobile.trim() : null,          // ✅ CHANGE 2: allow null
      productName: productName ? productName.trim() : null,
      technicalSpec: technicalSpec ? technicalSpec.trim() : null,
      endUserCountry: endUserCountry ? endUserCountry.trim() : null,
      name: isQuickForm ? null : (name ? name.trim() : null),
      email: isQuickForm ? null : (email ? email.trim().toLowerCase() : null),
      entity: isQuickForm ? null : (entity ? entity.trim() : null),
      role: isQuickForm ? null : (role || null),
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      category: category || null,
      issue: issue || null,
    };

    console.log("📦 Saving:", recordData);
    const record = await scometlicensingRoutes.create(recordData);
    console.log("✅ Saved:", record._id);

    sendEmail(record).catch((err) => console.error("❌ Email Error:", err.message));

    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

/* GET ALL */
exports.scometlicensingRoutes = async (req, res) => {
  try {
    const data = await scometlicensingRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.scometlicensingRoutesById = async (req, res) => {
  try {
    const data = await scometlicensingRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
