import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section id = "home" className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
 <div>
                <span className="inline-block bg-accent-500 text-finance-900 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent-400">
                    ICAI APPROVED CHARTERED ACCOUNTANTS
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    In-House CA Certification for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">Export Turnover</span>
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Fast, reliable, and compliant CA Certificates required by DGFT, Customs, and RBI for all major export incentive and obligation schemes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-finance-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Start Certification
                    </a>
                    <a href="#schemes" className="bg-transparent border border-white hover:bg-white hover:text-finance-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        View Schemes
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
