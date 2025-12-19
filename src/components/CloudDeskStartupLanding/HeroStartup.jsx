import React from "react";
import { Package, ArrowRight } from "lucide-react";
import GlobeBackground from "../CloudDeskCorpLanding/GlobeBackground";

const HeroStartup = () => {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <GlobeBackground />

      <div className="relative z-10 container mx-auto px-6 text-center mt-16">
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-slate-300 text-xs font-bold tracking-wider uppercase">
            Empowering New Business
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
          Turn Your <span className="text-orange-500">Make in India</span> <br />
          Vision into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            Global Success
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Starting an Export business? We handle the complex registrations and
          compliance so you can focus on your product.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:scale-105 transition flex items-center"
          >
            Get Starter Package
            <Package className="ml-2 w-5 h-5" />
          </a>

          <a
            href="#make-in-india"
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 rounded-full border border-slate-700 flex items-center transition"
          >
            View Schemes <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroStartup;
