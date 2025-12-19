import React from "react";
import { Phone, Mail } from "lucide-react";

const FooterCOO = ({ setShowModal }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            EXIMINQ <span className="text-teal-500">CloudDesk</span>
          </h4>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm font-medium text-teal-400">
              <Phone size={16} className="mr-2" /> +917400096950
            </div>
            <div className="flex items-center text-sm font-medium text-teal-400">
              <Mail size={16} className="mr-2" /> clouddesk@eximinq.in
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">DGFT Consultancy</a></li>
            <li><a href="#" className="hover:text-teal-400">Customs Clearance</a></li>
            <li><a href="#" className="hover:text-teal-400">COO Services</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="https://eximinq.in/tools/hs-code-finder" className="hover:text-teal-400">HSN Code Search</a></li>
            <li><a href="https://eximinq.in/tools/duty-calculator-finder" className="hover:text-teal-400">Duty Calculator</a></li>
            <li><a href="#" className="hover:text-teal-400">FTA Database</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Support</h5>
          <button
            onClick={() => setShowModal(true)}
            className="w-full px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded hover:bg-teal-500 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EXIMINQ CloudDesk. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterCOO;
