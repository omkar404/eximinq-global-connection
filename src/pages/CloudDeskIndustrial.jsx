import { useState } from "react";
// import TopBar from "../components/CloudDeskIndustrial/TopBar";
import Navbar from "../components/CloudDeskIndustrial/Navbar";
import Hero from "../components/CloudDeskIndustrial/Hero";
import Fees from "../components/CloudDeskIndustrial/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Shield,
  Bomb,
  Biohazard,
  Cigarette,
  Wine,
  FileText,
  Share2,
  SearchCheck,
  MailCheck,
  FileSignature
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskIndustrial/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskIndustrial/ModalEnroll";

const CloudDeskIndustrial = () => {
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
                <h2 className="text-3xl font-bold text-industry-900 mb-4">What is Compulsory Licensing?</h2>
                <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    Under the <strong>Industries (Development and Regulation) Act, 1951</strong>, certain industries are deemed sensitive due to security, safety, or environmental concerns.
                </p>
                
                <p className="mb-4">
                    For these sectors, an <strong>Industrial License (IL)</strong> is mandatory regardless of the investment size. The license is granted by the Licensing Committee under the DPIIT after rigorous scrutiny and security clearance from the Ministry of Home Affairs (MHA). Filing a simple IEM is illegal for these activities.
                </p>
            </div>
        </div>
    </section>


        <section id="sectors" className="py-20 bg-industry-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-alert-600 font-bold uppercase tracking-wider text-sm">
            The 5 Compulsory Sectors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-industry-900 mt-2">
            Does Your Business Fall Here?
          </h2>
          <p className="text-slate-500 mt-2">
            If you manufacture any of these, you need an IL.
          </p>
        </div>

        {/* Sector Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sector 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-gray-800 hover:shadow-2xl transition group">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition">
              <Shield className="w-7 h-7 text-gray-800 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Defense & Aerospace
            </h3>
            <p className="text-sm text-slate-600">
              Manufacturing of arms, ammunition, warships, tanks, military
              aircraft, and allied defense equipment.
            </p>
          </div>

          {/* Sector 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-red-600 hover:shadow-2xl transition group">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition">
              <Bomb className="w-7 h-7 text-red-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Industrial Explosives
            </h3>
            <p className="text-sm text-slate-600">
              Gunpowder, detonating fuses, safety fuses, and other explosives
              (excluding matches and fireworks).
            </p>
          </div>

          {/* Sector 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-yellow-500 hover:shadow-2xl transition group">
            <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition">
              <Biohazard className="w-7 h-7 text-yellow-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Hazardous Chemicals
            </h3>
            <p className="text-sm text-slate-600">
              Hydrocyanic acid, Phosgene, Isocyanates, and other specified
              dangerous chemicals.
            </p>
          </div>

          {/* Sector 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-amber-800 hover:shadow-2xl transition group">
            <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-800 transition">
              <Cigarette className="w-7 h-7 text-amber-800 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Tobacco Products
            </h3>
            <p className="text-sm text-slate-600">
              Cigars, cigarettes, and other manufactured tobacco substitutes.
              (Strict licensing applies).
            </p>
          </div>

          {/* Sector 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-blue-500 hover:shadow-2xl transition group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
              <Wine className="w-7 h-7 text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Distillation & Brewing
            </h3>
            <p className="text-sm text-slate-600">
              Distillation and brewing of alcoholic drinks. (Note: Potable
              alcohol is State subject, but industrial alcohol / fuel ethanol
              may require IL).
            </p>
          </div>
        </div>

        {/* Location Restriction */}
        <div className="mt-12 bg-red-50 border border-red-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
          <h4 className="font-bold text-red-900 text-lg mb-2 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            Location Restrictions
          </h4>
          <p className="text-sm text-red-800">
            IL is also mandatory for <strong>any industry</strong> located
            within 25 KM of standard urban area limits of cities with population
            &gt; 1 Million, unless located in a designated Industrial Area.
          </p>
        </div>
      </div>
    </section>
   
    <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold uppercase tracking-wider text-sm">
            G2B Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Licensing Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <FileText className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Form IL-FC</h3>
            <p className="text-sm text-slate-400">
              File application on NSWS / DPIIT portal with project details and
              directors&apos; profiles.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <Share2 className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Circulation</h3>
            <p className="text-sm text-slate-400">
              Application circulated to Administrative Ministry, State Govt, and
              MHA.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <SearchCheck className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Scrutiny</h3>
            <p className="text-sm text-slate-400">
              Licensing Committee reviews comments and security clearance status.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-industry-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-industry-300 shadow-sm">
              <MailCheck className="w-7 h-7 text-industry-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">LOI</h3>
            <p className="text-sm text-slate-400">
              Letter of Intent issued with conditions (valid for 3 years to set
              up).
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <FileSignature className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">License</h3>
            <p className="text-sm text-slate-400">
              Conversion of LOI to Industrial License after fulfilling
              conditions.
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
                    <li><a href="#" class="hover:text-white transition">Defense License</a></li>
                    <li><a href="#" class="hover:text-white transition">Explosives License</a></li>
                    <li><a href="#" class="hover:text-white transition">IEM Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">SCOMET Authorization</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">IDR Act 1951</a></li>
                    <li><a href="#" class="hover:text-white transition">Compulsory List PDF</a></li>
                    <li><a href="#" class="hover:text-white transition">Press Note 3 (FDI)</a></li>
                    <li><a href="#" class="hover:text-white transition">Location Policy</a></li>
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

export default CloudDeskIndustrial;