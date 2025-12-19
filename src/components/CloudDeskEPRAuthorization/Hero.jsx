import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
 <div>
                <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-green-400">
                    ENVIRONMENTAL COMPLIANCE
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">EPR Authorization</span> for Responsible Business
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Mandatory CPCB Registration for Producers, Importers, and Brand Owners (PIBOs). We manage your compliance for E-waste, Plastic, Battery, and Waste Tyres end-to-end.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Check Liability
                    </a>
                    <a href="#categories" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        View Categories
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
