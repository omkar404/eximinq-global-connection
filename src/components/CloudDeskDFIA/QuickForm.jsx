// import { useState } from "react";

// const QuickForm = () => {
//   const [form, setForm] = useState({
//     product: "",
//     fobValue: "",
//     mobile: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Replace alert with API / modal later
//     alert("We will calculate the transferable value and contact you.");
//     console.log("Value Calculator Data:", form);
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-brand-900 mb-2">
//         Value Calculator
//       </h3>
//       <p className="text-slate-500 mb-6 text-sm">
//         Estimate your license value.
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Export Product */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Export Product (SION)
//           </label>
//           <input
//             type="text"
//             name="product"
//             value={form.product}
//             onChange={handleChange}
//             placeholder="e.g. Leather Shoes (J-10)"
//             className="w-full border border-slate-300 rounded px-3 py-2
//                        focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* FOB Value */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             FOB Value (Exported)
//           </label>
//           <input
//             type="number"
//             name="fobValue"
//             value={form.fobValue}
//             onChange={handleChange}
//             placeholder="e.g. ₹ 1,00,00,000"
//             className="w-full border border-slate-300 rounded px-3 py-2
//                        focus:outline-none focus:border-brand-500"
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
//             className="w-full border border-slate-300 rounded px-3 py-2
//                        focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700
//                      text-white font-bold py-3 rounded-lg transition"
//         >
//           Calculate Value
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;



import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    product: "",
    fobValue: "",
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
        productType: form.product,
        fobValue: form.fobValue,
        mobile: form.mobile,
        type: "QUICK_FORM", // or any identifier your backend expects
      };

      console.log("📤 Sending data:", payload);

      // Replace with your actual API endpoint
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/dfia-license`,
        // "http://localhost:5000/api/dfia-license",
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

      alert("✅ Request submitted successfully – we'll calculate and contact you.");

      // Reset form
      setForm({ product: "", fobValue: "", mobile: "" });
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
        Value Calculator
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Estimate your license value.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Export Product */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Product (SION)
          </label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. Leather Shoes (J-10)"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* FOB Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            FOB Value (Exported)
          </label>
          <input
            type="number"
            name="fobValue"
            value={form.fobValue}
            onChange={handleChange}
            placeholder="e.g. 10000000"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
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
            placeholder="9876543210"
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
          {loading ? "Submitting..." : "Calculate Value"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;