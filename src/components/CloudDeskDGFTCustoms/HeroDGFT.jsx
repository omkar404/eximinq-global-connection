import React from "react";
import { FileText, Anchor } from "lucide-react";

const HeroDGFT = ({ activeTab, setActiveTab, setActiveSubCategory }) => {
  return (
    <header
      className={`pt-32 pb-24 px-4 relative overflow-hidden ${
        activeTab === "DGFT"
          ? "bg-gradient-to-br from-teal-50 via-white to-teal-100"
          : "bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
      }`}
    >
      {/* Background Icon Pattern */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        {activeTab === "DGFT" ? (
          <FileText size={380} />
        ) : (
          <Anchor size={380} />
        )}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        {/* Label Tag */}
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white border shadow-sm text-sm font-bold text-gray-600 uppercase tracking-wide">
          {activeTab === "DGFT"
            ? "Directorate General of Foreign Trade"
            : "Central Board of Indirect Taxes & Customs"}
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Detailed{" "}
          <span
            className={`underline decoration-4 ${
              activeTab === "DGFT"
                ? "decoration-teal-500 text-teal-700"
                : "decoration-indigo-500 text-indigo-700"
            }`}
          >
            {activeTab === "DGFT"
              ? "Licensing & Incentives"
              : "Clearance & Facilitation"}
          </span>
        </h1>

        {/* Sub text */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          {activeTab === "DGFT"
            ? "Expert management of IEC, Advance Authorisation, EPCG, and export incentives with 100% compliance assurance."
            : "24/7 Customs clearance support for Imports & Exports, including AEO certification, SVB proceedings, and IGST refunds."}
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center">
          <div className="bg-white p-1.5 rounded-full inline-flex relative shadow-lg border border-gray-100">
            {/* Sliding Active Background */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full shadow-md transition-all duration-300 ${
                activeTab === "DGFT"
                  ? "bg-teal-600 left-1.5"
                  : "bg-indigo-600 left-[calc(50%+3px)]"
              }`}
            ></div>

            {/* DGFT Button */}
            <button
              onClick={() => {
                setActiveTab("DGFT");
                setActiveSubCategory("All");
              }}
              className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-colors ${
                activeTab === "DGFT"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              DGFT View
            </button>

            {/* Customs Button */}
            <button
              onClick={() => {
                setActiveTab("Customs");
                setActiveSubCategory("All");
              }}
              className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-colors ${
                activeTab === "Customs"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Customs View
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroDGFT;
