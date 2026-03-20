// const AdcodeRegistration = require("../models/adcodeRegistration.model");
// const nodemailer = require("nodemailer");

// const {
//   getISTTime,
//   getISTDateString,
// } = require("../utils/dateTime");

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// exports.createAdcodeRegistration = async (req, res) => {
//   try {

//     const {
//       name,
//       mobile,
//       email,
//       entity,
//       role,
//       partner,
//       type,
//       category,
//       issue
//     } = req.body;

//     // ✅ Required validation
//     if (!name || !mobile || !email || !type) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, Mobile, Email and Type are required"
//       });
//     }

//     // ✅ Allow only valid types
//     const validTypes = [
//       "Enroll",
//       "AD_Code_Registration",
//       "IFSC_Registration"
//     ];

//     if (!validTypes.includes(type)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid registration type"
//       });
//     }

//     const isDate = getISTDateString();
//     const isTime = getISTTime();

//     // ✅ Create data object
//     const registrationData = {
//       name,
//       mobile,
//       email,
//       entity: entity || null,
//       role: role || null,
//       partner: partner || false,
//       type,
//       category: category || null,
//       issue: issue || null,
//       createdDate: isDate,
//       createdTime: isTime,
//     };

//     // ✅ Save to DB
//     const newRegistration = await AdcodeRegistration.create(registrationData);

//     // ✅ Send Email (optional)
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: "yadavsheshnath236@gmail.com",
//       subject: "Registration Successful",
//       html: `
//         <h3>Thank you for your registration</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Mobile:</b> ${mobile}</p>
//         <p><b>Type:</b> ${type}</p>
//         <p>Date: ${isDate}</p>
//         <p>Time: ${isTime}</p>
//       `,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Registration submitted successfully",
//       data: newRegistration
//     });

//   } catch (error) {

//     console.error("Registration Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message
//     });

//   }
// };

// const AdcodeRegistration = require("../models/adcodeRegistration.model");
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// exports.createAdcodeRegistration = async (req, res) => {
//   try {

//     console.log("Incoming Data:", req.body);

//     const {
//       name,
//       mobile,
//       email,
//       entity,
//       role,
//       partner,
//       type,
//       category,
//       issue
//     } = req.body;

//     // Validation
//     if (!name || !mobile || !email || !type) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, Mobile, Email and Type are required"
//       });
//     }

//     const registrationData = {
//       name,
//       mobile,
//       email,
//       entity,
//       role,
//       partner,
//       type,
//       category,
//       issue
//     };

//     // Save to MongoDB
//     const newRegistration = await AdcodeRegistration.create(registrationData);

//     // Send Email
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: " yadavsheshnath236@gmail.com",   // ✅ fixed
//       subject: "New AD Code Registration",
//       html: `
//         <h3>New Registration Received</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Mobile:</b> ${mobile}</p>
//         <p><b>Type:</b> ${type}</p>

//       `
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Registration submitted successfully",
//       data: newRegistration
//     });

//   } catch (error) {

//     console.error("Registration Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message
//     });
//   }
// };


// controllers/adcodeRegistration.controller.js

const AdcodeRegistration = require("../models/adcodeRegistration.model");
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
    portName, // ✅ ADDED
  } = record;

  const serviceDisplay = service || "AD Code Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "yadavsheshnath236@gmail.com",
    subject: `New AD Code Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>New AD Code Registration</h2>

        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>

          ${portName ? `<tr><td><b>Port Name</b></td><td>${portName}</td></tr>` : ""}

          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}

          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>

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

  console.log("✅ Email sent:", _id);
}

/* ─────────────────────────────────────────────
   CREATE API
───────────────────────────────────────────── */
exports.createAdcodeRegistration = async (req, res) => {
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
      portName, // ✅ ADDED
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
      service: service || "AD Code Registration",
      mobile: mobile.trim(),

      portName: portName ? portName.trim() : null, // ✅ ADDED

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

    console.log("📦 Saving:", recordData);

    // ✅ Save to DB
    const record = await AdcodeRegistration.create(recordData);

    console.log("✅ Saved:", record._id);

    // ✅ Send Email (async)
    sendEmail(record).catch((err) =>
      console.error("❌ Email Error:", err.message)
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
exports.AdcodeRegistration = async (req, res) => {
  try {
    const data = await AdcodeRegistration.find().sort({ createdAt: -1 });

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
exports.AdcodeRegistrationById = async (req, res) => {
  try {
    const data = await AdcodeRegistration.findById(req.params.id);

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