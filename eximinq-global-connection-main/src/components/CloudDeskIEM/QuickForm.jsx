import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    investment: "Less than ₹ 50 Crores (MSME)",
    sector: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.contact) return;

    onSubmit?.({
      service: "IEM Eligibility Check",
      investment: form.investment,
      sector: form.sector,
      contact: form.contact,
    });

    // Optional reset
    setForm({
      investment: "Less than ₹ 50 Crores (MSME)",
      sector: "",
      contact: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify if IEM applies to your unit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Investment */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Investment (Plant & Machinery)
          </label>
          <select
            name="investment"
            value={form.investment}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>Less than ₹ 50 Crores (MSME)</option>
            <option>More than ₹ 50 Crores (IEM)</option>
          </select>
        </div>

        {/* Industry Sector */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Industry Sector
          </label>
          <input
            type="text"
            name="sector"
            value={form.sector}
            onChange={handleChange}
            placeholder="e.g. Textiles, Auto Components"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={form.contact}
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
          Verify Requirement
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
