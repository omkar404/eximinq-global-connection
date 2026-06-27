import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section id = "home" className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
<div>
                <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-red-400">
                    AVOID CUSTOMS ACTION
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Export Obligation Period <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">(EOP) Extension</span> for Advance Authorisation and EPCG
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Work with an EOP extension consultant to review shortfall, plan composition-fee treatment, and file the right DGFT extension route before export-obligation delay becomes duty and interest exposure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#eligibility" className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Check Eligibility
                    </a>
                    <a href="#fees" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        Review Extension Cost
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
