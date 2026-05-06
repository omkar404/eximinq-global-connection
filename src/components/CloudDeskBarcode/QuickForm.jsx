// import { useState } from "react";

// const QuickForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     skus: "",
//     turnover: "",
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
//     alert("We will send the package details to your email.");

//     setForm({
//       skus: "",
//       turnover: "",
//       mobile: "",
//     });
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-scan-900 mb-2">
//         Requirements Check
//       </h3>
//       <p className="text-slate-500 mb-6 text-sm">
//         How many products do you have?
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* SKUs */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Number of SKUs (Products)
//           </label>
//           <select
//             name="skus"
//             value={form.skus}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option value="">Select</option>
//             <option>Up to 100 SKUs</option>
//             <option>100 to 1,000 SKUs</option>
//             <option>1,000 to 10,000 SKUs</option>
//             <option>10,000+ SKUs</option>
//           </select>
//         </div>

//         {/* Turnover */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Company Turnover
//           </label>
//           <select
//             name="turnover"
//             value={form.turnover}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option value="">Select</option>
//             <option>Up to ₹ 50 Crores</option>
//             <option>₹ 50 - ₹ 250 Crores</option>
//             <option>₹ 250 - ₹ 500 Crores</option>
//             <option>Above ₹ 500 Crores</option>
//           </select>
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
//           See Packages
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    Category: "",
    publicationDate: "",
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

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.Category) {
      newErrors.Category = "Please select a product Category";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER (API CALL)
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        Category: form.Category,
        publicationDate: form.publicationDate,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/design-registration`,
        // "http://localhost:5000/api/design-registration", // ✅ http:// is required
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

      alert("✅ Design assessment submitted successfully");

      // Reset form
      setForm({
        Category: "",
        publicationDate: "",
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
      <h3 className="text-2xl font-bold text-design-900 mb-2">
        Design Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Check for Novelty & Originality.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>
          <select
            name="Category"
            value={form.Category}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.Category ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Category</option>
            <option>Furniture / Household Goods</option>
            <option>Electronics Casing / Body</option>
            <option>Textile Patterns / Lace</option>
            <option>Packaging / Containers</option>
            <option>Jewellery / Ornaments</option>
          </select>
          {errors.Category && (
            <p className="text-red-500 text-xs mt-1">{errors.Category}</p>
          )}
        </div>

        {/* Date of First Publication */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Date of First Publication
          </label>
          <input
            type="date"
            name="publicationDate"
            value={form.publicationDate}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 9876543210"
            maxLength={10}
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
          {loading ? "Submitting..." : "Check Novelty"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;