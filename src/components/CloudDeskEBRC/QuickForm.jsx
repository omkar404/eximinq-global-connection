import { useState } from "react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const DEFAULT_FORM = {
  commodityType: "Fresh Fruits / Vegetables",
  countryOfOrigin: "",
  mobile: "",
};

const SUBMIT_TYPE = "Verify Now";
const SOURCE = "services/aqcs-pqms";

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

    if (!form.countryOfOrigin.trim()) {
      nextErrors.countryOfOrigin = "Country of origin is required";
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
        serviceKey: "aqcs-pqms",
        serviceLabel: "AQCS / PQMS",
        mobile: form.mobile.trim(),
        type: SUBMIT_TYPE,
        source: SOURCE,
        details: {
          "Commodity Type": form.commodityType,
          "Country of Origin": form.countryOfOrigin.trim(),
        },
      });

      alert("We will verify the quarantine requirements for your shipment.");
      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (error) {
      console.error("AQCS/PQMS quick form error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Check Requirement</h3>
      <p className="text-slate-500 mb-6 text-sm">Do you need an Import Permit?</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Commodity Type</label>
          <select
            name="commodityType"
            value={form.commodityType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
          >
            <option>Fresh Fruits / Vegetables</option>
            <option>Seeds / Plants / Bulbs</option>
            <option>Timber / Wood Packaging</option>
            <option>Pet (Dog/Cat)</option>
            <option>Livestock / Animal Feed</option>
            <option>Leather / Hides</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Country of Origin</label>
          <input
            type="text"
            name="countryOfOrigin"
            value={form.countryOfOrigin}
            onChange={handleChange}
            placeholder="e.g. USA / Thailand"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.countryOfOrigin ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.countryOfOrigin && (
            <p className="text-red-500 text-xs mt-1">{errors.countryOfOrigin}</p>
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
}
