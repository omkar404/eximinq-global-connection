// import React from "react";
// import { ShieldCheck, FileCheck, AlertOctagon, Calendar, deadlines } from "lucide-react";

// const HeroCompliance = ({ setShowModal }) => {
//   return (
//     <header className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">

//       {/* Background Icon */}
//       <ShieldCheck size={600} className="absolute opacity-10 -right-20 -top-20" />

//       <div className="container mx-auto px-4 max-w-6xl relative z-10">

//         <div className="flex flex-col md:flex-row gap-12 items-center">

//           {/* Left */}
//           <div className="md:w-3/5">

//             <div className="inline-flex px-3 py-1 bg-red-900/50 border border-red-500/40 rounded-full text-xs uppercase mb-4">
//               <AlertOctagon size={14} className="mr-2" /> Risk Mitigation Protocol
//             </div>

//             <h1 className="text-5xl font-bold leading-tight">
//               Total Trade <span className="text-teal-400">Compliance</span>
//             </h1>

//             <p className="text-gray-400 mt-6 text-lg max-w-lg">
//               From BIS to RBI EDPMS — stay 100% compliant and avoid penalties.
//             </p>

//             <div className="flex gap-4 mt-8">
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="bg-teal-600 px-8 py-3 font-bold rounded-lg"
//               >
//                 <FileCheck size={20} className="inline-block mr-2" />
//                 Enroll Now
//               </button>

//               <button className="px-8 py-3 border border-white/20 rounded-lg">
//                 View Calendar
//               </button>
//             </div>

//           </div>

//           {/* Calendar Widget */}
//               <div className="w-full">
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
//           <h3 className="font-bold flex items-center text-white">
//             <Calendar className="mr-2 text-teal-400" /> Upcoming Due Dates
//           </h3>
//           <span className="text-xs text-gray-300">Dec 2025</span>
//         </div>

//         {/* Deadline List */}
//         <div className="space-y-4">
//           {deadlines.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex items-center bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-teal-500/50 transition"
//             >
//               {/* Date Block */}
//               <div className="bg-gray-700 text-teal-300 font-bold text-xs p-2 rounded text-center min-w-[50px]">
//                 {item.date.split(" ")[0]} <br /> {item.date.split(" ")[1]}
//               </div>

//               {/* Details */}
//               <div className="ml-4">
//                 <div className="font-semibold text-sm text-gray-200">
//                   {item.event}
//                 </div>
//                 <div className="text-xs text-gray-500 uppercase">
//                   {item.type}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Link */}
//         <div className="mt-4 text-center">
//           <a
//             href="#"
//             className="text-xs text-teal-400 hover:text-teal-300 font-medium"
//           >
//             Download Full Calendar
//           </a>
//         </div>
//       </div>
//     </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default HeroCompliance;


import React from "react";
import { AlertOctagon, FileCheck, ShieldCheck, Calendar } from "lucide-react";

const HeroCompliance = ({ setShowModal, upcomingDeadlines = [] }) => {
  return (
    <header className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <ShieldCheck size={600} className="text-gray-500 absolute -top-20 -right-20" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="md:w-3/5 text-center md:text-left">

            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-red-900/50 border border-red-500/30 text-red-200 text-xs font-bold uppercase tracking-wider">
              <AlertOctagon size={14} className="mr-2" /> Risk Mitigation Protocol
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Total Trade{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                Compliance
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Don't let regulatory gaps stall your shipments. From BIS & EPR to RBI reconciliations, we manage every mandatory compliance for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition shadow-lg flex items-center justify-center"
              >
                <FileCheck className="mr-2" size={20} />
                Enroll Now
              </button>

              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition border border-white/20 backdrop-blur-sm">
                View Calendar
              </button>
            </div>
          </div>

          {/* RIGHT — CALENDAR */}
          <div className="md:w-2/5 w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">

              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <h3 className="font-bold flex items-center">
                  <Calendar className="mr-2 text-teal-400" /> Upcoming Due Dates
                </h3>
                <span className="text-xs text-gray-400">Dec 2025</span>
              </div>

              <div className="space-y-4">
                {upcomingDeadlines.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-teal-500/50 transition"
                  >
                    <div className="bg-gray-700 text-teal-300 font-bold text-xs p-2 rounded text-center min-w-[50px]">
                      {item.date.split(" ")[0]} <br /> {item.date.split(" ")[1]}
                    </div>

                    <div className="ml-4">
                      <div className="font-semibold text-sm text-gray-200">{item.event}</div>
                      <div className="text-xs text-gray-500 uppercase">{item.type}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-teal-400 hover:text-teal-300 font-medium">
                  Download Full Calendar
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeroCompliance;

