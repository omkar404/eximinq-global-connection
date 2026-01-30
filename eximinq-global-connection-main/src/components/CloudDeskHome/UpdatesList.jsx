// import React from "react";
// import { FileText, Headphones, ChevronRight } from "lucide-react";

// export const UpdatesList = ({ updates }) => {
//   return (
//     <div className="space-y-4">
//       {updates.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm 
//           hover:shadow-md transition group cursor-pointer"
//         >
//           <div className="flex justify-between items-start">
//             <div>
//               {/* Sector Badge */}
//               <span className="inline-block px-2 py-1 bg-teal-50 text-teal-700 
//               text-xs font-bold rounded mb-2">
//                 {item.sector || "Compliance"}
//               </span>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-gray-800 
//               group-hover:text-indigo-700 transition">
//                 {item.title}
//               </h3>

//               {/* Meta Details */}
//               <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
//                 <div className="flex items-center">
//                   <FileText size={14} className="mr-1 text-gray-400" />
//                   {item.country}
//                 </div>

//                 <div className="flex items-center text-indigo-600 font-medium">
//                   <Headphones size={14} className="mr-1" />
//                   {item.date}
//                 </div>
//               </div>
//             </div>

//             {/* Enquire Button */}
//             <button className="hidden sm:flex items-center px-4 py-2 bg-gray-50 
//             text-gray-700 font-medium rounded-lg border border-gray-200 
//             hover:bg-indigo-50 hover:text-indigo-700 transition">
//               Enquire <ChevronRight size={16} className="ml-1" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


import React from "react";
import { FileText, Headphones, ChevronRight } from "lucide-react";

export const UpdatesList = ({ updates }) => {
  return (
    <div className="space-y-4">
      {updates.map((item) => (
        <div
          key={item.id}
          className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm 
          hover:shadow-md transition cursor-pointer group"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              {/* Sector Badge */}
              <span className="inline-block px-2 py-1 bg-teal-50 text-teal-700 
              text-xs font-bold rounded mb-2">
                {item.sector || "Compliance"}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-700 transition">
                {item.title}
              </h3>

              {/* Meta Details */}
              <div className="flex items-center flex-wrap gap-4 mt-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <FileText size={14} className="mr-1 text-gray-400" />
                  {item.country}
                </div>

                <div className="flex items-center text-indigo-600 font-medium">
                  <Headphones size={14} className="mr-1" />
                  {item.date}
                </div>
              </div>
            </div>

            {/* Enquire Button */}
            <button className="
              hidden sm:flex items-center px-4 py-2 bg-gray-50 
              text-gray-700 font-medium rounded-lg border border-gray-200 
              hover:bg-indigo-50 hover:text-indigo-700 transition">
              Enquire <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
