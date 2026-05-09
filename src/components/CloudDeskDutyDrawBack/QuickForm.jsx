

import { useState } from "react";
import { Calculator } from "lucide-react";

const QuickForm = () => {

  const [formData, setFormData] = useState({
    mobile: "",
    exportProduct: "",
    claimType: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const CLAIM_TYPES = [
    "All Industry Rate (AIR)",
    "Brand Rate Fixation (Rule 6)",
    "Section 74 (Re-export)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.exportProduct.trim()) {
      newErrors.exportProduct = "Export product is required";
    } else if (formData.exportProduct.trim().length < 3) {
      newErrors.exportProduct = "Product name must be at least 3 characters";
    }

    if (!formData.claimType) {
      newErrors.claimType = "Please select a claim type";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const submissionData = { // ✅ name field ke liye exportProduct use karo
        mobile: formData.mobile,  // ✅ backend needs email
        type: "QUICK_FORM",
        exportProduct: formData.exportProduct,
        claimType: formData.claimType,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/duty-drawback`,
        // "http://localhost:5000/api/duty-drawback",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Request submitted successfully");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        exportProduct: "",
        claimType: "",
      });

    } catch (error) {
      alert(error.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="w-6 h-6 text-brand-900" />
        <h3 className="text-2xl font-bold text-brand-900">Drawback Calculator</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Estimate your potential refund.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Export Product */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Product
          </label>
          <input
            type="text"
            name="exportProduct"               // ✅ Add kiya
            value={formData.exportProduct}     // ✅ Add kiya
            onChange={handleChange}            // ✅ Add kiya
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.exportProduct ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Leather Shoes / Machinery Part"
          />
          {errors.exportProduct && (
            <p className="text-red-500 text-xs mt-1">{errors.exportProduct}</p>
          )}
        </div>

        {/* Claim Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Claim Type
          </label>
          <select
            name="claimType"                   // ✅ Add kiya
            value={formData.claimType}         // ✅ Add kiya
            onChange={handleChange}            // ✅ Add kiya
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.claimType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Claim Type</option>
            {CLAIM_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.claimType && (
            <p className="text-red-500 text-xs mt-1">{errors.claimType}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"                      // ✅ Add kiya
            value={formData.mobile}            // ✅ Add kiya
            onChange={handleChange}            // ✅ Add kiya
            maxLength="10"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="+91 74000 96950"
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
          {loading ? "Submitting..." : "Calculate Now"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;