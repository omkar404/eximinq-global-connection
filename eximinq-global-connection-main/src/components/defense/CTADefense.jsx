import React from "react";

const CTADefense = () => {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Secure Your Defense Trade
        </h2>

        <p className="text-blue-100 text-lg mb-10 font-light">
          Navigate India’s most regulated trade environment with a partner that
          understands mission readiness, compliance depth, and strategic risk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-900 hover:bg-slate-100 px-10 py-4 rounded-sm font-bold text-lg shadow-xl transition-all">
            Deploy Expert Team
          </button>

          <button className="bg-transparent border border-blue-400 text-blue-100 hover:bg-blue-800 px-10 py-4 rounded-sm font-bold text-lg transition-all">
            Download Offset Guidelines
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTADefense;
