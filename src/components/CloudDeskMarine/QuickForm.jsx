import { useState } from "react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const DEFAULT_FORM = {
  machineValue: "",
  dutyRate: "",
  mobile: "",
};

const SUBMIT_TYPE = "Calculate Savings";
const SOURCE = "services/epcg-scheme";

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

    if (!form.machineValue.trim()) nextErrors.machineValue = "Machine value is required";
    if (!form.dutyRate.trim()) nextErrors.dutyRate = "Applicable duty is required";

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
        serviceKey: "epcg-scheme",
        serviceLabel: "EPCG Scheme",
        mobile: form.mobile.trim(),
        type: SUBMIT_TYPE,
        source: SOURCE,
        details: {
          "Machine Value (CIF)": form.machineValue.trim(),
          "Applicable Duty Percent": form.dutyRate.trim(),
        },
      });

      alert("We will calculate your EPCG duty savings and contact you shortly.");
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("EPCG quick form error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Instant Premium Quote
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Secure your shipment in minutes.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Machine Value (CIF)</label>
          <input
            type="text"
            name="machineValue"
            value={form.machineValue}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.machineValue ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="e.g. Rs 2,50,00,000"
          />
          {errors.machineValue && (
            <p className="text-red-500 text-xs mt-1">{errors.machineValue}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Applicable Duty %</label>
          <input
            type="text"
            name="dutyRate"
            value={form.dutyRate}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.dutyRate ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="e.g. 28% (BCD + IGST)"
          />
          {errors.dutyRate && (
            <p className="text-red-500 text-xs mt-1">{errors.dutyRate}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="9876543210"
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
};

export default QuickForm;