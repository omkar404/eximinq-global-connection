import React from "react";
import { ChevronRight } from "lucide-react";

const ComplianceWidgetEcommerce = () => {
  return (
    <section
      className="py-20 bg-white relative -mt-10 z-20 
                 max-w-7xl mx-auto px-4 
                 rounded-3xl shadow-2xl border border-slate-100"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800">
          E-Commerce Compliance Check
        </h2>
        <p className="text-slate-500 mt-2">
          Verify requirements for Courier Import & Export.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Gifts & Samples",
            desc: "Check value limits, KYC norms, and duty exemption notifications.",
          },
          {
            title: "Commercial Export (CSB-V)",
            desc: "Understand GST refunds, incentives, and documentation rules.",
          },
          {
            title: "Re-import (Returns)",
            desc: "Avoid double duty on rejected or returned international orders.",
          },
        ].map((item, idx) => (
          <button
            key={idx}
            className="group p-8 rounded-2xl bg-slate-50 
                       border border-slate-100 
                       hover:border-violet-500 
                       hover:bg-violet-50/60 
                       transition-all text-left relative overflow-hidden"
          >
            {/* Decorative Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 
                            bg-violet-100 rounded-bl-full 
                            -mr-12 -mt-12 opacity-60 
                            group-hover:scale-110 
                            transition-transform" />

            <div className="flex justify-between items-center mb-4 relative z-10">
              <h3 className="font-bold text-xl text-slate-700 group-hover:text-violet-700">
                {item.title}
              </h3>
              <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-violet-500" />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed relative z-10">
              {item.desc}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ComplianceWidgetEcommerce;
