import React, { useState } from "react";
import { Anchor, Globe, Truck } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const tradeSolutions = {
  import: {
    title: "Import Solutions",
    items: [
      {
        href: "/services/cha-services", // 🔗 Link to CHA Services
        target: "_blank",
        rel: "noopener noreferrer",
        head: "B2C Customs Clearance",
        desc: "Bulk clearance of B2C parcels under CSB-IV. We handle KYC collection from end-customers to prevent shipment holds.",
        tags: ["Last Mile Speed", "KYC Compliance"],
      },
      {
        href: "/services/no-due-certificate", // 🔗 Link to No Due Certificate
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Gift & Sample Rules",
        desc: "Navigating strict 'Gift' import regulations to ensure genuine samples aren't flagged as commercial evasion.",
        tags: ["Compliance", "Duty Exemptions"],
      },
      {
        href: "/services/duty-payment-ecl", // 🔗 Link to Duty Payment
        target: "_blank",
        rel: "noopener noreferrer",
        head: "De Minimis Advisory",
        desc: "Strategic advice on duty thresholds for low-value shipments across different global jurisdictions.",
        tags: ["Cost Optimization", "Global Rules"],
      },
      {
        href: "/services/warehousing-solutions", // 🔗 Link to Warehousing
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Fulfillment Bonding",
        desc: "Bonded warehousing for imported inventory. Pay duty only when the item is sold and dispatched to the Indian customer.",
        tags: ["Cash Flow", "MOOWR for E-com"],
      },
    ],
  },
  export: {
    title: "Export Solutions",
    items: [
      {
        href: "/services/edpms-ebrc", // 🔗 Link to EDPMS & e-BRC
        target: "_blank",
        rel: "noopener noreferrer",
        head: "CSB-V Commercial Export",
        desc: "Commercial export via courier mode for values up to ₹10 Lakhs. Claim GST refunds and RoDTEP benefits.",
        tags: ["GST Refund", "Formal Export"],
      },
      {
        href: "/services/igcr-returns", // 🔗 Link to IGCR Returns
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Postal Bill of Export",
        desc: "Clearance through Dak Ghar Niryat Kendras (Post Offices) for small artisans and MSME exporters.",
        tags: ["PBE-1 Filing", "Postal Logistics"],
      },
      {
        href: "/services/gst-returns", // 🔗 Link to GST Returns
        target: "_blank",
        rel: "noopener noreferrer",
        head: "IGST Refunds",
        desc: "Automated reconciliation of courier shipping bills with GST returns to ensure timely IGST refunds.",
        tags: ["Tax Benefit", "Liquidity"],
      },
      {
        href: "/services/gem-registration", // 🔗 Link to GeM Registration
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Global Marketplace Compliance",
        desc: "Meeting packaging and labeling standards (IOR/EOR services) for Amazon FBA and global marketplaces.",
        tags: ["Amazon Global", "IOR Services"],
      },
    ],
  },
};

const TradeSolutionsEcommerce = () => {
  const [activeTab, setActiveTab] = useState("import");

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-600 font-bold tracking-widest uppercase text-xs">
            End-to-End Logistics
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
            The Parcel Lifecycle
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-lg border border-slate-100 inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "import"
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Anchor className="w-4 h-4" />
              Import (B2C / B2B)
            </button>
            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "export"
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Globe className="w-4 h-4" />
              Global Export
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div
              className={`p-10 rounded-3xl border-l-8 shadow-sm bg-white ${
                activeTab === "import"
                  ? "border-violet-500"
                  : "border-orange-500"
              }`}
            >
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {activeTab === "import"
                  ? "Frictionless Inbound Flow"
                  : "Scale Your Brand Globally"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {activeTab === "import"
                  ? "Eliminate customs holds with automated KYC collection and duty payment APIs. From gifts to bulk B2C imports, we ensure parcels move fast."
                  : "Sell worldwide without friction. We manage CSB-V filing, GST refunds, and export incentives for courier-based exports."}
              </p>
              <div className="mt-6 flex gap-3">
                <span className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-500 uppercase">
                  ECCS Integrated
                </span>
                <span className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-500 uppercase">
                  Real-time Tracking
                </span>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-3xl shadow-xl w-full h-80 border ${
                activeTab === "import"
                  ? "border-violet-200 bg-gradient-to-br from-violet-100 via-white to-fuchsia-100"
                  : "border-orange-200 bg-gradient-to-br from-orange-100 via-white to-amber-100"
              }`}
            >
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:30px_30px]" />
              <div className={`absolute right-8 top-8 h-24 w-24 rounded-full blur-2xl ${activeTab === "import" ? "bg-violet-300/55" : "bg-orange-300/55"}`} />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/88 px-6 py-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {activeTab === "import" ? "Courier Imports" : "Cross-Border Exports"}
                </p>
                <p className="mt-2 text-3xl font-black text-slate-900">
                  {activeTab === "import" ? "Parcel flow without customs friction" : "Brand expansion with refund control"}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {activeTab === "import"
                    ? "KYC, de minimis checks and bonded fulfillment kept in sync."
                    : "CSB-V, GST reconciliation and marketplace standards mapped together."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards - Updated with Links */}
          <div className="grid gap-6">
            {tradeSolutions[activeTab].items.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                target={item.target}
                rel={item.rel}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all block cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4
                    className={`text-xl font-bold transition-colors ${
                      activeTab === "import"
                        ? "text-violet-700 group-hover:text-violet-500"
                        : "text-orange-600 group-hover:text-orange-500"
                    }`}
                  >
                    {item.head}
                  </h4>
                  <div
                    className={`p-2 rounded-lg transition-all ${
                      activeTab === "import"
                        ? "bg-violet-100 text-violet-600 group-hover:bg-violet-200"
                        : "bg-orange-100 text-orange-600 group-hover:bg-orange-200"
                    }`}
                  >
                    {activeTab === "import" ? (
                      <Truck className="w-5 h-5" />
                    ) : (
                      <Globe className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200 group-hover:border-violet-200 transition-colors"
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

export default TradeSolutionsEcommerce;
