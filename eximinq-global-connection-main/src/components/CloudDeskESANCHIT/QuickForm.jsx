

import { Wrench, Building2, Phone } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <Wrench className="text-brand-600" size={26} />
        Technical Support
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Facing issues with document upload?
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Our technical team will assist you shortly.");
        }}
      >
        {/* Issue Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Issue Type</label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>DSC Not Detected</option>
            <option>PDF Signature Error</option>
            <option>File Size Too Large</option>
            <option>ICEGATE Login Issue</option>
            <option>Other</option>
          </select>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company Name</label>
          <div className="flex items-center gap-2 border border-slate-300 rounded px-3 focus-within:border-brand-500">
            <Building2 className="text-slate-400" size={18} />
            <input
              type="text"
              className="w-full py-2 focus:outline-none"
              placeholder="e.g. ABC Exports"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <div className="flex items-center gap-2 border border-slate-300 rounded px-3 focus-within:border-brand-500">
            <Phone className="text-slate-400" size={18} />
            <input
              type="tel"
              className="w-full py-2 focus:outline-none"
              placeholder="+91 74000 96950"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Fix My Issue
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
