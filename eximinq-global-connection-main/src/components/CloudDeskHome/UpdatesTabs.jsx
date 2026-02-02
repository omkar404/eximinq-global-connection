// import React from "react";

// export const UpdatesTabs = ({ activeTab, setActiveTab }) => {
//   const tabs = [
//     { id: "dgft", label: "DGFT Notifications" },
//     { id: "customs", label: "Customs Circulars" },
//     { id: "logistics", label: "Logistics Alerts" },
//     { id: "compliance", label: "Compliance Services" },
//   ];

//   return (
//     <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
//       {tabs.map((tab) => {
//         const isActive = tab.id === activeTab;

//         return (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`
//               px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border
//               ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-800 border-indigo-200 shadow-sm"
//                   : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
//               }
//             `}
//           >
//             {tab.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

import React from "react";

export const UpdatesTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "dgft", label: "DGFT Notifications" },
    { id: "customs", label: "Customs Circulars" },
    { id: "logistics", label: "Logistics Alerts" },
    { id: "compliance", label: "Compliance Services" },
  ];

  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all
              ${
                isActive
                  ? "bg-indigo-100 text-indigo-800 border-indigo-300 shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

