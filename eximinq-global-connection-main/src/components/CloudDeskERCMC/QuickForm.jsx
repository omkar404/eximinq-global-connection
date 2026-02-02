const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will analyze your product and suggest the correct council.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Identify Your EPC</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Not sure which council to register with?
      </p>

      <form onSubmit={handleSubmit}>

        {/* Product Description */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Description
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. Leather Shoes, Steel Pipes"
          />
        </div>

        {/* HSN Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HSN Code (Optional)
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. 6403"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 
                     text-white font-bold py-3 rounded-lg transition"
        >
          Get Council Advice
        </button>

      </form>
    </div>
  )
};

export default QuickForm;
