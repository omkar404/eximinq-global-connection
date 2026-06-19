import QuickForm from "./QuickForm";

const Hero = ({ setShowEnrollModal }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
        <div>
          <span class="inline-block bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-500">
            SECURE LOGISTICS
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
              Factory Stuffing
            </span>{" "}
            Permission
          </h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            Stop damaging your cargo at the docks. 
            Get permission to stuff containers at your own warehouse under Customs Supervision or 
            Self-Sealing (RFID).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#fees"
              className="bg-accent-500 hover:bg-accent-600 text-brand-900 text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Apply Now
            </a>
            <a
              href="#methods"
              className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition"
            >
              Self Sealing
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
