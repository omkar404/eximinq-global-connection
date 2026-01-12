import React from "react";
import { Stamp } from "lucide-react";

const HeroCOO = ({ onEnroll  }) => {
  return (
    <header className="relative bg-[#000000] text-white pt-40 pb-24 relative overflow-hidden">

      {/* Background Icon */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* World Map Background */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          Trade Compliance Simplified
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Certificate of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">Origin Services</span>
        </h1>

        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          Secure your export benefits with fast, compliant Preferential and Non-Preferential COO issuance.
        </p>

        <button
          onClick={() => onEnroll({ open: true, type: "HERO" })}
          className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-1"
        >
          Enroll Now 
        </button>
      </div>

    </header>
  );
};

export default HeroCOO;
