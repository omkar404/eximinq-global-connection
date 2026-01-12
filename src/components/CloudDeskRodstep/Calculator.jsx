import React from "react";
import { TrendingUp, CreditCard } from "lucide-react";

/**
 * Truthful, non-misleading note
 * No deltas. No fake math.
 */
//

const getSlabNote = (amount, type) => {
  if (type === "sell") {
    if (amount >= 1500000)
      return "SELL slab: ₹15,00,000 and above (Live Rate applied)";
    if (amount >= 100000)
      return "SELL slab: ₹1,00,000 – ₹4,99,999 (Live Rate applied)";
    if (amount >= 50000)
      return "SELL slab: ₹50,000 – ₹99,999 (Live Rate applied)";
    if (amount >= 10000)
      return "SELL slab: ₹10,000 – ₹49,999 (Live Rate applied)";
    return "SELL slab: ₹1,000 – ₹9,999 (Live Rate applied)";
  }

  // BUY
  if (amount >= 500000)
    return "BUY slab: ₹5,00,000 and above (Live Rate applied)";
  if (amount >= 100000)
    return "BUY slab: ₹1,00,000 – ₹4,99,999 (Live Rate applied)";
  if (amount >= 50000) return "BUY slab: ₹50,000 – ₹99,999 (Live Rate applied)";
  if (amount >= 10000) return "BUY slab: ₹10,000 – ₹49,999 (Live Rate applied)";
  return "BUY slab: ₹1,000 – ₹9,999 (Live Rate applied)";
};

const formatRate = (value) =>
  value === null || value === undefined ? "0.00" : Number(value).toFixed(2);

const Calculator = ({
  rates,
  calcAmount,
  setCalcAmount,
  calcType,
  setCalcType,
  calcScheme,
  setCalcScheme,
  calculateTotal,
  appliedRate,
}) => {
  const slabNote = getSlabNote(calcAmount, calcType);

  return (
    <section
      id="calculator"
      className="bg-blue-900 text-white py-20 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/30 -skew-x-12 transform translate-x-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Calculate Your Scrip Value
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Estimate your payout or purchase cost instantly using slab-based
              market rates. No hidden charges. No assumptions.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-blue-900">
                  <TrendingUp size={14} />
                </span>
                <span className="text-blue-100">Slab-based official rates</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-blue-900">
                  <CreditCard size={14} />
                </span>
                <span className="text-blue-100">
                  Transparent buy & sell pricing
                </span>
              </li>
            </ul>
          </div>

          {/* Calculator box */}
          <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl">
            {/* Buy / Sell toggle */}
            <div className="flex bg-slate-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setCalcType("buy")}
                className={`flex-1 py-3 rounded-md font-bold text-sm transition
                  ${
                    calcType === "buy"
                      ? "bg-white shadow-sm text-blue-700"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                I want to BUY
              </button>

              <button
                onClick={() => setCalcType("sell")}
                className={`flex-1 py-3 rounded-md font-bold text-sm transition
                  ${
                    calcType === "sell"
                      ? "bg-white shadow-sm text-blue-700"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                I want to SELL
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Scheme selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Select Scheme
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setCalcScheme("rodtep")}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition
                      ${
                        calcScheme === "rodtep"
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                  >
                    RODTEP
                  </button>

                  <button
                    onClick={() => setCalcScheme("rosctl")}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition
                      ${
                        calcScheme === "rosctl"
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                  >
                    RoSCTL
                  </button>
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Scrip Face Value (₹)
                </label>
                <input
                  type="number"
                  value={calcAmount}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCalcAmount(value === "" ? "" : Number(value));
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                  text-lg font-medium"
                />
              </div>

              {/* Result */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 text-sm font-medium">
                    Applied Rate
                  </span>
                  <span className="font-bold text-slate-900">
                    {formatRate(appliedRate)}%
                  </span>
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-slate-600 font-bold">Total Value</span>
                  <span className="text-3xl font-extrabold text-blue-700">
                    {calculateTotal()}
                  </span>
                </div>

                <div className="mt-4 rounded-lg bg-blue-50 border border-blue-200 px-4 py-3">
                  <p className="text-sm font-semibold text-blue-800">Note</p>
                  <p className="text-sm text-blue-700 mt-1">{slabNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
