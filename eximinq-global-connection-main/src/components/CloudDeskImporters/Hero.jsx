import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
<div>
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-white/30">
                    ONE-STOP COMPLIANCE SHOP
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Essential Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Importers</span>
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Specialized in registering regulated goods under Import Monitoring Systems (IMS). We ensure your cargo clears customs without delay by handling SIMS, NFMIMS, CIMS, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#ims" className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        View IMS Services
                    </a>
                    <a href="#contact" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        Contact Us
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
