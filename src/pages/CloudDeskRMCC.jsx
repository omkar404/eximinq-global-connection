import { useState } from "react";
// import TopBar from "../components/CloudDeskRMCC/TopBar";
import Navbar from "../components/CloudDeskRMCC/Navbar";
import Hero from "../components/CloudDeskRMCC/Hero";
import Fees from "../components/CloudDeskRMCC/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser, 
  Phone,
  Mail,
  MapPin,
  Tag,
  Barcode,
  FileSpreadsheet,
  ShieldAlert,
  Terminal,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskRMCC/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskRMCC/ModalEnroll";
import { FaRegistered } from "react-icons/fa";

const CloudDeskRMCC = () => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      {/* <TopBar /> */}
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

    <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What is an RMCC Alert?</h2>
                <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    The <strong>Risk Management Cell (RMC)</strong> of Indian Customs operates the Risk Management System (RMS). The RMS evaluates every single Bill of Entry (BOE) and Shipping Bill (SB) based on data, intelligence, and compliance history.
                </p>
                [Image of Customs Risk Management System Flow]
                <p className="mb-4">
                    An "RMCC Alert" means the system has flagged your consignment for heightened scrutiny. This could result in physical examination (X-ray, container opening), document call-up, or a valuation/classification hold. Addressing these holds quickly is paramount to prevent crippling <strong>Demurrage and Detention charges</strong>.
                </p>
            </div>
        </div>
    </section>


        <section id="reasons" className="py-20 bg-alert-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-alert-600 font-bold uppercase tracking-wider text-sm">
            Diagnosis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Common Causes of Cargo Hold
          </h2>
          <p className="text-slate-500 mt-2">
            Alerts are rarely random. They stem from technical or compliance
            issues.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Reason 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-600 hover:shadow-xl transition">
            <Tag size={32} className="text-red-600 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Valuation Dispute
            </h3>
            <p className="text-sm text-slate-600">
              Cargo value is significantly lower than the DVA (Data Verification
              Analysis) database value for similar goods.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-600 hover:shadow-xl transition">
            <Barcode size={32} className="text-brand-600 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Classification Mismatch
            </h3>
            <p className="text-sm text-slate-600">
              Customs suspects misdeclaration of HS Code to claim lower duty or
              an ineligible exemption (Drawback / RoDTEP).
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500 hover:shadow-xl transition">
            <FileSpreadsheet size={32} className="text-orange-500 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Technical Document Error
            </h3>
            <p className="text-sm text-slate-600">
              Incorrect IIN, DPD code, or unmapped AD Code. Missing or failed
              e-Sanchit uploads.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-black hover:shadow-xl transition">
            <ShieldAlert size={32} className="text-black-800 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Intelligence / DRI Flag
            </h3>
            <p className="text-sm text-slate-600">
              Importer/exporter has prior violations or cargo matches a
              high-risk intelligence alert.
            </p>
          </div>
        </div>
      </div>
    </section>

        <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Resolution Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Our Two-Pronged Approach
          </h2>
          <p className="text-slate-500 mt-2">
            Solving the system error and the officer query simultaneously.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Prong 1 */}
          <div className="p-8 border rounded-xl shadow-lg border-l-4 border-blue-600 bg-slate-50">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
              <Terminal size={28} />
              Technical Resolution
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                File BOE / SB amendments (as needed).
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                Re-upload documents to e-Sanchit with correct IRN.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                Resolve AD Code / GSTIN mapping issues on ICEGATE.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                Manual intervention request for system glitches.
              </li>
            </ul>
          </div>

          {/* Prong 2 */}
          <div className="p-8 border rounded-xl shadow-lg border-l-4 border-legal-800 bg-slate-50">
            <h3 className="text-2xl font-bold text-legal-800 mb-4 flex items-center gap-3">
              <UserCheck size={28} />
              Officer Liaison & Legal Reply
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                Drafting replies to Valuation / Classification queries.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                Representation before the Assessment Group.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                Managing physical examination (if ordered).
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                Liaison for Order-In-Original (OIO) if SCN is issued.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Fees/>

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Rmcc-Alert-Removal?</h2>
                    <p className="text-slate-500">
                      Most consultants just wait for the system to clear. CloudDesk aggressively targets the source of the alert.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. The "Alert-Source" Diagnostic</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          An alert can come from various wings: <strong>SIIB (Special Intelligence & Investigation Branch),</strong> <strong>DRI (Directorate of Revenue Intelligence), </strong>or the Valuation Cell. 
                          <strong>CloudDesk</strong> identifies exactly which agency placed the alert so we don't waste time talking to the wrong department.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Evidence-Backed Representation</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Alerts are often triggered by <strong>"Data Outliers"</strong>—like a sudden spike in import value or a mismatch in HSN.
                          We prepare a Comprehensive Technical Rebuttal, backed by <strong>CA-certified financial</strong> statements and manufacturer price lists, to prove your transaction is legitimate.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Direct Nodal Liaison</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Removing an RMCC alert requires interacting with the <strong>Risk Management Division (RMD)</strong> in Mumbai or the local Commissionerate. <strong>CloudDesk’s</strong> legal team handles the physical and digital representation, ensuring your file doesn't sit on a desk for months.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Future-Proofing (RMS Optimization)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Once an alert is removed, you remain<strong> "High Risk" </strong>in the system for 6–12 months.<strong> CloudDesk implements</strong> a Compliance Recovery Plan, ensuring your next 5 shipments are 100% error-free to restore your<strong> "Green Channel" </strong>status with the AI-driven <strong>Risk Management System (RMS).</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How do I know if I have an RMCC Alert on my IEC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                You will notice it when your Bill of Entry/Shipping Bill status on ICEGATE says "Referral to RMS" and subsequently mandates "100% Examination." In severe cases, you will see an "Alert Flag" on the ICEGATE dashboard preventing any filing.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Why did the RMCC place an alert on my business?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Common triggers in 2026 include: (1) Undervaluation of goods compared to the NIDB (National Import Database) average, (2) Mis-declaration of HSN codes to bypass restrictions, (3) Linkage with a blacklisted supplier/buyer, or (4) Outstanding "Show Cause Notices" (SCN) that were ignored.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can an alert be placed automatically by the system?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. The Customs RMS uses AI to spot patterns. If your business profile suddenly changes (e.g., a leather exporter suddenly starts importing high-end electronics), the system flags it for "Profile Divergence."
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does it take to remove an RMCC alert?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               A standard alert based on data clarification takes 7 to 15 working days. However, if the alert is from the DRI or involves an investigation into fraud, it can take several months. CloudDesk focuses on "Administrative Alerts" that can be resolved via documentation.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What documents are required for alert removal?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              It depends on the trigger, but usually: (1) Proof of transaction value (Bank Swift/LC), (2) Manufacturer’s Invoice and Price List, (3) Last 3 years' ITR and Audit Reports, and (4) A formal undertaking of future compliance.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does removing the alert clear my past mistakes? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               No. Removing the alert allows you to resume trade. Any past duty short-payments or penalties discovered during the alert period must still be settled.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I still clear my goods while the alert is active?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes, but expect extreme delays. Every single box will be opened, and every document scrutinized. This usually leads to heavy Demurrage and Detention charges. CloudDesk’s goal is to remove the alert to stop these daily losses.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Will an RMCC alert affect my AEO status?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Yes. An active alert is a "Fatal Error" for AEO certification. If you are an AEO holder, your status will be suspended immediately until the alert is cleared.
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
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Customs Adjudication</a></li>
                    <li><a href="#" class="hover:text-white transition">Bill of Entry Filing</a></li>
                    <li><a href="#" class="hover:text-white transition">AEO Certification</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Valuation</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">RMS Guidelines</a></li>
                    <li><a href="#" class="hover:text-white transition">Demurrage Rules</a></li>
                    <li><a href="#" class="hover:text-white transition">Valuation Rules 2007</a></li>
                    <li><a href="#" class="hover:text-white transition">CESTAT Orders</a></li>
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

export default CloudDeskRMCC;