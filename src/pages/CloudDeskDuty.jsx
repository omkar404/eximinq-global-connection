import React, { useState, useMemo, useEffect } from 'react';
import {
  Search, Calculator, ArrowRight, PhoneCall, Package, Anchor,
  IndianRupee, BookOpen, AlertCircle, CheckCircle, ShieldAlert,
  Filter, ArrowUpRight, ArrowDownRight, Sparkles, BrainCircuit,
  LineChart, Globe, Zap, FileText, Activity, BarChart3, Info
} from 'lucide-react';
import Navbar from '../components/CloudDeskDuty/Navbar';
import { MainNavbar } from '../components/CloudDeskDuty/MainNavbar';
import { ModalEnroll } from '../components/CloudDeskDuty/ModalEnroll'
import Footer from '../components/CloudDeskDuty/Footer';

// --- MOCK TARIFF & TRENDS DATABASE ---
const HSN_DATABASE = [
  {
    hsn: "85171300", chapter: "85", description: "Smartphones", uqc: "NOS",
    importPolicy: "Free", exportPolicy: "Free",
    advisories: ["BIS Registration Mandatory (CRS)", "WPC ETA Approval Required", "E-Waste EPR Applicable"],
    import: { bcd: 20, igst: 18, aidc: 0 },
    export: { dbkRate: 0.15, dbkCap: null, rodtepRate: 0.5, rodtepCap: null },
    trends: { import: [12, 15, 18, 22, 28], export: [2, 4, 7, 11, 15], topPartners: ["China (45%)", "Vietnam (20%)", "UAE (15%)"] }
  },
  {
    hsn: "61091000", chapter: "61", description: "T-shirts, singlets and other vests, of cotton", uqc: "PCS",
    importPolicy: "Free", exportPolicy: "Free",
    advisories: ["NOC from Textile Committee may be required"],
    import: { bcd: 20, igst: 5, aidc: 0 },
    export: { dbkRate: 5.4, dbkCap: 85, rodtepRate: 4.3, rodtepCap: 40 },
    trends: { import: [0.5, 0.6, 0.4, 0.7, 0.8], export: [4, 4.2, 3.8, 4.5, 5.1], topPartners: ["USA (35%)", "UK (18%)", "Germany (12%)"] }
  },
  {
    hsn: "84713010", chapter: "84", description: "Personal computers (Laptops, etc.)", uqc: "NOS",
    importPolicy: "Restricted", exportPolicy: "Free",
    advisories: ["DGFT Import Authorisation Mandatory", "BIS Registration Mandatory"],
    import: { bcd: 0, igst: 18, aidc: 0 },
    export: { dbkRate: 0.15, dbkCap: null, rodtepRate: 0.5, rodtepCap: null },
    trends: { import: [5, 6, 8, 7, 5], export: [0.1, 0.2, 0.3, 0.4, 0.8], topPartners: ["China (60%)", "Taiwan (15%)", "USA (10%)"] }
  },
  {
    hsn: "09011119", chapter: "09", description: "Coffee, not roasted, not decaffeinated", uqc: "KGS",
    importPolicy: "Free", exportPolicy: "Free",
    advisories: ["FSSAI Clearance Mandatory", "Plant Quarantine NOC Required"],
    import: { bcd: 100, igst: 5, aidc: 0 },
    export: { dbkRate: 0.15, dbkCap: null, rodtepRate: 1.4, rodtepCap: 2.2 },
    trends: { import: [0.2, 0.25, 0.3, 0.35, 0.4], export: [1.2, 1.3, 1.1, 1.4, 1.6], topPartners: ["Italy (20%)", "Germany (15%)", "Belgium (10%)"] }
  },
  {
    hsn: "71081200", chapter: "71", description: "Gold, non-monetary, unwrought", uqc: "KGS",
    importPolicy: "Restricted", exportPolicy: "Restricted",
    advisories: ["Import through Nominated Agencies Only", "RBI Guidelines Applicable"],
    import: { bcd: 10, igst: 3, aidc: 5 },
    export: { dbkRate: 0, dbkCap: null, rodtepRate: 0, rodtepCap: null },
    trends: { import: [30, 35, 45, 40, 38], export: [0.5, 0.6, 0.8, 1.0, 1.2], topPartners: ["Switzerland (40%)", "UAE (30%)", "South Africa (15%)"] }
  }
];

