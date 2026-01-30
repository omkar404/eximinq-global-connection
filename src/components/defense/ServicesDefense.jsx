import React from "react";
import {
  Crosshair,
  Factory,
  TrendingUp,
  Plane
} from "lucide-react";

const services = [
  {
    id: "scomet",
    title: "SCOMET Licensing",
    icon: <Crosshair className="w-6 h-6" />,
    description:
      "Expert classification and licensing for Dual-Use items (Category 0–8) and Munitions List (Category 6).",
    features: [
      "SCOMET Application",
      "EUC Verification",
      "Post-Shipment Reporting"
    ]
  },
  {
    id: "industrial",
    title: "Defense Industrial License",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Strategic advisory for obtaining Industrial Licenses (IL) to manufacture defense hardware in India.",
    features: [
      "DPIIT / MHA Filings",
      "Security Clearance",
      "Capacity Expansion IL"
    ]
  },
  {
    id: "offset",
    title: "Offset Management",
    icon: <TrendingUp className="w-6 h-6" />,
    description:
      "End-to-end support for discharging defense offset obligations via exports or investments.",
    features: [
      "IOP Certification",
      "Offset Banking",
      "Quarterly Reporting"
    ]
  },
  {
    id: "mro",
    title: "Aerospace MRO",
    icon: <Plane className="w-6 h-6" />,
    description:
      "Customs bonding and duty-free clearance for Aircraft Maintenance, Repair & Overhaul operations.",
    features: [
      "Bonded Warehouse (MOOWR)",
      "AOG Clearance",
      "Parts Pooling"
    ]
  }
];

const ServicesDefense = () => {
  return (
    <section id="services" className="py-20 bg-slate-950 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">
            Tactical Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Defense Ecosystem
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Specialized consultancy for OEMs, Tier-1 suppliers, and MROs navigating
            the Indian Defense landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 p-8 rounded-sm border border-slate-800 
                         hover:shadow-[0_0_30px_rgba(30,58,138,0.2)] 
                         transition-all duration-300 group relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-blue-900/20 rounded-bl-full -mr-6 -mt-6 
                              transition-transform duration-500 
                              group-hover:scale-150 group-hover:bg-blue-800/20" />

              {/* Icon */}
              <div
                className="w-14 h-14 bg-slate-950 rounded-sm flex items-center justify-center 
                           text-blue-500 mb-6 shadow-inner border border-slate-800 
                           group-hover:text-white group-hover:border-blue-500 
                           transition-colors duration-300"
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 pt-4 border-t border-slate-800">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs font-bold 
                               text-slate-500 uppercase tracking-wide 
                               group-hover:text-slate-300 transition-colors"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
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

export default ServicesDefense;
