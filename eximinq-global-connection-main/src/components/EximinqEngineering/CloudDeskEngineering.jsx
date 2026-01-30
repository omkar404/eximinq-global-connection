import {
  Activity,
  Zap,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Cpu,
} from "lucide-react";

const CloudDeskEngineering = () => {
  return (
    <section
      id="clouddesk"
      className="py-20 bg-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-600 text-white font-bold px-4 py-1 rounded-sm text-sm mb-6 tracking-wider">
              EXIMINQ Contact
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Industrial License Management{" "}
              <span className="text-blue-400">Simplified</span>
            </h2>

            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Track EPCG licenses, monitor export obligations, manage BIS
              certifications, and stay audit-ready — all from a single dashboard.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded border border-slate-700 text-blue-400">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">EO Monitoring</h4>
                  <p className="text-slate-400 text-sm">
                    Real-time tracking of Export Obligation under EPCG and AA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded border border-slate-700 text-blue-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">BIS Surveillance</h4>
                  <p className="text-slate-400 text-sm">
                    Automated alerts for BIS audits, renewals, and sampling.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-10 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-sm font-bold transition-all flex items-center gap-2 border-b-4 border-orange-800 active:border-b-0 active:translate-y-1">
              Schedule Demo
            </button>
          </div>

          {/* RIGHT MOCK DASHBOARD */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-600 blur-[120px] opacity-10 rounded-full" />

            <div className="relative bg-slate-800 border border-slate-700 rounded-sm p-1 shadow-2xl">
              <div className="bg-slate-900 rounded-sm p-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-slate-200 font-bold uppercase tracking-wider text-sm">
                      Engineering Dashboard
                    </h4>
                    <p className="text-xs text-slate-500 font-mono">
                      ID: ENG-8842-X
                    </p>
                  </div>
                  <div className="bg-blue-900/50 text-blue-300 border border-blue-800 text-xs px-2 py-1 rounded-sm">
                    LIVE FEED
                  </div>
                </div>

                {/* Cards */}
                <div className="space-y-3">
                  <div className="bg-slate-800 p-4 rounded-sm flex justify-between items-center border-l-4 border-blue-500">
                    <div className="flex items-center gap-3">
                      <Wrench className="text-blue-400" />
                      <div>
                        <p className="text-sm font-bold text-slate-200">
                          CNC Machine Import
                        </p>
                        <p className="text-xs text-slate-500">
                          EPCG License • Active
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      EO: 45%
                    </span>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-sm flex justify-between items-center border-l-4 border-orange-500">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="text-orange-400" />
                      <div>
                        <p className="text-sm font-bold text-slate-200">
                          BIS Renewal Due
                        </p>
                        <p className="text-xs text-slate-500">
                          Steel Components
                        </p>
                      </div>
                    </div>
                    <span className="text-xs bg-orange-900/30 text-orange-400 px-2 py-1 rounded-sm">
                      15 Days
                    </span>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-sm flex justify-between items-center border-l-4 border-green-500">
                    <div className="flex items-center gap-3">
                      <Cpu className="text-green-400" />
                      <div>
                        <p className="text-sm font-bold text-slate-200">
                          WPC Approval
                        </p>
                        <p className="text-xs text-slate-500">
                          ETA Issued
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-400 font-mono">
                  <span>DUTY SAVED: ₹12.5 Cr</span>
                  <span>AUDIT READY</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloudDeskEngineering;
