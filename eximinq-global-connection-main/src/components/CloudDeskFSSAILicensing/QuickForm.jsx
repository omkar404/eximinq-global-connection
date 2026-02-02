import { ClipboardCheck, MapPin, Phone } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <ClipboardCheck className="w-6 h-6 text-brand-900" />
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify product category eligibility.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("We will analyze the product composition and revert.");
        }}
      >
        {/* Product Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Type
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Health Supplements / Nutraceuticals</option>
            <option>Confectionery / Chocolates</option>
            <option>Beverages (Alcoholic/Non-Alcoholic)</option>
            <option>Dairy Products</option>
            <option>Raw Material / Additives</option>
          </select>
        </div>

        {/* Port of Import */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port of Import
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              className="w-full border border-slate-300 rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500"
              placeholder="e.g. Nhava Sheva / Delhi Airport"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="tel"
              required
              className="w-full border border-slate-300 rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500"
              placeholder="+91 74000 96950"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Check Requirements
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
