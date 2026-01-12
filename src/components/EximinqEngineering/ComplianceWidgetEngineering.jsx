import { ChevronRight } from "lucide-react";

const categories = [
  "Heavy Machinery & ODC",
  "Electronics & IT (CRO)",
  "Automotive Components",
];

const ComplianceWidgetEngineering = () => {
  return (
    <section className="relative -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white shadow-xl border-t-4 border-blue-600 p-10">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-800">
              Engineering Compliance Check
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Select your industry vertical to view mandatory certifications.
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((item) => (
              <button
                key={item}
                className="group relative p-6 bg-slate-50 border border-slate-200 hover:border-orange-500 hover:bg-white hover:shadow-lg transition-all text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:opacity-100 transition" />
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <span className="font-bold text-slate-700 group-hover:text-orange-600 text-lg">
                    {item}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                </div>
                <p className="text-sm text-slate-500 relative z-10">
                  Check BIS, WPC & EPR norms
                </p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComplianceWidgetEngineering;
