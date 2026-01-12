import React from "react";
import { Phone, Mail } from "lucide-react";

export const FooterElectronics = ({ onEnrollClick }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            EXIMINQ <span className="text-teal-500">CloudDesk</span>
          </h4>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Your 24/7 dedicated Helpdesk for Importers, Exporters, CHA & Logistics.
            Simplifying DGFT, Customs & Compliance.
          </p>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center font-medium text-teal-400">
              <Phone size={16} className="mr-2" /> +917400096950
            </div>
            <div className="flex items-center font-medium text-teal-400">
              <Mail size={16} className="mr-2" /> clouddesk@eximinq.in
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <button
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center 
              hover:bg-teal-600 transition text-xs font-bold"
              aria-label="Visit Twitter"
            >
              X
            </button>
            <button
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center 
              hover:bg-indigo-600 transition text-xs font-bold"
              aria-label="Visit LinkedIn"
            >
              in
            </button>
            <button
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center 
              hover:bg-red-600 transition text-xs font-bold"
              aria-label="Visit Facebook"
            >
              fb
            </button>
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-white font-bold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">DGFT Consultancy</a></li>
            <li><a href="#" className="hover:text-teal-400">Customs Clearance Support</a></li>
            <li><a href="#" className="hover:text-teal-400">Logistics Coordination</a></li>
            <li><a href="#" className="hover:text-teal-400">Compliance Audit</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-bold mb-4">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://eximinq.in/tools/hs-code-finder"
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400"
              >
                HSN Code Search
              </a>
            </li>
            <li>
              <a
                href="https://eximinq.in/tools/duty-calculator-finder"
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400"
              >
                Duty Calculator
              </a>
            </li>
            <li><a href="#" className="hover:text-teal-400">Export Incentives</a></li>
            <li><a href="#" className="hover:text-teal-400">Public Notices</a></li>
          </ul>
        </div>

        {/* Support / CTA */}
        <div>
          <h5 className="text-white font-bold mb-4">Disclaimer Policy and Term </h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/disclaimer" className="hover:text-teal-400">Disclaimer</a></li>
            <li><a href="/privacy-policy" className="hover:text-teal-400">Privacy Policy</a></li>
            <li><a href="/privacy-policy" className="hover:text-teal-400">Terms & Conditions</a></li>
          </ul>

          <button
            onClick={onEnrollClick}
            className="w-full px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded 
            hover:bg-teal-500 transition flex items-center justify-center"
          >
            <Mail size={16} className="mr-2" />
            Enroll Now
          </button>
        </div>

      </div>

      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EXIMINQ CloudDesk. All Rights Reserved.
        <br />
        Disclaimer: Information provided is for guidance purposes only.
      </div>
    </footer>
  );
};
