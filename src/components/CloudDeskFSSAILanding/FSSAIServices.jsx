import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Briefcase,
  Anchor,
  Globe,
  Package,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function FSSAIServices() {
  const services = [
    {
      icon: FileText,
      title: "COO (Certificate of Origin)",
      desc: "Preferential and Non-Preferential COO issuance for your international shipments.",
      href: "/services/certificate-of-origin",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Briefcase,
      title: "EPCG & Advance Lic Closure",
      desc: "Expert handling of Export Obligation Discharges (EODC) and license redemptions.",
      href: "/strategic-solutions/epcg-closure-services",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Anchor,
      title: "Duty Drawback (Duty Dbk)",
      desc: "Maximize your customs duty refunds with accurate brand rate fixations and claims.",
      href: "/services/duty-drawback",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Globe,
      title: "RoDTEP Claims",
      desc: "Ensure you don't miss out on your Remission of Duties and Taxes on Exported Products.",
      href: "/services/rodtep-rosctl-trading",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Package,
      title: "EPR Plastic Compliance",
      desc: "New registrations, target auditing, and compliance management for PIBOs.",
      href: "/services/epr-authorization",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Zap,
      title: "EPR E-Waste Compliance",
      desc: "Complete portal management and target fulfillment for E-Waste importers.",
      href: "/services/epr-authorization",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Beyond Annual Returns, EXIMINQ Global Connections offers a
            comprehensive suite of services to streamline your international
            trade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <a
              key={idx}
              href={service.href}
              target={service.target}
              rel={service.rel}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between group cursor-pointer no-underline text-inherit"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              <div className="text-blue-600 text-sm font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://eximinq.in/strategic-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 text-lg font-bold hover:text-sky-700 transition-colors inline-flex items-center"
          >
            Explore all our services at eximinq.in/strategic-solutions{" "}
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}