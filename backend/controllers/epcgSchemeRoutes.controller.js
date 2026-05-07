const nodemailer = require("nodemailer");
const epcgSchemeRoutes = require("../models/epcgSchemeRoutes.model");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendEmail(record) {
  const {
    _id,
    service,
    machineValue,
    dutyRate,
    mobile,
    type,
    source,
  } = record;

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, yadavsheshnath236@gmail.com",
    subject: `EPCG Scheme Enquiry - ${service || "EPCG Scheme"}`,
    html: `
      <div style="font-family:Arial,sans-serif;">
        <h2>EPCG Scheme Enquiry</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Type</b></td><td>${type}</td></tr>
          ${source ? `<tr><td><b>Source</b></td><td>${source}</td></tr>` : ""}
          <tr><td><b>Service</b></td><td>${service || "EPCG Scheme"}</td></tr>
          ${
            machineValue
              ? `<tr><td><b>Machine Value (CIF)</b></td><td>${machineValue}</td></tr>`
              : ""
          }
          ${
            dutyRate
              ? `<tr><td><b>Applicable Duty Percent</b></td><td>${dutyRate}</td></tr>`
              : ""
          }
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
        </table>
        <p><b>ID:</b> ${_id}</p>
        <p><b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </div>
    `,
  });
}

exports.createEpcgSchemeLead = async (req, res) => {
  try {
    const { service, machineValue, dutyRate, mobile, type, source } = req.body;

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const record = await epcgSchemeRoutes.create({
      service: service ? service.trim() : "EPCG Scheme",
      machineValue: machineValue ? machineValue.trim() : null,
      dutyRate: dutyRate ? dutyRate.trim() : null,
      mobile: mobile.trim(),
      type: type ? type.trim() : "QUICK_FORM",
      source: source ? source.trim() : null,
    });

    sendEmail(record).catch((error) =>
      console.error("EPCG scheme email error:", error.message)
    );

    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("EPCG scheme server error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
