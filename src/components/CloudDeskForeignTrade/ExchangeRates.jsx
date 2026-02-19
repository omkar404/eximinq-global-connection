import React from "react";
import {
  Coins,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
} from "lucide-react";

export function ExchangeRates() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-3 border-b border-gray-700 flex justify-between items-center">
        <h3 className="font-bold text-white text-sm flex items-center">
          <Coins className="text-yellow-400 w-4 h-4 mr-2" />
          Exchange Rates
        </h3>
        <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded border border-slate-600">
          Feb 2026
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
          <RateRow
            icon={DollarSign}
            code="USD"
            importRate="91.2"
            exportRate="89.5"
          />
          <RateRow
            icon={Euro}
            code="EUR"
            importRate="107.00"
            exportRate="103.35"
          />
          <RateRow
            icon={PoundSterling}
            code="GBP"
            importRate="123.35"
            exportRate="119.35"
          />
          <RateRow
            icon={JapaneseYen}
            code="JPY"
            importRate="60.95"
            exportRate="59.00"
          />
        </tbody>
      </table>
      <div class="px-4 py-2 bg-gray-50 text-[10px] text-gray-400 text-center border-t border-gray-100 flex justify-between items-center">
        <span>
          <i class="fas fa-info-circle mr-1"></i>Notfn 12/2025-Cus(NT)
        </span>
        <a 
        href="https://eximinq.in/foreign-trade-policy/exchange-rates" 
        target="_blank"
        class="text-blue-600 hover:underline">
          View All
        </a>
      </div>
    </div>
  );
}

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
