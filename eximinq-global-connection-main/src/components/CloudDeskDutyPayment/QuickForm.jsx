import { Calculator } from "lucide-react";

const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will calculate the exact duty and email you.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
      {/* Heading */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <Calculator className="text-brand-600" size={24} />
        Duty Calculator
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Get an estimate before the shipment arrives.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        
        {/* HSN */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HSN Code
          </label>
          <input
            type="text"
            placeholder="e.g. 8504"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* CIF VALUE */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            CIF Value (INR)
          </label>
          <input
            type="number"
            placeholder="e.g. 1000000"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* COUNTRY */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Country of Origin
          </label>
          <input
            type="text"
            placeholder="e.g. China / Japan"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* MOBILE NUMBER */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="+91 7400096950"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white 
                     font-bold py-3 rounded-lg transition"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
