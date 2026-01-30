import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    targetMarket: "UAE / Saudi Arabia (GSO)",
    productCategory: "Processed Food",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❗ This is where calculation OR modal/email trigger goes
    alert("We will calculate the eligible subsidy amount.");

    console.log("Benefit Calculator Data:", {
      ...form,
      service: "IEC Registration",
      source: "Benefit Calculator",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
       Verify compliance requirements for your market.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Target Market */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Target Market
          </label>
          <select
            name="targetMarket"
            value={form.targetMarket}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          >
                            <option>UAE / Saudi Arabia (GSO)</option>
                            <option>Malaysia (JAKIM)</option>
                            <option>Indonesia (MUI / BPJPH)</option>
                            <option>Global (General)</option>
          </select>
        </div>

        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>
          <select
            name="productCategory"
            value={form.productCategory}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          >
                           <option>Processed Food</option>
                            <option>Meat & Poultry</option>
                            <option>Cosmetics / Personal Care</option>
                            <option>Pharmaceuticals</option>
                            <option>Additives / Ingredients</option>
          </select>
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
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 
                     text-white font-bold py-3 rounded-lg transition"
        >
          Check Requirements
        </button>
      </form>
    </div>
  );
};

export default QuickForm;

