import React from "react";
import {
  Lock,
  Crosshair,
  FileKey,
  Radar
} from "lucide-react";

const HeroDefense = () => {
  return (
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.18),transparent_18%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.12),transparent_24%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#172554_100%)]"></div>
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.28)_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="absolute right-10 top-16 h-72 w-72 rounded-full border border-blue-400/20 bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-sm text-xs font-bold mb-6 tracking-[0.2em] uppercase backdrop-blur-md">
              <Lock className="w-3 h-3" />
              <span>Restricted Access Protocol</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              Mission Critical <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Trade Compliance</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed font-light border-l-2 border-blue-600 pl-6">
              Securing your supply chain with precision. From SCOMET licensing for dual-use tech to managing complex Offset obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-[0_0_30px_rgba(29,78,216,0.3)] flex items-center justify-center gap-2 group">
                Verify Clearance <Crosshair className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
              <button className="bg-transparent hover:bg-white/5 border border-slate-600 text-slate-300 px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2">
                <FileKey className="w-5 h-5" /> SCOMET List
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats - HUD Style */}
        <div className="hidden lg:block absolute right-10 bottom-20 z-20 w-80">
           <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-6 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-50">
                  <Radar className="w-12 h-12 text-blue-900 animate-spin-slow" />
              </div>
              <div className="flex items-start gap-4 mb-4 relative z-10">
                 <div>
                    <h3 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Offset Credits</h3>
                    <p className="text-4xl font-black text-white font-mono">$500M+</p>
                    <p className="text-[10px] text-slate-500 uppercase mt-1">Discharged Successfully</p>
                 </div>
              </div>
              <div className="space-y-2 relative z-10">
                <div className="flex justify-between text-[10px] text-slate-400 font-mono uppercase">
                  <span>SCOMET Approval</span>
                  <span className="text-emerald-500">98.5% Rate</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[98.5%] shadow-[0_0_10px_#10b981]"></div>
                </div>
              </div>
              
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500"></div>
           </div>
        </div>
      </section>

  );
};

export default HeroDefense;
