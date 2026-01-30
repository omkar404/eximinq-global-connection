import {
  Thermometer,
  AlertTriangle,
  ChevronRight,
  Activity,
  Truck,
  FileText,
  Droplets,
  CheckCircle,
} from "lucide-react";

const CloudDeskAgro = () => {
  return (
    <section
      id="clouddesk"
      className="py-20 bg-stone-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-green-600 text-white font-bold px-4 py-1 rounded-full text-sm mb-6 tracking-wide">
              EXIMINQ Contact
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Freshness & Compliance{" "}
              <span className="text-green-400">Dashboard</span>
            </h2>

            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Monitor the shelf-life of your shipments, track FSSAI license
              renewals, and get real-time alerts on temperature excursions for
              cold chain cargo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg text-green-400 border border-stone-700">
                  <Thermometer className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Cold Chain Monitor</h4>
                  <p className="text-stone-400 text-sm">
                    IoT integration for real-time tracking of reefer container
                    temperature & humidity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg text-amber-400 border border-stone-700">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Expiry Watch</h4>
                  <p className="text-stone-400 text-sm">
                    Automated alerts for perishable batch expiry and FSSAI
                    license validity.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-white text-stone-900 hover:bg-stone-200 px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
              View Demo <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* RIGHT – MOCK DASHBOARD */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-green-600 blur-[100px] opacity-20 rounded-full"></div>

            <div className="relative bg-stone-800 border border-stone-700 rounded-xl p-2 shadow-2xl">
              <div className="bg-[#1c1917] rounded-lg p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-stone-200 font-bold uppercase tracking-wider text-sm">
                      Agro Supply Chain
                    </h4>
                    <p className="text-xs text-stone-500 font-mono">
                      PORT: NHAVA SHEVA • TEMP: -18°C
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-800 text-xs font-bold">
                    <Activity className="w-3 h-3" /> LIVE
                  </div>
                </div>

                {/* Cards */}
                <div className="space-y-3">
                  <div className="bg-stone-800 p-4 rounded-lg flex justify-between items-center border-l-4 border-green-500">
                    <div className="flex items-center gap-3">
                      <Truck className="text-green-400" />
                      <div>
                        <p className="text-sm font-bold text-stone-200">
                          Reefer #RF992 (Grapes)
                        </p>
                        <p className="text-xs text-stone-500">
                          Destination: Rotterdam • Temp: OK
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-stone-400">
                      ETA: 4 DAYS
                    </span>
                  </div>

                  <div className="bg-stone-800 p-4 rounded-lg flex justify-between items-center border-l-4 border-amber-500">
                    <div className="flex items-center gap-3">
                      <FileText className="text-amber-400" />
                      <div>
                        <p className="text-sm font-bold text-stone-200">
                          Phyto Certificate
                        </p>
                        <p className="text-xs text-stone-500">
                          Consignment: Basmati Rice
                        </p>
                      </div>
                    </div>
                    <span className="text-xs bg-amber-900/30 text-amber-400 px-2 py-1 rounded">
                      PENDING
                    </span>
                  </div>

                  <div className="bg-stone-800 p-4 rounded-lg flex justify-between items-center border-l-4 border-blue-500">
                    <div className="flex items-center gap-3">
                      <Droplets className="text-blue-400" />
                      <div>
                        <p className="text-sm font-bold text-stone-200">
                          FSSAI Sample Test
                        </p>
                        <p className="text-xs text-stone-500">
                          Imported Olive Oil • Batch A2
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-stone-800 flex justify-between text-xs text-stone-500 font-mono">
                  <span>SHELF LIFE REMAINING: 85%</span>
                  <span>TOTAL VALUE: $450k</span>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default CloudDeskAgro;
