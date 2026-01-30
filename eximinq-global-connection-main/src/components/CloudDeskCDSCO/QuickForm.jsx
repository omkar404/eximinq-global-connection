export default function QuickForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will analyze your product category and revert.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Regulatory Assessment</h3>

      <p className="text-slate-500 mb-6 text-sm">
        Determine your product class and license type.
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Product Category</label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Medical Device (Class A/B/C/D)</option>
            <option>In-Vitro Diagnostic (IVD)</option>
            <option>Pharmaceutical Drug / API</option>
            <option>Cosmetic Product</option>
            <option>Dual Use Item</option>
          </select>
        </div>

        {/* Manufacturer Country */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Manufacturer Country</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. USA / China / Germany"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
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
          className="w-full bg-medical-600 hover:bg-medical-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get Assessment
        </button>

      </form>
    </div>
  );
}

