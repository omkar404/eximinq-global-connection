// import TopBar from "../components/CloudDeskFSSAILicensing/TopBar";
import Navbar from "../components/CloudDeskFSSAILicensing/Navbar";
import Hero from "../components/CloudDeskFSSAILicensing/Hero";
import Fees from "../components/CloudDeskFSSAILicensing/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  ShieldUser,   
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Store,
  XCircle,
  CheckCheck,
  Tag,
  Circle,
  List,
  Building,
  Check,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskFSSAILicensing/MainNavbar";

const CloudDeskFSSAILicensing = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is FICS?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Food Import Clearance System (FICS)</strong> is an
              online platform integrated with the customs ICEGATE system. Every
              consignment of food products imported into India must be cleared
              through FICS by the{" "}
              <strong>
                Food Safety and Standards Authority of India (FSSAI)
              </strong>
              .
            </p>

            <p className="mb-4">
              Upon arrival, FSSAI officials inspect the documents and visual
              condition of the cargo. Samples are drawn and sent to
              NABL-accredited labs for testing against Indian standards. Only
              after a "Pass" report is generated, a{" "}
              <strong>No Objection Certificate (NOC)</strong> is issued for
              customs clearance.
            </p>
          </div>
        </div>
      </section>

      <section id="license" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Mandatory Registration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Which License Do You Need?
            </h2>
            <p className="text-slate-500 mt-2">
              For Importers, the choice is clear.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Central License */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-green-600 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
                MANDATORY FOR IMPORTERS
              </div>

              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <Globe className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Central License
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">
                  Issued by Central Licensing Authority
                </p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  <strong>All Importers</strong> keeping stock or importing food
                  products for trade must obtain a Central License. The State
                  License is NOT valid for import activities. Your IEC Code must
                  be linked to this license.
                </p>

                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Required for 100% Export Oriented Units (EOU)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Required for E-commerce food sellers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Validity: 1 to 5 Years
                  </li>
                </ul>

                <a
                  href="#contact"
                  className="block w-full bg-brand-600 text-white text-center font-bold py-3 rounded hover:bg-brand-700 transition"
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* State / Basic License */}
            <div className="bg-slate-100 rounded-xl shadow border border-slate-200 overflow-hidden opacity-75">
              <div className="p-8">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-500">
                  <Store className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-slate-700 mb-2">
                  State / Basic License
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">
                  For Domestic Retailers Only
                </p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  These licenses are for local manufacturers, small retailers,
                  and petty food business operators (FBOs). They are{" "}
                  <strong>not valid</strong> for clearing shipments at customs
                  ports.
                </p>

                <div className="bg-white p-4 rounded text-xs text-red-600 font-bold border border-red-200 flex items-center">
                  <XCircle className="w-4 h-4 mr-2" /> Cannot be used for
                  Imports
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              FICS Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Steps to Obtain NOC
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Filing</h3>
              <p className="text-sm text-slate-300">
                CHA files Bill of Entry. Data flows to FICS. Fees paid online.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Inspection</h3>
              <p className="text-sm text-slate-300">
                FSSAI Officer inspects labeling and packaging at the port.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Sampling</h3>
              <p className="text-sm text-slate-300">
                Two samples are drawn randomly and sealed for lab testing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Testing</h3>
              <p className="text-sm text-slate-300">
                NABL Lab tests for safety parameters and ingredients.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
              text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <CheckCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">NOC</h3>
              <p className="text-sm text-slate-300">
                Non-Objection Certificate issued if test passes. Cargo cleared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="labeling" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Critical Labeling Norms
              </h2>

              <p className="text-slate-600 mb-8">
                Most rejections happen due to labeling errors. Imported products
                must strictly adhere to FSSAI (Packaging and Labeling)
                Regulations.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Tag className="text-brand-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      FSSAI Logo & License No.
                    </strong>
                    <span className="text-sm text-slate-500">
                      Must be printed/stickered on the principal display panel.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Circle className="text-green-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      Veg / Non-Veg Symbol
                    </strong>
                    <span className="text-sm text-slate-500">
                      Green dot in square (Veg) or Brown triangle in square
                      (Non-Veg) is mandatory.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <List className="text-brand-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      Ingredients & Nutritional Info
                    </strong>
                    <span className="text-sm text-slate-500">
                      List of ingredients in descending order. Nutritional facts
                      per 100g/ml.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Building className="text-brand-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      Importer Details
                    </strong>
                    <span className="text-sm text-slate-500">
                      Name and Address of the Indian Importer must be present.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
              <h3 className="text-xl font-bold text-brand-900 mb-4">
                Required Documents for FICS
              </h3>

              <ul className="text-sm text-slate-700 space-y-3">
                {[
                  "Import Export Code (IEC)",
                  "Country of Origin Certificate",
                  "Analysis Report from Manufacturer",
                  "End-Use Declaration",
                  "Stuffing List / Packing List",
                  "Bill of Entry (Examination Copy)",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <Check className="text-green-500 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="block w-full bg-brand-600 text-white font-bold py-2 px-4 rounded text-center hover:bg-brand-700 transition"
                >
                  Get Document Checklist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fees />


{/* --- WHY CLOUDDESK SECTION (FSSAI) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Fssai-Licensing?</h2>
      <p className="text-slate-500">
        Food is "Perishable" and "High-Risk." Every day stuck in Customs isn't just a storage cost; it's a threat to your product's shelf life.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. SWIFT 2.0 Integration (The "Auto-Match")</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            In 2026, the Unified Dashboard on ICEGATE pulls your FSSAI license data in real-time. CloudDesk ensures your <strong>Kind of Business (KoB)</strong> on FoSCoS is perfectly synced with your <strong>DGFT IEC</strong>. We prevent the <strong>"Data Mismatch" errors</strong> that currently block 15% of food imports at the port.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Product Categorization (FSS Act 2006/2026)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Is your product <strong>"Proprietary Food," "Health Supplement,"</strong> or <strong>"Novel Food"</strong>? Each has a different approval path. CloudDesk performs a <strong>Technical Screening</strong> of your ingredients against the FSS (Food Product Standards) Regulations to ensure you apply for the correct category, avoiding the dreaded <strong>"Non-Specified Food" trap</strong>.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Labelling & Shelf-Life Audit</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Imported food must have a minimum <strong>60% residual shelf life</strong> at the time of import. CloudDesk reviews your artwork to ensure mandatory declarations (<strong>Veg/Non-Veg logo, FSSAI number, Batch No., Expiry</strong>) are in the correct font size and contrast as per the <strong>2026 Labelling & Display Rules</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. NOC & Visual Inspection Management</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Once the cargo arrives, we manage the <strong>Food Import Clearance System (FICS)</strong> workflow. This includes scheduling the <strong>Visual Inspection</strong>, coordinating with <strong>Authorized Officers (AO)</strong>, and managing the <strong>NABL Lab Sampling</strong> process to get your No Objection Certificate (NOC) faster.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (FSSAI) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What if the sample fails the lab test?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          If a sample fails, you can apply for a re-test at a referral lab. If that also fails, the shipment gets a <strong>Non-Conformance Report (NCR)</strong> and must be re-exported or destroyed. It cannot be cleared for consumption.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is FSSAI required for 100% Export Oriented Units (EOU)?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes, even 100% Export Oriented Units must obtain a <strong>Central License</strong> under the category of "Exporting FBO". However, import clearance procedures may be simplified if the goods are for re-export.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I stick labels after the goods arrive in India?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Generally, labels should be affixed before shipment. However, FSSAI allows rectification of labeling deficiencies (like adding Importer details or Veg/Non-Veg logo) at the <strong>Customs Bonded Warehouse</strong> under officer supervision for a fee.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Do I need a State or Central License?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, all <strong>Importers and Exporters must obtain a Central License</strong>, regardless of turnover. State Licenses are only for domestic-only traders/manufacturers with turnover between <strong>₹12 Lakh and ₹20 Crore</strong>.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the cost of an FSSAI Central License in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The government fee is <strong>₹7,500 per year</strong>. You can apply for up to 5 years (<strong>₹37,500</strong>) to avoid annual renewal hassles.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I use one license for multiple locations?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. FSSAI is <strong>Premise-Based</strong>. You can have a "Head Office" license to manage the brand, but every <strong>warehouse or cold storage facility</strong> must have its own license/registration.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How do I link my FSSAI license to my Bill of Entry?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Under <strong>SWIFT 2.0</strong>, this is automatic. When you file your BE on ICEGATE, the system fetches your FSSAI details using your IEC. CloudDesk ensures this mapping is active before you ship your first container.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What happens if my product fails the lab test?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          If the sample is non-conforming, a <strong>Non-Conforming Report (NCR)</strong> is issued. You have the right to appeal for a <strong>"Second Referral"</strong> to a Referral Lab. CloudDesk manages this appeal process <strong>(Form 6)</strong> to save your shipment.
        </p>
      </details>

      {/* FAQ 9 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Are "Rectifiable Labels" allowed?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes, for certain missing details like the <strong>FSSAI Logo, Importer Name/Address,</strong> or <strong>Veg/Non-Veg symbol</strong>. You can fix these in a Customs Bonded Warehouse before the NOC is issued. However, <strong>"Date of Manufacture" or "Expiry" are NOT rectifiable</strong>.
        </p>
      </details>

      {/* FAQ 10 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          When is the FSSAI Annual Return (Form D1) due?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Every licensed manufacturer and importer must file the annual return by <strong>May 31st</strong> for the previous financial year.
        </p>
      </details>

      {/* FAQ 11 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the penalty for late renewal?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, the late fee is <strong>₹100 per day</strong> from the date of expiry. If you don't renew within <strong>30 days of expiry</strong>, the license is permanently terminated and you must apply for a fresh one.
        </p>
      </details>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Contact: Your trusted partner for DGFT, Customs, and
              Logistics compliance.
            </p>

            <div className="flex gap-4">
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Linkedin size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Twitter size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Central FSSAI License
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  FICS Clearance
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Labeling Consultancy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Annual Returns
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Product Categorization
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  NABL Lab List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Import Regulations
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-500" />
                +917400096950
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-brand-500" />
                clouddesk@eximinq.in
              </li>

              <li className="flex gap-3 items-center">
                <MapPin size={18} className="text-brand-500" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-slate-500">
          © 2025 EXIMINQ CloudDesk. All Rights Reserved. Not affiliated with
          DGFT.
        </div>
      </footer>
    </div>
  );
};

export default CloudDeskFSSAILicensing;
