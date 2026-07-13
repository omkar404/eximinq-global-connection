// controllers/importExportCode.controller.js

const ImportExportCode = require("../models/importExportCode.model.js");
const nodemailer = require("nodemailer");

// FIX 4: Removed dependency on ../utils/dateTime.
// If that file doesn't exist, the entire server crashes on startup
// and NO routes work at all. Replaced with inline IST helpers.
const getISTTime = () =>
  new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

const getISTDateString = () =>
  new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });

const getISTTimestamp = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

// ---------------- MAIL TRANSPORT ----------------
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});



// ---------------- TYPE MAP ----------------
// Frontend sends raw type strings → controller normalises them
const TYPE_MAP = {
  "enroll":                     "ENROLL_NOW",
  "import-export-code-apply":   "ENROLL_NOW",   // matches frontend type prop
  "iec_profile_updatation":     "IEC_PROFILE_UPDATATION",
  "iec_registration":           "IEC_REGISTRATION",
  "iec_annual_update":          "IEC_ANNUAL_UPDATE",
  "quick_form":                 "QUICK_FORM",
};

// ---------------- CONTROLLER ----------------
exports.createImportExportCode = async (req, res) => {
  try {
    const {
      name, mobile, entity, email,
      role, partner, type,
      category, issue,
      companyName, personName, // ✅ added — collected by the Quick Form
    } = req.body;

    // ---------------- TYPE NORMALISATION ----------------
    const cleanedType    = type ? String(type).trim().toLowerCase() : "";
    const normalizedType = TYPE_MAP[cleanedType];

    if (!normalizedType) {
      return res.status(400).json({
        success: false,
        error: `Invalid type value: "${type}". Accepted: ${Object.keys(TYPE_MAP).join(", ")}`,
      });
    }

    // ---------------- VALIDATION ----------------
    if (normalizedType === "QUICK_FORM") {
      if (!mobile || !email) {
        return res.status(400).json({
          success: false,
          error: "Mobile and Email are required for Quick Form",
        });
      }
    } else {
      // FIX 1: Original check was `partner !== true` which blocked submission
      // whenever the checkbox was unchecked. Combined with the 'type' shadowing
      // bug in ModalEnroll (where partner was always false), this meant
      // EVERY submission failed with "Required fields are missing".
      // Now partner is validated separately with a clear error message.
      const missingFields = [];
      if (!name)    missingFields.push("name");
      if (!mobile)  missingFields.push("mobile");
      if (!email)   missingFields.push("email");
      if (!role)    missingFields.push("role");

      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          error: `Required fields missing: ${missingFields.join(", ")}`,
        });
      }

      if (partner !== true) {
        return res.status(400).json({
          success: false,
          error: "You must agree to the partnership terms to proceed.",
        });
      }
    }

    // ---------------- BUSINESS VALIDATION ----------------
    if (normalizedType === "IEC_PROFILE_UPDATATION") {
      if (category !== "IEC PROFILE UPDATATION") {
        return res.status(400).json({
          success: false,
          error: "Category must be 'IEC PROFILE UPDATATION' for profile updates",
        });
      }
      if (!issue) {
        return res.status(400).json({
          success: false,
          error: "Issue / Update Type is required for IEC Profile Updation",
        });
      }
    }

    // ---------------- TIME ----------------
    const istTime      = getISTTime();
    const istDate      = getISTDateString();
    const istTimestamp = getISTTimestamp();

    // ---------------- SAVE TO DB ----------------
    const newEntry = await ImportExportCode.create({
      // ✅ Quick Form now collects the person's name — use it instead of
      // the old hardcoded "Quick Lead" placeholder when available.
      name:        normalizedType === "QUICK_FORM"
        ? (personName || "Quick Lead")
        : name,
      companyName: companyName || null, // ✅ added
      personName:  personName  || null, // ✅ added
      mobile,
      entity:      entity || null,
      email,
      role:        normalizedType === "QUICK_FORM" ? null : role,
      partner:     normalizedType === "QUICK_FORM" ? false : Boolean(partner),
      type:        normalizedType,
      category:    category || null,
      issue:       issue    || null,
      submittedAt: istTimestamp,  // FIX 3: now saved AND in schema
    });

    // ---------------- EMAIL ----------------
    const emailSubject = normalizedType === "QUICK_FORM"
      ? "New Quick Form Request"
      : "New Import Export Code Request";

    const emailHtml = normalizedType === "QUICK_FORM"
      ? `
        <h3>New Quick Lead</h3>
        ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ""}
        ${personName ? `<p><strong>Name:</strong> ${personName}</p>` : ""}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Submitted (IST):</strong> ${istTime}, ${istDate}</p>
      `
      : `
        <h3>New Import Export Code Request</h3>
        <table cellpadding="6" style="border-collapse:collapse; font-family:Arial,sans-serif;">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          ${companyName ? `<tr><td><b>Company Name</b></td><td>${companyName}</td></tr>` : ""}
          <tr><td><b>Entity</b></td><td>${entity || "N/A"}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
          <tr><td><b>Role</b></td><td>${role}</td></tr>
          <tr><td><b>Partner</b></td><td>${partner ? "Yes" : "No"}</td></tr>
          <tr><td><b>Type</b></td><td>${normalizedType}</td></tr>
          <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
          <tr><td><b>Issue</b></td><td>${issue || "N/A"}</td></tr>
          <tr><td><b>Submitted (IST)</b></td><td>${istTime}, ${istDate}</td></tr>
        </table>
      `;

    // Fire and forget — email failure does NOT break the 201 response
    transporter.sendMail({
      from:    process.env.SMTP_USER,
      to:      "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
      subject: emailSubject,
      html:    emailHtml,
    }).catch((err) => console.error("Email failed (record was saved):", err.message));

    // ---------------- RESPONSE ----------------
    return res.status(201).json({
      success: true,
      message: normalizedType === "QUICK_FORM"
        ? "Quick lead submitted successfully"
        : "Import Export request submitted successfully",
      data: newEntry,
    });

  } catch (error) {
    console.error("ImportExportCode Error:", error.name, error.message);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        errors: messages,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};