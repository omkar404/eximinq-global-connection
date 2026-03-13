import { useState } from "react";

const QuickForm = ({ onSubmit }) => {

  const [form, setForm] = useState({
    turnover: "",
    bonus: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* ---------------------
     VALIDATION FUNCTION
  ---------------------- */

  const validate = () => {
    const newErrors = {};

    // Turnover validation
    if (!form.turnover) {
      newErrors.turnover = "Export turnover is required";
    } else if (Number(form.turnover) <= 0) {
      newErrors.turnover = "Turnover must be greater than 0";
    }

    // Bonus validation
    if (!form.bonus) {
      newErrors.bonus = "Please select a bonus category";
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    return newErrors;
  };

  /* ---------------------
     SUBMIT
  ---------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const payload = {
        service: "Star Export House Status",
        source: "Status Calculator",
        turnoverUSD: form.turnover,
        bonusCategory: form.bonus,
        mobile: form.mobile,
      };

      onSubmit?.(payload);

      const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/star-export-house`,
        // "http://localhost:5000/api/star-export-house",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message);
      }

      alert("Request submitted successfully");

      setForm({
        turnover: "",
        bonus: "",
        mobile: "",
      });

    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Status Calculator
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Determine your Star Export House category.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Turnover */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Export Turnover (FOB USD)
          </label>

          <input
            type="number"
            name="turnover"
            value={form.turnover}
            onChange={handleChange}
            placeholder="Last 3 FYs + Current FY"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />

          {errors.turnover && (
            <p className="text-red-500 text-sm">{errors.turnover}</p>
          )}
        </div>

        {/* Bonus */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Bonus Category
          </label>

          <select
            name="bonus"
            value={form.bonus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select Category</option>
            <option>MSME (Micro / Small / Medium)</option>
            <option>ISO Certified Unit</option>
            <option>Agri / Fruits / Vegetables Export</option>
            <option>North East Region Unit</option>
          </select>

          {errors.bonus && (
            <p className="text-red-500 text-sm">{errors.bonus}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength="10"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          {loading ? "Submitting..." : "Check My Star Rating"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;