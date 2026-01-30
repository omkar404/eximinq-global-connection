import {
  TrendingUp,
  Layers,
  Leaf,
  ShoppingBag
} from "lucide-react";

const services = [
  {
    id: "incentives",
    title: "Export Incentives",
    icon: <TrendingUp className="w-6 h-6" />,
    description:
      "Maximize claims under RoSCTL, RoDTEP, and Duty Drawback for garments and made-ups.",
    features: [
      "RoSCTL Filing & Audit",
      "Duty Drawback Fixation",
      "Special Advance Authorization",
    ],
  },
  {
    id: "sourcing",
    title: "Fabric Sourcing",
    icon: <Layers className="w-6 h-6" />,
    description:
      "Duty-free import of trimmings, embellishments, and specialty fabrics for export production.",
    features: [
      "Import of Trimmings",
      "Nominated Supplier Mgmt",
      "Fabric Quality Checks",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainable Compliance",
    icon: <Leaf className="w-6 h-6" />,
    description:
      "Certification support for GOTS, Oeko-Tex, and organic cotton sourcing verification.",
    features: [
      "GOTS Certification",
      "Traceability Audits",
      "Chemical Compliance (RSL)",
    ],
  },
  {
    id: "logistics",
    title: "Fashion Logistics",
    icon: <ShoppingBag className="w-6 h-6" />,
    description:
      "GOH (Garment on Hanger) containers and fast-track air freight for seasonal fashion collections.",
    features: [
      "GOH Container Booking",
      "Sample Logistics",
      "JIT Retail Delivery",
    ],
  },
];

const ServicesGridTextiles = () => {
  return (
    <section id="services" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-rose-600 font-bold tracking-widest uppercase text-xs">
            Our Craft
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 font-serif">
            Tailored for Textiles
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Services designed for yarn counts, fabric blends, and fashion seasons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all border border-slate-100"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-rose-600 mb-8 shadow-sm">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 pt-6 border-t border-slate-200/60">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
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

export default ServicesGridTextiles;
