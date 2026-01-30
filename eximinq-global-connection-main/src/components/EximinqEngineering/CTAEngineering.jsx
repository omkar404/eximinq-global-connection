const CTAEngineering = () => {
  return (
    <section className="py-20 bg-blue-800 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Build Faster with Compliant Supply Chains
        </h2>

        <p className="text-blue-100 text-lg mb-10">
          Partner with Eximinq for industrial licensing, project logistics, and
          export incentive optimization.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-sm font-bold text-lg shadow-xl transition-all border-b-4 border-orange-700 active:border-b-0 active:translate-y-1">
            Consult an Expert
          </button>

          <button className="bg-transparent border-2 border-blue-400 hover:bg-blue-700 px-10 py-4 rounded-sm font-bold text-lg transition-all">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAEngineering;
