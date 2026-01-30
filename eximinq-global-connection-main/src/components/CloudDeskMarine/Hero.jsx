import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-[#164e96] text-white pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
<div>
                <span className="inline-block bg-brand-800 text-accent-400 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-brand-600">
                  ENGINEERING LOGISTICS
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    We Move What Others Can't:  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Project Cargo Specialists</span>
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    End-to-end handling for Over Dimensional Cargo (ODC) and Heavy Machinery. From Route Surveys to Hydraulic Axle delivery, we engineer the perfect move.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-3 px-8 rounded-lg shadow-lg transition">
                        Request Site Survey
                    </a>
                    <a href="#obligation" className="bg-transparent border border-white hover:bg-white hover:text-brand-900 text-center font-semibold py-3 px-8 rounded-lg transition">
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
