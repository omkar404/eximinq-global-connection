import { Building2, Ruler, Phone } from "lucide-react";

const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will check availability and contact you.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Space Enquiry</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Tell us your storage requirements.
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* Storage Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Storage Type</label>
          <div className="relative">
            <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none 
              focus:border-brand-500">
              <option>Bonded Warehouse (Duty Free)</option>
              <option>General Warehouse (Duty Paid)</option>
              <option>Temperature Controlled</option>
              <option>Open Yard (Project Cargo)</option>
            </select>
            <Building2 className="absolute right-3 top-3 text-slate-400" size={18} />
          </div>
        </div>

        {/* Area / Pallets */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Area / Pallets</label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. 5000 sqft or 50 Pallets"
              className="w-full border border-slate-300 rounded px-3 py-2 
              focus:outline-none focus:border-brand-500"
            />
            <Ruler className="absolute right-3 top-3 text-slate-400" size={18} />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <div className="relative">
            <input
              type="tel"
              placeholder="+91 74000 96950"
              required
              className="w-full border border-slate-300 rounded px-3 py-2 
              focus:outline-none focus:border-brand-500"
            />
            <Phone className="absolute right-3 top-3 text-slate-400" size={18} />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 
          rounded-lg transition"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
