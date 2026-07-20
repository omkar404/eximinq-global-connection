const copyrightRegistrationRoutes = require("../models/copyrightRegistrationRoutes.model");
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
    workType,
    title,
    source,
    companyName,
    personName,
    contactPersonName,
  } = record;

const serviceDisplay = service || "Copyright Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com,sheshnathyadav1827499@gmail.com",
    subject: `Copyright Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Copyright Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Type</b></td><td>${type}</td></tr>
          ${source ? `<tr><td><b>Source</b></td><td>${source}</td></tr>` : ""}
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${companyName ? `<tr><td><b>Company Name</b></td><td>${companyName}</td></tr>` : ""}
          ${contactPersonName || personName ? `<tr><td><b>Contact Person Name</b></td><td>${contactPersonName || personName}</td></tr>` : ""}
          ${workType ? `<tr><td><b>Type of Work</b></td><td>${workType}</td></tr>` : ""}
          ${title ? `<tr><td><b>Title of Work</b></td><td>${title}</td></tr>` : ""}
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
exports.createcopyrightRegistrationRoutes = async (req, res) => {
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
      workType, // ✅ camelCase
      title, // ✅ camelCase
      source,
      companyName,
      personName,
      contactPersonName,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";
    const cleanMobile = typeof mobile === "string" ? mobile.trim() : "";
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

    if (!cleanMobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    if (isQuickForm) {
      if (!cleanCompanyName || !cleanContactPersonName || !cleanEmail) {
        return res.status(400).json({
          success: false,
          message: "Company name, contact person name, and email are required",
        });
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        return res.status(400).json({
          success: false,
          message: "Enter a valid email ID",
        });
      }
    }

    const recordData = {
      service: service || "Copyright Registration",
      mobile: cleanMobile,
      companyName: cleanCompanyName || null,
      personName: cleanContactPersonName || null,
      contactPersonName: cleanContactPersonName || null,
      workType: workType ? workType.trim() : null, // ✅ use the correct variable
      title: title ? title.trim() : null, // ✅ use correct variable
      name: isQuickForm ? null : name ? name.trim() : null,
      email: cleanEmail || null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "QUICK_FORM_COMPLIANCE",
      source: source ? source.trim() : null,
      category: category || null,
      issue: issue || null,
    };

    console.log("📦 Saving:", recordData);

    const record = await copyrightRegistrationRoutes.create(recordData);
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
exports.copyrightRegistrationRoutes = async (req, res) => {
  try {
    const data = await copyrightRegistrationRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.ccopyrightRegistrationRoutesById = async (req, res) => {
  try {
    const data = await copyrightRegistrationRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
