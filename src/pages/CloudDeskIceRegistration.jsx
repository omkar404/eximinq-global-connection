import React, { useState } from "react";
import TopBar from "../components/IECRegistration/TopBar";
import Navbar from "../components/IECRegistration/Navbar";
import Hero from "../components/IECRegistration/Hero";
import Fees from "../components/IECRegistration/Fees";
import { ModalEnroll } from "../components/IECRegistration/ModalEnroll";
import {
  FileText,
  KeyRound,
  IndianRupee,
  CheckCircle2,
  AlertTriangle,
  CheckCircle,
  Building,
  ShieldUser,
  Ship,
  PlaneTakeoff,
  Truck,
  Network,
  Info,
  heck,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { MainNavbar } from "../components/IECRegistration/MainNavbar";

const IECRegistration = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null,
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
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      {/* <TopBar /> */}
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: null })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      {/* What is ICEGATE */}
      <section id="services" className="py-20 bg-white">
        {/* HEADER */}
        <div className="container mx-auto px-4 text-center max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What is ICEGATE?
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded mb-6"></div>

          <p className="text-slate-600 leading-relaxed text-lg">
            <strong>ICEGATE (Indian Customs Electronic Gateway)</strong> is the
            national portal of Indian Customs (CBIC) that provides e-filing
            services to Trade, Cargo Carriers, and other Trading Partners
            electronically. It is the interface between the trade users and the
            Customs department for filing Bill of Entry, Shipping Bills, and
            other documents.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition group">
            <div
              className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center 
                          text-brand-600 text-2xl mb-6 group-hover:bg-brand-600 group-hover:text-white transition"
            >
              <FileText size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Document Filing
            </h3>
            <p className="text-slate-600 text-sm">
              File Bill of Entry (Import) and Shipping Bills (Export)
              electronically. Track live clearance status directly from ICEGATE.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition group">
            <div
              className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center 
                          text-brand-600 text-2xl mb-6 group-hover:bg-brand-600 group-hover:text-white transition"
            >
              <KeyRound size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">e-Sanchit</h3>
            <p className="text-slate-600 text-sm">
              Upload invoices, packing lists, BL/AWB via e-Sanchit using digital
              signature. Eliminates physical document submission.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition group">
            <div
              className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center 
                          text-brand-600 text-2xl mb-6 group-hover:bg-brand-600 group-hover:text-white transition"
            >
              <IndianRupee size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Duty Payment
            </h3>
            <p className="text-slate-600 text-sm">
              Make Customs Duty payments instantly through the online e-Payment
              gateway. View challans, receipts, and payment status anytime.
            </p>
          </div>
        </div>
      </section>

      {/* AD Code Section */}
      <section id="ad-code" className="py-20 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CARD */}
            <div className="order-2 md:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-accent-500">
                <h3 className="text-2xl font-bold text-brand-900 mb-4">
                  Why is AD Code Mandatory?
                </h3>

                <p className="text-slate-600 mb-4">
                  An <strong>Authorized Dealer (AD) Code</strong> is a 14-digit
                  code provided by your bank. You must register this code on the
                  ICEGATE portal for every port from where you intend to export.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 mt-1" size={20} />
                    <span className="text-sm text-slate-700">
                      <strong>Export Clearance:</strong> Without AD Code
                      registration, shipping bills cannot be generated.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 mt-1" size={20} />
                    <span className="text-sm text-slate-700">
                      <strong>Government Benefits:</strong> Essential for
                      claiming DBK and IGST refunds directly into your bank.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 mt-1" size={20} />
                    <span className="text-sm text-slate-700">
                      <strong>Foreign Remittance:</strong> Ensures smooth
                      export-related inward remittance processing.
                    </span>
                  </li>
                </ul>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-block bg-brand-600 text-white font-bold py-3 px-6 rounded hover:bg-brand-700 transition"
                  >
                    Register AD Code Now
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 md:order-2">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Critical Compliance
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                AD Code Registration Services
              </h2>

              <p className="text-slate-600 mb-6">
                We specialize in registering AD Codes at all major Indian ports
                (Nhava Sheva, Mundra, Chennai, Delhi Air Cargo, etc.) completely
                online via ICEGATE.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <Ship size={38} className="text-brand-400 mx-auto mb-2" />
                  <h4 className="font-bold text-slate-800">Sea Ports</h4>
                </div>

                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <PlaneTakeoff
                    size={38}
                    className="text-brand-400 mx-auto mb-2"
                  />
                  <h4 className="font-bold text-slate-800">Air Cargo</h4>
                </div>

                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <Truck size={38} className="text-brand-400 mx-auto mb-2" />
                  <h4 className="font-bold text-slate-800">ICDs</h4>
                </div>

                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <Network size={38} className="text-brand-400 mx-auto mb-2" />
                  <h4 className="font-bold text-slate-800">SEZ</h4>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://eximinq.in/services/ad-code-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-6 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
                    Register AD Code Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-12">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Prerequisites
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Documents for ICEGATE Registration
            </h2>
          </div>

          {/* TWO-COLUMN GRID */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LEFT CARD – NEW ICEGATE ID */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-900 mb-4 border-b pb-2">
                For New ICEGATE ID
              </h3>

              <ul className="space-y-3 text-slate-600">
                {[
                  "Copy of IEC Code",
                  "Copy of GST Certificate",
                  "Copy of PAN Card (Company/Firm)",
                  "Aadhaar / Voter ID / Passport of Auth Signatory",
                  "Class 3 Digital Signature Certificate (DSC)",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <Check size={18} className="text-green-500 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CARD – AD CODE REGISTRATION */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-900 mb-4 border-b pb-2">
                For AD Code Registration
              </h3>

              <ul className="space-y-3 text-slate-600">
                {[
                  <span>
                    <strong>AD Code Letter</strong> from Bank (on Bank
                    Letterhead)
                  </span>,
                  "Cancelled Cheque",
                  "IEC Copy & PAN Copy",
                  "GST Registration Certificate",
                  "Company Registration Certificate (COI)",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <Check size={18} className="text-green-500 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* INFO BOX */}
          <div className="mt-8 text-center bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-blue-800 max-w-3xl mx-auto flex justify-center items-center gap-2">
            <Info size={18} />
            <span>
              <strong>DSC Requirement:</strong> A Class 3 DSC (encrypted +
              signing) is mandatory for registering on ICEGATE and signing
              documents for e-Sanchit.
            </span>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Registration Workflow
            </h2>
          </div>

          {/* STEPS GRID */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-slate-800"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Create ID</h3>
              <p className="text-sm text-slate-400">
                Sign up on ICEGATE portal using IEC and PAN details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-slate-800"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Link DSC</h3>
              <p className="text-sm text-slate-400">
                Install DSC utility and link Class 3 Digital Signature.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-slate-800"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Upload Docs</h3>
              <p className="text-sm text-slate-400">
                Upload AD Code letter via e-Sanchit for Customs approval.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center
                            text-2xl font-bold text-white mx-auto mb-4 border-4 border-slate-800"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Approval</h3>
              <p className="text-sm text-slate-400">
                Receive approval from Customs. Start exporting instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees setShowEnrollModal={setShowEnrollModal} />
              
              {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">ICEGATE is not just a website it’s a secure gateway that requires specific local system configurations.</h2>
                    {/* <p className="text-slate-500">"• Primary: ICEGATE 2.0 Registration, Indian Customs EDI Gateway, ICEGATE ID Creation, DSC Mapping on ICEGATE, e-Sanchit Document Upload.
                    • Long-Tail: Fix ICEGATE signer utility error 2026, mandatory documents for ICEGATE registration, how to link DSC to ICEGATE 2.0, ICEGATE 2FA setup guide, register as importer/exporter on ICEGATE."
                    </p> */}
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. The "Signer Utility" Specialist</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The most common reason <strong>ICEGATE registration </strong>fails is the <strong>Digital Signature</strong> (DSC) Utility. 
                          It requires specific versions of Java and browser permissions.<strong> CloudDesk </strong> provides a System Compatibility Check that pre-configures your computer to ensure your 
                          DSC is "seen" by the ICEGATE server on the first try.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. 2FA & Profile Security</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong>ICEGATE 2.0 </strong> has introduced Two-Factor Authentication (2FA). If you lose your linked mobile or email access, 
                          recovering an <strong>ICEGATE ID </strong>is a multi-week manual process involving the <strong>New Delhi Helpdesk.</strong> 
                          <strong>CloudDesk</strong>manages your Credential Health, ensuring your recovery paths are always active.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. e-Sanchit Optimized Uploads</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          You cannot complete your profile without uploading documents to e-Sanchit to get an 
                          <strong>IRN (Image Reference Number).</strong> <strong>CloudDesk’s</strong> engine auto-formats your PAN, GST, and Authorization letters to meet the 
                          exact 1MB, DPI, and naming conventions required by Customs, eliminating "File Corrupt" or "Format Not Supported" errors.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Transaction-Ready Setup </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Getting an ID is useless if you can't file. <strong>CloudDesk</strong> goes beyond registration to ensure your Roles and <strong>Permissions (Importer, Exporter, or both) </strong>are correctly mapped so that your <strong>ICEGATE ID</strong> is "Transaction Ready" the moment you log in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* HEADER */}
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is AD Code registration mandatory for all ports?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, if you intend to export from multiple ports (e.g., Nhava
                Sheva and Air Cargo Delhi), you must register the AD Code
                separately for each port on the ICEGATE portal.
              </p>
            </details>

              {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does ICEGATE registration expire?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                The ICEGATE ID itself does not expire, but the password expires
                every few months and must be reset. Also, the linked Digital
                Signature (DSC) has a validity (usually 2 years) and must be
                updated upon renewal.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is e-Sanchit?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                e-Sanchit is a paperless processing initiative by Indian
                Customs. It allows traders to upload all supporting documents
                (like invoices, certificates) digitally to obtain an Image
                Reference Number (IRN), which is quoted in the Bill of Entry or
                Shipping Bill.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the difference between "Simplified Registration" and "Full Registration"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                 Simplified registration is mostly for tracking and checking status. 
                 To file documents (Bill of Entry/Shipping Bill), 
                 you need a Full Registration (Partnership Registration) using a Class 3 DSC. 
                 CloudDesk only does Full Registrations to ensure you are never restricted in your trade operations.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I use one ICEGATE ID for multiple companies?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  No. An ICEGATE ID is tied to a specific PAN and IEC. Each legal entity must have its own unique ICEGATE ID. 
                  However, CloudDesk’s dashboard allows you to manage all your company IDs from a single master view.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is a Class 3 DSC mandatory for ICEGATE?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Yes. For Full Registration and for signing documents on e-Sanchit, a Class 3 Digital Signature Certificate (signing + encryption) is mandatory. 
                  Without it, you cannot clear cargo.
              </p>
            </details>
                        
            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                I am getting a "Signer Not Started" error. How do I fix it?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                   This is usually due to a Java Runtime Environment (JRE) mismatch or a blocked port on your browser. 
                   CloudDesk provides a dedicated Signer Support Tool that restarts the utility and clears the cache, fixing 99% of these errors instantly.
              </p>
            </details>
            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "IRN" and why do I need it for registration?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                   IRN stands for Image Reference Number. Every document you upload (like your Authorization Letter) must first be uploaded to the e-Sanchit module. 
                   e-Sanchit gives you an IRN for that document, which you then "link" to your registration form. 
                   Without an IRN, you cannot submit your profile.
              </p>
            </details>
            {/* FAQ 9 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does my ICEGATE ID expire?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  The ID itself doesn't expire, but the linked DSC usually has a 2-year validity. If your DSC expires, your ability to file stops. 
                  CloudDesk tracks your DSC expiry and sends alerts 30 days in advance to ensure a seamless transition to the new certificate.
              </p>
            </details>
            {/* FAQ 10 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How do I add a "Customs Port" to my existing ICEGATE ID?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              In ICEGATE 2.0, you don't necessarily "add" ports for filing, but you must register your AD Code for each specific port. 
              Your ICEGATE ID allows you to interact with all EDI ports in India by default, provided your bank details are mapped correctly.
              </p>
            </details>
            {/* FAQ 11 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What should I do if my ICEGATE account is "Locked"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Accounts usually lock after 3 failed login attempts. 
              You can use the "Forgot Password" feature, which requires your secret question or DSC authentication. 
              If both fail, CloudDesk assists in the manual reset process with the DGFT/Customs technical team.
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
              <li>
                <a href="#about" className="hover:text-white">
                  About IEC
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-white">
                  Documents
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white">
                  Process
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-white">
                  Fees
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  DGFT Consultancy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  RCMC Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AD Code Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Export Incentives
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

export default IECRegistration;
