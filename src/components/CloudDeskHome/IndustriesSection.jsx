import {
  Activity,
  Settings,
  Cpu,
  FlaskConical,
  Leaf,
  Layers,
  Zap,
  Plane,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      title: "Pharmaceuticals",
      url: "https://eximinq.in/pharmaceuticals-industry-import-export",
      icon: <Activity className="w-6 h-6 text-white" />,
      desc: "Critical cold-chain clearance & regulatory approvals.",
      tags: ["ADC NOC", "Advance License", "Cold Chain"],
      color: "bg-rose-500",
      shadowColor: "shadow-rose-500/20",
    },
    {
      title: "Engineering & Auto",
      url: "https://eximinq.in/engineering-industry-import-export",
      icon: <Settings className="w-6 h-6 text-white" />,
      desc: "Capital goods import at 0% duty under EPCG.",
      tags: ["EPCG Scheme", "SION Fixation", "Project Imports"],
      color: "bg-blue-600",
      shadowColor: "shadow-blue-600/20",
    },
    {
      title: "Electronics & IT",
      url: "https://eximinq.in/electronics-it-industry-import-export",
      icon: <Cpu className="w-6 h-6 text-white" />,
      desc: "Mandatory registration for wireless & digital goods.",
      tags: ["BIS (CRS)", "WPC (ETA)", "E-Waste (EPR)"],
      color: "bg-cyan-500",
      shadowColor: "shadow-cyan-500/20",
    },
    {
      title: "Chemicals",
      url: "https://eximinq.in/chemicals-industry-import-export",
      icon: <FlaskConical className="w-6 h-6 text-white" />,
      desc: "Handling hazardous cargo & dual-use licensing.",
      tags: ["SCOMET", "Haz-Waste", "Anti-Dumping"],
      color: "bg-amber-500",
      shadowColor: "shadow-amber-500/20",
    },
    {
      title: "Textiles",
      url: "https://eximinq.in/textiles-apparels-industry-import-export",
      icon: <Layers className="w-6 h-6 text-white" />,
      desc: "Maximizing rebates on export of garments.",
      tags: ["RoSCTL", "Duty Drawback", "Fabric Sourcing"],
      color: "bg-violet-500",
      shadowColor: "shadow-violet-500/20",
    },
    {
      title: "Food & Agro",
      url: "https://eximinq.in/food-agro-industry-import-export",
      icon: <Leaf className="w-6 h-6 text-white" />,
      desc: "Perishable cargo clearance with FSSAI compliance.",
      tags: ["FSSAI", "Phytosanitary", "Quota Mgmt"],
      color: "bg-emerald-500",
      shadowColor: "shadow-emerald-500/20",
    },
    {
      title: "Solar & Renewables",
      url: "https://eximinq.in/solar-and-renewables-industry-import-export",
      icon: <Zap className="w-6 h-6 text-white" />,
      desc: "Project imports for power plants & ALMM compliance.",
      tags: ["Project Import", "ALMM", "Bose Exemptions"],
      color: "bg-yellow-500",
      shadowColor: "shadow-yellow-500/20",
    },
    {
      title: "Defense & Aerospace",
      url: "https://eximinq.in/defense-aerospace-industry-import-export",
      icon: <Plane className="w-6 h-6 text-white" />,
      desc: "Handling SCOMET licensing for dual-use technology.",
      tags: ["SCOMET", "End User Cert", "Restricted Items"],
      color: "bg-slate-600",
      shadowColor: "shadow-slate-600/20",
    },
    {
      title: "E-Commerce",
      url: "https://eximinq.in/ecommerce-industry-import-export",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      desc: "Simplified clearance for courier & postal exports.",
      tags: ["CSB-V Filing", "PEMS", "Return Mgmt"],
      color: "bg-indigo-500",
      shadowColor: "shadow-indigo-500/20",
    },
  ];

  return (
    <section className="py-24 bg-black dark:bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Industries We Empower
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Specialized compliance workflows designed for the unique regulatory
            challenges of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} shadow-lg ${item.shadowColor}`}
                >
                  {item.icon}
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6">{item.desc}</p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
