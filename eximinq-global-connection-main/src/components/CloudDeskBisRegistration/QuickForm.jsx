import { ShieldCheck } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <ShieldCheck className="text-brand-600 w-7 h-7" />
        <h3 className="text-2xl font-bold text-brand-900">Compliance Check</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Is your HS Code under QCO?
      </p>

      {/* FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("We will check the BIS applicability for your product.");
        }}
      >
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Product Name</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. Steel Coil, LED Light, Toy"
          />
        </div>

        {/* HS Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HS Code (Optional)
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. 7210"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
          />
        </div>

        {/* Button */}
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
