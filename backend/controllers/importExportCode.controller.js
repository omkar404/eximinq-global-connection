// const ImportExportCode = require("../models/importExportCode.model.js");
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // import {
// //   getISTTime,
// //   getISTDateString,
// //   getISTTimestamp,
// // } from "../utils/dateTime.js";

// const { getISTTime,
//   getISTDateString,
//   getISTTimestamp, } = require("../utils/dateTime");

// exports.createImportExportCode = async (req, res) => {
//   try {
//     const {
//       name,
//       mobile,
//       entity,
//       email,
//       role,
//       partner,
//       type,
//       category,
//       issue,
//     } = req.body;

//     // ---------- NORMALIZE TYPE ----------
//     const TYPE_MAP = {
//       "enroll": "ENROLL_NOW",
//       "import-export-code-apply": "ENROLL_NOW",
//       "iec_profile_updation": "IEC_PROFILE_UPDATATION",
//       "iec_registration": "IEC_REGISTRATION",
//       "iec_annual_update": "IEC_ANNUAL_UPDATE",
//       "quick_form": "QUICK_FORM",
//     };

//     const cleanedType = String(type).trim().toLowerCase();
//     const normalizedType = TYPE_MAP[cleanedType];

//     if (!normalizedType) {
//       return res.status(400).json({
//         success: false,
//         error: `Invalid type value: ${type}`,
//       });
//     }

//     // ---------- BASIC VALIDATION ----------
//     // ---------- BASIC VALIDATION ----------
//     if (normalizedType === "QUICK_FORM") {
//       if (!mobile || !email) {
//         return res.status(400).json({
//           success: false,
//           error: "Mobile and Email are required",
//         });
//       }
//     } else {
//       if (!name || !mobile || !email || !role || partner !== true) {
//         return res.status(400).json({
//           success: false,
//           error: "Required fields are missing",
//         });
//       }
//     }

//     // ---------- BUSINESS VALIDATION ----------
//     if (normalizedType === "IEC_PROFILE_UPDATATION") {
//       if (category !== "IEC PROFILE UPDATATION") {
//         return res.status(400).json({
//           success: false,
//           error: "Invalid category for profile updation",
//         });
//       }

//       if (!issue) {
//         return res.status(400).json({
//           success: false,
//           error: "Issue is required for profile updation",
//         });
//       }
//     }

//     const istTime = getISTTime();
//     const istDate = getISTDateString();
//     const istTimestamp = getISTTimestamp();

//     // ---------- SAVE ----------
//     const newEntry = await ImportExportCode.create({
//       name: normalizedType === "QUICK_FORM" ? "Quick Lead" : name,
//       mobile,
//       entity: entity || null,
//       email,
//       role: normalizedType === "QUICK_FORM" ? null : role,
//       partner: normalizedType === "QUICK_FORM" ? false : partner,
//       type: normalizedType,
//       category: category || null,
//       issue: issue || null,
//       submittedAt: istTimestamp,
//     });


//     // ---------- SEND EMAIL ----------
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: process.env.SMTP_USER,
//       subject: "New Import Export Code Request",
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Entity:</strong> ${entity}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>
//         <p><strong>Role:</strong> ${role}</p>
//         <p><strong>Partner:</strong> ${partner}</p>
//         <p><strong>Type:</strong> ${normalizedType}</p>
//         <p><strong>Category:</strong> ${category || "-"}</p>
//         <p><strong>Issue:</strong> ${issue || "-"}</p>
//         <p><strong>Submitted (IST):</strong> ${istTime}, ${istDate}</p>
//       `,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Import Export request submitted successfully",
//       data: newEntry,
//     });

//   } catch (error) {
//     console.error("ImportExportCode Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };


const ImportExportCode = require("../models/importExportCode.model.js");
const nodemailer = require("nodemailer");

const {
  getISTTime,
  getISTDateString,
  getISTTimestamp,
} = require("../utils/dateTime");

// ---------------- MAIL TRANSPORT ----------------
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ---------------- CONTROLLER ----------------
exports.createImportExportCode = async (req, res) => {
  try {
    const {
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
      category,
      issue,
    } = req.body;

    // ---------------- TYPE NORMALIZATION ----------------
    const TYPE_MAP = {
      enroll: "ENROLL_NOW",
      "import-export-code-apply": "ENROLL_NOW",
      iec_profile_updation: "IEC_PROFILE_UPDATATION",
      iec_registration: "IEC_REGISTRATION",
      iec_annual_update: "IEC_ANNUAL_UPDATE",
      quick_form: "QUICK_FORM",
    };

    const cleanedType = type ? String(type).trim().toLowerCase() : "";
    const normalizedType = TYPE_MAP[cleanedType];

    if (!normalizedType) {
      return res.status(400).json({
        success: false,
        error: `Invalid type value: ${type}`,
      });
    }

    // ---------------- BASIC VALIDATION ----------------
    if (normalizedType === "QUICK_FORM") {
      if (!mobile || !email) {
        return res.status(400).json({
          success: false,
          error: "Mobile and Email are required",
        });
      }
    } else {
      if (!name || !mobile || !email || !role || partner !== true) {
        return res.status(400).json({
          success: false,
          error: "Required fields are missing",
        });
      }
    }

    // ---------------- BUSINESS VALIDATION ----------------
    if (normalizedType === "IEC_PROFILE_UPDATATION") {
      if (category !== "IEC PROFILE UPDATATION") {
        return res.status(400).json({
          success: false,
          error: "Invalid category for profile updation",
        });
      }

      if (!issue) {
        return res.status(400).json({
          success: false,
          error: "Issue is required for profile updation",
        });
      }
    }

    // ---------------- TIME ----------------
    const istTime = getISTTime();
    const istDate = getISTDateString();
    const istTimestamp = getISTTimestamp();

    // ---------------- SAVE TO DB ----------------
    const newEntry = await ImportExportCode.create({
      name: normalizedType === "QUICK_FORM" ? "Quick Lead" : name,
      mobile,
      entity: entity || null,
      email,
      role: normalizedType === "QUICK_FORM" ? null : role,
      partner: normalizedType === "QUICK_FORM" ? false : partner,
      type: normalizedType,
      category: category || null,
      issue: issue || null,
      submittedAt: istTimestamp,
    });

    // ---------------- EMAIL CONTENT ----------------
    let emailSubject;
    let emailHtml;

    if (normalizedType === "QUICK_FORM") {
      emailSubject = "New Quick Lead Request";

      emailHtml = `
        <h3>New Quick Lead</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Submitted (IST):</strong> ${istTime}, ${istDate}</p>
      `;
    } else {
      emailSubject = "New Import Export Code Request";

      emailHtml = `
        <h3>New Import Export Code Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Entity:</strong> ${entity || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Partner:</strong> ${partner}</p>
        <p><strong>Type:</strong> ${normalizedType}</p>
        <p><strong>Category:</strong> ${category || "-"}</p>
        <p><strong>Issue:</strong> ${issue || "-"}</p>
        <p><strong>Submitted (IST):</strong> ${istTime}, ${istDate}</p>
      `;
    }

    // ---------------- SEND EMAIL ----------------
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: emailSubject,
      html: emailHtml,
    });

    // ---------------- RESPONSE ----------------
    return res.status(201).json({
      success: true,
      message:
        normalizedType === "QUICK_FORM"
          ? "Quick lead submitted successfully"
          : "Import Export request submitted successfully",
      data: newEntry,
    });

  } catch (error) {
    console.error("ImportExportCode Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
