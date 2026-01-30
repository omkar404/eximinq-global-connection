export default function QuickForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Our legal team will analyze the rejection order.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Case Assessment</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Tell us why your case was rejected.
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* Issue Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Issue Category
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Late Submission of EODC Documents</option>
            <option>EO Extension Rejection</option>
            <option>Clubbing of License Rejection</option>
            <option>Name/Address Correction Delay</option>
            <option>Other Procedural Lapse</option>
          </select>
        </div>

        {/* RA Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Regional Authority (RA)
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. DGFT Mumbai / Delhi"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-legal-700 hover:bg-legal-800 text-white font-bold py-3 rounded-lg transition"
        >
          Evaluate Case
        </button>

      </form>
    </div>
  );
}
