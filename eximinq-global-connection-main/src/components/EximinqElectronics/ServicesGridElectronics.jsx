import { ShieldCheck, RefreshCw, Truck, Cpu, ChevronRight } from "lucide-react";

const services = [
  {
    id: "certification",
    title: "Product Certification",
    icon: ShieldCheck,
    description:
      "Mandatory BIS-CRS registration and WPC approvals for wireless devices.",
    features: [
      "BIS CRS (IS 13252)",
      "WPC ETA Approval",
      "TEC MTCTE Certification",
    ],
  },
  {
    id: "ewaste",
    title: "E-Waste (EPR)",
    icon: RefreshCw,
    description:
      "End-to-end Extended Producer Responsibility (EPR) management for importers.",
    features: [
      "EPR Authorization",
      "Recycling Target Mgmt",
      "Annual Returns Filing",
    ],
  },
  {
    id: "logistics",
    title: "High-Tech Logistics",
    icon: Truck,
    description:
      "Secure, shock-proof, and ESD-safe logistics for semiconductors and finished goods.",
    features: [
      "Air Freight (High Value)",
      "ESD Safe Warehousing",
      "JIT Component Delivery",
    ],
  },
  {
    id: "manufacturing",
    title: "EMS Solutions",
    icon: Cpu,
    description:
      "Support for Electronic Manufacturing Services (EMS) under PLI and MOOWR schemes.",
    features: ["MOOWR Licensing", "PLI Scheme Filing", "PMP Compliance"],
  },
];

const ServicesGridElectronics = () => {
  return (
    <section id="services" className="py-20 bg-[#0B1120] relative">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs">
            End-to-End Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Core Competencies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From semiconductor logistics to E-waste compliance, we cover the
            entire electronics lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-800">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-cyan-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridElectronics;
