import React from "react";
import {
  AlertTriangle,
  ChevronRight,
  Zap,
  Leaf,
  Radio,
  Scale,
  Factory,
  Landmark,
  Globe,
  FileCheck,
  BadgeCheck,
  Utensils,
  ShieldCheck,
} from "lucide-react";

const iconMap = {
  zap: <Zap className="w-6 h-6 text-blue-600" />,
  leaf: <Leaf className="w-6 h-6 text-green-600" />,
  radio: <Radio className="w-6 h-6 text-blue-600" />,
  scale: <Scale className="w-6 h-6 text-blue-600" />,
  factory: <Factory className="w-6 h-6 text-blue-600" />,
  landmark: <Landmark className="w-6 h-6 text-indigo-600" />,
  globe: <Globe className="w-6 h-6 text-indigo-600" />,
  "file-check": <FileCheck className="w-6 h-6 text-indigo-600" />,
  "badge-check": <BadgeCheck className="w-6 h-6 text-indigo-600" />,
  utensils: <Utensils className="w-6 h-6 text-orange-600" />,
  "shield-check": <ShieldCheck className="w-6 h-6 text-orange-600" />,
};

const ComplianceCards = ({ data, openModal }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-teal-50"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-white group-hover:shadow-md transition">
                {iconMap[item.icon]}
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-gray-800 text-lg">
                  {item.title}
                </h3>
                <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                  {item.act}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed min-h-[50px]">
              {item.desc}
            </p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex items-center text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                <AlertTriangle size={12} className="mr-1" />
                Risk: {item.risk}
              </div>

              <button
              // onClick={openModal}
              // className="text-sm font-bold text-teal-600 hover:text-teal-800 flex items-center"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-teal-600 hover:text-teal-800 flex items-center"
                >
                  Enquire <ChevronRight size={16} />
                </a>

                {/* Enquire <ChevronRight size={16} /> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComplianceCards;
