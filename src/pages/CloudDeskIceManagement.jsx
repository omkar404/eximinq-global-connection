import { useState } from "react";
import TopBar from "../components/IECManagement/TopBar";
import Navbar from "../components/IECManagement/Navbar";
import Hero from "../components/IECManagement/Hero";
import Fees from "../components/IECManagement/Fees";
import {
  Check,
  User,
  Handshake,
  Building,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ShieldUser,
  Landmark,
  HandHeart,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { MainNavbar } from "../components/IECManagement/MainNavbar";
import { ModalEnroll } from "../components/IECManagement/ModalEnroll";

const IECManagement = () => {
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
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: null })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      {/* What is IEC */}
      <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-12">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">
              What is the Import Export Code (IEC)?
            </h1>
            <div class="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div class="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p class="mb-4">
              An <strong>Import-Export Code (IEC)</strong> is a key business
              identification number which is compulsory for exports from India
              or Imports to India. It is a unique 10-digit code assigned to an
              individual or company by the{" "}
              <strong>DGFT (Director General of Foreign Trade)</strong>,
              Ministry of Commerce and Industries, Government of India.
            </p>
            <p class="mb-4">
              Unless specifically exempted, no person can make any import or
              export without obtaining an IEC. Unlike other government licenses,
              the IEC generally does not need to be renewed, but its details
              must be updated annually on the DGFT portal to keep the code
              active.
            </p>

            <div class="bg-brand-50 border-l-4 border-brand-500 p-6 mt-8 rounded-r-lg">
              <h3 class="font-bold text-brand-900 text-lg mb-2">
                Key Highlights
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 mr-2 mt-0.5" />
                  Valid for Lifetime
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 mr-2 mt-0.5" /> No
                  Renewal Fees
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 mr-2 mt-0.5" /> PAN
                  Based Registration
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 mr-2 mt-0.5" />{" "}
                  Required for AD Code
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" class="py-20 bg-slate-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <span class="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Checklist
            </span>
            <h2 class="text-3xl font-bold text-slate-900 mt-2">
              Documents Required by Entity Type
            </h2>
            <p class="text-slate-500 mt-2">
              Select your business type to see specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Proprietorship */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="bg-brand-100 p-4 border-b border-brand-200">
                <h3 className="font-bold text-brand-900 text-center">
                  <User className="mx-auto mb-1 text-brand-900" size={32} />
                  Proprietorship
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Digital Photograph (3x3cm)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Copy of PAN Card (Proprietor)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Aadhaar Card / Voter ID / Passport
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Cancelled Cheque (Individual/Firm Name)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Rent Agreement / Electricity Bill / Sale Deed (Address
                    Proof)
                  </li>
                </ul>
              </div>
            </div>

            {/* Partnership / LLP */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="bg-brand-100 p-4 border-b border-brand-200">
                <h3 className="font-bold text-brand-900 text-center">
                  <Handshake
                    className="mx-auto mb-1 text-brand-900"
                    size={32}
                  />
                  Partnership / LLP
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Digital Photograph of Managing Partner
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Copy of Firm's PAN Card
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Partnership Deed / LLP Agreement
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Aadhaar/Passport of all Partners
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Cancelled Cheque (Firm Name)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Address Proof of Registered Office
                  </li>
                </ul>
              </div>
            </div>

            {/* Pvt Ltd / Public Ltd */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="bg-brand-100 p-4 border-b border-brand-200">
                <h3 className="font-bold text-brand-900 text-center">
                  <Building className="mx-auto mb-1 text-brand-900" size={32} />
                  Private Limited
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Digital Photograph of Director
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Company PAN Card Copy
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Certificate of Incorporation (COI)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    MOA & AOA (if required)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Aadhaar/Passport of Directors
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-500 mt-1" size={18} />
                    Digital Signature Certificate (DSC)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-8 text-center bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800">
            <i class="fas fa-info-circle mr-2"></i>{" "}
            <strong>Note on Bank Proof:</strong> The Cancelled Cheque or Bank
            Certificate must clearly show the Account Holder Name, Account
            Number, and IFSC Code.
          </div>
        </div>
      </section>

      {/* Mandatory Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 border-l-8 border-red-500 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* LEFT ICON */}
              <div className="flex-shrink-0 text-red-500">
                <AlertTriangle size={56} strokeWidth={1.5} />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-2">
                  Mandatory Annual Update (April - June)
                </h3>

                <p className="text-slate-700 mb-4">
                  As per DGFT Notification No. 58/2015-2020, all IEC holders
                  must ensure that details in their IEC is updated
                  electronically every year during the{" "}
                  <strong>April to June</strong> period.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2 items-center text-sm font-semibold text-red-800">
                    <XCircle className="text-red-600" size={18} />
                    Failure to update will result in IEC De-activation.
                  </li>

                  <li className="flex gap-2 items-center text-sm font-semibold text-red-800">
                    <XCircle className="text-red-600" size={18} />
                    De-activated IECs cannot be used for import/export
                    clearance.
                  </li>

                  <li className="flex gap-2 items-center text-sm font-semibold text-green-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Even if there are no changes, you must simply confirm the
                    details online.
                  </li>
                </ul>

                <a
                  href="#contact"
                  className="inline-block bg-red-600 text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition"
                >
                  File Annual Update Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemptions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Who is Exempted from IEC?
          </h2>

          <div className="bg-white rounded-xl shadow p-8">
            <p className="mb-6 text-slate-600 text-center">
              While most importers and exporters require an IEC, the following
              categories are exempted:
            </p>

            <div className="space-y-4">
              {/* Personal Use */}
              <div className="flex gap-4 items-start">
                <div className="bg-brand-100 p-2 rounded text-brand-600">
                  <ShieldUser size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Personal Use</h4>
                  <p className="text-sm text-slate-600">
                    Persons importing or exporting goods for personal use not
                    connected with trade or manufacture or agriculture.
                  </p>
                </div>
              </div>

              {/* Government Ministries */}
              <div className="flex gap-4 items-start">
                <div className="bg-brand-100 p-2 rounded text-brand-600">
                  <Landmark size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    Government Ministries
                  </h4>
                  <p className="text-sm text-slate-600">
                    Ministries/Departments of Central or State Government.
                  </p>
                </div>
              </div>

              {/* Charitable Institutions */}
              <div className="flex gap-4 items-start">
                <div className="bg-brand-100 p-2 rounded text-brand-600">
                  <HandHeart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    Charitable Institutions
                  </h4>
                  <p className="text-sm text-slate-600">
                    Persons importing/exporting goods from/to Nepal, Myanmar
                    through Indo-Myanmar border areas and China (through Gunji,
                    Namgaya Shipkila and Nathula ports) provided CIF value of a
                    single consignment does not exceed ₹25,000.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Simple Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Process for IEC Registration
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-slate-800"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-sm text-slate-400">
                Create profile on DGFT portal with valid email and mobile.
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
              <h3 className="text-lg font-bold mb-2">Documents</h3>
              <p className="text-sm text-slate-400">
                Prepare and upload scanned copies of required proofs.
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
              <h3 className="text-lg font-bold mb-2">Apply (ANF 2A)</h3>
              <p className="text-sm text-slate-400">
                Fill the online application form (ANF 2A) & pay fees.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-slate-800"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Verification</h3>
              <p className="text-sm text-slate-400">
                DGFT verifies your details and documents electronically.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center
                            text-2xl font-bold text-white mx-auto mb-4 border-4 border-slate-800"
              >
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold mb-2">Issuance</h3>
              <p className="text-sm text-slate-400">
                Get your e-IEC certificate generated instantly upon approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees setShowEnrollModal={setShowEnrollModal} />

      {/* <!-- Is IEC Sufficient Section --> */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-4xl">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">
            Is IEC Sufficient for Exporting?
          </h2>
          <p class="text-slate-600 mb-4">
            While IEC is the primary requirement, it may not be sufficient for
            all types of exports. Depending on your product, you may need
            registration with various Export Promotion Councils (EPCs) or
            Commodity Boards.
          </p>
          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="bg-slate-50 p-4 rounded border border-slate-200">
              <strong class="block text-brand-900 mb-1">
                RCMC Registration
              </strong>
              <p class="text-sm text-slate-600">
                Required for APEDA, Spices Board, Coffee Board, Tea Board, etc.
                to claim incentives.
              </p>
            </div>
            <div class="bg-slate-50 p-4 rounded border border-slate-200">
              <strong class="block text-brand-900 mb-1">
                AD Code Registration
              </strong>
              <p class="text-sm text-slate-600">
                Essential for custom port approval and foreign transactions at
                the bank level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for IEC Management?</h2>
            <p className="text-slate-500">Eliminate compliance risks with automated DGFT & Customs monitoring.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">1. Elimination of "The July Surprise"</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every year on July 1st, thousands of exporters realize their <strong>IEC is deactivated</strong> because they missed the June 30th update deadline.
                  <strong>CloudDesk</strong> eliminates this. Our system syncs with the DGFT server API to monitor your "Last Updated" timestamp. We start automated reminders
                  on April 1st and can auto-file your "No-Change" confirmation in seconds.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">2. Cross-Platform Data Harmony</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Customs (ICEGATE)</strong> and <strong>DGFT</strong> are two different systems. Often, an update on DGFT doesn't "push" to ICEGATE, causing a "PAN Not Found" error at the port. CloudDesk’s Technical Bridge verifies that your update has successfully transitioned to the Customs server before you ship your next container.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                <Building size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">3. Entity-Level Document Hierarchy</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you have <strong>multiple branches</strong>, keeping track of which address proof is linked to which branch in the DGFT records is a nightmare.
                  CloudDesk organizes your IEC data by Branch Code, allowing you to update specific locations without messing up the primary registration.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                <ShieldUser size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">4. Security & Permission Control</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Stop giving your master <strong>DGFT password</strong> to every junior accountant or external consultant.
                  CloudDesk allows you to manage your compliance without sharing sensitive login credentials,
                  protecting your business from unauthorized changes or data theft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is IEC Registration valid for a lifetime?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, IEC is valid for a lifetime and does not require renewal.
                However, annual updation of details on the DGFT portal is
                mandatory between April and June every year.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can an individual apply for IEC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, individuals (Proprietors) can obtain an IEC code in their
                name or their firm's name. It is equally applicable to
                companies, LLPs, and partnerships.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does it take to get the certificate?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Generally, the IEC code is generated within 1 to 3 working days
                after the successful submission of documents and fees. In many
                cases, it is issued instantly.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is digital signature (DSC) mandatory?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                For companies and LLPs, a Digital Signature Certificate (DSC) is
                mandatory. For proprietorships, the application can often be
                validated using Aadhaar e-sign.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group ">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is IEC Registration valid for a lifetime?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, IEC is valid for a lifetime and does not require renewal.
                However, annual updation of details on the DGFT portal is
                mandatory between April and June every year.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can an individual apply for IEC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, individuals (Proprietors) can obtain an IEC code in their
                name or their firm's name. It is equally applicable to
                companies, LLPs, and partnerships.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does it take to get the certificate?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Generally, the IEC code is generated within 1 to 3 working days
                after the successful submission of documents and fees. In many
                cases, it is issued instantly.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is digital signature (DSC) mandatory?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                For companies and LLPs, a Digital Signature Certificate (DSC) is
                mandatory. For proprietorships, the application can often be
                validated using Aadhaar e-sign.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                I have made no changes to my company this year. Do I still need
                to update my IEC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. The DGFT regulation states that even if there are no
                changes, the IEC holder must "confirm" that the details are
                correct on the portal every year between April and June. Think
                of it as a mandatory annual "Check-in."
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the exact "effective date" for deactivation if I miss
                the deadline?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Usually, the DGFT issues a public notice extending it slightly,
                but legally, deactivation begins on July 1st. Once deactivated,
                you cannot even generate a draft Shipping Bill.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                My IEC is linked to an old Director's mobile number/email. How do I recover it?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                This is a high-risk situation. CloudDesk assists in the "Email/Mobile Change"
                process, which involves validating the new signatory via a Class 3 DSC and updating
                the profile. We ensure you don't lose access to your digital trade identity.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I have two IECs for the same PAN?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Strictly No. One PAN, One IEC. If you have inadvertently obtained two,
                you must surrender one immediately. Holding dual IECs is a violation of the
                Foreign Trade Policy and can lead to your PAN being blacklisted.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                We are changing our firm from a Proprietorship to a Private Limited. Can we keep the same IEC?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, but it requires a "Constitution Change" modification. You must update the PAN associated with the IEC.
                This is a complex process because it involves migrating your history and benefits to the new entity.
                CloudDesk handles the legal drafting for this transition.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does my Bank need to do anything once my IEC is updated?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                In most cases, the bank's system (AD Bank) should automatically pick up the update via the EDPMS (Export Data Processing and Monitoring System).
                However, we recommend sending the updated IEC profile to your bank's Forex department to ensure there are no delays in realizing export proceeds.
              </p>
            </details>

            <details className="bg-white p-6 rounded shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                The DGFT portal says "Data Mismatch with PAN." What do I do?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                This happens when the name on your PAN card (even a single dot or space) doesn't exactly
                match the name entered in the DGFT system. CloudDesk performs a Character-by-Character Audit to fix
                these discrepancies so your application gets approved instantly.
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
              <a
                href="https://in.linkedin.com/in/eximinq-cloud-desk?trk=profile-badge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Eximinq Contact on LinkedIn"
                className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition"
              >
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

export default IECManagement;
