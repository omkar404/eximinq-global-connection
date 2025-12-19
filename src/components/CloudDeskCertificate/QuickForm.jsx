export default function QuickForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will check the applicable FTA and duty benefit for you.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Duty Benefit Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Find applicable agreement for your destination.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Destination Country */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Destination Country
          </label>
          <input
            type="text"
            placeholder="e.g. Thailand / UAE / Australia"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* HS Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HS Code (First 6 digits)
          </label>
          <input
            type="text"
            placeholder="e.g. 870899"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            required
            placeholder="+91 74000 96950"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white 
                     font-bold py-3 rounded-lg transition"
        >
          Check Benefit
        </button>

      </form>
    </div>
  );
}

