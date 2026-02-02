import { Anchor, Globe, FileText } from "lucide-react";

const tradeSolutions = {
  import: {
    title: "Import Solutions",
    icon: <Anchor className="w-5 h-5" />,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    items: [
      {
        head: "BIS CRS Registration",
        desc: "Compulsory Registration Scheme (CRS) for 60+ IT products (Laptops, Adapters, Cells) ensuring fast surveillance clearance.",
        tags: ["Standard Mark", "Lab Testing"],
      },
      {
        head: "WPC (ETA) & Import",
        desc: "Equipment Type Approval (ETA) for Bluetooth/Wi-Fi modules and Import Licenses for controlled frequency devices.",
        tags: ["Wireless", "Frequency Spectrum"],
      },
      {
        head: "MOOWR for EMS",
        desc: "Duty deferment on imported components (SKD/CKD) for domestic manufacturing. Pay duty only upon domestic sale.",
        tags: ["Cash Flow", "Make in India"],
      },
      {
        head: "Battery Waste Rules",
        desc: "Specific registration for Battery Waste Management (BWM) rules separate from general E-Waste guidelines.",
        tags: ["Li-Ion", "BWM Portal"],
      },
    ],
  },

  export: {
    title: "Export Solutions",
    icon: <Globe className="w-5 h-5" />,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    items: [
      {
        head: "SCOMET (Dual-Use)",
        desc: "Authorization for export of Information Security systems (Category 8) and high-end chips involving encryption.",
        tags: ["Encryption", "Defense Tech"],
      },
      {
        head: "Repair & Return",
        desc: "Seamless procedure for re-importing exported electronic goods for repair/servicing without paying double duty.",
        tags: ["Warranty Support", "Reverse Logistics"],
      },
      {
        head: "RoDTEP (Chapter 85)",
        desc: "Claiming remission benefits for electrical machinery and equipment exports to boost price competitiveness.",
        tags: ["Export Incentive", "Duty Remission"],
      },
      {
        head: "Hardware PLI",
        desc: "Advisory on claiming Production Linked Incentives for IT Hardware and Telecom networking products.",
        tags: ["Incentive Claim", "Audit Trail"],
      },
    ],
  },
};

const TradeSolutionsElectronics = ({ activeTab, setActiveTab }) => {
  const current = tradeSolutions[activeTab];

  return (
    <section id="solutions" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-bold tracking-[0.2em] uppercase text-xs">
            Lifecycle Management
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Electronics Trade Strategy
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1 rounded-lg border border-slate-800 inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "import"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Anchor className="w-4 h-4" />
              Import Flow
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "export"
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Globe className="w-4 h-4" />
              Export Flow
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div
              className={`p-8 rounded-2xl border-l-4 shadow-xl bg-slate-900 ${
                activeTab === "import" ? "border-indigo-500" : "border-cyan-500"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {activeTab === "import"
                  ? "Rapid Access to Market"
                  : "Global Tech Distribution"}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {activeTab === "import"
                  ? "Accelerate product launches with our streamlined BIS-CRS registration and WPC clearance. Leverage MOOWR to defer duties on component imports for assembly."
                  : "Secure export authorizations for SCOMET items (encryption/dual-use) and utilize RoDTEP to make your electronic exports globally competitive."}
              </p>
            </div>

            <img
              src={
                activeTab === "import"
                  ? "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80"
                  : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
              }
              alt="Electronics Trade"
              className="rounded-2xl shadow-2xl border border-slate-800 w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Right */}
          <div className="grid gap-4">
            {current.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-600 hover:bg-slate-900 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className={`text-lg font-bold ${
                      activeTab === "import"
                        ? "text-indigo-400 group-hover:text-indigo-300"
                        : "text-cyan-400 group-hover:text-cyan-300"
                    }`}
                  >
                    {item.head}
                  </h4>

                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === "import"
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "bg-cyan-500/10 text-cyan-400"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <FileText className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-slate-800 text-slate-400 text-xs font-medium rounded border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSolutionsElectronics;
