import {
  Sun,
  Zap,
  Activity,
  ChevronRight,
  Truck,
  Plug,
} from "lucide-react";

const CloudDeskSolar = () => {
  return (
    <section
      id="clouddesk"
      className="py-20 bg-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-sky-600 text-white font-bold px-4 py-1 rounded-full text-sm mb-6 tracking-wide">
              EXIMINQ Contact
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Project Compliance <span className="text-sky-400">Hub</span>
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Track ALMM validity for your modules, monitor BIS surveillance schedules for inverters, and manage carbon credit ledgers in real-time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-amber-400 border border-slate-700">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">ALMM Watch</h4>
                  <p className="text-slate-400 text-sm">
                    Alerts for model expiry, factory audits, and renewals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-sky-400 border border-slate-700">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">BIS Tracker</h4>
                  <p className="text-slate-400 text-sm">
                    Monitor CRS certificates, test reports, and surveillance.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
              Launch Dashboard <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Mock */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-sky-600 blur-[100px] opacity-20 rounded-full" />
            <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold uppercase text-sm text-slate-200">
                    Solar Park – RJ-01
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    500MW • IMPORT PHASE
                  </p>
                </div>
                <span className="flex items-center gap-2 text-xs bg-sky-900/30 text-sky-400 px-2 py-1 rounded">
                  <Activity className="w-3 h-3" /> ACTIVE
                </span>
              </div>

              <div className="bg-slate-700/40 p-4 rounded-lg flex justify-between items-center border-l-4 border-amber-500">
                <div className="flex items-center gap-3">
                  <Sun className="text-amber-400" />
                  <span className="text-sm font-bold">ALMM Approved Modules</span>
                </div>
                <span className="text-xs text-green-400">CLEARED</span>
              </div>

              <div className="bg-slate-700/40 p-4 rounded-lg flex justify-between items-center border-l-4 border-sky-500">
                <div className="flex items-center gap-3">
                  <Truck className="text-sky-400" />
                  <span className="text-sm font-bold">Transformer ODC</span>
                </div>
                <span className="text-xs text-sky-400">IN TRANSIT</span>
              </div>

              <div className="bg-slate-700/40 p-4 rounded-lg flex justify-between items-center border-l-4 border-red-500">
                <div className="flex items-center gap-3">
                  <Plug className="text-red-400" />
                  <span className="text-sm font-bold">
                    Inverter BIS Renewal
                  </span>
                </div>
                <span className="text-xs text-red-400">DUE IN 7 DAYS</span>
              </div>
                                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500 font-mono">
                     <span>DUTY SAVED: ₹12.5 Cr</span>
                     <span>CARBON CREDITS: 50,000</span>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDeskSolar;
