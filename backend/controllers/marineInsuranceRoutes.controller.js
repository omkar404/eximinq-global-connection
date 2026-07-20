const { normalizeQuickContactFields } = require("../utils/quickContactFields");
const marineInsuranceRoutes = require("../models/marineInsuranceRoutes.model");
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
    sumInsured,
    fromCountry,
    toCountry,
    companyName,
    personName,
    contactPersonName,
  } = record;

  const serviceDisplay = service || "Marine Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `Marine Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Marine Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${record.companyName ? `<tr><td><b>Company Name</b></td><td>${record.companyName}</td></tr>` : ""}
          ${record.contactPersonName || record.personName ? `<tr><td><b>Contact Person Name</b></td><td>${record.contactPersonName || record.personName}</td></tr>` : ""}
          ${record.email ? `<tr><td><b>Email ID</b></td><td>${record.email}</td></tr>` : ""}
          ${commodityType ? `<tr><td><b>Commodity Type</b></td><td>${commodityType}</td></tr>` : ""}
          ${sumInsured ? `<tr><td><b>Sum Insured (Invoice Value + 10%)</b></td><td>${sumInsured}</td></tr>` : ""}
          ${fromCountry ? `<tr><td><b>From Country</b></td><td>${fromCountry}</td></tr>` : ""}
          ${toCountry ? `<tr><td><b>To Country</b></td><td>${toCountry}</td></tr>` : ""}
          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}
          ${mobile ? `<tr><td><b>Mobile</b></td><td>${mobile}</td></tr>` : ""}
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
exports.createmarineInsuranceRoutes = async (req, res) => {
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
      sumInsured,
      fromCountry,
      toCountry,
      companyName,
      personName,
      contactPersonName,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";
    const cleanCompanyName =
      typeof companyName === "string" ? companyName.trim() : "";
    const cleanContactPersonName =
      typeof contactPersonName === "string"
        ? contactPersonName.trim()
        : typeof personName === "string"
          ? personName.trim()
          : "";
    const cleanEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";

    // ✅ No mandatory mobile check – completely optional
    if (isQuickForm && !cleanCompanyName) {
      return res.status(400).json({
        success: false,
        message: "Company Name is required",
      });
    }
    if (isQuickForm && !cleanContactPersonName) {
      return res.status(400).json({
        success: false,
        message: "Contact Person Name is required",
      });
    }
    if (isQuickForm && !cleanEmail) {
      return res.status(400).json({
        success: false,
        message: "Email ID is required",
      });
    }
    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid Email ID",
      });
    }

    const recordData = {
      service: service || "Marine Registration",
      mobile: mobile ? mobile.trim() : null,
      commodityType: commodityType ? commodityType.trim() : null,
      sumInsured: sumInsured ? sumInsured.trim() : null,
      fromCountry: fromCountry ? fromCountry.trim() : null,
      toCountry: toCountry ? toCountry.trim() : null,
      companyName: cleanCompanyName || null,
      personName: cleanContactPersonName || null,
      contactPersonName: cleanContactPersonName || null,
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

    const record = await marineInsuranceRoutes.create(recordData);
    console.log("✅ Saved:", record._id);

    // Send email in background
    sendEmail(record).catch((err) =>
      console.error("❌ Email Error:", err.message)
    );

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
exports.marineInsuranceRoutes = async (req, res) => {
  try {
    const data = await marineInsuranceRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.marineInsuranceRoutesById = async (req, res) => {
  try {
    const data = await marineInsuranceRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
