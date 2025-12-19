import TopBar from "../components/CloudDeskMoowr/TopBar";
import Navbar from "../components/CloudDeskMoowr/Navbar";
import Hero from "../components/CloudDeskMoowr/Hero";
import Fees from "../components/CloudDeskMoowr/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  FileBadge,
  Shield,
  Star,
  Truck,
  CalendarCheck,
  Percent,
  SearchCheck,
  CheckCheck,
  FileText,
  UploadCloud,
  Building2,
  CircleCheckBig,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskMoowr/MainNavbar";

const CloudDeskMoowr = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <TopBar />
      <MainNavbar />
      <Navbar />
      <Hero />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Authorized Economic Operator (AEO)?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>Authorized Economic Operator (AEO)</strong> is a trade
              facilitation program led by the World Customs Organization (WCO)
              and Indian Customs. It certifies a business as a "secure and
              reliable" trading partner.
            </p>
            <p className="mb-4">
              In simple terms, AEO is like a <strong>VIP status</strong> for
              Importers, Exporters, and Logistics partners. Once certified,
              Customs treats your shipments with higher trust, resulting in
              faster clearance, fewer physical examinations, and financial perks
              like deferred duty payment.
            </p>
          </div>
        </div>
      </section>

      <section id="tiers" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Classification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              AEO Tiers & Eligibility
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AEO T1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-slate-400 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="text-slate-500" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO T1
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                  Document Based
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    For Importers/Exporters
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Verification of Documents only
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    No Physical Site Audit required
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Grant of status in ~30 days
                  </li>
                </ul>
              </div>
            </div>

            {/* AEO T2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-accent-500 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Shield className="text-yellow-700" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO T2
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                  Gold Standard
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Requires Physical Site Verification
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Needs T1 or 3+ years experience
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Deferred Duty Payment enabled
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    High Safety & Security Standards
                  </li>
                </ul>
              </div>
            </div>

            {/* AEO T3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-emerald-600 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Star className="text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO T3
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-800 rounded">
                  Platinum Status
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Highest Level Accreditation
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Must hold T2 for 2+ years
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Zero Bank Guarantee
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    ID Cards for Key Personnel
                  </li>
                </ul>
              </div>
            </div>

            {/* AEO LO */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-600 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Truck className="text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AEO LO
                  </h3>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded">
                  Logistics Operators
                </span>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    For CHA, Freight Forwarders, Liners
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Strict Security Protocols required
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Bank Guarantee Waiver for transshipment
                  </li>
                  <li>
                    <CheckCircle className="text-green-500 inline-block mr-2" />
                    Preferential treatment at customs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Why Apply?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Key Business Benefits
            </h2>
          </div>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <Truck className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Direct Port Delivery</h3>
              <p className="text-sm text-slate-500">
                Skip the CFS. Cargo reaches your factory directly, reducing
                logistics costs drastically.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <CalendarCheck className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Deferred Duty</h3>
              <p className="text-sm text-slate-500">
                Delay duty payment (T2/T3 benefit) to improve working capital
                and cash flow.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <Percent className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lower BG</h3>
              <p className="text-sm text-slate-500">
                Get 50% to 100% reduction in Bank Guarantee requirements under
                various schemes.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition text-center group">
              <div
                className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-brand-500 group-hover:text-white transition"
              >
                <SearchCheck className="text-brand-600 text-3xl group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Less Scrutiny</h3>
              <p className="text-sm text-slate-500">
                Reduced inspections and Green Channel clearance for faster cargo
                movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Certification Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Steps to AEO Status
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <CheckCheck size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Gap Analysis</h3>
              <p className="text-sm text-slate-300">
                We audit your current SOPs against AEO security standards.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <FileText size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Documentation</h3>
              <p className="text-sm text-slate-300">
                Preparation of SOP manuals, security policy, and Annexures.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <UploadCloud size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Online Filing</h3>
              <p className="text-sm text-slate-300">
                Submission of application on the AEO India portal.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                <Building2 size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Site Audit</h3>
              <p className="text-sm text-slate-300">
                Customs Officers visit your premises for physical verification
                (T2/LO).
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-white mx-auto mb-4 border-4 border-white"
              >
                <CircleCheckBig size={34} />
              </div>
              <h3 className="text-lg font-bold mb-2">Certification</h3>
              <p className="text-sm text-slate-300">
                Issuance of AEO Certificate valid for 3 to 5 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees />

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Cloud Desk: Your trusted partner for DGFT, Customs, and
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
                  AEO Certification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Bill of Entry Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Shipping Bill Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Duty Payment
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
                  AEO Circulars
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  SOP Templates
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Security Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Client Success Stories
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

export default CloudDeskMoowr;
