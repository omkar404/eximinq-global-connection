import React from "react";
import {
  Truck,
  RotateCcw,
  Factory,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const services = [
  {
    id: "courier",
    title: "Courier Clearance",
    icon: <Truck className="w-6 h-6" />,
    description:
      "Automated filing for CSB-IV (Samples) and CSB-V (Commercial) shipments via Express Cargo Clearance Systems (ECCS).",
    features: [
      {
        name: "ECCS Integration",
        href: "/services/e-sanchit-filing",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "KYC Validation",
        href: "/services/cha-services",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Duty Payment API",
        href: "/services/duty-payment-ecl",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns Management",
    icon: <RotateCcw className="w-6 h-6" />,
    description:
      `Hassle-free re-import of rejected B2C exports. We manage the "Return to Origin" documentation to avoid import duties.`,
    features: [
      {
        name: "Return-to-Origin",
        href: "/services/igcr-returns",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Notification 45/2017",
        href: "/services/customs-adjudication",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Defective Goods Mgmt",
        href: "/services/no-due-certificate",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "hubs",
    title: "Export Hubs (ECEH)",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Advisory on setting up or utilizing E-Commerce Export Hubs for consolidation and faster clearance.",
    features: [
      {
        name: "ECEH Registration",
        href: "/services/warehousing-solutions",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Pre-screening",
        href: "/services/cha-services",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Bulk Filing",
        href: "/services/e-sanchit-filing",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "recon",
    title: "Payment Reconciliation",
    icon: <CreditCard className="w-6 h-6" />,
    description:
      "Matching small-value export shipments with EDPMS and e-BRC generation for multiple small receipts.",
    features: [
      {
        name: "Gateway Recon",
        href: "/services/edpms-ebrc",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "EDPMS Closure",
        href: "/services/edpms-ebrc",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "FEMA Compliance",
        href: "/services/no-due-certificate",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
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
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-violet-600 mb-8 shadow-sm group-hover:shadow-md transition-all">
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
                      className="flex items-center gap-3 text-sm text-slate-500 hover:text-violet-600 transition-colors group/link"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-500 group-hover/link:text-orange-600 transition-colors" />
                      <span className="hover:underline">{feature.name}</span>
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

export default ServicesEcommerce;