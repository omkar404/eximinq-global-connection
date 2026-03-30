import {
  LayoutGrid,
  Plug,
  Factory,
  Truck,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "almm",
    title: "ALMM Registration",
    icon: <LayoutGrid className="w-6 h-6" />,
    description:
      "End-to-end support for listing Solar PV Modules under MNRE ALMM for government and subsidized projects.",
    features: [
      {
        name: "Factory Audit Preparation",
        href: "/services/factory-license",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "MNRE Application Filing",
        href: "/",  // 🔗 Add actual URL
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Model Addition & Renewal",
        href: "/",  // 🔗 Add actual URL
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "bis",
    title: "Inverter & ESS Compliance",
    icon: <Plug className="w-6 h-6" />,
    description:
      "BIS CRS registration for Solar Inverters, Hybrid Systems, and Energy Storage Solutions.",
    features: [
      {
        name: "IS 16221 / IS 16169",
        href: "/",  // 🔗 Link to BIS CRS
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Test Lab Coordination",
        href: "/",  // 🔗 Add actual URL
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Surveillance Management",
        href: "/",  // 🔗 Add actual URL
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "project",
    title: "Project Imports (CTH 9801)",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Concessional duty clearance for Solar & Wind Power Projects under Project Import Regulations.",
    features: [
      {
        name: "Essentiality Certificate",
        href: "/",  // 🔗 Add actual URL
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Contract Registration",
        href: "/services/project-cargo",  // 🔗 Link to Project Cargo
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Duty Reconciliation",
        href: "/services/duty-payment-ecl",  // 🔗 Link to Duty Payment
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "logistics",
    title: "ODC & Heavy Logistics",
    icon: <Truck className="w-6 h-6" />,
    description:
      "Specialized logistics for transformers, wind blades, and oversized renewable components.",
    features: [
      {
        name: "Route Survey & Approvals",
        href: "/services/inland-transportation",  // 🔗 Link to Inland Transportation
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Multi-Axle Transport",
        href: "/services/freight-forwarding",  // 🔗 Link to Freight Forwarding
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Port Handling",
        href: "/services/cha-services",  // 🔗 Link to CHA Services
        target: "_blank",
        rel: "noopener noreferrer",
      },
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
                  <li key={i}>
                    <Link
                      to={feature.href}
                      target={feature.target}
                      rel={feature.rel}
                      className="flex items-center gap-3 text-sm text-slate-500 font-medium hover:text-amber-600 transition-colors group/link"
                    >
                      <ChevronRight className="w-4 h-4 text-sky-500 group-hover/link:text-amber-500 transition-colors" />
                      {feature.name}
                    </Link>
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