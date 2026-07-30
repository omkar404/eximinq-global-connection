const { normalizeQuickContactFields } = require("../utils/quickContactFields");
const freightForwardingRoutes = require("../models/freightForwardingRoutes.model");
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
    originPort,
    destinationPort,
    transportMode,
    shipmentDate,
    cifValue,
    quantity,
    goodsDescription,
    companyName,
    personName,
  } = record;

  const serviceDisplay = service || "Freight Forwarding";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `Freight Forwarding — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Freight Forwarding Request</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          
          ${record.companyName ? `<tr><td><b>Company Name</b></td><td>${record.companyName}</td></tr>` : ""}
          ${record.contactPersonName || record.personName ? `<tr><td><b>Contact Person Name</b></td><td>${record.contactPersonName || record.personName}</td></tr>` : ""}
          ${record.email ? `<tr><td><b>Email ID</b></td><td>${record.email}</td></tr>` : ""}
          ${mode ? `<tr><td><b>Mode (Import/Export)</b></td><td>${mode}</td></tr>` : ""}
          ${originPort ? `<tr><td><b>Origin Port</b></td><td>${originPort}</td></tr>` : ""}
          ${destinationPort ? `<tr><td><b>Destination Port</b></td><td>${destinationPort}</td></tr>` : ""}
          ${transportMode ? `<tr><td><b>Transport Mode</b></td><td>${transportMode}</td></tr>` : ""}        
          ${shipmentDate ? `<tr><td><b>Proposed Shipment Date</b></td><td>${shipmentDate}</td></tr>` : ""}
          ${cifValue ? `<tr><td><b>CIF Value (INR)</b></td><td>${cifValue}</td></tr>` : ""}
          ${quantity ? `<tr><td><b>Quantity (Metric Tons)</b></td><td>${quantity}</td></tr>` : ""}
          ${goodsDescription ? `<tr><td><b>Goods Description</b></td><td>${goodsDescription}</td></tr>` : ""}
          
          <tr><td><b>Email</b></td><td>${email || "—"}</td></tr>
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
          
          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
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
exports.createfreightForwardingRoutes = async (req, res) => {
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
      mode,                  // new
      originPort,            // new
      destinationPort,       // new
      transportMode,         // new
      shipmentDate,          // new
      cifValue,              // new
      quantity,              // new
      goodsDescription,      // new
      companyName,
      personName,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM" || type === "FREIGHT_FORWARDING";

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const recordData = {
      service: service || "Freight Forwarding",
      mobile: mobile.trim(),
      email: email ? email.trim().toLowerCase() : null,
      mode: mode || null,
      originPort: originPort || null,
      destinationPort: destinationPort || null,
      transportMode: transportMode || null,
      shipmentDate: shipmentDate || null,
      companyName: companyName ? companyName.trim() : null,
      personName: personName ? personName.trim() : null,
      cifValue: cifValue || null,
      quantity: quantity || null,
      goodsDescription: goodsDescription || null,
      name: isQuickForm ? null : (name ? name.trim() : null),
      entity: isQuickForm ? null : (entity ? entity.trim() : null),
      role: isQuickForm ? null : (role || null),
      partner: isQuickForm ? false : Boolean(partner),
      type: type || "FREIGHT_FORWARDING",
      category: category || null,
      issue: issue || null,
    };

    normalizeQuickContactFields(recordData, req.body);

    console.log("📦 Saving:", recordData);

    const record = await freightForwardingRoutes.create(recordData);
    console.log("✅ Saved:", record._id);

    sendEmail(record).catch((err) =>
      console.error("❌ Email Error:", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "Freight request submitted successfully",
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
exports.freightForwardingRoutes = async (req, res) => {
  try {
    const data = await freightForwardingRoutes.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.freightForwardingRoutesById = async (req, res) => {
  try {
    const data = await freightForwardingRoutes.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};