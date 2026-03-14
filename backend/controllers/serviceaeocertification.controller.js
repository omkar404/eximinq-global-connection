// const serviceaeocertification = require("../models/serviceaeocertification.model");
// const nodemailer = require("nodemailer");

// const nowIST = new Date().toLocaleString("en-IN", {
//   timeZone: "Asia/Kolkata",
// });

// const d = new Date(nowIST);

// // DATE
// const day = d.getDate().toString().padStart(2, "0");
// const month = (d.getMonth() + 1).toString().padStart(2, "0");
// const year = d.getFullYear();

// // TIME
// let hours = d.getHours();
// let minutes = d.getMinutes().toString().padStart(2, "0");
// let ampm = hours >= 12 ? "pm" : "am";

// hours = hours % 12 || 12; // convert 0 → 12, 13 → 1
// hours = hours.toString().padStart(2, "0");

// // FINAL FORMAT
// const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`


// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// exports.serviceaeocertification = async (req, res) => {
//   try {
//     // const { destinationCountry, hsCode, mobile } = req.body;

//     // if (!destinationCountry || !hsCode || !mobile) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     error: "destinationCountry, hsCode and mobile are required",
//     //   });
//     // }

//     // if (hsCode.length !== 6) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     error: "HS Code must be exactly 6 digits",
//     //   });
//     // }

//     // const saved = await serviceaeocertification.create({
//     //   destinationCountry,
//     //   hsCode,
//     //   mobile,
//     // });

//     await transporter.sendMail({
//       from: `"Contact – Duty Benefit" <${process.env.SMTP_USER}>`,
//       to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
//       subject: "New Duty Benefit Check Request",
//       html: `
//         <h2>Duty Benefit Check Request</h2>
//         <p><strong>Destination Country:</strong> ${destinationCountry}</p>
//         <p><strong>HS Code:</strong> ${hsCode}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>
//         <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
//       `,
//     });

//     res.json({
//       success: true,
//       id: saved._id,
//       message: "Request submitted successfully",
//     });
//   } catch (err) {
//     console.error("Duty Check API Error:", err);
//     res.status(500).json({
//       success: false,
//       error: "Internal server error",
//     });
//   }
// };

const nodemailer = require("nodemailer");
const serviceaeocertification = require("../models/serviceaeocertification.model");

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
   Email failure will NOT break the 201 response
───────────────────────────────────────────── */
async function sendEmail(record) {
  const {
    _id, name, mobile, email,
    entity, role, type, category, issue, partner,
  } = record;

  await transporter.sendMail({
    from:    `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to:      "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `New AEO Registration — ${type}`,
    html: `
      <h3>New DSC Service Registration</h3>
      <table cellpadding="6" style="border-collapse:collapse; font-family:Arial,sans-serif;">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Entity</b></td><td>${entity   || "N/A"}</td></tr>
        <tr><td><b>Role</b></td><td>${role      || "N/A"}</td></tr>
        <tr><td><b>Service Type</b></td><td>${type}</td></tr>
        <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
        <tr><td><b>Issue / Update Type</b></td><td>${issue    || "N/A"}</td></tr>
        <tr><td><b>Partner Interest</b></td><td>${partner ? "Yes" : "No"}</td></tr>
      </table>
      <hr/>
      <p><small>Registration ID: ${_id}</small></p>
      <p><small>Submitted (IST): ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
    `,
  });

  console.log("Email sent for AEO Certification:", _id);
}

/* ─────────────────────────────────────────────
   MAIN CONTROLLER
   POST /api/dsc-services

   Accepts types:
     "Enroll" | "DGFT_ICEGATE" | "Combo_Pack" |
     "IEC_PROFILE_UPDATE" | "IEC_REGISTRATION" | "IEC_ANNUAL_UPDATE"
───────────────────────────────────────────── */
exports.serviceaeocertification = async (req, res) => {
  try {
    console.log("AEO Certification Incoming:", req.body);

    const {
      name, mobile, email, entity,
      role, type, category, issue, partner,
    } = req.body;

    // Basic validation
    if (!name || !mobile || !email || !type) {
      return res.status(400).json({
        success: false,
        message: "Name, Mobile, Email and Type are required",
      });
    }

    // Save to MongoDB
    const record = await serviceaeocertification.create({
      name:     name.trim(),
      mobile:   mobile.trim(),
      email:    email.trim().toLowerCase(),
      entity:   entity   ? entity.trim() : null,
      role:     role     || null,
      type,
      category: category || null,
      issue:    issue    || null,
      partner:  Boolean(partner),
    });

    console.log("Saved AEO Service record:", record._id);

    // Send email — does not block the response
    sendEmail(record).catch((err) =>
      console.error("Email failed (record was saved):", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "AEO Certification submitted successfully",
      data: record,
    });

  } catch (error) {
    console.error("DSC Service Error:", error.message);

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