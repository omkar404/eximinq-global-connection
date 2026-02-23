import { useState } from "react";
// import TopBar from "../components/CloudDeskISO/TopBar";
import Navbar from "../components/CloudDeskISO/Navbar";
import Hero from "../components/CloudDeskISO/Hero";
import Fees from "../components/CloudDeskISO/Fees";
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
  CheckCheck,
  Leaf,
  HardHat,
  ShieldCheck,
  Utensils,
  Microscope,
  Globe, 
  Clock, 
  Award, 
  Zap,
  FileText, 
  ClipboardList, 
  SearchCheck, 
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskISO/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskISO/ModalEnroll";

const CloudDeskISO = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Get ISO Certified?</h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    <strong>ISO (International Organization for Standardization)</strong> certification serves as a seal of approval that a company runs to one of the international standards developed and published by ISO. It is a vital tool to win customer trust and improve business efficiency.
                </p>
                
                <p className="mb-4">
                    For businesses, it opens doors to <strong>Government Tenders</strong> (where ISO is often mandatory), enhances <strong>Export Potential</strong> by meeting global compliance norms, and streamlines internal operations to reduce wastage and errors.
                </p>
            </div>
        </div>
    </section>



    <section id="standards" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-iso-600 font-bold uppercase tracking-wider text-sm">
            Most Popular
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Common ISO Standards
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ISO 9001 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4
                            text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <CheckCheck size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ISO 9001:2015
            </h3>
            <p className="text-xs text-slate-500 uppercase font-bold mb-3">
              Quality Management System (QMS)
            </p>
            <p className="text-sm text-slate-600">
              The gold standard for quality. Focuses on customer satisfaction
              and continuous improvement. Applicable to any industry.
            </p>
          </div>

          {/* ISO 14001 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4
                            text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <Leaf size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ISO 14001:2015
            </h3>
            <p className="text-xs text-slate-500 uppercase font-bold mb-3">
              Environmental Management (EMS)
            </p>
            <p className="text-sm text-slate-600">
              Demonstrates commitment to environmental protection, waste
              reduction, and regulatory compliance.
            </p>
          </div>

          {/* ISO 45001 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-orange-500 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4
                            text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition">
              <HardHat size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ISO 45001:2018
            </h3>
            <p className="text-xs text-slate-500 uppercase font-bold mb-3">
              Health & Safety (OHSMS)
            </p>
            <p className="text-sm text-slate-600">
              Focuses on workplace safety, accident prevention, and employee
              well-being. Critical for manufacturing and construction.
            </p>
          </div>

          {/* ISO 27001 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-purple-600 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4
                            text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ISO 27001:2022
            </h3>
            <p className="text-xs text-slate-500 uppercase font-bold mb-3">
              Information Security (ISMS)
            </p>
            <p className="text-sm text-slate-600">
              Essential for IT and SaaS companies to protect sensitive data
              against cyber threats.
            </p>
          </div>

          {/* ISO 22000 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-red-500 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4
                            text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
              <Utensils size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ISO 22000:2018
            </h3>
            <p className="text-xs text-slate-500 uppercase font-bold mb-3">
              Food Safety (FSMS)
            </p>
            <p className="text-sm text-slate-600">
              Ensures food safety across the supply chain. Mandatory for food
              manufacturers and exporters.
            </p>
          </div>

          {/* ISO 13485 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-teal-500 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4
                            text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition">
              <Microscope size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ISO 13485:2016
            </h3>
            <p className="text-xs text-slate-500 uppercase font-bold mb-3">
              Medical Devices (QMS)
            </p>
            <p className="text-sm text-slate-600">
              Mandatory for medical device manufacturers. Required for CDSCO,
              CE marking, and global compliance.
            </p>
          </div>

        </div>
      </div>
    </section>

        <section id="iaf" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            IAF vs Non-IAF: Which one to choose?
          </h2>
          <p className="text-iso-200">
            The accreditation body makes a big difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* IAF */}
          <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent-500 text-brand-900 text-xs font-bold px-4 py-2 rounded-bl-lg">
              RECOMMENDED
            </div>

            <h3 className="text-2xl font-bold text-brand-900 mb-4 flex items-center gap-2">
              <Globe size={22} /> IAF Accredited
            </h3>

            <p className="text-sm text-slate-600 mb-6">
              Issued by a body that is a member of the{" "}
              <strong>International Accreditation Forum (IAF)</strong>. 
              Examples: NABCB (India), UKAS (UK), JAS-ANZ (Australia).
            </p>

            <ul className="space-y-3 text-sm font-semibold">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                Valid for Govt Tenders
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                Valid for Exports
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                Globally Recognized
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-orange-500" />
                Takes 7–15 Days
              </li>
            </ul>
          </div>

          {/* Non-IAF */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Award size={22} /> Non-IAF
            </h3>

            <p className="text-sm text-iso-100 mb-6">
              Issued by independent certification bodies not regulated by IAF.
              Generally cheaper and faster, but with limited acceptance.
            </p>

            <ul className="space-y-3 text-sm font-semibold text-iso-100">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-white" />
                Good for Marketing / Branding
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-white" />
                Internal Process Improvement
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-white" />
                Not Accepted in Major Tenders
              </li>
              <li className="flex items-center gap-2">
                <Zap size={16} className="text-accent-400" />
                Instant / 24 Hours
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

        <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Certification Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            How it Works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8 step-connector">

          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-brand-900 mx-auto mb-4 border-4 border-iso-200 shadow-sm">
              <FileText size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Application</h3>
            <p className="text-sm text-slate-500">
              Submit application form with scope of work.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-brand-900 mx-auto mb-4 border-4 border-iso-200 shadow-sm">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Documentation</h3>
            <p className="text-sm text-slate-500">
              Prepare manuals, SOPs, and records (we assist here).
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-brand-900 mx-auto mb-4 border-4 border-iso-200 shadow-sm">
              <SearchCheck size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Audit</h3>
            <p className="text-sm text-slate-500">
              Stage 1 (Docs review) & Stage 2 (On-site verification).
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Award size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Award</h3>
            <p className="text-sm text-slate-500">
              Non-conformities closed. Certificate issued for 3 years.
            </p>
          </div>

        </div>
      </div>
    </section>

    <Fees/>


{/* --- WHY CLOUDDESK SECTION (ISO CERTIFICATION) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for ISO Certification?</h2>
      <p className="text-slate-500">
        Many vendors sell "fake" non-IAF certificates that are rejected by foreign buyers. We only provide globally recognized, accredited certifications.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. IAF & NABCB Accreditation Only</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            In 2026, customs and global tenders only accept certificates with the <strong>IAF (International Accreditation Forum)</strong> or <strong>NABCB (National Accreditation Board for Certification Bodies)</strong> marks. CloudDesk ensures your certificate is <strong>globally verifiable</strong>, protecting you from "blacklisting" by international clients.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Specialized Industry Mapping</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            We map you to the standards that matter for your 2026 growth: <strong>ISO 14001</strong> for "Green" export compliance (crucial for EU/USA), <strong>ISO 45001</strong> for Factory Safety, <strong>ISO 27001</strong> for data security, and <strong>ISO 22000</strong> — mandatory for food exporters (HACCP).
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Documentation & Audit Preparation</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Most businesses fail the audit because of poor paperwork. CloudDesk provides the <strong>Quality Manuals, SOPs (Standard Operating Procedures),</strong> and <strong>Internal Audit Reports</strong> required to pass the certification audit on the <strong>first attempt</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Zero-Disturbance Certification</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            We manage the <strong>"Stage 1" (Document Review)</strong> and <strong>"Stage 2" (On-site/Virtual Audit)</strong> logistics, ensuring the certification process <strong>doesn't halt your production or launch timeline</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (ISO CERTIFICATION) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the most important ISO for an exporter?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          <strong>ISO 9001:2015 (Quality Management System)</strong>. It is the universal language of business. Without it, you cannot apply for <strong>"Star Export House" status</strong> or bid for most international tenders.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How do I know if an ISO certificate is "fake" or "non-accredited"?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Check for the <strong>IAF logo</strong>. In 2026, you can verify any genuine certificate on the <strong>IAF CertSearch global database</strong>. If it's not there, it's just a piece of paper with no legal standing in international trade.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Does ISO certification expire?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. It is valid for <strong>3 years</strong>, but you must undergo a <strong>Surveillance Audit every year</strong> to keep it active. CloudDesk manages these annual audits so your status never lapses.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long does it take to get certified?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          For a small to medium unit, the process takes <strong>4 to 6 weeks</strong>. This includes the time for system implementation and the two-stage audit.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the cost of ISO 9001 in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          For a single-site SME, the total cost (including audit fees) typically ranges from <strong>₹25,000 to ₹45,000</strong> for a 3-year cycle.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I get ISO for my software?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. You should aim for <strong>ISO 27001 (Information Security)</strong>. This proves to your SaaS clients that their data is protected by <strong>global security standards</strong>.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How does ISO help in getting "Star Export House" status?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Under the <strong>FTP 2023-2026</strong>, holding an ISO certificate is a mandatory <strong>"support document"</strong> for the application. It signifies that the exporter has a standardized process, reducing the <strong>"risk profile"</strong> in the eyes of the DGFT.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Are there government subsidies for ISO certification?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Under the <strong>MSME Champions Scheme</strong>, small businesses can get a reimbursement of up to <strong>75% of the certification costs</strong>. CloudDesk helps you file the reimbursement claim after your certificate is issued.
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
                    <li><a href="#" class="hover:text-white transition">ISO 9001 (QMS)</a></li>
                    <li><a href="#" class="hover:text-white transition">ISO 14001 (EMS)</a></li>
                    <li><a href="#" class="hover:text-white transition">ISO 45001 (OHS)</a></li>
                    <li><a href="#" class="hover:text-white transition">CE Marking</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Check Validity</a></li>
                    <li><a href="#" class="hover:text-white transition">IAF Members</a></li>
                    <li><a href="#" class="hover:text-white transition">Audit Checklist</a></li>
                    <li><a href="#" class="hover:text-white transition">Certification Steps</a></li>
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

export default CloudDeskISO;
