const  MainContactInfo = require("../models/MainContactInfo.model");
const nodemailer = require("nodemailer");

const {
  getISTTime,
  getISTDateString,
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

exports.createContactInfo = async (req, res) => {
    try {
        const { firstname, lastName, email, issuecategory, details } = req.body;

        if (!firstname || !lastName  || !email || !issuecategory || !details) {
            return res.status(400).json({
                success: false,
                error: "firstname, lastName, email and issuecategory are required",
            });
        }

            const istDate = getISTDateString();
            const istTime = getISTTime();

        const savedInfo = await MainContactInfo.create({
            firstname,
            lastName,
            email,
            issuecategory,
            details,
        });

        await transporter.sendMail ({
            from: `"Contact" <${process.env.SMTP_USER}>`,
            to: "crm@eximinq.com, omkarmhetar100@gmail.com",
            subject: "New Contact Enquiry",
            html: `
                <h2>New Contact Enquiry</h2>
                <p><strong>Name:</strong> ${firstname}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Issue Category:</strong> ${issuecategory}</p>
                <p><strong>Message:</strong> ${details}</p>
                <p><strong>Submitted (IST):</strong> ${istDate} at ${istTime}</p>   
            `,
        }); 

        res.json({
            success: true,
            id: savedInfo._id,
            message: "Message sent successfully",
        })
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ success: false, error: err.message });
    }
}


