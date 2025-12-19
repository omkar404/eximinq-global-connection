import { RefreshCw } from "lucide-react";

const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will check the ICEGATE status and revert shortly.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <RefreshCw className="text-brand-600 w-7 h-7" />
        <h3 className="text-2xl font-bold text-brand-900">Refund Status Check</h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find out why your money is stuck.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Shipping Bill No.
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 1234567"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Shipping Bill Date
          </label>
          <input
            type="date"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Port Code</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. INNSA1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get Status Report
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
