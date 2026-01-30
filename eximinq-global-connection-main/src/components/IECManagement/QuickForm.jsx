const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      <h3 className="text-2xl font-bold text-brand-900 mb-2">Get IEC in 24 Hours</h3>
      <p className="text-slate-500 mb-6 text-sm">Fill the details to get expert call back.</p>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Request received.");
      }}>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="+917400096950"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Apply Now
        </button>

      </form>

    </div>
  );
};

export default QuickForm;
