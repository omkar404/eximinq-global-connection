export default function QuickForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will verify your GSP eligibility and contact you.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Check Eligibility</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Is REX mandatory for your shipment?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Destination Country */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Destination Country
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>European Union (EU)</option>
            <option>United Kingdom (UK)</option>
            <option>Switzerland</option>
            <option>Norway</option>
            <option>Turkey</option>
          </select>
        </div>

        {/* Invoice Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Invoice Value (Approx)
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Below ₹ 6,000</option>
            <option>Above ₹ 6,000</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
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
          Verify Status
        </button>
      </form>
    </div>
  );
}
