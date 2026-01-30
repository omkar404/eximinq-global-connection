import {
  Globe,
  ShieldCheck,
  Flame,
  FileWarning,
  Droplets,
} from "lucide-react";

const services = [
  {
    id: "global",
    title: "Global Registration",
    icon: <Globe className="w-6 h-6" />,
    description:
      "Full support for EU REACH, UK REACH, KKDIK (Turkey), and Korea REACH registrations.",
    features: [
      "Only Representative (OR) Services",
      "Technical Dossier Preparation",
      "Substance Volume Tracking",
    ],
  },
  {
    id: "domestic",
    title: "Domestic Compliance",
    icon: <ShieldCheck className="w-6 h-6" />,
    description:
      "Navigating BIS Quality Control Orders (QCOs) and CPCB clearances for importers.",
    features: [
      "BIS Certification (ISI)",
      "Plastic Waste Management (PWM)",
      "Narcotics Dept NOC",
    ],
  },
  {
    id: "logistics",
    title: "Hazmat Logistics",
    icon: <Flame className="w-6 h-6" />,
    description:
      "Specialized handling for IMDG Class 1–9 Dangerous Goods and ISO Tank containers.",
    features: [
      "ISO Tank Booking",
      "DG Declaration Filing",
      "Port Fire Safety Compliance",
    ],
  },
  {
    id: "safety",
    title: "Safety Data & Labeling",
    icon: <FileWarning className="w-6 h-6" />,
    description:
      "Authoring of GHS-compliant Safety Data Sheets (SDS) and labeling for global markets.",
    features: [
      "16-Section SDS Authoring",
      "GHS Label Generation",
      "Transport Emergency Cards",
    ],
  },
];

const ServicesGridChemicals = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
            Specialized Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Chemistry of Compliance
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Handling the volatile nature of chemical regulations with precision
            and safety.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full -mr-12 -mt-12 opacity-50 group-hover:scale-150 transition-transform" />

              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-emerald-700 mb-6 border relative z-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6 relative z-10">
                {service.description}
              </p>

              <ul className="space-y-3 pt-4 border-t relative z-10">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                  >
                    <Droplets className="w-4 h-4 text-amber-500" />
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

export default ServicesGridChemicals;
