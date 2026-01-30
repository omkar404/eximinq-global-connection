import React from "react";
import {
  Truck,
  RotateCcw,
  Factory,
  CreditCard,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "courier",
    title: "Courier Clearance",
    icon: <Truck className="w-6 h-6" />,
    description:
      "Automated filing for CSB-IV (Samples) and CSB-V (Commercial) shipments via Express Cargo Clearance Systems (ECCS).",
    features: ["ECCS Integration", "KYC Validation", "Duty Payment API"],
  },
  {
    id: "returns",
    title: "Returns Management",
    icon: <RotateCcw className="w-6 h-6" />,
    description:
      `Hassle-free re-import of rejected B2C exports. We manage the "Return to Origin" documentation to avoid import duties.`,
    features: [
      "Return-to-Origin",
      "Notification 45/2017",
      "Defective Goods Mgmt",
    ],
  },
  {
    id: "hubs",
    title: "Export Hubs (ECEH)",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Advisory on setting up or utilizing E-Commerce Export Hubs for consolidation and faster clearance.",
    features: ["ECEH Registration", "Pre-screening", "Bulk Filing"],
  },
  {
    id: "recon",
    title: "Payment Reconciliation",
    icon: <CreditCard className="w-6 h-6" />,
    description:
      "Matching small-value export shipments with EDPMS and e-BRC generation for multiple small receipts.",
    features: ["Gateway Recon", "EDPMS Closure", "FEMA Compliance"],
  },
];

const ServicesEcommerce = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-violet-600 font-bold tracking-widest uppercase text-xs">
            Eximinq Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
            Built for D2C Brands
          </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We integrate directly with your shopping cart to automate customs filing and duty calculation.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-violet-600 mb-8 shadow-sm">
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
                    className="flex items-center gap-3 text-sm text-slate-500"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-500" />
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

export default ServicesEcommerce;
