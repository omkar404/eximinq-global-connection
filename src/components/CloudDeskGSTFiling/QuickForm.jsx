import { useState } from "react";

const DEFAULT_FORM = {
  exportType: "With Payment of IGST (Refund)",
  invoices: "",
  mobile: "",
};

const SUBMIT_TYPE = "Check Compliance";
const SOURCE = "services/gst-returns/";

const QuickForm = () => {
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

    if (!form.exportType) {
      nextErrors.exportType = "Please select an export type";
    }

    if (form.invoices && (!Number.isInteger(Number(form.invoices)) || Number(form.invoices) < 0)) {
      nextErrors.invoices = "Enter a valid invoice count";
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

      const payload = {
        service: "GST Filing Health Check",
        exportType: form.exportType,
        invoices: form.invoices ? Number(form.invoices) : "",
        mobile: form.mobile.trim(),
        type: SUBMIT_TYPE,
        source: SOURCE,
      };

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/gst-filing`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || data.error || "Failed to submit request");
      }

      alert("We will audit your last return and contact you shortly.");
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("GST filing quick form error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-tax-900 mb-2">Filing Health Check</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify your export data accuracy.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Export Type</label>
          <select
            name="exportType"
            value={form.exportType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.exportType ? "border-red-400" : "border-slate-300"
            }`}
          >
            <option>With Payment of IGST (Refund)</option>
            <option>Without Payment of IGST (LUT)</option>
            <option>Deemed Export (EOU/EPCG)</option>
            <option>Service Export</option>
          </select>
          {errors.exportType && (
            <p className="text-red-500 text-xs mt-1">{errors.exportType}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Monthly Invoices (Approx)
          </label>
          <input
            type="number"
            min="0"
            name="invoices"
            value={form.invoices}
            onChange={handleChange}
            placeholder="e.g. 50"
            className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.invoices ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.invoices && (
            <p className="text-red-500 text-xs mt-1">{errors.invoices}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
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
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : SUBMIT_TYPE}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
