import { useState } from "react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const DEFAULT_FORM = {
  gstin: "",
  financialYear: "2024-2025 (Current)",
  mobile: "",
};

const SUBMIT_TYPE = "Check Status";
const SOURCE = "services/gst-lut-filing";

export default function QuickForm() {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    const mobileRegex = /^[6-9]\d{9}$/;
    const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}$/i;

    if (!form.gstin.trim()) {
      nextErrors.gstin = "GSTIN is required";
    } else if (!gstinRegex.test(form.gstin.trim())) {
      nextErrors.gstin = "Enter a valid GSTIN";
    }

    if (!form.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile.trim())) {
      nextErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      setLoading(true);
      await submitServiceQuickForm({
        serviceKey: "gst-lut-filing",
        serviceLabel: "GST LUT Filing",
        mobile: form.mobile.trim(),
        type: SUBMIT_TYPE,
        source: SOURCE,
        details: {
          GSTIN: form.gstin.trim().toUpperCase(),
          "Financial Year": form.financialYear,
        },
      });

      alert("Our GST expert will contact you shortly.");
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("GST LUT quick form error:", error);
      alert("Submission failed. Please try again.");
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
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">GSTIN Number</label>
          <input
            type="text"
            name="gstin"
            value={form.gstin}
            onChange={handleChange}
            placeholder="e.g. 27ABCDE1234F1Z5"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.gstin ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.gstin && (
            <p className="text-red-500 text-xs mt-1">{errors.gstin}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Financial Year</label>
          <select
            name="financialYear"
            value={form.financialYear}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
          >
            <option>2024-2025 (Current)</option>
            <option>2023-2024 (Previous)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading ? "bg-brand-400 cursor-not-allowed" : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : SUBMIT_TYPE}
        </button>
      </form>
    </div>
  );
}
