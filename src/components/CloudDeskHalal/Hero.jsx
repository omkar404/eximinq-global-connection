import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section id = "Home" className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
<div>
                <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-red-400">
                    ACCESS GLOBAL MARKETS
                </span>
               <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span class="text-accent-400">Halal Certification</span> for Global Trade Success
                </h1>
                    <p class="text-lg text-slate-100 mb-8 leading-relaxed">
                    Ensure your products meet Sharia standards. Mandatory for exporting Food, Cosmetics, and Pharmaceuticals to GCC, Malaysia, Indonesia, and other Islamic nations.
                </p>
            <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" class="bg-accent-500 hover:bg-accent-600 text-brand-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Get Certified
                    </a>
                    <a href="#sectors" class="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        View Eligible Products
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
