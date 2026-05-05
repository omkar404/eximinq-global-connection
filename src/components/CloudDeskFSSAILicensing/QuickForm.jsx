// import { ClipboardCheck, MapPin, Phone } from "lucide-react";

// const QuickForm = () => {
//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
//         <ClipboardCheck className="w-6 h-6 text-brand-900" />
//         Compliance Check
//       </h3>

//       <p className="text-slate-500 mb-6 text-sm">
//         Verify product category eligibility.
//       </p>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert("We will analyze the product composition and revert.");
//         }}
//       >
//         {/* Product Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Product Type
//           </label>
//           <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
//             <option>Health Supplements / Nutraceuticals</option>
//             <option>Confectionery / Chocolates</option>
//             <option>Beverages (Alcoholic/Non-Alcoholic)</option>
//             <option>Dairy Products</option>
//             <option>Raw Material / Additives</option>
//           </select>
//         </div>

//         {/* Port of Import */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Port of Import
//           </label>
//           <div className="relative">
//             <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//             <input
//               type="text"
//               className="w-full border border-slate-300 rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500"
//               placeholder="e.g. Nhava Sheva / Delhi Airport"
//             />
//           </div>
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <div className="relative">
//             <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//             <input
//               type="tel"
//               required
//               className="w-full border border-slate-300 rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500"
//               placeholder="+91 74000 96950"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Check Requirements
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import { ClipboardCheck, MapPin, Phone } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    productType: "",
    portOfImport: "",
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

    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
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
      const payload = {
        productType: form.productType,
        portOfImport: form.portOfImport,
        mobile: form.mobile,
        type: "QUICK_FORM", // or any identifier you need
      };

      console.log("📤 Sending data:", payload);

      // Use your actual API endpoint
      const response = await fetch(
         `${process.env.REACT_APP_API_URL}/api/fssai-licensing`,
        // "http://localhost:5000/api/fssai-licensing",
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

      alert("✅ Request submitted successfully! We'll analyze and revert.");

      // Reset form
      setForm({
        productType: "",
        portOfImport: "",
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
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <ClipboardCheck className="w-6 h-6 text-brand-900" />
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify product category eligibility.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Product Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Type
          </label>
          <select
            name="productType"
            value={form.productType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select product type</option>
            <option>Health Supplements / Nutraceuticals</option>
            <option>Confectionery / Chocolates</option>
            <option>Beverages (Alcoholic/Non-Alcoholic)</option>
            <option>Dairy Products</option>
            <option>Raw Material / Additives</option>
          </select>
        </div>

        {/* Port of Import */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port of Import
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="portOfImport"
              value={form.portOfImport}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500"
              placeholder="e.g. Nhava Sheva / Delhi Airport"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className={`w-full border rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="9876543210"
              maxLength={10}
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
          {loading ? "Submitting..." : "Check Requirements"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;