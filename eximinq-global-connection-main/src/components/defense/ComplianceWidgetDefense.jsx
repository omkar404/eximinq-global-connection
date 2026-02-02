import React from "react";
import { ChevronRight } from "lucide-react";

const ITEMS = [
  {
    title: "Munitions List (Category 6)",
    desc: "Arms, ammunition & controlled weapon systems"
  },
  {
    title: "Electronics & Avionics",
    desc: "Radar, navigation, encrypted communication"
  },
  {
    title: "Special Materials (Category 8)",
    desc: "Composites, alloys & aerospace materials"
  }
];

const ComplianceWidgetDefense = () => {
  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-sm shadow-2xl p-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
            Strategic Item Checker
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-2">
            IDENTIFY REGULATORY REQUIREMENTS BY CATEGORY
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item, idx) => (
            <button
              key={idx}
              className="group p-6 bg-slate-950 border border-slate-800 hover:border-blue-600 transition-all text-left relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-900/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              <div className="flex justify-between items-center mb-2 relative z-10">
                <span className="font-bold text-slate-300 group-hover:text-white text-lg">
                  {item.title}
                </span>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-500" />
              </div>

              <p className="text-xs text-slate-500 group-hover:text-blue-300 font-mono relative z-10">
                {item.desc}
              </p>

              <div className="absolute bottom-0 right-0 w-8 h-1 bg-slate-800 group-hover:bg-blue-600 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceWidgetDefense;
