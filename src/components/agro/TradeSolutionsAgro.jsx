import { Anchor, Globe, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const tradeSolutions = {
  import: {
    title: "Import Solutions",
    items: [
      {
        href: "/services/fssai-licensing",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "FSSAI Clearance",
        desc: "Single window clearance for food imports. We manage sample testing at FSSAI-notified labs to prevent demurrage.",
        tags: ["Food Safety", "Lab Testing"],
      },
      {
        href: "/services/aqcs-pqms",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Plant Quarantine (PQ)",
        desc: "Import Permit (IP) and Phyto-Sanitary Certificate (PSC) verification for importing seeds, fruits, and timber.",
        tags: ["Bio-Security", "Pest Risk Analysis"],
      },
      {
        href: "/services/aqcs-pqms",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Animal Quarantine (AQ)",
        desc: "Sanitary Import Permit (SIP) processing for dairy, meat, and pet food products ensuring disease-free entry.",
        tags: ["Livestock Products", "SIP Filing"],
      },
      {
        href: "/",
        target: "_blank",
        rel: "noopener noreferrer",
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
        href: "/services/rodtep-scheme",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "RoDTEP for Agro",
        desc: "Claiming Remission of Duties (RoDTEP) on export of fruits, vegetables, and processed foods to boost margins.",
        tags: ["Export Incentive", "Cost Competitiveness"],
      },
      {
        href: "/",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "TMA Scheme",
        desc: "Transport and Marketing Assistance filing to reimburse freight costs for specific agricultural produce.",
        tags: ["Freight Subsidy", "New Markets"],
      },
      {
        href: "/",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Phytosanitary Cert",
        desc: "Issuance of Phytosanitary Certificates for export consignments, ensuring acceptance by foreign quarantine authorities.",
        tags: ["Global Compliance", "Pest Free"],
      },
      {
        href: "/",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Health Certificates",
        desc: "Procuring Health Certificates from Export Inspection Council (EIC) for fish, honey, and egg products.",
        tags: ["EU Norms", "Quality Control"],
      },
    ],
  },
};

const TradeSolutionsAgro = ({ activeTab, setActiveTab }) => {

  const renderCard = (item) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:border-green-200 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-2">
        <h4
          className={`text-lg font-bold ${
            activeTab === "import" ? "text-green-800" : "text-amber-700"
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

      {/* ✅ Fixed: proper <a> tag with ternary */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag, tIdx) =>
          typeof tag === "object" && tag.name && tag.href ? (
            <a
              key={tag.name}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1 bg-[#f4f7f4] text-stone-600 text-xs font-bold rounded-full border border-stone-200 hover:text-teal-600 hover:underline transition"
            >
              {tag.name}
            </a>
          ) : (
            <span
              key={tIdx}
              className="px-3 py-1 bg-[#f4f7f4] text-stone-600 text-xs font-bold rounded-full border border-stone-200"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  );

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
                activeTab === "import" ? "border-green-600" : "border-amber-600"
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

            <div
              className={`relative overflow-hidden rounded-2xl border shadow-lg w-full h-64 ${
                activeTab === "import"
                  ? "border-green-200 bg-gradient-to-br from-emerald-100 via-white to-lime-100"
                  : "border-amber-200 bg-gradient-to-br from-amber-100 via-white to-orange-100"
              }`}
            >
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.38)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.38)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className={`absolute -right-10 top-6 h-36 w-36 rounded-full blur-3xl ${activeTab === "import" ? "bg-green-300/50" : "bg-amber-300/50"}`} />
              <div className={`absolute left-6 bottom-6 rounded-2xl px-5 py-4 shadow-sm ${activeTab === "import" ? "bg-white/90 text-green-900" : "bg-white/90 text-amber-900"}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  {activeTab === "import" ? "Inbound Control" : "Outbound Assurance"}
                </p>
                <p className="mt-2 text-2xl font-extrabold">
                  {activeTab === "import" ? "Cold Chain Ready" : "Export Margin Protected"}
                </p>
                <p className="mt-2 text-sm font-medium opacity-80">
                  {activeTab === "import"
                    ? "FSSAI, quarantine and storage checkpoints aligned."
                    : "Incentives, certificates and foreign acceptance streamlined."}
                </p>
              </div>
            </div>
          </div>

          {/* Right cards — ✅ wrapped in Link */}
          <div className="grid gap-4">
            {tradeSolutions[activeTab].items.map((item) =>
              item.href && item.href !== "/" ? (
                <Link
                  key={item.head}
                  to={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="block"
                >
                  {renderCard(item)}
                </Link>
              ) : (
                <div key={item.head}>
                  {renderCard(item)}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSolutionsAgro;
