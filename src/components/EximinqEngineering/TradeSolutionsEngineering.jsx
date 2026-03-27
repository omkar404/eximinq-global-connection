// import { Anchor, Globe, FileText } from "lucide-react";
// import { Link } from "react-router-dom";

// const tradeSolutions = {
//   import: {
//     title: "Capital Efficiency & Compliance",
//     description:
//       "Optimize CAPEX with 0% duty imports under EPCG and ensure seamless clearance of machinery through precise HSN classification and BIS compliance.",
//     image:
//       "https://images.unsplash.com/photo-1565514020176-db7936a1827b?auto=format&fit=crop&q=80",
//     color: "blue",
//     items: [
//       {
//         href: "/services/epcg-scheme",
//         target: "_blank",
//         rel: "noopener noreferrer",
//         head: "EPCG Scheme",
//         desc: "Import capital goods at 0% customs duty against export obligation.",
//         tags: ["0% Duty", "CAPEX Savings"],
//       },
//       {
//         href: "/services/bis-registration",
//         target: "_blank",
//         rel: "noopener noreferrer",
//         head: "BIS & ISI Marking",
//         desc: "Mandatory QCO compliance for steel, motors, and electrical goods.",
//         tags: ["BIS", "Quality Control"],
//       },
//       {
//         href: "/services/project-cargo",
//         target: "_blank",
//         rel: "noopener noreferrer",
//         head: "Project Imports",
//         desc: "Concessional duty for complete industrial plants under 98.01.",
//         tags: ["Infrastructure", "Mega Projects"],
//       },
//       {
//         href: "/",
//         target: "_blank",
//         rel: "noopwner noreferrer",
//         head: "Used Machinery (CEC)",
//         desc: "Chartered Engineer certification for second-hand machinery imports.",
//         tags: ["Residual Life", "Valuation"],
//       },
//     ],
//   },

//   export: {
//     title: "Global Market Competitiveness",
//     description:
//       "Expand your international footprint using RoDTEP benefits and compliant exports under SCOMET regulations.",
//     image:
//       "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
//     color: "orange",
//     items: [
//       {
//         href: "/services/scomet-licensing",
//         target: "_blank",
//         rel: "noopener noreferrer",
//         head: "SCOMET Authorization",
//         desc: "Licensing for dual-use items across aerospace and precision engineering.",
//         tags: ["Defense", "Dual-Use"],
//       },
//       {
//         href: "/services/",
//         target: "_blank",
//         rel: "noopener noreferrer",
//         head: "RoDTEP Claims",
//         desc: "Duty remission for iron, steel & engineering exports.",
//         tags: ["Tax Refund", "Competitiveness"],
//       },
//       {
//         href: "/services/advance-authorisation",
//         target: "_blank",
//         rel: "noopener noreferrer",
//         head: "Advance Authorization",
//         desc: "Duty-free import of raw materials used in export production.",
//         tags: ["SION Norms", "Input Relief"],
//       },
//       {
//         href: "/services/aeo-certification",
//         target: "_blank",
//         rel: "noopener noreferrer",
//         head: "AEO T2/T3 Status",
//         desc: "Direct port entry and reduced bank guarantees.",
//         tags: ["Fast Clearance", "Security"],
//       },
//     ],
//   },
// };

// const TradeSolutionsEngineering = ({ activeTab, setActiveTab }) => {
//   const data = tradeSolutions[activeTab];
//   const isImport = activeTab === "import";

//   return (
//     <section id="solutions" className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">
//             Industrial Trade Lifecycle
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
//             Import & Export Strategy
//           </h2>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-10">
//           <div className="bg-white p-1 border shadow inline-flex">
//             <button
//               onClick={() => setActiveTab("import")}
//               className={`px-8 py-3 text-sm font-bold flex items-center gap-2 transition ${
//                 isImport
//                   ? "bg-blue-700 text-white"
//                   : "text-slate-500 hover:bg-slate-100"
//               }`}
//             >
//               <Anchor className="w-4 h-4" />
//               Import Strategy
//             </button>
//             <button
//               onClick={() => setActiveTab("export")}
//               className={`px-8 py-3 text-sm font-bold flex items-center gap-2 transition ${
//                 !isImport
//                   ? "bg-orange-600 text-white"
//                   : "text-slate-500 hover:bg-slate-100"
//               }`}
//             >
//               <Globe className="w-4 h-4" />
//               Export Strategy
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Left */}
//           <div className="space-y-6">
//             <div
//               className={`p-8 bg-white border-l-8 shadow-sm ${
//                 isImport ? "border-blue-600" : "border-orange-600"
//               }`}
//             >
//               <h3 className="text-2xl font-bold mb-3 text-slate-800">
//                 {data.title}
//               </h3>
//               <p className="text-slate-600">{data.description}</p>
//             </div>

//             <img
//               src={data.image}
//               alt={data.title}
//               className="w-full h-64 object-cover shadow-lg"
//             />
//           </div>

