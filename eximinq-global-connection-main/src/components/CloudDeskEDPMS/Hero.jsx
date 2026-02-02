import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
 <div>
                <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-red-400">
                    RBI COMPLIANCE ALERT
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Close Open Entries in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">EDPMS</span> & Get e-BRC
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Un-reconciled export payments can land you on the <strong>RBI Caution List</strong>, stopping all your future shipments. We map IRMs to Shipping Bills and regularize your account.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Remove Caution Listing
                    </a>
                    <a href="#services" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        Generate e-BRC
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
