// import TopBar from "../components/CloudDeskDigitalSignatures/TopBar";
import Navbar from "../components/CloudDeskDigitalSignatures/Navbar";
import Hero from "../components/CloudDeskDigitalSignatures/Hero";
import Fees from "../components/CloudDeskDigitalSignatures/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  Globe,
  Ship,
  Info,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";

const CloudDeskDigitalSignatures = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              One Key, Multiple Uses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Specialized DSC Solutions
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* DGFT DSC */}
            <div
              id="dgft"
              className="bg-white rounded-xl shadow-lg border-t-8 border-brand-600 overflow-hidden group hover:-translate-y-2 transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-3xl">
                    <Globe size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      DSC for DGFT
                    </h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      Previously Class 2
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Specifically encrypted for the DGFT portal. Essential for all
                  Foreign Trade Policy related applications.
                </p>

                <div className="bg-slate-50 p-4 rounded text-sm text-slate-800 border border-slate-200">
                  <strong>Mandatory For:</strong>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                    <li>New IEC Application / Modification</li>
                    <li>Advance Authorisation / EPCG License</li>
                    <li>RoDTEP / MEIS Scrip Applications</li>
                    <li>RCMC Registration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ICEGATE DSC */}
            <div
              id="icegate"
              className="bg-white rounded-xl shadow-lg border-t-8 border-accent-500 overflow-hidden group hover:-translate-y-2 transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl">
                    <Ship size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      DSC for ICEGATE
                    </h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      Class 3 (Signing + Encrypt)
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Required for all Customs related activities. Must be
                  registered on the ICEGATE website before use.
                </p>

                <div className="bg-slate-50 p-4 rounded text-sm text-slate-800 border border-slate-200">
                  <strong>Mandatory For:</strong>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                    <li>e-Sanchit Document Upload</li>
                    <li>AD Code Registration</li>
                    <li>IGST Refund Scroll verification</li>
                    <li>Bill of Entry / Shipping Bill signing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center gap-3 max-w-3xl mx-auto">
            <Info className="text-blue-600" size={22} />
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Effective Jan 2021, Class 2 DSCs are
              discontinued. All new issuances are <strong>Class 3</strong>,
              which covers both DGFT and ICEGATE requirements with higher
              security.
            </p>
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
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition">
                    DGFT DSC
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    ICEGATE DSC
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    e-Tender DSC
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    DSC Renewal
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Driver Download
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Java Configuration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Signer Utility
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Troubleshooting
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

export default CloudDeskDigitalSignatures;
