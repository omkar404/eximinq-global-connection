const solarindustryRoutes = require("../models/solarindustryRoutes.model");
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
  try {
    const {
      _id,
      name,
      mobile,
      email,
      entity,
      role,
      partner,
      type,
      category,
      issue,
    } = record;

    const serviceDisplay = "Solar industry";

    await transporter.sendMail({
      from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
      subject: `New Food Agro industry  — ${serviceDisplay}`,
      html: `
        <div style="font-family:Arial;">
          <h2>New Solar industry</h2>

          <table border="1" cellpadding="6" style="border-collapse:collapse;">
            <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
            <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>

            ${mobile ? `<tr><td><b>Mobile</b></td><td>${mobile}</td></tr>` : ""}
            ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
            ${email ? `<tr><td><b>Email</b></td><td>${email}</td></tr>` : ""}
            ${entity ? `<tr><td><b>Entity</b></td><td>${entity}</td></tr>` : ""}
            ${role ? `<tr><td><b>Role</b></td><td>${role}</td></tr>` : ""}
            ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
            ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}

            ${
              type !== "QUICK_FORM"
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
  } catch (err) {
    console.error("❌ Email Error pharmaceuticals:", err.message);
  }
}

/* ─────────────────────────────────────────────
   CREATE API
───────────────────────────────────────────── */
exports.createsolarindustryRoutes = async (req, res) => {
  try {
    console.log("📥 Incoming request body:", req.body);

    const {
      name,
      mobile,
      email,
      entity,
      role,
      partner,
      type,
      category,
      issue,
      licenseType,
      estimatedAmount,
      issueDescription,
      additionalDetails,
    } = req.body;

    // ✅ Only mobile required
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    // ✅ Prepare Data
    const recordData = {
      name: name ? name.trim() : null,
      mobile: mobile.trim(),
      email: email ? email.trim().toLowerCase() : null,
      entity: entity ? entity.trim() : null,
      role: role || null,
      partner: Boolean(partner),
      type: type || null,
      category: category || null,
      issue: issue || null,
      licenseType: licenseType || null,
      estimatedAmount: estimatedAmount || null,
      issueDescription: issueDescription || null,
      additionalDetails: additionalDetails || null,
    };

    console.log("📦 Saving record data:", recordData);

    // ✅ Save to DB
    const record = await solarindustryRoutes.create(recordData);

    console.log("✅ Saved:", record._id);

    // ✅ Send Email (async — won't block response)
    sendEmail(record);

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
   GET ALL
───────────────────────────────────────────── */
exports.getAllsolarindustryRoutes = async (req, res) => {
  try {
    const data = await solarindustryRoutes
      .find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

/* ─────────────────────────────────────────────
   GET BY ID
───────────────────────────────────────────── */
exports.ByIdsolarindustryRoutes = async (req, res) => {
  try {
    const data = await solarindustryRoutes.findById(req.params.id);

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
