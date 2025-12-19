import React from "react";
import { FileWarning, BookOpen, ChevronRight } from "lucide-react";

const ComplianceSidebar = ({ setShowModal }) => {
  return (
    <div className="space-y-6">

      {/* Penalty Widget */}
      <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-red-800 flex items-center mb-4">
          <FileWarning className="mr-2" /> Non-Compliance Cost
        </h3>

        <p className="text-xs text-red-600 mb-4">
          Operating without mandatory registration can lead to penalties up to 500% of goods value.
        </p>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">No IEC/RCMC</span>
            <span className="font-bold text-gray-800">₹10L - ₹5Cr</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">BIS Violation</span>
            <span className="font-bold text-gray-800">Seizure + Fine</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Open EDPMS</span>
            <span className="font-bold text-gray-800">Caution List</span>
          </div>
        </div>

        <button
          onClick={setShowModal}
          className="w-full mt-6 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition"
        >
          Enroll Now
        </button>
      </div>

      {/* Resources */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center">
          <BookOpen className="mr-2 text-teal-600" /> Regulations
        </h3>

        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-teal-600">
              <ChevronRight size={14} className="mr-2 text-gray-300" />
              BIS Product List
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-teal-600">
              <ChevronRight size={14} className="mr-2 text-gray-300" />
              EPR Targets 2025
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-teal-600">
              <ChevronRight size={14} className="mr-2 text-gray-300" />
              WPC Exemptions
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-teal-600">
              <ChevronRight size={14} className="mr-2 text-gray-300" />
              LMPC Rules
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ComplianceSidebar;
