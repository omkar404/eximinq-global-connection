import { ChevronRight } from "lucide-react";

const categories = [
  "API (Active Ingredients)",
  "Medical Devices",
  "Formulations",
];

const ComplianceWidget = () => {
  return (
    <section className="relative -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-12 px-6 md:px-10">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-800">
              Pharma Compliance Checker
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Select your product category to see required compliances.
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((item) => (
              <button
                key={item}
                className="group p-6 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-slate-700 group-hover:text-teal-700 text-lg">
                    {item}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500" />
                </div>
                <p className="text-sm text-slate-500">
                  View CDSCO & DGFT requirements
                </p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComplianceWidget;
