import React from "react";
import {
  ShieldCheck,
  Ship,
  TrendingUp,
  Search,
  FileText,
  Users,
  ChevronRight,
} from "lucide-react";

export const Sidebar = ({ setShowEnrollModal }) => {
  return (
    <div className="space-y-8">
      {/* WHY CLOUDDESK CARD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Why CloudDesk?</h3>

        <ul className="space-y-4 text-sm">
          <li className="flex items-start">
            <div className="bg-teal-100 p-2 rounded-lg mr-3 text-teal-700">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">DGFT Compliance</h4>
              <p className="text-xs text-gray-500">
                Expert filing, license tracking & renewals.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-3 text-indigo-700">
              <Ship size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Logistics Support</h4>
              <p className="text-xs text-gray-500">
                Coordination with CHAs, freight & ports.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-red-100 p-2 rounded-lg mr-3 text-red-700">
              <TrendingUp size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Audit Ready</h4>
              <p className="text-xs text-gray-500">
                Document vault, risk checks & audit support.
              </p>
            </div>
          </li>
        </ul>

        <button
          // onClick={onEnrollClick}
          onClick={() =>
            setShowEnrollModal({ open: true, type: "home_enroll" })
          }
          className="w-full mt-6 py-3 bg-gray-900 text-white font-bold 
          rounded-lg hover:bg-gray-800 transition"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};
