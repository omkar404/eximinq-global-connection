
import { Calculator } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading with Icon */}
      <div className="flex items-center gap-3 mb-2">
        <Calculator className="w-7 h-7 text-brand-600" />
        <h3 className="text-2xl font-bold text-brand-900">Benefit Calculator</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Estimate your export refund.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            "We will calculate your RoDTEP value based on recent shipping bills."
          );
        }}
      >
        {/* HSN Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HSN Code (Export)
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 6109 (T-Shirts)"
          />
        </div>

        {/* FOB Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            FOB Value (INR)
          </label>
          <input
            type="number"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 50,00,000"
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
          Calculate Value
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
