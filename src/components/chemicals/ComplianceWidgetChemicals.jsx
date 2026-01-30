import { ChevronRight, TestTube, Atom } from "lucide-react";

const ComplianceWidgetChemicals = () => {
  return (
    <section className="py-16 bg-white relative -mt-10 z-20 max-w-7xl mx-auto px-4 shadow-xl border-t-4 border-emerald-600 rounded-t-xl">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-800">
          Chemical Safety & Compliance Check
        </h2>
        <p className="text-slate-500">
          Search by CAS Number or Category for regulatory requirements.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Organic Chemicals (Ch 29)",
          "Inorganic Chemicals (Ch 28)",
          "Dyes & Pigments (Ch 32)",
        ].map((item) => (
          <button
            key={item}
            className="group p-6 bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all text-left rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <TestTube className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-slate-700 group-hover:text-emerald-700 text-lg">
                  {item}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500" />
            </div>
            <p className="text-sm text-slate-500 pl-8">
              Check BIS, ADC & SCOMET Status
            </p>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mt-8 max-w-2xl mx-auto relative">
        <input
          type="text"
          placeholder="Enter CAS Number (e.g., 67-64-1) or Chemical Name..."
          className="w-full pl-12 pr-32 py-4 rounded-full border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all shadow-sm"
        />
        <Atom className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-6 rounded-full font-bold text-sm hover:bg-slate-800 transition">
          Check
        </button>
      </div>
    </section>
  );
};

export default ComplianceWidgetChemicals;
