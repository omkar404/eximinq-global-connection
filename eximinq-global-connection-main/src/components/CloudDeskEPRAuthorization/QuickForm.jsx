import { ShieldCheck, Phone, Factory, Recycle } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
      {/* Header */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-brand-600" />
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">Are you a PIBO?</p>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("We will calculate your EPR target and contact you.");
        }}
      >
        {/* Business Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Business Type</label>
          <div className="relative">
            <select className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500">
              <option>Importer</option>
              <option>Manufacturer / Producer</option>
              <option>Brand Owner</option>
              <option>Recycler</option>
            </select>
            <Factory className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Waste Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Waste Category</label>
          <div className="relative">
            <select className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500">
              <option>Plastic Packaging</option>
              <option>Electronics (E-Waste)</option>
              <option>Batteries (Lead/Li-ion)</option>
              <option>Tyres (Waste/New)</option>
            </select>
            <Recycle className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <div className="relative">
            <input
              type="tel"
              className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500"
              placeholder="+91 74000 96950"
              required
            />
            <Phone className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get EPR Quote
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
