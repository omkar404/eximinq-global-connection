import { useState } from "react";

export default function QuickForm() {
  const [category, setCategory] = useState("Electronics");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will review your product label and revert.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      <h3 className="text-2xl font-bold text-brand-900 mb-2">Compliance Audit</h3>
      <p className="text-slate-500 mb-6 text-sm">Does your label meet Indian Standards?</p>

      <form onSubmit={handleSubmit}>

        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Product Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          >
            <option>Electronics</option>
            <option>Food Items</option>
            <option>Cosmetics</option>
            <option>Toys / Games</option>
            <option>Industrial Goods</option>
          </select>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company Name</label>

          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. ABC Trading"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>

          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get Label Review
        </button>

      </form>
    </div>
  );
}

