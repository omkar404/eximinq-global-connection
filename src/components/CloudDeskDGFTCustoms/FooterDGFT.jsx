import React from "react";
import { Phone, Mail } from "lucide-react";

const FooterDGFT = ({ setShowEnrollModal }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 mt-auto"> 
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* BRAND */}
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

        {/* QUICK LINKS */}
        <div>
          <h5 className="text-white font-bold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">DGFT Public Notices</a></li>
            <li><a href="#" className="hover:text-teal-400">Customs Circulars</a></li>
            <li><a href="#" className="hover:text-teal-400">Daily Exchange Rates</a></li>
          </ul>
        </div>

        {/* PORTAL LINKS */}
        <div>
          <h5 className="text-white font-bold mb-4">Portal Login</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">DGFT Portal</a></li>
            <li><a href="#" className="hover:text-teal-400">ICEGATE Portal</a></li>
            <li><a href="#" className="hover:text-teal-400">SEZ Online</a></li>
          </ul>
        </div>

        {/* SUPPORT CTA */}
        <div>
          <h5 className="text-white font-bold mb-4">Support</h5>

          <button
            onClick={() => setShowEnrollModal({ open: true, type: "certificate_of_origin_enroll" })}
            className="w-full px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded 
                       hover:bg-teal-500 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EXIMINQ CloudDesk. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterDGFT;
