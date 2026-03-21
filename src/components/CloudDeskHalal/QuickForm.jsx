// import { useState } from "react";

// const QuickForm = () => {
//   const [form, setForm] = useState({
//     targetMarket: "UAE / Saudi Arabia (GSO)",
//     productCategory: "Processed Food",
//     // targetMarket: "",
//     // productCategory: "",
//     mobile: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile"){
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setForm((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//     setForm((prev) => ({ ...prev, [name]: "" }));
//   };

//   /*----------------------
//     VALIDATION
//   -----------------------*/

//   const validate = () => {
//     const newErrors = {};

//     if (!form.mobile) {
//       newErrors.mobile = "Mobile number is required"
//     } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
//       newErrors.mobile = "Enter vaild 10 digit Indian mobile number";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) return;

//     setLoading(true);

//     try {
//       const payload = {
//       targetMarket: form.targetMarket,
//       productCategory: form.productCategory,
//       mobile: form.mobile,
//       type: "QUICK_FORM"
//       };

//       console.log("📤 Sending data:", payload);

//       const response = await fetch(
//         // `${process.env.REACT_APP_API_URL}/api/halal-certification`,
//         "http://localhost:5000/api/halal-certification", // ✅ http:// is required
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         throw new Error(data.error || data.message || "Something went wrong");
//       }

//       alert("✅ Request submitted successfully");

//       // Reset form
//       setForm({ targetMarket: "", productCategory: "", mobile: ""});
//     } catch (err) {
//       console.error("❌ Error:", err);
//       alert(`❌ Submission failed: ${err.message}`);
//     } finally {
//       setLoading(false);

//     // // ❗ This is where calculation OR modal/email trigger goes
//     // alert("We will calculate the eligible subsidy amount.");

//     // console.log("Benefit Calculator Data:", {
//     //   ...form,
//     //   service: "IEC Registration",
//     //   source: "Benefit Calculator",
//     // });
//   }
// };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-brand-900 mb-2">
//         Eligibility Check
//       </h3>
//       <p className="text-slate-500 mb-6 text-sm">
//        Verify compliance requirements for your market.
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Target Market */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Target Market
//           </label>
//           <select
//             name="targetMarket"
//             value={form.targetMarket}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 
//                        focus:outline-none focus:border-brand-500"
//           >
//               <option>UAE / Saudi Arabia (GSO)</option>
//               <option>Malaysia (JAKIM)</option>
//               <option>Indonesia (MUI / BPJPH)</option>
//               <option>Global (General)</option>
//           </select>
//         </div>

//         {/* Product Category */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Product Category
//           </label>
//           <select
//             name="productCategory"
//             value={form.productCategory}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 
//                        focus:outline-none focus:border-brand-500"
//           >
//             <option>Processed Food</option>
//             <option>Meat & Poultry</option>
//             <option>Cosmetics / Personal Care</option>
//             <option>Pharmaceuticals</option>
//             <option>Additives / Ingredients</option>
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
//             className="w-full border border-slate-300 rounded px-3 py-2 
//                        focus:outline-none focus:border-brand-500"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 
//                      text-white font-bold py-3 rounded-lg transition"
//         >
//           Check Requirements
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;



import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    targetMarket: "UAE / Saudi Arabia (GSO)",
    productCategory: "Processed Food",
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

    // ✅ Fixed: was wiping form value with ""
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        targetMarket: form.targetMarket,
        productCategory: form.productCategory,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        // `${process.env.REACT_APP_API_URL}/api/halal-certification`,
        "http://localhost:5000/api/halal-certification",
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

      alert("✅ Request submitted successfully");

      setForm({ targetMarket: "UAE / Saudi Arabia (GSO)", productCategory: "Processed Food", mobile: "" });

    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);  // ✅ Fixed: brace was misplaced
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify compliance requirements for your market.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Target Market */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Target Market
          </label>
          <select
            name="targetMarket"
            value={form.targetMarket}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          >
            {/* ✅ Added value prop to all options */}
            <option value="UAE / Saudi Arabia (GSO)">UAE / Saudi Arabia (GSO)</option>
            <option value="Malaysia (JAKIM)">Malaysia (JAKIM)</option>
            <option value="Indonesia (MUI / BPJPH)">Indonesia (MUI / BPJPH)</option>
            <option value="Global (General)">Global (General)</option>
          </select>
        </div>

        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>
          <select
            name="productCategory"
            value={form.productCategory}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          >
            {/* ✅ Added value prop to all options */}
            <option value="Processed Food">Processed Food</option>
            <option value="Meat & Poultry">Meat & Poultry</option>
            <option value="Cosmetics / Personal Care">Cosmetics / Personal Care</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="Additives / Ingredients">Additives / Ingredients</option>
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
            maxLength={10}
            className={`w-full border rounded px-3 py-2
                        focus:outline-none focus:border-brand-500 ${
                          errors.mobile ? "border-red-500" : "border-slate-300"
                        }`}
          />
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
          {loading ? "Submitting..." : "Check Requirements"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;