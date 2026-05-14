const gstReturnsRoutes = require("../models/gstReturnsRoutes.model");
const nodemailer = require("nodemailer");

/* SMTP TRANSPORTER */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* EMAIL HELPER */
async function sendEmail(record) {
  try {
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
      export: exportType,
      invoices,
    } = record;

    const serviceDisplay = service || "GST Returns Registration";

    await transporter.sendMail({
      from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",

      subject: `GST Returns Registration — ${serviceDisplay}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">

          <h2 style="color:#2563eb;">
            GST Returns Registration
          </h2>

          <table 
            border="1" 
            cellpadding="8" 
            cellspacing="0"
            style="border-collapse:collapse;width:100%;"
          >

            <tr>
              <td><b>Submission Type</b></td>
              <td>${type || "-"}</td>
            </tr>

            <tr>
              <td><b>Service</b></td>
              <td>${serviceDisplay}</td>
            </tr>

            ${
              exportType
                ? `
                <tr>
                  <td><b>Export Type</b></td>
                  <td>${exportType}</td>
                </tr>
              `
                : ""
            }

            ${
              invoices
                ? `
                <tr>
                  <td><b>Monthly Invoices (Approx)</b></td>
                  <td>${invoices}</td>
                </tr>
              `
                : ""
            }

            ${
              category
                ? `
                <tr>
                  <td><b>Category</b></td>
                  <td>${category}</td>
                </tr>
              `
                : ""
            }

            ${
              issue
                ? `
                <tr>
                  <td><b>Issue</b></td>
                  <td>${issue}</td>
                </tr>
              `
                : ""
            }

            <tr>
              <td><b>Mobile</b></td>
              <td>${mobile}</td>
            </tr>

            ${
              name
                ? `
                <tr>
                  <td><b>Name</b></td>
                  <td>${name}</td>
                </tr>
              `
                : ""
            }

            ${
              email
                ? `
                <tr>
                  <td><b>Email</b></td>
                  <td>${email}</td>
                </tr>
              `
                : ""
            }

            ${
              entity
                ? `
                <tr>
                  <td><b>Entity</b></td>
                  <td>${entity}</td>
                </tr>
              `
                : ""
            }

            ${
              role
                ? `
                <tr>
                  <td><b>Role</b></td>
                  <td>${role}</td>
                </tr>
              `
                : ""
            }

            ${
              type !== "QUICK_FORM_COMPLIANCE"
                ? `
                <tr>
                  <td><b>Partner</b></td>
                  <td>${partner ? "Yes" : "No"}</td>
                </tr>
              `
                : ""
            }

          </table>

          <br/>

          <p>
            <b>ID:</b> ${_id}
          </p>

          <p>
            <b>Time:</b> 
            ${new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            })}
          </p>

        </div>
      `,
    });

    console.log("✅ Email sent:", _id);
  } catch (err) {
    console.error("❌ Email Error:", err.message);
  }
}

/* CREATE API */
exports.creategstReturnsRoutes = async (req, res) => {
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
      export: exportType,
      invoices,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";

    /* VALIDATION */

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    /* RECORD DATA */

    const recordData = {
      service: service || "GST Returns Registration",

      mobile: mobile.trim(),

      export: exportType ? exportType.trim() : null,

      invoices: invoices ? invoices.toString().trim() : null,

      name: isQuickForm ? null : name ? name.trim() : null,

      // ✅ QUICK FORM EMAIL ALSO SAVES
      email: email ? email.trim().toLowerCase() : "",

      entity: isQuickForm ? null : entity ? entity.trim() : null,

      role: isQuickForm ? null : role || null,

      partner: isQuickForm ? false : Boolean(partner),

      type: type || "QUICK_FORM_COMPLIANCE",

      category: category || null,

      issue: issue || null,
    };

    console.log("📦 Saving:", recordData);

    /* SAVE */

    const record = await gstReturnsRoutes.create(recordData);

    console.log("✅ Saved:", record._id);

    /* SEND EMAIL */

    sendEmail(record);

    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("❌ Server Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

/* GET ALL */
exports.gstReturnsRoutes = async (req, res) => {
  try {
    const data = await gstReturnsRoutes.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* GET BY ID */
exports.gstReturnsRoutesById = async (req, res) => {
  try {
    const data = await gstReturnsRoutes.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    return res.json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
