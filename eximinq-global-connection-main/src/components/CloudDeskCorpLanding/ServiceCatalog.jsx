import React from "react";
import { Search, FileText, ArrowRight } from "lucide-react";

const ServiceCatalog = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  filteredServices,
  categories,
}) => {
  return (
  <section id="solutions" className="py-24 relative bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-sky-500 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Comprehensive Trade Solutions</h2>
            </div>
            
            {/* Search Bar */}
            <div className="mt-6 md:mt-0 w-full md:w-96 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Find a service (e.g., 'EPCG', 'Refund')..." 
                className="w-full bg-slate-900 border border-slate-800 focus:border-sky-500 rounded-full py-3 pl-12 pr-6 text-white outline-none focus:ring-2 focus:ring-sky-500/20 transition-all placeholder:text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat 
                    ? 'bg-sky-600 border-sky-600 text-white shadow-lg shadow-sky-900/50' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>


        {/* Services Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl
                           hover:border-sky-500/30 transition group flex flex-col"
              >
                <div>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-sky-400">
                    {s.category}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 mt-3">
                    {s.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 mb-6">{s.description}</p>
                </div>

                <a
                  href="#contact"
                  className="flex items-center text-slate-400 hover:text-white text-sm mt-auto"
                >
                  Request Consultation
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <Search size={32} className="mx-auto mb-4 text-slate-500" />
              <p className="text-slate-400 text-lg">No results found.</p>
            </div>
          )}
        </div> */}


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.length > 0 ? filteredServices.map((service, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-900/10 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-2 py-1 bg-slate-800 text-sky-400 rounded uppercase tracking-wide">
                      {service.category}
                    </span>
                    {activeCategory === 'All' && <FileText className="w-5 h-5 text-slate-600 group-hover:text-sky-500 transition-colors" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>
                
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-slate-500 group-hover:text-white transition-colors">
                  Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            )) : (
              <div className="col-span-full py-20 text-center">
                <div className="inline-block p-4 rounded-full bg-slate-800 mb-4">
                  <Search className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-medium text-slate-300">No services found</h3>
                <p className="text-slate-500 mt-2">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>

      </div>
    </section>
  );
};

export default ServiceCatalog;
