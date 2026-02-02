import { 
  Sun,
  Zap,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  LayoutGrid
} from "lucide-react";

const HeroSolar = () => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1600";
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-sky-900/40 to-amber-500/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
          alt="Solar Power Plant"
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/90 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>MNRE & BIS Compliant Solutions</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
            Empowering the <br />
            <span className="text-amber-400">Green Revolution</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed font-light">
            Navigating the complexities of ALMM, Project Imports, and Carbon Credits for a sustainable energy future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2 border-b-4 border-amber-700 active:border-b-0 active:translate-y-1">
              Explore Services <ChevronRight className="w-5 h-5" />
            </button>

            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
              <LayoutGrid className="w-5 h-5" />
              Check ALMM List
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-0 bottom-20 z-20 w-1/3">
        <div className="bg-white/95 backdrop-blur shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-l-2xl p-6 border-l-8 border-sky-500 transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-sky-100 p-3 rounded-full text-sky-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Capacity Added
              </h3>
              <p className="text-3xl font-extrabold text-amber-500">
                2.5 GW
              </p>
              <p className="text-sm text-slate-500">
                Projects Supported in 2024
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {[
              "Utility Scale Solar",
              "Rooftop C&I",
              "Wind Farms",
              "Hybrid Storage"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-sky-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSolar;
