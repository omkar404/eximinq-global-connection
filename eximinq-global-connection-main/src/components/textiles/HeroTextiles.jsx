import { Shirt, ChevronRight, Tag } from "lucide-react";

const HeroTextiles = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fdf2f8]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2000"
          alt="Fashion Design Studio"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide border border-rose-200">
            <Shirt className="w-4 h-4" />
            <span>Tailored for Apparel Exports</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 font-serif">
            Weaving Success in <br />
            <span className="text-rose-600 italic">Global Textiles</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed font-light">
            From sustainable sourcing to RoSCTL claims, we streamline the
            complexities of the fashion supply chain.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-rose-600 hover:bg-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-rose-500/30 flex items-center justify-center gap-2">
              View Solutions <ChevronRight className="w-5 h-5" />
            </button>

            <button className="bg-white/80 hover:bg-white backdrop-blur-sm text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 border border-slate-200">
              <Tag className="w-5 h-5 text-slate-500" />
              Calculate Drawback
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-10 bottom-20 z-20 w-80">
        <div className="bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 rounded-2xl border border-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Efficiency
            </h3>
            <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
              +24%
            </div>
          </div>

          <div className="mb-6">
            <p className="text-4xl font-bold text-slate-900">₹450 Cr</p>
            <p className="text-sm text-slate-500 mt-1">
              RoSCTL Claims Processed
            </p>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Exporters trust us globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroTextiles;
