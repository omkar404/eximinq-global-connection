import { ChevronRight } from "lucide-react";

const categories = [
  "Smartphones & Wearables",
  "Laptops & Servers",
  "Batteries & Cells",
];

const ComplianceWidgetElectronics = () => {
  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">
            Hardware Compliance Checker
          </h2>
          <p className="text-slate-400">
            Select device category to view BIS & WPC norms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <button
              key={item}
              className="group p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 transition text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-200 group-hover:text-cyan-400">
                  {item}
                </span>
                <ChevronRight className="text-slate-500 group-hover:text-cyan-400" />
              </div>
              <p className="text-sm text-slate-500">
                Check CRS & ETA requirements
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceWidgetElectronics;
