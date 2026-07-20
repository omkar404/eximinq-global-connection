const noincentiveCertificateRoutes = require("../models/noincentiveCertificateRoutes.model");
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
    reason,
    shippingBill,
    portOfExport,
  } = record;

  const serviceDisplay = service || "No Incentive Certificate Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `No Incentive Certificate Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>No Incentive Certificate Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${companyName ? `<tr><td><b>Company Name</b></td><td>${companyName}</td></tr>` : ""}
          ${contactPersonName ? `<tr><td><b>Contact Person Name</b></td><td>${contactPersonName}</td></tr>` : ""}
          ${email ? `<tr><td><b>Email ID</b></td><td>${email}</td></tr>` : ""}
          ${reason ? `<tr><td><b>Reason for Return</b></td><td>${reason}</td></tr>` : ""}
          ${shippingBill ? `<tr><td><b>Original Shipping Bill No.</b></td><td>${shippingBill}</td></tr>` : ""}
          ${portOfExport ? `<tr><td><b>Port of Export</b></td><td>${portOfExport}</td></tr>` : ""}
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
exports.createnoincentiveCertificateRoutes = async (req, res) => {
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
      reason, // ✅ camelCase
      shippingBill, // ✅ camelCase
      portOfExport,
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
      service: service || "No Incentive Certificate Registration",
      mobile: mobile.trim(),
      companyName: cleanCompanyName || null,
      contactPersonName: cleanContactPersonName || null,
      reason: reason ? reason.trim() : null, // ✅ use the correct variable
      shippingBill: shippingBill ? shippingBill.trim() : null, // ✅ use correct variable
      portOfExport: portOfExport ? portOfExport.trim() : null, // ✅ use correct variable
      name: isQuickForm ? null : name ? name.trim() : null,
      email: cleanEmail || null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      category: category || null,
      issue: issue || null,
    };

    console.log("📦 Saving:", recordData);

    const record = await noincentiveCertificateRoutes.create(recordData);
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
exports.noincentiveCertificateRoutes = async (req, res) => {
  try {
    const data = await noincentiveCertificateRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.noincentiveCertificateRoutesById = async (req, res) => {
  try {
    const data = await noincentiveCertificateRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
