import React from "react";
import { RefreshCw } from "lucide-react";

const RateCard = ({ title, description, tag, buy, sell, onAction }) => {
  return (
    <div className="p-6 sm:p-8 hover:bg-slate-50 transition duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-slate-500 text-sm mt-1">{description}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
          <span className="text-green-600 text-sm font-bold uppercase tracking-wider block mb-1">
            We Buy At
          </span>
          <span className="text-3xl font-extrabold text-slate-900">
            {buy}
            <span className="text-lg text-slate-400 ml-1">%</span>
          </span>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
          <span className="text-red-600 text-sm font-bold uppercase tracking-wider block mb-1">
            We Sell At
          </span>
          <span className="text-3xl font-extrabold text-slate-900">
            {sell}
            <span className="text-lg text-slate-400 ml-1">%</span>
          </span>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={onAction}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold
          hover:bg-slate-800 transition shadow-lg shadow-slate-200/50"
        >
          Sell {title} Scrip
        </button>
      </div>
    </div>
  );
};

const LiveRates = ({ rates, onSellClick }) => {
  return (
    <section
      id="rates"
      className="relative -mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20"
    >
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-4 sm:p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            Live Market Rates
          </h2>
          <span className="text-sm text-slate-500 flex items-center gap-1">
            <RefreshCw size={14} className="animate-spin-slow" />
            Updated just now
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <RateCard
            title="RODTEP"
            description="Remission of Duties or Taxes on Export Products"
            tag="Scrip"
            buy={rates.rodtep.buy}
            sell={rates.rodtep.sell}
            onAction={onSellClick}
          />

          <RateCard
            title="RoSCTL"
            description="Rebate of State and Central Taxes and Levies"
            tag="Scrip"
            buy={rates.rosctl.buy}
            sell={rates.rosctl.sell}
            onAction={onSellClick}
          />
        </div>
      </div>
    </section>
  );
};

export default LiveRates;
