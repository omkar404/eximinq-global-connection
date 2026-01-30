import { Anchor, Globe, Utensils } from "lucide-react";

const tradeSolutions = {
  import: {
    title: "Import Solutions",
    items: [
      {
        head: "FSSAI Clearance",
        desc: "Single window clearance for food imports. We manage sample testing at FSSAI-notified labs to prevent demurrage.",
        tags: ["Food Safety", "Lab Testing"],
      },
      {
        head: "Plant Quarantine (PQ)",
        desc: "Import Permit (IP) and Phyto-Sanitary Certificate (PSC) verification for importing seeds, fruits, and timber.",
        tags: ["Bio-Security", "Pest Risk Analysis"],
      },
      {
        head: "Animal Quarantine (AQ)",
        desc: "Sanitary Import Permit (SIP) processing for dairy, meat, and pet food products ensuring disease-free entry.",
        tags: ["Livestock Products", "SIP Filing"],
      },
      {
        head: "Cold Storage Bonding",
        desc: "MOOWR scheme for temperature-controlled warehousing. Defer duty on high-value frozen foods until sale.",
        tags: ["Duty Deferment", "Inventory Mgmt"],
      },
    ],
  },
  export: {
    title: "Export Solutions",
    items: [
      {
        head: "RoDTEP for Agro",
        desc: "Claiming Remission of Duties (RoDTEP) on export of fruits, vegetables, and processed foods to boost margins.",
        tags: ["Export Incentive", "Cost Competitiveness"],
      },
      {
        head: "TMA Scheme",
        desc: "Transport and Marketing Assistance filing to reimburse freight costs for specific agricultural produce.",
        tags: ["Freight Subsidy", "New Markets"],
      },
      {
        head: "Phytosanitary Cert",
        desc: "Issuance of Phytosanitary Certificates for export consignments, ensuring acceptance by foreign quarantine authorities.",
        tags: ["Global Compliance", "Pest Free"],
      },
      {
        head: "Health Certificates",
        desc: "Procuring Health Certificates from Export Inspection Council (EIC) for fish, honey, and egg products.",
        tags: ["EU Norms", "Quality Control"],
      },
    ],
  },
};

const TradeSolutionsAgro = ({ activeTab, setActiveTab, handleImageError }) => {
  return (
    <section id="solutions" className="py-20 bg-[#f4f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm">
            Farm to Fork Strategy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2">
            Agro Trade Lifecycle
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-full shadow-md border border-stone-200 inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "import"
                  ? "bg-green-700 text-white shadow-lg"
                  : "text-stone-500 hover:bg-stone-50"
              }`}
            >
              <Anchor className="w-4 h-4" /> Import Flow
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "export"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "text-stone-500 hover:bg-stone-50"
              }`}
            >
              <Globe className="w-4 h-4" /> Export Flow
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div
              className={`p-8 rounded-2xl border-l-8 shadow-sm bg-white ${
                activeTab === "import"
                  ? "border-green-600"
                  : "border-amber-600"
              }`}
            >
              <h3 className="text-2xl font-bold text-stone-800 mb-3">
                {activeTab === "import"
                  ? "Food Safety & Bio-Security"
                  : "Global Market Access"}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {activeTab === "import"
                  ? "We ensure your food imports clear FSSAI and Quarantine hurdles swiftly. Our expertise in sampling protocols and lab testing minimizes port detention and spoilage risks."
                  : "Unlock premium markets with NPOP Organic Certification and TMA freight subsidies. We manage the entire documentation chain from Phyto certificates to RoDTEP claims."}
              </p>
            </div>

            <img
              src={
                activeTab === "import"
                  ? "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                  : "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80"
              }
              alt="Agro Logistics"
              className="rounded-2xl shadow-lg w-full h-64 object-cover border border-stone-200"
              onError={handleImageError}
            />
          </div>

          {/* Right */}
          <div className="grid gap-4">
            {tradeSolutions[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:border-green-200 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className={`text-lg font-bold ${
                      activeTab === "import"
                        ? "text-green-800"
                        : "text-amber-700"
                    }`}
                  >
                    {item.head}
                  </h4>
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === "import"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <Utensils className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <p className="text-stone-600 text-sm mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-[#f4f7f4] text-stone-600 text-xs font-bold rounded-full border border-stone-200"
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

export default TradeSolutionsAgro;
