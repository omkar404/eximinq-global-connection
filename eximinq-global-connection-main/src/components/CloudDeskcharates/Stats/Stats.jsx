import React from "react";
import { TrendingDown, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { icon: TrendingDown, title: "Cost Efficiency", desc: "Save up to 60% on standard corporate rates." },
  { icon: ShieldCheck, title: "Compliance First", desc: "Fully compliant handling of all government regulations." },
  { icon: Clock, title: "Fast Processing", desc: "Expedited processing for all special rate partners." },
];

const Stats = () => {
  return (
    <section id="features" className="relative z-20 -mt-20 container mx-auto px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-6">
              <item.icon className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
