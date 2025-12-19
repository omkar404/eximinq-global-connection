// import React from "react";
// import { ShieldCheck, Ship, TrendingUp, Search, FileText, Users, ChevronRight } from "lucide-react";

// export const Sidebar = ({ sectors }) => {
//   return (
//     <div className="space-y-8">

//       {/* WHY CLOUDDESK CARD */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h3 className="text-lg font-bold text-gray-900 mb-4">Why CloudDesk?</h3>

//         <ul className="space-y-4">
//           <li className="flex items-start">
//             <div className="bg-teal-100 p-2 rounded-lg mr-3 text-teal-700">
//               <ShieldCheck size={20} />
//             </div>
//             <div>
//               <h4 className="font-semibold text-gray-800">DGFT Compliance</h4>
//               <p className="text-xs text-gray-500">Expert filing & license management.</p>
//             </div>
//           </li>

//           <li className="flex items-start">
//             <div className="bg-indigo-100 p-2 rounded-lg mr-3 text-indigo-700">
//               <Ship size={20} />
//             </div>
//             <div>
//               <h4 className="font-semibold text-gray-800">Logistics Support</h4>
//               <p className="text-xs text-gray-500">Coordination for CHAs & Freight.</p>
//             </div>
//           </li>

//           <li className="flex items-start">
//             <div className="bg-red-100 p-2 rounded-lg mr-3 text-red-700">
//               <TrendingUp size={20} />
//             </div>
//             <div>
//               <h4 className="font-semibold text-gray-800">Audit Ready</h4>
//               <p className="text-xs text-gray-500">Document vault & risk assessment.</p>
//             </div>
//           </li>
//         </ul>

//         <button
//           className="w-full mt-6 py-3 bg-gray-900 text-white font-bold 
//           rounded-lg hover:bg-gray-800 transition"
//         >
//           Enroll Now
//         </button>
//       </div>

//       {/* INDUSTRIES SERVED */}
//       <div>
//         <h3 className="text-lg font-bold text-gray-900 mb-4">Industries Served</h3>

//         <div className="grid grid-cols-2 gap-2">
//           {sectors.map((sector, idx) => (
//             <div
//               key={idx}
//               className="text-xs font-medium text-gray-600 bg-white border 
//               border-gray-200 p-3 rounded hover:border-indigo-500 
//               hover:text-indigo-600 transition text-center truncate cursor-pointer"
//             >
//               {sector}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* COMPLIANCE TOOLS */}
//       <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
//         <h3 className="text-lg font-bold text-indigo-900 mb-4">Compliance Tools</h3>

//         <div className="space-y-2">
//           <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg 
//           text-sm font-medium text-gray-700 hover:shadow-sm transition">
//             <span className="flex items-center">
//               <Search size={16} className="mr-2 text-indigo-500" />
//               HSN Code Finder
//             </span>
//             <ChevronRight size={14} className="text-gray-400" />
//           </button>

//           <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg 
//           text-sm font-medium text-gray-700 hover:shadow-sm transition">
//             <span className="flex items-center">
//               <FileText size={16} className="mr-2 text-indigo-500" />
//               Duty Calculator
//             </span>
//             <ChevronRight size={14} className="text-gray-400" />
//           </button>

//           <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg 
//           text-sm font-medium text-gray-700 hover:shadow-sm transition">
//             <span className="flex items-center">
//               <Users size={16} className="mr-2 text-indigo-500" />
//               EPCG Status Check
//             </span>
//             <ChevronRight size={14} className="text-gray-400" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


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

export const Sidebar = ({ sectors = [], onEnrollClick }) => {
  return (
    <div className="space-y-8">

      {/* WHY CLOUDDESK CARD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Why CloudDesk?
        </h3>

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
          onClick={onEnrollClick}
          className="w-full mt-6 py-3 bg-gray-900 text-white font-bold 
          rounded-lg hover:bg-gray-800 transition"
        >
          Enroll Now
        </button>
      </div>

      {/* INDUSTRIES SERVED */}
      {/* <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Industries Served
        </h3>

        <div className="max-h-48 overflow-y-auto pr-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className="text-xs font-medium text-gray-600 bg-white border 
                border-gray-200 p-3 rounded hover:border-indigo-500 
                hover:text-indigo-600 transition text-center truncate cursor-pointer"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* COMPLIANCE TOOLS */}
      {/* <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
        <h3 className="text-lg font-bold text-indigo-900 mb-4">
          Compliance Tools
        </h3>

        <div className="space-y-2 text-sm">
          <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg 
          text-gray-700 hover:shadow-sm hover:bg-indigo-50 transition">
            <span className="flex items-center">
              <Search size={16} className="mr-2 text-indigo-500" />
              HSN Code Finder
            </span>
            <ChevronRight size={14} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg 
          text-gray-700 hover:shadow-sm hover:bg-indigo-50 transition">
            <span className="flex items-center">
              <FileText size={16} className="mr-2 text-indigo-500" />
              Duty Calculator
            </span>
            <ChevronRight size={14} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg 
          text-gray-700 hover:shadow-sm hover:bg-indigo-50 transition">
            <span className="flex items-center">
              <Users size={16} className="mr-2 text-indigo-500" />
              EPCG Status Check
            </span>
            <ChevronRight size={14} className="text-gray-400" />
          </button>
        </div>
      </div> */}
    </div>
  );
};
