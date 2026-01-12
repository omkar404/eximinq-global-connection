import { Anchor, Globe, FileText } from "lucide-react";

const TradeSolutionsChemicals = ({ activeTab, setActiveTab }) => {
  const tradeSolutions = {
    import: {
      title: "Import Solutions",
      items: [
        {
          head: "BIS Quality Control (QCO)",
          desc:
            "Mandatory ISI marking for key chemicals like Caustic Soda, Methanol, and Aniline. Complete factory audit support.",
          tags: ["Mandatory Certification", "Lab Testing"],
        },
        {
          head: "Advance Authorization",
          desc:
            "Duty-free import of raw materials and catalysts based on SION norms for export production.",
          tags: ["Input Duty Exemption", "Cost Saving"],
        },
        {
          head: "ADC & Dual-Use NOC",
          desc:
            "Clearances from Additional Drug Controller (ADC) for dual-use precursors and Narcotics Commissioner verification.",
          tags: ["Precursor Control", "Drug Laws"],
        },
        {
          head: "Customs Bonding (MOOWR)",
          desc:
            "Defer duty on bulk chemical imports stored in bonded warehouses until domestic clearance or re-export.",
          tags: ["Working Capital", "Bulk Storage"],
        },
      ],
    },
    export: {
      title: "Export Solutions",
      items: [
        {
          head: "SCOMET (CWC Chemicals)",
          desc:
            "Licensing for Chemical Weapons Convention (CWC) scheduled chemicals and dual-use biological agents.",
          tags: ["Category 1 & 3", "Non-Proliferation"],
        },
        {
          head: "RoDTEP Claims",
          desc:
            "Maximizing duty remission for Organic (Ch. 29) and Inorganic (Ch. 28) chemicals to boost export margins.",
          tags: ["Incentive Filing", "Tax Refund"],
        },
        {
          head: "Pre-Shipment Inspection",
          desc:
            "Arranging SGS/Intertek inspections and Certificate of Analysis (CoA) verification for sensitive markets.",
          tags: ["Quality Assurance", "Buyer Compliance"],
        },
        {
          head: "AEO Certification",
          desc:
            "Secure supply chain status (T1/T2) for faster border crossing and reduced physical examination of hazardous cargo.",
          tags: ["Green Channel", "Safety Security"],
        },
      ],
    },
  };

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">
            Regulatory Landscape
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Chemical Trade Strategy
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-md shadow-md border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "import"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Anchor className="w-4 h-4" /> Import Compliance
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "export"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Globe className="w-4 h-4" /> Export Compliance
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div
              className={`p-8 rounded-xl border-l-8 shadow-sm bg-white ${
                activeTab === "import"
                  ? "border-emerald-600"
                  : "border-amber-600"
              }`}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {activeTab === "import"
                  ? "Domestic Market Access"
                  : "Global Market Reach"}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {activeTab === "import"
                  ? "Secure your supply chain against disruption. We manage complex BIS certifications for bulk chemicals and handle dual-use NOCs from the Narcotics Department."
                  : "Break into EU and US markets with full REACH compliance. We handle the technical dossiers and Chemical Safety Reports (CSR) so you can focus on production."}
              </p>
            </div>

            <img
              src={
                activeTab === "import"
                  ? "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80"
                  : "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80"
              }
              alt="Chemical Logistics"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Right */}
          <div className="grid gap-4">
            {tradeSolutions[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className={`text-lg font-bold ${
                      activeTab === "import"
                        ? "text-emerald-800"
                        : "text-amber-700"
                    }`}
                  >
                    {item.head}
                  </h4>

                  <div
                    className={`p-2 rounded-md ${
                      activeTab === "import"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <FileText className="w-4 h-4" />
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
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide border border-slate-200 rounded"
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

export default TradeSolutionsChemicals;
