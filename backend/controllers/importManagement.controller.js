// // controllers/importManagement.controller.js

// const ImportManagement = require("../models/importManagement.model");
// const nodemailer = require("nodemailer");

// /* ─────────────────────────────────────────────
//    SMTP TRANSPORTER
// ───────────────────────────────────────────── */
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // Verify SMTP on startup — logs an error if credentials are wrong
// transporter.verify((error) => {
//   if (error) {
//     console.error("SMTP connection failed:", error.message);
//   } else {
//     console.log("SMTP server is ready to send emails");
//   }
// });

// /* ─────────────────────────────────────────────
//    HELPER — Build human-readable IST timestamp
// ───────────────────────────────────────────── */
// const getISTDateTime = () => {
//   return new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
// };

// /* ─────────────────────────────────────────────
//    HELPER — Send notification email
//    Decoupled from the main request so an SMTP
//    failure never breaks a successful DB save.
// ───────────────────────────────────────────── */
// const sendNotificationEmail = async (record) => {
//   const {
//     _id,
//     name,
//     mobile,
//     email,
//     entity,
//     role,
//     type,
//     category,
//     issue,
//     partner,
//   } = record;

//   await transporter.sendMail({
//     from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
//     to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
//     subject: `New Import Management Registration — ${type}`,
//     html: `
//       <h3>New Import Management Registration Received</h3>
//       <table cellpadding="6" cellspacing="0" style="border-collapse:collapse; font-family:Arial,sans-serif;">
//         <tr><td><b>Name</b></td><td>${name}</td></tr>
//         <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
//         <tr><td><b>Email</b></td><td>${email}</td></tr>
//         <tr><td><b>Entity</b></td><td>${entity || "N/A"}</td></tr>
//         <tr><td><b>Role</b></td><td>${role || "N/A"}</td></tr>
//         <tr><td><b>Service Type</b></td><td>${type}</td></tr>
//         <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
//         <tr><td><b>Issue / Update Type</b></td><td>${issue || "N/A"}</td></tr>
//         <tr><td><b>Interested as Partner</b></td><td>${partner ? "Yes" : "No"}</td></tr>
//       </table>
//       <hr/>
//       <p><small>Registration ID: ${_id}</small></p>
//       <p><small>Submitted (IST): ${getISTDateTime()}</small></p>
//     `,
//   });

//   console.log("Email sent successfully for registration:", _id);
// };

// /* ─────────────────────────────────────────────
//    MAIN CONTROLLER
//    POST /api/import-management-registration
// ───────────────────────────────────────────── */
// exports.createImportManagement = async (req, res) => {
//   try {
//     console.log("Incoming Import Management Data:", req.body);

//     const {
//       name,
//       mobile,
//       email,
//       entity,
//       role,
//       type,
//       category,
//       issue,
//       partner,
//     } = req.body;

//     // ── Basic validation ──────────────────────
//     if (!name || !mobile || !email || !type) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, Mobile, Email and Type are required",
//       });
//     }

//     // ── Build the record ──────────────────────
//     const registrationData = {
//       name:     name.trim(),
//       mobile:   mobile.trim(),
//       email:    email.trim().toLowerCase(),
//       entity:   entity   ? entity.trim() : null,
//       role:     role     || null,
//       type,
//       category: category || null,
//       issue:    issue    || null,
//       partner:  Boolean(partner),
//     };

//     console.log("Saving to database:", registrationData);

//     // ── Save to MongoDB ───────────────────────
//     const newRegistration = await ImportManagement.create(registrationData);
//     console.log("Saved successfully:", newRegistration._id);

//     // ── Send email (fire-and-forget) ──────────
//     // Email failure will NOT affect the 201 response to the client
//     sendNotificationEmail(newRegistration).catch((err) => {
//       console.error("Email notification failed (record was saved):", err.message);
//     });

//     // ── Respond success ───────────────────────
//     return res.status(201).json({
//       success: true,
//       message: "Import Management registration submitted successfully",
//       data: newRegistration,
//     });

//   } catch (error) {
//     console.error("=== CONTROLLER ERROR ===");
//     console.error("Name:   ", error.name);
//     console.error("Message:", error.message);
//     if (error.code) console.error("Code:", error.code);

//     // Surface Mongoose validation errors clearly
//     if (error.name === "ValidationError") {
//       const messages = Object.values(error.errors).map((e) => e.message);
//       return res.status(400).json({
//         success: false,
//         message: "Validation failed",
//         errors: messages,
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message,
//     });
//   }
// };


// // controllers/importManagement.controller.js

// const ImportManagement = require("../models/importManagement.model");
// const nodemailer = require("nodemailer");

