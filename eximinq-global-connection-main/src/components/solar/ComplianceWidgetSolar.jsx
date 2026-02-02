import {
  ChevronRight,
  Sun,
  Plug,
  Wind,
} from "lucide-react";

const complianceItems = [
  {
    title: "Solar PV Modules",
    subtitle: "ALMM & IEC 61215 / 61730",
    icon: <Sun className="w-6 h-6" />,
    note: "MNRE Approved Models Only",
  },
  {
    title: "Inverters & Batteries",
    subtitle: "BIS CRS (IS 16221 / 16169)",
    icon: <Plug className="w-6 h-6" />,
    note: "Mandatory Before Import",
  },
  {
    title: "Wind Turbine Components",
    subtitle: "Project Imports & Type Certification",
    icon: <Wind className="w-6 h-6" />,
    note: "ODC & Route Approvals",
  },
];

const ComplianceWidgetSolar = () => {
  return (
    <section className="py-16 bg-white relative -mt-10 z-20 max-w-7xl mx-auto px-4 rounded-2xl shadow-xl border border-slate-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Renewable Compliance Checker
        </h2>
        <p className="text-slate-500 mt-2">
          Select your component to view mandatory MNRE & BIS requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {complianceItems.map((item, idx) => (
          <button
            key={idx}
            className="group p-6 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50 transition-all text-left relative overflow-hidden"
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100 rounded-bl-full -mr-8 -mt-8 opacity-40 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-amber-500 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500" />
              </div>

              <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-700">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1 group-hover:text-amber-800">
                {item.subtitle}
              </p>

              <span className="inline-block mt-4 text-xs font-bold uppercase tracking-wide bg-slate-100 text-slate-600 px-3 py-1 rounded-full group-hover:bg-amber-200 group-hover:text-amber-800">
                {item.note}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ComplianceWidgetSolar;
