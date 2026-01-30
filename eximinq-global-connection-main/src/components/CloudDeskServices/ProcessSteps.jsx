import React from "react";
import { Headphones, FileText, Briefcase, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Connect",
    desc: "Raise a ticket via CloudDesk or call our 24/7 hotline.",
    icon: <Headphones size={28} />,
  },
  {
    title: "Analyze",
    desc: "Our experts evaluate your documents & trade data.",
    icon: <FileText size={28} />,
  },
  {
    title: "Solution",
    desc: "We provide the exact compliance roadmap or draft.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "Execute",
    desc: "Filing, follow-up, and final delivery of license or certification.",
    icon: <CheckCircle size={28} />,
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How CloudDesk Works</h2>
          <p className="text-indigo-200">
            From problem identification to final compliance execution.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-indigo-700 -translate-y-1/2 z-0 transform scale-x-75" />

          {/* Cards */}
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 bg-indigo-800 p-6 rounded-xl text-center border border-indigo-700 hover:border-teal-400 
                         transition transform hover:-translate-y-2"
            >
              {/* Step Number Circle */}
              <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white font-bold text-xl">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 flex justify-center text-teal-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-indigo-200 text-sm">{step.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
