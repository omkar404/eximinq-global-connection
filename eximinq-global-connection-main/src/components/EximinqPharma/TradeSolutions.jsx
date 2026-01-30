import { Anchor, Plane, FileText, Globe } from "lucide-react";

const TradeSolutions = ({ activeTab, setActiveTab }) => {

const tradeSolutions = {
  import: {
    title: "Import Solutions",
    description:
      "We navigate CDSCO approvals, Customs valuation, and Special Warehouse schemes to ensure your APIs and equipment clear customs without delay.",
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80",
    items: [
      {
        head: "Customs Bonding (MOOWR)",
        desc: "Defer import duty on Capital Goods & Raw Materials until domestic clearance.",
        tags: ["Duty Deferment", "Cash Flow"],
      },
      {
        head: "CDSCO Licensing",
        desc: "Form 11, Form 10 & Form 41 filings through the Sugam portal.",
        tags: ["Regulatory", "Sugam Portal"],
      },
      {
        head: "Special Valuation Branch (SVB)",
        desc: "Handling related-party import investigations and valuation compliance.",
        tags: ["Transfer Pricing", "Customs"],
      },
      {
        head: "BIS & LMPC Compliance",
        desc: "ISI marking & Legal Metrology registration for medical devices.",
        tags: ["BIS", "LMPC"],
      },
    ],
  },

  export: {
    title: "Export Solutions",
    description:
      "From SCOMET licensing to RoDTEP benefits, we ensure your exports are compliant and profitable.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    items: [
      {
        head: "SCOMET Authorization",
        desc: "Licensing for dual-use items including chemicals & biologicals.",
        tags: ["SCOMET", "DGFT"],
      },
      {
        head: "AEO Certification",
        desc: "Faster clearance with T1–T3 Authorized Economic Operator status.",
        tags: ["AEO", "DPD"],
      },
      {
        head: "Export Incentives",
        desc: "RoDTEP, Advance Authorization & EPCG optimization.",
        tags: ["RoDTEP", "EPCG"],
      },
      {
        head: "Regulatory Documentation",
        desc: "FSC, CoPP & Country of Origin issuance.",
        tags: ["FSC", "CoO"],
      },
    ],
  },
};


  const data = tradeSolutions[activeTab];

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-bold uppercase text-sm tracking-wider">
            Comprehensive Trade Support
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Import & Export Lifecycle
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow border inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition ${
                activeTab === "import"
                  ? "bg-blue-600 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Anchor className="w-4 h-4" />
              Import Solutions
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition ${
                activeTab === "export"
                  ? "bg-teal-600 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Plane className="w-4 h-4" />
              Export Solutions
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="space-y-6">
            <div
              className={`p-6 rounded-2xl bg-white border-l-4 shadow-sm ${
                activeTab === "import"
                  ? "border-blue-500"
                  : "border-teal-500"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2 text-slate-800">
                {data.title}
              </h3>
              <p className="text-slate-600">{data.description}</p>
            </div>

            <img
              src={data.image}
              alt={data.title}
              className="rounded-2xl shadow-lg h-64 w-full object-cover"
            />
          </div>

          {/* Right cards */}
          <div className="grid gap-4">
            {data.items.map((item) => (
              <div
                key={item.head}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className={`text-lg font-bold ${
                      activeTab === "import"
                        ? "text-blue-700"
                        : "text-teal-700"
                    }`}
                  >
                    {item.head}
                  </h4>

                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === "import"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-teal-50 text-teal-600"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <FileText className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold bg-slate-100 border rounded-md text-slate-600"
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

export default TradeSolutions;
