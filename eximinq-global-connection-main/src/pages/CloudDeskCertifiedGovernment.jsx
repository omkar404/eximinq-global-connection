import { useState } from "react";
// import TopBar from "../components/CloudDeskFactoryStuffing/TopBar";
import Navbar from "../components/CloudDeskFactoryStuffing/Navbar";
import Hero from "../components/CloudDeskFactoryStuffing/Hero";
import Fees from "../components/CloudDeskFactoryStuffing/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ShieldCheck, 
  Factory, 
  Store, 
  ClipboardCheck, 
  Video, 
  XCircle,
  Gavel 
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskFactoryStuffing/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskFactoryStuffing/ModalEnroll";

const CloudDeskFactoryStuffing = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What is GeM?</h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    <strong>Government e-Marketplace (GeM)</strong> is a one-stop online procurement portal for all Central & State Government Ministries, Departments, Public Sector Undertakings (PSUs), and affiliated bodies. It was launched to bring transparency, efficiency, and speed in public procurement.
                </p>
                
                <p className="mb-4">
                    It is now <strong>mandatory</strong> for government departments to procure goods and services available on GeM. This presents a massive opportunity for businesses to bypass traditional tendering hurdles and sell directly via Direct Purchase, L1 Bidding, or Reverse Auction.
                </p>
            </div>
        </div>
    </section>


    <section id="types" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Classification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Which Seller Are You?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* OEM */}
          <div className="bg-white rounded-xl shadow-lg border-t-8 border-blue-600 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gov-100 rounded-full flex items-center justify-center text-gov-600 font-bold">
                  <Factory size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    OEM (Manufacturer)
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    Original Equipment Manufacturer
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                You own the brand or have the legal rights to manufacture the
                product. You control the catalog and can authorize resellers.
              </p>

              <ul className="text-sm text-slate-600 space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Must own Trademark/Brand.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Requires <strong>Vendor Assessment</strong> by QCI.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Full control over product specs and pricing.
                </li>
              </ul>

              <a
                href="#contact"
                className="block w-full bg-brand-600 text-white text-center font-bold py-3 rounded hover:bg-gov-700 transition"
              >
                Register as OEM
              </a>
            </div>
          </div>

          {/* Reseller */}
          <div className="bg-white rounded-xl shadow-lg border-t-8 border-blue-500 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  <Store size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Reseller / Trader
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    Authorized Distributor
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                You sell products manufactured by others. You need authorization
                from the OEM to list their products in your account.
              </p>

              <ul className="text-sm text-slate-600 space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  No Vendor Assessment needed.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Requires Authorization Code from OEM.
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-0.5" size={16} />
                  Can participate in bids for authorized items.
                </li>
              </ul>

              <a
                href="#contact"
                className="block w-full bg-blue-500 text-white text-center font-bold py-3 rounded hover:bg-blue-600 transition"
              >
                Register as Reseller
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="assessment" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vendor Assessment (For OEMs)
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              To get the &quot;OEM&quot; tag on GeM, manufacturers must undergo a
              mandatory Vendor Assessment by the Quality Council of India (QCI).
              This verifies your production capacity and quality standards.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ClipboardCheck
                  className="text-accent-400 mt-1"
                  size={20}
                />
                <div>
                  <strong className="block text-white">
                    Desktop Assessment
                  </strong>
                  <span className="text-sm text-slate-400">
                    Verification of documents (GST, Balance Sheet, Process
                    Flow).
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Video className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">
                    Video Assessment
                  </strong>
                  <span className="text-sm text-slate-400">
                    Live video audit of the factory premises, machinery, and
                    stock.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <XCircle className="text-accent-400 mt-1" size={20} />
                <div>
                  <strong className="block text-white">Exemption</strong>
                  <span className="text-sm text-slate-400">
                    NSIC registered units and BIS License holders may be
                    exempted.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-gov-900 border-b pb-4">
              Caution Money
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              All sellers must deposit &quot;Caution Money&quot; to keep their
              account active. This is a refundable deposit held by GeM.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span>Turnover &lt; 1 Cr</span>
                <span className="font-bold">₹ 5,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Turnover 1 Cr - 10 Cr</span>
                <span className="font-bold">₹ 10,000</span>
              </div>
              <div className="flex justify-between">
                <span>Turnover &gt; 10 Cr</span>
                <span className="font-bold">₹ 25,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Onboarding
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Registration Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gov-900 mx-auto mb-4 border-4 border-gov-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Profile</h3>
            <p className="text-sm text-slate-500">
              Sign up using Aadhaar of Proprietor/Director and verify GSTIN.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gov-900 mx-auto mb-4 border-4 border-gov-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Deposit</h3>
            <p className="text-sm text-slate-500">
              Pay Caution Money to activate the seller panel.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gov-900 mx-auto mb-4 border-4 border-gov-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Brand</h3>
            <p className="text-sm text-slate-500">
              OEMs apply for Brand Approval. Resellers get authorization.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gov-900 mx-auto mb-4 border-4 border-gov-200 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Catalog</h3>
            <p className="text-sm text-slate-500">
              Upload products/services with images and technical specs.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Gavel size={26} strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-bold mb-2">Bid</h3>
            <p className="text-sm text-slate-500">
              Participate in Bids/RA and receive Direct Purchase orders.
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
                    <li><a href="#" class="hover:text-white transition">GeM Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Vendor Assessment</a></li>
                    <li><a href="#" class="hover:text-white transition">Product Upload</a></li>
                    <li><a href="#" class="hover:text-white transition">Bid Management</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">GeM GTC</a></li>
                    <li><a href="#" class="hover:text-white transition">Incident Management</a></li>
                    <li><a href="#" class="hover:text-white transition">Category List</a></li>
                    <li><a href="#" class="hover:text-white transition">Payment Policy</a></li>
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

export default CloudDeskFactoryStuffing;