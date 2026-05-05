import { useState } from "react";

export default function QuickForm() {
  // ---------- Unified state (like first component) ----------
  const [form, setForm] = useState({
    productName: "",
    frequency: "2.4 GHz (Bluetooth/Wi-Fi)",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ---------- Handle all inputs ----------
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      // Allow only digits, max 10
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for that field while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ---------- Validation (only mobile required, like first component) ----------
  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }

    return newErrors;
  };

  // ---------- Submit handler with API call ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        productName: form.productName,
        frequency: form.frequency,
        mobile: form.mobile,
        type: "QUICK_FORM", // Differentiate from EPC form
      };

      console.log("📤 Sending WPC data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/wpc-license`,
        // "http://localhost:5000/api/wpc-license", // for local testing
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

      alert("✅ We will check the frequency band and revert.");

      // Reset form (keep default frequency)
      setForm({
        productName: "",
        frequency: "2.4 GHz (Bluetooth/Wi-Fi)",
        mobile: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // ---------- Render (same structure as first component) ----------
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Check Requirement
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Does your product need WPC?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. Wireless Mouse, Drone"
          />
        </div>

        {/* Frequency Band */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Frequency Band
          </label>
          <select
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          >
            <option>2.4 GHz (Bluetooth/Wi-Fi)</option>
            <option>5 GHz (Wi-Fi)</option>
            <option>865-867 MHz (RFID)</option>
            <option>Other / Unknown</option>
          </select>
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