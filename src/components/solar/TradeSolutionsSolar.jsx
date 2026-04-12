import { useState } from "react";
import { Anchor, Globe, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const TradeSolutionsSolar = () => {
  const [activeTab, setActiveTab] = useState("import");

  const tradeSolutions = {
    import: {
      title: "Import Solutions",
      items: [
        {
          href: "/",  // 🔗 Add actual service URL
          target: "_blank",
          rel: "noopener noreferrer",
          head: "BOM Import (PLI)",
          desc: "Duty-free import of raw materials (Eva, Backsheet, Glass) for solar manufacturing under Production Linked Incentive schemes.",
          tags: ["PLI Compliance", "IGCR Rules"],
        },
        {
          href: "/services/bis-registration",  // 🔗 Link to BIS CRS
          target: "_blank",
          rel: "noopener noreferrer",
          head: "BIS CRS",
          desc: "Mandatory safety registration for Solar Inverters, Storage Batteries, and BOS components before arrival in India.",
          tags: ["Safety Standards", "Customs Clearance"],
        },
        {
          href: "/services/moowr-scheme/",  // 🔗 Link to MOOWR service
          target: "_blank",
          rel: "noopener noreferrer",
          head: "MOOWR for Manufacturing",
          desc: "Defer duty on capital goods and raw materials for solar cell/module manufacturing units.",
          tags: ["Cash Flow", "Make in India"],
        },
        {
          href: "/",  // 🔗 Link to DCR Verification
          target: "_blank",
          rel: "noopener noreferrer",
          head: "DCR Verification",
          desc: "Ensuring compliance with Domestic Content Requirement (DCR) norms for subsidized solar projects.",
          tags: ["MNRE Norms", "Supply Chain Audit"],
        },
      ],
    },
    export: {
      title: "Export Solutions",
      items: [
        {
          href: "/",  // 🔗 Link to Carbon Credits
          target: "_blank",
          rel: "noopener noreferrer",
          head: "Carbon Credits",
          desc: "Advisory on registering projects for Carbon Credits (VER/CER) and trading them in international markets.",
          tags: ["Sustainability", "Revenue Stream"],
        },
        {
          href: "/services/rodtep-rosctl-trading",  // 🔗 Link to RoDTEP
          target: "_blank",
          rel: "noopener noreferrer",
          head: "RoDTEP for Renewables",
          desc: "Claiming export benefits for Solar Modules, Structures, and Wind Castings to boost global price competitiveness.",
          tags: ["Export Incentive", "Duty Remission"],
        },
        {
          href: "/",  // 🔗 Link to EPC Services
          target: "_blank",
          rel: "noopener noreferrer",
          head: "EPC Services Export",
          desc: "Structuring contracts for export of Solar EPC services to Africa and SE Asia, managing withholding tax and GST.",
          tags: ["Service Export", "Project Mgmt"],
        },
        {
          href: "/services/import-export-code/",  // 🔗 Link to Certifications
          target: "_blank",
          rel: "noopener noreferrer",
          head: "Global Certifications",
          desc: "Assistance with IEC, UL, and CE certifications required for exporting modules to US and EU markets.",
          tags: ["Market Access", "Quality Assurance"],
        },
      ],
    },
  };

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
            Strategic Trade Support
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Renewable Lifecycle
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-full shadow-md border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "import"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Anchor className="w-4 h-4" /> Import Flow
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "export"
                  ? "bg-sky-600 text-white shadow-lg"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Globe className="w-4 h-4" /> Export Flow
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Panel */}
          <div className="space-y-6">
            <div
              className={`p-8 rounded-2xl border-l-8 shadow-sm bg-white ${
                activeTab === "import"
                  ? "border-amber-500"
                  : "border-sky-500"
              }`}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {activeTab === "import"
                  ? "Seamless Technology Adoption"
                  : "Global Energy Markets"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {activeTab === "import"
                  ? "Accelerate project commissioning with our expertise in Project Imports (9801) and ALMM compliance. We ensure your imported inverters and BOS components clear BIS norms without delay."
                  : "Expand your reach to global markets. We assist with IEC/UL certification for module exports and manage Carbon Credit trading to monetize your green energy generation."}
              </p>
            </div>

            <img
              src={
                activeTab === "import"
                  ? "https://images.unsplash.com/photo-1545208942-e0c451af7c98?auto=format&fit=crop&q=80"
                  : "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
              }
              alt="Renewable Energy"
              className="rounded-2xl shadow-lg w-full h-64 object-cover border border-slate-200"
            />
          </div>

          {/* Cards - Updated with Link components */}
          <div className="grid gap-4">
            {tradeSolutions[activeTab].items.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                target={item.target}
                rel={item.rel}
                className="block bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className={`text-lg font-bold ${
                      activeTab === "import"
                        ? "text-amber-700"
                        : "text-sky-700"
                    }`}
                  >
                    {item.head}
                  </h4>
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === "import"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-sky-50 text-sky-600"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <Factory className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSolutionsSolar;