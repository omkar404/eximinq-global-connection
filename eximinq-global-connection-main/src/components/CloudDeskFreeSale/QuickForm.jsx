import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    category: "",
    country: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mobile) return;

    onSubmit?.({
      service: "Free Sale Certificate (FSC)",
      source: "Eligibility Check",
      category: form.category,
      country: form.country,
      mobile: form.mobile,
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        FSC Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Determine the correct issuing body.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Category</option>
            <option>Medical Device (Class A/B/C/D)</option>
            <option>Pharmaceuticals / Drugs</option>
            <option>Cosmetics / Personal Care</option>
            <option>Ayush / Herbal Products</option>
            <option>General Consumer Goods (Non-Medical)</option>
          </select>
        </div>

        {/* Target Country */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Target Country
          </label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="e.g. Vietnam / Philippines / Brazil"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
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
          className="w-full bg-brand-600 hover:bg-brand-700
                     text-white font-bold py-3 rounded-lg transition"
        >
          Get Assessment
        </button>
      </form>
    </div>
  );
};

export default QuickForm;




