import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    product: "",
    fobValue: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace alert with API / modal later
    alert("We will calculate the transferable value and contact you.");
    console.log("Value Calculator Data:", form);
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Value Calculator
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Estimate your license value.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Export Product */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Product (SION)
          </label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. Leather Shoes (J-10)"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* FOB Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            FOB Value (Exported)
          </label>
          <input
            type="number"
            name="fobValue"
            value={form.fobValue}
            onChange={handleChange}
            placeholder="e.g. ₹ 1,00,00,000"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
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
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700
                     text-white font-bold py-3 rounded-lg transition"
        >
          Calculate Value
        </button>
      </form>
    </div>
  );
};

export default QuickForm;



