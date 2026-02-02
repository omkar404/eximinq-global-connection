import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";

const CustomsServicesList = ({ services, activeSubCategory, onStartProcess  }) => {
  if (!services || services.length === 0)
    return <div className="text-center text-gray-500 py-10">No services found.</div>;

  // Filter by sub-category
  const filtered = activeSubCategory === "All"
    ? services
    : services.filter(s => s.category === activeSubCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filtered.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
        >
          {/* Top Section */}
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600">
              {service.icon}
            </div>
            <span className="text-[10px] px-2 py-1 bg-gray-50 rounded font-bold text-gray-400 uppercase">
              {service.category}
            </span>
          </div>

          {/* Title + Description */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {service.title}
          </h3>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed min-h-[40px]">
            {service.desc}
          </p>

          {/* Steps */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-[10px] font-bold text-gray-500 uppercase mb-2 flex items-center">
              <PlayCircle size={10} className="mr-1" /> How it works
            </div>

            <div className="flex items-center justify-between">
              {service.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 relative">
                  <div className={`w-2 h-2 rounded-full mb-1 
                    ${idx === 0 ? "bg-indigo-500" : "bg-gray-300"}`} 
                  />
                  {idx < service.steps.length - 1 && (
                    <div className="absolute top-1 left-[50%] w-full h-px bg-gray-200 -z-10" />
                  )}
                  <span className="text-[8px] text-gray-500 text-center leading-tight px-1">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => onStartProcess(service)}
              className="text-indigo-600 hover:text-indigo-800 text-sm font-bold flex items-center"
            >
              Start Process <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomsServicesList;
