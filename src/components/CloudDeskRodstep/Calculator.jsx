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

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.35fr] gap-12 xl:gap-16 items-start">
          <div className="lg:pt-6">
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

          <div className="bg-white/95 backdrop-blur text-slate-800 rounded-[2rem] p-6 sm:p-8 xl:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.25)] border border-white/50">
            <div className="flex bg-slate-100 rounded-2xl p-1.5 mb-8 shadow-inner">
              <button
                onClick={() => setCalcType("buy")}
                className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition ${
                  calcType === "buy"
                    ? "bg-white shadow-sm text-blue-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Sell to Eximinq
              </button>

              <button
                onClick={() => setCalcType("sell")}
                className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition ${
                  calcType === "sell"
                    ? "bg-white shadow-sm text-blue-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Buy from Eximinq
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
                  <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-inner overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-5 py-4 bg-slate-100/90 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      <div className="col-span-12 md:col-span-3">Scrip No</div>
                      <div className="col-span-6 md:col-span-3">Scrip Date</div>
                      <div className="col-span-6 md:col-span-2">Port</div>
                      <div className="col-span-6 md:col-span-2 md:text-right">Scrip Value</div>
                      <div className="col-span-6 md:col-span-2 md:text-right">Quote Summary</div>
                    </div>

                    <div className="p-4 sm:p-5 space-y-4">
                      {buyRows.map((row, index) => (
                        <div
                          key={row.id}
                          className="rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
                        >
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                Scrip Entry {index + 1}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                Add complete scrip details to get an instant live quote.
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeBuyRow(row.id)}
                              className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:text-red-600 hover:border-red-200 transition"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-4">
                              <label className="block text-xs font-semibold text-slate-600 mb-2">
                                Scrip No
                              </label>
                              <input
                                type="text"
                                value={row.scripNo}
                                onChange={(event) => updateBuyRow(row.id, "scripNo", event.target.value)}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base"
                                placeholder="2502078505"
                                inputMode="numeric"
                                maxLength={10}
                              />
                              <p className="mt-2 text-xs text-slate-400">10 digit scrip number</p>
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-3">
                              <label className="block text-xs font-semibold text-slate-600 mb-2">
                                Scrip Date
                              </label>
                              <input
                                type="date"
                                value={row.scripDate}
                                onChange={(event) => updateBuyRow(row.id, "scripDate", event.target.value)}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base"
                              />
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-2">
                              <label className="block text-xs font-semibold text-slate-600 mb-2">
                                Port
                              </label>
                              <input
                                type="text"
                                value={row.port}
                                onChange={(event) => updateBuyRow(row.id, "port", event.target.value)}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base"
                                placeholder="INNSA1"
                              />
                            </div>

                            <div className="col-span-12 md:col-span-3">
                              <label className="block text-xs font-semibold text-slate-600 mb-2">
                                Scrip Value
                              </label>
                              <input
                                type="number"
                                value={row.scripValue}
                                onChange={(event) => updateBuyRow(row.id, "scripValue", event.target.value)}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base md:text-right"
                                placeholder="127000"
                              />
                            </div>
                          </div>

                          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4">
                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                                Applied Rate
                              </p>
                              <p className="mt-2 text-2xl font-extrabold text-slate-900">
                                {formatRate(getRowRate(row.scripValue))}%
                              </p>
                            </div>

                            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4 sm:text-right">
                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">
                                Quote Value
                              </p>
                              <p className="mt-2 text-2xl font-extrabold text-slate-900 break-words">
                                {formatCurrencyValue(getRowComputedValue(row.scripValue))}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 items-center px-5 py-5 border-t border-slate-200 bg-slate-100/80">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          Portfolio Total
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          Combined face value and live quote across all entered scrips.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white px-5 py-4 border border-slate-200">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                          Total Face Value
                        </p>
                        <p className="mt-2 text-2xl font-extrabold text-slate-900">
                          {formatCurrencyValue(buySummary.totalFaceValue)}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-blue-600 px-5 py-4 text-white shadow-lg">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
                          Total Quote Value
                        </p>
                        <p className="mt-2 text-2xl font-extrabold break-words">
                          {formatCurrencyValue(buySummary.totalQuoteValue)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={addBuyRow}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100"
                    >
                      <Plus size={16} />
                      Add Another Scrip
                    </button>

                    <button
                      type="button"
                      onClick={() => onSendQuote?.()}
                      className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 shadow-lg"
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
