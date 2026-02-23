import { useState } from "react";
// import TopBar from "../components/CloudDeskPollution/TopBar";
import Navbar from "../components/CloudDeskPollution/Navbar";
import Hero from "../components/CloudDeskPollution/Hero";
import Fees from "../components/CloudDeskPollution/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser, 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
MapPinned,
Factory, 
FileText, 
IndianRupee
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskPollution/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskPollution/ModalEnroll";

const CloudDeskPollution = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why is PCB Consent Mandatory?</h2>
                <div className="w-24 h-1 bg-brand-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    Under the <strong>Water (Prevention and Control of Pollution) Act, 1974</strong> and the <strong>Air (Prevention and Control of Pollution) Act, 1981</strong>, no person can establish any industry or process without obtaining prior consent from the State Pollution Control Board (SPCB).
                </p>
                
                <p className="mb-4">
                    Operating without a valid <strong>Consent to Operate (CTO)</strong> is a criminal offense, liable for heavy penalties, disconnection of electricity/water supply, and immediate closure of the unit.
                </p>
            </div>
        </div>
    </section>


    <section id="categories" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-eco-600 font-bold uppercase tracking-wider text-sm">
            Industrial Classification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Which Category Are You?
          </h2>
          <p className="text-slate-500 mt-2">
            Based on Pollution Index Score.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Red */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-8 border-red-600 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Red Category
            </h3>
            <p className="text-xs font-bold text-red-600 uppercase mb-4">
              Pollution Index &gt; 60
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Highly polluting industries like Chemical Plants, Tanneries,
              Pharma, and Heavy Engineering.
            </p>
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
              Max Scrutiny
            </span>
          </div>

          {/* Orange */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-8 border-orange-500 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Orange Category
            </h3>
            <p className="text-xs font-bold text-orange-600 uppercase mb-4">
              Pollution Index 41–59
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Moderately polluting industries like Food Processing, Hotels,
              Automobiles, and Stone Crushers.
            </p>
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
              Strict Norms
            </span>
          </div>

          {/* Green */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-8 border-green-500 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Green Category
            </h3>
            <p className="text-xs font-bold text-green-600 uppercase mb-4">
              Pollution Index 21–40
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Industries with low pollution potential like small assembly
              units, flour mills, and packaging.
            </p>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              Faster Approval
            </span>
          </div>

          {/* White */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-8 border-slate-300 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              White Category
            </h3>
            <p className="text-xs font-bold text-slate-500 uppercase mb-4">
              Pollution Index &lt; 20
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Non-polluting industries like Solar Power, Wind Energy, and
              simple assembly. No CTO needed (Intimation only).
            </p>
            <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded">
              Exempted
            </span>
          </div>
        </div>
      </div>
    </section>


   <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-eco-400 font-bold uppercase tracking-wider text-sm">
            Two-Stage Approval
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Compliance Lifecycle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CTE */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 relative">
            <div className="absolute -top-5 left-8 bg-green-500 text-eco-900 font-bold px-4 py-1 rounded shadow">
              Stage 1
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Consent to Establish (CTE)
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Must be obtained <strong>BEFORE</strong> starting construction or
              installation of machinery. It acts as a primary NOC to set up the
              industry.
            </p>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <Check className="text-green-400 mt-0.5" size={16} />
                Site Suitability Check
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-400 mt-0.5" size={16} />
                Environmental Management Plan (EMP)
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-400 mt-0.5" size={16} />
                Valid for 1 to 5 years (setup phase)
              </li>
            </ul>
          </div>

          {/* CTO */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 relative">
            <div className="absolute -top-5 left-8 bg-green-500 text-eco-900 font-bold px-4 py-1 rounded shadow">
              Stage 2
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Consent to Operate (CTO)
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Must be obtained <strong>AFTER</strong> installation but{" "}
              <strong>BEFORE</strong> starting production. It verifies that
              pollution control devices (ETP/STP/APC) are installed.
            </p>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <Check className="text-green-400 mt-0.5" size={16} />
                Requires Site Inspection
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-400 mt-0.5" size={16} />
                Monitoring Reports (Air/Water)
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-400 mt-0.5" size={16} />
                Periodic Renewal Required
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Required Documents
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The application is filed online through the State&apos;s OCMMS
              portal. Key documents include:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinned className="text-green-600 mt-1" size={20} />
                <div>
                  <strong className="block text-slate-800">
                    Site Plan / Layout
                  </strong>
                  <span className="text-sm text-slate-500">
                    Showing manufacturing area, ETP/STP location, and green
                    belt.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Factory className="text-green-600 mt-1" size={20} />
                <div>
                  <strong className="block text-slate-800">
                    Process Flow Chart
                  </strong>
                  <span className="text-sm text-slate-500">
                    Detailed manufacturing process with emission/effluent
                    points.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FileText className="text-green-600 mt-1" size={20} />
                <div>
                  <strong className="block text-slate-800">
                    Land Documents
                  </strong>
                  <span className="text-sm text-slate-500">
                    Sale Deed or Rent Agreement with Land Usage proof.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IndianRupee className="text-green-600 mt-1" size={20} />
                <div>
                  <strong className="block text-slate-800">
                    CA Certificate
                  </strong>
                  <span className="text-sm text-slate-500">
                    Certificate of Gross Capital Investment on Land, Building,
                    and Machinery.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-brand-50 text-slate-800 rounded-xl p-8 shadow-inner border border-eco-100">
            <h3 className="text-xl font-bold mb-4 text-eco-900 border-b border-eco-200 pb-4">
              Specific Requirements
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              <strong>For Red/Orange Categories:</strong>
              <br />• Zero Liquid Discharge (ZLD) Plan
              <br />• Hazardous Waste Authorization
              <br />• Boiler/DG Set Stack Details
            </p>
            <a
              href="#contact"
              className="block text-center bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-eco-700 transition"
            >
              Get Document Checklist
            </a>
          </div>
        </div>
      </div>
    </section>

    <Fees/>


{/* --- WHY CLOUDDESK SECTION (POLLUTION CONTROL) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Pollution Control?</h2>
      <p className="text-slate-500">
        Pollution compliance is now digital and data-driven. A single bad effluent sample can trigger a National Green Tribunal (NGT) fine of Crores.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Strategic Categorization (The 5-Color Rule)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            We don't just apply; we strategically classify your unit based on the <strong>Pollution Index (PI)</strong>: <strong>Red (PI ≥ 60)</strong> for heavy industries needing strict CTE/CTO, <strong>Orange (PI 41–59)</strong> for moderate units, <strong>Green (PI 21–40)</strong> for simplified "Auto-Grant," <strong>White (PI &lt; 20)</strong> requiring only online intimation, and the new <strong>Blue category</strong> (2026) for Essential Environmental Services.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. The "2026 Long-Term Framework"</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Following the <strong>2026 Air Pollution Grant of Consent Amendments</strong>, we help you opt for the <strong>25-year Extended Consent</strong> by paying a one-time fee. This eliminates the headache of <strong>recurring renewals and administrative red tape</strong>.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Registered Environment Auditor Liaison</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The 2026 rules empower <strong>Private Environment Auditors</strong> to verify site assessments. CloudDesk partners with certified auditors to fast-track your application, ensuring your <strong>Effluent Treatment Plant (ETP) and Air Scrubbers</strong> are certified without waiting for a busy government inspector.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Deemed Consent for MSMEs</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you are a Micro or Small unit in a notified industrial area, CloudDesk utilizes the <strong>"Deemed CTE" mechanism</strong>. We file your self-certified application and get your project moving instantly, <strong>skipping the 60-day waiting period</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (POLLUTION CONTROL) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is Consent to Establish (CTE)?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is the <strong>"Permission to Build."</strong> You must get this <strong>before you lay a single brick or install any machinery</strong>. It validates that your location and pollution control plans are legal.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is Consent to Operate (CTO)?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is the <strong>"Permission to Run."</strong> Once the factory is built, we apply for CTO. An inspector (or auditor) verifies that you actually installed the <strong>ETP/STP you promised in the CTE</strong>. You cannot start commercial production without this.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I skip CTE if I am moving into an existing building?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. If the <strong>"Process" or "Capacity" changes</strong>, a fresh CTE (or an Amendment) is required.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is the "Periodic Renewal" of CTO really gone?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Under the 2026 framework, once granted, the CTO stays valid for the chosen period (up to <strong>25 years</strong>) as long as you pay the <strong>annual fee</strong> and don't violate the pollution norms.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "One-Time Fee" system?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          State boards now allow you to pay the consent fee for a block of <strong>5, 10, or 25 years upfront</strong>. CloudDesk calculates the most <strong>tax-efficient block</strong> for your business scale.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Does the "White Category" really need zero paperwork?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Not zero. You must submit an <strong>Online Intimation and a Self-Declaration</strong>. If you fail to do this and are caught, you are treated as an <strong>"Unregistered Unit."</strong>
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "Polluter Pays" fine in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          If you exceed discharge limits, the PCB calculates <strong>Environmental Compensation</strong> based on the duration of the violation. For a medium-scale Orange unit, this can easily reach <strong>₹5,000 to ₹10,000 per day</strong>.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can my CEO be imprisoned for pollution?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Under the Water and Air Acts, the <strong>"Person in Charge"</strong> can face <strong>1.5 to 6 years of imprisonment</strong> for continued non-compliance or operating without consent.
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
                    <li><a href="#" class="hover:text-white transition">Consent to Establish</a></li>
                    <li><a href="#" class="hover:text-white transition">Consent to Operate</a></li>
                    <li><a href="#" class="hover:text-white transition">Factory License</a></li>
                    <li><a href="#" class="hover:text-white transition">EPR Authorization</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Industry Categorization</a></li>
                    <li><a href="#" class="hover:text-white transition">Fee Structure</a></li>
                    <li><a href="#" class="hover:text-white transition">Emission Standards</a></li>
                    <li><a href="#" class="hover:text-white transition">Water Act Guidelines</a></li>
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

export default CloudDeskPollution;