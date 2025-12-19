import React from "react";
import GlobeBackground from "./GlobeBackground";
import ArrowDownIcon from "./ArrowDownIcon";

const HeroCorp = () => {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 3D Globe Background */}

<GlobeBackground />
      <div className="relative z-10 container mx-auto px-6 text-center mt-16">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 
                        rounded-full bg-slate-800/80 border border-slate-700 
                        backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-slate-300 text-xs font-bold tracking-wider uppercase">
            Simplifying Global Trade
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          Your Single Window for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-sky-400 via-blue-500 to-indigo-500">
            Import & Export Excellence
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Navigate the complexities of international trade with Cloud Desk.  
          From licensing to compliance and duty optimization, we provide  
          end-to-end solutions for modern businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center 
                        space-y-4 sm:space-y-0 sm:space-x-4">
          
          <a
            href="#solutions"
            className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 
                       hover:from-sky-500 hover:to-blue-600 text-white font-bold 
                       rounded-full transition-all shadow-lg shadow-blue-500/30 
                       flex items-center"
          >
            Explore Services
            <ArrowDownIcon className="ml-2 w-5 h-5" />
          </a>

          <button
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white 
                       font-medium rounded-full backdrop-blur-md 
                       border border-slate-700 transition-all"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroCorp;
