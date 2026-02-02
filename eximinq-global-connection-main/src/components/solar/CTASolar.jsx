const CTASolar = () => {
  return (
    <section className="py-20 bg-sky-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Energize Your Trade Strategy
        </h2>

        <p className="text-sky-100 text-lg mb-10">
          Ensure your renewable energy projects are compliant, cost-efficient,
          and executed without delays.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all border-b-4 border-amber-700 active:border-b-0 active:translate-y-1">
            Consult a Solar Expert
          </button>

          <button className="bg-transparent border-2 border-sky-300 hover:bg-sky-700 px-10 py-4 rounded-lg font-bold text-lg transition-all">
            Download MNRE Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASolar;
