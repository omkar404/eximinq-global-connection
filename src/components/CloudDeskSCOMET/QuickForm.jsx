// import { SearchCheck } from "lucide-react";

// const QuickForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("We will analyze the technical specifications and revert.");
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

//       <div className="flex items-center gap-3 mb-2">
//         <SearchCheck className="w-6 h-6 text-brand-900" />
//         <h3 className="text-2xl font-bold text-brand-900">Item Verification</h3>
//       </div>

//       <p className="text-slate-500 mb-6 text-sm">
//         Check if your product requires a license.
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Product Name */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Product Name / CAS No.
//           </label>
//           <input
//             type="text"
//             className="w-full border border-slate-300 rounded px-3 py-2
//                      focus:outline-none focus:border-brand-500"
//             placeholder="e.g. Titanium Alloy / Triethanolamine"
//           />
//         </div>

//         {/* Technical Specification */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Technical Specification
//           </label>
//           <input
//             type="text"
//             className="w-full border border-slate-300 rounded px-3 py-2
//                      focus:outline-none focus:border-brand-500"
//             placeholder="e.g. High speed machining center"
//           />
//         </div>

//         {/* End User Country */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             End User Country
//           </label>
//           <input
//             type="text"
//             className="w-full border border-slate-300 rounded px-3 py-2
//                      focus:outline-none focus:border-brand-500"
//             placeholder="e.g. Germany"
//           />
//         </div>

//         {/* Submit Button */}
//         <button

//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white
//                    font-bold py-3 rounded-lg transition"
//         >
//           Check Status
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import { SearchCheck } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    productName: "",
    technicalSpec: "",
    endUserCountry: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -------------------------
     VALIDATION FUNCTION
  -------------------------- */

  const validate = () => {
    const newErrors = {};

    // Product Name validation
    if (!form.productName.trim()) {
      newErrors.productName = "Product name is required";
    }

    // Technical Specification validation
    if (!form.technicalSpec.trim()) {
      newErrors.technicalSpec = "Technical specification is required";
    }

    // End User Country validation
    if (!form.endUserCountry.trim()) {
      newErrors.endUserCountry = "End user country is required";
    } else if (form.endUserCountry.trim().length < 2) {
      newErrors.endUserCountry = "Please enter a valid country name";
    }

    return newErrors;
  };

  /* -------------------------
     SUBMIT
  -------------------------- */

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  try {
    setLoading(true);

    // Create payload with ALL required fields
    const payload = {
      name: form.productName,                    // Required: Product name as name
      mobile: form.mobile || "9876543210",       // Required: Mobile number
      email: "lead@eximinq.com",                  // Required: Email
      type: "QUICK_FORM",                // Required: Type (changed from QUICK_FORM)
      service: "SCOMET Licensing",                // Service name
      productName: form.productName,              // Additional field
      technicalSpec: form.technicalSpec,          // Additional field
      endUserCountry: form.endUserCountry,        // Additional field
    };

    console.log("Sending payload:", payload);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/scomet-licensing`,
      // "http://localhost:5000/api/scomet-licensing",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log("API Response:", data);

    if (!response.ok || !data.success) {
      throw new Error(data.message || data.error || "Submission failed");
    }

    alert(data.message || "We will analyze the technical specifications and revert.");

    // Reset form
    setForm({
      productName: "",
      technicalSpec: "",
      endUserCountry: "",
      mobile: "",
    });

  } catch (err) {
    console.error("Submission error:", err);
    alert(err.message || "Submission failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-2">
        <SearchCheck className="w-6 h-6 text-brand-900" />
        <h3 className="text-2xl font-bold text-brand-900">Item Verification</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Check if your product requires a license.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Name / CAS No. <span className="text-red-500"></span>
          </label>
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 
                     focus:outline-none focus:border-brand-500
                     ${errors.productName ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. Titanium Alloy / Triethanolamine"
          />
          {errors.productName && (
            <p className="text-red-500 text-sm mt-1">{errors.productName}</p>
          )}
        </div>

        {/* Technical Specification */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Technical Specification <span className="text-red-500"></span>
          </label>
          <input
            type="text"
            name="technicalSpec"
            value={form.technicalSpec}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 
                     focus:outline-none focus:border-brand-500
                     ${errors.technicalSpec ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. High speed machining center"
          />
          {errors.technicalSpec && (
            <p className="text-red-500 text-sm mt-1">{errors.technicalSpec}</p>
          )}
        </div>

        {/* End User Country */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            End User Country <span className="text-red-500"></span>
          </label>
          <input
            type="text"
            name="endUserCountry"
            value={form.endUserCountry}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 
                     focus:outline-none focus:border-brand-500
                     ${errors.endUserCountry ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. Germany"
          />
          {errors.endUserCountry && (
            <p className="text-red-500 text-sm mt-1">{errors.endUserCountry}</p>
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
          {loading ? "Submitting..." : "Check Status"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
