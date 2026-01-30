import React from "react";
import { Briefcase, FileCheck, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Briefcase,
    step: "01",
    title: "Consultation",
    desc: "We analyze your product & target market to identify required licenses.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Documentation",
    desc: "Our team compiles and verifies all documents needed for registration.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Filing & Approval",
    desc: "We file applications with DGFT/Customs and track them until approval.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Go Live",
    desc: "Receive all your licenses and start exporting with our ongoing support.",
  },
];

const ProcessSteps = () => {
  return (
    <section id="process" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How We Simplify Exports</h2>
          <p className="text-slate-400">Our 4-step process designed for first-time exporters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition">
                <div className="text-4xl font-black text-slate-700 mb-4 group-hover:text-sky-500/20 transition">
                  {item.step}
                </div>

                <item.icon className="w-8 h-8 text-sky-400 mb-4" />

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>

              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-700"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;
