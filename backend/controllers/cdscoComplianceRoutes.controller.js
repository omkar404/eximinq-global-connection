const { normalizeQuickContactFields } = require("../utils/quickContactFields");
const cdscoComplianceRoutes = require("../models/cdscoComplianceRoutes.model");
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
    productCategory,
    manufacturerCountry,
    companyName,
    personName,
    contactPersonName,
  } = record;

  const serviceDisplay = service || "CDSCO Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com,sheshnathyadav1827499@gmail.com",
    subject: `CDSCO Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>CDSCO Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${record.companyName ? `<tr><td><b>Company Name</b></td><td>${record.companyName}</td></tr>` : ""}
          ${record.contactPersonName || record.personName ? `<tr><td><b>Contact Person Name</b></td><td>${record.contactPersonName || record.personName}</td></tr>` : ""}
          ${record.email ? `<tr><td><b>Email ID</b></td><td>${record.email}</td></tr>` : ""}
          ${productCategory ? `<tr><td><b>Product Category</b></td><td>${productCategory}</td></tr>` : ""}
          ${manufacturerCountry ? `<tr><td><b>Manufacturer Country</b></td><td>${manufacturerCountry}</td></tr>` : ""}
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
exports.createcdscoComplianceRoutes = async (req, res) => {
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
      productCategory, // ✅ camelCase
      manufacturerCountry, // ✅ camelCase
      companyName,
      personName,
      contactPersonName,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";
    const cleanMobile = mobile ? mobile.trim() : "";
    const cleanEmail = email ? email.trim().toLowerCase() : "";
    const cleanCompanyName = companyName ? companyName.trim() : "";
    const cleanContactPersonName = (contactPersonName || personName || name || "").trim();

    if (!cleanMobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return res.status(400).json({
        success: false,
        message: "Enter valid 10 digit Indian mobile number",
      });
    }

    if (isQuickForm) {
      if (!cleanCompanyName) {
        return res.status(400).json({
          success: false,
          message: "Company name is required",
        });
      }
      if (!cleanContactPersonName) {
        return res.status(400).json({
          success: false,
          message: "Contact person name is required",
        });
      }
      if (!cleanEmail) {
        return res.status(400).json({
          success: false,
          message: "Email ID is required",
        });
      }
    }

    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email ID",
      });
    }

    const recordData = {
      service: service || "CDSCO Registration",
      mobile: cleanMobile,
      companyName: cleanCompanyName || null,
      personName: cleanContactPersonName || null,
      contactPersonName: cleanContactPersonName || null,
      productCategory: productCategory ? productCategory.trim() : null, // ✅ use the correct variable
      manufacturerCountry: manufacturerCountry ? manufacturerCountry.trim() : null, // ✅ use correct variable
      name: isQuickForm ? cleanContactPersonName : name ? name.trim() : null,
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

    const record = await cdscoComplianceRoutes.create(recordData);
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
exports.cdscoComplianceRoutes = async (req, res) => {
  try {
    const data = await cdscoComplianceRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.cdscoComplianceRoutesById = async (req, res) => {
  try {
    const data = await cdscoComplianceRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
