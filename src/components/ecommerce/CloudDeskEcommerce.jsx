import React from "react";
import {
  RotateCcw,
  FileText,
  Activity,
  Box,
  AlertTriangle,
  CreditCard,
  ChevronRight,
} from "lucide-react";

const CloudDeskEcommerce = () => {
  return (
      <section id="clouddesk" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-block bg-violet-600 text-white font-bold px-4 py-1.5 rounded-full text-xs mb-8 tracking-widest uppercase shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                EXIMINQ CLOUD DESK
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Parcel Intelligence <span className="text-violet-400">Hub</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                A unified dashboard to track B2C shipments, manage returns authorization, and reconcile payment gateway receipts with export documents.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-slate-800 p-4 rounded-2xl text-orange-400 border border-slate-700">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Returns Portal</h4>
                    <p className="text-slate-400 text-sm mt-1">Automated generation of re-import documents for rejected parcels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-slate-800 p-4 rounded-2xl text-violet-400 border border-slate-700">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">e-BRC Matcher</h4>
                    <p className="text-slate-400 text-sm mt-1">Auto-reconcile thousands of small invoices with bank realizations.</p>
                  </div>
                </div>
              </div>

              <button className="mt-12 bg-white text-violet-900 hover:bg-violet-50 px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Login to Hub <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-violet-600 blur-[150px] opacity-20 rounded-full"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-2 shadow-2xl">
                <div className="bg-[#0f172a] rounded-2xl p-8">
                  {/* Mock Dashboard UI */}
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h4 className="text-slate-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                         <Activity className="w-4 h-4 text-green-500" /> Live Operations
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono mt-1">GATEWAY: NHAVA SHEVA ECCS</p>
                    </div>
                    <div className="flex items-center gap-2 bg-violet-900/30 text-violet-400 px-3 py-1 rounded-full border border-violet-800 text-xs font-bold">
                        SYNCED
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 p-5 rounded-xl flex justify-between items-center border-l-4 border-violet-500 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center gap-4">
                        <Box className="text-violet-400 w-5 h-5" />
                        <div>
                           <p className="text-sm font-bold text-slate-200">Order #EXP-9921</p>
                           <p className="text-xs text-slate-500">CSB-V Filed • LEO Generated</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-green-400 bg-green-900/20 px-3 py-1 rounded-full">CLEARED</span>
                    </div>

                    <div className="bg-slate-800/50 p-5 rounded-xl flex justify-between items-center border-l-4 border-orange-500 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center gap-4">
                        <AlertTriangle className="text-orange-400 w-5 h-5" />
                        <div>
                           <p className="text-sm font-bold text-slate-200">Return: Order #882</p>
                           <p className="text-xs text-slate-500">Action: Identity Check Required</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-orange-400 bg-orange-900/20 px-3 py-1 rounded-full">HOLD</span>
                    </div>
                    
                    <div className="bg-slate-800/50 p-5 rounded-xl flex justify-between items-center border-l-4 border-blue-500 hover:bg-slate-800 transition-colors">
                       <div className="flex items-center gap-4">
                        <CreditCard className="text-blue-400 w-5 h-5" />
                        <div>
                           <p className="text-sm font-bold text-slate-200">IGST Refund</p>
                           <p className="text-xs text-slate-500">Batch: Oct-2024</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">PROCESSING</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between text-xs text-slate-500 font-mono">
                     <span>PARCELS TODAY: 420</span>
                     <span>DUTY SAVED: ₹85K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CloudDeskEcommerce;
