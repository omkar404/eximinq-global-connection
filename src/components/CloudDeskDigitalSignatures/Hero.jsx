import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
            SECURE DIGITAL IDENTITY
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Class 3{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Digital Signature
            </span>{" "}
            for Business and Trade Portals
          </h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            Get end-to-end support for <strong>DSC issuance</strong>,{" "}
            <strong>DGFT and ICEGATE readiness</strong>, token guidance, and
            signatory mapping for regulated digital filings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Order Class 3 DSC
            </a>
            <a
              href="#use-cases"
              className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition"
            >
              Review Portal Use Cases
            </a>
          </div>
        </div>

        <QuickForm />
      </div>
    </section>
  );
};

export default Hero;
