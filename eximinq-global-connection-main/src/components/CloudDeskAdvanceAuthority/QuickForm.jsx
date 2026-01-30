const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will analyze your product norms and contact you.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Benefit Calculator
      </h3>
      <p className="text-slate-500 mb-6 text-sm">Estimate your duty savings.</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Product
          </label>
          <input
            type="text"
            placeholder="e.g. Stainless Steel Utensils"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Import Raw Material
          </label>
          <input
            type="text"
            placeholder="e.g. SS Coils Grade 304"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          />
        </div>

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

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold 
                     py-3 rounded-lg transition"
        >
          Calculate Savings
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
