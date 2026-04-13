// import { ShieldCheck, RefreshCw, Truck, Cpu, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     id: "certification",
//     title: "Product Certification",
//     icon: ShieldCheck,
//     description:
//       "Mandatory BIS-CRS registration and WPC approvals for wireless devices.",
//     features: [
//       {
//         name:"BIS CRS (IS 13252)",
//         href: "/services/bis-registration",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//             {
//         name:"WPC ETA Approval",
//         href: "/services/wpc-license",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//             {
//         name:"TEC MTCTE Certification",
//         href: "/",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//       // "BIS CRS (IS 13252)",
//       // "WPC ETA Approval",
//       // "TEC MTCTE Certification",
//     ],
//   },
//   {
//     id: "ewaste",
//     title: "E-Waste (EPR)",
//     icon: RefreshCw,
//     description:
//       "End-to-end Extended Producer Responsibility (EPR) management for importers.",
//     features: [
//             {
//         name:"EPR Authorization",
//         href: "/services/epr-authorization",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//             {
//         name:"Recycling Target Mgmt",
//         href: "/",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//             {
//         name:"Annual Returns Filing",
//         href: "/",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//       // "EPR Authorization",
//       // "Recycling Target Mgmt",
//       // "Annual Returns Filing",
//     ],
//   },
//   {
//     id: "logistics",
//     title: "High-Tech Logistics",
//     icon: Truck,
//     description:
//       "Secure, shock-proof, and ESD-safe logistics for semiconductors and finished goods.",
//     features: [
//             {
//         name:"Air Freight (High Value)",
//         href: "/",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//             {
//         name:"ESD Safe Warehousing",
//         href: "/",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//             {
//         name:"JIT Component Delivery",
//         href: "/",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//       // "Air Freight (High Value)",
//       // "ESD Safe Warehousing",
//       // "JIT Component Delivery",
//     ],
//   },
//   {
//     id: "manufacturing",
//     title: "EMS Solutions",
//     icon: Cpu,
//     description:
//       "Support for Electronic Manufacturing Services (EMS) under PLI and MOOWR schemes.",
//     features: ["MOOWR Licensing", "PLI Scheme Filing", "PMP Compliance"],
//   },
// ];

// const ServicesGridElectronics = () => {
//   return (
//     <section id="services" className="py-20 bg-[#0B1120] relative">
//       <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs">
//             End-to-End Support
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
//             Core Competencies
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto">
//             From semiconductor logistics to E-waste compliance, we cover the
//             entire electronics lifecycle.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner">
//                   <Icon className="w-6 h-6" />
//                 </div>

//                 <h3 className="text-xl font-bold text-white mb-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-slate-400 mb-6 text-sm leading-relaxed">
//                   {service.description}
//                 </p>

//                 <ul className="space-y-3 pt-4 border-t border-slate-800">
//                   {service.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="flex items-center gap-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors"
//                     >
//                       <ChevronRight className="w-3 h-3 text-cyan-500 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGridElectronics;


import { ShieldCheck, RefreshCw, Truck, Cpu, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "certification",
    href: "/services/bis-registration",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Product Certification",
    icon: ShieldCheck,
    description:
      "Mandatory BIS-CRS registration and WPC approvals for wireless devices.",
    features: [
      {
        name: "BIS CRS (IS 13252)",
        href: "/services/bis-registration",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "WPC ETA Approval",
        href: "/services/wpc-license",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "TEC MTCTE Certification",
        href: "/services/tec-mtcte",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "ewaste",
    href: "/services/epr-authorization",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "E-Waste (EPR)",
    icon: RefreshCw,
    description:
      "End-to-end Extended Producer Responsibility (EPR) management for importers.",
    features: [
      {
        name: "EPR Authorization",
        href: "/services/epr-authorization",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Recycling Target Mgmt",
        href: "/services/recycling-target",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Annual Returns Filing",
        href: "/services/annual-returns",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "logistics",
    href: "/services/high-tech-logistics",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "High-Tech Logistics",
    icon: Truck,
    description:
      "Secure, shock-proof, and ESD-safe logistics for semiconductors and finished goods.",
    features: [
      {
        name: "Air Freight (High Value)",
        href: "/services/air-freight",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "ESD Safe Warehousing",
        href: "/services/esd-warehousing",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "JIT Component Delivery",
        href: "/services/jit-delivery",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: "manufacturing",
    href: "/services/moowr-scheme/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "EMS Solutions",
    icon: Cpu,
    description:
      "Support for Electronic Manufacturing Services (EMS) under PLI and MOOWR schemes.",
    features: [
      {
        name: "MOOWR Licensing",
        href: "/services/moowr-scheme/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "PLI Scheme Filing",
        href: "/services/pli-scheme",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "PMP Compliance",
        href: "/services/pmp-compliance",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
];

const ServicesGridElectronics = () => {
  return (
    <section id="services" className="py-20 bg-[#0B1120] relative">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs">
            End-to-End Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Core Competencies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From semiconductor logistics to E-waste compliance, we cover the
            entire electronics lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                to={service.href}
                target={service.target}
                rel={service.rel}
                className="block bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-800">
                  {service.features.map((feature) => (
                    <li
                      key={typeof feature === "object" ? feature.name : feature}
                      className="flex items-center gap-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-cyan-500 flex-shrink-0" />

                      {/* ✅ feature with href → clickable link */}
                      {typeof feature === "object" && feature.href ? (
                        <a
                          href={feature.href}
                          target={feature.target}
                          rel={feature.rel}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-indigo-400 hover:underline transition"
                        >
                          {feature.name}
                        </a>
                      ) : (
                        // ✅ plain string → just text
                        <span>{feature}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridElectronics;