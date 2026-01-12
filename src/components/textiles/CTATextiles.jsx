const CTATextiles = () => {
  return (
    <section className="py-24 bg-rose-50 relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
          Design Your Export Strategy
        </h2>

        <p className="text-slate-600 text-xl mb-12 font-light">
          Don't let logistics fray your timelines. Partner with Eximinq for a
          seamless “Sketch to Ship” experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-slate-900 text-white hover:bg-slate-800 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all">
            Book Consultation
          </button>

          <button className="bg-white text-slate-900 border border-slate-200 hover:border-rose-300 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-sm">
            View Scrip Rates
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTATextiles;