// /* ─────────────────────────────────────────────
//    SMTP TRANSPORTER
// ───────────────────────────────────────────── */
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// transporter.verify((error) => {
//   if (error) {
//     console.error("SMTP connection failed:", error.message);
//   } else {
//     console.log("SMTP server is ready to send emails");
//   }
// });

// const getISTDateTime = () => {
//   return new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
// };

// const sendNotificationEmail = async (record) => {
//   const { _id, name, mobile, email, entity, role, type, service, port, category, issue, partner } = record;

//   await transporter.sendMail({
//     from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
//     to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
//     subject: `New Import Management Registration — ${service || type}`,
//     html: `
//       <h3>New Import Management Registration Received</h3>
//       <table cellpadding="6" cellspacing="0" style="border-collapse:collapse; font-family:Arial,sans-serif;">
//         <tr><td><b>Service</b></td><td>${service || "N/A"}</td></tr>
//         <tr><td><b>Port / Company</b></td><td>${port    || "N/A"}</td></tr>
//         <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
//         <tr><td><b>Name</b></td><td>${name    || "N/A"}</td></tr>
//         <tr><td><b>Email</b></td><td>${email  || "N/A"}</td></tr>
//         <tr><td><b>Entity</b></td><td>${entity || "N/A"}</td></tr>
//         <tr><td><b>Role</b></td><td>${role    || "N/A"}</td></tr>
//         <tr><td><b>Type</b></td><td>${type    || "QUICK_FORM"}</td></tr>
//         <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
//         <tr><td><b>Issue</b></td><td>${issue   || "N/A"}</td></tr>
//         <tr><td><b>Partner</b></td><td>${partner ? "Yes" : "No"}</td></tr>
//       </table>
//       <hr/>
//       <p><small>Registration ID: ${_id}</small></p>
//       <p><small>Submitted (IST): ${getISTDateTime()}</small></p>
//     `,
//   });

//   console.log("Email sent successfully for registration:", _id);
// };

// /* ─────────────────────────────────────────────
//    MAIN CONTROLLER
//    POST /api/import-management-registration

//    Accepts QuickForm:   { service, port, mobile }
//    Accepts ModalEnroll: { name, mobile, email,
//                           entity, role, type,
//                           category, issue, partner }

//    Only mobile is required — everything else optional.
// ───────────────────────────────────────────── */
// exports.createImportManagement = async (req, res) => {
//   try {
//     console.log("Incoming Import Management Data:", req.body);

//     const {
//       service, port,
//       name, mobile, email,
//       entity, role, type,
//       category, issue, partner,
//     } = req.body;

//     // FIX: was requiring name + email + type
//     // QuickForm only sends service + port + mobile
//     // Only mobile is required
//     if (!mobile || !String(mobile).trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Mobile number is required",
//       });
//     }

//     const registrationData = {
//       service:  service  ? String(service).trim()            : null,
//       port:     port     ? String(port).trim()               : null,
//       name:     name     ? String(name).trim()               : null,
//       mobile:   String(mobile).trim(),
//       email:    email    ? String(email).trim().toLowerCase(): null,
//       entity:   entity   ? String(entity).trim()             : null,
//       role:     role     || null,
//       type:     type     || "QUICK_FORM",
//       category: category || null,
//       issue:    issue    || null,
//       partner:  Boolean(partner),
//     };

//     console.log("Saving to database:", registrationData);

//     const newRegistration = await ImportManagement.create(registrationData);
//     console.log("Saved successfully:", newRegistration._id);

//     sendNotificationEmail(newRegistration).catch((err) => {
//       console.error("Email notification failed (record was saved):", err.message);
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Import Management registration submitted successfully",
//       data: newRegistration,
//     });

//   } catch (error) {
//     console.error("=== CONTROLLER ERROR ===");
//     console.error("Name:   ", error.name);
//     console.error("Message:", error.message);

//     if (error.name === "ValidationError") {
//       const messages = Object.values(error.errors).map((e) => e.message);
//       return res.status(400).json({
//         success: false,
//         message: "Validation failed",
//         errors: messages,
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message,
//     });
//   }
// };


const importManagement = require("../models/importManagement.model");
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
  } = record;

  const serviceDisplay = service || "import-export-code";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `import-export-code — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>import-export-code</h2>

        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>

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
exports.createimportController = async (req, res) => {
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
      service: service || "New Import Management Request",
      mobile: mobile.trim(),

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

    // ✅ Save to DB - FIXED: use importManagement instead of importController
    const record = await importManagement.create(recordData);

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
exports.getAllimportController = async (req, res) => {
  try {
    const data = await importManagement.find().sort({ createdAt: -1 });

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
exports.getimportControllerById = async (req, res) => {
  try {
    const data = await importManagement.findById(req.params.id);

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