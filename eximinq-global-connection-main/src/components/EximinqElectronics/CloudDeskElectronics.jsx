import { Activity, RefreshCw, Monitor, Zap, Smartphone, Battery, Server } from "lucide-react";

const CloudDeskElectronics = () => {
  return (
      <section id="clouddesk" className="py-20 bg-slate-950 overflow-hidden relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/20 font-bold px-4 py-1 rounded-full text-sm mb-6">
                EXIMINQ Contact
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Compliance <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Operating System</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Centralized management for WPC licenses, BIS registration validity, and battery waste reports. Stay audit-ready with real-time digital tracking.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-lg text-indigo-400 border border-slate-800">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-200">License Watch</h4>
                    <p className="text-slate-500 text-sm">Alerts for BIS CRS surveillance deadlines & WPC renewals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-lg text-cyan-400 border border-slate-800">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-200">EPR Tracker</h4>
                    <p className="text-slate-500 text-sm">Automated calculation of e-waste recycling targets based on import data.</p>
                  </div>
                </div>
              </div>

              <button className="mt-10 bg-white text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                View Dashboard <Monitor className="w-5 h-5" />
              </button>
            </div>

            <div className="lg:w-1/2 relative">
               {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 blur-[80px] rounded-full"></div>
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl backdrop-blur-sm">
                <div className="bg-[#0f172a] rounded-lg p-6">
                  {/* Mock Dashboard UI */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-slate-200 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" /> Live Operations
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-1">SYS: ONLINE • LATENCY: 12ms</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-slate-800/50 p-4 rounded-lg flex justify-between items-center border border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <Smartphone className="text-purple-400" />
                        <div>
                           <p className="text-sm font-bold text-slate-300">Model X - WPC Approval</p>
                           <p className="text-xs text-slate-500">ETA Number Generated</p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/20">Approved</span>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-lg flex justify-between items-center border border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <Battery className="text-red-400" />
                        <div>
                           <p className="text-sm font-bold text-slate-300">Li-Ion Batch Import</p>
                           <p className="text-xs text-slate-500">Customs Held - Doc Pending</p>
                        </div>
                      </div>
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/20">Action Req</span>
                    </div>
                    
                    <div className="bg-slate-800/50 p-4 rounded-lg flex justify-between items-center border border-slate-700/50">
                       <div className="flex items-center gap-3">
                        <Server className="text-cyan-400" />
                        <div>
                           <p className="text-sm font-bold text-slate-300">EPR Quarterly Return</p>
                           <p className="text-xs text-slate-500">Due in 5 Days</p>
                        </div>
                      </div>
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded border border-yellow-500/20">Pending</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500 font-mono">
                     <span>ENCRYPTION: AES-256</span>
                     <span>SYNCED: 2S AGO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CloudDeskElectronics;
