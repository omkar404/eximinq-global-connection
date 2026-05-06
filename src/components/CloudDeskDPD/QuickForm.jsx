import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    volume: "",
    port: "",                     // empty → shows placeholder
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

  const validate = () => {
    const newErrors = {};

    if (!form.volume) {
      newErrors.volume = "Monthly volume is required";
    } else if (isNaN(Number(form.volume)) || Number(form.volume) <= 0) {
      newErrors.volume = "Enter a valid positive volume";
    }

    if (!form.port) {
      newErrors.port = "Please select a port";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
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
        volume: form.volume,
        port: form.port,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/dpd-registration`,
        // "http://localhost:5000/api/dpd-registration", // ✅ http:// is required
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

      alert("✅ Savings calculation request submitted successfully");

      // Reset form
      setForm({
        volume: "",
        port: "",
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
      <h3 className="text-2xl font-bold text-port-900 mb-2">
        Savings Calculator
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Estimate your DPD savings.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Monthly Volume */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Monthly Volume (TEUs)
          </label>
          <input
            type="text"               // text to avoid number quirks, validation handles numeric
            name="volume"
            value={form.volume}
            onChange={handleChange}
            placeholder="e.g. 20"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.volume ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.volume && (
            <p className="text-red-500 text-xs mt-1">{errors.volume}</p>
          )}
        </div>

        {/* Current Port – with placeholder */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Current Port
          </label>
          <select
            name="port"
            value={form.port}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.port ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select port</option>   {/* placeholder */}
            <option>Nhava Sheva (JNPT)</option>
            <option>Mundra</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
          {errors.port && (
            <p className="text-red-500 text-xs mt-1">{errors.port}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
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