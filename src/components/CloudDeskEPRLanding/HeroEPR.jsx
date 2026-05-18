import React from 'react';
import { AlertOctagon } from 'lucide-react';

export default function HeroEPR() {

  return (
    <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 via-slate-900 to-slate-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm font-bold uppercase tracking-wider mb-6">
              <AlertOctagon className="w-4 h-4" />
              <span>Mandatory Compliance For Importers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              EPR Annual Returns <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                Plastic & E-Waste
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              If you import goods into India, your EPR Registration will be suspended if Annual Returns are not filed. Do not let your shipments get stuck at the port.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg shadow-red-900/50 transition-all text-lg w-full sm:w-auto text-center">
                File Returns Now
              </a>
              <a href="#consequences" className="px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-bold rounded-lg transition-all w-full sm:w-auto text-center">
                View Customs Risks
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
  