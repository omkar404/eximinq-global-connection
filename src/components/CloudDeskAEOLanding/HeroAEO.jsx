import React from "react";
import { AlertTriangle, Phone } from "lucide-react";

const HeroAEO = () => {
  return (
    <header
      id="home"
      className="bg-gradient-to-br from-blue-900 to-slate-800 text-white pt-16 pb-24 relative overflow-hidden"
    >
      {/* Background Lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">

        <div className="inline-flex items-center bg-red-600 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
          <AlertTriangle size={16} className="mr-2" /> URGENT REMINDER
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          AEO T1 Annual Returns
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Avoid Cancellation of your AEO Status. Ensure compliance before the deadline.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          <a
            href="#contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            File Now for ₹3999/-
          </a>

          <a
            href="tel:+917400096950"
            className="flex items-center text-white border border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
          >
            <Phone size={20} className="mr-2" /> Call Cloud Desk
          </a>
        </div>

      </div>
    </header>
  );
};

export default HeroAEO;