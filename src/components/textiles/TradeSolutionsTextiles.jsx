import { Anchor, Globe, Layers } from "lucide-react";

const TradeSolutionsTextiles = ({ activeTab, setActiveTab }) => {
  const tradeSolutions = {
    import: {
      title: "Import Solutions",
      items: [
        {
          head: "Advance Authorization",
          desc: "Import fabrics, zippers, buttons, and sewing thread duty-free against export orders. Ideal for competitive pricing.",
          tags: ["Duty Free Input", "Cost Reduction"],
        },
        {
          head: "Capital Goods (EPCG)",
          desc: "Import high-speed sewing machines, knitting machines, and embroidery units at 0% duty to modernize your factory.",
          tags: ["Modernization", "0% Duty"],
        },
        {
          head: "Textile Chemicals (REACH)",
          desc: "Ensuring all imported dyes and auxiliaries meet EU REACH and ZDHC standards for restricted substances.",
          tags: ["Chemical Safety", "Zero Discharge"],
        },
        {
          head: "Quality Control (QCO)",
          desc: "Compliance with mandatory Quality Control Orders for Viscose Staple Fiber (VSF) and Polyester yarn imports.",
          tags: ["Mandatory BIS", "Fiber Testing"],
        },
      ],
    },
    export: {
      title: "Export Solutions",
      items: [
        {
          head: "RoSCTL Scheme",
          desc: "Rebate of State and Central Taxes and Levies specifically for Apparel/Made-ups. We ensure 100% claim accuracy.",
          tags: ["Tax Rebate", "Apparel Specific"],
        },
        {
          head: "AEO Tier 2/3",
          desc: "Authorized Economic Operator status for Direct Port Entry (DPE) and deferred duty payment, crucial for fast fashion.",
          tags: ["Fast Track", "Secure Supply Chain"],
        },
        {
          head: "Certificate of Origin",
          desc: "Issuance of GSP, SAFTA, and Preferential CoO to avail duty benefits in importing countries (EU, Japan, Australia).",
          tags: ["Duty Preference", "Trade Agreements"],
        },
        {
          head: "Sample Management",
          desc: "Hassle-free courier clearance for textile samples and prototypes using ATA Carnet for exhibitions.",
          tags: ["Exhibitions", "Rapid Prototyping"],
        },
      ],
    },
  };

  return (
    <section id="solutions" className="py-24 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-bold tracking-widest uppercase text-xs">
            Strategy & Growth
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 font-serif">
            The Textile Trade Cycle
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-10 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "import"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Anchor className="w-4 h-4" /> Sourcing (Import)
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`px-10 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "export"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Globe className="w-4 h-4" /> Global Sales (Export)
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div className="p-10 rounded-3xl shadow-xl bg-white relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-2 h-full ${
                  activeTab === "import" ? "bg-rose-500" : "bg-indigo-500"
                }`}
              />

              <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">
                {activeTab === "import"
                  ? "Seamless Material Sourcing"
                  : "Competitive Global Reach"}
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg">
                {activeTab === "import"
                  ? "Ensure your production lines never stop. We facilitate duty-free import of high-quality fabrics and state-of-the-art machinery, handling all QCO and chemical safety compliances."
                  : "Maximize your margins with accurate RoSCTL filings and expedited customs clearance. We help you navigate preferential trade agreements to make your apparel competitive in Western markets."}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">0%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Duty on Trimmings
                  </p>
                </div>
                <div className="w-px bg-slate-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Customs Support
                  </p>
                </div>
              </div>
            </div>

            <img
              src={
                activeTab === "import"
                  ? "https://images.unsplash.com/photo-1596328330768-a4773c24b277?auto=format&fit=crop&q=80&w=1200"
                  : "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=1200"
              }
              alt="Textile Logistics"
              className="rounded-3xl shadow-lg w-full h-72 object-cover"
            />
          </div>

          {/* Right cards */}
          <div className="grid gap-6">
            {tradeSolutions[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4
                    className={`text-xl font-bold font-serif ${
                      activeTab === "import"
                        ? "text-rose-700"
                        : "text-indigo-700"
                    }`}
                  >
                    {item.head}
                  </h4>

                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === "import"
                        ? "bg-rose-50 text-rose-600"
                        : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <Layers className="w-5 h-5" />
                    ) : (
                      <Globe className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSolutionsTextiles;
