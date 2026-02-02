import React, { useState } from "react";
import {
  Anchor,
  Globe,
  Rocket,
  ShieldCheck,
  Activity
} from "lucide-react";

const tradeSolutions = {
  import: {
    title: "Import Solutions",
    items: [
      {
        head: "Customs Exemptions",
        desc: "Availing duty exemptions for defense projects under Notification 39/96-Customs and specific strategic initiatives.",
        tags: ["Cost Savings", "Strategic Defense"]
      },
      {
        head: "End User Certificates",
        desc: "Drafting and validation of End User Certificates (EUC) required by foreign governments for sensitive imports.",
        tags: ["Global Compliance", "Validation"]
      },
      {
        head: "Temporary Import",
        desc: "Hassle-free ATA Carnet or Bond-based temporary import of defense equipment for testing, demos, and exhibitions.",
        tags: ["DefExpo Support", "Field Trials"]
      },
      {
        head: "Bonded MRO Stores",
        desc: "Setting up Private Bonded Warehouses for storing aircraft spares duty-free until utilization for maintenance.",
        tags: ["Cash Flow", "Aviation Parts"]
      }
    ]
  },
  export: {
    title: "Export Solutions",
    items: [
      {
        head: "Export Authorizations",
        desc: "Obtaining NOC from Department of Defense Production (DDP) and SCOMET licenses for export of military hardware.",
        tags: ["DDP Authorization", "Munitions List"]
      },
      {
        head: "Offset Discharge",
        desc: "Documenting eligible exports to claim Offset Credits. We ensure IOP compliance.",
        tags: ["Offset Credits", "DOMW Audit"]
      },
      {
        head: "Tech Transfer (ToT)",
        desc: "Compliance for Intangible Technology Transfers involving blueprints, software, and technical data.",
        tags: ["IP Protection", "Software Export"]
      },
      {
        head: "Restricted Entities",
        desc: "Screening against denied party and restricted entity lists to prevent violations.",
        tags: ["Sanctions Check", "Risk Mitigation"]
      }
    ]
  }
};

const TradeSolutionsDefense = () => {
  const [activeTab, setActiveTab] = useState("import");

  return (
    <section id="solutions" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs">
            Strategic Trade Protocol
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Defense Lifecycle
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900 p-1 rounded-sm border border-slate-800 inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 rounded-sm
                ${
                  activeTab === "import"
                    ? "bg-blue-700 text-white shadow-lg"
                    : "text-slate-500 hover:text-white hover:bg-slate-800"
                }`}
            >
              <Anchor className="w-4 h-4" />
              Inbound Logistics
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 rounded-sm
                ${
                  activeTab === "export"
                    ? "bg-emerald-700 text-white shadow-lg"
                    : "text-slate-500 hover:text-white hover:bg-slate-800"
                }`}
            >
              <Rocket className="w-4 h-4" />
              Outbound / Offsets
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Narrative */}
          <div className="space-y-6">
            <div
              className={`p-8 rounded-sm border-l-4 shadow-2xl bg-slate-900 ${
                activeTab === "import"
                  ? "border-blue-600"
                  : "border-emerald-600"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {activeTab === "import"
                  ? "Secure Supply Lines"
                  : "Global Partnership"}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {activeTab === "import"
                  ? "We maintain the integrity of your supply chain for critical defense projects. From availing customs duty exemptions to managing bonded warehouses for MRO spares, we ensure operational readiness."
                  : "Discharging offset obligations is critical for defense majors. We identify eligible IOPs, manage export documentation, and facilitate SCOMET licensing for seamless technology transfer."}
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80 z-10" />
              <img
                src={
                  activeTab === "import"
                    ? "https://images.unsplash.com/photo-1542259682-1c05d094f06f?auto=format&fit=crop&q=80" 
                    : "https://images.unsplash.com/photo-1578635811029-7c85848c4149?auto=format&fit=crop&q=80"
                }
                alt="Defense Logistics"
                className="rounded-sm shadow-lg w-full h-64 object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center gap-2 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded-sm border border-slate-600">
                  <Activity className="w-3 h-3 text-emerald-500" />
                  STATUS: SECURE
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-4">
            {tradeSolutions[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 p-6 rounded-sm border border-slate-800 hover:border-slate-600 hover:bg-slate-900 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className={`text-lg font-bold ${
                      activeTab === "import"
                        ? "text-blue-400 group-hover:text-blue-300"
                        : "text-emerald-400 group-hover:text-emerald-300"
                    }`}
                  >
                    {item.head}
                  </h4>
                  <div
                    className={`p-2 rounded-sm ${
                      activeTab === "import"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <ShieldCheck className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-slate-950 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-sm border border-slate-800 group-hover:border-slate-600 transition-colors"
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

export default TradeSolutionsDefense;
