// src/components/CloudDeskDuty/HeroDuty.jsx
import React from 'react';
import { Sparkles, BookOpen, ArrowDownRight, ArrowUpRight } from 'lucide-react';

const HeroDuty = ({ activeTab, setActiveTab }) => {
  return (
<section className="relative overflow-hidden bg-white pt-40 pb-24 border-t border-gray-200">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/10 blur-[180px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
  </div>

  <div className="relative container mx-auto px-6 text-center max-w-6xl">

    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-8">
      <Sparkles className="w-4 h-4" />
      Intelligent Assessment Engine
    </div>

    <h1 className="text-6xl md:text-7xl font-black leading-none mb-8">
      <span className="text-black">India </span>
      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
        Customs Duty & Incentive
      </span>
      <br />
      <span className="text-black">Calculator</span>
    </h1>

    <p className="text-gray-600 text-xl max-w-4xl mx-auto mb-12">
      Find your HSN code and utilize our predictive engine to map out
      landed costs, identify statutory value caps, and maximize your
      RoDTEP & Drawback claims.
    </p>

    <div className="max-w-5xl mx-auto bg-white shadow-xl border border-gray-200 rounded-2xl p-2 grid md:grid-cols-3 gap-2">
      {[
        {
          key: "finder",
          label: "GLOBAL HSN DIRECTORY",
          icon: BookOpen,
        },
        {
          key: "import",
          label: "IMPORT DUTY MODELER",
          icon: ArrowDownRight,
        },
        {
          key: "export",
          label: "EXPORT SCRIP ESTIMATOR",
          icon: ArrowUpRight,
        },
      ].map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`h-16 rounded-xl font-bold tracking-wider transition-all flex items-center justify-center gap-3
          ${
            activeTab === key
              ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,.35)]"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Icon className="w-5 h-5" />
          {label}
        </button>
      ))}
    </div>
  </div>
</section>
  );
};

export default HeroDuty;