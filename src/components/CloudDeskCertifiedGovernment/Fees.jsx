// import { Check } from "lucide-react";

// const Fees = () => {
//   return (
//     <section id="contact" className="py-20 bg-industrial-50">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-industrial-900 mb-8">
//           Professional Services
//         </h2>

//         <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
//           {/* Header */}
//           <div className="bg-brand-800 text-white py-4">
//             <h3 className="text-xl font-bold">Factory Licensing</h3>
//             <p className="text-sm opacity-80">Full Consultancy</p>
//           </div>

//           {/* Body */}
//           <div className="p-8">
//             <div className="text-3xl font-bold text-industrial-900 mb-2">
//               Request Quote
//             </div>
//             <p className="text-slate-500 text-sm mb-6">
//               Depends on Worker Count &amp; HP
//             </p>

//             <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
//               <li className="flex gap-2">
//                 <Check className="text-green-500 mt-0.5" size={18} />
//                 Plan Approval Drawings
//               </li>
//               <li className="flex gap-2">
//                 <Check className="text-green-500 mt-0.5" size={18} />
//                 Online Application Filing
//               </li>
//               <li className="flex gap-2">
//                 <Check className="text-green-500 mt-0.5" size={18} />
//                 Stability Certificate Arrangement
//               </li>
//               <li className="flex gap-2">
//                 <Check className="text-green-500 mt-0.5" size={18} />
//                 Liaison with Factory Inspector
//               </li>
//               <li className="flex gap-2">
//                 <Check className="text-green-500 mt-0.5" size={18} />
//                 Annual Return Support
//               </li>
//             </ul>

//             <a
//               href="#home"
//               className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
//             >
//               Get Estimate
//             </a>
//           </div>
//         </div>

//         <p className="text-sm text-slate-500 mt-6">
//           *Govt fees are based on HP and Manpower.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Fees;


import { Check } from "lucide-react";

const Fees = () => {
  return (
    <section id="contact" className="py-20 bg-industrial-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-logistics-900 mb-8">
          Professional Services
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-brand-800 text-white py-4">
            <h3 className="text-xl font-bold">Permission Liaison</h3>
            <p className="text-sm opacity-80">One-Time Registration</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-logistics-900 mb-2">
              Request Quote
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Per Factory Location
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Application Drafting
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Liaison with AC/DC Exports
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                Site Inspection Coordination
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                NOC Procurement from GST
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 mt-0.5" size={18} />
                EDI Registration Assistance
              </li>
            </ul>

            <a
              href="#home"
               className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
            >
              Start Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;

