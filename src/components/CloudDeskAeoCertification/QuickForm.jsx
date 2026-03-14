// import { useState } from "react";
// import { ShieldCheck, Phone } from "lucide-react";

// const QuickForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     businessType: "",
//     yearsInBusiness: "",
//     mobile: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // clear error when typing
//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};

//     // Service validation
//     if (!form.service) {
//       newErrors.service = "Please select a service";
//     }

//     // Mobile validation
//     const mobileRegex = /^[6-9]\d{9}$/;

//     if (!form.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!mobileRegex.test(form.mobile)) {
//       newErrors.mobile = "Enter valid 10 digit Indian mobile number";
//     }

//     // Port validation (optional but if entered validate length)
//     if (form.port && form.port.length < 3) {
//       newErrors.port = "Port name must be at least 3 characters";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         //  `${process.env.REACT_APP_API_URL}/api/aeo-certification`,
//         "http://localhost:5000/api/aeo-certification",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         throw new Error(data.error || data.message);
//       }

//       alert("Request submitted successfully");

//       setForm({
//         service: "",
//         port: "",
//         mobile: "",
//       });

//     } catch (err) {
//       console.error(err);
//       alert("Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       {/* Heading */}
//       <div className="flex items-center gap-3 mb-2">
//         <ShieldCheck className="text-brand-600" size={26} />
//         <h3 className="text-2xl font-bold text-brand-900">
//           AEO Readiness Check
//         </h3>
//       </div>

//       <p className="text-slate-500 mb-6 text-sm">
//         Find out if you qualify for T1 or T2 status.
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Business Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Business Type
//           </label>
//           <select
//             name="businessType"
//             value={form.businessType}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option value="">Select business type</option>
//             <option>Importer / Exporter</option>
//             <option>Logistics Provider (CHA / Freight)</option>
//             <option>Warehouse Operator</option>
//             <option>Custodian / Terminal</option>
//           </select>
//         </div>

//         {/* Years in Business */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Years in Business
//           </label>
//           <select
//             name="yearsInBusiness"
//             value={form.yearsInBusiness}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option value="">Select duration</option>
//             <option>Less than 3 Years</option>
//             <option>More than 3 Years</option>
//           </select>
//         </div>

//         {/* Mobile */}
//         <div className="mb-6">
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <div className="relative">
//             <Phone
//               size={16}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//             />
//             <input
//               type="tel"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               placeholder="+91 74000 96950"
//               required
//               className="w-full pl-9 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//             />
//           </div>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           // className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//           className={`w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition ${
//             loading
//               ? "bg-brand-400 cursor-not-allowed"
//               : "bg-brand-600 hover:bg-brand-700"
//           }`}
//         >
//           {loading ? "Submitting...": "Request Audit"}
//           {/* Request Audit */}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import { ShieldCheck, Phone } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    businessType: "",
    yearsInBusiness: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.businessType) {
      newErrors.businessType = "Please select business type";
    }

    if (!form.yearsInBusiness) {
      newErrors.yearsInBusiness = "Please select duration";
    }

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const payload = {
        name: form.businessType, // temporary name
        mobile: form.mobile,
        email: "lead@eximinq.com", // temporary email
        type: "QUICK_FORM",
        yearsInBusiness: form.yearsInBusiness,
      };

      const response = await fetch(
       `${process.env.REACT_APP_API_URL}/api/aeo-certification"`,
        // "http://localhost:5000/api/aeo-certification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message);
      }

      alert("Request submitted successfully");

      setForm({
        businessType: "",
        yearsInBusiness: "",
        mobile: "",
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-2">
        <ShieldCheck className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          AEO Readiness Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find out if you qualify for T1 or T2 status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Business Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Business Type
          </label>

          <select
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select business type</option>
            <option>Importer / Exporter</option>
            <option>Logistics Provider (CHA / Freight)</option>
            <option>Warehouse Operator</option>
            <option>Custodian / Terminal</option>
          </select>

          {errors.businessType && (
            <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>
          )}
        </div>

        {/* Years */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Years in Business
          </label>

          <select
            name="yearsInBusiness"
            value={form.yearsInBusiness}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select duration</option>
            <option>Less than 3 Years</option>
            <option>More than 3 Years</option>
          </select>

          {errors.yearsInBusiness && (
            <p className="text-red-500 text-xs mt-1">
              {errors.yearsInBusiness}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 74000 96950"
              className="w-full pl-9 border border-slate-300 rounded px-3 py-2"
            />
          </div>

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Request Audit"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
