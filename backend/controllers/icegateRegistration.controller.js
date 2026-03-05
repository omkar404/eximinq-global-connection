const icegateRegistration = require("../models/icegateRegistration.model");
const nodemailer = require("nodemailer");

const {
    getISTTime,
    getISTDateString,
    getISTTimestamp,
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

// ---------------- CONTROLLER ----------------
exports.createicegateRegistration = async (req, res) => {
    try{
        const{
            name,
            mobile,
            entity,
            email,
            role,
            partner,
            type,
            category,
            issue,
        } = req.body;

// ---------------- TYPE NORMALIZATION ----------------
const TYPE_MAP = {
    enroll: "ENROLL",
    "icegate-registration-apply": "ENROLL",
    iec_profile_updation: "IEC_PROFILE_UPDATATION",
    iec_registration: "IEC_REGISTRATION",
    iec_annual_update: "IEC_ANNUAL_UPDATE",
    quick_form: "QUICK_FORM",
};

const cleanedType = type ? String(type).trim().toLowerCase() : "";
const normalizedType = TYPE_MAP[cleanedType];

if (!normalizedType) {
    return res.status(400).json({
        success: false,
        message: `Invalid type value: ${type}`,
    });
}

 // ---------------- BASIC VALIDATION ----------------
 if (normalizedType === "QUICK_FORM") {
    if (!mobile || !email) {
        return res.status(400).json({
            success: false,
            message: "Mobile and Email are required",
        });
    }
} else {
    if (!name || !mobile || !email || !role || partner !== true) {
        return res.status(400).json({
            success: false,
            message: "Required fields are missing",
        });
    }
}

// ---------------- BUSINESS VALIDATION ----------------
if (normalizedType === "IEC_PROFILE_UPDATATION") {
    if (category !== "IEC PROFILE UPDATATION") {
        return res.status(400).json({
            success: false,
            message: "Invalid category for profile updation",
        });
    }

    if(!issue){
        return res.status(400).json({
            success: false,
            message: "Issue is required for profile updation",
        });
    }
}

// ---------------- TIME ----------------
const timestamp = getISTTimestamp();
const date = getISTDateString();
const time = getISTTime();

// ---------------- SAVE TO DB ----------------

const newEntry = await icegateRegistration.create({
    name: normalizedType === "QUICK_FORM" ? "Quick Lead" : name,
    mobile,
    entity: entity || null,
    email,
    role: normalizedType === "QUICK_FORM" ? null : role,
    partner: normalizedType === "QUICK_FORM" ? false : partner,
    type: normalizedType,
    category: category || null,
    issue: issue || null,
    submittedAt: timestamp,
});

    // ---------------- EMAIL CONTENT ----------------
    let emailSubject;
    let emailHtml;

    if(normalizedType ==="QUICK_FORM"){
        emailSubject = "New Quick Form Request";

        emailHtml = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted (IST):</strong> ${time}, ${date}</p>
        `;
    } else{
        emailSubject = "New Icegate Registration Request";

        emailHtml = `
        <h3>New Icegate Registration Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Entity:</strong> ${entity}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Partner:</strong> ${partner}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Issue:</strong> ${issue}</p>
        <p><strong>Submitted (IST):</strong> ${time}, ${date}</p>
        `;
    }

    // ---------------- SEND EMAIL ----------------
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: emailSubject,
        html: emailHtml, 
    });


    // ---------------- RESPONSE ----------------
    return res.status(200).json({
        success: true,
        message:
           normalizedType === "QUICK_FORM" 
           ? "Quick Form Request Created Successfully" 
           : "Icegate Registration Request Created Successfully",
           data: newEntry,
    });

} catch (error){
    console.error("icegateRegistration Error:", error);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}
};

