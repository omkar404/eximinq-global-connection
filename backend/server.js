require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const servicecertificateoforigin = require("./routes/servicecertificateoforigin.routes");
const serviceaeocertification = require("./routes/serviceaeocertification.routes");
const cooEnrollRoutes = require("./routes/cooEnroll.routes");
const enrollRoutes = require("./routes/enroll.routes");
const industriesWePowerRoutes = require("./routes/industriesWePower.routes");
const mainenrollRoutes = require("./routes/mainenroll.routes");
const mainCooRoutes = require("./routes/maincoo.routes");
const importExportCodeRoutes = require("./routes/importExportCodeRoutes.routes");
const icegateRoutes = require("./routes/icegateRegistrationRoutes.routes");
const AdcodeRegistrationRoutes = require("./routes/adcodeRegistrationRoutes.route");
const ercmcregistrationRoutes = require("./routes/ercmcregistrationRoutes.route");
const importManagementRoutes = require("./routes/importManagementRoutes.route");
const starExportHouseRoutes = require("./routes/starExportHouse.routes");
const billOfEntryFilingRoutes = require("./routes/billOfEntryFilingRoutes.routes.js");
const shippingBillFilingRoutes = require("./routes/shippingBillFilingRoutes.routes");
const moowrschemeRoutes = require("./routes/moowrschemeRoutes.routes");
const advanceAuthorisationRoutes = require("./routes/advanceAuthorisationRoutes.routes");
const scometlicensingRoutes = require("./routes/scometlicensingRoutes.routes");
const eopextensionRoutes = require("./routes/eopextensionRoutes.routes");
const rodtepschemeRoutes = require("./routes/rodtepschemeRoutes.routes");
const igstrefundRoutes = require("./routes/igstrefundRoutes.routes");
const dutydrawbackRoutes = require("./routes/dutydrawbackRoutes.routes");
const dscServiceRoutes = require("./routes/dscServicesRoutes.routes");
const halalCertificationRoutes = require("./routes/halalCertificationRoutes.routes");
const fssailicensingRoutes = require("./routes/fssailicensingRoutes.routes");
const eprauthorizationRoutes = require("./routes/eprauthorizationRoutes.routes");
const dfialicenseRoutes = require("./routes/dfialicenseRoutes.routes");
const freesaleCertificateRoutes = require("./routes/freesaleCertificateRoutes.routes");
const svbRegistrationRoutes = require("./routes/svbRegistrationRoutes.routes");
const factoryStuffingRoutes = require("./routes/factoryStuffingRoutes.routes");
const warehouseLicenseRoutes = require("./routes/warehouseLicenseRoutes.routes");
const interestequalisationSchemeRoutes = require("./routes/interestequalisationSchemeRoutes.routes");
const edpmsEbrcRoutes = require("./routes/edpmsEbrcRoutes.routes");
const factoryLicenseRoutes = require("./routes/factoryLicenseRoutes.routes");
const industriaLlicenseRoutes = require("./routes/industriaLlicenseRoutes.routes");
const iemRegistrationRoutes = require("./routes/iemRegistrationRoutes.routes");
const defenceeximLicenseRoutes = require("./routes/defenceeximLicenseRoutes.routes");
const customsAdjudicationRoutes = require("./routes/customsAdjudicationRoutes.routes");
const lmpcRegistrationRoutes = require("./routes/lmpcRegistrationRoutes.routes");
const uniipCertificationRoutes = require("./routes/uniipCertificationRoutes.routes");
const rexRegistrationRoutes = require("./routes/rexRegistrationRoutes.routes");
const wpcLicenseRoutes = require("./routes/wpcLicenseRoutes.routes");
const nodueCertificateRoutes = require("./routes/nodueCertificateRoutes.routes");
const noincentiveCertificateRoutes = require("./routes/noincentiveCertificateRoutes.routes");
const pollutionControlRoutes = require("./routes/pollutionControlRoutes.routes");
const cacertificationexportImportRoutes = require("./routes/cacertificationexportImportRoutes.routes");
const esanchitFilingRoutes = require("./routes/esanchitFilingRoutes.routes");
const dutypaymentEclRoutes = require("./routes/dutypaymentEclRoutes.routes");
const chaServicesRoutes = require("./routes/chaServicesRoutes.routes");
const freightForwardingRoutes = require("./routes/freightForwardingRoutes.routes");
const warehousingSolutionsRoutes = require("./routes/warehousingSolutionsRoutes.routes");
const inlandTransportationRoutes = require("./routes/inlandTransportationRoutes.routes");
const marineInsuranceRoutes = require("./routes/marineInsuranceRoutes.routes");
const gstReturnsRoutes = require("./routes/gstReturnsRoutes.routes");
const gstFilingRoutes = require("./routes/gstFilingRoutes.routes");
const rmccalertRemovalRoutes = require("./routes/rmccalertRemovalRoutes.routes");
const igcrReturnsRoutes = require("./routes/igcrReturnsRoutes.routes");
const aqcsPqmsRoutes = require("./routes/aqcsPqmsRoutes.routes");
const designRegistrationRoutes = require("./routes/designRegistrationRoutes.routes");
const dpdRegistrationRoutes = require("./routes/dpdRegistrationRoutes.routes");
const cdscoComplianceRoutes = require("./routes/cdscoComplianceRoutes.routes");
const isoCertificationRoutes = require("./routes/isoCertificationRoutes.routes");
const copyrightRegistrationRoutes = require("./routes/copyrightRegistrationRoutes.routes");
const customsLicenseRoutes = require("./routes/customsLicenseRoutes.routes");
const trademarkRegistrationRoutes = require("./routes/trademarkRegistrationRoutes.routes");
const fertiliserimportLicenseRoutes = require("./routes/fertiliserimportLicenseRoutes.routes");
const horticultureRoutes = require("./routes/horticultureRoutes.routes");
const prcRelaxationRoutes = require("./routes/prcRelaxationRoutes.routes");
const projectCargoRoutes = require("./routes/projectCargoRoutes.routes");
const gemRegistrationRoutes = require("./routes/gemRegistrationRoutes.routes");
const epcgClosureServicesRoutes = require("./routes/epcgClosureServicesRoutes.routes");
const rodtepRefundRecoveryRoutes = require("./routes/rodtepRefundRecoveryRoutes.routes.js");
const eprannualReturnsRoutes = require("./routes/eprannualReturnsRoutes.routes.js");
const fssaiannualReturnsRoutes = require("./routes/fssaiannualReturnsRoutes.routes.js");
const epcgRedemptionRoutes = require("./routes/epcgRedemptionRoutes.routes.js");
const advanceauthorizationRedemptionRoutes = require("./routes/advanceauthorizationRedemptionRoutes.routes.js");
const pharmaceuticalsindustryRoutes = require("./routes/pharmaceuticalsindustryRoutes.routes.js");
const engineeringindustryRoutes = require("./routes/engineeringindustryRoutes.routes");
const electronicsindustryRoutes = require("./routes/electronicsindustryRoutes.routes");
const chemicalindustryRoutes = require("./routes/chemicalindustryRoutes.routes");
const textilesindustryRoutes = require("./routes/textilesindustryRoutes.routes");
const foodagroindustryRoutes = require("./routes/foodagroindustryRoutes.routes");
const solarindustryRoutes = require("./routes/solarindustryRoutes.routes");
const defenseindustryRoutes = require("./routes/defenseindustryRoutes.routes");
const ecommerceindustryRoutes = require("./routes/ecommerceindustryRoutes.routes");
const { startWatcher, getExcelData, findPDFFile } = require("./services/dgftExcel.service");
const customsService = require("./services/customsExcel.service");
const exchangeRatesService = require("./services/exchangeRates.service");
const maincontactRoutes = require("./routes/maincontactRoutes.routes");
const auditcomplianceformRoutes = require("./routes/auditcomplianceform.routes");
const saasEnrollmentRoutes = require("./routes/saasEnrollment.routes");
const serviceQuickFormLeadRoutes = require("./routes/serviceQuickFormLead.routes");
const brandCopyrightRoutes = require("./routes/brandCopyrightRoutes.routes");
const logoCopyrightRoutes = require("./routes/logoCopyrightRoutes.routes");
const epcgSchemeRoutes = require("./routes/epcgSchemeRoutes.routes");

