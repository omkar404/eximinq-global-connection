import { ChevronRight, ShieldCheck, Truck, Factory, TrendingUp } from "lucide-react";

const services = [
  {
    id: "compliance",
    title: "Industrial Compliance",
    icon: ShieldCheck,
    description:
      "Mandatory certifications for steel, electricals, and heavy machinery imports.",
    features: [
      "BIS (ISI) Registration",
      "WPC Import Licensing",
      "PESO / CCOE Approval",
    ],
  },
  {
    id: "logistics",
    title: "Project Logistics",
    icon: Truck,
    description:
      "End-to-end handling of ODC and break-bulk engineering shipments.",
    features: [
      "Heavy Machinery Transport",
      "Flat Rack Containers",
      "Bonded Warehousing",
    ],
  },
  {
    id: "factory",
    title: "Factory Setup",
    icon: Factory,
    description:
      "Turnkey licensing for manufacturing units and assembly lines.",
    features: [
      "Industrial Safety Audits",
      "Pollution Control Board",
      "Fire Department NOC",
    ],
  },
  {
    id: "trade",
    title: "EPCG & Incentives",
    icon: TrendingUp,
    description:
      "Import capital goods at zero duty and optimize export benefits.",
    features: [
      "EPCG License Issuance",
      "RoDTEP for Engineering",
      "Duty Drawback Fixation",
    ],
  },
];

const ServicesGridEngineering = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Engineering the Future
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Specialized services for heavy engineering, automotive, and
            electronics sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-50 p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white flex items-center justify-center text-blue-700 mb-6 shadow-sm group-hover:bg-blue-700 group-hover:text-white transition">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 border-t border-slate-200 pt-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-slate-600"
                    >
                      <ChevronRight className="w-4 h-4 text-orange-500" />
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

export default ServicesGridEngineering;
