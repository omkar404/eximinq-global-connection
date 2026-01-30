// import { useState } from "react";

// const QuickForm = () => {
//   const [mode, setMode] = useState("import");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       "We have received your rate request. Our team will email you the best quote shortly."
//     );
//   };

//   return (
//     <div
//       id="quote"
//       className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8"
//     >
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-2xl font-bold text-brand-900">
//           Get Shipping Quote
//         </h3>

//         <div className="flex gap-2">
//           <button
//             className={`text-xs px-2 py-1 rounded font-bold ${
//               mode === "import"
//                 ? "bg-brand-100 text-brand-700"
//                 : "bg-slate-100 text-slate-600"
//             }`}
//             onClick={() => setMode("import")}
//           >
//             Import
//           </button>

//           <button
//             className={`text-xs px-2 py-1 rounded font-bold ${
//               mode === "export"
//                 ? "bg-brand-100 text-brand-700"
//                 : "bg-slate-100 text-slate-600"
//             }`}
//             onClick={() => setMode("export")}
//           >
//             Export
//           </button>
//         </div>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit}>
//         {/* Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
//               Origin Port
//             </label>
//             <input
//               type="text"
//               className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
//               placeholder="e.g. Shanghai"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
//               Destination Port
//             </label>
//             <input
//               type="text"
//               className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
//               placeholder="e.g. Nhava Sheva"
//             />
//           </div>
//         </div>

//         {/* Mode Type */}
//         <div className="mb-4">
//           <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
//             Mode & Type
//           </label>
//           <select className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500">
//             <option>Sea - FCL (Full Container)</option>
//             <option>Sea - LCL (Less than Container)</option>
//             <option>Air Freight</option>
//             <option>Door-to-Door</option>
//           </select>
//         </div>

//         {/* Contact */}
//         <div className="mb-6">
//           <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
//             Email / Phone
//           </label>
//           <input
//             type="text"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
//             placeholder="Contact details"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition shadow-md flex justify-center items-center gap-2"
//         >
//           Get Best Rates <i className="fas fa-arrow-right"></i>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";

const QuickForm = () => {
  const [mode, setMode] = useState("import");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "We have received your rate request. Our team will contact you shortly."
    );
  };

  return (
    <div
      id="quote"
      className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-brand-900">
          Get Shipping Quote
        </h3>

        <div className="flex gap-2">
          <button
            type="button"
            className={`text-xs px-3 py-1 rounded font-bold ${
              mode === "import"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
            onClick={() => setMode("import")}
          >
            Import
          </button>

          <button
            type="button"
            className={`text-xs px-3 py-1 rounded font-bold ${
              mode === "export"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
            onClick={() => setMode("export")}
          >
            Export
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Ports */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Origin Port
            </label>
            <input
              type="text"
              placeholder="e.g. Shanghai"
              required
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Destination Port
            </label>
            <input
              type="text"
              placeholder="e.g. Nhava Sheva"
              required
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Mode Type */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
            Mode & Type
          </label>
          <select
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Mode</option>
            <option>Sea - FCL</option>
            <option>Sea - LCL</option>
            <option>Air Freight</option>
            <option>Door-to-Door</option>
          </select>
        </div>

        {/* EXPORT ONLY FIELDS */}
        {mode === "export" && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Proposed Shipment Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  CIF Value (INR)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2500000"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Quantity (Metric Tons)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 12.5"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Description of Goods
                </label>
                <input
                  type="text"
                  placeholder="e.g. Iron Ore Fines"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          </>
        )}

        {/* CONTACT (SEPARATE FIELDS – CORRECT) */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="official@company.com"
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition shadow-md"
        >
          Get Best Rates
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
