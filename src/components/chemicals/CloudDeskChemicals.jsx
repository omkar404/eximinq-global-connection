import {
  FileWarning,
  Activity,
  AlertTriangle,
  CheckCircle,
  Globe,
  Truck,
} from "lucide-react";

const CloudDeskChemicals = () => {
  return (
    <section id="clouddesk" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-emerald-600 px-4 py-1 rounded-sm text-sm font-bold mb-6">
              EXIMINQ CLOUD DESK
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hazardous Material{" "}
              <span className="text-emerald-400">Database</span>
            </h2>

            <p className="text-slate-300 text-lg mb-8">
              Centralized control of MSDS, REACH volume tracking, and regulatory
              expiry alerts — built for chemical operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded border border-slate-700 text-emerald-400">
                  <FileWarning className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">MSDS Vault</h4>
                  <p className="text-slate-400 text-sm">
                    Secure digital storage for Safety Data Sheets with QR access
                    for logistics teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded border border-slate-700 text-emerald-400">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Volume Tracker</h4>
                  <p className="text-slate-400 text-sm">
                    Automatic tracking against REACH tonnage thresholds and
                    alerts before violations.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 border-b-4 border-amber-800 active:border-b-0 active:translate-y-1">
              Access Safety Database
            </button>
          </div>

          {/* Right – Mock Dashboard */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-emerald-600 blur-[120px] opacity-10 rounded-full" />

            <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-1 shadow-2xl">
              <div className="bg-slate-900 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wider">
                      Chemical Command Center
                    </h4>
                    <p className="text-xs text-slate-500 font-mono">
                      SITE: DAHEJ • STATUS: LIVE
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-emerald-400 border border-emerald-400/30 px-2 py-1 rounded">
                    <AlertTriangle className="w-3 h-3" /> SAFE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-800 p-4 rounded flex justify-between items-center border-l-4 border-emerald-500">
                    <div className="flex items-center gap-3">
                      <Globe className="text-emerald-400" />
                      <div>
                        <p className="text-sm font-bold">EU REACH Dossier</p>
                        <p className="text-xs text-slate-500">
                          Acetone • Approved
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 border px-2 py-1 rounded">
                      ACTIVE
                    </span>
                  </div>

                  <div className="bg-slate-800 p-4 rounded flex justify-between items-center border-l-4 border-amber-500">
                    <div className="flex items-center gap-3">
                      <FileWarning className="text-amber-400" />
                      <div>
                        <p className="text-sm font-bold">BIS Renewal</p>
                        <p className="text-xs text-slate-500">
                          Caustic Soda • 20 Days
                        </p>
                      </div>
                    </div>
                    <span className="text-xs bg-amber-900/30 text-amber-400 px-2 py-1 rounded">
                      DUE
                    </span>
                  </div>

                  <div className="bg-slate-800 p-4 rounded flex justify-between items-center border-l-4 border-blue-500">
                    <div className="flex items-center gap-3">
                      <Truck className="text-blue-400" />
                      <div>
                        <p className="text-sm font-bold">ISO Tank Shipment</p>
                        <p className="text-xs text-slate-500">
                          UN 1203 • Arrived
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500 font-mono">
                  <span>TONNAGE LEFT: 45T</span>
                  <span>SDS v2.1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDeskChemicals;
