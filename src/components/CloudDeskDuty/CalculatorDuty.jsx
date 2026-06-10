import React, { useState } from "react";
import {
  IndianRupee, Calculator, LineChart, Activity,
  ShieldAlert, Globe, Zap, AlertCircle, CheckCircle, BrainCircuit,
} from "lucide-react";

const CalculatorDuty = ({ activeTab, setActiveTab, selectedHSN }) => {
  const [inputValue, setInputValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [analyzing, setAnalyzing] = useState(false);

  const triggerAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 800);
  };

  // --- MATH ENGINE ---
  const bcdAmount = selectedHSN && inputValue ? Number(inputValue) * (selectedHSN.import.bcd / 100) : 0;
  const aidcAmount = selectedHSN && inputValue ? Number(inputValue) * (selectedHSN.import.aidc / 100) : 0;
  const swsAmount = bcdAmount * 0.1;
  const valueForIgst = Number(inputValue) + bcdAmount + aidcAmount + swsAmount;
  const igstAmount = selectedHSN && inputValue ? valueForIgst * (selectedHSN.import.igst / 100) : 0;
  const totalImportDuty = bcdAmount + aidcAmount + swsAmount + igstAmount;
  const landedCost = Number(inputValue) + totalImportDuty;
  const effectiveImportRate = inputValue ? ((totalImportDuty / Number(inputValue)) * 100).toFixed(2) : "0.00";

  let dbkAmount = 0, rodtepAmount = 0, dbkCapped = false, rodtepCapped = false;
  if (selectedHSN && inputValue && activeTab === "export") {
    const fob = Number(inputValue);
    const qty = Number(quantity) || 0;
    const dbkCalc = fob * (selectedHSN.export.dbkRate / 100);
    if (selectedHSN.export.dbkCap && qty > 0) {
      const max = qty * selectedHSN.export.dbkCap;
      dbkAmount = dbkCalc > max ? ((dbkCapped = true), max) : dbkCalc;
    } else { dbkAmount = dbkCalc; }
    const rodCalc = fob * (selectedHSN.export.rodtepRate / 100);
    if (selectedHSN.export.rodtepCap && qty > 0) {
      const max = qty * selectedHSN.export.rodtepCap;
      rodtepAmount = rodCalc > max ? ((rodtepCapped = true), max) : rodCalc;
    } else { rodtepAmount = rodCalc; }
  }

  const totalIncentive = dbkAmount + rodtepAmount;
  const effectiveExportMargin = inputValue ? ((totalIncentive / Number(inputValue)) * 100).toFixed(2) : "0.00";

  const generateInsights = () => {
    if (!selectedHSN) return null;
    const insights = [];
    if (activeTab === "import") {
      if (selectedHSN.importPolicy === "Restricted")
        insights.push({ type: "danger", icon: ShieldAlert, text: "Strict Import Policy: DGFT Authorisation is mandatory. Unauthorized import will lead to confiscation." });
      if (selectedHSN.import.bcd >= 15)
        insights.push({ type: "warning", icon: Globe, text: `High BCD Detected (${selectedHSN.import.bcd}%). Verify if the Country of Origin qualifies for Free Trade Agreement (FTA) duty exemptions.` });
      if (selectedHSN.import.bcd > 0)
        insights.push({ type: "info", icon: Zap, text: "Manufacturing for export? Use Advance Authorisation or MOOWR to reduce this BCD to 0%." });
      if (selectedHSN.import.aidc > 0)
        insights.push({ type: "warning", icon: AlertCircle, text: `AIDC Cess of ${selectedHSN.import.aidc}% is applicable. AIDC cannot be offset using standard IGST input tax credits.` });
    } else if (activeTab === "export") {
      if (selectedHSN.exportPolicy === "Restricted" || selectedHSN.exportPolicy === "Prohibited")
        insights.push({ type: "danger", icon: ShieldAlert, text: `Export Policy is ${selectedHSN.exportPolicy}. Ensure you hold valid DGFT quotas or licenses before planning shipment.` });
      if (dbkCapped)
        insights.push({ type: "warning", icon: AlertCircle, text: `Statutory Drawback Cap Hit. You are losing ₹${((Number(inputValue) * (selectedHSN.export.dbkRate / 100)) - dbkAmount).toLocaleString()} due to the ₹${selectedHSN.export.dbkCap}/unit ceiling.` });
      if (rodtepCapped)
        insights.push({ type: "warning", icon: AlertCircle, text: `RoDTEP Value Cap Hit. Scrip generation is limited to ₹${selectedHSN.export.rodtepCap} per ${selectedHSN.uqc}.` });
    }
    if (insights.length === 0)
      insights.push({ type: "success", icon: CheckCircle, text: "Tariff structure is standard. No critical anomalies detected." });
    return insights;
  };

  return (
    <div className="max-w-6xl mx-auto border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row backdrop-blur-xl" style={{ background: '#0a1628' }}>

      {/* LEFT: Input Panel */}
      <div className="w-full lg:w-5/12 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-800 relative" style={{ background: '#0a1628' }}>
        <button
          onClick={() => setActiveTab("finder")}
          className="absolute top-6 left-6 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center transition-colors"
        >
          ← Return to Directory
        </button>

        <div className="mt-12 space-y-8">
          {/* Selected HSN */}
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Selected Asset</label>
            {!selectedHSN ? (
              <div className="p-6 rounded-xl border border-dashed border-slate-700 bg-slate-900/50 text-slate-500 text-center text-sm font-mono">
                AWAITING HSN SELECTION...
              </div>
            ) : (
              <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/50 shadow-inner">
                <div className="font-black text-3xl text-white font-mono tracking-tight mb-2">{selectedHSN.hsn}</div>
                <div className="text-sm text-slate-400 leading-relaxed mb-4">{selectedHSN.description}</div>
                <span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-slate-950 border border-slate-800 text-slate-400">
                  Unit: {selectedHSN.uqc}
                </span>
              </div>
            )}
          </div>

          {/* Value Input */}
          <div className={!selectedHSN ? "opacity-50 pointer-events-none" : ""}>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">
              {activeTab === "import" ? "Assessable Value (CIF - INR)" : "FOB Value (INR)"}
            </label>
            <div className="relative">
              <IndianRupee className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${activeTab === "import" ? "text-blue-500" : "text-cyan-500"}`} />
              <input
                type="number"
                placeholder="0.00"
                className={`w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono font-bold text-xl focus:outline-none focus:ring-1 transition-all ${activeTab === "import" ? "focus:border-blue-500 focus:ring-blue-500" : "focus:border-cyan-500 focus:ring-cyan-500"}`}
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value ? Number(e.target.value) : ""); if (e.target.value) triggerAnalysis(); }}
                disabled={!selectedHSN}
              />
            </div>
          </div>

          {/* Quantity for export cap */}
          {activeTab === "export" && selectedHSN && (selectedHSN.export.dbkCap || selectedHSN.export.rodtepCap) && (
            <div className="bg-amber-950/20 border border-amber-900/50 p-5 rounded-xl shadow-inner">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-amber-500 mb-2 flex items-center justify-between">
                <span>Total Volume ({selectedHSN.uqc})</span>
                <span className="bg-amber-900/50 px-2 py-0.5 rounded text-amber-200">Cap Calculation</span>
              </label>
              <input
                type="number"
                placeholder={`Qty in ${selectedHSN.uqc}`}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono font-bold text-lg"
                value={quantity}
                onChange={(e) => { setQuantity(e.target.value ? Number(e.target.value) : ""); if (e.target.value) triggerAnalysis(); }}
              />
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Results Panel */}
      <div className="w-full lg:w-7/12 p-8 lg:p-10 relative bg-[#0b1120]">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center">
            <LineChart className="w-4 h-4 mr-2" />
            {activeTab === "import" ? "Customs Duty Matrix" : "Incentive Scrip Projection"}
          </h3>
          {analyzing && (
            <span className="flex items-center text-[10px] text-cyan-400 uppercase font-bold tracking-widest">
              <Activity className="w-3 h-3 mr-1 animate-spin" /> Processing
            </span>
          )}
        </div>

        {!selectedHSN || !inputValue ? (
          <div className="h-64 flex flex-col items-center justify-center text-slate-600 text-center font-mono text-sm">
            <div className="w-16 h-16 border border-slate-700 rounded-full flex items-center justify-center mb-4 bg-slate-900">
              <Calculator className="w-6 h-6 opacity-50" />
            </div>
            <p>AWAITING DATA INPUT TO GENERATE MATRIX...</p>
          </div>
        ) : (
          <div className={`space-y-6 transition-opacity duration-300 ${analyzing ? "opacity-30" : "opacity-100"}`}>

            {/* Import Results */}
            {activeTab === "import" && (
              <>
                <div className="space-y-3 font-mono text-sm">
                  {[
                    { label: "BASE CIF VALUE", val: Number(inputValue), color: "text-slate-400", valColor: "text-white" },
                    { label: `BCD (${selectedHSN.import.bcd}%)`, val: bcdAmount, color: "text-slate-400", valColor: "text-white" },
                    ...(selectedHSN.import.aidc > 0 ? [{ label: `AIDC (${selectedHSN.import.aidc}%)`, val: aidcAmount, color: "text-amber-400", valColor: "text-amber-400" }] : []),
                    { label: "SWS (10% OF BCD)", val: swsAmount, color: "text-slate-400", valColor: "text-white" },
                    { label: `IGST (${selectedHSN.import.igst}%)`, val: igstAmount, color: "text-slate-400", valColor: "text-white", border: true },
                  ].map(({ label, val, color, valColor, border }) => (
                    <div key={label} className={`flex justify-between items-center ${color} ${border ? "border-b border-dashed border-slate-700 pb-3" : ""}`}>
                      <span>{label}</span>
                      <span className={valColor}>₹ {val.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center font-bold text-blue-400 pt-1 text-base">
                    <span>TOTAL DUTY LEVY</span>
                    <span>₹ {totalImportDuty.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-6 shadow-[inset_0_0_20px_rgba(37,99,235,0.1)]">
                  <div className="text-[10px] text-blue-400 uppercase tracking-widest mb-2 font-bold">Projected Landed Cost</div>
                  <div className="text-4xl lg:text-5xl font-black text-white font-mono tracking-tighter mb-4">
                    ₹ {landedCost.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="bg-slate-500 h-full" style={{ width: `${(Number(inputValue) / landedCost) * 100}%` }} />
                    <div className="bg-blue-500 h-full" style={{ width: `${(totalImportDuty / landedCost) * 100}%` }} />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Base Val: {((Number(inputValue) / landedCost) * 100).toFixed(0)}%</span>
                    <span className="text-blue-400">Effective Tax: {effectiveImportRate}%</span>
                  </div>
                </div>
              </>
            )}

            {/* Export Results */}
            {activeTab === "export" && (
              <>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>BASE FOB VALUE</span>
                    <span className="text-white">₹ {(Number(inputValue) || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <div className="flex items-center gap-2">
                      <span>DUTY DRAWBACK ({selectedHSN.export.dbkRate}%)</span>
                      {dbkCapped && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded uppercase">Capped</span>}
                    </div>
                    <span className={dbkCapped ? "text-amber-400" : "text-white"}>₹ {dbkAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 border-b border-dashed border-slate-700 pb-3">
                    <div className="flex items-center gap-2">
                      <span>RoDTEP SCRIP ({selectedHSN.export.rodtepRate}%)</span>
                      {rodtepCapped && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded uppercase">Capped</span>}
                    </div>
                    <span className={rodtepCapped ? "text-amber-400" : "text-white"}>₹ {rodtepAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-cyan-400 pt-1 text-base">
                    <span>GROSS INCENTIVE YIELD</span>
                    <span>₹ {totalIncentive.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <div className="bg-cyan-950/20 border border-cyan-900/50 rounded-xl p-6 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
                  <div className="text-[10px] text-cyan-400 uppercase tracking-widest mb-2 font-bold">Total Export Realization</div>
                  <div className="text-4xl lg:text-5xl font-black text-white font-mono tracking-tighter mb-4">
                    ₹ {(Number(inputValue) + totalIncentive).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-slate-500 h-full w-full" />
                  </div>
                  <div className="flex justify-end mt-2 text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-cyan-400">Margin Boost: +{effectiveExportMargin}%</span>
                  </div>
                </div>
              </>
            )}

            {/* Intelligence Panel */}
            <div className="mt-8 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <BrainCircuit className="w-4 h-4 text-purple-500" /> Intelligence Analysis
              </div>
              <div className="space-y-3">
                {generateInsights()?.map((insight, idx) => {
                  const colors = {
                    danger: "bg-red-950/40 border-red-900/50 text-red-300",
                    warning: "bg-amber-950/40 border-amber-900/50 text-amber-300",
                    info: "bg-blue-950/40 border-blue-900/50 text-blue-300",
                    success: "bg-emerald-950/40 border-emerald-900/50 text-emerald-300",
                  }[insight.type];
                  const Icon = insight.icon;
                  return (
                    <div key={idx} className={`p-3 rounded-lg border flex items-start gap-3 text-sm leading-relaxed ${colors}`}>
                      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{insight.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorDuty;