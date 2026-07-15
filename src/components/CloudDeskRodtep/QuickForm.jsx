import { useState } from "react";
import { Calculator } from "lucide-react";


const QuickForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    personName: "",
    email: "",
    hsnCode: "",
    fobValue: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

    if (!formData.hsnCode.trim()) {
      newErrors.hsnCode = "HSN code is required";
    }

    if (!formData.fobValue) {
      newErrors.fobValue = "FOB value is required";
    } else if (Number(formData.fobValue) <= 0) {
      newErrors.fobValue = "FOB value must be greater than 0";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
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
        companyName: formData.companyName.trim(),
        personName: formData.personName.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile,
        type: "QUICK_FORM",
        hsnCode: formData.hsnCode,
        fobValue: formData.fobValue,
      };

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/rodtep-scheme`,
      // "http://localhost:5000/api/rodtep-scheme", 
      {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      alert("✅ Submitted successfully!");

      // ✅ Clear form (like a refresh)
      setFormData({
        companyName: "",
        personName: "",
        email: "",
        hsnCode: "",
        fobValue: "",
        mobile: "",
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <div className="flex items-center gap-2 mb-1">
        <Calculator className="w-5 h-5 text-brand-600" />
        <h3 className="text-lg font-bold text-brand-900">Benefit Calculator</h3>
      </div>
      <p className="text-slate-500 mb-3 text-xs">Estimate your export refund.</p>

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

        {/* HSN Code */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            HSN Code (Export)
          </label>
          <input
            type="text"
            name="hsnCode"
            value={formData.hsnCode}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.hsnCode ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 6109 (T-Shirts)"
          />
          {errors.hsnCode && (
            <p className="text-red-500 text-xs mt-1">{errors.hsnCode}</p>
          )}
        </div>

        {/* FOB Value */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            FOB Value (INR)
          </label>
          <input
            type="number"
            name="fobValue"
            value={formData.fobValue}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.fobValue ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 5000000"
          />
          {errors.fobValue && (
            <p className="text-red-500 text-xs mt-1">{errors.fobValue}</p>
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
            maxLength={10}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="9876543210"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 text-sm rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Calculate Value"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;