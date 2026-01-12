import React from "react";
import {
  FileKey,
  TrendingUp,
  Shield,
  Activity,
  Box,
  Lock,
  ChevronRight,
  Crosshair,
} from "lucide-react";

const CloudDeskDefense = () => {
  return (
    <section
      id="clouddesk"
      className="py-20 bg-slate-900 text-white overflow-hidden border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-900/30 text-blue-400 border border-blue-500/30 font-bold px-4 py-1 rounded-sm text-xs mb-6 tracking-widest uppercase">
              EXIMINQ CLOUD DESK
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Secure Compliance <span className="text-blue-500">Vault</span>
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              A fortified digital environment to track End User Certificates,
              monitor Industrial License validity, and manage Offset credit
              banking.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-950 p-3 rounded-sm text-blue-500 border border-slate-800">
                  <FileKey className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-200">
                    License Watchtower
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Automated expiration alerts for SCOMET, IL, and Arms
                    Licenses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-950 p-3 rounded-sm text-emerald-500 border border-slate-800">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-200">
                    Offset Ledger
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Real-time tracking of offset obligations vs credits
                    achieved.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-white text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-sm font-bold transition-all flex items-center gap-2 border-l-4 border-blue-600">
              Request Secure Access <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Mock Dashboard */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-600 blur-[120px] opacity-10 rounded-full"></div>
            <div className="relative bg-slate-950 border border-slate-800 rounded-sm p-2 shadow-2xl">
              <div className="bg-[#0b1121] rounded-sm p-6 relative overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Mock Dashboard UI */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <div>
                    <h4 className="text-slate-300 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                      <Shield className="w-3 h-3 text-blue-500" /> Project:
                      IND-AERO-X
                    </h4>
                    <p className="text-[10px] text-slate-600 font-mono mt-1">
                      SECURITY LEVEL: RESTRICTED
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-900/20 text-emerald-500 px-2 py-1 rounded-sm border border-emerald-900/50 text-[10px] font-bold font-mono">
                    ENCRYPTED
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <div className="bg-slate-900/80 p-4 rounded-sm flex justify-between items-center border-l-2 border-blue-500">
                    <div className="flex items-center gap-3">
                      <Crosshair className="text-blue-500 w-4 h-4" />
                      <div>
                        <p className="text-sm font-bold text-slate-300">
                          SCOMET #8829
                        </p>
                        <p className="text-xs text-slate-500">
                          Cat 6: Munitions List
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/20 px-2 py-1 rounded-sm">
                      APPROVED
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-sm flex justify-between items-center border-l-2 border-slate-600">
                    <div className="flex items-center gap-3">
                      <Box className="text-slate-400 w-4 h-4" />
                      <div>
                        <p className="text-sm font-bold text-slate-300">
                          Offset Claim Q4
                        </p>
                        <p className="text-xs text-slate-500">
                          Value: $1.2M • IOP: TechCorp
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-900/20 px-2 py-1 rounded-sm">
                      AUDIT PENDING
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-sm flex justify-between items-center border-l-2 border-red-500">
                    <div className="flex items-center gap-3">
                      <Lock className="text-red-500 w-4 h-4" />
                      <div>
                        <p className="text-sm font-bold text-slate-300">
                          Industrial Lic. Renewal
                        </p>
                        <p className="text-xs text-slate-500">
                          Unit: Hyderabad Facility
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-red-400 bg-red-900/20 px-2 py-1 rounded-sm">
                      EXPIRING 30D
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-[10px] text-slate-600 font-mono">
                  <span>OFFSET BANK: $45M</span>
                  <span>LAST SYNC: 1400Z</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDeskDefense;
