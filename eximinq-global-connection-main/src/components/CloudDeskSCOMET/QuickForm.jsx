


import { SearchCheck } from "lucide-react";

const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will analyze the technical specifications and revert.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
      <div className="flex items-center gap-3 mb-2">
        <SearchCheck className="w-6 h-6 text-brand-900" />
        <h3 className="text-2xl font-bold text-brand-900">Item Verification</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Check if your product requires a license.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Name / CAS No.
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                     focus:outline-none focus:border-brand-500"
            placeholder="e.g. Titanium Alloy / Triethanolamine"
          />
        </div>

        {/* Technical Specification */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Technical Specification
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                     focus:outline-none focus:border-brand-500"
            placeholder="e.g. High speed machining center"
          />
        </div>

        {/* End User Country */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            End User Country
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                     focus:outline-none focus:border-brand-500"
            placeholder="e.g. Germany"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white 
                   font-bold py-3 rounded-lg transition"
        >
          Check Status
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
