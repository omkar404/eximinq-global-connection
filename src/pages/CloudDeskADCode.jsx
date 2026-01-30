import React, { useState } from "react";
import TopBar from "../components/ADCode/TopBar";
import Navbar from "../components/ADCode/Navbar";
import Hero from "../components/ADCode/Hero";
import Fees from "../components/ADCode/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  FileOutput,
  HandCoins,
  RefreshCcw,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { MainNavbar } from "../components/ADCode/MainNavbar";
import { ModalEnroll } from "../components/ADCode/ModalEnroll";
const ADCode = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: "",
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is an AD Code?
            </h2>

            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          {/* Content */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              An <strong>Authorized Dealer (AD) Code</strong> is a 14-digit
              numerical code issued by the bank where you maintain your business
              current account. It acts as a bridge between the Customs
              Department and your bank.
            </p>

            <p className="mb-4">
              To export goods from India, you must register this code at every
              port (Air, Sea, or ICD) where you intend to file your shipping
              documents. Without this registration, the{" "}
              <strong>Electronic Data Interchange (EDI)</strong> system will not
              allow the generation of the Shipping Bill.
            </p>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
              <h3 className="font-bold text-blue-900 text-lg mb-2">
                Did You Know?
              </h3>
              <p className="text-sm">
                AD Code registration is <strong>port-specific</strong>. If you
                register at Mumbai Port, it does <em>not</em> automatically
                register you at Delhi Airport — you must file a separate online
                application for each port.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Importance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Why is Registration Mandatory?
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                <FileOutput size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Shipping Bill Generation
              </h3>
              <p className="text-slate-600 text-sm">
                The Shipping Bill number is the primary document for exports.
                Customs EDI system blocks generation if the AD Code is not
                mapped to your IEC.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                <HandCoins size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Government Incentives
              </h3>
              <p className="text-slate-600 text-sm">
                Benefits like <strong>Duty Drawback (DBK)</strong> and{" "}
                <strong>RoDTEP</strong> are credited directly to your bank
                through PFMS, which relies on AD Code validation.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                <RefreshCcw size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                IGST Refund
              </h3>
              <p className="text-slate-600 text-sm">
                If IGST is paid on exports, refund processing happens only when
                the AD Code and Bank Account are correctly registered and
                validated in the Customs system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Documents for AD Code
              </h2>

              <p className="text-slate-600 mb-8">
                The most critical document is the{" "}
                <strong>Bank Authorization Letter</strong>. It must be in the
                exact format prescribed by the Customs Public Notice.
              </p>

              <ul className="space-y-4">
                {/* Item 1 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <div>
                    <strong className="block text-slate-800">
                      AD Code Letter from Bank
                    </strong>
                    <span className="text-sm text-slate-500">
                      Original letter on Bank letterhead, signed by Branch
                      Manager, mentioning the 14-digit AD code and Port Name.
                    </span>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <div>
                    <strong className="block text-slate-800">
                      Cancelled Cheque
                    </strong>
                    <span className="text-sm text-slate-500">
                      Must show Account Name, Number & IFSC.
                    </span>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <div>
                    <strong className="block text-slate-800">
                      IEC & PAN Copy
                    </strong>
                    <span className="text-sm text-slate-500">
                      Self-attested copies of Import Export Code and Company
                      PAN.
                    </span>
                  </div>
                </li>

                {/* Item 4 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <div>
                    <strong className="block text-slate-800">
                      GST Registration
                    </strong>
                    <span className="text-sm text-slate-500">
                      Copy of GST Certificate.
                    </span>
                  </div>
                </li>

                {/* Item 5 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <div>
                    <strong className="block text-slate-800">
                      Class 3 DSC
                    </strong>
                    <span className="text-sm text-slate-500">
                      Digital Signature required for uploading documents on
                      e-Sanchit.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="bg-white p-6 shadow-md rounded">
                <h4 className="font-bold text-brand-900 border-b pb-2 mb-4">
                  Bank Letter Format Checklist
                </h4>

                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-brand-500" size={14} />
                    Is it on Bank Letterhead?
                  </li>

                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-brand-500" size={14} />
                    Is the 14-digit AD Code mentioned?
                  </li>

                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-brand-500" size={14} />
                    Is the IFSC Code correct?
                  </li>

                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-brand-500" size={14} />
                    Is the Port Name (e.g., Nhava Sheva) mentioned?
                  </li>

                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-brand-500" size={14} />
                    Is the applicant’s photo attested by the Bank?
                  </li>

                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-brand-500" size={14} />
                    Is the Branch Manager's stamp & signature present?
                  </li>
                </ul>

                {/* Footer CTA */}
                <div className="mt-4 pt-4 border-t text-center">
                  <p className="text-xs text-red-500 font-bold mb-2">
                    Incorrect format leads to REJECTION.
                  </p>

                  <button className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2 px-4 rounded transition">
                    Download Correct Format
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Step-by-Step
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Registration Workflow
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="relative grid md:grid-cols-5 gap-12 step-connector">
            {/* STEP 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 
                border-4 border-accent-500"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Bank Letter</h3>
              <p className="text-sm text-slate-300">
                Obtain the letter from your bank in the prescribed format.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 
                border-4 border-accent-500"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">ICEGATE</h3>
              <p className="text-sm text-slate-300">
                Login to ICEGATE portal. If not registered, create ID first.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 
                border-4 border-accent-500"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">e-Sanchit</h3>
              <p className="text-sm text-slate-300">
                Upload digitally signed documents to generate IRN / DRN.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 
                border-4 border-accent-500"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Submission</h3>
              <p className="text-sm text-slate-300">
                Submit the AD Code request to the specific Custom Port online.
              </p>
            </div>

            {/* STEP 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-2xl font-bold text-white mx-auto mb-4 
                border-4 border-white"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Approval</h3>
              <p className="text-sm text-slate-300">
                Customs officer verifies and approves via system (2–4 days).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
     <Fees setShowEnrollModal={setShowEnrollModal} />

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
                Is physical submission of documents required?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Generally, no. The process is now 100% online via ICEGATE.
                However, in rare cases or specific ports, the Customs Officer
                may request physical verification of the original Bank Letter.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I change my registered bank account?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, you can modify your AD Code. You will need to obtain a new
                letter from the new bank and follow the same modification
                process on ICEGATE online.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does approval take?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Once the application is submitted successfully online, it
                usually takes 3–5 working days for Customs to approve, provided
                there are no queries or document discrepancies.
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
                  AD Code Registration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  ICEGATE ID Creation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  IFSC Update
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  IGST Refund Help
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
                  Nhava Sheva (JNPT)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Mundra Port
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Chennai Sea/Air
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Delhi Air Cargo
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

export default ADCode;
