export default function QuickForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted successfully!");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Service Request</h3>
      <p className="text-slate-500 mb-6 text-sm">Select the service you need.</p>

      <form onSubmit={handleSubmit}>
        
        {/* Service Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Service Type</label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Steel Import NOC (SIMS)</option>
            <option>Coal Import Reg (CIMS)</option>
            <option>Paper Import Reg (PIMS)</option>
            <option>Chip Import Reg (CHIMS)</option>
            <option>Non-Ferrous Reg (NFMIMS)</option>
          </select>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company Name</label>
          <input
            type="text"
            placeholder="e.g. ABC Pvt Ltd"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            placeholder="+91 74000 96950"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}
