import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    turnover: "",
    bonus: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mobile || !form.turnover) return;

    onSubmit?.({
      service: "Star Export House Status",
      source: "Status Calculator",
      turnoverUSD: form.turnover,
      bonusCategory: form.bonus,
      mobile: form.mobile,
    });
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
        {/* Export Turnover */}
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
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* Bonus Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Bonus Category
          </label>
          <select
            name="bonus"
            value={form.bonus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">None (General Exporter)</option>
            <option>MSME (Micro / Small / Medium)</option>
            <option>ISO Certified Unit</option>
            <option>Agri / Fruits / Vegetables Export</option>
            <option>North East Region Unit</option>
          </select>
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
            placeholder="+91 74000 96950"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Check My Star Rating
        </button>
      </form>
    </div>
  );
};

export default QuickForm;




