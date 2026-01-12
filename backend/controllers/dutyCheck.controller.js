const DutyCheck = require("../models/DutyCheck");
const nodemailer = require("nodemailer");

const nowIST = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
});

const d = new Date(nowIST);

// DATE
const day = d.getDate().toString().padStart(2, "0");
const month = (d.getMonth() + 1).toString().padStart(2, "0");
const year = d.getFullYear();

// TIME
let hours = d.getHours();
let minutes = d.getMinutes().toString().padStart(2, "0");
let ampm = hours >= 12 ? "pm" : "am";

hours = hours % 12 || 12; // convert 0 → 12, 13 → 1
hours = hours.toString().padStart(2, "0");

// FINAL FORMAT
const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.createDutyCheck = async (req, res) => {
  try {
    const { destinationCountry, hsCode, mobile } = req.body;

    if (!destinationCountry || !hsCode || !mobile) {
      return res.status(400).json({
        success: false,
        error: "destinationCountry, hsCode and mobile are required",
      });
    }

    if (hsCode.length !== 6) {
      return res.status(400).json({
        success: false,
        error: "HS Code must be exactly 6 digits",
      });
    }

    const saved = await DutyCheck.create({
      destinationCountry,
      hsCode,
      mobile,
    });

    await transporter.sendMail({
      from: `"Cloud Desk – Duty Benefit" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: "New Duty Benefit Check Request",
      html: `
        <h2>Duty Benefit Check Request</h2>
        <p><strong>Destination Country:</strong> ${destinationCountry}</p>
        <p><strong>HS Code:</strong> ${hsCode}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
      `,
    });

    res.json({
      success: true,
      id: saved._id,
      message: "Request submitted successfully",
    });
  } catch (err) {
    console.error("Duty Check API Error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
