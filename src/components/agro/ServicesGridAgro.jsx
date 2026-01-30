import {
  ShieldCheck,
  FileText,
  Thermometer,
  Leaf,
} from "lucide-react";

const services = [
  {
    id: "compliance",
    title: "Food Safety (FSSAI)",
    icon: <ShieldCheck className="w-6 h-6" />,
    description:
      "Comprehensive FSSAI licensing, product approval for non-specified foods, and labeling compliance.",
    features: [
      "FSSAI Import Clearance",
      "Label Verification",
      "Novel Food Approval",
    ],
  },
  {
    id: "council",
    title: "Council Registration",
    icon: <FileText className="w-6 h-6" />,
    description:
      "RCMC registration with APEDA (Agri), MPEDA (Marine), and Spices Board for export authorization.",
    features: [
      "APEDA RCMC Issuance",
      "Tracenet Registration",
      "Spices Board CRES",
    ],
  },
  {
    id: "logistics",
    title: "Cold Chain Logistics",
    icon: <Thermometer className="w-6 h-6" />,
    description:
      "End-to-end reefer container management for perishables with temperature data logging.",
    features: [
      "Reefer Booking",
      "Packhouse Operations",
      "Port Health Clearance",
    ],
  },
  {
    id: "organic",
    title: "Organic Certification",
    icon: <Leaf className="w-6 h-6" />,
    description:
      "Guidance on NPOP (India) and NOP (USA) organic standards for premium market access.",
    features: [
      "Scope Certificate",
      "Transaction Certificate",
      "Residue Analysis",
    ],
  },
];

const ServicesAgro = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2 mb-4">
            Nurturing Growth
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Specialized services for the perishable, processed food, and
            commodity sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#fcfdfa] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-700 mb-6 shadow-sm border border-stone-100 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3">
                {service.title}
              </h3>

              <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 pt-4 border-t border-stone-200">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-stone-500 font-medium"
                  >
                    <Leaf className="w-4 h-4 text-amber-500 flex-shrink-0" />
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

export default ServicesAgro;
