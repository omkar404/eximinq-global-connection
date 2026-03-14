// // controllers/billOfEntryFilingRoutes.controller.js

// const shippingBillFilingRoutes = require("../models/shippingBillFilingRoutes.model");
// const nodemailer = require("nodemailer");

// /* ─────────────────────────────────────────────
//    SMTP TRANSPORTER
// ───────────────────────────────────────────── */
// const transporter = nodemailer.createTransport({
//   host:   process.env.SMTP_HOST,
//   port:   Number(process.env.SMTP_PORT),
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// /* ─────────────────────────────────────────────
//    EMAIL HELPER — fire and forget
// ───────────────────────────────────────────── */
// async function sendEmail(record) {
//   const { _id, name, mobile, email, entity, role, type, category, issue, partner } = record;

//   await transporter.sendMail({
//     from:    `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
//     to:      "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
//     subject: `New Shipping Bill Filing Registration — ${type}`,
//     html: `
//       <h3>New Shipping Bill Filing Registration</h3>
//       <table cellpadding="6" style="border-collapse:collapse; font-family:Arial,sans-serif;">
//         <tr><td><b>Name</b></td><td>${name || "N/A"}</td></tr>
//         <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
//         <tr><td><b>Email</b></td><td>${email || "N/A"}</td></tr>
//         <tr><td><b>Entity</b></td><td>${entity   || "N/A"}</td></tr>
//         <tr><td><b>Role</b></td><td>${role      || "N/A"}</td></tr>
//         <tr><td><b>Service Type</b></td><td>${type}</td></tr>
//         <tr><td><b>Category</b></td><td>${category || "N/A"}</td></tr>
//         <tr><td><b>Issue</b></td><td>${issue     || "N/A"}</td></tr>
//         <tr><td><b>Partner Interest</b></td><td>${partner ? "Yes" : "No"}</td></tr>
//       </table>
//       <hr/>
//       <p><small>Registration ID: ${_id}</small></p>
//       <p><small>Submitted (IST): ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
//     `,
//   });

//   console.log("Email sent for Shipping Bill Filing:", _id);
// }

// /* ─────────────────────────────────────────────
//    MAIN CONTROLLER
//    POST /api/shipping-bill-filing
// ───────────────────────────────────────────── */
// exports.createshippingBillFilingRoutes = async (req, res) => {
//   try {
//     console.log("Shipping Service Incoming:", req.body);

//     const {
//       name, mobile, email, entity,
//       role, type, category, issue, partner,
//     } = req.body;

//     // Basic validation
//     if (!mobile) {
//       return res.status(400).json({
//         success: false,
//         message: "Mobile number is required",
//       });
//     }

//     // FIXED: Use the imported model instead of undefined DscServices
//     const record = await shippingBillFilingRoutes.create({
//       name:     name ? name.trim() : null,
//       mobile:   mobile.trim(),
//       email:    email ? email.trim().toLowerCase() : null,
//       entity:   entity ? entity.trim() : null,
//       role:     role || null,
//       type:     type || "QUICK_FORM", // Provide default if not specified
//       category: category || null,
//       issue:    issue || null,
//       partner:  Boolean(partner),
//     });

//     console.log("Saved Shipping Service record:", record._id);

//     // Send email — does not block the response
//     sendEmail(record).catch((err) =>
//       console.error("Email failed (record was saved):", err.message)
//     );

//     return res.status(201).json({
//       success: true,
//       message: "Shipping Service registration submitted successfully",
//       data: record,
//     });

//   } catch (error) {
//     console.error("Shipping Service Error:", error);

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


// controllers/shippingBillFilingRoutes.controller.js

const shippingBillFilingRoutes = require("../models/shippingBillFilingRoutes.model");
const nodemailer = require("nodemailer");

// ---------------- IST TIME HELPERS (inline to avoid dependency) ----------------
const getISTTime = () =>
  new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

const getISTDateString = () =>
  new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });

const getISTTimestamp = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

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

// ---------------- TYPE MAP for normalization ----------------
const TYPE_MAP = {
  "enroll": "Enroll",
  "submit-documents": "SUBMIT_DOCUMENTS",
  "quick_form": "QUICK_FORM",
  "shipping-bill": "SHIPPING_BILL_FILING",
  "bill-of-entry": "BILL_OF_ENTRY_FILING",
  "customs-clearance": "CUSTOMS_CLEARANCE",
  "iec": "IEC_REGISTRATION",
  // Add your actual form types here
};

