import TopBar from "../components/CloudDeskCDSCO/TopBar";
import Navbar from "../components/CloudDeskCDSCO/Navbar";
import Hero from "../components/CloudDeskCDSCO/Hero";
import Fees from "../components/CloudDeskCDSCO/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  IdCard,
  PackageOpen,
  Microscope,
  Check,
  Pill,
  SprayCanIcon,
  FileSignature,
  BadgeCheck,
  Factory,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCDSCO/MainNavbar";

const CloudDeskCDSCO = () => {
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
              Why is CDSCO Approval Mandatory?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The{" "}
              <strong>
                Central Drugs Standard Control Organization (CDSCO)
              </strong>{" "}
              is India's national regulatory body for pharmaceuticals and
              medical devices. To ensure patient safety, the import,
              manufacture, and sale of Drugs, Cosmetics, and Medical Devices are
              regulated under the Drugs and Cosmetics Act, 1940.
            </p>
            <p className="mb-4">
              <br />
              Any entity wishing to import these products must register the
              foreign manufacturing site and the specific products with the
              CDSCO. For foreign manufacturers, appointing an{" "}
              <strong>Indian Authorized Agent (IAA)</strong> holding a valid
              wholesale license is a mandatory prerequisite.
            </p>
          </div>
        </div>
      </section>

      <section id="medical-devices" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">
              MD Rules, 2017
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Medical Device Registration
            </h2>
            <p className="text-slate-500 mt-2">
              Risk-based classification system (Class A to D).
            </p>
          </div>

          {/* Classification Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500 text-center">
              <h3 className="text-xl font-bold text-slate-800">Class A</h3>
              <p className="text-xs text-green-600 font-bold uppercase mb-2">
                Low Risk
              </p>
              <p className="text-sm text-slate-600">
                Thermometers, Bandages, Cotton Wool.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500 text-center">
              <h3 className="text-xl font-bold text-slate-800">Class B</h3>
              <p className="text-xs text-blue-600 font-bold uppercase mb-2">
                Low-Moderate Risk
              </p>
              <p className="text-sm text-slate-600">
                Hypodermic Needles, BP Monitors, Ultrasound.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500 text-center">
              <h3 className="text-xl font-bold text-slate-800">Class C</h3>
              <p className="text-xs text-orange-600 font-bold uppercase mb-2">
                Moderate-High Risk
              </p>
              <p className="text-sm text-slate-600">
                Dialysis Equipment, Bone Fixation, X-Ray.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-red-500 text-center">
              <h3 className="text-xl font-bold text-slate-800">Class D</h3>
              <p className="text-xs text-red-600 font-bold uppercase mb-2">
                High Risk
              </p>
              <p className="text-sm text-slate-600">
                Heart Valves, Stents, Pacemakers.
              </p>
            </div>
          </div>

          {/* MD-14 License Box */}
          <div className="bg-white rounded-xl p-8 border border-medical-200 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-brand-900 mb-4">
                Import License (MD-14)
              </h3>

              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  "Mandatory for importing Class A, B, C, & D devices.",
                  "Requires Power of Attorney from foreign manufacturer.",
                  "Valid ISO 13485 certificate required.",
                  "Free Sale Certificate (FSC) from GHTF countries.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="text-medical-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image + CTA */}
            <div className="md:w-1/3 text-center">
              <div className="bg-medical-50 p-6 rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-4 border-4 border-medical-100">
                <Microscope className="text-medical-600" size={60} />
              </div>

              <a
                href="#contact"
                className="text-medical-700 font-bold hover:underline"
              >
                Apply for MD-14
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="drugs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Drugs Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-100 rounded text-brand-600">
                  <Pill className="text-2xl" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Drugs & APIs
                </h2>
              </div>

              <p className="text-slate-600 mb-6">
                Import of drugs requires a dual registration process involving
                the registration of the manufacturing site and the specific drug
                products.
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-brand-900">Form 41</h4>
                  <p className="text-sm text-slate-500">
                    Registration Certificate for foreign manufacturing site and
                    products.
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-brand-900">Form 10</h4>
                  <p className="text-sm text-slate-500">
                    Import License for actual import of consignments.
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-brand-900">
                    Test License (Form 11)
                  </h4>
                  <p className="text-sm text-slate-500">
                    For importing small quantities for Testing, Analysis, or
                    Clinical Trials.
                  </p>
                </div>
              </div>
            </div>

            {/* Cosmetics Section */}
            <div id="cosmetics">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-100 rounded text-pink-600">
                  <SprayCanIcon className="text-2xl" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Cosmetics</h2>
              </div>

              <p className="text-slate-600 mb-6">
                All imported cosmetics must be registered under Form 43 via the
                SUGAM portal. Labels must comply with Indian standards.
              </p>

              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  "Skin care, Hair care, Make-up products.",
                  'Ingredient review against "Negative List".',
                  "Heavy metal testing reports.",
                  "Undertaking for no animal testing.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="text-pink-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-pink-50 p-6 rounded-xl border border-pink-100 text-center">
                <h4 className="font-bold text-pink-800 mb-2">
                  Form 43 Registration
                </h4>
                <p className="text-sm text-pink-700 mb-4">
                  Mandatory for every brand and variant.
                </p>

                <a
                  href="#contact"
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-pink-700 transition"
                >
                  Register Cosmetics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-medical-200 font-bold uppercase tracking-wider text-sm">
              Checklist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Critical Documents
            </h2>
          </div>

          {/* Document Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <FileSignature
                className="text-3xl text-accent-400 mb-4"
                size={36}
              />
              <h3 className="text-xl font-bold mb-2">Power of Attorney</h3>
              <p className="text-sm text-medical-50">
                Executed by the foreign manufacturer authorizing the Indian
                Agent to act on their behalf. Must be apostilled/legalized.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <BadgeCheck className="text-3xl text-accent-400 mb-4" size={36} />
              <h3 className="text-xl font-bold mb-2">Free Sale Cert (FSC)</h3>
              <p className="text-sm text-medical-50">
                Proof that the product is freely sold in the country of origin.
                Preferably from GHTF countries (USA, EU, Japan, etc.).
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <Factory className="text-3xl text-accent-400 mb-4" size={36} />
              <h3 className="text-xl font-bold mb-2">Plant Master File</h3>
              <p className="text-sm text-medical-50">
                Detailed Site Master File (SMF) describing the manufacturing
                facility, layout, and quality control systems.
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
              Workflow
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              SUGAM Portal Registration
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 
              border-4 border-medical-500 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Sign Up</h3>
              <p className="text-sm text-slate-500">
                Create account on SUGAM portal as Importer/Authorized Agent.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center
              text-2xl font-bold text-brand-900 mx-auto mb-4
              border-4 border-medical-500 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Dossier</h3>
              <p className="text-sm text-slate-500">
                Prepare technical dossier (Device Master File) & legal
                documents.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 
              border-4 border-medical-500 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Filing</h3>
              <p className="text-sm text-slate-500">
                Submit application online and pay official government fees.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 
              border-4 border-medical-500 shadow-sm"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Query</h3>
              <p className="text-sm text-slate-500">
                Respond to technical queries raised by CDSCO officers.
              </p>
            </div>

            {/* Step 5 (Checkmark) */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
              text-2xl font-bold text-white mx-auto mb-4 
              border-4 border-white shadow-sm"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Grant</h3>
              <p className="text-sm text-slate-500">
                Import License (MD-14 / Form 10 / Form 43) generated.
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
                  Medical Device Reg
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Drug Import License
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Cosmetics Reg
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Test License
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
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Device Classification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  GHTF Countries List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Labeling Rules
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

export default CloudDeskCDSCO;
