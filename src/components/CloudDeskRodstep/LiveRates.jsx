import React from "react";
import { RefreshCw } from "lucide-react";

/* =======================
   SLAB CONFIG
======================= */
const SLABS = [
  {
    label: "₹15,00,000 & above",
    min: 1500000,
    max: null,
    rates: {
      rodtep: { buy: 98.15, sell: 98.75 },
      rosctl: { buy: 98.10, sell: 98.60 },
    },
  },
  {
    label: "₹10,00,000 – ₹14,99,999",
    min: 1000000,
    max: 1499999,
    rates: {
      rodtep: { buy: 97.65, sell: 98.50 },
      rosctl: { buy: 97.60, sell: 98.35 },
    },
  },
  {
    label: "₹5,00,000 – ₹9,99,999",
    min: 500000,
    max: 999999,
    rates: {
      rodtep: { buy: 97.15, sell: 98.25 },
      rosctl: { buy: 97.10, sell: 98.10 },
    },
  },
  {
    label: "₹1,00,000 – ₹4,99,999",
    min: 100000,
    max: 499999,
    rates: {
      rodtep: { buy: 96.65, sell: 98.00 },
      rosctl: { buy: 96.60, sell: 97.85 },
    },
  },
  {
    label: "₹10,000 – ₹99,999",
    min: 10000,
    max: 99999,
    rates: {
      rodtep: { buy: 96.15, sell: 97.75 },
      rosctl: { buy: 96.10, sell: 97.60 },
    },
  },
];

const formatRange = (slab) => {
  if (!slab.max) return "₹15,00,000 & above";
  return `₹${slab.min.toLocaleString()} – ₹${slab.max.toLocaleString()}`;
};

const formatRate = (value) => Number(value).toFixed(2);


/* =======================
   RATE CARD
======================= */
const RateCard = ({
  title,
  description,
  tag,
  buy,
  sell,
  effectiveRate,
  actionType,
  onAction,
}) => {
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
          <span className="text-green-600 text-sm font-bold uppercase block mb-1">
            We Buy At
          </span>
          <span className="text-3xl font-extrabold text-slate-900">
            {formatRate(buy)}
            <span className="text-lg text-slate-400 ml-1">%</span>
          </span>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
          <span className="text-red-600 text-sm font-bold uppercase block mb-1">
            We Sell At
          </span>
          <span className="text-3xl font-extrabold text-slate-900">
            {formatRate(sell)}%
            <span className="text-lg text-slate-400 ml-1">%</span>
          </span>
        </div>
      </div>

      {/* CALCULATION INFO */}
      <p className="mt-4 text-sm text-slate-600 text-center">
        Calculate Your Scrip Value at{" "}
        <span className="font-semibold text-slate-800">
          {effectiveRate}%
        </span>{" "}
        ({actionType === "SELL" ? "We Buy Rate" : "We Sell Rate"})
      </p>

      <div className="mt-6">
        <button
          onClick={onAction}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg"
        >
          {actionType === "SELL" ? "Sell" : "Buy"} {title} Scrip
        </button>
      </div>
    </div>
  );
};

/* =======================
   LIVE RATES
======================= */
const LiveRates = ({ onSellClick }) => {
  const [selectedSlab, setSelectedSlab] = React.useState(SLABS[0]);
  const [lastUpdated, setLastUpdated] = React.useState(new Date());
  const [actionType, setActionType] = React.useState("SELL"); // SELL | BUY

  const handleRefresh = () => {
    setSelectedSlab(SLABS[0]);
    setLastUpdated(new Date());
  };

  const getEffectiveRate = (rates) => {
    return actionType === "SELL" ? rates.buy : rates.sell;
  };

  return (
    <section
      id="rates"
      className="relative -mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20"
    >
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* HEADER */}
        <div className="bg-slate-50 border-b border-slate-100 p-4 sm:p-6 flex justify-between items-center gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              Live Market Rates
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Script Value Between:{" "}
              <span className="font-semibold text-slate-800">
                {formatRange(selectedSlab)}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* <select
              className="border rounded-lg px-3 py-1 text-sm bg-white"
              value={actionType}
              onChange={(e) => setActionType(e.target.value)}
            >
              <option value="SELL">Sell Scrip</option>
              <option value="BUY">Buy Scrip</option>
            </select> */}

            <select
              className="border rounded-lg px-3 py-1 text-sm bg-white"
              value={selectedSlab.min}
              onChange={(e) =>
                setSelectedSlab(
                  SLABS.find((s) => s.min === Number(e.target.value))
                )
              }
            >
              {SLABS.map((slab) => (
                <option key={slab.min} value={slab.min}>
                  {slab.label}
                </option>
              ))}
            </select>

            <button
              onClick={handleRefresh}
              className="text-sm text-slate-500 flex items-center gap-1 hover:text-slate-700 transition"
            >
              <RefreshCw size={14} />
              Updated {lastUpdated.toLocaleTimeString()}
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <RateCard
            title="RODTEP"
            description="Remission of Duties or Taxes on Export Products"
            tag="Scrip"
            buy={selectedSlab.rates.rodtep.buy}
            sell={selectedSlab.rates.rodtep.sell}
            effectiveRate={getEffectiveRate(
              selectedSlab.rates.rodtep
            )}
            actionType={actionType}
            onAction={() =>
              onSellClick?.("RODTEP", actionType)
            }
          />

          <RateCard
            title="RoSCTL"
            description="Rebate of State and Central Taxes and Levies"
            tag="Scrip"
            buy={selectedSlab.rates.rosctl.buy}
            sell={selectedSlab.rates.rosctl.sell}
            effectiveRate={getEffectiveRate(
              selectedSlab.rates.rosctl
            )}
            actionType={actionType}
            onAction={() =>
              onSellClick?.("ROSCTL", actionType)
            }
          />
        </div>
      </div>
    </section>
  );
};

export default LiveRates;
