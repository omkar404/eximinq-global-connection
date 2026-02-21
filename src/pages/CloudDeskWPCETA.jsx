// import TopBar from "../components/CloudDeskWPCETA/TopBar";
import Navbar from "../components/CloudDeskWPCETA/Navbar";
import Hero from "../components/CloudDeskWPCETA/Hero";
import Fees from "../components/CloudDeskWPCETA/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  Headphones,
  Wifi,
  Watch,
  Contact2,
  Drone,
  Smartphone,
  FileCheck,
  IdCard,
  FileText,
  Settings,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskWPCETA/MainNavbar";

const CloudDeskWPCETA = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is WPC Approval?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Wireless Planning & Coordination (WPC)</strong> Wing
              of the Ministry of Communications controls radio frequency
              spectrum in India. Any device that works on wireless technology
              (Bluetooth, Wi-Fi, Zigbee, RFID) requires WPC approval to be sold
              or imported into India.
            </p>
            <p className="mb-4">
              For products operating in{" "}
              <strong>De-licensed Frequency Bands</strong> (like 2.4 GHz or 5
              GHz), the approval required is called{" "}
              <strong>ETA (Equipment Type Approval)</strong>. This confirms that
              the device operates within the permitted power and frequency
              limits and does not interfere with other signals.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Common Products Requiring ETA
            </h2>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-xl transition flex gap-4">
              <Headphones className="text-3xl text-blue-500" />
              <div>
                <h4 className="font-bold text-lg text-slate-900">
                  Bluetooth Devices
                </h4>
                <p className="text-sm text-slate-600">
                  Headphones, Speakers, TWS Earbuds, Keyboards, Mouse.
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition flex gap-4">
              <Wifi className="text-3xl text-green-500" />
              <div>
                <h4 className="font-bold text-lg text-slate-900">
                  Wi-Fi Equipment
                </h4>
                <p className="text-sm text-slate-600">
                  Routers, Modems, Dongles, Laptops, Smart TVs.
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-xl transition flex gap-4">
              <Watch className="text-3xl text-orange-500" />
              <div>
                <h4 className="font-bold text-lg text-slate-900">
                  Smart Wearables
                </h4>
                <p className="text-sm text-slate-600">
                  Smartwatches, Fitness Bands, Health Trackers.
                </p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-xl transition flex gap-4">
              <Contact2 className="text-3xl text-purple-500" />
              <div>
                <h4 className="font-bold text-lg text-slate-900">
                  RFID Devices
                </h4>
                <p className="text-sm text-slate-600">
                  RFID Tags, Readers, Access Control Systems (865–867 MHz).
                </p>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 hover:shadow-xl transition flex gap-4">
              <Drone className="text-3xl text-red-500" />
              <div>
                <h4 className="font-bold text-lg text-slate-900">
                  Drones / UAVs
                </h4>
                <p className="text-sm text-slate-600">
                  Remote controlled toys and camera drones (requires Nano/Micro
                  check).
                </p>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-brand-500 hover:shadow-xl transition flex gap-4">
              <Smartphone className="text-3xl text-brand-500" />
              <div>
                <h4 className="font-bold text-lg text-slate-900">
                  GSM / 4G Modules
                </h4>
                <p className="text-sm text-slate-600">
                  IoT modules, POS machines, Vehicle Trackers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Required Documents
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                The most critical document is the{" "}
                <strong>RF Test Report</strong>. It must be from an
                ILAC-accredited laboratory (foreign or Indian) and must
                specifically cover the Radio Frequency parameters.
              </p>

              <ul className="space-y-4">
                {/* RF Test Report */}
                <li className="flex items-start gap-3">
                  <FileCheck className="text-accent-400 mt-1" />
                  <div>
                    <strong className="block text-white">RF Test Report</strong>
                    <span className="text-sm text-slate-400">
                      Issued by ISO 17025 accredited lab (e.g., FCC/CE/ETSI
                      standards).
                    </span>
                  </div>
                </li>

                {/* ID Proof */}
                <li className="flex items-start gap-3">
                  <IdCard className="text-accent-400 mt-1" />
                  <div>
                    <strong className="block text-white">
                      ID Proof & Address Proof
                    </strong>
                    <span className="text-sm text-slate-400">
                      Aadhaar/PAN of Authorized Signatory.
                    </span>
                  </div>
                </li>

                {/* Authorization Letter */}
                <li className="flex items-start gap-3">
                  <FileText className="text-accent-400 mt-1" />
                  <div>
                    <strong className="block text-white">
                      Authorization Letter
                    </strong>
                    <span className="text-sm text-slate-400">
                      Letter from the manufacturer authorizing the Indian
                      importer.
                    </span>
                  </div>
                </li>

                {/* Technical Specs */}
                <li className="flex items-start gap-3">
                  <Settings className="text-accent-400 mt-1" />
                  <div>
                    <strong className="block text-white">
                      Technical Specs
                    </strong>
                    <span className="text-sm text-slate-400">
                      Frequency range, Output power, Modulation type details.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                SD-ETA vs Regular ETA
              </h3>

              <div className="space-y-4">
                {/* SD-ETA */}
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-green-900">
                      SD-ETA (Self Declaration)
                    </span>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                      Fast
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    For products purely in de-licensed bands. Immediate
                    generation upon correct filing on Saral Sanchar.
                  </p>
                </div>

                {/* Regular ETA */}
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-blue-900">Regular ETA</span>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                      Scrutiny
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    For complex cases or bands requiring scrutiny. Takes longer
                    (15–30 days).
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="#contact"
                  className="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 transition"
                >
                  Start Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              How to Get WPC Certificate
            </h2>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Review</h3>
              <p className="text-sm text-slate-500">
                We analyze your RF Test Report to ensure it meets WPC standards.
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
              <h3 className="text-lg font-bold mb-2">Login</h3>
              <p className="text-sm text-slate-500">
                Create user profile on Saral Sanchar portal.
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
              <h3 className="text-lg font-bold mb-2">Filing</h3>
              <p className="text-sm text-slate-500">
                Submit application with fees (₹ 10,000 Govt Fee approx).
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Certificate</h3>
              <p className="text-sm text-slate-500">
                Download ETA certificate. This is valid for lifetime unless
                model changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees />

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
                  WPC ETA Approval
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Import License
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  BIS Registration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPR Authorization
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
                  De-licensed Bands
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Saral Sanchar FAQ
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Test Report Format
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

export default CloudDeskWPCETA;
