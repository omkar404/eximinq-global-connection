import { useState } from "react";

export default function QuickForm() {
  const [product, setProduct] = useState("");
  const [frequency, setFrequency] = useState("2.4 GHz (Bluetooth/Wi-Fi)");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will check the frequency band and revert.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Check Requirement</h3>
      <p className="text-slate-500 mb-6 text-sm">Does your product need WPC?</p>

      <form onSubmit={handleSubmit}>
        
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Name
          </label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. Wireless Mouse, Drone"
          />
        </div>

        {/* Frequency */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Frequency Band
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>2.4 GHz (Bluetooth/Wi-Fi)</option>
            <option>5 GHz (Wi-Fi)</option>
            <option>865-867 MHz (RFID)</option>
            <option>Other / Unknown</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        {/* Button */}
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

