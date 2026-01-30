import { useState } from "react";

export default function QuickForm() {
  const [iec, setIec] = useState("");
  const [bank, setBank] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will analyze your EDPMS status and revert.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">EDPMS Health Check</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Do you have pending Shipping Bills &gt; 9 months?
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* IEC */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company IEC</label>
          <input
            type="text"
            value={iec}
            onChange={(e) => setIec(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. 0512345678"
          />
        </div>

        {/* Bank Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Bank Name</label>
          <input
            type="text"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="Authorized Dealer (AD) Bank"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white 
                     font-bold py-3 rounded-lg transition"
        >
          Check Pending List
        </button>
      </form>
    </div>
  );
}

