import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
<div>
                <span class="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
                    CENTRAL DRUG STANDARD CONTROL ORGANIZATION
                </span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Simplifying <span class="text-accent-400">CDSCO Registration</span> for Importers
                </h1>
                <p class="text-lg text-slate-100 mb-8 leading-relaxed">
                    Navigate India's rigorous regulatory landscape. We provide end-to-end licensing for Medical Devices (MD-14), Drugs (Form 10), and Cosmetics (Form 43) via the SUGAM portal.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" class="bg-accent-500 hover:bg-accent-600 text-brand-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Classify Your Product
                    </a>
                    <a href="#medical-devices" class="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        Medical Devices
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
