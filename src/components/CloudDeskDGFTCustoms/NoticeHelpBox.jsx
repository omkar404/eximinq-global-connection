import React from "react";
import { AlertTriangle } from "lucide-react";

const NoticeHelpBox = ({ activeTab, openModal }) => {
  const isDGFT = activeTab === "DGFT";

  return (
    <div
      className={`rounded-xl p-6 text-center ${
        isDGFT
          ? "bg-teal-50 border border-teal-100"
          : "bg-indigo-50 border border-indigo-100"
      }`}
    >
      <AlertTriangle
        className={`mx-auto mb-2 ${
          isDGFT ? "text-teal-500" : "text-indigo-500"
        }`}
        size={32}
      />

      <h4 className="font-bold text-gray-800 mb-1">Notice Received?</h4>
      <p className="text-xs text-gray-500 mb-4">
        Received a demand notice or SCN from {activeTab}?  
        We draft legal replies for you.
      </p>

      <button
        onClick={openModal}
        className="w-full py-2 bg-white border border-gray-300 rounded 
                 text-sm font-bold text-gray-700 hover:bg-gray-50 transition"
      >
        Upload Notice
      </button>
    </div>
  );
};

export default NoticeHelpBox;
