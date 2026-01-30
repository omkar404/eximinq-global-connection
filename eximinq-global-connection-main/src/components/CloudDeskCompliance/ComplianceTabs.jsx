import React from "react";

const ComplianceTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Import", "Export", "Allied"];

  return (
    <div className="bg-white border-b sticky top-20 z-40 shadow-sm">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 text-sm font-bold border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab} Compliance
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceTabs;
