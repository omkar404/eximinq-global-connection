import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
        <div>
          <span className="inline-block bg-accent-500 text-brand-900 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent-400">
            GLOBAL STANDARD 1 (GS1)
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Official{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
              Barcode Registration
            </span>{" "}
            for Your Products
          </h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            Planning to sell on Amazon, Flipkart, or Retail Stores? You need a globally unique GTIN (EAN-13). We facilitate GS1 India registration and barcode generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button
              onClick={() =>
                setShowEnrollModal({
                  open: true,
                  actionType: "Start Design Search",
                  source: "services/barcode-registration",
                })
              }
              className="bg-accent-500 hover:bg-accent-600 text-brand-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Start Design Search
            </button> */}
            <a
              href="#fees"
              className="bg-accent-500 hover:bg-accent-600 text-brand-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Get Pricing
            </a>
            <a
              href="#about"
              className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* FORM SECTION */}
        <QuickForm />
      </div>
    </section>
  );
};

export default Hero;
