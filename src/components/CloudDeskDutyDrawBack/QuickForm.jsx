import { useState } from "react";
import { Calculator } from "lucide-react";
import { getApiUrl } from "../../utils/apiBaseUrl";

const QuickForm = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    personName: "",
    email: "",
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

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    if (!formData.personName.trim()) {
      newErrors.personName = "Your name is required";
    } else if (formData.personName.trim().length < 2) {
      newErrors.personName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

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

      const submissionData = {
        companyName: formData.companyName.trim(),
        personName: formData.personName.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile,
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
        companyName: "",
        personName: "",
        email: "",
        mobile: "",
        exportProduct: "",
        claimType: "",
      });
      setErrors({});

    } catch (error) {
      alert(error.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <div className="flex items-center gap-2 mb-1">
        <Calculator className="w-5 h-5 text-brand-900" />
        <h3 className="text-lg font-bold text-brand-900">Drawback Calculator</h3>
      </div>

      <p className="text-slate-500 mb-3 text-xs">
        Estimate your potential refund.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Company Name */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.companyName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Acme Exports Pvt Ltd"
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person Name */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Contact Person Name
          </label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.personName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Rahul Sharma"
          />
          {errors.personName && (
            <p className="text-red-500 text-xs mt-1">{errors.personName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Email Id
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. rahul@acmeexports.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Export Product */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Export Product
          </label>
          <input
            type="text"
            name="exportProduct"
            value={formData.exportProduct}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.exportProduct ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Leather Shoes / Machinery Part"
          />
          {errors.exportProduct && (
            <p className="text-red-500 text-xs mt-1">{errors.exportProduct}</p>
          )}
        </div>

        {/* Claim Type */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Claim Type
          </label>
          <select
            name="claimType"
            value={formData.claimType}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
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
        <div className="mb-3">
          <label className="block text-xs font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            maxLength="10"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
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
          className={`w-full text-white font-bold py-2 text-sm rounded-lg transition ${
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