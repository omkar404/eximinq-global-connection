// import { useState } from "react";

// const QuickForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     sector: "",
//     investment: "",
//     mobile: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.mobile) return;

//     onSubmit?.(form);

//     // same intent as original inline alert
//     alert("We will classify your industry and contact you.");

//     setForm({
//       sector: "",
//       investment: "",
//       mobile: "",
//     });
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-eco-900 mb-2">
//         Category Assessment
//       </h3>
//       <p className="text-slate-500 mb-6 text-sm">
//         Find your industry classification.
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Industry Sector */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Industry Sector
//           </label>
//           <input
//             type="text"
//             name="sector"
//             value={form.sector}
//             onChange={handleChange}
//             placeholder="e.g. Chemical / Textile / Engineering"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Investment */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Investment (Plant & Machinery)
//           </label>
//           <input
//             type="text"
//             name="investment"
//             value={form.investment}
//             onChange={handleChange}
//             placeholder="e.g. ₹ 5 Crores"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Mobile */}
//         <div className="mb-4">
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
//           Check Status
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    brandName: "",
    activity: "",
    applicantType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.brandName) return;

    onSubmit?.(form);

    // same intent as original inline alert
    alert("We will run a comprehensive search and send you the report.");

    setForm({
      brandName: "",
      activity: "",
      applicantType: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-legal-900 mb-2">
        Free Brand Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify if your brand name is available.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Brand Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Brand Name / Slogan
          </label>
          <input
            type="text"
            name="brandName"
            value={form.brandName}
            onChange={handleChange}
            placeholder="e.g. EXIMINQ"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Business Activity */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Business Activity
          </label>
          <input
            type="text"
            name="activity"
            value={form.activity}
            onChange={handleChange}
            placeholder="e.g. Clothing / Software / Food"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Applicant Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Applicant Type
          </label>
          <select
            name="applicantType"
            value={form.applicantType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select applicant type</option>
            <option>Individual / Proprietor</option>
            <option>Start-up / MSME</option>
            <option>Company / LLP</option>
          </select>
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
