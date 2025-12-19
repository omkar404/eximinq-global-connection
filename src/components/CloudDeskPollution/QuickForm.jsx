import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    sector: "",
    investment: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mobile) return;

    onSubmit?.(form);

    // same intent as original inline alert
    alert("We will classify your industry and contact you.");

    setForm({
      sector: "",
      investment: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-eco-900 mb-2">
        Category Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Find your industry classification.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Industry Sector */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Industry Sector
          </label>
          <input
            type="text"
            name="sector"
            value={form.sector}
            onChange={handleChange}
            placeholder="e.g. Chemical / Textile / Engineering"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Investment */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Investment (Plant & Machinery)
          </label>
          <input
            type="text"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g. ₹ 5 Crores"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
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
          Check Status
        </button>
      </form>
    </div>
  );
};

export default QuickForm;

