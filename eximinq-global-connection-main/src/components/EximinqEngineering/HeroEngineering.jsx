import { ChevronRight, Truck, Factory, HardHat } from "lucide-react";

const HeroEngineering = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-blue-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Industrial Engineering Factory"
          className="w-full h-full object-cover grayscale opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-28 md:py-36">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-1.5 rounded-sm text-sm font-bold tracking-wide uppercase mb-6">
            <HardHat className="w-4 h-4" />
            Industrial Grade Compliance
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Powering Global{" "}
            <span className="text-blue-400">Engineering Trade</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Accelerate heavy engineering, infrastructure, and industrial exports
            with EPCG licensing, BIS certification, project imports, and SCOMET
            compliance handled end-to-end.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 border-b-4 border-blue-800 active:border-b-0 active:translate-y-1">
              Explore Solutions
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 border-2 border-slate-400">
              <Truck className="w-5 h-5" />
              ODC Logistics
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-0 bottom-20 z-30 w-1/3">
        <div className="bg-white/95 backdrop-blur shadow-2xl p-6 border-l-8 border-orange-500 transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-600">
                Projects Delivered
              </h3>
              <p className="text-3xl font-black text-orange-600">
                500 MW+
              </p>
              <p className="text-sm text-slate-500">
                Power Plant Equipment Cleared
              </p>
            </div>
          </div>

          <div className="flex gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>Heavy Industry</span> • <span>Automotive</span> •{" "}
            <span>Defense</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEngineering;
