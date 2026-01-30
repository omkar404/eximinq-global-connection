const CooEnroll = require("../models/CooEnroll");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.createCooEnroll = async (req, res) => {
  try {
    const {
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      certificateType,
      type, // 👈 THIS IS CRITICAL
    } = req.body;

    // 🔒 BASE VALIDATION (ALWAYS REQUIRED)
    if (!name || !mobile || !email || !role || !type) {
      return res.status(400).json({
        success: false,
        error: "name, mobile, email, role and type are required",
      });
    }

    // 🔒 CONDITIONAL VALIDATION (ONLY FOR COO)
    if (
      type === "PREFERENTIAL_COO" ||
      type === "NON_PREFERENTIAL_COO"
    ) {
      if (!certificateType) {
        return res.status(400).json({
          success: false,
          error: "certificateType is required for CoO requests",
        });
      }

      if (
        !["PREFERENTIAL_COO", "NON_PREFERENTIAL_COO"].includes(
          certificateType
        )
      ) {
        return res.status(400).json({
          success: false,
          error: "Invalid certificateType",
        });
      }
    }

    // 💾 SAVE (certificateType OPTIONAL)
    const saved = await CooEnroll.create({
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      certificateType: certificateType || null,
      type,
    });

    // 📧 EMAIL SUBJECT BASED ON TYPE
    const subjectMap = {
      ENROLL: "New Enrollment Request",
      PREFERENTIAL_COO: "New Preferential CoO Request",
      NON_PREFERENTIAL_COO: "New Non-Preferential CoO Request",
    };

    // 📧 EMAIL BODY (SAFE)
    await transporter.sendMail({
      from: `"CloudDesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: subjectMap[type] || "New Request",
      html: `
        <h2>${subjectMap[type]}</h2>
        <p><strong>Type:</strong> ${type}</p>
        ${
          certificateType
            ? `<p><strong>Certificate Type:</strong> ${certificateType}</p>`
            : ""
        }
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Entity:</strong> ${entity || "NA"}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Partner Interest:</strong> ${
          partner ? "Yes" : "No"
        }</p>
        <p><strong>Submitted (IST):</strong> ${new Date().toLocaleString(
          "en-IN"
        )}</p>
      `,
    });

    res.json({
      success: true,
      id: saved._id,
      message: "Request submitted successfully",
    });
  } catch (err) {
    console.error("CoO Enroll API Error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};