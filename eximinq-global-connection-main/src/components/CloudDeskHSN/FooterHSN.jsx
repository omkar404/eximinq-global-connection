import React from "react";
import { Mail, Phone } from "lucide-react";

const FooterHSN = ({ setShowModal }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            EXIMINQ <span className="text-teal-500">CloudDesk</span>
          </h4>

          <p className="text-sm text-gray-400 mb-4">
            Your trusted partner for DGFT, Customs, Compliance & Logistics.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm font-medium text-teal-400">
              <Phone size={16} className="mr-2" /> +917400096950
            </div>
            <div className="flex items-center text-sm font-medium text-teal-400">
              <Mail size={16} className="mr-2" /> clouddesk@eximinq.in
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-white font-bold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-teal-400 transition">DGFT Consultancy</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Customs Clearance</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Compliance Audit</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Logistics Support</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-bold mb-4">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://eximinq.in/tools/hs-code-finder" className="hover:text-teal-400 transition">HSN Code Search</a>
            </li>
            <li>
              <a href="https://eximinq.in/tools/duty-calculator-finder" className="hover:text-teal-400 transition">Duty Calculator</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">DGFT Public Notices</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">Export Incentives</a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h5 className="text-white font-bold mb-4">Need Help?</h5>

          <p className="text-sm text-gray-400 mb-3">
            Our experts are available 24/7.
          </p>

          <button
            onClick={setShowModal}
            className="w-full px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded 
                       hover:bg-teal-500 transition shadow-md"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EXIMINQ CloudDesk. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterHSN;
