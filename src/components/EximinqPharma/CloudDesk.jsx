import {
  AlertTriangle,
  FileCheck,
  Pill,
  Factory,
} from "lucide-react";

const CloudDesk = () => {
  return (
    <section
      id="clouddesk"
      className="py-20 bg-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-teal-500/20 text-teal-400 font-bold px-4 py-1 rounded-full text-sm mb-6">
              EXIMINQ CLOUD DESK
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pharma Trade Compliance on{" "}
              <span className="text-teal-400">Autopilot</span>
            </h2>

            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Track licenses, manage regulatory documents, and monitor
              shipments in real-time. Cloud Desk ensures you never miss a
              compliance deadline again.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-teal-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Expiry Alerts</h4>
                  <p className="text-slate-400 text-sm">
                    Automated alerts for CDSCO licenses & advance
                    authorizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-teal-400">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Digital Vault</h4>
                  <p className="text-slate-400 text-sm">
                    Secure, audit-ready document storage for inspections.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a 
              href="https://eximinq.in/clouddesk-saas"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block mt-10 bg-teal-600 hover:bg-teal-500 text-white px-8 py-3 rounded-lg font-bold transition-all"
            >
              Explore CloudDesk
            </a>
          </div>

          {/* RIGHT DASHBOARD MOCK */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-teal-500 blur-[120px] opacity-20 rounded-full" />

            <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-2xl">
              <div className="bg-slate-900 rounded-lg p-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-slate-200 font-bold">
                      Compliance Dashboard
                    </h4>
                    <p className="text-xs text-slate-500">
                      Last updated: Just now
                    </p>
                  </div>
                  <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                    System Operational
                  </span>
                </div>

                {/* Cards */}
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg flex justify-between items-center border border-slate-700">
                    <div className="flex items-center gap-3">
                      <Pill className="text-purple-400" />
                      <div>
                        <p className="text-sm font-semibold text-slate-300">
                          Formulation Batch #299
                        </p>
                        <p className="text-xs text-slate-500">
                          Export to EU • In Transit
                        </p>
                      </div>
                    </div>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      On Time
                    </span>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg flex justify-between items-center border border-slate-700">
                    <div className="flex items-center gap-3">
                      <FileCheck className="text-yellow-400" />
                      <div>
                        <p className="text-sm font-semibold text-slate-300">
                          Advance License Renewal
                        </p>
                        <p className="text-xs text-slate-500">
                          Expiring in 14 Days
                        </p>
                      </div>
                    </div>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                      Action Required
                    </span>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg flex justify-between items-center border border-slate-700">
                    <div className="flex items-center gap-3">
                      <Factory className="text-teal-400" />
                      <div>
                        <p className="text-sm font-semibold text-slate-300">
                          Factory Safety Audit
                        </p>
                        <p className="text-xs text-slate-500">
                          Scheduled: 24 Dec 2025
                        </p>
                      </div>
                    </div>
                    <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded">
                      Upcoming
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-400">
                  <span>Total Savings: ₹4.2M</span>
                  <span>Risk Score: Low</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloudDesk;
