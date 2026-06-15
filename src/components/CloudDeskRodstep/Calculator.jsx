import React from "react";
import { Plus, Trash2, TrendingUp, CreditCard } from "lucide-react";
import { getDisplayLabel, getSlabByAmount } from "./slabs";

const formatRate = (value) =>
  value === null || value === undefined ? "0.00" : Number(value).toFixed(2);

const formatCurrencyValue = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0);

const getSlabNote = (amount, type) => {
  const slab = getSlabByAmount(Number(amount) || 0);
  const label = getDisplayLabel(slab);
  return `${type.toUpperCase()} slab: ${label} (Live Rate applied)`;
};

const Calculator = ({
  calcAmount,
  setCalcAmount,
  calcType,
  setCalcType,
  calcScheme,
  setCalcScheme,
  calculateTotal,
  appliedRate,
  buyRows,
  setBuyRows,
  getRowRate,
  getRowComputedValue,
  buySummary,
  onSendQuote,
}) => {
  const slabNote = getSlabNote(calcAmount, calcType);
  const isBuyFlow = calcType === "buy";

  const updateBuyRow = (id, field, value) => {
    let nextValue = value;

    if (field === "scripNo") {
      nextValue = String(value || "")
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setBuyRows((previous) =>
      previous.map((row) =>
        row.id === id ? { ...row, [field]: nextValue } : row
      )
    );
  };

  const addBuyRow = () => {
    setBuyRows((previous) => [
      ...previous,
      { id: Date.now(), scripNo: "", scripDate: "", port: "", scripValue: "" },
    ]);
  };

  const removeBuyRow = (id) => {
    setBuyRows((previous) => (previous.length === 1 ? previous : previous.filter((row) => row.id !== id)));
  };

  return (
    <section
      id="calculator"
      className="bg-blue-900 text-white py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/30 -skew-x-12 transform translate-x-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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

          <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex bg-slate-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setCalcType("buy")}
                className={`flex-1 py-3 rounded-md font-bold text-sm transition ${
                  calcType === "buy"
                    ? "bg-white shadow-sm text-blue-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                I want to BUY
              </button>

              <button
                onClick={() => setCalcType("sell")}
                className={`flex-1 py-3 rounded-md font-bold text-sm transition ${
                  calcType === "sell"
                    ? "bg-white shadow-sm text-blue-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                I want to SELL
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Select Scheme
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setCalcScheme("rodtep")}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition ${
                      calcScheme === "rodtep"
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    RODTEP
                  </button>

                  <button
                    onClick={() => setCalcScheme("rosctl")}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition ${
                      calcScheme === "rosctl"
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    RoSCTL
                  </button>
                </div>
              </div>

              {isBuyFlow ? (
                <>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="min-w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600">
                        <tr>
                          <th className="px-3 py-3 text-left font-semibold">Scrip No</th>
                          <th className="px-3 py-3 text-left font-semibold">Scrip Date</th>
                          <th className="px-3 py-3 text-left font-semibold">Port</th>
                          <th className="px-3 py-3 text-right font-semibold">Scrip Value</th>
                          <th className="px-3 py-3 text-right font-semibold">Rate</th>
                          <th className="px-3 py-3 text-right font-semibold">Quote Value</th>
                          <th className="px-3 py-3 text-center font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {buyRows.map((row) => (
                          <tr key={row.id}>
                            <td className="px-3 py-2 min-w-[180px]">
                              <input
                                type="text"
                                value={row.scripNo}
                                onChange={(event) => updateBuyRow(row.id, "scripNo", event.target.value)}
                                className="w-full min-w-[150px] rounded-lg border border-slate-200 px-3 py-2"
                                placeholder="2502078505"
                                inputMode="numeric"
                                maxLength={10}
                              />
                              <p className="mt-1 text-[11px] text-slate-400">10 digit scrip number</p>
                            </td>
                            <td className="px-3 py-2">
                              <input
                                type="date"
                                value={row.scripDate}
                                onChange={(event) => updateBuyRow(row.id, "scripDate", event.target.value)}
                                className="w-full rounded-lg border border-slate-200 px-3 py-2"
                              />
                            </td>
                            <td className="px-3 py-2">
                              <input
                                type="text"
                                value={row.port}
                                onChange={(event) => updateBuyRow(row.id, "port", event.target.value)}
                                className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                placeholder="JNPT"
                              />
                            </td>
                            <td className="px-3 py-2">
                              <input
                                type="number"
                                value={row.scripValue}
                                onChange={(event) => updateBuyRow(row.id, "scripValue", event.target.value)}
                                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-right"
                                placeholder="127000"
                              />
                            </td>
                            <td className="px-3 py-2 text-right font-semibold text-blue-700">
                              {formatRate(getRowRate(row.scripValue))}%
                            </td>
                            <td className="px-3 py-2 text-right font-bold text-slate-900">
                              {formatCurrencyValue(getRowComputedValue(row.scripValue))}
                            </td>
                            <td className="px-3 py-2 text-center">
                              <button
                                type="button"
                                onClick={() => removeBuyRow(row.id)}
                                className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-500 hover:text-red-600"
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-slate-50">
                        <tr>
                          <td colSpan={3} className="px-3 py-3 font-semibold text-slate-700">
                            Total
                          </td>
                          <td className="px-3 py-3 text-right font-bold text-slate-900">
                            {formatCurrencyValue(buySummary.totalFaceValue)}
                          </td>
                          <td />
                          <td className="px-3 py-3 text-right font-bold text-blue-700">
                            {formatCurrencyValue(buySummary.totalQuoteValue)}
                          </td>
                          <td />
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={addBuyRow}
                      className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
                    >
                      <Plus size={16} />
                      Add Another Scrip
                    </button>

                    <button
                      type="button"
                      onClick={() => onSendQuote?.()}
                      className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Send Details for Official Quote
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Scrip Face Value (Rs)
                    </label>
                    <input
                      type="number"
                      value={calcAmount}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCalcAmount(value === "" ? "" : Number(value));
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg font-medium"
                    />
                  </div>

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

                    <button
                      type="button"
                      onClick={() => onSendQuote?.()}
                      className="mt-5 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Send Details for Official Quote
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
