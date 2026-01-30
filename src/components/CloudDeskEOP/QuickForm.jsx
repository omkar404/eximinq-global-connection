import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyStatus: "MSME Manufacturer",
    loanAmount: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❗ This is where calculation OR modal/email trigger goes
    alert("We will calculate the eligible subsidy amount.");

    console.log("Benefit Calculator Data:", {
      ...form,
      service: "IEC Registration",
      source: "Benefit Calculator",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Extension Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Find out your extension cost.
      </p>

      <form onSubmit={handleSubmit}>
        {/* License Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            License Type
          </label>
          <select
            name="companyStatus"
            value={form.companyStatus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          >
            <option>Advance Authorisation</option>
            <option>EPCG Scheme</option>
          </select>
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Pending Export %
          </label>
          <input
            type="number"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
            placeholder="e.g. 40%"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 
                     text-white font-bold py-3 rounded-lg transition"
        >
          Calculate Fees
        </button>
      </form>
    </div>
  );
};

export default QuickForm;

