import React, { useState } from "react";
import dutyDatabase from "./dutyDatabase";
import calculateDuty from "./calculateDuty";
import DutyResult from "./DutyResult";
import { Calculator, DollarSign, Globe, Search, RefreshCw } from "lucide-react";

const DutyCalculator = () => {
  const [hsn, setHsn] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [value, setValue] = useState(null);
  const [country, setCountry] = useState("All Countries");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalc = (e) => {
    e.preventDefault();
    if (!value || !hsn) return;

    setLoading(true);
    setTimeout(() => {
      const final = calculateDuty(hsn, value, currency, dutyDatabase);
      setResult(final);
      setLoading(false);
    }, 500);
  };

  return (
<div className="bg-white rounded-xl shadow-xl p-6 text-gray-800">
  <h3 className="text-lg font-bold mb-4 flex items-center text-indigo-900">
    <Calculator className="mr-2 text-teal-600" /> Import Duty Calculator
  </h3>

  <form onSubmit={handleCalc} className="space-y-6">
    {/* HSN + Country */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* HSN */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          HSN Code
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none 
                       focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition bg-gray-50"
            placeholder="e.g. 71081200"
            value={hsn}
            onChange={(e) => setHsn(e.target.value)}
          />
        </div>
      </div>

      {/* Country */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Country of Origin
        </label>
        <div className="relative">
          <Globe className="absolute left-3 top-3 text-gray-400" size={18} />
          <select
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none 
                       focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition bg-gray-50"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="ALL">All Countries</option>
            <option value="CHINA">China</option>
            <option value="USA">USA</option>
            <option value="JAPAN">Japan</option>
            <option value="GERMANY">Germany</option>
          </select>
        </div>
      </div>
    </div>

    {/* VALUE + CURRENCY */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* CIF Value */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Value (CIF)
        </label>
<input
  type="number"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter amount"
  className="w-full px-4 py-3 rounded-lg border border-gray-300 
             focus:outline-none focus:border-teal-600 
             focus:ring-1 focus:ring-teal-600 bg-gray-50"
/>

      </div>

      {/* Currency */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Currency
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-3 text-gray-400" size={18} />
          <select
            value={currency}
            required
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none 
                       focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition bg-gray-50"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="INR">INR - Indian Rupee</option>
          </select>
        </div>
      </div>
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 bg-gradient-to-r from-teal-600 to-indigo-700 text-white 
                 font-bold rounded-lg hover:opacity-95 transition flex items-center justify-center"
    >
      {loading ? <RefreshCw className="animate-spin" /> : "Calculate Duty"}
    </button>
  </form>

  {result && <DutyResult result={result} />}
</div>

  );
};

export default DutyCalculator;
