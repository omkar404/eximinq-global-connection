import QuickForm from "./QuickForm";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-[#123a73] via-[#1b4b8f] to-[#204d90] pb-24 pt-40 text-white"
    >
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-200">
            Technology Upgrade
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            DGFT EPCG Scheme for{" "}
            <span className="text-[#ffb11b]">Zero Duty Capital Goods Import</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-200">
            Work with an EPCG scheme consultant to import machinery, spares,
            moulds, and dies with major customs-duty savings while planning
            export obligation, installation certificate compliance, and EODC
            closure from day one.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#eligibility"
              className="rounded-lg bg-[#f6a313] px-8 py-3 text-center font-bold text-white shadow-lg transition hover:bg-[#df930f]"
            >
              Check Eligibility
            </a>
            <a
              href="#fees"
              className="rounded-lg border border-white/80 px-8 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-brand-900"
            >
              Start EPCG Enquiry
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <QuickForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
