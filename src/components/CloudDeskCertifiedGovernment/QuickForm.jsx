import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyType: "Manufacturer Exporter",
    aeoStatus: "No AEO Status",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes with mobile number sanitisation
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation (same as your first component)
  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  // Submit handler with API call, loading, error handling
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        companyType: form.companyType,
        aeoStatus: form.aeoStatus,
        mobile: form.mobile,
        type: "QUICK_FORM",   // or any type your backend expects
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/factory-stuffing`,
        // "http://localhost:5000/api/factory-stuffing",
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

      alert("✅ Eligibility verified successfully");

      // Reset form to defaults (same as original)
      setForm({
        companyType: "Manufacturer Exporter",
        aeoStatus: "No AEO Status",
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
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-logistics-900 mb-2">
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Can you self‑seal your cargo?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Company Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Type
          </label>
          <select
            name="companyType"
            value={form.companyType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>Manufacturer Exporter</option>
            <option>Merchant Exporter</option>
            <option>Warehouse / 3PL</option>
          </select>
        </div>

        {/* AEO Status */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            AEO Status
          </label>
          <select
            name="aeoStatus"
            value={form.aeoStatus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>No AEO Status</option>
            <option>AEO T1 / T2 / T3</option>
          </select>
        </div>

        {/* Mobile Number (with validation & error display) */}
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

        {/* Submit Button with loading state */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Verify Eligibility"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;