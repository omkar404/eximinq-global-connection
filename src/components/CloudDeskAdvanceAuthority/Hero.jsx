import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">

      {/* Radial Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* MAIN GRID — TEXT LEFT, FORM RIGHT */}
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <span className="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
            ZERO DUTY IMPORT
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Maximize Profits with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Advance Authorisation
            </span>
          </h1>

          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            Import raw materials, fuel, oil, and catalysts without paying Customs Duty.
            We handle everything from SION Norm Fixation to final EODC Redemption.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="#"
              className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              New Advance License Request
            </a>

            <a
              href="#contact"
              className="bg-white text-brand-900 hover:bg-slate-100 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Get Feasibility Report
            </a>

            <a
              href="#norms"
              className="bg-transparent border border-white hover:bg-white hover:text-brand-900 
              text-center font-semibold py-3 px-8 rounded-lg transition"
            >
              Check Norms
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative z-10">
          <QuickForm />
        </div>

      </div>
    </section>
  );
};

export default Hero;
