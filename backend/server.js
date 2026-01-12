require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const dutyCheckRoutes = require("./routes/dutyCheck.routes");
const cooEnrollRoutes = require("./routes/cooEnroll.routes");
const enrollRoutes = require("./routes/enroll.routes");
const industriesWePowerRoutes = require("./routes/industriesWePower.routes");
const mainenrollRoutes = require("./routes/mainenroll.routes");
const mainCooRoutes = require("./routes/maincoo.routes");

const nowIST = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
});

const d = new Date(nowIST);

// DATE
const day = d.getDate().toString().padStart(2, "0");
const month = (d.getMonth() + 1).toString().padStart(2, "0");
const year = d.getFullYear();

// TIME
let hours = d.getHours();
let minutes = d.getMinutes().toString().padStart(2, "0");
let ampm = hours >= 12 ? "pm" : "am";

hours = hours % 12 || 12; // convert 0 → 12, 13 → 1
hours = hours.toString().padStart(2, "0");

// FINAL FORMAT
const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`


const app = express();
app.use(express.json());
app.use(cors());

app.use(require('prerender-node').set("prerenderToken", process.env.PRERENDER_TOKEN));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

const SupportForm = mongoose.model("SupportForm", new mongoose.Schema({
  name: String,
  entityName: String,
  email: String,
  mobile: String,
  createdAt: { type: Date, default: Date.now }
}));

const AeoForm = mongoose.model("AeoForm", new mongoose.Schema({
  companyName: String,
  contactPerson: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
}));

const DGFTEnquiry = mongoose.model("DGFTEnquiry", new mongoose.Schema({
  name: String,
  mobile: String,
  entity: String,
  email: String,
  iam: String,
  partner: Boolean,
  context: String,        
  createdAt: { type: Date, default: Date.now }
}));

const ServiceEnquiry = mongoose.model(
  "ServiceEnquiry",
  new mongoose.Schema({
    name: String,
    mobile: String,
    entity: String,
    email: String,
    role: String,
    partner: Boolean,
    context: String,
    createdAt: { type: Date, default: Date.now },
  })
);


const RodtepRosctlTradingSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    scheme: {
      type: String,
      enum: ["RODTEP", "RoSCTL"],
      required: true,
    },

    action: {
      type: String,
      enum: ["Selling", "Buying"],
      required: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      default: null,
      lowercase: true,
      trim: true,
    },

    source: {
      type: String,
      default: "website",
    },
  },
  {
    timestamps: true,
  }
);

const RodtepRosctlTrading = mongoose.model(
  "RodtepRosctlTrading",
  RodtepRosctlTradingSchema
);

// EMAIL TRANSPORTER

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post("/api/support", async (req, res) => {
  try {
    const saved = await SupportForm.create(req.body);

    // Email content
    const mailOptions = {
      from: `"Cloud Desk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: "New CHA Enrollment Request Submitted",
      html: `
        <h2>New CHA Enrollment Request</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Entity Name:</strong> ${req.body.entityName}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Mobile:</strong> ${req.body.mobile}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, id: saved._id });

  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// API
app.post("/api/aeo-support", async (req, res) => {
  try {
    const saved = await AeoForm.create(req.body);

    console.log("BODY:", req.body);

    const mailOptions = {
      from: `"Cloud Desk AEO" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: "Aeo renewal Callback Request",
      html: `
        <h2>Aeo renewal Callback Request</h2>
        <p><strong>Company Name:</strong> ${req.body.companyName}</p>
        <p><strong>Contact Person:</strong> ${req.body.contactPerson}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, id: saved._id });

  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});


app.post("/api/enquiry/dgft", async (req, res) => {
  try {
    const saved = await DGFTEnquiry.create(req.body);

    const mailOptions = {
      from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
      to:  "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New DGFT/Customs Enquiry - ${req.body.context}`,
      html: `
        <h2>New DGFT / Customs Enquiry</h2>

        <p><strong>Service:</strong> ${req.body.context}</p>

        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Mobile:</strong> ${req.body.mobile}</p>
        <p><strong>Entity:</strong> ${req.body.entity}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Role:</strong> ${req.body.iam}</p>
        <p><strong>Partner:</strong> ${req.body.partner}</p>

        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, id: saved._id });

  } catch (err) {
    console.log("DGFT API Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/api/enquiry/customs", async (req, res) => {
  try {
    const { name, mobile, entity, email, iam, partner, context } = req.body;

    const mailOptions = {
      from: `"Cloud Desk Customs" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New Customs Enquiry - ${context}`,
      html: `
        <h2>New Customs Enquiry</h2>
        <p><strong>Context:</strong> ${context}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Entity:</strong> ${entity}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>I am:</strong> ${iam}</p>
        <p><strong>Partner:</strong> ${partner ? "Yes" : "No"}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.log("Customs Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/api/enquiry/services", async (req, res) => {
  try {
    console.log("Services Enquiry Body:", req.body);

    const saved = await ServiceEnquiry.create(req.body);

    const mailOptions = {
      from: `"Cloud Desk Services" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New Services Enquiry — ${req.body.context || "CloudDesk Services"}`,
      html: `
        <h2>New Services Enquiry</h2>
        <p><strong>Context:</strong> ${req.body.context || "-"}</p>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Entity:</strong> ${req.body.entity}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Mobile:</strong> ${req.body.mobile}</p>
        <p><strong>Role:</strong> ${req.body.role || "-"}</p>
        <p><strong>Partner:</strong> ${req.body.partner ? "Yes" : "No"}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, id: saved._id });
  } catch (err) {
    console.error("Services enquiry error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});


app.post("/api/rodtep-rosctl-trading", async (req, res) => {
  try {
    const { companyName, scheme, action, mobile, email } = req.body;

    if (!companyName || !scheme || !action || !mobile) {
      return res.status(400).json({
        success: false,
        error: "companyName, scheme, action and mobile are required",
      });
    }

    const saved = await RodtepRosctlTrading.create({
      companyName,
      scheme,
      action,
      mobile,
      email: email || null,
    });

    // ✅ EMAIL SEND (THIS WAS MISSING)
    await transporter.sendMail({
      from: `"Cloud Desk Trading" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New ${scheme} Trading Request`,
      html: `
        <h2>${scheme} Trading Request</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Action:</strong> ${action}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>
      `,
    });

    res.json({ success: true, id: saved._id });

  } catch (err) {
    console.error("Trading API Error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// Routes
app.use("/api/duty-check", dutyCheckRoutes);

app.use("/api/coo-enroll", cooEnrollRoutes);

app.use("/api/home-enroll", enrollRoutes);

app.use("/api/individual-enroll", industriesWePowerRoutes);

app.use("/api/main-enroll", mainenrollRoutes);

app.use("/api/main-coo-enroll", mainCooRoutes);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000, "0.0.0.0", () => console.log("Backend running on 0.0.0.0:5000"));
