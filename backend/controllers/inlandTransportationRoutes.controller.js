const inlandTransportationRoutes = require("../models/inlandTransportationRoutes.model");
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
    mode,
    pickupLocation,
    dropLocation,
    portYardIcd,
    vehicleType,
  } = record;

  const serviceDisplay = service || "Inland Transport";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `Inland Transport — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Inland Transport Request</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${mode ? `<tr><td><b>Mode (Pickup/Drop)</b></td><td>${mode}</td></tr>` : ""}
          ${pickupLocation ? `<tr><td><b>Pick‑up Location</b></td><td>${pickupLocation}</td></tr>` : ""}
          ${dropLocation ? `<tr><td><b>Drop Location</b></td><td>${dropLocation}</td></tr>` : ""}
          ${portYardIcd ? `<tr><td><b>Port / Yard / ICD</b></td><td>${portYardIcd}</td></tr>` : ""}
          ${vehicleType ? `<tr><td><b>Vehicle Type</b></td><td>${vehicleType}</td></tr>` : ""}
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
          ${email ? `<tr><td><b>Email</b></td><td>${email}</td></tr>` : ""}
          ${entity ? `<tr><td><b>Entity</b></td><td>${entity}</td></tr>` : ""}
          ${role ? `<tr><td><b>Role</b></td><td>${role}</td></tr>` : ""}
          ${partner ? `<tr><td><b>Partner</b></td><td>Yes</td></tr>` : ""}
        </table>
        <p><b>ID:</b> ${_id}<br/><b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </div>
    `,
  });

  console.log("✅ Email sent:", _id);
}

/* CREATE API */
exports.createinlandTransportationRoutes = async (req, res) => {
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
      mode,
      pickupLocation,
      dropLocation,
      portYardIcd,
      vehicleType,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM" || type === "INLAND_TRANSPORT";

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const recordData = {
      service: service || "Inland Transport",
      mobile: mobile.trim(),
      mode: mode || null,
      pickupLocation: pickupLocation || null,
      dropLocation: dropLocation || null,
      portYardIcd: portYardIcd || null,
      vehicleType: vehicleType || null,
      name: isQuickForm ? null : (name ? name.trim() : null),
      email: isQuickForm ? null : (email ? email.trim().toLowerCase() : null),
      entity: isQuickForm ? null : (entity ? entity.trim() : null),
      role: isQuickForm ? null : (role || null),
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "INLAND_TRANSPORT",
      category: category || null,
      issue: issue || null,
    };

    console.log("📦 Saving:", recordData);

    const record = await inlandTransportationRoutes.create(recordData);
    console.log("✅ Saved:", record._id);

    sendEmail(record).catch((err) =>
      console.error("❌ Email Error:", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "Transport enquiry submitted successfully",
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
exports.inlandTransportationRoutes = async (req, res) => {
  try {
    const data = await inlandTransportationRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.inlandTransportationRoutesById = async (req, res) => {
  try {
    const data = await inlandTransportationRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};