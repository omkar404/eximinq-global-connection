import {
  TrendingUp,
  Leaf,
  ChevronRight,
  Tag,
  Box,
  LeafIcon,
} from "lucide-react";

const CloudDeskTextiles = () => {
  return (
    <section
      id="clouddesk"
      className="py-24 bg-[#1e1b4b] text-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold px-4 py-1.5 rounded-full text-xs mb-8 tracking-widest uppercase">
              EXIMINQ CLOUD DESK
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
              Fashion Speed, <br />
              <span className="text-indigo-400 italic">Audit Control</span>
            </h2>

            <p className="text-indigo-100/80 text-lg mb-10 font-light">
              Manage your RoSCTL scrips, track fabric consumption against Advance Licenses, and monitor sustainable sourcing certifications in one dashboard.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-indigo-900/50 p-4 rounded-2xl text-rose-400 border border-indigo-800">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl font-serif">
                    Incentive Ledger
                  </h4>
                  <p className="text-indigo-200 text-sm mt-1">
                    Real-time tracking of RoSCTL & RoDTEP scrip generation and utilization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-indigo-900/50 p-4 rounded-2xl text-green-400 border border-indigo-800">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl font-serif">
                    Sustainability Vault
                  </h4>
                  <p className="text-indigo-200 text-sm mt-1">
                    Store and share GOTS, Oeko-Tex, and Fair Trade certificates with buyers.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-12 bg-white text-indigo-900 hover:bg-indigo-50 px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3 shadow-lg">
              Open Dashboard <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right – Mock UI */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-indigo-600 blur-[150px] opacity-20 rounded-full" />
            <div className="relative bg-indigo-950/80 border border-indigo-800 rounded-3xl p-2 shadow-2xl">
              <div className="bg-[#0f172a] rounded-2xl p-8 space-y-4">
                <div className="bg-slate-800/50 p-5 rounded-xl flex justify-between items-center border border-slate-700">
                  <div className="flex items-center gap-4">
                    <Tag className="w-5 h-5 text-rose-400" />
                    <div>
                      <p className="text-sm font-bold">RoSCTL Scrip Issued</p>
                      <p className="text-xs text-slate-400">
                        Value: ₹12.5 Lakhs
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-400">
                    CREDITED
                  </span>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-xl flex justify-between items-center border border-slate-700">
                  <div className="flex items-center gap-4">
                    <Box className="w-5 h-5 text-indigo-400" />
                    <div>
                      <p className="text-sm font-bold">Fabric Import</p>
                      <p className="text-xs text-slate-400">
                        Advance Auth #AA992
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400">
                    CLEARING
                  </span>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-xl flex justify-between items-center border border-slate-700">
                  <div className="flex items-center gap-4">
                    <LeafIcon className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-sm font-bold">GOTS Audit</p>
                      <p className="text-xs text-slate-400">
                        Dying Unit A
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-400">
                    SCHEDULED
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500 uppercase">
                  <span>Season: SS25</span>
                  <span>Compliance: 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDeskTextiles;