// ✅ FTP — require at top with other requires
const ftpService = require("./services/foreigntradepolicy.service.js");
const ftpRoutes  = require("./routes/ftp.route");

/* ─────────────────────────────────────────────
   IST DATE/TIME
───────────────────────────────────────────── */
const nowIST = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
const d = new Date(nowIST);
const day   = d.getDate().toString().padStart(2, "0");
const month = (d.getMonth() + 1).toString().padStart(2, "0");
const year  = d.getFullYear();
let hours   = d.getHours();
let minutes = d.getMinutes().toString().padStart(2, "0");
let ampm    = hours >= 12 ? "pm" : "am";
hours = (hours % 12 || 12).toString().padStart(2, "0");
const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`;

/* ─────────────────────────────────────────────
   APP INIT  ← sab kuch yahan ke BAAD
───────────────────────────────────────────── */
const app = express();
app.use(express.json());
app.use(cors());
app.use(require("prerender-node").set("prerenderToken", process.env.PRERENDER_TOKEN));

/* ─────────────────────────────────────────────
   DATABASE
───────────────────────────────────────────── */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

/* ─────────────────────────────────────────────
   MONGOOSE MODELS
───────────────────────────────────────────── */
const SupportForm = mongoose.model("SupportForm", new mongoose.Schema({
  name: String, entityName: String, email: String, mobile: String,
  createdAt: { type: Date, default: Date.now }
}));

const AeoForm = mongoose.model("AeoForm", new mongoose.Schema({
  companyName: String, contactPerson: String, email: String, phone: String,
  createdAt: { type: Date, default: Date.now }
}));

const DGFTEnquiry = mongoose.model("DGFTEnquiry", new mongoose.Schema({
  name: String, mobile: String, entity: String, email: String,
  iam: String, partner: Boolean, context: String,
  createdAt: { type: Date, default: Date.now }
}));

const ServiceEnquiry = mongoose.model("ServiceEnquiry", new mongoose.Schema({
  name: String, mobile: String, entity: String, email: String,
  role: String, partner: Boolean, context: String,
  createdAt: { type: Date, default: Date.now },
}));

const RodtepRosctlTrading = mongoose.model("RodtepRosctlTrading", new mongoose.Schema({
  companyName: { type: String, required: true, trim: true },
  scheme:      { type: String, enum: ["RODTEP", "RoSCTL"], required: true },
  action:      { type: String, enum: ["Selling", "Buying"], required: true },
  mobile:      { type: String, required: true, trim: true },
  email:       { type: String, default: null, lowercase: true, trim: true },
  source:      { type: String, default: "website" },
}, { timestamps: true }));

/* ─────────────────────────────────────────────
   EMAIL TRANSPORTER
───────────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

/* ─────────────────────────────────────────────
   INLINE API ROUTES
───────────────────────────────────────────── */
app.post("/api/support", async (req, res) => {
  try {
    const saved = await SupportForm.create(req.body);
    await transporter.sendMail({
      from: `"Contact" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: "New CHA Enrollment Request Submitted",
      html: `<h2>New CHA Enrollment Request</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Entity Name:</strong> ${req.body.entityName}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Mobile:</strong> ${req.body.mobile}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>`
    });
    res.json({ success: true, id: saved._id });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.post("/api/aeo-support", async (req, res) => {
  try {
    const saved = await AeoForm.create(req.body);
    await transporter.sendMail({
      from: `"Contact AEO" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: "Aeo renewal Callback Request",
      html: `<h2>Aeo renewal Callback Request</h2>
        <p><strong>Company Name:</strong> ${req.body.companyName}</p>
        <p><strong>Contact Person:</strong> ${req.body.contactPerson}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>`
    });
    res.json({ success: true, id: saved._id });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.post("/api/enquiry/dgft", async (req, res) => {
  try {
    const saved = await DGFTEnquiry.create(req.body);
    await transporter.sendMail({
      from: `"EXIMINQ CloudDesk" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New DGFT/Customs Enquiry - ${req.body.context}`,
      html: `<h2>New DGFT / Customs Enquiry</h2>
        <p><strong>Service:</strong> ${req.body.context}</p>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Mobile:</strong> ${req.body.mobile}</p>
        <p><strong>Entity:</strong> ${req.body.entity}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Role:</strong> ${req.body.iam}</p>
        <p><strong>Partner:</strong> ${req.body.partner}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>`
    });
    res.json({ success: true, id: saved._id });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.post("/api/enquiry/customs", async (req, res) => {
  try {
    const { name, mobile, entity, email, iam, partner, context } = req.body;
    await transporter.sendMail({
      from: `"Contact Customs" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New Customs Enquiry - ${context}`,
      html: `<h2>New Customs Enquiry</h2>
        <p><strong>Context:</strong> ${context}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Entity:</strong> ${entity}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>I am:</strong> ${iam}</p>
        <p><strong>Partner:</strong> ${partner ? "Yes" : "No"}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>`
    });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.post("/api/enquiry/services", async (req, res) => {
  try {
    const saved = await ServiceEnquiry.create(req.body);
    await transporter.sendMail({
      from: `"Contact Services" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New Services Enquiry — ${req.body.context || "CloudDesk Services"}`,
      html: `<h2>New Services Enquiry</h2>
        <p><strong>Context:</strong> ${req.body.context || "-"}</p>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Entity:</strong> ${req.body.entity}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Mobile:</strong> ${req.body.mobile}</p>
        <p><strong>Role:</strong> ${req.body.role || "-"}</p>
        <p><strong>Partner:</strong> ${req.body.partner ? "Yes" : "No"}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>`
    });
    res.json({ success: true, id: saved._id });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.post("/api/rodtep-rosctl-trading", async (req, res) => {
  try {
    const { companyName, scheme, action, mobile, email } = req.body;
    if (!companyName || !scheme || !action || !mobile)
      return res.status(400).json({ success: false, error: "companyName, scheme, action and mobile are required" });
    const saved = await RodtepRosctlTrading.create({ companyName, scheme, action, mobile, email: email || null });
    await transporter.sendMail({
      from: `"Contact Trading" <${process.env.SMTP_USER}>`,
      to: "crm@eximinq.com, omkarmhetar100@gmail.com",
      subject: `New ${scheme} Trading Request`,
      html: `<h2>${scheme} Trading Request</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Action:</strong> ${action}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Submitted (IST):</strong> ${formattedDateTime}</p>`
    });
    res.json({ success: true, id: saved._id });
  } catch (err) { res.status(500).json({ success: false, error: "Internal server error" }); }
});

/* ── DGFT ── */
app.get("/api/dgft/notices", (req, res) => {
  const data = getExcelData();
  if (!data.data.length)
    return res.status(404).json({ success: false, message: "No DGFT data loaded" });
  res.json({ success: true, ...data });
});

app.get("/api/dgft/pdf-download", (req, res) => {
  const { noticeNo } = req.query;
  if (!noticeNo) return res.status(400).json({ success: false, message: "noticeNo is required" });
  const pdfPath = findPDFFile(noticeNo);
  if (!pdfPath) return res.status(404).json({ success: false, message: "PDF not found" });
  res.download(pdfPath);
});

/* ── Exchange Rates ── */
app.get("/api/exchange-rates", (req, res) => {
  try { res.json(exchangeRatesService.getExchangeRatesData()); }
  catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/exchange-rates/download", (req, res) => {
  try {
    const { notification } = req.query;
    if (!notification) return res.status(400).json({ success: false, message: "notification is required" });
    const workbook = exchangeRatesService.buildNotificationWorkbook(notification);
    if (!workbook) return res.status(404).json({ success: false, message: "Exchange rate notification not found" });
    const safeNotification = String(notification).replace(/[^\dA-Za-z]+/g, "-");
    const fileName = `exchange-rates-${safeNotification}.xlsx`;
    const buffer = Buffer.from(require("xlsx").write(workbook, { type: "buffer", bookType: "xlsx" }));
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.send(buffer);
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

/* ── Customs ── */
app.use("/pdfs", express.static(path.join(__dirname, "PDF_DOC/CUSTOMS_PDF")));

app.get("/api/customs/all", (req, res) => {
  try { res.json(customsService.getCustomsData()); }
  catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/customs/diagnostics", (req, res) => {
  try { res.json({ success: true, diagnostics: customsService.getCustomsDiagnostics() }); }
  catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/customs/stats", (req, res) => {
  try {
    const raw = customsService.getRawCustomsData();
    const stats = {
      acts: raw.data.acts.length,
      rules: raw.data.rules.length,
      regulations: raw.data.regulations.length,
      forms: raw.data.forms.length,
      circulars: raw.data.circulars.length,
      instructions: raw.data.instructionsGuidelines.length,
      orders: raw.data.orders.length,
      alliedActs: raw.data.alliedActs.length,
      notifications: {
        antiDumping: raw.data.notifications.antiDumping.length,
        cvd: raw.data.notifications.cvd.length,
        nonTariff: raw.data.notifications.nonTariff.length,
        safeguards: raw.data.notifications.safeguards.length,
        tariff: raw.data.notifications.tariff.length
      }
    };
    stats.notifications.total = Object.values(stats.notifications).reduce((a,b) => a + b, 0);
    res.json({ success: true, lastUpdated: raw.lastUpdated, stats });
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/customs/notifications/category/:cat", (req, res) => {
  try {
    const data = customsService.getNotificationsByCategory(req.params.cat);
    res.json({ success: true, category: req.params.cat, count: data.length, data });
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/customs/search/:type", (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ success: false, message: "Search query required" });
    const data = customsService.getCustomsDataByType(req.params.type);
    const filtered = data.filter(item =>
      (item.number && item.number.toLowerCase().includes(q.toLowerCase())) ||
      (item.title  && item.title.toLowerCase().includes(q.toLowerCase())) ||
      (item.subject && item.subject.toLowerCase().includes(q.toLowerCase()))
    );
    res.json({ success: true, query: q, count: filtered.length, data: filtered });
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/customs/:type/page/:page/:limit", (req, res) => {
  try {
    const { type, page, limit } = req.params;
    const allData   = customsService.getCustomsDataByType(type);
    const start     = (page - 1) * limit;
    const paginated = allData.slice(start, start + parseInt(limit));
    res.json({ success: true, type, page: parseInt(page), limit: parseInt(limit), total: allData.length, totalPages: Math.ceil(allData.length / limit), data: paginated });
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/customs/pdf", (req, res) => {
  try {
    const { noticeNo } = req.query;
    if (!noticeNo) return res.status(400).json({ success: false, message: "Notice number required" });
    const pdfPath = customsService.findPDFFile(noticeNo);
    if (!pdfPath || !fs.existsSync(pdfPath)) return res.status(404).json({ success: false, message: "PDF not found" });
    res.sendFile(pdfPath);
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/customs/:type", (req, res) => {
  try {
    const data = customsService.getCustomsDataByType(req.params.type);
    res.json({ success: true, type: req.params.type, count: data.length, data });
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString(), service: "Customs API" });
});

/* ─────────────────────────────────────────────
   WATCHERS
───────────────────────────────────────────── */
try { customsService.startWatcher();    console.log("✅ Customs watcher started"); }
catch (e) { console.error("❌ Customs watcher failed:", e.message); }

try { exchangeRatesService.startWatcher(); console.log("✅ Exchange rates watcher started"); }
catch (e) { console.error("❌ Exchange rates watcher failed:", e.message); }

try { ftpService.startWatcher();        console.log("✅ FTP watcher started"); }
catch (e) { console.error("❌ FTP watcher failed:", e.message); }

startWatcher(); // DGFT

/* ─────────────────────────────────────────────
   ALL ROUTES  (app ke baad)
───────────────────────────────────────────── */

// ✅ FTP route
app.use("/api/ftp", ftpRoutes);



// All other routes
app.use("/api/certificate-of-origin", servicecertificateoforigin);
app.use("/api/aeo-certification", serviceaeocertification);
app.use("/api/coo-enroll", cooEnrollRoutes);
app.use("/api/home-enroll", enrollRoutes);
app.use("/api/individual-enroll", industriesWePowerRoutes);
app.use("/api/main-enroll", mainenrollRoutes);
app.use("/api/main-coo-enroll", mainCooRoutes);
app.use("/api/import-export-code", importExportCodeRoutes);
app.use("/api/icegate-registration", icegateRoutes);
app.use("/api/ad-code-registration", AdcodeRegistrationRoutes);
app.use("/api/e-rcmc-registration", ercmcregistrationRoutes);
app.use("/api/import-management-registration", importManagementRoutes);
app.use("/api/star-export-house", starExportHouseRoutes);
app.use("/api/bill-of-entry-filing", billOfEntryFilingRoutes);
app.use("/api/shipping-bill-filing", shippingBillFilingRoutes);
app.use("/api/moowr-scheme", moowrschemeRoutes);
app.use("/api/advance-authorisation", advanceAuthorisationRoutes);
app.use("/api/scomet-licensing", scometlicensingRoutes);
app.use("/api/eop-extension", eopextensionRoutes);
app.use("/api/rodtep-scheme", rodtepschemeRoutes);
app.use("/api/igst-refund", igstrefundRoutes);
app.use("/api/duty-drawback", dutydrawbackRoutes);
app.use("/api/dsc-services", dscServiceRoutes);
app.use("/api/halal-certification", halalCertificationRoutes);
app.use("/api/fssai-licensing", fssailicensingRoutes);
app.use("/api/epr-authorization", eprauthorizationRoutes);
app.use("/api/dfia-license", dfialicenseRoutes);
app.use("/api/free-sale-certificate", freesaleCertificateRoutes);
app.use("/api/svb-registration", svbRegistrationRoutes);
app.use("/api/factory-stuffing", factoryStuffingRoutes);
app.use("/api/warehouse-license", warehouseLicenseRoutes);
app.use("/api/interest-equalisation-scheme", interestequalisationSchemeRoutes);
app.use("/api/edpms-ebrc", edpmsEbrcRoutes);
app.use("/api/factory-license", factoryLicenseRoutes);
app.use("/api/industrial-license", industriaLlicenseRoutes);
app.use("/api/iem-registration", iemRegistrationRoutes);
app.use("/api/defence-exim-license", defenceeximLicenseRoutes);
app.use("/api/customs-adjudication", customsAdjudicationRoutes);
app.use("/api/lmpc-registration", lmpcRegistrationRoutes);
app.use("/api/un-iip-certification", uniipCertificationRoutes);
app.use("/api/rex-registration", rexRegistrationRoutes);
app.use("/api/wpc-license", wpcLicenseRoutes);
app.use("/api/no-due-certificate", nodueCertificateRoutes);
app.use("/api/no-incentive-certificate", noincentiveCertificateRoutes);
app.use("/api/pollution-control", pollutionControlRoutes);
app.use("/api/ca-certification-export-import", cacertificationexportImportRoutes);
app.use("/api/e-sanchit-filing", esanchitFilingRoutes);
app.use("/api/duty-payment-ecl", dutypaymentEclRoutes);
app.use("/api/cha-services", chaServicesRoutes);
app.use("/api/freight-forwarding", freightForwardingRoutes);
app.use("/api/warehousing-solutions", warehousingSolutionsRoutes);
app.use("/api/inland-transportation", inlandTransportationRoutes);
app.use("/api/marine-insurance", marineInsuranceRoutes);
app.use("/api/gst-returns", gstReturnsRoutes);
app.use("/api/gst-lut-filing", gstFilingRoutes);
app.use("/api/rmcc-alert-removal", rmccalertRemovalRoutes);
app.use("/api/igcr-returns", igcrReturnsRoutes);
app.use("/api/aqcs-pqms", aqcsPqmsRoutes);
app.use("/api/design-registration", designRegistrationRoutes);
app.use("/api/dpd-registration", dpdRegistrationRoutes);
app.use("/api/cdsco-compliance", cdscoComplianceRoutes);
app.use("/api/iso-certification", isoCertificationRoutes);
app.use("/api/copyright-registration", copyrightRegistrationRoutes);
app.use("/api/customs-license-registration", customsLicenseRoutes);
app.use("/api/trademark-registration", trademarkRegistrationRoutes);
app.use("/api/fertiliser-import-license", fertiliserimportLicenseRoutes);
app.use("/api/gem-registration", gemRegistrationRoutes);
app.use("/api/horticulture", horticultureRoutes);
app.use("/api/prc-relaxation", prcRelaxationRoutes);
app.use("/api/project-cargo", projectCargoRoutes);
app.use("/api/epcg-closure-services", epcgClosureServicesRoutes);
app.use("/api/rodtep-refund-recovery", rodtepRefundRecoveryRoutes);
app.use("/api/epr-annual-returns", eprannualReturnsRoutes);
app.use("/api/fssai-annual-returns", fssaiannualReturnsRoutes);
app.use("/api/epcg-redemption", epcgRedemptionRoutes);
app.use("/api/advance-authorization-redemption", advanceauthorizationRedemptionRoutes);
app.use("/api/pharmaceuticals-industry-import-export", pharmaceuticalsindustryRoutes);
app.use("/api/engineering-industry-import-export", engineeringindustryRoutes);
app.use("/api/electronics-it-industry-import-export", electronicsindustryRoutes);
app.use("/api/chemicals-industry-import-export", chemicalindustryRoutes);
app.use("/api/textiles-apparels-industry-import-export", textilesindustryRoutes);
app.use("/api/food-agro-industry-import-export", foodagroindustryRoutes);
app.use("/api/solar-and-renewables-industry-import-export", solarindustryRoutes);
app.use("/api/defense-aerospace-industry-import-export", defenseindustryRoutes);
app.use("/api/ecommerce-industry-import-export", ecommerceindustryRoutes);
app.use("/api/contact-us", maincontactRoutes);
app.use("/api/submit-audit-form", auditcomplianceformRoutes);
app.use("/api/saas-enrollment", saasEnrollmentRoutes);
app.use("/api/service-quick-form", serviceQuickFormLeadRoutes);
app.use("/api/brand-copyright", brandCopyrightRoutes);
app.use("/api/logo-copyright", logoCopyrightRoutes);
app.use("/api/epcg-scheme", epcgSchemeRoutes);

/* ─────────────────────────────────────────────
   STATIC + CATCH-ALL
───────────────────────────────────────────── */
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ─────────────────────────────────────────────
   START SERVER
───────────────────────────────────────────── */
app.listen(5000, "0.0.0.0", () => {
  console.log("🚀 Backend running on 0.0.0.0:5000");
  console.log(`📁 Excel folder: ${path.join(__dirname, "PDF_DOC/CUSTOMS_EXCEL")}`);
  console.log(`📁 PDF folder:   ${path.join(__dirname, "PDF_DOC/CUSTOMS_PDF")}`);
});