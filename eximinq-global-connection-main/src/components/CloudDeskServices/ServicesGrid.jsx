import React from "react";
import { Search, ArrowRight, Mail } from "lucide-react";

const ServicesGrid = ({ services, onStartProcess }) => {
  if (!services) {
    return (
      <div className="text-center py-20 text-gray-500">Loading services...</div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
          <Search size={48} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-700">No services found</h3>
        <p className="text-gray-500">Try adjusting your search terms.</p>
      </div>
    );
  }

  const getCategoryBg = (cat) => {
    switch (cat) {
      case "Registration":
        return "bg-blue-50 group-hover:bg-blue-100";
      case "Licensing":
        return "bg-teal-50 group-hover:bg-teal-100";
      case "Incentives":
        return "bg-green-50 group-hover:bg-green-100";
      case "Customs Filing":
        return "bg-purple-50 group-hover:bg-purple-100";
      case "Logistics":
        return "bg-orange-50 group-hover:bg-orange-100";
      case "Compliance":
        return "bg-teal-50 group-hover:bg-teal-100";
      case "Dispute Resolution":
        return "bg-red-50 group-hover:bg-red-100";
      case "ISO & Trademark":
        return "bg-pink-50 group-hover:bg-pink-100";
      default:
        return "bg-indigo-50 group-hover:bg-indigo-100";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
      {services.map((service) => (
        <div key={`${service.category}-${service.id}`}
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
        >
          Popular Badge
          {service.popular && (
            <div className="absolute top-0 right-0 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
              High Demand
            </div>
          )}
          {/* Icon Wrapper */}
          <div
            className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${getCategoryBg(
              service.category
            )}`}
          >
            {service.icon}
          </div>
          {/* Content */}
          <div className="flex-grow">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              {service.category}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
          </div>
          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-bold text-sm flex items-center group/btn hover:text-indigo-800"
            >
              Learn More
              <ArrowRight
                size={16}
                className="ml-2 transform group-hover/btn:translate-x-1 transition-transform"
              />
            </a>

            <button
              type="button"
              onClick={() => onStartProcess(service)}
              className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-teal-600 hover:text-white transition-colors"
              title="Quick Enquiry"
            >
              <Mail size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
