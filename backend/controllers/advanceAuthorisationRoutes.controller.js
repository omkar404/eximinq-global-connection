const advanceAuthorisationRoutes = require("../models/advanceAuthorisationRoutes.model");
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

const notificationRecipients = [
  "crm@eximinq.com",
  "omkarmhetar100@gmail.com",
  "sheshnathyadav1827499@gmail.com",
];
    
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
    exportProduct,
    importRawMaterial,
    companyName,
    personName

  } = record;

  const serviceDisplay = service || "Advance Authorisation Registration";

  const info = await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: notificationRecipients,
    subject: `Advance Authorisation Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Advance Authorisation Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${exportProduct ? `<tr><td><b>Export Product</b></td><td>${exportProduct}</td></tr>` : ""}
          ${importRawMaterial ? `<tr><td><b>Import Raw Material</b></td><td>${importRawMaterial}</td></tr>` : ""}
          ${companyName ? `<tr><td><b>Company Name</b></td><td>${companyName}</td></tr>` : ""}
          ${personName ? `<tr><td><b>Your Name</b></td><td>${personName}</td></tr>` : ""}
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

  const accepted = info.accepted || [];
  const rejected = info.rejected || [];

  if (accepted.length !== notificationRecipients.length || rejected.length) {
    const deliveryError = new Error(
      "SMTP did not accept every notification recipient",
    );
    deliveryError.code = "EMAIL_NOT_FULLY_ACCEPTED";
    deliveryError.accepted = accepted;
    deliveryError.rejected = rejected;
    throw deliveryError;
  }

  console.log("✅ Email accepted by SMTP:", {
    recordId: _id,
    messageId: info.messageId,
    acceptedCount: accepted.length,
    rejectedCount: rejected.length,
    response: info.response,
  });

  return info;
}

/* CREATE API */
exports.createadvanceAuthorisationRoutes = async (req, res) => {
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
      exportProduct, // ✅ camelCase
      importRawMaterial, // ✅ camelCase
      companyName,
      personName
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const recordData = {
      service: service || "Advance Authorisation Registration",
      mobile: mobile.trim(),
      importRawMaterial: importRawMaterial ? importRawMaterial.trim() : null, // ✅ use the correct variable
      exportProduct: exportProduct ? exportProduct.trim() : null, // ✅ use correct variable
      companyName: companyName ? companyName.trim() : null, // ✅ use correct variable
      personName: personName ? personName.trim() : null, // ✅ use correct variable
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

    const record = await advanceAuthorisationRoutes.create(recordData);
    console.log("✅ Saved:", record._id);

    let emailInfo;
    try {
      emailInfo = await sendEmail(record);
    } catch (emailError) {
      console.error("❌ Advance Authorisation email delivery failed:", {
        recordId: record._id,
        code: emailError.code,
        command: emailError.command,
        response: emailError.response,
        accepted: emailError.accepted,
        rejected: emailError.rejected,
        message: emailError.message,
      });

      return res.status(502).json({
        success: false,
        saved: true,
        emailSent: false,
        id: record._id,
        message:
          "Form saved, but the email notification could not be delivered. Please contact support.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      emailSent: true,
      email: {
        messageId: emailInfo.messageId,
        acceptedCount: emailInfo.accepted.length,
        rejectedCount: emailInfo.rejected.length,
      },
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
exports.advanceAuthorisationRoutes = async (req, res) => {
  try {
    const data = await advanceAuthorisationRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.advanceAuthorisationRoutesById = async (req, res) => {
  try {
    const data = await advanceAuthorisationRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};