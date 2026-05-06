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

const QuickForm = () => {
  const [form, setForm] = useState({
    brandName: "",
    activity: "",
    applicantType: "",
    mobile: "",                 // added mobile to match reference pattern
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

    // Clear field error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.brandName) {
      newErrors.brandName = "Brand name / slogan is required";
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
        brandName: form.brandName,
        activity: form.activity,
        applicantType: form.applicantType,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/trademark-registration`,
        // "http://localhost:5000/api/trademark-registration", // ✅ http:// is required
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

      alert("✅ Brand availability check submitted successfully");

      // Reset form
      setForm({
        brandName: "",
        activity: "",
        applicantType: "",
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
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.brandName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. EXIMINQ"
          />
          {errors.brandName && (
            <p className="text-red-500 text-xs mt-1">{errors.brandName}</p>
          )}
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
          {loading ? "Submitting..." : "Check Availability"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;