import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    commodityType: "",   // Start empty to show placeholder
    sumInsured: "",
    fromCountry: "",
    toCountry: "",
    companyName: "",
    contactPersonName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.commodityType) {
      newErrors.commodityType = "Please select a commodity type";
    }
    if (!form.sumInsured) {
      newErrors.sumInsured = "Sum insured is required";
    } else if (isNaN(form.sumInsured) || Number(form.sumInsured) <= 0) {
      newErrors.sumInsured = "Enter a valid positive amount";
    }
    if (!form.fromCountry.trim()) {
      newErrors.fromCountry = "Origin country is required";
    }
    if (!form.toCountry.trim()) {
      newErrors.toCountry = "Destination country is required";
    }
    if (!form.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }
    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact Person Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid Email ID";
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
        commodityType: form.commodityType,
        sumInsured: form.sumInsured,
        fromCountry: form.fromCountry.trim(),
        toCountry: form.toCountry.trim(),
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        personName: form.contactPersonName.trim(),
        email: form.email.trim(),
        type: "QUICK_FORM",
      };

      console.log("📤 Sending quote request:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/marine-insurance`,
        // "http://localhost:5000/api/marine-insurance", // ✅ http:// is required
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

      alert("✅ Premium quote sent to your email.");

      // Reset form – keep placeholder state
      setForm({
        commodityType: "",
        sumInsured: "",
        fromCountry: "",
        toCountry: "",
        companyName: "",
        contactPersonName: "",
        email: "",
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
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Instant Premium Quote
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Secure your shipment in minutes.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Commodity Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Commodity Type
          </label>
          <select
            name="commodityType"
            value={form.commodityType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.commodityType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select commodity type</option>
            <option>General Cargo (Non-Fragile)</option>
            <option>Machinery / Equipment</option>
            <option>Perishables / Food</option>
            <option>Fragile / Glassware</option>
            <option>Hazardous / Chemicals</option>
          </select>
          {errors.commodityType && (
            <p className="text-red-500 text-xs mt-1">{errors.commodityType}</p>
          )}
        </div>

        {/* Sum Insured */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Sum Insured (Invoice Value + 10%)
          </label>
          <input
            type="number"
            name="sumInsured"
            value={form.sumInsured}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.sumInsured ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 5000000 INR"
          />
          {errors.sumInsured && (
            <p className="text-red-500 text-xs mt-1">{errors.sumInsured}</p>
          )}
        </div>

        {/* From / To Country */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">
              From Country
            </label>
            <input
              type="text"
              name="fromCountry"
              value={form.fromCountry}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.fromCountry ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Origin"
            />
            {errors.fromCountry && (
              <p className="text-red-500 text-xs mt-1">{errors.fromCountry}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">
              To Country
            </label>
            <input
              type="text"
              name="toCountry"
              value={form.toCountry}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.toCountry ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Destination"
            />
            {errors.toCountry && (
              <p className="text-red-500 text-xs mt-1">{errors.toCountry}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. ABC Exports Pvt Ltd"
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Contact Person Name *
            </label>
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. Rahul Sharma"
            />
            {errors.contactPersonName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contactPersonName}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">
              Email ID *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. logistics@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
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
          {loading ? "Submitting..." : "Get Quote"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
