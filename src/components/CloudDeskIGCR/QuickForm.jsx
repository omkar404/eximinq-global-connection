import { useState } from "react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const DEFAULT_FORM = {
  iec: "",
  notification: "",
  mobile: "",
};

const SUBMIT_TYPE = "Check Status";
const SOURCE = "services/igcr-returns";

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
    const iecRegex = /^\d{10}$/;

    if (!form.iec.trim()) {
      nextErrors.iec = "IEC is required";
    } else if (!iecRegex.test(form.iec.trim())) {
      nextErrors.iec = "Enter valid 10 digit IEC";
    }

    if (!form.notification.trim()) {
      nextErrors.notification = "Notification number is required";
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
        serviceKey: "igcr-returns",
        serviceLabel: "IGCR Returns",
        mobile: form.mobile.trim(),
        type: SUBMIT_TYPE,
        source: SOURCE,
        details: {
          IEC: form.iec.trim(),
          "Notification Number": form.notification.trim(),
        },
      });

      alert("We will verify your pending returns status and contact you shortly.");
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("IGCR quick form error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify your pending returns status.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company IEC</label>
          <input
            type="text"
            name="iec"
            value={form.iec}
            onChange={handleChange}
            placeholder="e.g. 0513456789"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.iec ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.iec && <p className="text-red-500 text-xs mt-1">{errors.iec}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Notification No.</label>
          <input
            type="text"
            name="notification"
            value={form.notification}
            onChange={handleChange}
            placeholder="e.g. 50/2017-Cus"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.notification ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.notification && (
            <p className="text-red-500 text-xs mt-1">{errors.notification}</p>
          )}
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
};

export default QuickForm;
