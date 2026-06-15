const gstFilingRoutes = require("../models/gstFilingRoutes.model");
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
    exportType,
    invoices,
    mobile,
    name,
    email,
    entity,
    role,
    partner,
    gstin,
    financialYear,
    type,       // ✅ added
    category,   // ✅ added
    issue,      // ✅ added
  } = record;

  const serviceDisplay = service || "GST Filing Health Check"; // ✅ added

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `GST Filing Enquiry - ${service || "GST Filing Health Check"}`,
    html: `
      <div style="font-family:Arial;">
        <h2>GST Filing Enquiry</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type || "N/A"}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${gstin ? `<tr><td><b>GSTIN Number</b></td><td>${gstin}</td></tr>` : ""}
          ${financialYear ? `<tr><td><b>Financial Year</b></td><td>${financialYear}</td></tr>` : ""}
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
}

exports.creategstFilingRoutes = async (req, res) => {
  try {
    const {
      service,
      exportType,
      invoices,
      mobile,
      name,
      email,
      entity,
      role,
      partner,
      gstin,
      financialYear,
      type,     // ✅ added
      source,   // ✅ added
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const invoiceCount =
      invoices === "" || invoices === undefined || invoices === null
        ? null
        : Number(invoices);

    if (invoiceCount !== null && Number.isNaN(invoiceCount)) {
      return res.status(400).json({
        success: false,
        message: "Invoices must be a valid number",
      });
    }

    const recordData = {
      service: service || "GST Filing Health Check",
      gstin: gstin ? gstin.trim() : null,
      financialYear: financialYear ? financialYear.trim() : null,
      mobile: mobile.trim(),
      name: isQuickForm ? null : name ? name.trim() : null,
      email: isQuickForm ? null : email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM",
      source: source ? source.trim() : null,
    };

    const record = await gstFilingRoutes.create(recordData);

    sendEmail(record).catch((error) =>
      console.error("GST filing email error:", error.message)
    );

    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("GST filing server error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

exports.gstFilingRoutes = async (req, res) => {
  try {
    const data = await gstFilingRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.gstFilingRoutesById = async (req, res) => {
  try {
    const data = await gstFilingRoutes.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};