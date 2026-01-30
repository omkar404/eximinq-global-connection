const CTAChemicals = () => {
  return (
    <section className="py-20 bg-emerald-800 text-white relative overflow-hidden">
      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Reactive Solutions for a Complex Industry
        </h2>

        <p className="text-emerald-100 text-lg mb-10">
          From molecule to market, ensure your chemical supply chain remains
          compliant, safe, and efficient with Eximinq.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary CTA */}
          <button className="bg-white text-emerald-800 hover:bg-emerald-50 px-10 py-4 rounded-md font-bold text-lg shadow-xl transition-all border-b-4 border-emerald-200 active:border-b-0 active:translate-y-1">
            Consult a Specialist
          </button>

          {/* Secondary CTA */}
          <button className="bg-transparent border-2 border-emerald-400 hover:bg-emerald-700 px-10 py-4 rounded-md font-bold text-lg transition-all">
            Check QCO List
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAChemicals;
