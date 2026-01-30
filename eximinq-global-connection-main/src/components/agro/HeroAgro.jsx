import { Wheat, ChevronRight, Utensils, Sun, CheckCircle } from "lucide-react";

const HeroAgro = () => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2000";
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-green-900/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1625246333195-58197bd47d26?auto=format&fit=crop&q=80&w=2000"
          alt="Agriculture Field"
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide border border-green-200">
            <Wheat className="w-4 h-4" />
            <span>APEDA & FSSAI Compliant</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
            Cultivating Global <br />
            <span className="text-amber-400">Agro Trade</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-200 mb-8 leading-relaxed font-light">
            From farm gate to foreign port, we manage Phytosanitary norms, Cold
            Chain logistics, and Food Safety regulations with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2">
              Explore Services <ChevronRight className="w-5 h-5" />
            </button>

            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
              <Utensils className="w-5 h-5" /> Check FSSAI Status
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-0 bottom-20 z-20 w-1/3">
        <div className="bg-white/95 backdrop-blur shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-l-2xl p-6 border-l-8 border-amber-500 transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-800">
                Export Volume
              </h3>
              <p className="text-3xl font-extrabold text-green-700">
                50k Tons
              </p>
              <p className="text-sm text-stone-500">
                Perishables Handled in 2024
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-stone-500 uppercase tracking-wide">
            {[
              "Basmati Rice",
              "Indian Spices",
              "Frozen Shrimp",
              "Fresh Mangoes",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAgro;
