/*-----------------------*/


// controllers/icegateRegistration.controller.js

const IcegateRegistration = require("../models/icegateRegistration.model");
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
    port,
    companyName, // ✅ ADDED
    personName,  // ✅ ADDED
  } = record;

  const serviceDisplay = "ICEGATE Registration";
   console.log("reached inside sendemail method",port);

  await transporter.sendMail({
   
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `New ICEGATE Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>New ICEGATE Registration</h2>

        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>

          ${port ? `<tr><td><b>Port Name</b></td><td>${port}</td></tr>` : ""}
          ${service ? `<tr><td><b>Service Name</b></td><td>${service}</td></tr>` : ""}
          ${mobile ? `<tr><td><b>Mobile</b></td><td>${mobile}</td></tr>` : ""}

          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}

          ${companyName ? `<tr><td><b>Company Name</b></td><td>${companyName}</td></tr>` : ""}
          ${personName ? `<tr><td><b>Contact Person Name</b></td><td>${personName}</td></tr>` : ""}

          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
          ${email ? `<tr><td><b>Email</b></td><td>${email}</td></tr>` : ""}
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

  console.log("✅ Email sent isces:", _id);
}

/* ─────────────────────────────────────────────
   CREATE API
───────────────────────────────────────────── */
exports.createIcegateRegistration = async (req, res) => {
  try {
    console.log("📥 Incoming request body:", req.body);

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
      port,
      companyName, // ✅ ADDED
      personName,  // ✅ ADDED
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
      service: service ? service.trim(): null,
      mobile:  mobile.trim(),
      port: port ? port.trim() : null,
      companyName: companyName ? companyName.trim() : null, // ✅ ADDED
      personName: personName ? personName.trim() : null,    // ✅ ADDED

      // 🔥 KEY LOGIC
      // Quick Form now collects name + email itself (via personName/email),
      // so these are no longer forced to null for QUICK_FORM submissions.
      name: name ? name.trim() : null,
      email: email ? email.trim().toLowerCase() : null,
      entity: isQuickForm ? null : entity ? entity.trim() : null,
      role: isQuickForm ? null : role || null,
      partner: isQuickForm ? false : Boolean(partner),

      type: type || "QUICK_FORM",
      category: category || null,
      issue: issue || null,
    };
    console.log(recordData);

    console.log("📦 Saving record data:", recordData.port);

    // ✅ Save to DB
    const record = await IcegateRegistration.create(recordData);

    console.log("✅ Saved:", record._id);

    // ✅ Send Email (async)
    sendEmail(record).catch((err) =>
      console.error("Email Error icegate:", err.message)
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
   GET ALL
───────────────────────────────────────────── */
exports.getAllIcegateRegistrations = async (req, res) => {
  try {
    const data = await IcegateRegistration.find().sort({ createdAt: -1 });

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
exports.getIcegateRegistrationById = async (req, res) => {
  try {
    const data = await IcegateRegistration.findById(req.params.id);

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