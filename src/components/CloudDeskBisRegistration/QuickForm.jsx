import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const DEFAULT_FORM = {
  productName: "",
  hsCode: "",
  mobile: "",
};

const SUBMIT_TYPE = "Check Status";
const SOURCE = "services/bis-registration";

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

    if (!form.productName.trim()) {
      nextErrors.productName = "Product name is required";
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
        serviceKey: "bis-registration",
        serviceLabel: "BIS Registration",
        mobile: form.mobile.trim(),
        type: SUBMIT_TYPE,
        source: SOURCE,
        details: {
          "Product Name": form.productName.trim(),
          "HS Code": form.hsCode.trim(),
        },
      });

      alert("We will check the BIS applicability for your product.");
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("BIS quick form error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <ShieldCheck className="text-brand-600 w-7 h-7" />
        <h3 className="text-2xl font-bold text-brand-900">Compliance Check</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">Is your HS Code under QCO?</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Product Name</label>
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.productName ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="e.g. Steel Coil, LED Light, Toy"
          />
          {errors.productName && (
            <p className="text-red-500 text-xs mt-1">{errors.productName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HS Code (Optional)
          </label>
          <input
            type="text"
            name="hsCode"
            value={form.hsCode}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
            placeholder="e.g. 7210"
          />
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
