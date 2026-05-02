import { useState } from "react";

export default function QuickForm() {
  // ---------- State ----------
  const [form, setForm] = useState({
    destinationCountry: "",
    invoiceValue: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ---------- Handle input changes ----------
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ---------- Validation ----------
  const validate = () => {
    const newErrors = {};

    // Destination Country
    if (!form.destinationCountry) {
      newErrors.destinationCountry = "Please select a destination country";
    }

    // Invoice Value
    if (!form.invoiceValue) {
      newErrors.invoiceValue = "Please select an invoice value range";
    }

    // Mobile Number
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number (starts with 6-9)";
    }

    return newErrors;
  };

  // ---------- Submit handler ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        destinationCountry: form.destinationCountry,
        invoiceValue: form.invoiceValue,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending eligibility data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/rex-registration`,
        // "http://localhost:5000/api/rex-registration", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Submission failed");
      }

      alert("✅ Eligibility status will be sent to your mobile.");

      // Reset form
      setForm({
        destinationCountry: "",
        invoiceValue: "",
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

  // ---------- Render ----------
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Check Eligibility
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Is REX mandatory for your shipment?
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Destination Country */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Destination Country <span className="text-red-500">*</span>
          </label>
          <select
            name="destinationCountry"
            value={form.destinationCountry}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.destinationCountry ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Country</option>
            <option value="European Union (EU)">European Union (EU)</option>
            <option value="United Kingdom (UK)">United Kingdom (UK)</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Norway">Norway</option>
            <option value="Turkey">Turkey</option>
          </select>
          {errors.destinationCountry && (
            <p className="text-red-500 text-xs mt-1">{errors.destinationCountry}</p>
          )}
        </div>

        {/* Invoice Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Invoice Value (Approx) <span className="text-red-500">*</span>
          </label>
          <select
            name="invoiceValue"
            value={form.invoiceValue}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.invoiceValue ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Invoice Value</option>
            <option value="Below ₹ 6,000">Below ₹ 6,000</option>
            <option value="Above ₹ 6,000">Above ₹ 6,000</option>
          </select>
          {errors.invoiceValue && (
            <p className="text-red-500 text-xs mt-1">{errors.invoiceValue}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
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
            autoComplete="off"
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
          {loading ? "Verifying..." : "Verify Status"}
        </button>
      </form>
    </div>
  );
}