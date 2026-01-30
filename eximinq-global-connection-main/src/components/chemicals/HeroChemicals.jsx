import {
  Biohazard,
  ChevronRight,
  FileWarning,
  Atom,
  CheckCircle,
} from "lucide-react";

const HeroChemicals = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-950/80 to-slate-900/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
          alt="Chemical Laboratory"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-1.5 rounded-sm text-sm font-bold mb-6 uppercase tracking-wider">
            <Biohazard className="w-4 h-4" />
            Hazmat Certified Logistics
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Catalyzing Your <br />
            <span className="text-emerald-400">Chemical Supply Chain</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Master global regulations with expert support for REACH
            Registration, BIS Quality Orders, and Dangerous Goods (DG)
            transportation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center gap-2 border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1">
              Explore Services <ChevronRight className="w-5 h-5" />
            </button>

            <button className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2 border-2 border-slate-400">
              <FileWarning className="w-5 h-5" />
              Download SDS Guide
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-0 bottom-20 z-20 w-1/3">
        <div className="bg-white/95 backdrop-blur shadow-2xl p-6 border-l-8 border-amber-500 transform translate-x-4 hover:translate-x-0 transition-transform duration-300 rounded-l-xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600">
              <Atom className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                REACH Registered
              </h3>
              <p className="text-3xl font-black text-emerald-600">
                500+ Substances
              </p>
              <p className="text-sm text-slate-500">
                EU & UK Market Access Secured
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-500 uppercase">
            {[
              "Agrochemicals",
              "API Intermediates",
              "Petrochemicals",
              "Specialty Chems",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroChemicals;
