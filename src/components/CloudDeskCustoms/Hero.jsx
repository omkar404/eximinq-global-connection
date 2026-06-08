import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section id = "home" className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
 <div>
                <span class="inline-block bg-accent-500 text-customs-900 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent-400">
                    MANDATORY CUSTOMS COMPLIANCE
                </span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">Customs Registration</span> for EPCG & Advance Licenses
                </h1>
                <p class="text-lg text-slate-200 mb-8 leading-relaxed">
                    Don't let your machinery import get stuck. We handle the physical and online registration of your DGFT license with the Customs Bond Section and manage the essential Bond/Bank Guarantee submission.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" class="bg-accent-500 hover:bg-accent-600 text-customs-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Start Bond Execution
                    </a>
                    <a href="#bond" class="bg-transparent border border-white hover:bg-white hover:text-customs-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        Check BG Requirements
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
