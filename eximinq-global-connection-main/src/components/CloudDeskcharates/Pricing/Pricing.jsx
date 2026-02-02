import React from "react";
import { Search, CreditCard, FileText, Clock } from "lucide-react";

const Pricing = ({
  searchTerm,
  setSearchTerm,
  activeTab,
  setActiveTab,
  filteredRates,
  filteredRequests,
}) => {
  return (
      <section id="pricing" className="py-20 relative">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Service Rate Card</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Transparent pricing with no hidden charges. Filter by service name to find exactly what you need.
            </p>
          </div>

          {/* Controls */}
          <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search services (e.g., 'IEC', 'GST')..." 
                className="w-full bg-slate-800/50 border border-slate-700 focus:border-sky-500 rounded-full py-3 pl-12 pr-6 text-white outline-none focus:ring-2 focus:ring-sky-500/20 transition-all placeholder:text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-2 bg-slate-800/50 p-1 rounded-full border border-slate-700 overflow-x-auto max-w-full">
              <button 
                onClick={() => setActiveTab("fixed")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'fixed' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Fixed Rates
              </button>
              <button 
                onClick={() => setActiveTab("request")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'request' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                On Request
              </button>
              <button 
                onClick={() => setActiveTab("billing")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'billing' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Billing Info
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="max-w-5xl mx-auto bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl min-h-[400px]">
            {activeTab === 'fixed' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900/50 border-b border-slate-700 text-slate-400 text-xs uppercase tracking-wider">
                      <th className="p-6 font-semibold">Service Request</th>
                      <th className="p-6 font-semibold text-right hidden sm:table-cell">Standard Corp Rate</th>
                      <th className="p-6 font-semibold text-right text-sky-400">CHA Special Rate</th>
                      <th className="p-6 font-semibold text-right">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {filteredRates.length > 0 ? filteredRates.map((rate, index) => (
                      <tr key={index} className="group hover:bg-slate-700/30 transition-colors">
                        <td className="p-6">
                          <div className="font-medium text-white group-hover:text-sky-300 transition-colors">{rate.service}</div>
                          <div className="text-xs text-slate-500 mt-1">{rate.category}</div>
                        </td>
                        <td className="p-6 text-right text-slate-500 line-through decoration-slate-600 hidden sm:table-cell">
                          ₹ {rate.corporate.toLocaleString()}
                        </td>
                        <td className="p-6 text-right">
                          <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full font-bold border border-sky-500/20">
                            ₹ {rate.special.toLocaleString()}
                          </span>
                        </td>
                        <td className="p-6 text-right text-green-400 font-medium">
                          ₹ {(rate.corporate - rate.special).toLocaleString()}
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={4} className="p-12 text-center text-slate-500">
                          No services found matching "{searchTerm}"
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'request' && (
              <div className="p-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredRequests.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-all">
                      <span className="text-slate-300">{item}</span>
                      <span className="text-xs font-bold px-2 py-1 bg-slate-700 rounded text-slate-400">Get Quote</span>
                    </div>
                  ))}
                 </div>
                 {filteredRequests.length === 0 && (
                    <div className="text-center text-slate-500 py-8">No services found matching "{searchTerm}"</div>
                 )}
              </div>
            )}
            
            {activeTab === 'billing' && (
              <div className="p-8 md:p-12">
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Billing & Payment Instructions</h3>
                    <p className="text-slate-400">Please review the following terms regarding invoicing and reimbursements.</p>
                  </div>

                  <div className="grid gap-6">
                    <div className="flex items-start space-x-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <FileText className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-blue-200 mb-2">Official Fees</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Official government fees are <strong>not included</strong> in the service charges. These will be charged as extra and must be reimbursed separately.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                      <div className="p-3 bg-sky-500/10 rounded-lg">
                        <Clock className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-sky-200 mb-2">Billing Cycle</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Billing will be raised for all Service requests executed during the month on the <strong>5th of the Next Month</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                      <div className="p-3 bg-green-500/10 rounded-lg">
                        <CreditCard className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-green-200 mb-2">Payment Terms</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Payments are due within <strong>15 Days</strong> from the date of invoice issuance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Table Footer - Only show on Fixed/Request tabs as Billing tab has this info inline */}
            {activeTab !== 'billing' && (
              <div className="bg-slate-900/80 p-6 border-t border-slate-700 flex flex-col md:flex-row justify-between text-xs text-red-500 gap-4">
                <div className="flex items-start space-x-2">
                  <FileText className="w-4 h-4 mt-0.5" />
                  <div>
                    <p>* Official Fees will be extra & reimbursed separately.</p>
                    <p>* Billing raised on 5th of next month for all executed requests.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CreditCard className="w-4 h-4 mt-0.5" />
                  <p>Payment Terms: 15 Days from Invoice Issuance.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
  );
};

export default Pricing;
