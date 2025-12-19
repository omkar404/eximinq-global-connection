import React, { useState } from "react";
import { Search, Calculator } from "lucide-react";

export function Tools() {
  /* ---------------- HS CODE ---------------- */
  const [hsQuery, setHsQuery] = useState("");

  /* ---------------- DUTY CALCULATOR ---------------- */
  const [values, setValues] = useState({
    cif: 100000,
    bcd: 10,
    igst: 18,
    sws: true,
  });

  const [result, setResult] = useState(null);

  const calculateDuty = () => {
    const cif = Number(values.cif) || 0;
    const bcdAmt = (cif * values.bcd) / 100;
    const swsAmt = values.sws ? bcdAmt * 0.1 : 0;
    const igstBase = cif + bcdAmt + swsAmt;
    const igstAmt = (igstBase * values.igst) / 100;

    setResult({
      bcd: bcdAmt,
      sws: swsAmt,
      igst: igstAmt,
      total: bcdAmt + swsAmt + igstAmt,
    });
  };

  return (
    <section id="tools" className="grid md:grid-cols-2 gap-8">
      {/* ---------------- HS CODE FINDER ---------------- */}
      <div className="bg-slate-800 text-white rounded-xl p-6 shadow-xl relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 bg-slate-700 w-40 h-40 rounded-full opacity-50 blur-3xl group-hover:bg-blue-600 transition duration-700" />

        <h3 className="text-xl font-bold mb-2 relative z-10 flex items-center">
          <Search className="w-5 h-5 mr-2" />
          ITC (HS) Code Finder
        </h3>

        <p className="text-gray-400 text-sm mb-6 relative z-10">
          Identify the correct 8-digit HS Code for your product to determine
          policy & duty.
        </p>

        <div className="space-y-4 relative z-10">
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              PRODUCT DESCRIPTION / CODE
            </label>

            <div className="flex">
              <input
                value={hsQuery}
                onChange={(e) => setHsQuery(e.target.value)}
                placeholder="e.g. Rice, Laptop, 8471"
                className="w-full bg-slate-700 border border-slate-600 rounded-l px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-r transition font-semibold">
                Search
              </button>
            </div>

            {/* Mock Suggestions */}
            {hsQuery && (
              <div className="absolute w-full bg-white text-slate-800 mt-1 rounded shadow-lg z-20">
                <Suggestion code="84713010" label="Personal Computers (Laptops)" />
                <Suggestion code="84713090" label="Tablets" />
                <Suggestion
                  code="84714190"
                  label="Other ADP Machines"
                  last
                />
              </div>
            )}
          </div>

          <div className="bg-slate-700/50 p-3 rounded border border-slate-600 text-xs mt-4">
            <p className="font-semibold text-gray-300">Trending Searches:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Tag text="Gold (7108)" />
              <Tag text="Mobile Phones (8517)" />
              <Tag text="Wheat (1001)" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- DUTY ESTIMATOR ---------------- */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-xl font-bold mb-2 text-gray-800 flex items-center">
          <Calculator className="mr-2 text-blue-600 w-5 h-5" />
          Duty Estimator
        </h3>

        <p className="text-gray-500 text-sm mb-6">
          Estimate BCD, SWS, IGST and Total Duty payable.
        </p>

        <div className="space-y-4">
          {/* CIF */}
          <Input
            label="CIF VALUE (INR)"
            prefix="₹"
            value={values.cif}
            onChange={(v) => setValues({ ...values, cif: v })}
          />

          {/* Rates */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="BASIC DUTY (BCD %)"
              value={values.bcd}
              onChange={(v) => setValues({ ...values, bcd: v })}
            />
            <Input
              label="IGST (%)"
              value={values.igst}
              onChange={(v) => setValues({ ...values, igst: v })}
            />
          </div>

          {/* SWS */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={values.sws}
              onChange={(e) =>
                setValues({ ...values, sws: e.target.checked })
              }
              className="w-4 h-4 text-blue-600 rounded border-gray-300"
            />
            <span className="ml-2 text-xs text-gray-700">
              Apply Social Welfare Surcharge (10% of BCD)
            </span>
          </div>

          <button
            onClick={calculateDuty}
            className="w-full bg-gray-900 text-white font-bold py-2.5 rounded shadow hover:bg-gray-800 transition"
          >
            Calculate Duty Liability
          </button>

          {/* Result */}
          {result && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <ResultRow label="BCD" value={result.bcd} />
              <ResultRow label="SWS" value={result.sws} />
              <ResultRow label="IGST" value={result.igst} />

              <div className="border-t-2 border-dashed my-3" />

              <div className="flex justify-between font-extrabold text-lg">
                <span>TOTAL:</span>
                <span className="text-blue-700">
                  ₹{result.total.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="text-[10px] text-gray-400 mt-2 text-center">
                * Indicative only. As per CBIC exchange rates.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Small Components ---------------- */

function Suggestion({ code, label, last }) {
  return (
    <div
      className={`p-2 hover:bg-blue-50 cursor-pointer text-sm ${
        !last && "border-b border-gray-100"
      }`}
    >
      <span className="font-bold text-blue-600">{code}</span> – {label}
    </div>
  );
}

function Tag({ text }) {
  return (
    <span className="bg-slate-600 px-2 py-1 rounded cursor-pointer hover:bg-slate-500 transition">
      {text}
    </span>
  );
}

function Input({ label, prefix, value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-2 text-gray-400">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none ${
            prefix ? "pl-7" : ""
          }`}
        />
      </div>
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-600">{label}:</span>
      <span className="font-bold">
        ₹{value.toLocaleString("en-IN")}
      </span>
    </div>
  );
}
