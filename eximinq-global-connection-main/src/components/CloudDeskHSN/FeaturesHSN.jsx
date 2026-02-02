import React from "react";
import { Globe, DollarSign, AlertTriangle } from "lucide-react";

const FeaturesHSN = () => {
  const items = [
    {
      icon: <Globe size={26} />,
      title: "Harmonized System",
      desc: "Standardized 6-digit classification used in 200+ countries.",
    },
    {
      icon: <DollarSign size={26} />,
      title: "Duties & Taxes",
      desc: "View BCD, AIDC, IGST, Cess, Export Benefit.",
    },
    {
      icon: <AlertTriangle size={26} />,
      title: "Import Policy",
      desc: "Know if item is Free / Restricted / Prohibited.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((i, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow border text-center hover:shadow-lg transition"
        >
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            {i.icon}
          </div>
          <h4 className="font-bold text-gray-800">{i.title}</h4>
          <p className="text-gray-600 text-sm mt-2">{i.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesHSN;
