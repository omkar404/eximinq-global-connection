import React from "react";
import { LayoutGrid, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const WHY_FEATURES = [
  {
    icon: LayoutGrid,
    title: "Single Window Solution",
    desc: "One platform for all DGFT, Customs, and Ministerial compliances.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compliance",
    desc: "Stay ahead of regulatory changes with our expert-guided processes.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    desc: "Maximize your benefits through schemes like RoDTEP, Drawback, and EPCG.",
  },
  {
    icon: Zap,
    title: "Fast Track Processing",
    desc: "Expedited application filing and approval management.",
  },
];

const WhyCloudDesk = () => {
  return (
    <section className="py-20 bg-slate-900" id="why-us">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Cloud Desk?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine deep regulatory expertise with digital efficiency to ensure your business remains compliant and cost-effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_FEATURES.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-slate-800/40 border border-slate-700 rounded-2xl
                         hover:border-sky-500/50 hover:bg-slate-800/60 
                         transition-all group"
            >
              <div className="w-14 h-14 bg-sky-900/30 flex items-center justify-center rounded-xl mb-6">
                <f.icon size={28} className="text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCloudDesk;
