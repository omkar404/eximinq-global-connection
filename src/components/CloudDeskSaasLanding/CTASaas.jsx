import React from "react";
import { ArrowRight, Users } from "lucide-react";

        //   <button
        //     onClick={() => setShowModal(true)}
        //     className="px-10 py-4 bg-teal-500 font-bold rounded-xl flex items-center"
        //   >
        //     Enroll Now <ArrowRight size={20} className="ml-2" />
        //   </button>

          // style="width: 45%

const CTASaas = ({ setShowModal }) => {
  return (
    // <section className="py-20 bg-indigo-900 text-white">
    //   <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

    //     <div className="text-center md:text-left mb-8 md:mb-0">
    //       <h2 className="text-3xl font-bold mb-4">Ready to modernize your EXIM operations?</h2>
    //       <p className="text-indigo-200 max-w-md">
    //         500+ businesses already use CloudDesk SaaS. Early adopters join free.
    //       </p>
    //     </div>

    //     <div className="flex flex-col items-center gap-4">
    //       <button
    //         onClick={() => setShowModal(true)}
    //         className="px-10 py-4 bg-teal-500 font-bold rounded-xl flex items-center"
    //       >
    //         Enroll Now <ArrowRight size={20} className="ml-2" />
    //       </button>

    //       <span className="flex items-center text-xs text-indigo-300">
    //         <Users size={14} className="mr-1" /> Limited spots available
    //       </span>
    //     </div>
    //   </div>
    // </section>

        <section id="highlights" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">The Operating System Overview</h2>
                <p className="text-slate-500 mt-2">See exactly what you get. No vague promises.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* <!-- 1. COMPLIANCE (Visual) --> */}
                <div className="group">
                    <div className="ui-card rounded-2xl p-2 mb-6 h-64 flex flex-col justify-center bg-slate-100 relative overflow-hidden">
                        {/* -<!-- UI MOCKUP: Compliance Table --> */}
                        <div className="absolute inset-x-4 top-4 bottom-0 bg-white rounded-t-xl shadow-lg border border-slate-200 p-4">
                            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">Compliance Audit Log</span>
                                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">2 Critical Issues</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-times-circle text-red-500 text-xs"></i>
                                        <div>
                                            <div className="text-xs font-bold text-slate-800">SB #992812</div>
                                            <div className="text-[10px] text-slate-500">IGST Error: SB005 Mismatch</div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-red-600">Action Req.</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-exclamation-triangle text-amber-500 text-xs"></i>
                                        <div>
                                            <div className="text-xs font-bold text-slate-800">SB #992813</div>
                                            <div className="text-[10px] text-slate-500">EGM Not Filed</div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-amber-600">Pending</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2"><i className="fas fa-balance-scale text-amber-500"></i> <span className="text-amber-500">Automated Compliance</span></h3>
                    <p className="text-slate-600 mt-2 text-sm">
                        Don't wait for your CA to tell you. Our system checks every Shipping Bill for <strong>IGST Errors (SB005)</strong> and <strong>EGM Failures</strong> daily.
                    </p>
                </div>

                {/* <!-- 2. SCHEMES (Visual) --> */}
                <div className="group">
                    <div className="ui-card rounded-2xl p-2 mb-6 h-64 flex flex-col justify-center bg-slate-100 relative overflow-hidden">
                        {/* <!-- UI MOCKUP: Scheme Progress --> */}
                        <div className="absolute inset-x-4 top-4 bottom-0 bg-white rounded-t-xl shadow-lg border border-slate-200 p-4">
                            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">License Tracking</span>
                                <span className="text-[10px] text-blue-600 font-bold">Updated: Today</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="font-bold text-slate-700">EPCG #02291</span>
                                        <span className="font-mono text-green-600">45% Done</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                                        <span>Duty Saved: ₹45L</span>
                                        <span>Obligation: $321K</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="font-bold text-slate-700">Adv Auth #3399</span>
                                        <span className="font-mono text-red-500">Expiring Soon</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2"><i className="fas fa-chart-pie text-purple-500"></i> Scheme Analytics</h3>
                    <p className="text-slate-600 mt-2 text-sm">
                        Visual tracking for <strong>EPCG</strong> and <strong>Advance Authorization</strong>. Know exactly how much export obligation is pending vs. fulfilled.
                    </p>
                </div>

                {/* <!-- 3. SMART VAULT (Visual) --> */}
                <div className="group">
                    <div className="ui-card rounded-2xl p-2 mb-6 h-64 flex flex-col justify-center bg-slate-100 relative overflow-hidden">
                        {/* <!-- UI MOCKUP: File Stack --> */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 w-64 relative z-10">
                                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                        <i className="fas fa-folder-open"></i>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-800">SB #992812 Set</div>
                                        <div className="text-[10px] text-slate-500">5 Linked Docs</div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-slate-600"><i className="fas fa-file-pdf text-red-500"></i> Shipping Bill.pdf</div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600"><i className="fas fa-file-invoice text-blue-500"></i> Comm_Invoice.pdf</div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600"><i className="fas fa-file-contract text-amber-500"></i> Bank_eBRC.pdf</div>
                                </div>
                            </div>
                            {/* <!-- Stack effect --> */}
                            <div className="absolute w-60 h-20 bg-slate-200 rounded-xl -bottom-2 z-0 transform scale-95"></div>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2"><i className="fas fa-vault text-blue-600"></i> Smart Vault "One Doc"</h3>
                    <p className="text-slate-600 mt-2 text-sm">
                        We don't charge by the PDF. <strong>1 Credit = 1 Full Shipment Set</strong>. Store the Shipping Bill, e-BRC, Invoice, PL, and BL together forever.
                    </p>
                </div>

                {/* <!-- 4. SERVICE STORE (Visual) --> */}
                <div className="group">
                    <div className="ui-card rounded-2xl p-2 mb-6 h-64 flex flex-col justify-center bg-slate-100 relative overflow-hidden">
                        {/* <!-- UI MOCKUP: Service Card --> */}
                        <div className="absolute inset-x-8 top-8 bottom-8 bg-white rounded-xl shadow-md border border-slate-200 flex flex-col">
                            <div className="h-24 bg-slate-800 rounded-t-xl flex items-center justify-center">
                                <span className="text-white font-bold"><i className="fas fa-gavel"></i> Legal Reply</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div className="text-xs text-slate-500">Drafting reply to Customs SCN.</div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="font-bold text-slate-900">15k Credits</span>
                                    <button className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded hover:bg-blue-700">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2"><i className="fas fa-shopping-bag text-green-600"></i> Service Store</h3>
                    <p className="text-slate-600 mt-2 text-sm">
                        Use your <strong>Wallet</strong> or <strong>Credit Line</strong> to book services instantly. No invoices, no waiting.
                    </p>
                </div>

            </div>
        </div>
    </section>


  );
};

export default CTASaas;
