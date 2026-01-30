

import { BarChart3 } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
      {/* Heading + Icon */}
      <div className="flex items-center gap-3 mb-2">
        <BarChart3 className="text-brand-600" size={28} />
        <h3 className="text-2xl font-bold text-brand-900">Check Feasibility</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        See how much duty you can save.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Our experts will analyze your savings potential.");
        }}
      >
        {/* Industry Sector */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Industry Sector
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Solar / Electronics</option>
            <option>Textiles / Apparel</option>
            <option>Automotive</option>
            <option>Chemicals / Pharma</option>
            <option>Other Manufacturing</option>
          </select>
        </div>

        {/* Proposed Import Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Proposed Import Value (₹)
          </label>
          <input
            type="number"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 5 Crores"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Calculate Savings
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
