import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    investment: "Less than ₹ 50 Crores (MSME)",
    sector: "",
    mobile: "",           // renamed from 'contact'
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

    // Clear that field's error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER (API CALL)
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        investment: form.investment,
        sector: form.sector,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/iem-registration`,
        // "http://localhost:5000/api/iem-registration",
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

      alert("✅ IEM eligibility check submitted successfully");

      // Reset form (keep default investment, clear sector and mobile)
      setForm({
        investment: "Less than ₹ 50 Crores (MSME)",
        sector: "",
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
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify if IEM applies to your unit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Investment */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Investment (Plant & Machinery)
          </label>
          <select
            name="investment"
            value={form.investment}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>Less than ₹ 50 Crores (MSME)</option>
            <option>More than ₹ 50 Crores (IEM)</option>
          </select>
        </div>

        {/* Industry Sector (Optional) */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Industry Sector
          </label>
          <input
            type="text"
            name="sector"
            value={form.sector}
            onChange={handleChange}
            placeholder="e.g. Textiles, Auto Components"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number (Required) */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
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
          {loading ? "Submitting..." : "Verify Requirement"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm; 