// ---------------- CONTROLLER ----------------
exports.createShippingBillFilingRoutes = async (req, res) => {
  try {
    console.log("========== SHIPPING SERVICE REQUEST ==========");
    console.log("Full Request Body:", JSON.stringify(req.body, null, 2));
    console.log("Request Headers:", req.headers['content-type']);

    const {
      name, mobile, email, entity,
      role, type, category, issue, partner,
    } = req.body;

    console.log("Extracted Fields:", {
      name: name || "NOT PROVIDED",
      mobile: mobile || "NOT PROVIDED",
      email: email || "NOT PROVIDED",
      entity: entity || "NOT PROVIDED",
      role: role || "NOT PROVIDED",
      type: type || "NOT PROVIDED",
      category: category || "NOT PROVIDED",
      issue: issue || "NOT PROVIDED",
      partner: partner || "NOT PROVIDED"
    });

    // ---------------- TYPE NORMALIZATION ----------------
    const cleanedType = type ? String(type).trim().toLowerCase() : "";
    const normalizedType = TYPE_MAP[cleanedType] || type || "QUICK_FORM";
    
    console.log("Type Processing:", {
      originalType: type,
      cleanedType: cleanedType,
      normalizedType: normalizedType,
      finalType: normalizedType
    });
    
    // Use normalized type
    const finalType = normalizedType;

    // ---------------- VALIDATION ----------------
// ---------------- VALIDATION ----------------
const missingFields = [];

if (finalType === "QUICK_FORM") {
  console.log("⚠️ Processing as QUICK_FORM - only mobile required");
  if (!mobile) missingFields.push("mobile");
  // Email is OPTIONAL for quick forms
  // if (!email) missingFields.push("email"); // REMOVED
} else {
  console.log("✅ Processing as regular form type:", finalType);
  if (!name) missingFields.push("name");
  if (!mobile) missingFields.push("mobile");
  if (!role) missingFields.push("role");
  // Email is optional for regular forms too
}

if (missingFields.length > 0) {
  console.log("❌ Validation Failed - Missing fields:", missingFields);
  return res.status(400).json({
    success: false,
    error: `Required fields missing: ${missingFields.join(", ")}`,
    debug: {
      receivedType: type,
      finalType: finalType,
      receivedFields: {
        name: !!name,
        mobile: !!mobile,
        email: !!email,
        role: !!role
      }
    }
  });
}

    // ---------------- BUSINESS VALIDATION ----------------
    // Only validate if the type exists in your system
    if (finalType === "CUSTOMS_CLEARANCE" && !category) {
      return res.status(400).json({
        success: false,
        error: "Category is required for Customs Clearance",
      });
    }

    if (finalType === "SHIPPING_BILL_FILING" && !issue) {
      return res.status(400).json({
        success: false,
        error: "Issue details are required for Shipping Bill Filing",
      });
    }

    // Handle partner validation - accept various truthy values
    const isPartner = partner === true || partner === "true" || partner === 1 || partner === "1" || partner === "yes";
    
    if (finalType !== "QUICK_FORM" && !isPartner) {
      return res.status(400).json({
        success: false,
        error: "You must agree to the partnership terms to proceed.",
      });
    }

    // ---------------- TIME ----------------
    const istTime = getISTTime();
    const istDate = getISTDateString();
    const istTimestamp = getISTTimestamp();

    // ---------------- SAVE TO DB ----------------
    const recordData = {
      name: finalType === "QUICK_FORM" ? "Quick Lead" : (name ? name.trim() : null),
      mobile: mobile.trim(),
      email: email ? email.trim().toLowerCase() : null,
      entity: entity ? entity.trim() : null,
      role: finalType === "QUICK_FORM" ? null : (role || null),
      type: finalType,
      category: category || null,
      issue: issue || null,
      partner: isPartner,
      submittedAt: istTimestamp,
    };

    console.log("📝 Saving to database:", recordData);

    const record = await shippingBillFilingRoutes.create(recordData);

    console.log("✅ Saved Shipping Service record:", record._id);

    // ---------------- EMAIL CONTENT ----------------
    const emailSubject = finalType === "QUICK_FORM"
      ? "🚢 New Quick Lead - Shipping Service"
      : `🚢 New Shipping Bill Filing Registration — ${finalType.replace(/_/g, ' ')}`;

    const emailHtml = finalType === "QUICK_FORM"

    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <style>
    //         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    //         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    //         .header { background: #f8f9fa; padding: 15px; border-bottom: 3px solid #ffc107; }
    //         .content { padding: 20px 0; }
    //         .field { margin-bottom: 10px; }
    //         .label { font-weight: bold; color: #555; }
    //         .value { color: #333; }
    //         .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
    //       </style>
    //     </head>
    //     <body>
    //       <div class="container">
    //         <div class="header">
    //           <h2 style="margin:0; color:#ffc107;">🚢 EXIMINQ CloudDesk</h2>
    //           <p style="margin:5px 0 0; color:#666;">New Quick Lead - Shipping Service</p>
    //         </div>
    //         <div class="content">
    //           <div class="field">
    //             <span class="label">📧 Email:</span>
    //             <span class="value">${email || "N/A"}</span>
    //           </div>
    //           <div class="field">
    //             <span class="label">📱 Mobile:</span>
    //             <span class="value">${mobile}</span>
    //           </div>
    //         </div>
    //         <div class="footer">
    //           <p>📅 Submitted: ${istTime}, ${istDate}</p>
    //           <p>🆔 Lead ID: ${record._id}</p>
    //         </div>
    //       </div>
    //     </body>
    //     </html>
    //   `
    //   : `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <style>
    //         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    //         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    //         .header { background: #f8f9fa; padding: 15px; border-bottom: 3px solid #007bff; }
    //         .content { padding: 20px 0; }
    //         table { width: 100%; border-collapse: collapse; }
    //         td { padding: 10px; border-bottom: 1px solid #eee; }
    //         td:first-child { font-weight: bold; width: 40%; background: #f8f9fa; }
    //         td:last-child { color: #333; }
    //         .badge { 
    //           display: inline-block; 
    //           padding: 3px 8px; 
    //           border-radius: 4px; 
    //           font-size: 12px;
    //           background: #28a745; 
    //           color: white;
    //         }
    //         .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
    //       </style>
    //     </head>
    //     <body>
    //       <div class="container">
    //         <div class="header">
    //           <h2 style="margin:0; color:#007bff;">🚢 EXIMINQ CloudDesk</h2>
    //           <p style="margin:5px 0 0; color:#666;">New Shipping Bill Filing Registration</p>
    //         </div>
    //         <div class="content">
    //           <table>
    //             <tr><td>👤 Name</td><td>${name || "N/A"}</td></tr>
    //             <tr><td>📱 Mobile</td><td>${mobile}</td></tr>
    //             <tr><td>📧 Email</td><td>${email || "N/A"}</td></tr>
    //             <tr><td>🏢 Entity</td><td>${entity || "N/A"}</td></tr>
    //             <tr><td>👔 Role</td><td>${role || "N/A"}</td></tr>
    //             <tr><td>📋 Service Type</td><td><span class="badge">${finalType.replace(/_/g, ' ')}</span></td></tr>
    //             <tr><td>📂 Category</td><td>${category || "N/A"}</td></tr>
    //             <tr><td>❓ Issue</td><td>${issue || "N/A"}</td></tr>
    //             <tr><td>🤝 Partner Interest</td><td>${isPartner ? "Yes" : "No"}</td></tr>
    //           </table>
    //         </div>
    //         <div class="footer">
    //           <p>📅 Submitted: ${istTime}, ${istDate}</p>
    //           <p>🆔 Registration ID: ${record._id}</p>
    //         </div>
    //       </div>
    //     </body>
    //     </html>
    //   `;

    // ---------------- SEND EMAIL (fire and forget) ----------------
    transporter.sendMail({
      from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
      subject: emailSubject,
      html: emailHtml,
    }).catch((err) => 
      console.error("⚠️ Email failed (record was saved):", err.message)
    );

    // ---------------- RESPONSE ----------------
    console.log("✅ Request successful for record:", record._id);
    console.log("==========================================");

    return res.status(201).json({
      success: true,
      message: finalType === "QUICK_FORM"
        ? "Quick lead submitted successfully"
        : "Shipping Service registration submitted successfully",
      data: {
        id: record._id,
        type: finalType,
        submittedAt: istTimestamp
      },
    });

  } catch (error) {
    console.error("❌ Shipping Service Error:", error);
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Error Stack:", error.stack);
    console.log("==========================================");

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate entry detected",
        error: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};