import React from "react";
import { ClipboardList, CheckCircle } from "lucide-react";

const DocsChecklist = ({ activeTab }) => {
  const docChecklist = {
    DGFT: [
      "IEC Copy",
      "Valid RCMC",
      "Digital Signature (DSC)",
      "Export Promotion Copy of SB",
      "BRC / e-BRC",
    ],
    Customs: [
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading / AWB",
      "Certificate of Origin",
      "Insurance Certificate",
    ],
  };

  const docs = docChecklist[activeTab] || [];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center">
        <ClipboardList
          className={`mr-2 ${
            activeTab === "DGFT" ? "text-teal-600" : "text-indigo-600"
          }`}
        />
        Mandatory Docs
      </h3>

      <p className="text-xs text-gray-500 mb-4">
        Common documents required for {activeTab} submissions:
      </p>

      <ul className="space-y-2">
        {docs.map((doc, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-600">
            <CheckCircle
              size={14}
              className={`mr-2 mt-0.5 ${
                activeTab === "DGFT" ? "text-teal-500" : "text-indigo-500"
              }`}
            />
            {doc}
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <a href="#" className="text-xs font-bold text-blue-600 hover:underline">
          Download Templates
        </a>
      </div>
    </div>
  );
};

export default DocsChecklist;
