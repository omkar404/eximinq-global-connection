import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section id = "Home" className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
<div>
                <span className="inline-block bg-accent-500 text-brand-900 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent-400">
                    GLOBAL QUALITY STANDARD
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Boost Credibility with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">ISO Certification</span>
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    Eligible for Govt Tenders & Exports. Get <strong>ISO 9001:2015</strong>, 14001, 45001, and 27001 certificates. Choose between IAF Accredited or Non-IAF options based on your need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-brand-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Request Quote
                    </a>
                    <a href="#standards" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
                        View Standards
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
