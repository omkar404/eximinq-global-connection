import React, { useState } from "react";
import TopBar from "../components/CloudDeskSCOMET/TopBar";
import Navbar from "../components/CloudDeskSCOMET/Navbar";
import Hero from "../components/CloudDeskSCOMET/Hero";
import Fees from "../components/CloudDeskSCOMET/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  FileSignature,
  FileCode2,
  ShoppingCart,
  IdCard,
  FileSearch, 
  FileCheck,
   FileText, 
   Users2, 
   CheckCheck,
   MapPin,
   Phone,
   Mail
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskSCOMET/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskSCOMET/ModalEnroll";

const CloudDeskSCOMET = () => {
    const [showEnrollModal, setShowEnrollModal] = useState({
      open: false,
      type: null,
    });
  
    const handleEnrollmentSubmit = (formData) => {
      console.log("Enrollment Submitted:", formData);
  
      // TODO → send API call
      // axios.post("/api/enroll", formData)
  
      alert("Form submitted — check console for data.");
    };
  
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: null })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is SCOMET?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>SCOMET</strong> stands for <strong>S</strong>pecial{" "}
              <strong>C</strong>hemicals, <strong>O</strong>rganisms,{" "}
              <strong>M</strong>aterials, <strong>E</strong>quipment and{" "}
              <strong>T</strong>echnologies. These are "dual-use" items, meaning
              they have civilian applications but can also be used for military
              purposes or in the production of Weapons of Mass Destruction
              (WMD).
            </p>
            <p className="mb-4">
              Under India's Foreign Trade Policy, the export of SCOMET items is
              either prohibited or permitted only under a license issued by the
              DGFT. This list is harmonized with global control regimes like the{" "}
              <strong>Wassenaar Arrangement</strong>,{" "}
              <strong>Australia Group</strong>, and{" "}
              <strong>Missile Technology Control Regime (MTCR)</strong>.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-8 rounded-r-lg">
              <h3 className="font-bold text-red-900 text-lg mb-2">
                <i className="fas fa-exclamation-triangle"></i> Mandatory
                Compliance
              </h3>
              <p className="text-sm">
                Exporting SCOMET items without a license is a serious offense
                under the Weapons of Mass Destruction and their Delivery Systems
                (Prohibition of Unlawful Activities) Act, leading to
                imprisonment and heavy fines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Classification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              SCOMET Categories (0-8)
            </h2>
            <p className="text-slate-500 mt-2">
              Identify where your product fits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* <!-- Cat 0 & 1 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-slate-700 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Category 0 & 1
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Nuclear & Chemicals
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Nuclear Materials & Equipment</li>
                <li>• Toxic Chemical Agents</li>
                <li>• Riot Control Agents</li>
              </ul>
            </div>

            {/* <!-- Cat 2 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Category 2
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Biological
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Micro-organisms (Viruses/Bacteria)</li>
                <li>• Toxins</li>
                <li>• Genetic Elements</li>
              </ul>
            </div>

            {/* <!-- Cat 3 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Category 3
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Materials
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• High Strength Alloys</li>
                <li>• Carbon Fibers</li>
                <li>• Material Processing Equipment</li>
              </ul>
            </div>

            {/* <!-- Cat 4 & 5 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Category 4 & 5
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Nuclear Related & Aerospace
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Equipment for Nuclear Activity</li>
                <li>• Aerospace Systems</li>
                <li>• Unmanned Aerial Vehicles (UAVs)</li>
              </ul>
            </div>

            {/* <!-- Cat 6 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Category 6
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Munitions List
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Arms, Ammunition</li>
                <li>• Armored Vehicles</li>
                <li>• Explosives & Propellants</li>
                <li>*Requires strict End User Certs</li>
              </ul>
            </div>

            {/* <!-- Cat 8 --> */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Category 8
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase mb-4">
                Special Materials
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Electronics, Computers</li>
                <li>• Information Security (InfoSec)</li>
                <li>• Sensors and Lasers</li>
                <li>• Navigation & Avionics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

          <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
            Approval Workflow
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">The IMWG Process</h2>

          <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
            Unlike standard licenses, SCOMET applications are reviewed by an Inter-Ministerial Working Group (IMWG)
            comprising DGFT, MEA, DRDO, and other security agencies.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">

          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <FileSearch className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Classification</h3>
            <p className="text-sm text-slate-300">
              Technical mapping of item specifications to the exact SCOMET entry.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <FileCheck className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">EUC</h3>
            <p className="text-sm text-slate-300">
              Obtaining End User Certificate (EUC) from the foreign buyer (Appendix 2S).
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <FileText className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">ANF 2Q</h3>
            <p className="text-sm text-slate-300">
              Online filing of application ANF 2Q on the DGFT portal.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              <Users2 className="w-8 h-8 text-brand-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">IMWG Review</h3>
            <p className="text-sm text-slate-300">
              Scrutiny by multiple ministries. Queries regarding end-use are common.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-white shadow-sm">
              <CheckCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">License</h3>
            <p className="text-sm text-slate-300">
              Issuance of export authorization (valid for 24 months).
            </p>
          </div>

        </div>
      </div>
    </section>

      <section id="compliance" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Documentation Checklist
              </h2>

              <p className="text-slate-600 mb-8">
                Precision is key. A single error in the End User Certificate can
                lead to immediate rejection.
              </p>

              <ul className="space-y-4">
                {/* Item 1 */}
                <li className="flex items-start gap-3">
                  <FileSignature className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      End User Certificate (EUC)
                    </strong>
                    <span className="text-sm text-slate-500">
                      Must be on the official letterhead of the foreign buyer,
                      signed by authorized signatory.
                    </span>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-3">
                  <FileCode2 className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      Technical Specifications
                    </strong>
                    <span className="text-sm text-slate-500">
                      Detailed drawings, chemical composition, or datasheets.
                    </span>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-3">
                  <ShoppingCart className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      Purchase Order
                    </strong>
                    <span className="text-sm text-slate-500">
                      Copy of the PO/Contract from the buyer.
                    </span>
                  </div>
                </li>

                {/* Item 4 */}
                <li className="flex items-start gap-3">
                  <IdCard className="text-brand-500 mt-1 w-6 h-6" />
                  <div>
                    <strong className="block text-slate-800">
                      Company Profile
                    </strong>
                    <span className="text-sm text-slate-500">
                      Profile of the foreign buyer and the consignee (if
                      different).
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE BOX */}
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="bg-white p-6 shadow-md rounded text-center">
                <h4 className="font-bold text-brand-900 mb-4">
                  GAEC (Global Authorization)
                </h4>

                <p className="text-sm text-slate-600 mb-6">
                  For exporters supplying SCOMET items to the same foreign
                  entity repeatedly (within Intra-Company transfers), the
                  <strong>
                    {" "}
                    Global Authorization for Intra-Company Transfer (GAICT)
                  </strong>{" "}
                  allows bulk approval for 3 years.
                </p>

                <a
                  href="#home" 
                  className="inline-block bg-brand-600 text-white font-bold py-2 px-6 rounded hover:bg-brand-700 transition"
                >
                  Check GAEC Eligibility
                </a>
              </div>
            </div>
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
                  SCOMET License
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Advance Authorisation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Restricted Export License
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
                  Appendix 3 (SCOMET)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EUC Format (Appx 2S)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT FAQs
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Wassenaar List
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

export default CloudDeskSCOMET;