//           {/* Right */}
//           <div className="grid gap-4">
//             {data.items.map((item) => (
//               <div
//                 key={item.head}
//                 className="bg-white p-6 border-l-4 border-transparent hover:border-slate-300 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <h4
//                     className={`text-lg font-bold ${
//                       isImport ? "text-blue-800" : "text-orange-700"
//                     }`}
//                   >
//                     {item.head}
//                   </h4>
//                   <div
//                     className={`p-2 ${
//                       isImport
//                         ? "bg-blue-50 text-blue-600"
//                         : "bg-orange-50 text-orange-600"
//                     }`}
//                   >
//                     {isImport ? (
//                       <FileText className="w-4 h-4" />
//                     ) : (
//                       <Globe className="w-4 h-4" />
//                     )}
//                   </div>
//                 </div>

//                 <p className="text-sm text-slate-600 mb-4">{item.desc}</p>

//                 <div className="flex flex-wrap gap-2">
//                   {item.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-2 py-1 text-xs font-bold uppercase tracking-wide bg-slate-100 border"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TradeSolutionsEngineering;



import { Anchor, Globe, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const tradeSolutions = {
  import: {
    title: "Capital Efficiency & Compliance",
    description:
      "Optimize CAPEX with 0% duty imports under EPCG and ensure seamless clearance of machinery through precise HSN classification and BIS compliance.",
    image:
      "https://images.unsplash.com/photo-1565514020176-db7936a1827b?auto=format&fit=crop&q=80",
    color: "blue",
    items: [
      {
        href: "/services/epcg-scheme",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "EPCG Scheme",
        desc: "Import capital goods at 0% customs duty against export obligation.",
        tags: ["0% Duty", "CAPEX Savings"],
      },
      {
        href: "/services/bis-registration",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "BIS & ISI Marking",
        desc: "Mandatory QCO compliance for steel, motors, and electrical goods.",
        tags: ["BIS", "Quality Control"],
      },
      {
        href: "/services/project-cargo",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Project Imports",
        desc: "Concessional duty for complete industrial plants under 98.01.",
        tags: ["Infrastructure", "Mega Projects"],
      },
      {
        href: "/services/used-machinery-cec",
        target: "_blank",
        rel: "noopener noreferrer", // ✅ Fixed typo: "noopwner" → "noopener"
        head: "Used Machinery (CEC)",
        desc: "Chartered Engineer certification for second-hand machinery imports.",
        tags: ["Residual Life", "Valuation"],
      },
    ],
  },

  export: {
    title: "Global Market Competitiveness",
    description:
      "Expand your international footprint using RoDTEP benefits and compliant exports under SCOMET regulations.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
    color: "orange",
    items: [
      {
        href: "/services/scomet-licensing",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "SCOMET Authorization",
        desc: "Licensing for dual-use items across aerospace and precision engineering.",
        tags: ["Defense", "Dual-Use"],
      },
      {
        href: "/services/rodtep-rosctl-trading", // ✅ Fixed incomplete href
        target: "_blank",
        rel: "noopener noreferrer",
        head: "RoDTEP Claims",
        desc: "Duty remission for iron, steel & engineering exports.",
        tags: ["Tax Refund", "Competitiveness"],
      },
      {
        href: "/services/advance-authorisation",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "Advance Authorization",
        desc: "Duty-free import of raw materials used in export production.",
        tags: ["SION Norms", "Input Relief"],
      },
      {
        href: "/services/aeo-certification",
        target: "_blank",
        rel: "noopener noreferrer",
        head: "AEO T2/T3 Status",
        desc: "Direct port entry and reduced bank guarantees.",
        tags: ["Fast Clearance", "Security"],
      },
    ],
  },
};

const TradeSolutionsEngineering = ({ activeTab, setActiveTab }) => {
  const data = tradeSolutions[activeTab];
  const isImport = activeTab === "import";

  const renderCard = (item) => (
    <div className="bg-white p-6 border-l-4 border-transparent hover:border-slate-300 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <h4
          className={`text-lg font-bold ${
            isImport ? "text-blue-800" : "text-orange-700"
          }`}
        >
          {item.head}
        </h4>
        <div
          className={`p-2 ${
            isImport
              ? "bg-blue-50 text-blue-600"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          {isImport ? (
            <FileText className="w-4 h-4" />
          ) : (
            <Globe className="w-4 h-4" />
          )}
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-4">{item.desc}</p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-bold uppercase tracking-wide bg-slate-100 border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">
            Industrial Trade Lifecycle
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Import & Export Strategy
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 border shadow inline-flex">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 text-sm font-bold flex items-center gap-2 transition ${
                isImport
                  ? "bg-blue-700 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Anchor className="w-4 h-4" />
              Import Strategy
            </button>
            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 text-sm font-bold flex items-center gap-2 transition ${
                !isImport
                  ? "bg-orange-600 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Globe className="w-4 h-4" />
              Export Strategy
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div
              className={`p-8 bg-white border-l-8 shadow-sm ${
                isImport ? "border-blue-600" : "border-orange-600"
              }`}
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-800">
                {data.title}
              </h3>
              <p className="text-slate-600">{data.description}</p>
            </div>

            <img
              src={data.image}
              alt={data.title}
              className="w-full h-64 object-cover shadow-lg"
            />
          </div>

          {/* Right — ✅ cards now wrapped in Link */}
          <div className="grid gap-4">
            {data.items.map((item) =>
              item.href ? (
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

export default TradeSolutionsEngineering;