import React from "react";
import { MessageSquare } from "lucide-react";

const HeroContact = () => {
  return (
    <header className="relative bg-slate-900 pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">

      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid animate-grid-flow pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-teal rounded-full mix-blend-screen blur-[120px] opacity-20 animate-float"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-brand-accent rounded-full mix-blend-screen blur-[100px] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">

        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          Trade Compliance Simplified
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white tracking-tight">
          Direct Line to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
            Compliance Auditors.
          </span>
        </h1>

        <p className="text-lg text-slate-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Connect with the Mumbai War Room. Whether you need a forensic audit or urgent port clearance,
          our team is ready to deploy.
        </p>

      </div>
    </header>
  );
};

export default HeroContact;
