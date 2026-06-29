import { useState } from "react";
import { ChartColumn } from "lucide-react";
import { getApiUrl } from "../../utils/apiBaseUrl";

const QuickForm = () => { 
  const [form, setForm] = useState({
  sector: "",
  importValue: "",
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

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
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
        sector: form.sector,
        importValue: form.importValue,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        getApiUrl("/api/moowr-scheme"),
        // "http://localhost:5000/api/moowr-scheme", // ✅ http:// is required
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

      alert("✅ We have received your MOOWR request — we'll contact you shortly.");

      setForm({ sector: "", importValue: "", mobile: "" });
      setErrors({});
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <ChartColumn className="text-brand-600" size={28} />
        <h3 className="text-2xl font-bold text-brand-900">Check Feasibility</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        See how much duty you can save.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Industry Sector */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Industry Sector
          </label>
          <select
            name="sector"
            value={form.sector}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Industry</option>
            <option value="Solar / Electronics">Solar / Electronics</option>
            <option value="Textiles / Apparel">Textiles / Apparel</option>
            <option value="Automotive">Automotive</option>
            <option value="Chemicals / Pharma">Chemicals / Pharma</option>
            <option value="Other Manufacturing">Other Manufacturing</option>
          </select>
        </div>

        {/* Import Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Proposed Import Value (₹)
          </label>
          <input
            type="number"
            name="importValue"
            value={form.importValue}
            onChange={handleChange}
            placeholder="e.g. 50000000"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
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
            value={form.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength={10}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
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
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Calculate Savings"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
