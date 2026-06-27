import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-white/30">
            DGFT IMPORT MONITORING COMPLIANCE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Import Management Registration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Consultant
            </span>{" "}
            for Monitored Imports
          </h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            Get support for <strong>SIMS</strong>, <strong>PIMS</strong>,{" "}
            <strong>NFMIMS</strong>, <strong>CIMS</strong>, and product-specific
            import monitoring filings so your shipment is ready before customs
            pressure begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#systems"
              className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Review Monitoring Systems
            </a>
            <a
              href="#process"
              className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition"
            >
              See Process Flow
            </a>
          </div>
        </div>

        <QuickForm />
      </div>
    </section>
  );
};

export default Hero;
