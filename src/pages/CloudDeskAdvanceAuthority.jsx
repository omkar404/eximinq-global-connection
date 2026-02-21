import React, { useState } from "react";
import TopBar from "../components/CloudDeskAdvanceAuthority/TopBar";
import Navbar from "../components/CloudDeskAdvanceAuthority/Navbar";
import Hero from "../components/CloudDeskAdvanceAuthority/Hero";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,  
  CheckCheck,
  MapPin,
  Percent,
  Boxes,
  Clock,
  CheckCircle,
  FileText,
  FileSignature,
  Phone,
  Mail
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskAdvanceAuthority/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskAdvanceAuthority/ModalEnroll";

const CloudDeskAdvanceAuthority = () => {
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
              What is Advance Authorisation?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          {/* Text */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Advance Authorisation (AA) Scheme</strong> allows
              duty-free import of inputs (raw materials), which are physically
              incorporated in the export product. In addition to raw materials,
              fuel, oil, catalysts, and packaging materials required for
              production can also be allowed duty-free.
            </p>
            <p className="mb-4">
              The scheme operates on the principle that taxes/duties should not
              be exported. By waiving{" "}
              <strong>
                Basic Customs Duty (BCD), Social Welfare Surcharge (SWS), and
                IGST
              </strong>
              , the scheme makes Indian products competitive globally. However,
              it comes with an
              <strong> Export Obligation (EO)</strong> to export finished goods
              of a specified value and quantity.
            </p>
          </div>

          {/* Icon Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            {/* Card 1 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Percent className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Zero Duty</h3>
              <p className="text-sm text-slate-500">
                Complete waiver of BCD + SWS + IGST on eligible inputs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Boxes className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Physical Exports</h3>
              <p className="text-sm text-slate-500">
                Applicable for manufacturer exporters or merchant exporters tied
                to a supporting manufacturer.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Clock className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">18 Months Validity</h3>
              <p className="text-sm text-slate-500">
                Standard period to fulfill the export obligation from the date
                of license issuance.
              </p>
            </div>
          </div>
        </div>
      </section>

    <section id="norms" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Technical Core
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Norm Fixation (SION)
          </h2>
          <p className="text-slate-500 mt-2">
            Determining how much input is allowed for your export output.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE BLOCKS */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-500 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Standard Input Output Norms (SION)
              </h3>
              <p className="text-slate-600 text-sm">
                Pre-defined norms by DGFT. If your product falls under SION, the license is issued instantly based on these ratios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent-500 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Ad-hoc Norms (Self Ratification)
              </h3>
              <p className="text-slate-600 text-sm">
                If SION doesn't exist, we apply for Ad-hoc norms. We prepare technical data for consumption, wastage, and yield for Norms Committee approval.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Self Declaration (Advance Release)
              </h3>
              <p className="text-slate-600 text-sm">
                Get immediate license based on self-declaration while norms are being ratified — essential for urgent shipments.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative">
            <div className="bg-brand-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Why is Norm Fixation Critical?
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-accent-400 mt-1" />
                  <span>
                    <strong>Wastage Limits:</strong> Incorrect wastage claims can result in heavy penalties during audits.
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-accent-400 mt-1" />
                  <span>
                    <strong>Input Description:</strong> License description must match the Bill of Entry exactly to avoid customs objections.
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-accent-400 mt-1" />
                  <span>
                    <strong>Value Addition:</strong> Minimum 15% value addition required. We calculate this precisely to ensure eligibility.
                  </span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="bg-white text-brand-900 font-bold py-3 px-6 rounded hover:bg-slate-100 transition"
                >
                  Consult an Expert
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>


      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Lifecycle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              From Application to Closure
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
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-sm text-slate-500">
                File online application on DGFT portal with valid RCMC and DSC.
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
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-sm text-slate-500">
                Register the license at the Port of Registration (Customs).
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
              <h3 className="text-lg font-bold mb-2">Import</h3>
              <p className="text-sm text-slate-500">
                Import inputs duty-free. Goods must be used in manufacturing.
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
              <h3 className="text-lg font-bold mb-2">Export</h3>
              <p className="text-sm text-slate-500">
                Fulfill Export Obligation within 18 months. Mention License No
                on Shipping Bills.
              </p>
            </div>

            {/* Step 5 (with icon) */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
            text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <CheckCheck size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Redemption</h3>
              <p className="text-sm text-slate-500">
                Submit documents to DGFT to obtain EODC and close the file.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="redemption" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
                Critical Compliance
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Redemption (EODC) Services
              </h2>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Getting the license is easy; closing it is the hard part.
                Failure to submit proof of export results in heavy penalties and
                demand notices from Customs. We specialize in the{" "}
                <strong>Redemption</strong> process to get your{" "}
                <strong>Export Obligation Discharge Certificate (EODC)</strong>.
              </p>

              {/* Checklist Box */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-bold text-brand-900 mb-4">
                  Our Closure Checklist:
                </h4>

                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    Consolidation of Shipping Bills & e-BRCs.
                  </li>

                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    Mapping of Import Bill of Entry vs Export.
                  </li>

                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    ANF-4F Application Filing.
                  </li>

                  <li className="flex items-center gap-3">
                    <FileText size={18} className="text-green-500" />
                    Bond Cancellation at Customs.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE BOX */}
            <div
              className="relative h-80 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 
          flex items-center justify-center flex-col p-8 text-center text-white"
            >
              <FileSignature size={64} className="text-accent-400 mb-4" />

              <h3 className="text-2xl font-bold">Pending EODC?</h3>

              <p className="text-slate-300 mt-2">
                Don&apos;t let open licenses block your future benefits. We
                clear backlogs.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-block border border-white px-6 py-2 rounded 
              hover:bg-white hover:text-slate-900 transition"
              >
                Get Help Now
              </a>
            </div>
          </div>
        </div>
      </section>

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">An AA license is a legal contract with the government. If you don't fulfill the 'Export Obligation,' the penalties are crushing. CloudDesk acts as your Compliance Shield.</h2>
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
                        <h4 className="font-bold text-slate-900 mb-2">1. SION & Ad-hoc Norms Optimization</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Customs allows you to import based on <strong>SION (Standard Input-Output Norms). </strong>
                          But what if your product is new?<strong> CloudDesk</strong> specializes in Fixation of Ad-hoc Norms with the Norms Committee at <strong>DGFT,</strong> ensuring you get the maximum import entitlement for your specific manufacturing process.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. The "Pre-Import" Condition Management</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          In 2026, the <strong>"Pre-import" rule for IGST </strong>exemption is a minefield. 
                          <strong>CloudDesk </strong>ensures your import and export timelines are perfectly synced so you don't get hit with retrospective 
                          <strong>IGST </strong>demands and interest years later.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Real-Time "Obligation" Tracker</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         The biggest failure in AA is missing the<strong> Export Obligation (EO)</strong> deadline. <strong>CloudDesk </strong>provides a Live Consumption Ledger.
                         We track every gram of raw material imported against every unit exported, alerting you<strong> 6 months </strong>before the deadline if your EO is lagging.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. End-to-End Redemption (EODC)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Getting the<strong> license is only 10% </strong>of the work. The real battle is getting the <strong>Export Obligation Discharge Certificate (EODC).</strong>
                          We manage the entire redemption process—linking<strong> Shipping Bills to Bills </strong>of Entry—to ensure your bond is cancelled and your bank guarantee is released.
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
                Who can apply for Advance Authorisation?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Manufacturer exporters or merchant exporters tied up with supporting manufacturers. You must have a minimum 15% Value Addition (positive value addition for certain sectors like electronics).
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What can I import under this scheme?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Raw materials, components, catalysts, consumables, and packing materials physically incorporated in the export product. You cannot import capital goods (machinery) under this—that requires an EPCG license.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is "Advance Authorisation for Annual Requirement"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                If you have been exporting for the last two financial years, you can get a single license for your entire year's import needs based on your past performance, rather than applying for a new license for every order.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How much time do I have to export the finished goods?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               The standard period is 18 months from the date of issue of the license. For defense, software, or specialized projects, this can be longer.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What happens if I fail to export?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               This is the brutal part. You must pay all the exempted Customs duties plus 15% interest from the date of import. CloudDesk’s primary job is to ensure you never fall into this trap.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I sell the imported raw materials in the domestic market?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Absolutely not. Materials imported under AA are subject to "Actual User Condition." They cannot be transferred or sold even after the export obligation is completed (though the finished goods can be sold domestically after EO is met).
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What is a "Consumption Register" (Appendix-4H)?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               It is a mandatory logbook showing exactly how much raw material was used for each export batch. In 2026, DGFT audits these digitally. CloudDesk’s Auto-Ledger generates this report for you with one click.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I use Advance Authorisation and Duty Drawback together?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              No. Since you didn't pay duty on imports, you can't claim a "Drawback" of that duty. However, you can claim the "Customs portion" of drawback if you used some domestic duty-paid inputs. CloudDesk calculates the most profitable path for you.
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
                  Advance Authorisation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scrips
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Star Export House
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
                  SION Norms List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Public Notices
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Customs Notifications
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  FTP 2023
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

export default CloudDeskAdvanceAuthority;
