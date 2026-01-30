import { Wifi, ChevronRight, RefreshCw, Server } from "lucide-react";

const HeroElectronics = () => {
  return (
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 z-0 bg-[#0B1120]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-900/50 backdrop-blur-md border border-indigo-500/30 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Wifi className="w-4 h-4 animate-pulse" />
              <span>Next-Gen Compliance for Electronics</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Scale Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Tech Supply Chain</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed border-l-2 border-cyan-500 pl-6">
              Navigate the digital frontier with specialized compliance for BIS (CRS), WPC Wireless approvals, and global E-Waste regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2">
                Verify Compliance <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5 text-green-400" /> Calculate EPR
              </button>
            </div>
          </div>
        </div>

        {/* Floating Holo-Card */}
        <div className="hidden lg:block absolute right-0 bottom-20 z-20 w-1/3">
           <div className="bg-slate-900/80 backdrop-blur-xl shadow-2xl p-6 border border-slate-700 rounded-l-2xl transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-4">
                 <div className="bg-indigo-500/20 p-3 rounded-lg text-indigo-400 border border-indigo-500/30">
                    <Server className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-white">Import Volume</h3>
                    <p className="text-3xl font-bold text-cyan-400">1.2M Units</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">CHIPSET: CLEARED • BATCH: #9902</p>
                 </div>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[85%] rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  <span>Clearance Status</span>
                  <span className="text-cyan-500">85% Complete</span>
                </div>
              </div>
           </div>
        </div>
      </section>
  );
};

export default HeroElectronics;
