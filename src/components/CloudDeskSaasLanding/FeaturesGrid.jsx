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
    // <section className="py-20 bg-white">
    //   <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    //     {items.map((item, idx) => (
    //       <div
    //         key={idx}
    //         className="bg-gray-50 rounded-2xl p-8 border hover:shadow-lg transition"
    //       >
    //         <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
    //           {item.icon}
    //         </div>


    //         <h3 className="text-xl font-bold mb-3">{item.title}</h3>

    //          <p className="text-gray-600 text-sm mb-6">{item.text}</p>

    //         <ul className="space-y-2">
    //           {item.points.map((p, i) => (
    //             <li key={i} className="flex items-center text-sm text-gray-500">
    //               <CheckCircle size={14} className="text-teal-500 mr-2" /> {p}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}

    //   </div>
    // </section>

        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Exporters Fail Audits</h2>
                        <p className="text-lg text-slate-700 mb-6">
                            It's not about today's shipment. It's about the notice you get 3 years from now.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="bg-red-100 p-2 rounded-lg text-red-600 mt-1"><i className="fas fa-file-excel"></i></div>
                                <div>
                                    <strong className="block text-slate-900">Missing Documents</strong>
                                    "Where is the EODC for that 2023 license?" If you can't find it in 48 hours, you pay penalties + interest.
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-red-100 p-2 rounded-lg text-red-600 mt-1"><i className="fas fa-clock"></i></div>
                                <div>
                                    <strong className="block text-slate-900">Expired Deadlines</strong>
                                    Missing the 6-month window for IGST refunds or failing to extend an Advance Authorization on time.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                        <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-xs font-mono text-slate-400 ml-auto">System Alert Preview</span>
                        </div>
                        {/* <!-- Mock Alert UI --> */}
                        <div className="space-y-3">
                            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                                <div className="flex justify-between items-start">
                                    <span className="text-red-800 font-bold text-sm">Critical: EPCG License Expiring</span>
                                    <span className="text-[10px] text-red-600 bg-red-100 px-2 py-0.5 rounded-full">15 Days Left</span>
                                </div>
                                <p className="text-xs text-red-700 mt-1">Submit Installation Certificate immediately to avoid penalty.</p>
                                <button className="mt-2 text-xs bg-red-600 text-white px-3 py-1.5 rounded font-bold hover:bg-red-700 w-full">Fix Now</button>
                            </div>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded opacity-75">
                                <div className="flex justify-between items-start">
                                    <span className="text-amber-800 font-bold text-sm">Action: 12 SBs Pending e-BRC</span>
                                    <span className="text-[10px] text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full"> 9 Months</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
};

export default FeaturesGrid;
