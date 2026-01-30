import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    product: "",
    investment: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.product || !form.investment) return;

    onSubmit?.({
      service: "Category Verification (IL / IEM)",
      product: form.product,
      investmentCrores: form.investment,
      location: form.location,
    });

    // Optional reset
    setForm({
      product: "",
      investment: "",
      location: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Category Verification</h3>
       <p className="text-slate-500 mb-6 text-sm">
        Confirm if your product requires IL or IEM.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Proposed Product */}
        <div>
<label className="block text-sm font-semibold mb-1">
            Proposed Product
          </label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. Gunpowder / Ethanol / Aerospace Parts"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Investment */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Investment (₹ Crores)
          </label>
          <input
            type="number"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g. 100"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="State / District"
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
