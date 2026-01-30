import React, { useMemo } from "react";
import { Search, ArrowRight, FileText } from "lucide-react";

const ServiceCatalogStartup = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  SERVICE_CATALOG,
  CATEGORIES
}) => {
  const filtered = useMemo(() => {
    return SERVICE_CATALOG.filter((i) => {
      const s = searchTerm.toLowerCase();
      return (
        i.title.toLowerCase().includes(s) ||
        i.description.toLowerCase().includes(s)
      ) && (activeCategory === "All" || i.category === activeCategory);
    });
  }, [searchTerm, activeCategory, SERVICE_CATALOG]);

  return (
    <section id="solutions" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-sky-500 font-bold uppercase text-sm">
              Services for Startups
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Everything You Need to Start
            </h2>
          </div>

          {/* Search */}
          <div className="mt-6 md:mt-0 w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Find a service (e.g., 'IEC', 'GST')..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-full py-3 pl-12 pr-6 text-white outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border ${
                activeCategory === cat
                  ? "bg-sky-600 border-sky-600 text-white shadow-lg"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((service, i) => (
              <div
                key={i}
                className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-sky-500/30 hover:shadow-xl transition"
              >
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-bold px-2 py-1 bg-slate-800 text-sky-400 rounded uppercase">
                    {service.category}
                  </span>
                  {activeCategory === "All" && (
                    <FileText className="w-5 h-5 text-slate-600" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-slate-400 hover:text-white transition"
                >
                  Check Eligibility <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block p-4 rounded-full bg-slate-800 mb-4">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-300">
                No services found
              </h3>
              <p className="text-slate-500 mt-2">Try searching for “IEC” or “GST”.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCatalogStartup;
