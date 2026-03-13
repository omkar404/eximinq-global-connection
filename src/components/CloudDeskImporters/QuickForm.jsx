// import { useState } from "react";

// const QuickForm = () =>  {

//   const [form, setForm] = useState({
//     service: "",
//     port: "",
//     mobile: "",
//   });

//   const [error, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const SERVICES = [
//     "Steel Import NOC (SIMS)",
//     "Coal Import Reg (CIMS)",
//     "Paper Import Reg (PIMS)",
//     "Chip Import Reg (CHIMS)",
//     "Non-Ferrous Reg (NFMIMS)",
//   ];

//   const handleChange = (e) => {
//     const { name, value} = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // clear error whne typing
//     setErrros((prev) => ({
//       ...prev,
//       [name]: "",
//     }));

//   /* -------------------------
//      VALIDATION FUNCTION
//   -------------------------- */

//     const validate = () => {
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

//     return newErrors;
//     // e.preventDefault();
//     // alert("Request submitted successfully!");
//   }
// };

//   /* -------------------------
//      SUBMIT
//   -------------------------- */

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
//         //  `${process.env.REACT_APP_API_URL}/api/import-management-registration`,
//         "http://localhost:5000/api/import-management-registration",
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
//       <h3 className="text-2xl font-bold text-brand-900 mb-2">Service Request</h3>
//       <p className="text-slate-500 mb-6 text-sm">Select the service you need.</p>

//       <form onSubmit={handleSubmit}>

//         {/* Service Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Service Type</label>
//           <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
//             <option>Steel Import NOC (SIMS)</option>
//             <option>Coal Import Reg (CIMS)</option>
//             <option>Paper Import Reg (PIMS)</option>
//             <option>Chip Import Reg (CHIMS)</option>
//             <option>Non-Ferrous Reg (NFMIMS)</option>
//           </select>
//         </div>

//         {/* Company Name */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Company Name</label>
//           <input
//             type="text"
//             placeholder="e.g. ABC Pvt Ltd"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Mobile Number</label>
//           <input
//             type="tel"
//             placeholder="+91 74000 96950"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Proceed
//         </button>
//       </form>
//     </div>
//   );
// }

// components/QuickForm.jsx

import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    service: "",
    port: "",
    mobile: "",
  });

  // FIX 1: was 'const [error, setErrors]' — name was wrong, use 'errors/setErrors'
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const SERVICES = [
    "Steel Import NOC (SIMS)",
    "Coal Import Reg (CIMS)",
    "Paper Import Reg (PIMS)",
    "Chip Import Reg (CHIMS)",
    "Non-Ferrous Reg (NFMIMS)",
  ];

  // FIX 2: handleChange was written as handleSubmit — two handleSubmit functions crashed the app
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // FIX 3: was 'setErrros' (typo) — fixed to 'setErrors'
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // FIX 4: validate() was defined INSIDE handleChange — moved outside so handleSubmit can call it
  const validate = () => {
    const newErrors = {};

    if (!form.service) {
      newErrors.service = "Please select a service";
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

      // const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/import-management-registration`,
        // "http://localhost:5000/api/import-management-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "API failed");
      }

      alert("Request submitted successfully");

      setForm({ service: "", port: "", mobile: "" });
      setErrors({});
    } catch (err) {
      console.error("Submit error:", err.name, err.message);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Service Request
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Select the service you need.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Service Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Service Type
          </label>
          {/* FIX 5: select was missing name, value, onChange */}
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select a service</option>
            {/* <option>Steel Import NOC (SIMS)</option>
            <option>Coal Import Reg (CIMS)</option>
            <option>Paper Import Reg (PIMS)</option>
            <option>Chip Import Reg (CHIMS)</option>
            <option>Non-Ferrous Reg (NFMIMS)</option> */}

            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-xs mt-1">{errors.service}</p>
          )}
        </div>

        {/* Company Name (port field) */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Name
          </label>
          {/* FIX 6: input was missing name, value, onChange */}
          <input
            type="text"
            name="port"
            value={form.port}
            onChange={handleChange}
            placeholder="e.g. ABC Pvt Ltd"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          {/* FIX 7: input was missing name, value, onChange */}
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Proceed"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
