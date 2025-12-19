import React from "react";
import { formatCurrency } from "../../utils/formatters";


const FixedRatesTable = ({ filteredRates, searchTerm }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-900/50 border-b border-slate-700 text-slate-400 text-xs uppercase tracking-wider">
            <th className="p-6 font-semibold">Service Request</th>
            <th className="p-6 font-semibold text-right hidden sm:table-cell">
              Standard Corp Rate
            </th>
            <th className="p-6 font-semibold text-right text-sky-400">
              CHA Special Rate
            </th>
            <th className="p-6 font-semibold text-right">Savings</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/50">
          {filteredRates.length > 0 ? (
            filteredRates.map((rate, index) => (
              <tr
                key={index}
                className="group hover:bg-slate-700/30 transition-colors"
              >
                <td className="p-6">
                  <div className="font-medium text-white group-hover:text-sky-300 transition-colors">
                    {rate.service}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {rate.category}
                  </div>
                </td>
                <td className="p-6 text-right text-slate-500 line-through decoration-slate-600 hidden sm:table-cell">
                  ₹ {rate.corporate.toLocaleString()}
                </td>
                <td className="p-6 text-right">
                  <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full font-bold border border-sky-500/20">
                    {formatCurrency(rate.special)}
                  </span>
                </td>
                <td className="p-6 text-right text-green-400 font-medium">
                  ₹ {(rate.corporate - rate.special).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-12 text-center text-slate-500">
                No services found matching "{searchTerm}"
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FixedRatesTable;
