import React from "react";
import GlobeBackground from "../GlobeBackground/GlobeBackground";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <GlobeBackground />

      <div className="relative z-10 container mx-auto px-6 text-center mt-24">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold tracking-wider uppercase">
          Exclusive Partner Rates
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Seamless Logistics. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Unbeatable Prices.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Unlock special CHA rates tailored for your business. From IEC Registration to complex Duty Drawbacks, we've optimized costs for your growth.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-8 h-8 text-sky-400" />
      </div>
    </header>
  );
};

export default Hero;
