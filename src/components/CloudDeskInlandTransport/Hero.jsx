import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
<div>
                <span class="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
                    FIRST & LAST MILE CONNECTIVITY
                </span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Reliable <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Inland Transportation</span> for Factories & Ports
                </h1>
                <p class="text-lg text-slate-200 mb-8 leading-relaxed">
                    Connecting your warehouse to the world. We provide GPS-enabled Trailers for Factory Stuffing, Port Delivery, and ICD movements with guaranteed on-time performance.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" class="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Get Trucking Rates
                    </a>
                    <a href="#fleet" class="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        View Fleet
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
