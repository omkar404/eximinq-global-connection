const { normalizeQuickContactFields } = require("../utils/quickContactFields");
const servicecertificateoforigin = require("../models/servicecertificateoforigin");
const nodemailer = require("nodemailer");

const EXPORTER_PLAN_DETAILS = {
  Startup_Small_Plan: {
    planCategory: "Preferential COO Subscription",
    planName: "Startup / Small Plan",
    monthlyCooLimit: "Up to 25 Pref. COO",
    additionalCooRate: "INR 1,250/- per COO",
    planPrice: "INR 30,000/- / mo",
  },
  MID_SIZE_EXPORTER_PLAN: {
    planCategory: "Preferential COO Subscription",
    planName: "Mid-Size Exporter Plan",
    monthlyCooLimit: "Up to 50 Pref. COO",
    additionalCooRate: "INR 1,150/- per COO",
    planPrice: "INR 55,000/- / mo",
  },
  LARGE_EXPORTER_PLAN: {
    planCategory: "Preferential COO Subscription",
    planName: "Large-Size Exporter Plan",
    monthlyCooLimit: "Up to 75 Pref. COO",
    additionalCooRate: "INR 1,050/- per COO",
    planPrice: "INR 75,000/- / mo",
  },
};

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
    destinationCountry,
    hsCode,
    ftaagreement,
    planCategory,
    planName,
    monthlyCooLimit,
    additionalCooRate,
    planPrice,
    companyName,
    personName,
  } = record;

  const serviceDisplay = service || "Certificate of Origin Registration";

  await transporter.sendMail({
    from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
    to: "crm@eximinq.com, omkarmhetar100@gmail.com, sheshnathyadav1827499@gmail.com",
    subject: `Certificate of Origin Registration — ${serviceDisplay}`,
    html: `
      <div style="font-family:Arial;">
        <h2>Certificate of Origin Registration</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><td><b>Submission Type</b></td><td>${type}</td></tr>
          <tr><td><b>Service</b></td><td>${serviceDisplay}</td></tr>
          ${record.companyName ? `<tr><td><b>Company Name</b></td><td>${record.companyName}</td></tr>` : ""}
          ${record.contactPersonName || record.personName ? `<tr><td><b>Contact Person Name</b></td><td>${record.contactPersonName || record.personName}</td></tr>` : ""}
          ${record.email ? `<tr><td><b>Email ID</b></td><td>${record.email}</td></tr>` : ""}
          ${destinationCountry ? `<tr><td><b>Destination Country</b></td><td>${destinationCountry}</td></tr>` : ""}
          ${hsCode ? `<tr><td><b>HS Code (First 6 digits)</b></td><td>${hsCode}</td></tr>` : ""}
          ${ftaagreement ? `<tr><td><b>FTA Agreement</b></td><td>${ftaagreement}</td></tr>` : ""}
          ${planCategory ? `<tr><td><b>Selected Plan Category</b></td><td>${planCategory}</td></tr>` : ""}
          ${planName ? `<tr><td><b>Plan Name</b></td><td>${planName}</td></tr>` : ""}
          ${monthlyCooLimit ? `<tr><td><b>Monthly COO Limit</b></td><td>${monthlyCooLimit}</td></tr>` : ""}
          ${additionalCooRate ? `<tr><td><b>Rate for Additional COO</b></td><td>${additionalCooRate}</td></tr>` : ""}
          ${planPrice ? `<tr><td><b>Plan Price</b></td><td>${planPrice}</td></tr>` : ""}
          ${category ? `<tr><td><b>Category</b></td><td>${category}</td></tr>` : ""}
          ${issue ? `<tr><td><b>Issue</b></td><td>${issue}</td></tr>` : ""}
          <tr><td><b>Mobile</b></td><td>${mobile}</td></tr>
          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
          ${entity ? `<tr><td><b>Entity</b></td><td>${entity}</td></tr>` : ""}
          ${role ? `<tr><td><b>Role</b></td><td>${role}</td></tr>` : ""}
          ${type !== "QUICK_FORM_COMPLIANCE" ? `<tr><td><b>Partner</b></td><td>${partner ? "Yes" : "No"}</td></tr>` : ""}
        </table>
        <p><b>ID:</b> ${_id}<br/><b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </div>
    `,
  });

  console.log("✅ Email sent:", _id);
}

/* CREATE API */
exports.createservicecertificateoforigin = async (req, res) => {
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
      destinationCountry, // ✅ camelCase
      hsCode, // ✅ camelCase
      ftaagreement,
      planCategory,
      planName,
      monthlyCooLimit,
      additionalCooRate,
      planPrice,
      companyName,
      personName,
    } = req.body;

    const isQuickForm = type === "QUICK_FORM";
    const canonicalPlan = EXPORTER_PLAN_DETAILS[type] || null;

    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const recordData = {
      service: service || "Certificate of Origin Registration",

      mobile: mobile.trim(),

      destinationCountry: destinationCountry ? destinationCountry.trim() : null,

      hsCode: hsCode ? hsCode.trim() : null,

      ftaagreement: ftaagreement ? ftaagreement.trim() : null,

      companyName: companyName ? companyName.trim() : null,

      personName: personName ? personName.trim() : null,

      // ✅ Always save email
      email: email ? email.trim().toLowerCase() : null,

      // ✅ Save these if available
      name: name ? name.trim() : null,

      entity: entity ? entity.trim() : null,

      role: role || null,

      partner: Boolean(partner),

      planCategory:
        canonicalPlan?.planCategory ||
        (planCategory ? planCategory.trim() : null),

      planName: canonicalPlan?.planName || (planName ? planName.trim() : null),

      monthlyCooLimit:
        canonicalPlan?.monthlyCooLimit ||
        (monthlyCooLimit ? monthlyCooLimit.trim() : null),

      additionalCooRate:
        canonicalPlan?.additionalCooRate ||
        (additionalCooRate ? additionalCooRate.trim() : null),

      planPrice:
        canonicalPlan?.planPrice || (planPrice ? planPrice.trim() : null),

      type: type || "QUICK_FORM",

      category: category || null,

      issue: issue || null,
    };

    normalizeQuickContactFields(recordData, req.body);

    console.log("📦 Saving:", recordData);

    const record = await servicecertificateoforigin.create(recordData);
    console.log("✅ Saved:", record._id);

    sendEmail(record).catch((err) =>
      console.error("❌ Email Error:", err.message),
    );

    return res.status(201).json({
      success: true,
      message: "Submitted successfully",
      data: record,
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
    // For debugging – show real error (remove in production)
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

/* GET ALL */
exports.servicecertificateoforigin = async (req, res) => {
  try {
    const data = await servicecertificateoforigin
      .find()
      .sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET BY ID */
exports.servicecertificateoforiginById = async (req, res) => {
  try {
    const data = await servicecertificateoforigin.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
