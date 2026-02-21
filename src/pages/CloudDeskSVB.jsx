import { useState } from "react";
// import TopBar from "../components/CloudDeskSVB/TopBar";
import Navbar from "../components/CloudDeskSVB/Navbar";
import Hero from "../components/CloudDeskSVB/Hero";
import Fees from "../components/CloudDeskSVB/Fees";
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
  Calendar,
  FileText,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskSVB/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskSVB/ModalEnroll";
import { FaRegistered } from "react-icons/fa";

const CloudDeskSVB = () => {
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

    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">What is the Special Valuation Branch (SVB)?</h2>
                <div class="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
            </div>
            <div class="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p class="mb-4">
                    The <strong>Special Valuation Branch (SVB)</strong> is a specialized unit of the Customs Department that investigates import cases involving transactions between "related parties" under Rule 2(1) of the Customs Valuation (Determination of Value of Imported Goods) Rules, 2007.
                </p>
                
                <p class="mb-4">
                    The objective is to determine if the relationship between the importer and the supplier has influenced the transaction price. If the price is deemed artificially low, SVB orders a **Valuation Loading**, meaning the importer pays duty on a higher value, often along with penalties.
                </p>
            </div>
        </div>
    </section>


    <section id="related" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Compliance Requirement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Are You Considered a &apos;Related Party&apos;?
          </h2>
        </div>

        {/* Definitions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-600">
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Control
            </h3>
            <p className="text-sm text-slate-600">
              One party directly or indirectly controls the other
              (e.g., Parent / Subsidiary).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-600">
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Common Shareholders
            </h3>
            <p className="text-sm text-slate-600">
              A third person controls both the importer and the supplier.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-600">
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Common Officers
            </h3>
            <p className="text-sm text-slate-600">
              Importer and supplier share common directors, officers,
              or are legally recognized partners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-600">
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Sole Agent
            </h3>
            <p className="text-sm text-slate-600">
              Supplier acts as the sole agent, distributor,
              or concessionaire of the importer.
            </p>
          </div>
        </div>

        {/* Risk Box */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-brand-800 mb-4 border-b pb-4">
            Financial Risk: Extra Duty Deposit (EDD)
          </h3>

          <p className="text-slate-600 mb-4">
            Upon initiation of SVB inquiry, Customs may demand an{" "}
            <strong>Extra Duty Deposit (EDD)</strong>, typically{" "}
            <strong>1% to 5%</strong> of the assessed value on every
            consignment until the Final Order is issued
            (usually 12–18 months).
          </p>

          <p className="text-sm text-red-600 font-bold">
            This blocked capital directly impacts cash flow.
            Fast-tracking the SVB process is not optional — it’s critical.
          </p>
        </div>
      </div>
    </section>


        <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold uppercase tracking-wider text-sm">
            SVB Lifecycle
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Filing and Finalization
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Declaration</h3>
            <p className="text-sm text-slate-400">
              Importer declares related party status in the Bill of Entry.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Reference</h3>
            <p className="text-sm text-slate-400">
              Case is referred by the port to the jurisdictional SVB
              (Mumbai / Delhi / Chennai).
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Questionnaire</h3>
            <p className="text-sm text-slate-400">
              Submission of 30+ mandatory documents and detailed
              replies to the SVB Questionnaire.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Final Order</h3>
            <p className="text-sm text-slate-400">
              SVB issues the Final Order accepting the price
              or imposing loading / penalty.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <Check size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Closure</h3>
            <p className="text-sm text-slate-400">
              EDD is released. Pricing is finalized for all future imports.
            </p>
          </div>
        </div>
      </div>
    </section>

        <section id="renewal" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
              Annual Renewal &amp; Finalization
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Even after the initial SVB investigation, compliance
              does not end. The Final Order remains subject to
              annual review by Customs authorities.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Calendar className="text-brand-600 mt-1" size={20} />
                <div>
                  <strong className="block text-slate-800">
                    Annual Information
                  </strong>
                  <span className="text-sm text-slate-500">
                    Mandatory yearly submission of financial data
                    to demonstrate that transaction pricing remains
                    competitive.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FileText className="text-brand-600 mt-1" size={20} />
                <div>
                  <strong className="block text-slate-800">
                    Review Compliance
                  </strong>
                  <span className="text-sm text-slate-500">
                    We align your P&amp;L, Balance Sheet, and transfer
                    pricing policies with the declared import value.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <UserCheck className="text-brand-600 mt-1" size={20} />
                <div>
                  <strong className="block text-slate-800">
                    Penalty Waiver
                  </strong>
                  <span className="text-sm text-slate-500">
                    Complete liaison for EDD (Extra Duty Deposit)
                    waiver and refund upon final closure.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-brand-50 rounded-xl p-8 shadow-inner border border-brand-100">
            <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
              Key Documents We Prepare
            </h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Annexure-A: Initial Declaration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Technical Collaboration Agreement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Transfer Pricing Study Report (TP Study)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Annual Financial Statements
              </li>
            </ul>

            <div className="mt-6 text-center">
              <a
                href="#contact"
                className="block w-full bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-700 transition"
              >
                Request Document Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

<Fees/>

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">SVB is where 'Accountancy' meets 'Customs Law.' CloudDesk ensures your global transfer pricing stands up to local scrutiny.</h2>
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
                        <h4 className="font-bold text-slate-900 mb-2">1. The "Annexure A" Precision Audit</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The <strong>SVB </strong>process starts with a massive questionnaire <strong>(Annexure A).</strong>
                          One wrong answer about <strong>"Royalty" or "License Fees" </strong>can trigger a 100% investigation. 
                          <strong>CloudDesk </strong>performs a Financial Review of your Inter-Company Agreements to ensure your answers are consistent with your <strong>Income Tax (TP)</strong> filings and Customs laws.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. EDD (Extra Duty Deposit) Mitigation</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Historically, <strong>SVB cases led to a 1%–5% Extra Duty Deposit (EDD)</strong> on every shipment while the case was pending. 
                          <strong>CloudDesk’s "Early-Resolution" </strong>Strategy aims to get a "No-EDD" order by providing a robust data set at the time of <strong>registration, </strong>keeping your working capital free.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Transfer Pricing Study (TPS) Alignment</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Customs officers often look for contradictions between your Income Tax TP Report and your Customs Valuation. 
                          <strong>CloudDesk’s </strong>experts align these two perspectives, creating a<strong> "Unified Valuation Defense" </strong>that proves your <strong>"Arm’s Length" </strong>price is valid for both departments.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Continuance & Renewal Management</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         <strong> SVB </strong>orders are no longer valid indefinitely. 
                         You must file a Renewal Declaration every year/period. <strong>CloudDesk’s </strong>Compliance Clock tracks your SVB order expiry and files the necessary <strong>"No Change" </strong>declarations to ensure your imports continue under <strong>"Final Assessment" status.</strong>
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
                Who needs to register with the SVB?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Any importer who is "Related" to their foreign supplier under Rule 2(2) of the Customs Valuation Rules. This includes: (1) Subsidiaries/Parent companies, (2) Companies with common Directors, (3) Partners in business, or (4) If one company controls the other.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is SVB registration mandatory for every related party transaction?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. You don't need SVB if: (1) The import is a one-time gift, (2) The total value is small (as per local limits), or (3) The goods are duty-free and there's no incentive involved. CloudDesk provides an SVB Applicability Test to see if you can skip the process entirely.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "Circular 5/2016" procedure?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                This is the current governing law that simplified the SVB process. It replaced the old, endless investigations with a time-bound registration and a "Risk-Based" approach to investigation.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is "Annexure A" and "Annexure B"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               "• Annexure A: The initial questionnaire you file at the port of entry to register your relationship.
                • Annexure B: The detailed follow-up questionnaire filed if the SVB decides a full investigation is needed."

              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does an SVB investigation take? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Legally, the SVB should finalize the investigation within 4 to 6 months from the date of receiving all documents. However, without proactive follow-up (which CloudDesk provides), these cases can drag on for a year.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is "Provisional Assessment" in SVB cases? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Until the SVB issues a final "Order," your Bill of Entry is assessed "Provisionally." This means the duty you pay is not final, and you may be asked to pay an Extra Duty Deposit (EDD). CloudDesk works to minimize or eliminate this EDD.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is there a government fee for SVB?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               There is no "Registration Fee" charged by Customs. The costs are purely professional (for experts like CloudDesk) and potential EDD if your case is deemed high-risk.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What happens if there is a "Change in Circumstances"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              If you sign a new agreement with your parent company or change your transfer pricing formula, you must inform the SVB immediately. Failure to do so can lead to heavy penalties and a retrospective duty demand
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
                    <li><a href="#" class="hover:text-white transition">SVB Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Adjudication</a></li>
                    <li><a href="#" class="hover:text-white transition">Valuation Appeals</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Duty Payment</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Valuation Rules 2007</a></li>
                    <li><a href="#" class="hover:text-white transition">Circular 4/2016-Cus</a></li>
                    <li><a href="#" class="hover:text-white transition">Transfer Pricing Guide</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Manual</a></li>
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

export default CloudDeskSVB;