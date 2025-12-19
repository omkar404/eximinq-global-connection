import React, { useState } from 'react';
import {CheckCircle2, ArrowRight} from 'lucide-react';

const SegmentSection = () => {
  const [activeTab, setActiveTab] = useState('importer');

  const content = {
    importer: {
      title: "Streamlined Customs Clearance",
      desc: "Stop overpaying duties. Our automated HSN classification and exemption notification finder ensures you pay exactly what you owe, and not a rupee more.",
      features: ["Duty Calculator with latest cess", "IGCR Monthly Returns", "Bond/BG Management"],
      stat: "Avg. 15% Duty Saved"
    },
    exporter: {
      title: "Maximize Export Incentives",
      desc: "Never miss a claim. From RoDTEP to Drawback, we track every shipping bill to ensure your incentives are realized and credited to your ledger.",
      features: ["RoDTEP & RoSCTL Filing", "e-BRC Realization Tracking", "Advance Auth Closure"],
      stat: "100% Claim Ratio"
    },
    logistics: {
      title: "Logistics Coordination",
      desc: "Bridge the gap between freight forwarders and customs. Real-time container tracking merged with customs release status updates.",
      features: ["Container Tracking", "Detention Calculator", "Port Delay Alerts"],
      stat: "30% Faster Turnaround"
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Tailored for your Trade</h2>
          <div className="inline-flex bg-slate-800/80 rounded-full p-1 backdrop-blur border border-slate-700">
            {['importer', 'exporter', 'logistics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}s
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden min-h-[400px]">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-white transition-all duration-300 animate-fade-in">{content[activeTab].title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">{content[activeTab].desc}</p>
              
              <ul className="space-y-4 mt-6">
                {content[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 text-cyan-400 font-medium hover:text-cyan-300 flex items-center gap-2 group">
                Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex-1 w-full flex justify-center">
              <div className="bg-slate-800/80 backdrop-blur border border-slate-600 p-8 rounded-2xl w-full max-w-sm text-center transform transition-all duration-500 hover:scale-105">
                 <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    {content[activeTab].stat}
                 </div>
                 <p className="text-slate-400">Performance Metric</p>
                 <div className="mt-6 h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[85%] animate-load-bar"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentSection;