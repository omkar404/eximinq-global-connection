const CTAgro = () => {
  return (
    <section className="py-20 bg-green-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Harvest the Benefits of Compliance
        </h2>
        <p className="text-green-100 text-lg mb-10">
          Ensure your agricultural products reach global markets fresh and
          compliant.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 px-10 py-4 rounded-lg font-bold">
            Consult an Agro Expert
          </button>
          <button className="border-2 border-green-300 px-10 py-4 rounded-lg font-bold">
            Download APEDA Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAgro;
