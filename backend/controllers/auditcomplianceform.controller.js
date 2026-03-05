const auditcomplianceformService = require("../models/auditcomplianceform.model");
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

exports.createAuditComplianceForm = async (req, res) => {
    try {
        const {
            company,
            name,
            epcgActive,
            aaActive,
            igstPending,
            drawbackFrequency,
            email,
        } = req.body;

        if (!company || !name || !epcgActive || !aaActive || !igstPending || !drawbackFrequency || !email) {
            return res.status(400).json({
                success: false,
                error: "company, name, epcgActive, aaActive, igstPending, drawbackFrequency and email are required",
            });
        }

        const istDate = getISTDateString();
        const istTime = getISTTime();


        const saved = await auditcomplianceformService.create({
            company,
            name,
            epcgActive,
            aaActive,
            igstPending,
            drawbackFrequency,
            email,
        });

        await transporter.sendMail({
            from: `"Audit Compliance Form" <${process.env.SMTP_USER}>`,
            to: "crm@eximinq.com, omkarmhetar100@gmail.com",
            subject: "New Audit Compliance Form",
            html: `
      <h2>New Audit Compliance Form</h2>
      <p><strong>Organization Identity:</strong> ${company}</p>
      <p><strong>Official Full Name:</strong> ${name}</p>
      <p><strong>Active EPCG Licenses:</strong> ${epcgActive}</p>
      <p><strong>Active AA Auths:</strong> ${aaActive}</p>
      <p><strong>Pending IGST Refund:</strong> ${igstPending}</p>
      <p><strong>Export Frequency Profile:</strong> ${drawbackFrequency}</p>
      <p><strong>Verified Work Email:</strong> ${email}</p>
      <p><strong>Submitted (IST):</strong> ${istDate} ${istTime}</p>
    `,
        });

        res.json({
            success: true,
            id: saved._id,
            message: "Form submitted successfully",
        });
    } catch (error) {
        console.error("Error in createAuditComplianceForm:", error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};