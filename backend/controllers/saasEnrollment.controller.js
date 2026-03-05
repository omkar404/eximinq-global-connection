const saasEnrollmentModel = require("../models/saasEnrollment.model");
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

exports.enrollSaas = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      entity,
      role,
      partner,
      type,
      plan,
      billing,
      price,
      interest,
    } = req.body;

    if (!name || !email || !mobile) {
      return res.status(400).json({
        success: false,
        error: "Name, email and mobile are required",
      });
    }

    let category = "";
    let selectedPlan = null;
    let billingType = null;
    let selectedPrice = null;

        const istDate = getISTDateString();
        const istTime = getISTTime();

    // Case 1 → Historical Data Cleanup
    if (type && !plan) {
      category = "HISTORICAL_DATA";
      selectedPlan = type;
    }

    // Case 2 → SaaS Subscription
    else if (plan) {
      category = "SAAS_SUBSCRIPTION";
      selectedPlan = plan;
      billingType = billing || null;
      selectedPrice = price || null;
    }

    // Case 3 → Waitlist Form
    else if (interest) {
      category = "WAITLIST";
      selectedPlan = interest;
    }

    else {
      return res.status(400).json({
        success: false,
        error: "Invalid request payload",
      });
    }

    /*
      SAVE DATA
    */

    const enrollment = await  saasEnrollmentModel.create({
      name,
      email,
      mobile,
      entity: entity || null,
      role: role || null,
      partner: partner || false,

      category,
      selectedPlan,
      billing: billingType,
      price: selectedPrice,
      interest: interest || null,

      createdDate: getISTDateString(),
      createdTime: getISTTime(),
    });

    await enrollment.save();

    /*
      EMAIL NOTIFICATION
    */

            await transporter.sendMail({
      from: `"SaaS Enrollment" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: "New SaaS Enrollment",
      html: `
        <h2>New SaaS Enrollment</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>

        <p><strong>Entity:</strong> ${entity || "-"}</p>
        <p><strong>Role:</strong> ${role || "-"}</p>

        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Selected Plan:</strong> ${selectedPlan}</p>
        <p><strong>Billing:</strong> ${billingType || "-"}</p>
        <p><strong>Price:</strong> ${selectedPrice || "-"}</p>
        <p><strong>Submitted (IST):</strong> ${istDate} ${istTime}</p>
      `,
    });

res.json({
      success: true,
      id: enrollment._id,
      message: "Enrollment submitted successfully",
    });
  } catch (error) {
    console.error("SaaS Enrollment Error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};