// import { useState } from "react";

// const QuickForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     category: "",
//     country: "",
//     mobile: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.mobile) return;

//     onSubmit?.({
//       service: "Free Sale Certificate (FSC)",
//       source: "Eligibility Check",
//       category: form.category,
//       country: form.country,
//       mobile: form.mobile,
//     });
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-brand-900 mb-2">
//         FSC Eligibility Check
//       </h3>
//       <p className="text-slate-500 mb-6 text-sm">
//         Determine the correct issuing body.
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Product Category */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Product Category
//           </label>
//           <select
//             name="category"
//             value={form.category}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option value="">Select Category</option>
//             <option>Medical Device (Class A/B/C/D)</option>
//             <option>Pharmaceuticals / Drugs</option>
//             <option>Cosmetics / Personal Care</option>
//             <option>Ayush / Herbal Products</option>
//             <option>General Consumer Goods (Non-Medical)</option>
//           </select>
//         </div>

//         {/* Target Country */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Target Country
//           </label>
//           <input
//             type="text"
//             name="country"
//             value={form.country}
//             onChange={handleChange}
//             placeholder="e.g. Vietnam / Philippines / Brazil"
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
//           className="w-full bg-brand-600 hover:bg-brand-700
//                      text-white font-bold py-3 rounded-lg transition"
//         >
//           Get Assessment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;




import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    categoryType: "",
    country: "",
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

    // Optional: Add validation for category and country if needed
    if (!form.categoryType) {
      newErrors.categoryType = "Please select a product category";
    }
    if (!form.country) {
      newErrors.country = "Please enter target country";
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
        categoryType: form.categoryType,
        country: form.country,
        mobile: form.mobile,
        type: "QUICK_FORM",
        service: "Free Sale Certificate (FSC)",
        source: "Eligibility Check",
      };

      console.log("📤 Sending data:", payload);

      // Replace with your actual API endpoint
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/free-sale-certificate`,
        // "http://localhost:5000/api/free-sale-certificate",
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

      alert("✅ Eligibility check submitted successfully");

      // Reset form
      setForm({ categoryType: "", country: "", mobile: "" });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        FSC Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Determine the correct issuing body.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>
          <select
            name="categoryType"
            value={form.categoryType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.categoryType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Category</option>
            <option>Medical Device (Class A/B/C/D)</option>
            <option>Pharmaceuticals / Drugs</option>
            <option>Cosmetics / Personal Care</option>
            <option>Ayush / Herbal Products</option>
            <option>General Consumer Goods (Non-Medical)</option>
          </select>
          {errors.categoryType && (
            <p className="text-red-500 text-xs mt-1">{errors.categoryType}</p>
          )}
        </div>

        {/* Target Country */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Target Country
          </label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="e.g. Vietnam / Philippines / Brazil"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.country ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            maxLength={10}
            placeholder="9876543210"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
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
          {loading ? "Submitting..." : "Get Assessment"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;