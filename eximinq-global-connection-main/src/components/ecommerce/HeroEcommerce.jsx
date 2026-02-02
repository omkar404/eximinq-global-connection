import React from "react";
import {
  Zap,
  ChevronRight,
  ScanBarcode,
  Package,
} from "lucide-react";

const HeroEcommerce = () => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2000";
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-100"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-orange-500/80 z-10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=2000"
          alt="Ecommerce Logistics"
          className="w-full h-full object-cover mix-blend-multiply"
          onError={handleImageError}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-md">
            <Zap className="w-4 h-4 text-yellow-300" />
            ECCS-Enabled Courier Clearance
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
            Cross-Border Trade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              at Digital Speed
            </span>
          </h1>

          <p className="text-lg md:text-xl text-violet-100 mb-8 leading-relaxed font-light">
            Scale your D2C brand globally with automated CSB-V filing,
            seamless returns management, and real-time duty reconciliation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-violet-700 hover:bg-violet-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
              Start Shipping <ChevronRight className="w-5 h-5" />
            </button>

            <button className="bg-transparent border-2 border-orange-400 text-white hover:bg-orange-500 hover:border-orange-500 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              <ScanBarcode className="w-5 h-5" />
              Duty Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-0 bottom-20 z-20 w-1/3">
        <div className="bg-white/95 backdrop-blur rounded-l-3xl p-8 border-l-8 border-violet-500 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-violet-100 p-3 rounded-2xl text-violet-600">
              <Package className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Daily Throughput
              </h3>
              <p className="text-4xl font-black text-slate-800">15,000+</p>
              <p className="text-sm font-medium text-orange-500">
                Parcels Cleared
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm text-slate-600 font-medium">
              <span>CSB-V Success Rate</span>
              <span className="font-bold">99.8%</span>
            </div>
            <div className="flex justify-between text-sm text-slate-600 font-medium">
              <span>Avg Returns Cycle</span>
              <span className="font-bold">24 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEcommerce;
