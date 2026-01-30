// import { Truck } from "lucide-react";

// const QuickForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("We have received your transport request.");
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-2">
//           <Truck className="text-brand-600" size={28} />
//           Transport Enquiry
//         </h3>
//       </div>

//       <p className="text-slate-500 mb-6 text-sm">
//         Instant quotes for Full Truck Load (FTL) & Containers.
//       </p>

//       {/* Form */}
//       <form onSubmit={handleSubmit}>
//         {/* Row 1 */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
//               Pick-up City/Port
//             </label>
//             <input
//               type="text"
//               className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//               placeholder="e.g. Nhava Sheva"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
//               Port Location
//             </label>
//             <input
//               type="text"
//               className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//               placeholder="e.g. Pune Factory"
//             />
//           </div>
//         </div>

//         {/* Vehicle Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Vehicle Type
//           </label>
//           <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
//             <option>40ft High Bed Trailer</option>
//             <option>20ft Container Trailer</option>
//             <option>Low Bed (ODC Cargo)</option>
//             <option>Closed Body Truck (LCL)</option>
//           </select>
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//             placeholder="+91 74000 96950"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Check Availability
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;


import { useState } from "react";
import { Truck } from "lucide-react";

const QuickForm = () => {
  const [type, setType] = useState("pickup"); // pickup | drop

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We have received your transport request.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-2">
          <Truck className="text-brand-600" size={28} />
          Transport Enquiry
        </h3>

        {/* Pickup / Drop Toggle */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setType("pickup")}
            className={`text-xs px-3 py-1 rounded font-bold ${
              type === "pickup"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Pickup
          </button>

          <button
            type="button"
            onClick={() => setType("drop")}
            className={`text-xs px-3 py-1 rounded font-bold ${
              type === "drop"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Drop
          </button>
        </div>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Instant quotes for Full Truck Load (FTL) & Containers.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Locations */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
              {type === "pickup" ? "Pick-up Location" : "Drop Location"}
            </label>
            <input
              type="text"
              required
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
              placeholder={
                type === "pickup"
                  ? "e.g. Factory / Warehouse"
                  : "e.g. Customer Location"
              }
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
              Port / Yard / ICD
            </label>
            <input
              type="text"
              required
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
              placeholder="e.g. Nhava Sheva / ICD Tughlakabad"
            />
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Vehicle Type
          </label>
          <select
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Vehicle</option>
            <option>40ft High Bed Trailer</option>
            <option>20ft Container Trailer</option>
            <option>Low Bed (ODC Cargo)</option>
            <option>Closed Body Truck (LCL)</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
