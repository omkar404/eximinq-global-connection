// import { useState } from "react";
// import { ShieldAlert, Phone } from "lucide-react";

// const QuickForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     relationshipType: "",
//     importValue: "",
//     mobile: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.relationshipType || !form.importValue || !form.mobile) return;

//     onSubmit?.(form);

//     alert(
//       "We will assess your valuation risk profile and contact you shortly."
//     );

//     setForm({
//       relationshipType: "",
//       importValue: "",
//       mobile: "",
//     });
//   };

//   return (
//    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       {/* Heading */}
//       <div className="flex items-center gap-3 mb-2">
//         <ShieldAlert className="text-brand-600" size={26} />
//         <h3 className="text-2xl font-bold text-brand-900">
//           Compliance Risk Check
//         </h3>
//       </div>

//       <p className="text-slate-500 mb-6 text-sm">
//         Facing a Customs Hold due to SVB?
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Relationship Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Relationship Type
//           </label>
//           <select
//             name="relationshipType"
//             value={form.relationshipType}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option value="">Select relationship</option>
//             <option>Subsidiary / Parent Company</option>
//             <option>Joint Venture Partner</option>
//             <option>Sole Distributor / Agent</option>
//             <option>Common Directors / Management</option>
//           </select>
//         </div>

//         {/* Import Value */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Annual Import Value (USD)
//           </label>
//           <input
//             type="number"
//             name="importValue"
//             value={form.importValue}
//             onChange={handleChange}
//             placeholder="e.g. 5,000,000"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
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
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Submit for Assessment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import { ShieldAlert, Phone } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    relationshipType: "",
    importValue: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    if (!form.relationshipType) {
      newErrors.relationshipType = "Please select a relationship type";
    }

    if (!form.importValue) {
      newErrors.importValue = "Annual import value is required";
    } else if (isNaN(form.importValue) || Number(form.importValue) <= 0) {
      newErrors.importValue = "Enter a valid positive number";
    }

    return newErrors;
  };

  /* SUBMIT HANDLER */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      // ✅ Map frontend fields to backend expectations
      const payload = {
        relationshipType: form.relationshipType,   // Backend expects 'businessType'
        importValue: form.importValue,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/svb-registration`,
        // "http://localhost:5000/api/svb-registration", // fallback for local dev
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      alert("✅ We will assess your valuation risk profile and contact you shortly.");

      // Reset form
      setForm({
        relationshipType: "",
        importValue: "",
        mobile: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <ShieldAlert className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          Compliance Risk Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Facing a Customs Hold due to SVB?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Relationship Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Relationship Type
          </label>
          <select
            name="relationshipType"
            value={form.relationshipType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.relationshipType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select relationship</option>
            <option>Subsidiary / Parent Company</option>
            <option>Joint Venture Partner</option>
            <option>Sole Distributor / Agent</option>
            <option>Common Directors / Management</option>
          </select>
          {errors.relationshipType && (
            <p className="text-red-500 text-xs mt-1">{errors.relationshipType}</p>
          )}
        </div>

        {/* Import Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Annual Import Value (USD)
          </label>
          <input
            type="number"
            name="importValue"
            value={form.importValue}
            onChange={handleChange}
            placeholder="e.g. 5000000"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.importValue ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.importValue && (
            <p className="text-red-500 text-xs mt-1">{errors.importValue}</p>
          )}
        </div>

        {/* Mobile Number */}
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
              maxLength={10}
              placeholder="9876543210"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
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
          {loading ? "Submitting..." : "Submit for Assessment"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;