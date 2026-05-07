import { useState } from "react";
<<<<<<< HEAD
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
=======

const QuickForm = () => {
  const [form, setForm] = useState({
    commodityType: "",   // Start empty to show placeholder
    sumInsured: "",
    fromCountry: "",
    toCountry: "",
  });

>>>>>>> 7ea1273a655ab8ab1be74a22582e4c8f07a66585
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
<<<<<<< HEAD
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
=======
    const newErrors = {};

    if (!form.commodityType) {
      newErrors.commodityType = "Please select a commodity type";
    }
    if (!form.sumInsured) {
      newErrors.sumInsured = "Sum insured is required";
    } else if (isNaN(form.sumInsured) || Number(form.sumInsured) <= 0) {
      newErrors.sumInsured = "Enter a valid positive amount";
    }
    if (!form.fromCountry.trim()) {
      newErrors.fromCountry = "Origin country is required";
    }
    if (!form.toCountry.trim()) {
      newErrors.toCountry = "Destination country is required";
    }

    return newErrors;
>>>>>>> 7ea1273a655ab8ab1be74a22582e4c8f07a66585
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
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
=======
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        commodityType: form.commodityType,
        sumInsured: form.sumInsured,
        fromCountry: form.fromCountry,
        toCountry: form.toCountry,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending quote request:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/marine-insurance`,
        // "http://localhost:5000/api/marine-insurance", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      alert("✅ Premium quote sent to your email.");

      // Reset form – keep placeholder state
      setForm({
        commodityType: "",
        sumInsured: "",
        fromCountry: "",
        toCountry: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
>>>>>>> 7ea1273a655ab8ab1be74a22582e4c8f07a66585
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
<<<<<<< HEAD
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

=======
        {/* Commodity Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Commodity Type
          </label>
          <select
            name="commodityType"
            value={form.commodityType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.commodityType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select commodity type</option>
            <option>General Cargo (Non-Fragile)</option>
            <option>Machinery / Equipment</option>
            <option>Perishables / Food</option>
            <option>Fragile / Glassware</option>
            <option>Hazardous / Chemicals</option>
          </select>
          {errors.commodityType && (
            <p className="text-red-500 text-xs mt-1">{errors.commodityType}</p>
          )}
        </div>

        {/* Sum Insured */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Sum Insured (Invoice Value + 10%)
          </label>
          <input
            type="number"
            name="sumInsured"
            value={form.sumInsured}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.sumInsured ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 5000000 INR"
          />
          {errors.sumInsured && (
            <p className="text-red-500 text-xs mt-1">{errors.sumInsured}</p>
          )}
        </div>

        {/* From / To Country */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">
              From Country
            </label>
            <input
              type="text"
              name="fromCountry"
              value={form.fromCountry}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.fromCountry ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Origin"
            />
            {errors.fromCountry && (
              <p className="text-red-500 text-xs mt-1">{errors.fromCountry}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500">
              To Country
            </label>
            <input
              type="text"
              name="toCountry"
              value={form.toCountry}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.toCountry ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Destination"
            />
            {errors.toCountry && (
              <p className="text-red-500 text-xs mt-1">{errors.toCountry}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
>>>>>>> 7ea1273a655ab8ab1be74a22582e4c8f07a66585
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
<<<<<<< HEAD
            loading ? "bg-brand-400 cursor-not-allowed" : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : SUBMIT_TYPE}
=======
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Quote"}
>>>>>>> 7ea1273a655ab8ab1be74a22582e4c8f07a66585
        </button>
      </form>
    </div>
  );
};

export default QuickForm;