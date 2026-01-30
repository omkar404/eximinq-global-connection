import React from "react";
import {
  Shield,
  FileText,
  Anchor,
  Globe,
  CheckCircle,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const AEOServices = () => {
  const services = [
    {
      title: "AEO T1, T2 & T3 Certification",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "DGFT Consultancy (Advance Auth/EPCG)",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Customs Clearance & Compliance",
      icon: <Anchor className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Freight Forwarding & Logistics",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Legal Metrology & BIS Registration",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Duty Drawback & RoDTEP Claims",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800">Our Expertise</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Beyond Annual Returns, EXIMINQ Global Connections offers a
          comprehensive suite of services to streamline your international
          trade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition group"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm">
              Professional assistance for seamless operations and compliance.
            </p>

            <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
              Learn more <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.eximinq.in/services"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-blue-600 font-semibold hover:underline"
        >
          View all services at www.eximinq.in/services{" "}
          <ChevronRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default AEOServices;
