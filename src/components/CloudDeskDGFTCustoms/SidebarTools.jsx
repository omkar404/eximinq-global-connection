import React from "react";
import { Calculator, Search, FileText, Globe, ChevronRight } from "lucide-react";

const SidebarTools = () => {
  const tools = [
    { label: "Verify IEC Details", icon: <Search size={16} />, color: "text-teal-400" },
    { label: "Import Duty Calculator", icon: <Calculator size={16} />, color: "text-indigo-400" },
    { label: "HSN Code Finder", icon: <FileText size={16} />, color: "text-blue-400" },
    { label: "Exchange Rates", icon: <Globe size={16} />, color: "text-green-400" },
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6 text-white shadow-lg">
      <h3 className="font-bold text-lg mb-4 flex items-center">
        <Calculator className="mr-2 text-teal-400" /> Quick Tools
      </h3>

      <div className="space-y-3">
        {tools.map((tool, idx) => (
          <button
            key={idx}
            className="w-full text-left px-4 py-3 bg-gray-700 rounded-lg text-sm 
                       hover:bg-gray-600 transition flex justify-between items-center group"
          >
            <span className="flex items-center">
              <span className={`${tool.color} mr-2`}>{tool.icon}</span>
              {tool.label}
            </span>
            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarTools;
