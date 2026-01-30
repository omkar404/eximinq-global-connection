import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  FileText,
  CheckCircle,
  Rocket,
  Ship,
  Flag,
} from "lucide-react";

const STARTUP_ROADMAP = [
  {
    id: 1,
    title: "Step 1: Entity Setup",
    subtitle: "Foundation",
    description:
      "Start strong with proper Company Incorporation and GST Registration. We ensure your business structure is legally sound for global trade.",
    icon: Flag,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Step 2: Export License (IEC)",
    subtitle: "DGFT Requirement",
    description:
      "Obtain your Import Export Code (IEC) - your passport to international trade. Mandatory for all importers and exporters in India.",
    icon: FileText,
    color: "bg-indigo-600",
  },
  {
    id: 3,
    title: "Step 3: Global Access (RCMC)",
    subtitle: "Export Benefits",
    description:
      "Register with Export Promotion Councils (RCMC) to unlock 'Make in India' benefits, incentives, and market access opportunities.",
    icon: Globe,
    color: "bg-orange-600",
  },
  {
    id: 4,
    title: "Step 4: Product Compliance",
    subtitle: "Quality Assurance",
    description:
      "Ensure your products meet global standards (FSSAI, BIS, etc.). We handle the technical certifications so your goods don't get stuck.",
    icon: CheckCircle,
    color: "bg-green-600",
  },
  {
    id: 5,
    title: "Step 5: First Shipment",
    subtitle: "Logistics & Customs",
    description:
      "Ready to ship? We manage AD Code registration, Customs clearance, and documentation for a hassle-free first export.",
    icon: Ship,
    color: "bg-purple-600",
  },
];

const RoadmapTicker = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % STARTUP_ROADMAP.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-slate-800 border-y border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50"></div>

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="md:w-1/3">
            <div className="inline-flex items-center space-x-2 text-sky-400 mb-2">
              <Rocket className="w-5 h-5 animate-bounce" />
              <span className="uppercase text-xs font-bold tracking-widest">
                Start Your Journey
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              From Local to Global
            </h3>
            <p className="text-slate-400 text-sm">
              We guide you through every milestone of your export journey.
            </p>

            <div className="flex space-x-2 mt-4">
              <button
                className="p-2 bg-slate-700 hover:bg-sky-500 rounded-full"
                onClick={() =>
                  setI(
                    (prev) =>
                      (prev - 1 + STARTUP_ROADMAP.length) %
                      STARTUP_ROADMAP.length
                  )
                }
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                className="p-2 bg-slate-700 hover:bg-sky-500 rounded-full"
                onClick={() =>
                  setI((prev) => (prev + 1) % STARTUP_ROADMAP.length)
                }
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Section - Card */}
          <div className="md:w-2/3">
            <div className="relative h-56">
              {STARTUP_ROADMAP.map((step, index) =>
                index === i ? (
                  <div
                    key={step.id}
                    className="absolute inset-0 animate-fade-in"
                  >
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-600 rounded-xl p-6 flex gap-5">
                      <div
                        className={`p-4 rounded-lg shadow-lg ${step.color} bg-opacity-20`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-bold text-white">
                            {step.title}
                          </h4>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded text-white ${step.color}`}
                          >
                            {step.subtitle}
                          </span>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            {/* Indicators */}
            <div className="flex space-x-2 mt-4">
              {STARTUP_ROADMAP.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-sky-500" : "w-2 bg-slate-600"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapTicker;
