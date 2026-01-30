export default function QuickForm() {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Re-import Assessment</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Did you claim incentives during export?
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("We will calculate the refund amount required.");
        }}
      >
        {/* Reason for Return */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Reason for Return
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Quality Rejection</option>
            <option>Repair & Return</option>
            <option>Exhibition Return</option>
            <option>Wrong Shipment</option>
          </select>
        </div>

        {/* Shipping Bill */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Original Shipping Bill No.
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 7894561"
          />
        </div>

        {/* Port of Export */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Port of Export</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. Nhava Sheva"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Check Duty Liability
        </button>
      </form>
    </div>
  );
}
