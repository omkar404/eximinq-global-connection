const dfialicenseRoutes = require("../models/dfialicenseRoutes.model");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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
    productType,
    fobValue,
  } = record;
  const serviceDisplay = service || "dfialicense Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `dfialicense Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>dfialicense Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${productType ? `<tr><td><b>Product Type (SION)</b></td><td>${productType}</td></tr>` : ""}
          ${fobValue ? `<tr><td><b>FOB Value (₹)</b></td><td>${fobValue}</td></tr>` : ""}
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

exports.createdfialicenseRoutes = async (req, res) => {
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
      productType,
      fobValue,
    } = req.body;

    if (!mobile || !mobile.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Mobile is required" });
    }

    const isQuickForm = type === "QUICK_FORM_COMPLIANCE";
    const recordData = {
      service: service || "dfialicense Registration",
      mobile: mobile.trim(),
      productType: productType ? productType.trim() : null,
      fobValue: fobValue ? fobValue.trim() : null,
      name: isQuickForm ? null : name ? name.trim() : null,
      email: isQuickForm ? null : email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      category: category || null,
      issue: issue || null,
    };

    const record = await dfialicenseRoutes.create(recordData);
    console.log("✅ Saved:", record._id);

    // Send email in background
    sendEmail(record).catch((err) =>
      console.error("❌ Email Error:", err.message),
    );

    return res
      .status(201)
      .json({ success: true, message: "Submitted successfully", data: record });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return res
      .status(500)
      .json({ success: false, message: error.message || "Server Error" });
  }
};

exports.dfialicenseRoutes = async (req, res) => {
  try {
    const data = await dfialicenseRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.dfialicenseRoutesById = async (req, res) => {
  try {
    const data = await dfialicenseRoutes.findById(req.params.id);
    if (!data)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
