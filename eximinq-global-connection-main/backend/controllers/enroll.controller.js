const Enroll = require("../models/industriesWePower");
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

const {
  getISTTime,
  getISTDateString,
  getISTTimestamp,
} = require("../utils/dateTime");

exports.createEnroll = async (req, res) => {
  try {
    const {
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
      source,
    } = req.body;

    // 🔒 HARD VALIDATION
    if (!name || !mobile || !email || !role || type !== "ENROLL") {
      return res.status(400).json({
        success: false,
        error:
          "name, mobile, email, role and valid type (ENROLL) are required",
      });
    }

    const istTime = getISTTime();           // 12:00 PM
    const istDate = getISTDateString();     // Wednesday, 7 January 2026
    const istTimestamp = getISTTimestamp(); // 2026-01-07T12:00:00

    const saved = await Enroll.create({
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
      source,
    });

    // 📧 EMAIL NOTIFICATION
    await transporter.sendMail({
      from: `"CloudDesk Helpdesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: "New Enrollment Request – pharmaceuticals industry import export Helpdesk",
      html: `
        <h2>New Enrollment Request</h2>
        <p><strong>Service:</strong> pharmaceuticals industry import export </p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Entity:</strong> ${entity || "NA"}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Partner Interest:</strong> ${
          partner ? "Yes" : "No"
        }</p>
        <p><strong>Submitted (IST):</strong> 
        ${istDate} at ${istTime}
        )}</p>
      `,
    });

    res.json({
      success: true,
      id: saved._id,
      message: "Enrollment request submitted successfully",
    });
  } catch (err) {
    console.error("Enroll API Error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
