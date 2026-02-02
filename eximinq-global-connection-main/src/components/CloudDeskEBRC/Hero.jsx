import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
<div>
                <span class="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
                    BIOSECURITY CLEARANCE
                </span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Hassle-Free <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Quarantine</span> Approvals
                </h1>
                <p class="text-lg text-slate-200 mb-8 leading-relaxed">
                    Importing livestock, pet animals, plants, or timber? We manage the rigorous AQCS & PQMS documentation, inspection, and NOC process to ensure 100% compliance.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#plant" class="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Plant Quarantine
                    </a>
                    <a href="#animal" class="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        Animal Quarantine
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
