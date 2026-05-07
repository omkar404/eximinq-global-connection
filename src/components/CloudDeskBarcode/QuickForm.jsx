import { useState } from "react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const DEFAULT_FORM = {
  skus: "",
  turnover: "",
  mobile: "",
};

const SUBMIT_TYPE = "See Packages";
const SOURCE = "services/barcode-registration";

const QuickForm = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      setForm((prev) => ({ ...prev, [name]: value.replace(/\D/g, "").slice(0, 10) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.skus) {
      nextErrors.skus = "Please select SKU volume";
    }

    if (!form.turnover) {
      nextErrors.turnover = "Please select company turnover";
    }

    if (!form.mobile) {
      nextErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
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
        serviceKey: "barcode-registration",
        serviceLabel: "Barcode Registration",
        mobile: form.mobile,
        type: SUBMIT_TYPE,
        source: SOURCE,
        details: {
          "SKU Volume": form.skus,
          "Company Turnover": form.turnover,
        },
      });

      alert("We will send the barcode package details to you shortly.");
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("Barcode quick form error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-scan-900 mb-2">
        Requirements Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        How many products do you have?
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Number of SKUs (Products)
          </label>
          <select
            name="skus"
            value={form.skus}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.skus ? "border-red-400" : "border-slate-300"
            }`}
          >
            <option value="">Select</option>
            <option>Up to 100 SKUs</option>
            <option>100 to 1,000 SKUs</option>
            <option>1,000 to 10,000 SKUs</option>
            <option>10,000+ SKUs</option>
          </select>
          {errors.skus && <p className="text-red-500 text-xs mt-1">{errors.skus}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company Turnover</label>
          <select
            name="turnover"
            value={form.turnover}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.turnover ? "border-red-400" : "border-slate-300"
            }`}
          >
            <option value="">Select</option>
            <option>Up to Rs 50 Crores</option>
            <option>Rs 50 - Rs 250 Crores</option>
            <option>Rs 250 - Rs 500 Crores</option>
            <option>Above Rs 500 Crores</option>
          </select>
          {errors.turnover && (
            <p className="text-red-500 text-xs mt-1">{errors.turnover}</p>
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
