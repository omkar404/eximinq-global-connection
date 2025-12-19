


import { Calculator } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="text-brand-600" size={28} />
        <h3 className="text-2xl font-bold text-brand-900">
          Duty Savings Calculator
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        See how much you save on machine import.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("We will analyze your duty savings and EO liability.");
        }}
      >
        {/* Machine Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Machine Value (CIF)
          </label>
          <input
            type="number"
            className="w-full border border-slate-300 rounded px-3 py-2 
            focus:outline-none focus:border-brand-500"
            placeholder="e.g. ₹ 50,00,000"
          />
        </div>

        {/* Duty % */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Applicable Duty %
          </label>
          <input
            type="number"
            className="w-full border border-slate-300 rounded px-3 py-2 
            focus:outline-none focus:border-brand-500"
            placeholder="e.g. 28% (BCD + IGST)"
          />
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 
          text-white font-bold py-3 rounded-lg transition"
        >
          Calculate Savings
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
