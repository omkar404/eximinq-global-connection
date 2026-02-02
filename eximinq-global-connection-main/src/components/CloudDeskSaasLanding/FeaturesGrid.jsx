import React from "react";
import { FileText, Clock, ShieldCheck, CheckCircle } from "lucide-react";

const FeaturesGrid = () => {
  const items = [
    {
      icon: <FileText size={28} />,
      color: "bg-indigo-100 text-indigo-600",
      title: "Smart Documentation",
      text: "Auto-generates forms for DGFT & Customs based on your profile. Never miss a mandatory field again.",
      points: ["Auto-fill", "Error detection"],
    },
    {
      icon: <Clock size={28} />,
      color: "bg-teal-100 text-teal-600",
      title: "Real-Time Tracking",
      text:"Visualize the exact stage of your application. From 'Submitted' to 'Approved', see progress bars moving in real-time.",
      points: ["Alerts", "Timeline View"],
    },
    {
      icon: <ShieldCheck size={28} />,
      color: "bg-purple-100 text-purple-600",
      title: "Compliance Vault",
      text:"Secure cloud storage for all your licenses, scripts, and shipping bills. Audit-ready organization at a click.",
      points: ["256-bit Encryption", "Expiry Reminders"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl p-8 border hover:shadow-lg transition"
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
              {item.icon}
            </div>


            <h3 className="text-xl font-bold mb-3">{item.title}</h3>

             <p className="text-gray-600 text-sm mb-6">{item.text}</p>

            <ul className="space-y-2">
              {item.points.map((p, i) => (
                <li key={i} className="flex items-center text-sm text-gray-500">
                  <CheckCircle size={14} className="text-teal-500 mr-2" /> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesGrid;
