// const icegateRegistrationModel = require("../models/icegateRegistration.model");
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

// exports.createicegateRegistration = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       mobile,
//       entity,
//       role,
//       partner,
//       type,
//       category,
//     } = req.body;

//     // REQUIRED FIELD VALIDATION
//     if (!name || !email || !mobile) {
//       return res.status(400).json({
//         success: false,
//         error: "Name, email and mobile are required",
//       });
//     }

//     const VALID_TYPES = [
//       "Enroll",
//       "Apply Now",
//       "GET_ICEGATE_ID",
//       "AD_CODE_REGISTRATION",
//       "ICEGATE_REGISTRATION",
//       "IFSC_CODE_REGISTRATION",
//     ];

//     if (!type || !VALID_TYPES.includes(type)) {
//       return res.status(400).json({
//         success: false,
//         error: "Invalid request type",
//       });
//     }

//     let requestCategory = null;

//     // CASE 1 → Apply Now
//     if (type === "Apply Now") {
//       if (!category) {
//         return res.status(400).json({
//           success: false,
//           error: "Category is required for Apply Now",
//         });
//       }
//       requestCategory = category;
//     }

//     // CASE 2 → Other Services
//     else {
//       requestCategory = type;
//     }

//     const istDate = getISTDateString();
//     const istTime = getISTTime();

//     /*
//       SAVE DATA
//     */

//     const registration = await icegateRegistrationModel.create({
//       name,
//       email,
//       mobile,
//       entity: entity || null,
//       role: role || null,
//       partner: partner || false,

//       type,
//       category: requestCategory,

//       createdDate: istDate,
//       createdTime: istTime, 
//     });

//     await registration.save();

//     /*
//       EMAIL NOTIFICATION
//     */

//     await transporter.sendMail({
//       from: `"ICEGATE Registration" <${process.env.SMTP_USER}>`,
//       to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
//       subject: "New ICEGATE Request",
//       html: `
//         <h2>New ICEGATE Registration Request</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>

//         <p><strong>Entity:</strong> ${entity || "-"}</p>
//         <p><strong>Role:</strong> ${role || "-"}</p>

//         <p><strong>Type:</strong> ${type}</p>
//         <p><strong>Category:</strong> ${requestCategory || "-"}</p>

//         <p><strong>Submitted (IST):</strong> ${istDate} ${istTime}</p>
//       `,
//     });

//     res.json({
//       success: true,
//       id: registration._id,
//       message: "Request submitted successfully",
//     });

//   } catch (error) {
//     console.error("Icegate Registration Error:", error);

//     res.status(500).json({
//       success: false,
//       error: "Internal server error",
//     });
//   }
// };


// controllers/icegateRegistration.controller.js

const IcegateRegistration = require("../models/icegateRegistration.model");
const nodemailer = require("nodemailer");

/* ─────────────────────────────────────────────
   SMTP TRANSPORTER
───────────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ─────────────────────────────────────────────
   EMAIL HELPER — fire and forget
───────────────────────────────────────────── */
async function sendEmail(record) {
  const { _id, service, port, mobile, name, email, entity, role, partner } = record;

  await transporter.sendMail({
    from:    `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to:      "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `New ICEGATE Registration — ${service}`,
    html: `
      <h3>New ICEGATE Registration Request</h3>
      <table cellpadding="6" style="border-collapse:collapse; font-family:Arial,sans-serif;">
        <tr><td><b>Service</b></td><td>${service}</td></tr>
        <tr><td><b>Port</b></td><td>${port    || "N/A"}</td></tr>
        <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
        <tr><td><b>Name</b></td><td>${name    || "N/A"}</td></tr>
        <tr><td><b>Email</b></td><td>${email  || "N/A"}</td></tr>
        <tr><td><b>Entity</b></td><td>${entity || "N/A"}</td></tr>
        <tr><td><b>Role</b></td><td>${role    || "N/A"}</td></tr>
        <tr><td><b>Partner</b></td><td>${partner ? "Yes" : "No"}</td></tr>
      </table>
      <hr/>
      <p><small>ID: ${_id}</small></p>
      <p><small>Submitted (IST): ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
    `,
  });

  console.log("Email sent for ICEGATE Registration:", _id);
}

/* ─────────────────────────────────────────────
   CONTROLLER — POST /api/icegate-registration
   
   Accepts QuickForm:  { service, port, mobile }
   Accepts ModalEnroll: { ...above + name, email, entity, role, partner, type }
   
   Only 'mobile' is required — name and email are optional.
   This matches the QuickForm which only collects mobile.
───────────────────────────────────────────── */
exports.createIcegateRegistration = async (req, res) => {
  try {
    console.log("ICEGATE Registration Incoming:", req.body);
    
    const {
      service, port, mobile,
      name, email, entity, role, partner, type,
    } = req.body;

    // Only mobile is required
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        error: "Mobile number is required",
      });
    }

    // if (!service) {
    //   return res.status(400).json({
    //     success: false,
    //     error: "Service is required",
    //   });
    // }

    const record = await IcegateRegistration.create({
      service,
      port:    port    ? port.trim()                 : null,
      mobile:  mobile.trim(),
      name:    name    ? name.trim()                 : null,
      email:   email   ? email.trim().toLowerCase()  : null,
      entity:  entity  ? entity.trim()               : null,
      role:    role    || null,
      partner: Boolean(partner),
      type:    type    || "QUICK_FORM",
    });

    console.log("Saved ICEGATE record:", record._id);

    // Email — does not block the 201 response
    sendEmail(record).catch((err) =>
      console.error("Email failed (record saved):", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "ICEGATE Registration submitted successfully",
      data: record,
    });

  } catch (error) {
    console.error("ICEGATE Error:", error.name, error.message);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
