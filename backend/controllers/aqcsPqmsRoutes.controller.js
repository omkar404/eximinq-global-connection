const aqcsPqmsRoutes = require("../models/aqcsPqmsRoutes.model");
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
    commodityType,
    country,
  } = record;

  const serviceDisplay = service || "AQCS PQMS Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `AQCS PQMS Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>AQCS PQMS Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type || "QUICK_FORM"}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${commodityType ? `<tr><td><b>Commodity Type</b></td><td>${commodityType}</td></tr>` : ""}
          ${country ? `<tr><td><b>Country of Origin</b></td><td>${country}</td></tr>` : ""}
          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
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
exports.createaqcsPqmsRoutes = async (req, res) => {
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
      commodityType,
      country,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const recordData = {
      service: service || "AQCS PQMS Registration",
      mobile: mobile.trim(),
      commodityType: commodityType ? commodityType.trim() : null,
      country: country ? country.trim() : null,
      name: isQuickForm ? null : name ? name.trim() : null,
      email: isQuickForm ? null : email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM",
      category: category || null,
      issue: issue || null,
      // ❌ source: source ? source.trim() : null,  ← model mein nahi hai, hata do
    };

    console.log("📦 Saving:", recordData);

    const record = await aqcsPqmsRoutes.create(recordData);
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
exports.aqcsPqmsRoutes = async (req, res) => {
  try {
    const data = await aqcsPqmsRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.aqcsPqmsRoutesById = async (req, res) => {
  try {
    const data = await aqcsPqmsRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
