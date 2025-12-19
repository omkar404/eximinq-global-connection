// import { useState } from "react";

// const QuickForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     assetType: "",
//     assetTitle: "",
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
//     alert("We will analyze your brand assets and contact you.");

//     setForm({
//       assetType: "",
//       assetTitle: "",
//       mobile: "",
//     });
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-creative-900 mb-2">
//         Asset Assessment
//       </h3>
//       <p className="text-slate-500 mb-6 text-sm">
//         Identify protectable IP in your brand.
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Asset Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Asset Type</label>
//           <select
//             name="assetType"
//             value={form.assetType}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option value="">Select Asset Type</option>
//             <option>Logo Design (Artistic)</option>
//             <option>Website Content / Blog</option>
//             <option>Product Packaging Art</option>
//             <option>Brochure / User Manual</option>
//             <option>Jingle / Audio Brand</option>
//           </select>
//         </div>

//         {/* Asset Title */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Asset Title
//           </label>
//           <input
//             type="text"
//             name="assetTitle"
//             value={form.assetTitle}
//             onChange={handleChange}
//             placeholder="e.g. Official Logo 2025"
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
//           Check Eligibility
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";

const LogoAssessmentForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    logoStatus: "",
    applicantType: "",
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

    // same intent as original inline alert
    alert("We will analyze your logo design and contact you.");

    setForm({
      logoStatus: "",
      applicantType: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-art-900 mb-2">
        Logo Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify if your logo qualifies as &apos;Artistic Work&apos;.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Logo Status */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Logo Status
          </label>
          <select
            name="logoStatus"
            value={form.logoStatus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select status</option>
            <option>New Design (Not used yet)</option>
            <option>Already used in Market</option>
            <option>Trademark Applied</option>
            <option>Trademark Registered</option>
          </select>
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
            <option value="">Select applicant</option>
            <option>Company (Pvt Ltd/LLP)</option>
            <option>Individual / Creator</option>
          </select>
        </div>

        {/* Mobile */}
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Check Eligibility
        </button>
      </form>
    </div>
  );
};

export default LogoAssessmentForm;
