import React from "react";
import { Phone, Headphones } from "lucide-react";
import { 
  Shield, 
  Activity, 
  ChevronRight, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
} from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Services & Tools</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Everything you need to manage <br className="hidden sm:block" />
            <span className="text-blue-500">Cross-Border Trade</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Card 1: DGFT Consultancy - Large */}
          <div className="md:col-span-2 md:row-span-2 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10"></div>
            <div className="p-8 h-full flex flex-col relative z-20">
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">DGFT & Customs Consultancy</h3>
              <p className="text-slate-400 mb-8 max-w-sm">Expert filing, license tracking & renewals. From IEC to Advance Authorisation closure.</p>
              
              <div className="mt-auto space-y-3">
                {['Advance Authorisation', 'EPCG Scheme', 'RoDTEP Scrips', 'Import Monitoring (SIMS)', 'Certificate of Origin (COO)'].map((item, i) => (
                  <div key={i} className="flex items-center text-slate-300 bg-slate-800/50 p-3 rounded-lg backdrop-blur-sm border border-slate-700/50 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3" />
                    <span className="text-sm">{item}</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
            {/* Background graphic */}
            <div className="absolute right-[-20%] bottom-[-10%] w-[80%] h-[80%] opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-700">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#0F62FE" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-8.1C81.5,4.2,70.2,14.5,60.8,24.1C51.4,33.7,43.9,42.6,35.1,51.5C26.3,60.4,16.2,69.3,4.9,71.2C-6.4,73.1,-18.9,68,-30.9,60.8C-42.9,53.6,-54.4,44.3,-63.4,32.7C-72.4,21.1,-78.9,7.2,-78.2,-6.4C-77.5,-20,-69.6,-33.3,-59.2,-43.8C-48.8,-54.3,-35.9,-62,-22.6,-66.6C-9.3,-71.2,4.4,-72.7,17.4,-72.4L44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </div>
          </div>

          {/* Card 2: CloudDesk SaaS - Wide */}
          <div className="md:col-span-2 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
             <div className="p-6 h-full flex flex-col relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      CloudDesk SaaS <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/20">New</span>
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">Trade compliance on autopilot.</p>
                  </div>
                  <div className="w-10 h-10 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                    <Activity className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Mock Dashboard UI */}
                <div className="flex-1 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 mt-2 group-hover:bg-slate-800 transition-colors">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700">
                    <div className="h-2 w-16 bg-slate-600 rounded"></div>
                    <div className="h-2 w-8 bg-emerald-500 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <div className="h-1.5 w-24 bg-slate-600 rounded"></div>
                      </div>
                      <div className="h-1.5 w-12 bg-slate-600 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                        <div className="h-1.5 w-20 bg-slate-600 rounded"></div>
                      </div>
                      <div className="h-1.5 w-12 bg-slate-600 rounded"></div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="h-8 w-full bg-slate-700/50 rounded flex items-center justify-center text-[10px] text-slate-400">View Analytics</div>
                  </div>
                </div>
             </div>
          </div>

          {/* Card 3: Compliance Tools */}
          <div className="md:col-span-1 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1">
             <div className="p-6 h-full flex flex-col justify-between">
                <div>
                   <div className="w-10 h-10 bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
                      <Calculator className="w-5 h-5" />
                   </div>
                   <h3 className="text-lg font-bold text-white">Duty Calculator</h3>
                   <p className="text-xs text-slate-400 mt-2">Calculate BCD, SWS & IGST instantly.</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between text-slate-300 text-sm group-hover:text-emerald-400 transition-colors cursor-pointer">
                    <span>Try Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
             </div>
          </div>

          {/* Card 4: Audit & Risk */}
          <div className="md:col-span-1 group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1">
             <div className="p-6 h-full flex flex-col justify-between">
                <div>
                   <div className="w-10 h-10 bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                      <Shield className="w-5 h-5" />
                   </div>
                   <h3 className="text-lg font-bold text-white">Risk Audit</h3>
                   <p className="text-xs text-slate-400 mt-2">Identify compliance gaps before customs does.</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between text-slate-300 text-sm group-hover:text-orange-400 transition-colors cursor-pointer">
                    <span>Start Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
