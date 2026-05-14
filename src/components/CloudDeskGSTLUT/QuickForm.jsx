import { useState } from "react";

const LUTEligibilityCheck = () => {
  const [form, setForm] = useState({
    gstin: "",
    financialYear: "2024-2025",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else if (name === "gstin") {
      setForm((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!form.gstin) {
      newErrors.gstin = "GSTIN number is required";
    } else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(form.gstin)) {
      newErrors.gstin = "Enter a valid 15-character GSTIN";
    }

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
        gstin: form.gstin,
        financialYear: form.financialYear,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/gst-lut-filing`,
        // "http://localhost:5000/api/gst-lut-filing", // ✅ http:// is required        
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

      alert("✅ Eligibility checked successfully – we'll contact you shortly.");

      setForm({ gstin: "", financialYear: "2024-2025", mobile: "" });
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
        LUT Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify if you can file LUT instantly.
      </p>

      <form onSubmit={handleSubmit}>
        {/* GSTIN Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            GSTIN Number
          </label>
          <input
            type="text"
            name="gstin"
            value={form.gstin}
            onChange={handleChange}
            placeholder="e.g. 27ABCDE1234F1Z5"
            maxLength={15}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.gstin ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.gstin && (
            <p className="text-red-500 text-xs mt-1">{errors.gstin}</p>
          )}
        </div>

        {/* Financial Year */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Financial Year
          </label>
          <select
            name="financialYear"
            value={form.financialYear}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500 bg-white"
          >
            <option value="2024-2025">2024-2025 (Current)</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2021-2022">2021-2022</option>
          </select>
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
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="9876543210"
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
          {loading ? "Checking..." : "Check Status"}
        </button>
      </form>
    </div>
  );
};

export default LUTEligibilityCheck;