// const AdcodeRegistration = require("../models/adcodeRegistration.model");
// const nodemailer = require("nodemailer");

// const {
//   getISTTime,
//   getISTDateString,
// } = require("../utils/dateTime");

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// exports.createAdcodeRegistration = async (req, res) => {
//   try {

//     const {
//       name,
//       mobile,
//       email,
//       entity,
//       role,
//       partner,
//       type,
//       category,
//       issue
//     } = req.body;

//     // ✅ Required validation
//     if (!name || !mobile || !email || !type) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, Mobile, Email and Type are required"
//       });
//     }

//     // ✅ Allow only valid types
//     const validTypes = [
//       "Enroll",
//       "AD_Code_Registration",
//       "IFSC_Registration"
//     ];

//     if (!validTypes.includes(type)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid registration type"
//       });
//     }

//     const isDate = getISTDateString();
//     const isTime = getISTTime();

//     // ✅ Create data object
//     const registrationData = {
//       name,
//       mobile,
//       email,
//       entity: entity || null,
//       role: role || null,
//       partner: partner || false,
//       type,
//       category: category || null,
//       issue: issue || null,
//       createdDate: isDate,
//       createdTime: isTime,
//     };

//     // ✅ Save to DB
//     const newRegistration = await AdcodeRegistration.create(registrationData);

//     // ✅ Send Email (optional)
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: "yadavsheshnath236@gmail.com",
//       subject: "Registration Successful",
//       html: `
//         <h3>Thank you for your registration</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Mobile:</b> ${mobile}</p>
//         <p><b>Type:</b> ${type}</p>
//         <p>Date: ${isDate}</p>
//         <p>Time: ${isTime}</p>
//       `,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Registration submitted successfully",
//       data: newRegistration
//     });

//   } catch (error) {

//     console.error("Registration Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message
//     });

//   }
// };

const AdcodeRegistration = require("../models/adcodeRegistration.model");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.createAdcodeRegistration = async (req, res) => {
  try {

    console.log("Incoming Data:", req.body);

    const {
      name,
      mobile,
      email,
      entity,
      role,
      partner,
      type,
      category,
      issue
    } = req.body;

    // Validation
    if (!name || !mobile || !email || !type) {
      return res.status(400).json({
        success: false,
        message: "Name, Mobile, Email and Type are required"
      });
    }

    const registrationData = {
      name,
      mobile,
      email,
      entity,
      role,
      partner,
      type,
      category,
      issue
    };

    // Save to MongoDB
    const newRegistration = await AdcodeRegistration.create(registrationData);

    // Send Email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",   // ✅ fixed
      subject: "New AD Code Registration",
      html: `
        <h3>New Registration Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Type:</b> ${type}</p>
      `
    });

    return res.status(201).json({
      success: true,
      message: "Registration submitted successfully",
      data: newRegistration
    });

  } catch (error) {

    console.error("Registration Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};