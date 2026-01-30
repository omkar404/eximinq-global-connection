import { useState } from "react";
// import TopBar from "../components/CloudDeskGSTFiling/TopBar";
import Navbar from "../components/CloudDeskHorticulture/Navbar";
import Hero from "../components/CloudDeskHorticulture/Hero";
import Fees from "../components/CloudDeskHorticulture/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
Warehouse, 
Carrot, 
Truck,
IdCard, 
Award, 
Globe, 
Leaf,
IndianRupee 
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskHorticulture/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskHorticulture/ModalEnroll";

const CloudDeskHorticulture = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Boosting Horticulture Exports</h2>
                <div className="w-24 h-1 bg-brand-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    India is a global leader in fruits and vegetables, but post-harvest losses are high. The <strong>National Horticulture Board (NHB)</strong> and <strong>APEDA</strong> provide financial assistance to set up infrastructure like Cold Storages, Integrated Pack Houses, and Reefer Transport to reduce wastage and boost exports.
                </p>
                [Image of Cold Chain Supply Chain Diagram]
                <p className="mb-4">
                    Compliance with global standards like <strong>Global GAP</strong> and Phytosanitary regulations is crucial for entering premium markets in the EU, USA, and Japan. We provide end-to-end support for infrastructure setup, subsidy claims, and export certification.
                </p>
            </div>
        </div>
    </section>


    <section id="schemes" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-horti-600 font-bold uppercase tracking-wider text-sm">
            Financial Assistance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            NHB Capital Investment Subsidy
          </h2>
          <p className="text-slate-500 mt-2">
            Credit Linked Back-Ended Subsidy Schemes.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Scheme 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-600 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-horti-100 rounded-lg flex items-center justify-center text-horti-600 mb-4 group-hover:bg-horti-600 group-hover:text-white transition">
              <Warehouse size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Cold Storage
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Construction, expansion, or modernization of Cold Storage (Type 1 &
              2) and Controlled Atmosphere (CA) Stores.
            </p>
            <span className="text-xs font-bold text-horti-800 bg-horti-50 px-2 py-1 rounded">
              35% - 50% Subsidy
            </span>
          </div>

          {/* Scheme 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-accent-500 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 mb-4 group-hover:bg-accent-500 group-hover:text-white transition">
              <Carrot size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Commercial Horticulture
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Development of commercial horticulture in open fields (Fruit
              Orchards) or protected cover (Polyhouse/Greenhouse).
            </p>
            <span className="text-xs font-bold text-accent-800 bg-accent-50 px-2 py-1 rounded">
              Up to ₹ 112 Lakhs
            </span>
          </div>

          {/* Scheme 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500 hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <Truck size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Integrated Post Harvest
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Pack Houses, Ripening Chambers, Pre-cooling units, and Reefer Vans
              (Refrigerated Transport).
            </p>
            <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded">
              Project Based
            </span>
          </div>
        </div>
      </div>
    </section>


        <section id="apeda" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              APEDA Export Compliance
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              To export scheduled products (Fruits, Vegetables, Flowers, Honey),
              registration with APEDA is mandatory. We facilitate:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IdCard className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    RCMC Registration
                  </strong>
                  <span className="text-sm text-slate-400">
                    Registration Cum Membership Certificate for export benefits.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Award className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    Phytosanitary Certificate (PSC)
                  </strong>
                  <span className="text-sm text-slate-400">
                    Mandatory plant health certificate from PQ department for
                    every shipment.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Globe className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">Global GAP</strong>
                  <span className="text-sm text-slate-400">
                    Good Agricultural Practices certification for EU market
                    access.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Leaf className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    Traceability (GrapeNet/HortiNet)
                  </strong>
                  <span className="text-sm text-slate-400">
                    Registration of farms on APEDA&apos;s traceability systems.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-horti-900 border-b pb-4">
              Export Assistance
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              APEDA also offers financial assistance for:
              <br />• Packaging Development
              <br />• Export Promotion / Branding
              <br />• Quality Certification Costs
            </p>
            <a
              href="#contact"
              className="block text-center bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-horti-700 transition"
            >
              Claim Export Assistance
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
            NHB Subsidy Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Steps to Get Grant
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-horti-900 mx-auto mb-4 border-4 border-horti-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">DPR</h3>
            <p className="text-sm text-slate-500">
              Preparation of Detailed Project Report and submission to NHB.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-horti-900 mx-auto mb-4 border-4 border-horti-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">IPA</h3>
            <p className="text-sm text-slate-500">
              In-Principle Approval (IPA) issued by NHB. Valid for bank loan
              processing.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-horti-900 mx-auto mb-4 border-4 border-horti-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Loan</h3>
            <p className="text-sm text-slate-500">
              Sanction of Term Loan by Bank. Project construction begins.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-horti-900 mx-auto mb-4 border-4 border-horti-200 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Inspection</h3>
            <p className="text-sm text-slate-500">
              Joint Inspection Team (JIT) visits the completed site for
              verification.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <IndianRupee size={28} strokeWidth={3} />
            </div>
            <h3 className="text-lg font-bold mb-2">Release</h3>
            <p className="text-sm text-slate-500">
              Subsidy released to the bank account (Backend Subsidy).
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees/>

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
                    <li><a href="#" class="hover:text-white transition">NHB Subsidy</a></li>
                    <li><a href="#" class="hover:text-white transition">APEDA Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Cold Storage License</a></li>
                    <li><a href="#" class="hover:text-white transition">Global GAP</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">NHB Guidelines</a></li>
                    <li><a href="#" class="hover:text-white transition">Phytosanitary Rules</a></li>
                    <li><a href="#" class="hover:text-white transition">Cost Norms</a></li>
                    <li><a href="#" class="hover:text-white transition">Bank List</a></li>
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

export default CloudDeskHorticulture;