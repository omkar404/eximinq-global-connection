import { useState } from "react";
// import TopBar from "../components/CloudDeskDefenceEXIM/TopBar";
import Navbar from "../components/CloudDeskDefenceEXIM/Navbar";
import Hero from "../components/CloudDeskDefenceEXIM/Hero";
import Fees from "../components/CloudDeskDefenceEXIM/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
Star, 
  FileText,
  FileCode,
  ShoppingCart,
  IdCard,
  CheckCircle,
  ShieldCheck,
  Stamp,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDefenceEXIM/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskDefenceEXIM/ModalEnroll";

const CloudDeskDefenceEXIM = () => {
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
                <h2 className="text-3xl font-bold text-defense-900 mb-4">Defence Trade Regulations</h2>
                <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    The export of arms, ammunition, and related defense equipment is strictly regulated under the <strong>SCOMET (Special Chemicals, Organisms, Materials, Equipment and Technologies)</strong> list. Specifically, <strong>Category 6</strong> covers the "Munitions List".
                </p>
                
                <p className="mb-4">
                    Authorizations are granted by the <strong>Department of Defence Production (DDP)</strong>, Ministry of Defence, based on Standard Operating Procedures (SOP). Unlike general SCOMET items handled by DGFT, Category 6 items require specific clearance from the DDP. Unauthorized export is a violation of the WMD Act and FTDR Act.
                </p>
            </div>
        </div>
    </section>

    <section id="documents" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* LOGO / ICON */}
              <ShieldCheck className="w-10 h-10 text-brand-400" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Documentation Rigor
              </h2>
            </div>

            <p className="text-slate-300 mb-8 leading-relaxed">
              The success of a Defence Export License application hinges on the
              authenticity of the End User.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-400 mt-1" />
                <div>
                  <strong className="block text-white">
                    End User Certificate (EUC)
                  </strong>
                  <span className="text-sm text-slate-400">
                    Must be signed by the foreign government or authorized entity.
                    Specific format mandatory.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FileCode className="w-5 h-5 text-brand-400 mt-1" />
                <div>
                  <strong className="block text-white">
                    Technical Specifications
                  </strong>
                  <span className="text-sm text-slate-400">
                    Detailed drawings, brochures, and chemical composition (if
                    applicable).
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShoppingCart className="w-5 h-5 text-brand-400 mt-1" />
                <div>
                  <strong className="block text-white">
                    Purchase Order / Contract
                  </strong>
                  <span className="text-sm text-slate-400">
                    Valid contract with the foreign buyer indicating value and
                    quantity.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IdCard className="w-5 h-5 text-brand-400 mt-1" />
                <div>
                  <strong className="block text-white">
                    Consignee Profile
                  </strong>
                  <span className="text-sm text-slate-400">
                    Background check of the intermediary and ultimate end user.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-defense-800 rounded-xl p-8 shadow-2xl border border-defense-700">
            <h3 className="text-xl font-bold mb-4 text-white border-b border-defense-600 pb-4">
              Domestic Procurement
            </h3>

            <p className="text-sm text-slate-300 mb-6">
              Are you supplying to Indian Defence (MoD/DRDO)? We assist with:
            </p>

            <ul className="space-y-2 text-sm text-slate-400 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Custom Duty Exemption Certificates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Industrial License (IL) from DPIIT
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Offset Obligation Management
              </li>
            </ul>

            <a
              href="#contact"
              className="block text-center bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-700 transition"
            >
              Consult on Offsets
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Approval Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-defense-900 mt-2">
            Authorization Process
          </h2>
        </div>

        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* STEP 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-defense-100 rounded-full flex items-center justify-center text-2xl font-bold text-defense-900 mx-auto mb-4 border-4 border-defense-300 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Classification</h3>
            <p className="text-sm text-slate-500">
              Self-certify item under Munitions List Categories.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-defense-100 rounded-full flex items-center justify-center text-2xl font-bold text-defense-900 mx-auto mb-4 border-4 border-defense-300 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Application</h3>
            <p className="text-sm text-slate-500">
              File online on DDP / SCOMET portal with EUC.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-defense-100 rounded-full flex items-center justify-center text-2xl font-bold text-defense-900 mx-auto mb-4 border-4 border-defense-300 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">IMWG</h3>
            <p className="text-sm text-slate-500">
              Review by Inter-Ministerial Working Group (MEA, MoD, DRDO).
            </p>
          </div>

          {/* STEP 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-defense-100 rounded-full flex items-center justify-center text-2xl font-bold text-defense-900 mx-auto mb-4 border-4 border-defense-300 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Verification</h3>
            <p className="text-sm text-slate-500">
              Verification of End User credibility via diplomatic channels.
            </p>
          </div>

          {/* STEP 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <Stamp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">License</h3>
            <p className="text-sm text-slate-500">
              Authorization issued. Report shipments quarterly.
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
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">SCOMET Licensing</a></li>
                    <li><a href="#" class="hover:text-white transition">Defence Offset</a></li>
                    <li><a href="#" class="hover:text-white transition">Industrial License</a></li>
                    <li><a href="#" class="hover:text-white transition">Import Compliance</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Munitions List PDF</a></li>
                    <li><a href="#" class="hover:text-white transition">EUC Guidelines</a></li>
                    <li><a href="#" class="hover:text-white transition">DDP SOPs</a></li>
                    <li><a href="#" class="hover:text-white transition">Wassenaar Arrangement</a></li>
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

export default CloudDeskDefenceEXIM;