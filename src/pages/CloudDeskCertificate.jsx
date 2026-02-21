import React, { useState } from "react";
import TopBar from "../components/CloudDeskCertificate/TopBar";
import Navbar from "../components/CloudDeskCertificate/Navbar";
import Hero from "../components/CloudDeskCertificate/Hero";
import Fees from "../components/CloudDeskCertificate/Fees";
import {
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
  Percent,
  Globe2,
  Handshake,
  CheckCircle,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCertificate/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskCertificate/ModalEnroll";

const CloudDeskCertificate = () => {
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

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is a Certificate of Origin?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              A <strong>Certificate of Origin (CoO)</strong> is an international
              trade document that certifies that goods included in a consignment
              were wholly obtained, produced, manufactured, or processed in a
              particular country (Origin).
            </p>

            <p className="mb-4">
              It serves as a <strong>"Nationality Proof"</strong> for your
              cargo. Customs authorities in the importing country use it to
              determine whether the goods are eligible for reduced or zero
              import duty under a Free Trade Agreement (FTA) or whether general
              tariffs apply.
            </p>
          </div>
        </div>
      </section>

      <section id="types" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Categorization
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Which Certificate Do You Need?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Preferential CoO */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-green-500 overflow-hidden group hover:-translate-y-2 transition duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Percent className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Preferential CoO
                  </h3>
                </div>

                <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
                  For Duty Reduction
                </p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Issued when exports are covered under specific Trade
                  Agreements (FTA, PTA, CEPA, CECA). It allows the buyer to pay{" "}
                  <strong>reduced or zero import duty</strong>.
                </p>

                <div className="bg-green-50 p-4 rounded text-sm text-green-800 border border-green-200">
                  <strong>Examples:</strong> India-ASEAN (AIFTA), SAFTA, SAPTA,
                  APTA, India-UAE CEPA.
                </div>
              </div>
            </div>

            {/* Non-Preferential CoO */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-slate-500 overflow-hidden group hover:-translate-y-2 transition duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                    <Globe2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Non-Preferential CoO
                  </h3>
                </div>

                <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
                  For General Origin Proof
                </p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Issued for general exports to countries where no preferential
                  agreement exists. It simply certifies the origin country for
                  statistical or political reasons (e.g., embargoes).
                </p>

                <div className="bg-slate-50 p-4 rounded text-sm text-slate-800 border border-slate-200">
                  <strong>Issuer:</strong> Chamber of Commerce, FIEO, Export
                  Inspection Council (EIC).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agreements" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Major Trade Agreements
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              India has signed multiple agreements offering duty benefits. We
              help you identify the right one for your shipment.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* AIFTA */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="text-accent-400 w-5 h-5" />
                <h4 className="font-bold">AIFTA (ASEAN)</h4>
              </div>
              <p className="text-xs text-slate-300">
                Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam,
                etc.
              </p>
            </div>

            {/* SAFTA */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="text-accent-400 w-5 h-5" />
                <h4 className="font-bold">SAFTA (South Asia)</h4>
              </div>
              <p className="text-xs text-slate-300">
                Bangladesh, Bhutan, Maldives, Nepal, Pakistan, Sri Lanka.
              </p>
            </div>

            {/* CEPA */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="text-accent-400 w-5 h-5" />
                <h4 className="font-bold">India-UAE CEPA</h4>
              </div>
              <p className="text-xs text-slate-300">
                Specific to exports to UAE (Zero duty on 90% lines).
              </p>
            </div>

            {/* ECTA */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="text-accent-400 w-5 h-5" />
                <h4 className="font-bold">India-Aus ECTA</h4>
              </div>
              <p className="text-xs text-slate-300">
                Duty benefits for exports to Australia.
              </p>
            </div>

            {/* APTA */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="text-accent-400 w-5 h-5" />
                <h4 className="font-bold">APTA (Asia Pacific)</h4>
              </div>
              <p className="text-xs text-slate-300">
                China, Korea, Sri Lanka, Bangladesh, Laos.
              </p>
            </div>

            {/* GSP */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="text-accent-400 w-5 h-5" />
                <h4 className="font-bold">GSP (Generalized)</h4>
              </div>
              <p className="text-xs text-slate-300">
                Unilateral concessions by developed countries (REX used for EU).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Digital Issuance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              DGFT CoO Workflow
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
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-sm text-slate-500">
                Register IEC on the DGFT CoO Common Digital Platform.
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
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-sm text-slate-500">
                Select Agreement type and upload Invoice/Packing List.
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
              <h3 className="text-lg font-bold mb-2">Sign</h3>
              <p className="text-sm text-slate-500">
                Digitally sign the application using Class 3 DSC.
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
              <h3 className="text-lg font-bold mb-2">Payment</h3>
              <p className="text-sm text-slate-500">
                Pay official agency fees online via gateway.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
              text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Download</h3>
              <p className="text-sm text-slate-500">
                Officer approves and issues the digitally signed CoO.
              </p>
            </div>
          </div>
        </div>
      </section>

     <Fees setShowEnrollModal={setShowEnrollModal} />

{/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Why CloudDesk for Certificate-Of-Origin?
      </h2>
      <p className="text-slate-500">
            Most exporters treat CoO as a formality. We treat it as a profit-margin protector.
        </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">
            1. Preferential Tariff Strategy
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Under 2026 <strong>FTAs (like India-EU, India-UK, and India-Australia ECTA)</strong>,
            your buyer can save millions in duties.
            <strong> CloudDesk</strong> analyzes your product’s
            <strong> Rules of Origin (RoO)</strong>—calculating the
            <strong> Value Addition (VA)</strong> and
            <strong> Change in Tariff Sub-Heading (CTSH)</strong>—to ensure
            you qualify for a Preferential CoO.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">
            2. e-CoO 2.0 Integration
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            As of early 2025/2026, all CoO applications are 100% digital via the
            <strong> Common Digital Platform (CDP)</strong>.
            <strong> CloudDesk</strong> manages your DSC-based login,
            mapping your <strong> IEC</strong> to the correct issuing agencies
            (<strong>EIC, MPEDA, or Chamber of Commerce</strong>),
            ensuring 24-hour turnaround times.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">
            3. Origin Verification Audit
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If your buyer claims a duty benefit, foreign Customs may initiate an
            <strong> "Origin Audit."</strong> We maintain your Production Records
            and Costing Sheets (<strong>showing raw material sources</strong>)
            to defend your "Made in India" status against international scrutiny.
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
                What is the difference between Preferential and Non-Preferential CoO?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                "• Preferential: Used when India has a trade treaty (FTA/PTA) with the destination country. It allows the buyer to pay lower or zero duty.
                 • Non-Preferential: A general certificate used for countries with no treaty. It simply proves the goods are Indian to satisfy their local import laws."

              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               How do I know if my product qualifies for an FTA?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                "You must meet the Rules of Origin (RoO). Usually, this means:
                 1. Wholly Obtained: Everything was grown/mined in India.
                 2. Substantial Transformation: Imported parts were used, but the final product has a different HSN Code and at least 35-40% Value Addition in India."

              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I apply for a CoO after the ship has sailed?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes (Retrospective Issuance). In 2026, you can apply for a CoO retrospectively, but it must be clearly marked as "ISSUED RETROSPECTIVELY" and usually requires an explanation for the delay.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is a physical copy of the CoO required in 2026?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Generally, No. Most 2026 treaties allow for Digital CoOs with a QR code for verification. However, for some countries (like those in the Middle East or Latin America), a physical "Wet-Ink" stamp from the Chamber of Commerce may still be requested by the bank.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What are the government fees for e-CoO?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Fees vary by agency. Generally, it is ₹500 to ₹1,200 per certificate. CloudDesk handles the wallet management on the DGFT portal to ensure no delays in issuance.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                My buyer is asking for "Self-Certification." What is that?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Under the India-UK and India-EU agreements, "Approved Exporters" can self-certify the origin on their commercial invoice without going to a government agency. CloudDesk helps you get the Approved Exporter Status if you meet the turnover criteria.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the penalty for a "False Declaration" of origin?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              In 2026, a false claim for FTA benefits is treated as Customs Fraud. Penalties include heavy fines (up to 5x the duty evaded) and the permanent blacklisting of your IEC from future FTA benefits.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does the CoO need to match the Bill of Lading exactly? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes. The vessel name, container number, weight, and HSN code must be a 100% match. CloudDesk’s Document Verification Tool flags any discrepancy before you hit "Submit."
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
                  Preferential CoO
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Non-Preferential CoO
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Legalization
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  REX Registration
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
                  Trade Agreements List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Rules of Origin
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  HS Code Finder
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Helpdesk
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

export default CloudDeskCertificate;
