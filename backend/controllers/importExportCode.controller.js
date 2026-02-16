const ImportExportCode = require("../models/importExportCode.model.js");
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

// import {
//   getISTTime,
//   getISTDateString,
//   getISTTimestamp,
// } from "../utils/dateTime.js";

const{   getISTTime,
  getISTDateString,
  getISTTimestamp, } = require("../utils/dateTime");

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
      source,
      category,
      issue,
    } = req.body;

    // ---------- BASIC VALIDATION ----------
    if (!name || !mobile || !email || !role || partner !== true) {
      return res.status(400).json({
        success: false,
        error: "Required fields are missing",
      });
    }

    if (!type) {
      return res.status(400).json({
        success: false,
        error: "Type is required",
      });
    }

    // ---------- BUSINESS VALIDATION ----------
    if (type === "IEC_PROFILE_UPDATATION") {
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

    const istTime = getISTTime();
    const istDate = getISTDateString();
    const istTimestamp = getISTTimestamp();

    // ---------- SAVE ONLY ONCE ----------
    const newEntry = await ImportExportCode.create({
      name,
      mobile,
      entity,
      email,
      role,
      partner,
      type,
      source,
      category: category || null,
      issue: issue || null,
      submittedAt: istTimestamp,
    });

    // ---------- SEND EMAIL ----------
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "New Import Export Code Request",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Entity:</strong> ${entity}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Partner:</strong> ${partner}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Category:</strong> ${category || "-"}</p>
        <p><strong>Issue:</strong> ${issue || "-"}</p>
        <p><strong>Submitted (IST):</strong> ${istTime}, ${istDate}</p>
      `,
    });

    return res.status(201).json({
      success: true,
      message: "Import Export request submitted successfully",
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
