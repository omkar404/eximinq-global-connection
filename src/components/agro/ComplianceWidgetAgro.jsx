import { ChevronRight } from "lucide-react";

const ComplianceWidgetAgro = () => {
  return (
    <section className="py-16 bg-white relative -mt-10 z-20 max-w-7xl mx-auto px-4 rounded-2xl shadow-xl border border-stone-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-stone-800">
          Agro Export Checker
        </h2>
        <p className="text-stone-500">
          Select commodity to view mandatory compliances.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Cereals & Grains (Rice/Wheat)",
          "Spices & Condiments",
          "Marine Products",
        ].map((item) => (
          <button
            key={item}
            className="group p-6 rounded-xl border border-stone-200 hover:border-green-500 hover:bg-green-50 transition-all text-left relative overflow-hidden"
          >
            {/* Decorative bubble */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-center mb-2 relative z-10">
              <span className="font-bold text-stone-700 group-hover:text-green-700 text-lg">
                {item}
              </span>
              <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-green-500" />
            </div>

            <p className="text-sm text-stone-500 group-hover:text-green-800 relative z-10">
              Check APEDA / MPEDA Norms
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ComplianceWidgetAgro;
