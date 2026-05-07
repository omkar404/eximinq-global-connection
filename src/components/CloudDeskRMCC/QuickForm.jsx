import { useState } from "react";
import { AlertTriangle, Phone } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const DEFAULT_FORM = {
  boe: "",
  portCode: "",
  mobile: "",
};

const SUBMIT_TYPE = "Check Status & Intervene";
const SOURCE = "services/rmcc-alert-removal";

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

    if (!form.boe.trim()) nextErrors.boe = "BOE number is required";
    if (!form.portCode.trim()) nextErrors.portCode = "Port code is required";

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
        serviceKey: "rmcc-alert-removal",
        serviceLabel: "RMCC Alert Removal",
        mobile: form.mobile.trim(),
        type: SUBMIT_TYPE,
        source: SOURCE,
        details: {
          "Bill of Entry Number": form.boe.trim(),
          "Port Code": form.portCode.trim().toUpperCase(),
        },
      });

      alert(
        "We are checking your Bill of Entry status on ICEGATE and will call you back within 15 minutes."
      );
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("RMCC quick form error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="text-alert-600" size={28} />
        <h3 className="text-2xl font-bold text-alert-900">
          Emergency Hold Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Submit your Bill of Entry number for instant status.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Bill of Entry (BOE) Number
          </label>
          <input
            type="text"
            name="boe"
            value={form.boe}
            onChange={handleChange}
            placeholder="e.g. 7894561"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.boe ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.boe && <p className="text-red-500 text-xs mt-1">{errors.boe}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Port Code</label>
          <input
            type="text"
            name="portCode"
            value={form.portCode}
            onChange={handleChange}
            placeholder="e.g. INNSA1 / INDEL6"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.portCode ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.portCode && (
            <p className="text-red-500 text-xs mt-1">{errors.portCode}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="9876543210"
              className={`w-full pl-9 border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-400" : "border-slate-300"
              }`}
            />
          </div>
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
