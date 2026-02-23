import { useState } from "react";
// import TopBar from "../components/CloudDeskFactory/TopBar";
import Navbar from "../components/CloudDeskFactory/Navbar";
import Hero from "../components/CloudDeskFactory/Hero";
import Fees from "../components/CloudDeskFactory/Fees";
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
  DraftingCompass,
  HardHat,
  Building2,
  RefreshCw,
  FileText,
  Repeat,
  FileBlueprint,
  FileSignature,
  UserCheck,
  Zap,
  ShieldCheck,
  FileBox,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskFactory/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskFactory/ModalEnroll";

const CloudDeskFactory = () => {
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
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Mandatory Compliance
          </h2>
          <div className="w-24 h-1 bg-safety-500 mx-auto rounded"></div>
        </div>

        {/* Content */}
        <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
          <p className="mb-4">
            The <strong>Factories Act, 1948</strong> mandates that any premise
            engaging in a manufacturing process must obtain a license if it
            employs:
            <br />• <strong>10 or more workers</strong> with the aid of power.
            <br />• <strong>20 or more workers</strong> without the aid of power.
          </p>

          {/* Image */}
          <div className="my-8">
            <p>
[Image of Factory Safety Compliance Diagram]
</p>
          </div>

          <p className="mb-4">
            The license is granted by the{" "}
            <strong>Chief Inspector of Factories (CIF)</strong> or the Directorate
            of Industrial Safety and Health (DISH) of the respective state.
            Operating without a valid license is a punishable offense and can
            lead to the closure of the unit.
          </p>
        </div>
      </div>
    </section>


    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            End-to-End Factory Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-brand-600 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition">
              <DraftingCompass size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Factory Plan Approval
            </h3>
            <p className="text-sm text-slate-600">
              Before construction/setup, factory plans must be approved by the
              Director (DISH). We assist in drawing layout plans as per statutory
              norms.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-safety-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-safety-600 mb-4 group-hover:bg-safety-500 group-hover:text-white transition">
              <HardHat size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              License Registration
            </h3>
            <p className="text-sm text-slate-600">
              Filing of application (Form 2) for grant of new license. Coordination
              with factory inspectors for site verification and approval.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Stability Certificate
            </h3>
            <p className="text-sm text-slate-600">
              Obtaining the structural stability certificate from a
              government-approved Competent Person (Chartered Engineer).
              Mandatory for licensing.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              License Renewal
            </h3>
            <p className="text-sm text-slate-600">
              Timely renewal of licenses (Annually or for 5/10 years blocks). We
              ensure your compliance calendar is never missed.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Annual Returns
            </h3>
            <p className="text-sm text-slate-600">
              Filing of consolidated annual returns (Form 27) and half-yearly
              returns regarding employment, wages, and accidents.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-red-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition">
              <Repeat size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Amendment / Transfer
            </h3>
            <p className="text-sm text-slate-600">
              Updating the license for change in Horse Power (HP), number of
              employees, name change, or transfer of ownership.
            </p>
          </div>
        </div>
      </div>
    </section>

   <section id="documents" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Documents Required
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              The documentation is extensive and varies slightly by state. Key
              documents include:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileBox className="text-yellow-500 mt-1" size={20} />
                <div>
                  <strong className="block text-white">Factory Plans</strong>
                  <span className="text-sm text-slate-400">
                    Blueprints of site plan, elevation, and machinery layout
                    (approved by DISH).
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FileSignature className="text-yellow-500 mt-1" size={20} />
                <div>
                  <strong className="block text-white">Land Documents</strong>
                  <span className="text-sm text-slate-400">
                    Sale Deed / Lease Agreement / MIDC Allotment Letter.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <UserCheck className="text-yellow-500 mt-1" size={20} />
                <div>
                  <strong className="block text-white">Occupier Details</strong>
                  <span className="text-sm text-slate-400">
                    ID proof and resolution nominating the Occupier
                    (Director/Partner).
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Zap className="text-yellow-500 mt-1" size={20} />
                <div>
                  <strong className="block text-white">Power Connection</strong>
                  <span className="text-sm text-slate-400">
                    Electricity Bill or Load Sanction Letter showing HP.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck className="text-yellow-500 mt-1" size={20} />
                <div>
                  <strong className="block text-white">NOCs</strong>
                  <span className="text-sm text-slate-400">
                    Pollution Control Board (MPCB/GPCB) Consent, Fire NOC, Local
                    Authority NOC.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl border-t-8 border-safety-500">
            <h3 className="text-xl font-bold mb-4 text-industrial-900 border-b pb-4">
              Compliance Warning
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Running a factory without a valid license can lead to:
              <br />• Sealing of the premises.
              <br />• Fines up to ₹ 1 Lakh or more.
              <br />• Imprisonment for the Occupier/Manager.
            </p>
            <a
              href="#contact"
              className="block text-center bg-brand-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-industrial-800 transition"
            >
              Ensure Compliance Now
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Approval Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Steps to Obtain License
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-industrial-900 mx-auto mb-4 border-4 border-industrial-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Plan Approval</h3>
            <p className="text-sm text-slate-500">
              Submission of factory drawings for safety verification.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-industrial-900 mx-auto mb-4 border-4 border-industrial-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Construction</h3>
            <p className="text-sm text-slate-500">
              Building the factory as per the approved plan.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-industrial-900 mx-auto mb-4 border-4 border-industrial-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Application</h3>
            <p className="text-sm text-slate-500">
              Filing Form 2 online with Stability Certificate and Fees.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-industrial-900 mx-auto mb-4 border-4 border-industrial-200 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Inspection</h3>
            <p className="text-sm text-slate-500">
              Factory Inspector visits to check safety measures & machinery.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Check size={28} strokeWidth={3} />
            </div>
            <h3 className="text-lg font-bold mb-2">Grant</h3>
            <p className="text-sm text-slate-500">
              License issued upon satisfactory report.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees/>



{/* --- WHY CLOUDDESK SECTION (FACTORY LICENSE) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Factory Licensing?</h2>
      <p className="text-slate-500">
        Most consultants just fill a form; we manage the engineering and safety architecture.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Stage-Wise Approval (The "Plan First" Rule)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            You cannot just "get" a license for an existing building. You must first get the <strong>Building Plan &amp; Machinery Layout approved</strong> by the Directorate of Industrial Safety and Health (DISH) before construction or installation. CloudDesk liaisons with <strong>"Approved Draftsmen"</strong> to ensure your ventilation, emergency exits, and machine spacing meet the <strong>2026 safety codes</strong>.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Structural Stability Certification</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            A major bottleneck in 2026 is the <strong>Stability Certificate (Form 1A)</strong>. We coordinate with <strong>Chartered Structural Engineers</strong> to certify that your building can handle the load of your heavy machinery, preventing rejections during the site inspection.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Occupier vs. Manager Liability</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The Act identifies an <strong>"Occupier"</strong> (usually a Director/Proprietor) who is <strong>personally liable</strong> for any accidents. CloudDesk manages the <strong>Board Resolutions and Appointment Letters</strong> to clearly define these roles, protecting the rest of the board from operational legal risks.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Integrated Health & Welfare Compliance</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            A factory license isn't just about machines; it's about people. We ensure your layout includes mandated <strong>Canteens, Restrooms, First Aid Rooms, and Creches</strong> (if applicable) — the first things a Factory Inspector checks during the mandatory site visit.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (FACTORY LICENSE) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Do I need a Factory License if I only have 5 workers?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Generally, No — you would fall under the <strong>Shop &amp; Establishment Act</strong>. However, if your manufacturing involves <strong>"Hazardous Processes"</strong> (chemicals, explosives, etc.), the government can notify your unit under <strong>Section 85</strong>, making a license mandatory even with just 1 worker.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "Aid of Power" definition in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          If you use <strong>electricity, solar, steam, or any mechanical energy</strong> to run even a single packaging machine or a small motor for your process, you are <strong>"with the aid of power."</strong>
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I run a factory in a residential area with a license?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. A Factory License is only granted for premises in <strong>Conforming Industrial Zones</strong> or land with <strong>Non-Agricultural (NA) Industrial conversion</strong>.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What are the primary documents required?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>Approved Building Plans and Machinery Layout.</strong><br />
          • <strong>Stability Certificate</strong> from a licensed Structural Engineer.<br />
          • <strong>NOC</strong> from Fire Department and Pollution Control Board (MPCB/CPCB).<br />
          • <strong>Proof of Ownership/Lease</strong> and Electricity Load Sanction.<br />
          • <strong>List of Raw Materials</strong> and Process Flow Chart.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long is the license valid?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, most states allow you to apply for a validity of <strong>1, 5, or 10 years</strong>. CloudDesk recommends the <strong>10-year renewal</strong> to avoid annual bureaucratic interference.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What happens during the "Site Inspection"?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The Inspector checks: (1) If the <strong>machine layout matches the approved drawing</strong>, (2) If <strong>safety guards</strong> are on moving parts, (3) Adequate <strong>lighting/ventilation</strong>, and (4) If workers have proper <strong>PPE (Personal Protective Equipment)</strong>.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the penalty for late renewal?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Most states charge a <strong>25% surcharge</strong> if the renewal application is not filed <strong>30 days before expiry</strong>. If the license expires, you are technically operating an <strong>illegal unit</strong>.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can a Factory License be transferred?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. If the <strong>"Occupier" changes</strong> or the business is sold, you must file an <strong>Amendment Application</strong> with the new details and the transfer deed.
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
                    <li><a href="#" class="hover:text-white transition">New Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">License Renewal</a></li>
                    <li><a href="#" class="hover:text-white transition">Plan Approval</a></li>
                    <li><a href="#" class="hover:text-white transition">Pollution NOC</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Factories Act 1948</a></li>
                    <li><a href="#" class="hover:text-white transition">State Rules (DISB)</a></li>
                    <li><a href="#" class="hover:text-white transition">Safety Guidelines</a></li>
                    <li><a href="#" class="hover:text-white transition">Fee Calculator</a></li>
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

export default CloudDeskFactory;