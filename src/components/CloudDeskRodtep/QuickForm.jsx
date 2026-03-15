// import { Calculator } from "lucide-react";

// const QuickForm = () => {
//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       {/* Heading with Icon */}
//       <div className="flex items-center gap-3 mb-2">
//         <Calculator className="w-7 h-7 text-brand-600" />
//         <h3 className="text-2xl font-bold text-brand-900">Benefit Calculator</h3>
//       </div>

//       <p className="text-slate-500 mb-6 text-sm">
//         Estimate your export refund.
//       </p>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert(
//             "We will calculate your RoDTEP value based on recent shipping bills."
//           );
//         }}
//       >
//         {/* HSN Code */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             HSN Code (Export)
//           </label>
//           <input
//             type="text"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//             placeholder="e.g. 6109 (T-Shirts)"
//           />
//         </div>

//         {/* FOB Value */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             FOB Value (INR)
//           </label>
//           <input
//             type="number"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//             placeholder="e.g. 50,00,000"
//           />
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//             placeholder="+91 74000 96950"
//             required
//           />
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Calculate Value
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import { Calculator } from "lucide-react";

const QuickForm = () => {
  const [formData, setFormData] = useState({
    hsnCode: "",
    fobValue: "",
    mobile: "",
    // email is removed as it's not in the RoDTEP form
  });

  const [loading, setLoading] = useState(false);
  const [calculationResult, setCalculationResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

    const payload = {
      name: formData.hsnCode,        // ✅ backend needs name
      email: "lead@eximinq.com",     // ✅ backend needs email
      mobile: formData.mobile,
      type: "QUICK_FORM",            // ✅ backend needs type
      hsnCode: formData.hsnCode,
      fobValue: formData.fobValue,
    };

    console.log("Payload being sent:", payload);

const response = await fetch(
  `${process.env.REACT_APP_API_URL}/api/rodtep-scheme`,
  // "http://localhost:5000/api/rodtep-scheme",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.hsnCode,      // ✅ Add karo
      email: "lead@eximinq.com",   // ✅ Add karo
      mobile: formData.mobile,     // ✅ Add karo
      type: "QUICK_FORM",          // ✅ Add karo — pehle comment out tha!
      hsnCode: formData.hsnCode,
      fobValue: formData.fobValue,
    }),
  }
);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Store the calculation result
      setCalculationResult(data);

      // Optional: Show success message
      alert("Request completed successfully!");

      // Optional: Clear form or keep values
      // setFormData({ hsnCode: "", fobValue: "", mobile: "" });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading with Icon */}
      <div className="flex items-center gap-3 mb-2">
        <Calculator className="w-7 h-7 text-brand-600" />
        <h3 className="text-2xl font-bold text-brand-900">
          Benefit Calculator
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Estimate your export refund.
      </p>

      <form onSubmit={handleSubmit}>
        {/* HSN Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HSN Code (Export)
          </label>
          <input
            type="text"
            name="hsnCode"
            value={formData.hsnCode}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 6109 (T-Shirts)"
            required
          />
        </div>

        {/* FOB Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            FOB Value (INR)
          </label>
          <input
            type="number"
            name="fobValue"
            value={formData.fobValue}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 50,00,000"
            required
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
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        {/* Display calculation result if available */}
        {/* {calculationResult && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">
              Estimated Refund:
            </h4>
            <p className="text-2xl font-bold text-green-600">
              ₹ {calculationResult.estimatedRefund?.toLocaleString() || "0"}
            </p>
            <p className="text-sm text-green-600 mt-1">
              *Based on current RoDTEP rates
            </p>
          </div>
        )} */}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Calculating..." : "Calculate Value"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
