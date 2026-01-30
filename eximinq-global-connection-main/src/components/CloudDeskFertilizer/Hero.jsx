import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section id = "Home" className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
<div>
                <span className="inline-block bg-accent-500 text-brand-900 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent-400">
                    FERTILIZER CONTROL ORDER, 1985
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">Fertiliser Import</span> License & Compliance
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Importing Urea, DAP, NPK, or Bio-stimulants? Secure your <strong>Importer Registration Certificate</strong> from the Central/State Agriculture Department and manage <strong>iFMS</strong> filings seamlessly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-brand-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Get License
                    </a>
                    <a href="#categories" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        View Product List
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
