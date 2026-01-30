import { useState } from "react";
import { RefreshCw } from "lucide-react";

const QuickForm = () => {
  const [activeTab, setActiveTab] = useState("SB"); // SB | IGST

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will check the ICEGATE status and revert shortly.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <RefreshCw className="text-brand-600 w-7 h-7" />
        <h3 className="text-2xl font-bold text-brand-900">
          Refund Status Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find out why your IGST refund is stuck.
      </p>

      {/* Tabs */}
      <div className="flex mb-6 border rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => setActiveTab("SB")}
          className={`flex-1 py-2 text-sm font-bold ${
            activeTab === "SB"
              ? "bg-brand-600 text-white"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          Shipping Bill Wise
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("IGST")}
          className={`flex-1 py-2 text-sm font-bold ${
            activeTab === "IGST"
              ? "bg-brand-600 text-white"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          IGST Refund Amount Wise
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* TAB 1: SHIPPING BILL WISE */}
        {activeTab === "SB" && (
          <>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Shipping Bill No.
              </label>
              <input
                type="text"
                required
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. 1234567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Shipping Bill Date
              </label>
              <input
                type="date"
                required
                className="w-full border border-slate-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Port Code
              </label>
              <input
                type="text"
                required
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. INNSA1"
              />
            </div>
          </>
        )}

        {/* TAB 2: IGST AMOUNT WISE */}
        {activeTab === "IGST" && (
          <>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Total IGST Refund Pending Amount (₹)
              </label>
              <input
                type="number"
                required
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. 1250000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                No. of Shipping Bills
              </label>
              <input
                type="number"
                required
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. 12"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Port Code
              </label>
              <input
                type="text"
                required
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. INNSA1"
              />
            </div>
          </>
        )}

        {/* COMMON FIELDS */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Email ID
          </label>
          <input
            type="email"
            required
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="official@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            required
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        {/* Submit */}
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
