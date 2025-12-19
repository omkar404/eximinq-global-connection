// import { useState } from "react";

// const QuickForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     workers: "10 or more (with Power)",
//     state: "",
//     mobile: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.state || !form.mobile) return;

//     onSubmit?.({
//       service: "Factory License Applicability",
//       ...form,
//     });

//     // optional reset
//     setForm({
//       workers: "10 or more (with Power)",
//       state: "",
//       mobile: "",
//     });
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8 border border-slate-200">
//       <h3 className="text-2xl font-bold text-industrial-900 mb-2">
//         Check Applicability
//       </h3>
//       <p className="text-slate-500 mb-6 text-sm">
//         Do you need a Factory License?
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Worker Count */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Worker Count
//           </label>
//           <select
//             name="workers"
//             value={form.workers}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option>10 or more (with Power)</option>
//             <option>20 or more (without Power)</option>
//             <option>Less than 10 (Not Applicable)</option>
//           </select>
//         </div>

//         {/* State */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             State / Location
//           </label>
//           <input
//             type="text"
//             name="state"
//             value={form.state}
//             onChange={handleChange}
//             placeholder="e.g. Maharashtra / Gujarat"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Mobile */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             name="mobile"
//             value={form.mobile}
//             onChange={handleChange}
//             placeholder="+91 74000 96950"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Verify Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;


import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    companyType: "Manufacturer Exporter",
    aeoStatus: "No AEO Status",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mobile) return;

    onSubmit?.(form);

    // fallback behavior (same intent as your alert)
    alert("We will check your IEC status and revert.");

    setForm({
      companyType: "Manufacturer Exporter",
      aeoStatus: "No AEO Status",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-logistics-900 mb-2">
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Can you self-seal your cargo?
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Type
          </label>
          <select
            name="companyType"
            value={form.companyType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>Manufacturer Exporter</option>
            <option>Merchant Exporter</option>
            <option>Warehouse / 3PL</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            AEO Status
          </label>
          <select
            name="aeoStatus"
            value={form.aeoStatus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>No AEO Status</option>
            <option>AEO T1 / T2 / T3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Verify Eligibility
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
