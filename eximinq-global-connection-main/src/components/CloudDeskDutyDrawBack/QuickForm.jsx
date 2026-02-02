import { Calculator } from "lucide-react";

const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will analyze your product and revert with the applicable rate.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="w-6 h-6 text-brand-900" />
        <h3 className="text-2xl font-bold text-brand-900">Drawback Calculator</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Estimate your potential refund.
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* Export Product */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Product
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. Leather Shoes / Machinery Part"
          />
        </div>

        {/* Claim Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Claim Type
          </label>
          <select
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          >
            <option>All Industry Rate (AIR)</option>
            <option>Brand Rate Fixation (Rule 6)</option>
            <option>Section 74 (Re-export)</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 
                     text-white font-bold py-3 rounded-lg transition"
        >
          Calculate Now
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
