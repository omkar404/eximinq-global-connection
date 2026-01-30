import React from "react";
import { HelpCircle, Package } from "lucide-react";

const CTAStartup = ({setShowModal}) => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-3xl border border-slate-700 shadow-2xl">

          <div className="inline-block p-3 bg-sky-500/10 rounded-full mb-6">
            <Package className="w-8 h-8 text-sky-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Launch with the <span className="text-sky-400">Complete Startup Package</span>
          </h2>

          <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
            Get <strong>IEC + RCMC + AD Code + GST Registration</strong> plus expert consultation — a complete setup package for new exporters.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl shadow-lg"
            onClick={() => setShowModal(true)}
            >
              Get Competitive Quote
            </button>
            <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl flex items-center gap-2"
            onClick={() => setShowModal(true)}
            >
              <HelpCircle className="w-5 h-5" /> Talk to an Expert
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Complete support from Day 1 to First Shipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAStartup;
