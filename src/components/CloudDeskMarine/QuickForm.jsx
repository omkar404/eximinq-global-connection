import { Calculator } from "lucide-react";

const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "We have received your project details. An expert will call you shortly."
    );
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="text-brand-600" size={28} />
        <h3 className="text-2xl font-bold text-brand-900">
          Project Enquiry
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Tell us about your heavy lift requirement.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* Cargo Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Cargo Type
          </label>
          <select
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Cargo Type</option>
            <option>Heavy Machinery</option>
            <option>Turbines / Generators</option>
            <option>Construction Equipment</option>
            <option>Boilers / Pressure Vessels</option>
            <option>Plant Relocation</option>
          </select>
        </div>

        {/* Weight + Dimension */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
              Weight (MT)
            </label>
            <input
              type="number"
              required
              placeholder="e.g. 50"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
              Max Dimension (L × W × H)
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 12m × 4m × 3.5m"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get Estimate
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
