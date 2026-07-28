import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    email: "",
    categoryType: "",
    country: "",
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

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (form.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    if (!form.personName.trim()) {
      newErrors.personName = "Your name is required";
    } else if (form.personName.trim().length < 2) {
      newErrors.personName = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    // Optional: Add validation for category and country if needed
    if (!form.categoryType) {
      newErrors.categoryType = "Please select a product category";
    }
    if (!form.country) {
      newErrors.country = "Please enter target country";
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
        companyName: form.companyName.trim(),
        personName: form.personName.trim(),
        email: form.email.trim(),
        categoryType: form.categoryType,
        country: form.country,
        mobile: form.mobile,
        type: "QUICK_FORM",
        service: "Free Sale Certificate (FSC)",
        source: "Eligibility Check",
      };

      console.log("📤 Sending data:", payload);

      // Replace with your actual API endpoint
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/free-sale-certificate`,
        // "http://localhost:5000/api/free-sale-certificate",
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

      alert("✅ Eligibility check submitted successfully");

      // Reset form
      setForm({
        companyName: "",
        personName: "",
        email: "",
        categoryType: "",
        country: "",
        mobile: "",
      });
      setErrors({});
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <h3 className="text-lg font-bold text-brand-900 mb-1">
        FSC Eligibility Check
      </h3>
      <p className="text-slate-500 mb-3 text-xs">
        Determine the correct issuing body.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5">
        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
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
        <div>
          <label className="block text-xs font-semibold mb-1">
            Contact Person Name
          </label>
          <input
            type="text"
            name="personName"
            value={form.personName}
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
        <div>
          <label className="block text-xs font-semibold mb-1">
            Email Id
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
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

        {/* Product Category */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Product Category
          </label>
          <select
            name="categoryType"
            value={form.categoryType}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.categoryType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Category</option>
            <option>Medical Device (Class A/B/C/D)</option>
            <option>Pharmaceuticals / Drugs</option>
            <option>Cosmetics / Personal Care</option>
            <option>Ayush / Herbal Products</option>
            <option>General Consumer Goods (Non-Medical)</option>
          </select>
          {errors.categoryType && (
            <p className="text-red-500 text-xs mt-1">{errors.categoryType}</p>
          )}
        </div>

        {/* Target Country */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Target Country
          </label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="e.g. Vietnam / Philippines / Brazil"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.country ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            maxLength={10}
            placeholder="9876543210"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
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
          {loading ? "Submitting..." : "Get Assessment"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;