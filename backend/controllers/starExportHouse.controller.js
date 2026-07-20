const { normalizeQuickContactFields } = require("../utils/quickContactFields");

const starExportHose = require("../models/starExportHouse.model");
const nodemailer = require("nodemailer");

/* ─────────────────────────────────────────────
   SMTP TRANSPORTER
───────────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ─────────────────────────────────────────────
   EMAIL HELPER
───────────────────────────────────────────── */
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
    turnover,
    bonus,
    companyName,
    personName,
  } = record;

  const serviceDisplay = service || "star-export-house";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `star-export-house — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Star Export House</h2>

        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>

          ${record.companyName ? `<tr><td><b>Company Name</b></td><td>${record.companyName}</td></tr>` : ""}
          ${record.contactPersonName || record.personName ? `<tr><td><b>Contact Person Name</b></td><td>${record.contactPersonName || record.personName}</td></tr>` : ""}
          ${record.email ? `<tr><td><b>Email ID</b></td><td>${record.email}</td></tr>` : ""}
          ${turnover ? `<tr><td><b>Turnover</b></td><td>${turnover}</td></tr>` : ""}
          ${bonus ? `<tr><td><b>Bonus</b></td><td>${bonus}</td></tr>` : ""}
          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}

          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>

          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
          ${entity ? `<tr><td><b>Entity</b></td><td>${entity}</td></tr>` : ""}
          ${role ? `<tr><td><b>Role</b></td><td>${role}</td></tr>` : ""}

          ${
            !type || type !== "QUICK_FORM"
              ? `<tr><td><b>Partner</b></td><td>${partner ? "Yes" : "No"}</td></tr>`
              : ""
          }
        </table>

        <p>
          <b>ID:</b> ${_id}<br/>
          <b>Time:</b> ${new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          })}
        </p>
      </div>
    `,
  });

  console.log("✅ Email sent:", _id);
}

/* ─────────────────────────────────────────────
   CREATE API
───────────────────────────────────────────── */
exports.createstarExportHouse = async (req, res) => {
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
      turnover,
      bonus,
      companyName,
      personName,
    } = req.body;

    // 🔥 Detect Quick Form
    const isQuickForm = type === "QUICK_FORM";

    // ✅ Only mobile required
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    // ✅ Prepare Data
    const recordData = {
      service: service || "New Star Export House",
      mobile: mobile.trim(),

      turnover: turnover ? turnover.trim() : null,   // ✅ ADDED
      bonus: bonus ? bonus.trim() : null,   // ✅ ADDED

      companyName: companyName ? companyName.trim() : null,
      personName: personName ? personName.trim() : null,

      // 🔥 KEY LOGIC (Quick Form fields ignore)
      name: isQuickForm ? null : name ? name.trim() : null,
      email: isQuickForm ? null : email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),

      type: type || "QUICK_FORM",
      category: category || null,
      issue: issue || null,
    };

    normalizeQuickContactFields(recordData, req.body);

    console.log("📦 Saving:", recordData);

    // ✅ Save to DB - FIXED: use importManagement instead of importController
    const record = await starExportHose.create(recordData);

    console.log("✅ Saved:", record._id);

    // ✅ Send Email (async)
    sendEmail(record).catch((err) =>
      console.error("❌ Email Error importmanagemernt:", err.message)
    );

    // ✅ Response
    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("❌ Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* ─────────────────────────────────────────────
   GET ALL - FIXED
───────────────────────────────────────────── */
exports.getAllstarExportHose = async (req, res) => {
  try {
    const data = await starExportHose.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

/* ─────────────────────────────────────────────
   GET BY ID - FIXED
───────────────────────────────────────────── */
exports.getstarExportHoseById = async (req, res) => {
  try {
    const data = await starExportHose.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};