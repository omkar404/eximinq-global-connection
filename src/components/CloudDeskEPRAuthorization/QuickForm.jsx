// import { ShieldCheck, Phone, Factory, Recycle } from "lucide-react";

// const QuickForm = () => {
//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
//       {/* Header */}
//       <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
//         <ShieldCheck className="w-6 h-6 text-brand-600" />
//         Compliance Check
//       </h3>

//       <p className="text-slate-500 mb-6 text-sm">Are you a PIBO?</p>

//       {/* Form */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert("We will calculate your EPR target and contact you.");
//         }}
//       >
//         {/* Business Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Business Type</label>
//           <div className="relative">
//             <select className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500">
//               <option>Importer</option>
//               <option>Manufacturer / Producer</option>
//               <option>Brand Owner</option>
//               <option>Recycler</option>
//             </select>
//             <Factory className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
//           </div>
//         </div>

//         {/* Waste Category */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Waste Category</label>
//           <div className="relative">
//             <select className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500">
//               <option>Plastic Packaging</option>
//               <option>Electronics (E-Waste)</option>
//               <option>Batteries (Lead/Li-ion)</option>
//               <option>Tyres (Waste/New)</option>
//             </select>
//             <Recycle className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
//           </div>
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Mobile Number</label>
//           <div className="relative">
//             <input
//               type="tel"
//               className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500"
//               placeholder="+91 74000 96950"
//               required
//             />
//             <Phone className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Get EPR Quote
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import { ShieldCheck, Phone, Factory, Recycle } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    businessType: "",
    wasteCategory: "",
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
        businessType: form.businessType,
        wasteCategory: form.wasteCategory,
        mobile: form.mobile,
        type: "QUICK_FORM", // or any identifier your backend expects
      };

      console.log("📤 Sending data:", payload);

      // Replace with your actual API endpoint
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/epr-authorization`,
        // "http://localhost:5000/api/epr-authorization",
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

      alert("✅ EPR quote request submitted successfully");

      // Reset form
      setForm({
        businessType: "",
        wasteCategory: "",
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
      {/* Header */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-brand-600" />
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">Are you a PIBO?</p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Business Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Business Type
          </label>
          <div className="relative">
            <select
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500"
            >
              <option value="">Select business type</option>
              <option>Importer</option>
              <option>Manufacturer / Producer</option>
              <option>Brand Owner</option>
              <option>Recycler</option>
            </select>
            <Factory className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Waste Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Waste Category
          </label>
          <div className="relative">
            <select
              name="wasteCategory"
              value={form.wasteCategory}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500"
            >
              <option value="">Select waste category</option>
              <option>Plastic Packaging</option>
              <option>Electronics (E-Waste)</option>
              <option>Batteries (Lead/Li-ion)</option>
              <option>Tyres (Waste/New)</option>
            </select>
            <Recycle className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="9876543210"
              maxLength={10}
            />
            <Phone className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get EPR Quote"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;