// --- TREND GRAPH ---
const TrendGraph = ({ data, title, colorClass, bgClass }) => {
  const maxVal = Math.max(...data) || 1;
  const years = ["2019", "2020", "2021", "2022", "2023"];
  return (
    <div className="flex-1 mt-4">
      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">{title}</div>
      <div className="flex items-end gap-2 h-32 border-b border-slate-700/50 pb-2">
        {data.map((val, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center justify-end group">
            <div
              className={`w-full rounded-t-sm transition-all duration-500 relative ${bgClass} hover:opacity-80`}
              style={{ height: `${(val / maxVal) * 100}%`, minHeight: '4px' }}
            >
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity ${colorClass}`}>
                ${val}B
              </div>
            </div>
            <div className="text-[9px] text-slate-500 mt-2">{years[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================
const CloudDeskDuty = () => {
  const [activeTab, setActiveTab] = useState('finder');
  const [finderSearch, setFinderSearch] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [selectedHSN, setSelectedHSN] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [quantity, setQuantity] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [expandedHSN, setExpandedHSN] = useState(null);

  // Navbar state
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(null);

  // Scroll to top on mount; track scroll for navbar
  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const chapters = useMemo(() =>
    ['All', ...Array.from(new Set(HSN_DATABASE.map(i => i.chapter))).sort()], []);

  const filteredDirectory = useMemo(() =>
    HSN_DATABASE.filter(item => {
      const matchesSearch = item.hsn.includes(finderSearch) ||
        item.description.toLowerCase().includes(finderSearch.toLowerCase());
      const matchesChapter = selectedChapter === 'All' || item.chapter === selectedChapter;
      return matchesSearch && matchesChapter;
    }), [finderSearch, selectedChapter]);

  const handleLaunchCalculator = (hsnItem, type) => {
    setSelectedHSN(hsnItem);
    setInputValue('');
    setQuantity('');
    setActiveTab(type);
    triggerAnalysis();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 800);
  };

  // --- MATH ENGINE ---
  const bcdAmount = selectedHSN && inputValue ? (Number(inputValue) * (selectedHSN.import.bcd / 100)) : 0;
  const aidcAmount = selectedHSN && inputValue ? (Number(inputValue) * (selectedHSN.import.aidc / 100)) : 0;
  const swsAmount = bcdAmount * 0.10;
  const valueForIgst = Number(inputValue) + bcdAmount + aidcAmount + swsAmount;
  const igstAmount = selectedHSN && inputValue ? (valueForIgst * (selectedHSN.import.igst / 100)) : 0;
  const totalImportDuty = bcdAmount + aidcAmount + swsAmount + igstAmount;
  const landedCost = Number(inputValue) + totalImportDuty;
  const effectiveImportRate = inputValue ? ((totalImportDuty / Number(inputValue)) * 100).toFixed(2) : '0.00';

  let dbkAmount = 0, rodtepAmount = 0, dbkCapped = false, rodtepCapped = false;
  if (selectedHSN && inputValue && activeTab === 'export') {
    const fob = Number(inputValue);
    const qty = Number(quantity) || 0;
    const dbkCalc = fob * (selectedHSN.export.dbkRate / 100);
    if (selectedHSN.export.dbkCap && qty > 0) {
      const max = qty * selectedHSN.export.dbkCap;
      dbkAmount = dbkCalc > max ? (dbkCapped = true, max) : dbkCalc;
    } else { dbkAmount = dbkCalc; }
    const rodCalc = fob * (selectedHSN.export.rodtepRate / 100);
    if (selectedHSN.export.rodtepCap && qty > 0) {
      const max = qty * selectedHSN.export.rodtepCap;
      rodtepAmount = rodCalc > max ? (rodtepCapped = true, max) : rodCalc;
    } else { rodtepAmount = rodCalc; }
  }

  const totalIncentive = dbkAmount + rodtepAmount;
  const effectiveExportMargin = inputValue ? ((totalIncentive / Number(inputValue)) * 100).toFixed(2) : '0.00';

  const generateInsights = () => {
    if (!selectedHSN) return null;
    const insights = [];
    if (activeTab === 'import') {
      if (selectedHSN.importPolicy === 'Restricted')
        insights.push({ type: 'danger', icon: ShieldAlert, text: "Strict Import Policy: DGFT Authorisation is mandatory. Unauthorized import will lead to confiscation." });
      if (selectedHSN.import.bcd >= 15)
        insights.push({ type: 'warning', icon: Globe, text: `High BCD Detected (${selectedHSN.import.bcd}%). Verify if the Country of Origin qualifies for Free Trade Agreement (FTA) duty exemptions.` });
      if (selectedHSN.import.bcd > 0)
        insights.push({ type: 'info', icon: Zap, text: "Manufacturing for export? Use Advance Authorisation or MOOWR to reduce this BCD to 0%." });
      if (selectedHSN.import.aidc > 0)
        insights.push({ type: 'warning', icon: AlertCircle, text: `AIDC Cess of ${selectedHSN.import.aidc}% is applicable. AIDC cannot be offset using standard IGST input tax credits.` });
    } else if (activeTab === 'export') {
      if (selectedHSN.exportPolicy === 'Restricted' || selectedHSN.exportPolicy === 'Prohibited')
        insights.push({ type: 'danger', icon: ShieldAlert, text: `Export Policy is ${selectedHSN.exportPolicy}. Ensure you hold valid DGFT quotas or licenses before planning shipment.` });
      if (dbkCapped)
        insights.push({ type: 'warning', icon: AlertCircle, text: `Statutory Drawback Cap Hit. You are losing ₹${((Number(inputValue) * (selectedHSN.export.dbkRate / 100)) - dbkAmount).toLocaleString()} due to the ₹${selectedHSN.export.dbkCap}/unit ceiling.` });
      if (rodtepCapped)
        insights.push({ type: 'warning', icon: AlertCircle, text: `RoDTEP Value Cap Hit. Scrip generation is limited to ₹${selectedHSN.export.rodtepCap} per ${selectedHSN.uqc}.` });
    }
    if (insights.length === 0)
      insights.push({ type: 'success', icon: CheckCircle, text: "Tariff structure is standard. No critical anomalies detected." });
    return insights;
  };

  const renderDynamicContent = () => {
    const sections = {
      finder: {
        title: "India HSN Classification & DGFT Compliance",
        body: "The Harmonized System of Nomenclature (HSN) determines your entire trade compliance landscape. An incorrect 8-digit classification affects duties and dictates mandatory BIS Registration, FSSAI Clearance, or Restricted DGFT Policies.",
        cols: [
          { title: "Import vs. Export Policies", text: "A product might be 'Free' to import but 'Restricted' to export, or vice versa. Always check both policy statuses in the directory before committing to commercial contracts." },
          { title: "Non-Tariff Barriers", text: "Our Trade Connect advisory integration flags mandatory regulatory requirements (like EPR, WPC, or Plant Quarantine) that will halt your shipment at Customs if ignored." }
        ],
        cta: { bg: "bg-indigo-950/20 border-indigo-900/50", btn: "bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.4)]", text: "Struggling to Classify Your Product?", sub: "Misclassification leads to heavy Customs penalties and rejected incentive claims. Let our experts secure an Advance Ruling or determine your definitive HSN code.", label: "Get Expert Classification" }
      },
      import: {
        title: "Mastering Customs Valuations and Landed Costs",
        body: "Calculating import duties isn't just about applying the Basic Customs Duty (BCD). The integration of Social Welfare Surcharge (SWS), IGST, and specific cess levies like AIDC fundamentally changes your landed cost equation.",
        cols: [
          { title: "The AIDC Impact", text: "AIDC is applied specifically to goods like Gold, Coal, and Fertilizers. Unlike IGST, AIDC cannot be claimed as an Input Tax Credit (ITC), making it a sunk cost that directly impacts your bottom line." },
          { title: "Advance Rulings & Optimization", text: "A high Effective Duty Rate signals a need for strategic intervention. Importers must evaluate Free Trade Agreements (FTAs) or utilize schemes like Advance Authorisation (AA) and MOOWR to legally defer or eliminate tariffs." }
        ],
        cta: { bg: "bg-blue-950/20 border-blue-900/50", btn: "bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]", text: "Is your effective duty rate destroying your margins?", sub: "Do not rely solely on standard assessments. Let our DGFT and Customs experts secure your Advance Authorisations, apply FTA benefits, and legally optimize your landed costs.", label: "Optimize Import Costs" }
      },
      export: {
        title: "Maximizing Export Incentives: DBK & RoDTEP",
        body: "The Remission of Duties and Taxes on Exported Products (RoDTEP) and Duty Drawback (DBK) schemes are vital for export competitiveness. However, assessing yields manually is incredibly risky due to statutory limits imposed by the Ministry of Commerce.",
        cols: [
          { title: "Beware of Value Caps", text: "While a percentage rate (e.g., 4.3%) looks attractive, it is often restricted by a UQC value cap (e.g., ₹40 per piece). Failing to account for this cap leads to catastrophic miscalculations in export pricing." },
          { title: "Brand Rate Fixation", text: "If the All Industry Rate (AIR) for Duty Drawback does not cover the actual customs duties paid on your imported raw materials, you can apply for a specific 'Brand Rate' to recover your exact costs." }
        ],
        cta: { bg: "bg-cyan-950/20 border-cyan-900/50", btn: "bg-cyan-600 hover:bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]", text: "Are you leaving Export Incentives on the table?", sub: "Don't let value caps erode your profits. We manage the entire lifecycle from RoDTEP scrip generation to Duty Drawback claims and Brand Rate fixations.", label: "Claim Export Incentives" }
      }
    };
    const s = sections[activeTab];
    return (
      <>
        <article className="max-w-4xl mx-auto mt-24 text-slate-400">
          <h2 className="text-2xl font-bold text-white mb-4">{s.title}</h2>
          <p className="mb-8 leading-relaxed">{s.body}</p>
          <div className="grid md:grid-cols-2 gap-8">
            {s.cols.map((col, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-white mb-2">{col.title}</h3>
                <p className="text-sm leading-relaxed">{col.text}</p>
              </div>
            ))}
          </div>
        </article>
        <div className={`max-w-4xl mx-auto mt-16 text-center ${s.cta.bg} border rounded-2xl p-10 backdrop-blur-sm`}>
          <h2 className="text-2xl font-bold text-white mb-4">{s.cta.text}</h2>
          <p className="text-slate-400 mb-8">{s.cta.sub}</p>
          <button className={`px-8 py-4 ${s.cta.btn} text-white font-bold rounded-lg transition-colors flex items-center justify-center mx-auto`}>
            {s.cta.label} <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-white">

      {/* Main site navbar (white, fixed) */}
      <MainNavbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowEnrollModal={setShowEnrollModal}
      />

      {/* Page-specific sub-navbar (tool navigation) */}
      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowEnrollModal={setShowEnrollModal}
      />

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />
      </div>

      {/* pt-32 clears MainNavbar (~64px) + NavbarAdvance sub-bar (~60px) */}
      <main className="container mx-auto px-4 md:px-6 pt-32 pb-12 relative z-10">

        {/* Hero */}
        <header className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-950/50 border border-blue-800/50 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Intelligent Assessment Engine</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            India{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Customs Duty & Incentive
            </span>{' '}
            Calculator
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Find your HSN code and utilize our predictive engine to map out landed costs, identify statutory value caps,
            and maximize your RoDTEP & Drawback claims.
          </p>
        </header>

        {/* Tab Bar */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 bg-slate-900/50 p-1.5 rounded-xl mb-8 border border-slate-800 backdrop-blur-sm">
          {[
            { key: 'finder', label: 'Global HSN Directory', icon: BookOpen, activeClass: 'bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]' },
            { key: 'import', label: 'Import Duty Modeler', icon: ArrowDownRight, activeClass: 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' },
            { key: 'export', label: 'Export Scrip Estimator', icon: ArrowUpRight, activeClass: 'bg-cyan-600 shadow-[0_0_20px_rgba(6,182,212,0.4)]' },
          ].map(({ key, label, icon: Icon, activeClass }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2
                ${activeTab === key ? `${activeClass} text-white` : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'}`}
            >
              <Icon className="w-5 h-5" /> {label}
            </button>
          ))}
        </div>

        {/* HSN FINDER TAB */}
        {activeTab === 'finder' && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-900/80 p-6 rounded-2xl shadow-xl border border-slate-800 mb-6 flex flex-col md:flex-row gap-4 backdrop-blur-md">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Query HSN Code or Item Description..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
                  value={finderSearch}
                  onChange={e => setFinderSearch(e.target.value)}
                />
              </div>
              <div className="w-full md:w-64 relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5" />
                <select
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white appearance-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
                  value={selectedChapter}
                  onChange={e => setSelectedChapter(e.target.value)}
                >
                  {chapters.map(ch => (
                    <option key={ch} value={ch}>{ch === 'All' ? 'All Chapters' : `CH-${ch}`}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredDirectory.length === 0 ? (
                <div className="p-12 text-center text-slate-500 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Database returned 0 results. Modify your query parameters.</p>
                </div>
              ) : filteredDirectory.map(item => (
                <div key={item.hsn} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl transition-all flex flex-col gap-6 backdrop-blur-md hover:border-slate-700">
                  <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center w-full">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-2xl font-black text-white font-mono tracking-tight mr-2">{item.hsn}</span>
                        {[
                          { label: `IMP: ${item.importPolicy}`, ok: item.importPolicy === 'Free' },
                          { label: `EXP: ${item.exportPolicy}`, ok: item.exportPolicy === 'Free' },
                        ].map(({ label, ok }) => (
                          <span key={label} className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded border flex items-center gap-1 ${ok ? 'bg-emerald-950/50 border-emerald-800 text-emerald-400' : 'bg-red-950/50 border-red-800 text-red-400'}`}>
                            {!ok && <ShieldAlert className="w-3 h-3" />}
                            {label}
                          </span>
                        ))}
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase bg-slate-800 border border-slate-700 text-slate-300 rounded">
                          UQC: {item.uqc}
                        </span>
                      </div>
                      <p className="text-slate-400 text-base mb-4">{item.description}</p>
                      {item.advisories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.advisories.map((adv, idx) => (
                            <span key={idx} className="flex items-center text-[10px] font-bold text-amber-500 bg-amber-950/30 border border-amber-900/50 px-2 py-1 rounded">
                              <Info className="w-3 h-3 mr-1" /> {adv}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-3 text-sm">
                        {[
                          { label: 'BCD', value: `${item.import.bcd}%`, color: 'text-white' },
                          { label: 'IGST', value: `${item.import.igst}%`, color: 'text-white' },
                          { label: 'AIDC', value: `${item.import.aidc}%`, color: item.import.aidc > 0 ? 'text-amber-400' : 'text-slate-300' },
                          { label: 'RoDTEP', value: `${item.export.rodtepRate}%`, color: 'text-cyan-400' },
                          { label: 'Drawback', value: `${item.export.dbkRate}%`, color: 'text-cyan-400' },
                        ].map(({ label, value, color }) => (
                          <div key={label} className="bg-slate-950/50 px-3 py-2 rounded-lg border border-slate-800/50 flex flex-col min-w-[80px]">
                            <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider mb-1">{label}</span>
                            <span className={`font-mono font-bold ${color}`}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-48 shrink-0">
                      <button onClick={() => handleLaunchCalculator(item, 'import')}
                        className="flex-1 px-4 py-3 bg-blue-600/10 text-blue-400 border border-blue-600/30 hover:bg-blue-600 hover:text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                        <ArrowDownRight className="w-4 h-4" /> Import Model
                      </button>
                      <button onClick={() => handleLaunchCalculator(item, 'export')}
                        className="flex-1 px-4 py-3 bg-cyan-600/10 text-cyan-400 border border-cyan-600/30 hover:bg-cyan-600 hover:text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                        <ArrowUpRight className="w-4 h-4" /> Export Model
                      </button>
                      <button onClick={() => setExpandedHSN(expandedHSN === item.hsn ? null : item.hsn)}
                        className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-slate-700">
                        <BarChart3 className="w-4 h-4" /> {expandedHSN === item.hsn ? 'Hide Analytics' : 'Market Trends'}
                      </button>
                    </div>
                  </div>

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
                                <span className="flex items-center"><Globe className="w-3 h-3 mr-2 text-slate-500" />{partner.split(' ')[0]}</span>
                                <span className="font-mono text-xs">{partner.split(' ')[1]}</span>
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
              ))}
            </div>
          </div>
        )}

        {/* CALCULATOR TABS */}
        {(activeTab === 'import' || activeTab === 'export') && (
          <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row backdrop-blur-xl">

            {/* LEFT: Input */}
            <div className="w-full lg:w-5/12 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/50 relative">
              <button
                onClick={() => setActiveTab('finder')}
                className="absolute top-6 left-6 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center transition-colors"
              >
                ← Return to Directory
              </button>

              <div className="mt-12 space-y-8">
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

                <div className={!selectedHSN ? 'opacity-50 pointer-events-none' : ''}>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">
                    {activeTab === 'import' ? 'Assessable Value (CIF - INR)' : 'FOB Value (INR)'}
                  </label>
                  <div className="relative">
                    <IndianRupee className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${activeTab === 'import' ? 'text-blue-500' : 'text-cyan-500'}`} />
                    <input
                      type="number"
                      placeholder="0.00"
                      className={`w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono font-bold text-xl focus:outline-none focus:ring-1 transition-all ${activeTab === 'import' ? 'focus:border-blue-500 focus:ring-blue-500' : 'focus:border-cyan-500 focus:ring-cyan-500'}`}
                      value={inputValue}
                      onChange={e => { setInputValue(e.target.value ? Number(e.target.value) : ''); if (e.target.value) triggerAnalysis(); }}
                      disabled={!selectedHSN}
                    />
                  </div>
                </div>

                {activeTab === 'export' && selectedHSN && (selectedHSN.export.dbkCap || selectedHSN.export.rodtepCap) && (
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
                      onChange={e => { setQuantity(e.target.value ? Number(e.target.value) : ''); if (e.target.value) triggerAnalysis(); }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Results */}
            <div className="w-full lg:w-7/12 p-8 lg:p-10 relative bg-[#0b1120]">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center">
                  <LineChart className="w-4 h-4 mr-2" />
                  {activeTab === 'import' ? 'Customs Duty Matrix' : 'Incentive Scrip Projection'}
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
                <div className={`space-y-6 transition-opacity duration-300 ${analyzing ? 'opacity-30' : 'opacity-100'}`}>

                  {activeTab === 'import' && (
                    <>
                      <div className="space-y-3 font-mono text-sm">
                        {[
                          { label: 'BASE CIF VALUE', val: Number(inputValue), color: 'text-slate-400', valColor: 'text-white' },
                          { label: `BCD (${selectedHSN.import.bcd}%)`, val: bcdAmount, color: 'text-slate-400', valColor: 'text-white' },
                          ...(selectedHSN.import.aidc > 0 ? [{ label: `AIDC (${selectedHSN.import.aidc}%)`, val: aidcAmount, color: 'text-amber-400', valColor: 'text-amber-400' }] : []),
                          { label: 'SWS (10% OF BCD)', val: swsAmount, color: 'text-slate-400', valColor: 'text-white' },
                          { label: `IGST (${selectedHSN.import.igst}%)`, val: igstAmount, color: 'text-slate-400', valColor: 'text-white', border: true },
                        ].map(({ label, val, color, valColor, border }) => (
                          <div key={label} className={`flex justify-between items-center ${color} ${border ? 'border-b border-dashed border-slate-700 pb-3' : ''}`}>
                            <span>{label}</span>
                            <span className={valColor}>₹ {val.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center font-bold text-blue-400 pt-1 text-base">
                          <span>TOTAL DUTY LEVY</span>
                          <span>₹ {totalImportDuty.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                      <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-6 shadow-[inset_0_0_20px_rgba(37,99,235,0.1)]">
                        <div className="text-[10px] text-blue-400 uppercase tracking-widest mb-2 font-bold">Projected Landed Cost</div>
                        <div className="text-4xl lg:text-5xl font-black text-white font-mono tracking-tighter mb-4">
                          ₹ {landedCost.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
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

                  {activeTab === 'export' && (
                    <>
                      <div className="space-y-3 font-mono text-sm">
                        <div className="flex justify-between items-center text-slate-400">
                          <span>BASE FOB VALUE</span>
                          <span className="text-white">₹ {(Number(inputValue) || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400">
                          <div className="flex items-center gap-2">
                            <span>DUTY DRAWBACK ({selectedHSN.export.dbkRate}%)</span>
                            {dbkCapped && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded uppercase">Capped</span>}
                          </div>
                          <span className={dbkCapped ? 'text-amber-400' : 'text-white'}>₹ {dbkAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400 border-b border-dashed border-slate-700 pb-3">
                          <div className="flex items-center gap-2">
                            <span>RoDTEP SCRIP ({selectedHSN.export.rodtepRate}%)</span>
                            {rodtepCapped && <span className="bg-amber-500/20 text-amber-500 text-[9px] px-1.5 py-0.5 rounded uppercase">Capped</span>}
                          </div>
                          <span className={rodtepCapped ? 'text-amber-400' : 'text-white'}>₹ {rodtepAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center font-bold text-cyan-400 pt-1 text-base">
                          <span>GROSS INCENTIVE YIELD</span>
                          <span>₹ {totalIncentive.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                      <div className="bg-cyan-950/20 border border-cyan-900/50 rounded-xl p-6 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
                        <div className="text-[10px] text-cyan-400 uppercase tracking-widest mb-2 font-bold">Total Export Realization</div>
                        <div className="text-4xl lg:text-5xl font-black text-white font-mono tracking-tighter mb-4">
                          ₹ {(Number(inputValue) + totalIncentive).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
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

                  {/* Intelligence */}
                  <div className="mt-8 border-t border-slate-800 pt-6">
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                      <BrainCircuit className="w-4 h-4 text-purple-500" /> Intelligence Analysis
                    </div>
                    <div className="space-y-3">
                      {generateInsights()?.map((insight, idx) => {
                        const colors = {
                          danger: 'bg-red-950/40 border-red-900/50 text-red-300',
                          warning: 'bg-amber-950/40 border-amber-900/50 text-amber-300',
                          info: 'bg-blue-950/40 border-blue-900/50 text-blue-300',
                          success: 'bg-emerald-950/40 border-emerald-900/50 text-emerald-300',
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
        )}

        {renderDynamicContent()}

      </main>

      <Footer onEnrollClick={() => setShowEnrollModal({ open: true, type: 'Enroll' })} />

    </div>
  );
};

export default CloudDeskDuty;