const icegateRegistrationModel = require("../models/icegateRegistration.model");
const nodemailer = require("nodemailer");

const {
  getISTTime,
  getISTDateString,
} = require("../utils/dateTime");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.createicegateRegistration = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      entity,
      role,
      partner,
      type,
      category,
    } = req.body;

    // REQUIRED FIELD VALIDATION
    if (!name || !email || !mobile) {
      return res.status(400).json({
        success: false,
        error: "Name, email and mobile are required",
      });
    }

    const VALID_TYPES = [
      "Enroll",
      "Apply Now",
      "AD_CODE_REGISTRATION",
      "ICEGATE_REGISTRATION",
      "IFSC_CODE_REGISTRATION",
    ];

    if (!type || !VALID_TYPES.includes(type)) {
      return res.status(400).json({
        success: false,
        error: "Invalid request type",
      });
    }

    let requestCategory = null;

    // CASE 1 → Apply Now
    if (type === "Apply Now") {
      if (!category) {
        return res.status(400).json({
          success: false,
          error: "Category is required for Apply Now",
        });
      }
      requestCategory = category;
    }

    // CASE 2 → Other Services
    else {
      requestCategory = type;
    }

    const istDate = getISTDateString();
    const istTime = getISTTime();

    /*
      SAVE DATA
    */

    const registration = await icegateRegistrationModel.create({
      name,
      email,
      mobile,
      entity: entity || null,
      role: role || null,
      partner: partner || false,

      type,
      category: requestCategory,

      createdDate: istDate,
      createdTime: istTime, 
    });

    await registration.save();

    /*
      EMAIL NOTIFICATION
    */

    await transporter.sendMail({
      from: `"ICEGATE Registration" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
      subject: "New ICEGATE Request",
      html: `
        <h2>New ICEGATE Registration Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>

        <p><strong>Entity:</strong> ${entity || "-"}</p>
        <p><strong>Role:</strong> ${role || "-"}</p>

        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Category:</strong> ${requestCategory || "-"}</p>

        <p><strong>Submitted (IST):</strong> ${istDate} ${istTime}</p>
      `,
    });

    res.json({
      success: true,
      id: registration._id,
      message: "Request submitted successfully",
    });

  } catch (error) {
    console.error("Icegate Registration Error:", error);

    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};