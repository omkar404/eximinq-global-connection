import QuickForm from "./QuickForm";

const Hero = ({setShowEnrollModal}) => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
        <div>
                <span className="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
                    INDIAN CUSTOMS GATEWAY
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">ICEGATE Registration</span> & AD Code Approval
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Unlock the power of paperless trade. We handle your ICEGATE ID creation, Digital Signature (DSC) linking, and Authorized Dealer (AD) Code registration at all Indian ports.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                       onClick={() => setShowEnrollModal({open: true, type: "ENROLL" })}
                    className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                    
                        Get ICEGATE ID
                    </button>
                    <a href="#ad-code" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        Link AD Code
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
