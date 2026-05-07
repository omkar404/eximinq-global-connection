import { useState } from "react";
import { Calculator } from "lucide-react";

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

    if (!form.machineValue.trim()) {
      nextErrors.machineValue = "Machine value is required";
    }

    if (!form.dutyRate.trim()) {
      nextErrors.dutyRate = "Applicable duty is required";
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
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/epcg-scheme`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service: "EPCG Scheme",
            machineValue: form.machineValue.trim(),
            dutyRate: form.dutyRate.trim(),
            mobile: form.mobile.trim(),
            type: SUBMIT_TYPE,
            source: SOURCE,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || data.error || "Failed to submit request");
      }

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
    <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-2xl ring-1 ring-slate-200 md:p-8">
      <div className="mb-5 flex items-center gap-2">
        <div className="rounded-lg bg-sky-50 p-2 text-sky-600">
          <Calculator size={18} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-900">
            Duty Savings Calculator
          </h3>
          <p className="text-sm text-slate-500">
            See how much you save on machine import.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Machine Value (CIF)
          </label>
          <input
            type="text"
            name="machineValue"
            value={form.machineValue}
            onChange={handleChange}
            placeholder="e.g. Rs 50,00,000"
            className={`w-full rounded-md border px-3 py-2.5 text-sm outline-none transition ${
              errors.machineValue
                ? "border-red-400"
                : "border-slate-300 focus:border-sky-500"
            }`}
          />
          {errors.machineValue && (
            <p className="mt-1 text-xs text-red-500">{errors.machineValue}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Applicable Duty %
          </label>
          <input
            type="text"
            name="dutyRate"
            value={form.dutyRate}
            onChange={handleChange}
            placeholder="e.g. 28% (BCD + IGST)"
            className={`w-full rounded-md border px-3 py-2.5 text-sm outline-none transition ${
              errors.dutyRate
                ? "border-red-400"
                : "border-slate-300 focus:border-sky-500"
            }`}
          />
          {errors.dutyRate && (
            <p className="mt-1 text-xs text-red-500">{errors.dutyRate}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            className={`w-full rounded-md border px-3 py-2.5 text-sm outline-none transition ${
              errors.mobile
                ? "border-red-400"
                : "border-slate-300 focus:border-sky-500"
            }`}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg py-3 text-sm font-bold text-white transition ${
            loading
              ? "cursor-not-allowed bg-sky-400"
              : "bg-sky-600 hover:bg-sky-700"
          }`}
        >
          {loading ? "Submitting..." : SUBMIT_TYPE}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
