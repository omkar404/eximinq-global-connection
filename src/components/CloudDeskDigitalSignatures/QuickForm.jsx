export default function QuickForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will send the KYC link to your email.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Buy DSC Online</h3>
      <p className="text-slate-500 mb-6 text-sm">Select your requirement.</p>

      <form onSubmit={handleSubmit}>
        {/* DSC Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">DSC Type</label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>DGFT (IEC Based)</option>
            <option>ICEGATE (Class 3 Combo)</option>
            <option>Combo (DGFT + ICEGATE)</option>
            <option>Renewal Only</option>
          </select>
        </div>

        {/* Validity */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Validity</label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>2 Years</option>
            <option>3 Years (Best Value)</option>
          </select>
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

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Proceed to KYC
        </button>
      </form>
    </div>
  );
}
