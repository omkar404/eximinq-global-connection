import { useState } from "react";

const QuickForm = () => {
  const [port, setPort] = useState("Nhava Sheva (INNSA1)");
  const [bank, setBank] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bank || !mobile) {
      alert("Please fill all required fields.");
      return;
    }

    alert(
      `We will check AD Code status for:\nPort: ${port}\nBank: ${bank}\nMobile: ${mobile}`
    );
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Check Port Status</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify if your AD Code is active.
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* Port Select */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Select Port</label>
          <select
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          >
            <option>Nhava Sheva (INNSA1)</option>
            <option>Mundra (INMUN1)</option>
            <option>Delhi Air Cargo (INDEL4)</option>
            <option>Chennai Sea (INMAA1)</option>
            <option>Other / ICD</option>
          </select>
        </div>

        {/* Bank Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Bank Name</label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. HDFC Bank"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get Status Update
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
