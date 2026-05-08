

import { useState } from "react";
import { BarChart3 } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    sector: "",
    importValue: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const SECTORS = [
    "Solar / Electronics",
    "Textiles / Apparel",
    "Automotive",
    "Chemicals / Pharma",
    "Other Manufacturing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -------------------------
     VALIDATION
  -------------------------- */

  const validate = () => {
    const newErrors = {};

    if (!form.sector) {
      newErrors.sector = "Please select industry sector";
    }

    if (!form.importValue) {
      newErrors.importValue = "Import value is required";
    }

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -------------------------
     SUBMIT
  -------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const payload = {
        name: form.sector || "MOOWR Lead",
        email: "lead@eximinq.com",
        mobile: form.mobile,
        type: "QUICK_FORM",
        sector: form.sector,
        importValue: form.importValue,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/moowr-scheme`,
        // "http://localhost:5000/api/moowr-scheme",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message);
      }

      alert("Request submitted successfully");

      setForm({
        sector: "",
        importValue: "",
        mobile: "",
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <BarChart3 className="text-brand-600" size={28} />
        <h3 className="text-2xl font-bold text-brand-900">Check Feasibility</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        See how much duty you can save.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Sector */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Industry Sector
          </label>

          <select
            name="sector"
            value={form.sector}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select Industry</option>

            {SECTORS.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>

          {errors.sector && (
            <p className="text-red-500 text-sm mt-1">{errors.sector}</p>
          )}
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
            className="w-full border border-slate-300 rounded px-3 py-2"
          />

          {errors.importValue && (
            <p className="text-red-500 text-sm mt-1">{errors.importValue}</p>
          )}
        </div>

        {/* Mobile */}
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
            className="w-full border border-slate-300 rounded px-3 py-2"
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Calculating..." : "Calculate Savings"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
