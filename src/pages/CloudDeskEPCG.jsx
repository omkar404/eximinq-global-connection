import { useState } from "react";
// import TopBar from "../components/CloudDeskEPCG/TopBar";
import Navbar from "../components/CloudDeskEPCG/Navbar";
import Hero from "../components/CloudDeskEPCG/Hero";
import Fees from "../components/CloudDeskEPCG/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
FileText, 
Building2, 
Download,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskEPCG/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskEPCG/ModalEnroll";
import { FaRegistered } from "react-icons/fa";

const CloudDeskEPCG = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why is Customs Registration Necessary?</h2>
                <div className="w-24 h-1 bg-customs-600 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    The license issued by DGFT is merely an **Authorization**. To use it for duty-free import clearance (i.e., to debit the duty saved amount), the license must first be registered in the Customs system at the port of import.
                </p>
                
                <p className="mb-4">
                    Crucially, importers must execute a **Continuity Bond** with the Customs Department before the import. This Bond is a legal promise to fulfill the export obligation. If the obligation is not met, Customs enforces the Bond to recover the duty saved, plus interest.
                </p>
            </div>
        </div>
    </section>


 (
    <section id="bond" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Security Requirements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Bond Execution &amp; BG Waiver
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Continuity Bond */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-brand-600 overflow-hidden">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="text-brand-600" />
              Continuity Bond
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              A legal undertaking executed on stamp paper, typically
              equivalent to <strong>100% of the duty leviable</strong> on
              imported goods. This is filed physically with the Customs
              Bond Section.
            </p>

            <div className="bg-slate-50 p-4 rounded text-sm text-slate-700 font-medium">
              <strong>Form:</strong> Varies by port; usually executed on
              non-judicial stamp paper.
            </div>
          </div>

          {/* Bank Guarantee */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-brand-600 overflow-hidden">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Building2 className="text-brand-600" />
              Bank Guarantee (BG)
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              A financial guarantee furnished by a bank to Customs.
              This requirement is <strong>waived</strong> for Status
              Holders (1–5 Star), AEOs, and public sector undertakings.
            </p>

            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-0.5" size={16} />
                <span>
                  <strong>Status Holders:</strong> 100% BG waiver
                  (LUT required).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-0.5" size={16} />
                <span>
                  <strong>Others:</strong> Standard BG required
                  (varies, up to 100%).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

        <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold uppercase tracking-wider text-sm">
            Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Customs Registration Process
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">License Receipt</h3>
            <p className="text-sm text-slate-400">
              DGFT issues the license and transmits data to the ICEGATE system.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Bond Execution</h3>
            <p className="text-sm text-slate-400">
              Drafting of Bond and Bank Guarantee (if applicable)
              on the prescribed stamp paper.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Physical Filing</h3>
            <p className="text-sm text-slate-400">
              Submission to the Customs Bond Section
              along with all required annexures.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Registration</h3>
            <p className="text-sm text-slate-400">
              Customs registers the bond and endorses
              the license for debiting.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <Download size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Import</h3>
            <p className="text-sm text-slate-400">
              Importer can now file the Bill of Entry
              and debit the license duty-free.
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
                    <li><a href="#" class="hover:text-white transition">Advance License</a></li>
                    <li><a href="#" class="hover:text-white transition">EPCG Scheme</a></li>
                    <li><a href="#" class="hover:text-white transition">Bond Cancellation</a></li>
                    <li><a href="#" class="hover:text-white transition">AEO BG Waiver</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Customs Bond Manual</a></li>
                    <li><a href="#" class="hover:text-white transition">BG Waiver Notification</a></li>
                    <li><a href="#" class="hover:text-white transition">Continuity Bond Format</a></li>
                    <li><a href="#" class="hover:text-white transition">EODC Closure Guide</a></li>
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

export default CloudDeskEPCG;