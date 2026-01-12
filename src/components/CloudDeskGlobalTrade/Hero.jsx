import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section id = "home" className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">

      {/* Radial Background Pattern (Correct Placement) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <span className="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
            GLOBAL LOGISTICS NETWORK
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Smart Freight Forwarding for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Global Trade
            </span>
          </h1>

          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            We negotiate the best rates so you don't have to. End-to-end cargo
            booking for Sea (FCL/LCL) and Air shipments with 100% visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Request Freight Quote
            </a>

            <a
              href="#services"
              className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – QuickForm */}
        <div className="mt-10 md:mt-0">
          <QuickForm />
        </div>

      </div>
    </section>
  );
};

export default Hero;
