import {
  LayoutGrid,
  Plug,
  Factory,
  Truck,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: "almm",
    title: "ALMM Registration",
    icon: <LayoutGrid className="w-6 h-6" />,
    description:
      "End-to-end support for listing Solar PV Modules under MNRE ALMM for government and subsidized projects.",
    features: [
      "Factory Audit Preparation",
      "MNRE Application Filing",
      "Model Addition & Renewal",
    ],
  },
  {
    id: "bis",
    title: "Inverter & ESS Compliance",
    icon: <Plug className="w-6 h-6" />,
    description:
      "BIS CRS registration for Solar Inverters, Hybrid Systems, and Energy Storage Solutions.",
    features: [
      "IS 16221 / IS 16169",
      "Test Lab Coordination",
      "Surveillance Management",
    ],
  },
  {
    id: "project",
    title: "Project Imports (CTH 9801)",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Concessional duty clearance for Solar & Wind Power Projects under Project Import Regulations.",
    features: [
      "Essentiality Certificate",
      "Contract Registration",
      "Duty Reconciliation",
    ],
  },
  {
    id: "logistics",
    title: "ODC & Heavy Logistics",
    icon: <Truck className="w-6 h-6" />,
    description:
      "Specialized logistics for transformers, wind blades, and oversized renewable components.",
    features: [
      "Route Survey & Approvals",
      "Multi-Axle Transport",
      "Port Handling",
    ],
  },
];

const ServicesSolar = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Powered by Expertise
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Specialized services for Solar EPCs, Module Manufacturers, and
            Renewable Energy Developers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-amber-500 mb-6 shadow-sm border border-slate-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 pt-4 border-t border-slate-200">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-500 font-medium"
                  >
                    <ChevronRight className="w-4 h-4 text-sky-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSolar;
