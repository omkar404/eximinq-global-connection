import { useState } from "react";
import { Calculator } from "lucide-react";

const DEFAULT_FORM = {
  machineValue: "",
  dutyRate: "",
  mobile: "",
};

const QuickForm = () => {

  const [form, setForm] = useState(DEFAULT_FORM);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "mobile") {

      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

      setForm((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }));

    } else {

      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));

    }

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -----------------------------
      VALIDATION
  ------------------------------ */
  const validate = () => {

    const newErrors = {};

    if (!form.machineValue.trim()) {
      newErrors.machineValue = "Machine value is required";
    }

    if (!form.dutyRate.trim()) {
      newErrors.dutyRate = "Applicable duty is required";
    }

    if (!form.mobile.trim()) {

      newErrors.mobile = "Mobile number is required";

    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {

      newErrors.mobile = "Enter valid 10 digit Indian mobile number";

    }

    return newErrors;
  };

  /* -----------------------------
      SUBMIT HANDLER
  ------------------------------ */
  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {

      const payload = {
        service: "EPCG Scheme",
        machineValue: form.machineValue,
        dutyRate: form.dutyRate,
        mobile: form.mobile,
        type: "Calculate Savings",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/epcg-scheme`,
        // "http://localhost:5000/api/epcg-scheme",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Something went wrong"
        );
      }

      alert("✅ Request submitted successfully");

      // Reset Form
      setForm(DEFAULT_FORM);

    } catch (err) {

      console.error("❌ Error:", err);

      alert(`❌ Submission failed: ${err.message}`);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">

        <div className="bg-sky-100 p-2 rounded-lg">
          <Calculator className="text-sky-600" size={20} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-900">
            Duty Savings Calculator
          </h3>

          <p className="text-slate-500 text-sm">
            See how much you save on machine import.
          </p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        {/* MACHINE VALUE */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Machine Value (CIF)
          </label>

          <input
            type="text"
            name="machineValue"
            value={form.machineValue}
            onChange={handleChange}
            placeholder="e.g. Rs 50,00,000"
            className={`w-full border rounded px-3 py-2 focus:outline-none ${
              errors.machineValue
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.machineValue && (
            <p className="text-red-500 text-xs mt-1">
              {errors.machineValue}
            </p>
          )}

        </div>

        {/* DUTY RATE */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Applicable Duty %
          </label>

          <input
            type="text"
            name="dutyRate"
            value={form.dutyRate}
            onChange={handleChange}
            placeholder="e.g. 28% (BCD + IGST)"
            className={`w-full border rounded px-3 py-2 focus:outline-none ${
              errors.dutyRate
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.dutyRate && (
            <p className="text-red-500 text-xs mt-1">
              {errors.dutyRate}
            </p>
          )}

        </div>

        {/* MOBILE */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Enter 10 digit mobile number"
            maxLength={10}
            className={`w-full border rounded px-3 py-2 focus:outline-none ${
              errors.mobile
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.mobile}
            </p>
          )}

        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 ${
            loading
              ? "bg-sky-400 cursor-not-allowed"
              : "bg-sky-600 hover:bg-sky-700"
          }`}
        >

          <Calculator size={18} />

          {loading ? "Submitting..." : "Calculate Savings"}

        </button>

      </form>

    </div>
  );
};

export default QuickForm;