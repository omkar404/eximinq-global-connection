import React from "react";
import {
  Calculator,
  Search,
  FileText,
  Globe,
  ChevronRight,
} from "lucide-react";

const SidebarTools = () => {
  const tools = [
    {
      label: "Verify IEC Details",
      icon: <Search size={16} />,
      color: "text-teal-400",
    },
    {
      label: "Import Duty Calculator",
      icon: <Calculator size={16} />,
      color: "text-indigo-400",
    },
    {
      label: "HSN Code Finder",
      icon: <FileText size={16} />,
      color: "text-blue-400",
    },
    {
      label: "Exchange Rates",
      icon: <Globe size={16} />,
      color: "text-green-400",
    },
  ];

  const TOOL_LINKS = {
    "Verify IEC Details": "https://eximinq.in/services/iec-registration",
    "Import Duty Calculator": "https://eximinq.in/tools/duty-calculator-finder",
    "HSN Code Finder": "https://eximinq.in/tools/hs-code-finder",
    "Exchange Rates": "https://eximinq.in/foreign-trade-policy/exchange-rates",
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 text-white shadow-lg">
      <h3 className="font-bold text-lg mb-4 flex items-center">
        <Calculator className="mr-2 text-teal-400" /> Quick Tools
      </h3>

      <div className="space-y-3">
        {tools.map((tool, idx) => (
          <a
            key={idx}
            href={TOOL_LINKS[tool.label]}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left px-4 py-3 bg-gray-700 rounded-lg text-sm 
                 hover:bg-gray-600 transition flex justify-between items-center group"
          >
            <span className="flex items-center">
              <span className={`${tool.color} mr-2`}>{tool.icon}</span>
              {tool.label}
            </span>

            <ChevronRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarTools;
