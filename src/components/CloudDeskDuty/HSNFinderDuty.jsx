import React, { useState, useMemo } from "react";
import {
  Search, Filter, Activity, ShieldAlert, Info,
  Globe, ArrowDownRight, ArrowUpRight, BarChart3,
} from "lucide-react";

const HSNFinderDuty = ({ onLaunchCalculator, HSN_DATABASE, TrendGraph }) => {
  const [finderSearch, setFinderSearch] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("All");
  const [expandedHSN, setExpandedHSN] = useState(null);

  const chapters = useMemo(
    () => ["All", ...Array.from(new Set(HSN_DATABASE.map((i) => i.chapter))).sort()],
    [HSN_DATABASE]
  );

  const filteredDirectory = useMemo(
    () =>
      HSN_DATABASE.filter((item) => {
        const matchesSearch =
          item.hsn.includes(finderSearch) ||
          item.description.toLowerCase().includes(finderSearch.toLowerCase());
        const matchesChapter =
          selectedChapter === "All" || item.chapter === selectedChapter;
        return matchesSearch && matchesChapter;
      }),
    [finderSearch, selectedChapter, HSN_DATABASE]
  );

  return (
    <div className="max-w-5xl mx-auto">

      {/* Search Bar */}
      <div className="bg-slate-900/80 p-6 rounded-2xl shadow-xl border border-slate-800 mb-6 flex flex-col md:flex-row gap-4 backdrop-blur-md">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Query HSN Code or Item Description..."
            className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
            value={finderSearch}
            onChange={(e) => setFinderSearch(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64 relative">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5" />
          <select
            className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white appearance-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
          >
            {chapters.map((ch) => (
              <option key={ch} value={ch}>
                {ch === "All" ? "All Chapters" : `CH-${ch}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 gap-4">
        {filteredDirectory.length === 0 ? (
          <div className="p-12 text-center text-slate-500 bg-slate-900/50 rounded-2xl border border-slate-800">
            <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Database returned 0 results. Modify your query parameters.</p>
          </div>
        ) : (
          filteredDirectory.map((item) => (
            <div key={item.hsn} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl transition-all flex flex-col gap-6 backdrop-blur-md hover:border-slate-700">
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center w-full">
                <div className="flex-1">

                  {/* HSN + Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-2xl font-black text-white font-mono tracking-tight mr-2">{item.hsn}</span>
                    {[
                      { label: `IMP: ${item.importPolicy}`, ok: item.importPolicy === "Free" },
                      { label: `EXP: ${item.exportPolicy}`, ok: item.exportPolicy === "Free" },
                    ].map(({ label, ok }) => (
                      <span key={label} className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded border flex items-center gap-1 ${ok ? "bg-emerald-950/50 border-emerald-800 text-emerald-400" : "bg-red-950/50 border-red-800 text-red-400"}`}>
                        {!ok && <ShieldAlert className="w-3 h-3" />}
                        {label}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase bg-slate-800 border border-slate-700 text-slate-300 rounded">
                      UQC: {item.uqc}
                    </span>
                  </div>

                  <p className="text-slate-400 text-base mb-4">{item.description}</p>

                  {/* Advisories */}
                  {item.advisories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.advisories.map((adv, idx) => (
                        <span key={idx} className="flex items-center text-[10px] font-bold text-amber-500 bg-amber-950/30 border border-amber-900/50 px-2 py-1 rounded">
                          <Info className="w-3 h-3 mr-1" /> {adv}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Rate Chips */}
                  <div className="flex flex-wrap gap-3 text-sm">
                    {[
                      { label: "BCD", value: `${item.import.bcd}%`, color: "text-white" },
                      { label: "IGST", value: `${item.import.igst}%`, color: "text-white" },
                      { label: "AIDC", value: `${item.import.aidc}%`, color: item.import.aidc > 0 ? "text-amber-400" : "text-slate-300" },
                      { label: "RoDTEP", value: `${item.export.rodtepRate}%`, color: "text-cyan-400" },
                      { label: "Drawback", value: `${item.export.dbkRate}%`, color: "text-cyan-400" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="bg-slate-950/50 px-3 py-2 rounded-lg border border-slate-800/50 flex flex-col min-w-[80px]">
                        <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider mb-1">{label}</span>
                        <span className={`font-mono font-bold ${color}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-48 shrink-0">
                  <button onClick={() => onLaunchCalculator(item, "import")}
                    className="flex-1 px-4 py-3 bg-blue-600/10 text-blue-400 border border-blue-600/30 hover:bg-blue-600 hover:text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                    <ArrowDownRight className="w-4 h-4" /> Import Model
                  </button>
                  <button onClick={() => onLaunchCalculator(item, "export")}
                    className="flex-1 px-4 py-3 bg-cyan-600/10 text-cyan-400 border border-cyan-600/30 hover:bg-cyan-600 hover:text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                    <ArrowUpRight className="w-4 h-4" /> Export Model
                  </button>
                  <button onClick={() => setExpandedHSN(expandedHSN === item.hsn ? null : item.hsn)}
                    className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-slate-700">
                    <BarChart3 className="w-4 h-4" />
                    {expandedHSN === item.hsn ? "Hide Analytics" : "Market Trends"}
                  </button>
                </div>
              </div>

              {/* Expanded Analytics */}
              {expandedHSN === item.hsn && (
                <div className="mt-4 pt-6 border-t border-slate-800 w-full">
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold uppercase tracking-widest mb-4">
                    <BarChart3 className="w-4 h-4" /> 5-Year Global EXIM Analysis (Mock Data)
                  </div>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 flex gap-6">
                      <TrendGraph data={item.trends.import} title="Import Trend (USD)" colorClass="text-blue-400" bgClass="bg-blue-500/80" />
                      <TrendGraph data={item.trends.export} title="Export Trend (USD)" colorClass="text-cyan-400" bgClass="bg-cyan-500/80" />
                    </div>
                    <div className="w-full lg:w-64 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Top Trading Partners</div>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {item.trends.topPartners.map((partner, idx) => (
                          <li key={idx} className="flex items-center justify-between">
                            <span className="flex items-center">
                              <Globe className="w-3 h-3 mr-2 text-slate-500" />
                              {partner.split(" ")[0]}
                            </span>
                            <span className="font-mono text-xs">{partner.split(" ")[1]}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t border-slate-800/50 text-[9px] text-slate-500 leading-tight">
                        *Country-wise API integration requires a live EXIM database subscription.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HSNFinderDuty;