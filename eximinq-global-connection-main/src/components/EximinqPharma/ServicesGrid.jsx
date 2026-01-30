import { CheckCircle } from "lucide-react";

const services = [
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description:
      "End-to-end support for CDSCO registrations, drug licenses, and clinical approvals.",
    features: [
      "CDSCO Import Registration",
      "Wholesale Drug License (20B/21B)",
      "Clinical Trial NOCs",
    ],
  },
  {
    id: "logistics",
    title: "Cold Chain Logistics",
    description:
      "Specialized logistics solutions for temperature-sensitive APIs and formulations.",
    features: [
      "Reefer Container Booking",
      "Temperature Data Loggers",
      "Port Clearance Expediting",
    ],
  },
  {
    id: "factory",
    title: "Factory Licensing",
    description:
      "Compliance setup for pharmaceutical manufacturing units and safety audits.",
    features: [
      "Factory Plan Approval",
      "Safety Audits",
      "Pollution Control Board NOC",
    ],
  },
  {
    id: "trade",
    title: "Global Trade & Incentives",
    description:
      "Maximize benefits through RoDTEP, EPCG, and Advance Authorization schemes.",
    features: [
      "RoDTEP Claim Filing",
      "Advance Authorization",
      "Duty Drawback Optimization",
    ],
  },
];


const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold uppercase text-sm tracking-wider">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Specialized for Life Sciences
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From factory floor safety to international port clearance, we handle
            the complete regulatory lifecycle for pharmaceutical companies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-500"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
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

export default ServicesGrid;
