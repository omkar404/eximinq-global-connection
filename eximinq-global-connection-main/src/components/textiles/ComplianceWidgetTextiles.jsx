import { Scissors, Shirt, ChevronRight } from "lucide-react";

const ComplianceWidgetTextiles = () => {
  const categories = [
    "Knitted Garments (Ch 61)",
    "Woven Garments (Ch 62)",
    "Home Textiles (Ch 63)",
  ];

  return (
    <section className="py-20 bg-white relative -mt-10 z-20 max-w-7xl mx-auto px-4 shadow-2xl rounded-3xl font-sans border border-slate-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 font-serif">
          Apparel Export Guide
        </h2>
        <p className="text-slate-500 mt-2">
          Identify requirements for your product category.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((item, idx) => (
          <button
            key={idx}
            className="group p-8 bg-slate-50 rounded-2xl hover:bg-rose-50 transition-all text-left border border-slate-100 hover:border-rose-200 relative overflow-hidden"
          >
            {/* Background Icon */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Scissors className="w-16 h-16 text-rose-600" />
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-4 relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Shirt className="w-6 h-6" />
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-rose-500" />
            </div>

            {/* Content */}
            <h3 className="font-bold text-slate-800 text-xl mb-2 relative z-10">
              {item}
            </h3>
            <p className="text-sm text-slate-500 relative z-10 group-hover:text-rose-700">
              Check RoSCTL Rates & US/EU Norms
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ComplianceWidgetTextiles;
