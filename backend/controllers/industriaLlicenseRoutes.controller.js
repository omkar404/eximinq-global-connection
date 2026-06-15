const industriaLlicenseRoutes = require("../models/industriaLlicenseRoutes.model");
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
    product,
    investment,
    location,
  } = record;

  const serviceDisplay = service || "Industrial Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "  crm@eximinq.com, omkarmhetar100@gmail.com, ",
    subject: `Industrial Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Industrial Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${product ? `<tr><td><b>Proposed Product</b></td><td>${product}</td></tr>` : ""}
          ${location ? `<tr><td><b>Location</b></td><td>${location}</td></tr>` : ""}
          ${investment ? `<tr><td><b>Investment (₹ Crores)</b></td><td>${investment}</td></tr>` : ""}
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
exports.createindustriaLlicenseRoutes = async (req, res) => {
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
      product, // ✅ camelCase
      investment, // ✅ camelCase
      location,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    // if (!mobile || !mobile.trim()) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Mobile is required",
    //   });
    // }

    const recordData = {
      service: service || "Industrial Registration",
      mobile: mobile ? mobile.trim() : null,   // ✅ correct   
      product: product ? product.trim() : null, // ✅ use the correct variable
      investment: investment ? investment.trim() : null, // ✅ use correct variable
      location: location ? location.trim() : null,
      name: isQuickForm ? null : name ? name.trim() : null,
      email: isQuickForm ? null : email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      category: category || null,
      issue: issue || null,
    };

    console.log("📦 Saving:", recordData);

    const record = await industriaLlicenseRoutes.create(recordData);
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
exports.industriaLlicenseRoutes = async (req, res) => {
  try {
    const data = await industriaLlicenseRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.industriaLlicenseRoutesById = async (req, res) => {
  try {
    const data = await industriaLlicenseRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
