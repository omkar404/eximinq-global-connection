import React, { useEffect, useMemo, useState } from "react";
import {
  Coins,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
} from "lucide-react";
import { getRegulatoryApiBase } from "../../features/regulatory-updates/utils/apiBase";

export function ExchangeRates() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    let mounted = true;
    const apiBase = getRegulatoryApiBase();

    const loadRates = async () => {
      try {
        const response = await fetch(`${apiBase}/api/exchange-rates?_fresh=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        });
        const payload = await response.json();
        if (mounted && response.ok && Array.isArray(payload.data)) setRates(payload.data);
      } catch (_error) {
        // Keep the compact widget available while the next refresh retries.
      }
    };

    loadRates();
    const intervalId = window.setInterval(loadRates, 5000);
    return () => {
      mounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const latestRates = useMemo(() => {
    const latestNotification = rates[0]?.notification;
    if (!latestNotification) return [];
    const wantedCurrencies = new Set(["USD", "EUR", "GBP", "JPY"]);
    return rates.filter(
      (rate) => rate.notification === latestNotification && wantedCurrencies.has(rate.currency)
    );
  }, [rates]);

  const latestRecord = latestRates[0] || rates[0];
  const monthLabel = latestRecord?.effectiveDate
    ? new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(
        new Date(latestRecord.effectiveDate.split("-").reverse().join("-"))
      )
    : "Latest";

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-3 border-b border-gray-700 flex justify-between items-center">
        <h3 className="font-bold text-white text-sm flex items-center">
          <Coins className="text-yellow-400 w-4 h-4 mr-2" />
          Exchange Rates
        </h3>
        <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded border border-slate-600">
          {monthLabel}
        </span>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
          <tr>
            <th className="px-4 py-2 font-semibold">Cur</th>
            <th className="px-4 py-2 font-semibold text-blue-600">Imp</th>
            <th className="px-4 py-2 font-semibold text-green-600">Exp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {latestRates.map((rate) => (
            <RateRow
              key={`${rate.notification}-${rate.currency}`}
              icon={RATE_ICONS[rate.currency] || DollarSign}
              code={rate.currency}
              importRate={rate.importRate}
              exportRate={rate.exportRate}
            />
          ))}
        </tbody>
      </table>
      <div className="px-4 py-2 bg-gray-50 text-[10px] text-gray-400 text-center border-t border-gray-100 flex justify-between items-center">
        <span>
          <i className="fas fa-info-circle mr-1"></i>Notification {latestRecord?.notification || "-"}
        </span>
        <a
          href="https://eximinq.in/foreign-trade-policy/Customsrates/"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          View All
        </a>
      </div>
    </div>
  );
}

const RATE_ICONS = {
  USD: DollarSign,
  EUR: Euro,
  GBP: PoundSterling,
  JPY: JapaneseYen,
};

/* ---------------- Helpers ---------------- */

function RateRow({ icon: Icon, code, importRate, exportRate }) {
  return (
    <tr className="hover:bg-blue-50 transition">
      <td className="px-4 py-2 font-bold text-gray-700 flex items-center">
        <Icon className="w-3 h-3 text-slate-400 mr-1" />
        {code}
      </td>
      <td className="px-4 py-2">{importRate}</td>
      <td className="px-4 py-2">{exportRate}</td>
    </tr>
  );
}
