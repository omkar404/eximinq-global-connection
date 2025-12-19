import { useState } from "react";

export default function QuickForm() {
  const [commodity, setCommodity] = useState("Fresh Fruits / Vegetables");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will verify the Quarantine requirements for your HS Code.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Check Requirement</h3>
      <p className="text-slate-500 mb-6 text-sm">Do you need an Import Permit?</p>

      <form onSubmit={handleSubmit}>

        {/* Commodity Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Commodity Type
          </label>
          <select
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          >
            <option>Fresh Fruits / Vegetables</option>
            <option>Seeds / Plants / Bulbs</option>
            <option>Timber / Wood Packaging</option>
            <option>Pet (Dog/Cat)</option>
            <option>Livestock / Animal Feed</option>
            <option>Leather / Hides</option>
          </select>
        </div>

        {/* Country of Origin */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Country of Origin
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            placeholder="e.g. USA / Thailand"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
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
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Verify Now
        </button>
      </form>
    </div>
  );
}
