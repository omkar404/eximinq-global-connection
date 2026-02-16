const TransparentPricing = () => {
    return (
            <section id="pricing" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Transparent Pricing</span>
                <h2 className="text-4xl font-bold mt-2">Invest in Audit Readiness</h2>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                    Clean up your past data first. Then, subscribe to keep your future compliant.
                </p>
            </div>

            {/* <!-- STEP 1: BACKDATED --> */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8 justify-center">
                    <div className="h-px bg-slate-700 w-12 md:w-32"></div>
                    <h3 className="text-xl font-bold text-blue-300 uppercase tracking-widest text-center">Step 1: Historical Data Clean-up</h3>
                    <div className="h-px bg-slate-700 w-12 md:w-32"></div>
                </div>
                <div className="text-center mb-10 -mt-6">
                    <p className="text-slate-300 font-medium">Get Audit-Ready Now. Pay Later.</p>
                    <p className="text-slate-500 text-sm mt-1">Book now with <span className="text-green-400 font-bold">30% advance</span>. Receive PDF Audit Report immediately. Pay balance when Clouddesk goes live.</p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {/* <!-- 1 Year --> */}
                    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition flex flex-col relative group">
                        <div className="text-slate-300 font-bold mb-1">Last 1 Year Data</div>
                        <div className="text-xs text-slate-500 line-through mb-1">Launch Price: ₹ 35,000</div>
                        <div className="text-2xl font-bold text-white mb-2">₹ 25,000 <span className="text-xs font-normal text-green-400">Early Bird</span></div>
                        <div className="my-4 pt-4 border-t border-slate-700">
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Pay Now (30%)</p>
                            <p className="text-3xl font-bold text-blue-400">₹ 7,500</p>
                            <p className="text-[10px] text-slate-500">Balance ₹ 17,500 on Launch</p>
                        </div>
                        <ul className="text-xs text-slate-400 space-y-2 mb-6 flex-1">
                            <li className="flex gap-2"><i className="fas fa-check text-blue-500"></i> Digitize Shipping Bills</li>
                            <li className="flex gap-2"><i className="fas fa-check text-blue-500"></i> PDF Compliance Report</li>
                            <li className="flex gap-2"><i className="fas fa-check text-blue-500"></i> Saved to Smart Vault</li>
                        </ul>
                        <button className="w-full py-3 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/50 font-bold hover:bg-blue-600 hover:text-white transition text-xs">
                            Book for ₹ 7,500
                        </button>
                    </div>

                    {/* <!-- 2 Years --> */}
                    <div className="bg-slate-800 rounded-2xl p-6 border border-blue-500 relative shadow-lg shadow-blue-900/50 flex flex-col">
                        <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                        <div className="text-white font-bold mb-1">Last 2 Years Data</div>
                        <div className="text-xs text-slate-500 line-through mb-1">Launch Price: ₹ 60,000</div>
                        <div className="text-2xl font-bold text-white mb-2">₹ 45,000 <span className="text-xs font-normal text-green-400">Early Bird</span></div>
                        <div className="my-4 pt-4 border-t border-slate-700">
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Pay Now (30%)</p>
                            <p className="text-3xl font-bold text-blue-400">₹ 13,500</p>
                            <p className="text-[10px] text-slate-500">Balance ₹ 31,500 on Launch</p>
                        </div>
                        <ul className="text-xs text-slate-300 space-y-2 mb-6 flex-1">
                            <li className="flex gap-2"><i className="fas fa-check text-blue-400"></i> 24-Month Digitization</li>
                            <li className="flex gap-2"><i className="fas fa-check text-blue-400"></i> EPCG License Audit</li>
                            <li className="flex gap-2"><i className="fas fa-check text-blue-400"></i> Gap Analysis PDF</li>
                            <li className="flex gap-2"><i className="fas fa-check text-blue-400"></i> Saved to Smart Vault</li>
                        </ul>
                        <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 text-xs shadow-lg shadow-blue-600/20">
                            Book for ₹ 13,500
                        </button>
                    </div>

                    {/* <!-- 3 Years --> */}
                    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition flex flex-col">
                        <div className="text-slate-300 font-bold mb-1">Last 3 Years Data</div>
                        <div className="text-xs text-slate-500 line-through mb-1">Launch Price: ₹ 85,000</div>
                        <div className="text-2xl font-bold text-white mb-2">₹ 60,000 <span className="text-xs font-normal text-green-400">Early Bird</span></div>
                        <div className="my-4 pt-4 border-t border-slate-700">
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Pay Now (30%)</p>
                            <p className="text-3xl font-bold text-blue-400">₹ 18,000</p>
                            <p className="text-[10px] text-slate-500">Balance ₹ 42,000 on Launch</p>
                        </div>
                        <ul className="text-xs text-slate-400 space-y-2 mb-6 flex-1">
                            <li className="flex gap-2"><i className="fas fa-check text-blue-500"></i> 36-Month Deep Clean</li>
                            <li className="flex gap-2"><i className="fas fa-check text-blue-500"></i> Risk & Liability Report</li>
                            <li className="flex gap-2"><i className="fas fa-check text-blue-500"></i> Saved to Smart Vault</li>
                        </ul>
                        <button className="w-full py-3 rounded-lg border border-slate-600 text-slate-300 font-bold hover:bg-slate-700 text-xs">
                            Book for ₹ 18,000
                        </button>
                    </div>

                    {/* <!-- 6 Years --> */}
                    <div className="bg-slate-800 rounded-2xl p-6 border border-purple-500/50 hover:border-purple-500 transition relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-purple-900/10 pointer-events-none"></div>
                        <div className="text-purple-300 font-bold mb-1">Last 6 Years Archive</div>
                        <div className="text-xs text-slate-500 line-through mb-1">Launch Price: ₹ 1,50,000</div>
                        <div className="text-2xl font-bold text-white mb-2">₹ 1,00,000 <span className="text-xs font-normal text-green-400">Early Bird</span></div>
                        <div className="my-4 pt-4 border-t border-purple-500/30">
                            <p className="text-[10px] text-purple-300 uppercase font-bold mb-1">Pay Now (30%)</p>
                            <p className="text-3xl font-bold text-purple-400">₹ 30,000</p>
                            <p className="text-[10px] text-slate-500">Balance ₹ 70,000 on Launch</p>
                        </div>
                        <ul className="text-xs text-slate-400 space-y-2 mb-6 flex-1">
                            <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> Full 72-Month Archives</li>
                            <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> Active License Status</li>
                            <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> Audit-Ready Vault</li>
                        </ul>
                        <button className="w-full py-3 rounded-lg bg-purple-600/20 border border-purple-500 text-purple-200 font-bold hover:bg-purple-600 hover:text-white transition text-xs">
                            Book for ₹ 30,000
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- STEP 2: ANNUAL SAAS --> */}
            <div>
                <div className="flex items-center gap-4 mb-8 justify-center">
                    <div className="h-px bg-slate-700 w-12 md:w-32"></div>
                    <h3 className="text-xl font-bold text-blue-300 uppercase tracking-widest text-center">Step 2: Subscription</h3>
                    <div className="h-px bg-slate-700 w-12 md:w-32"></div>
                </div>

                {/* <!-- Billing Toggle --> */}
                <div className="flex justify-center mb-10">
                    <div className="bg-slate-800 p-1 rounded-xl flex items-center relative">
                        <button onclick="togglePricing('monthly')" id="btn-monthly" className="px-6 py-2 rounded-lg text-sm font-bold transition-all text-slate-400 hover:text-white">Monthly</button>
                        <button onclick="togglePricing('annual')" id="btn-annual" className="px-6 py-2 rounded-lg text-sm font-bold transition-all bg-blue-600 text-white shadow-lg">Annually</button>
                        <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                            Pay 10, Get 2 Free
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* <!-- Starter --> */}
                    <div className="bg-white text-slate-900 rounded-3xl p-8 border border-slate-200">
                        <h3 className="font-bold text-xl">Starter</h3>
                        <p className="text-slate-500 text-sm mt-1">For small exporters.</p>
                        <div className="my-6">
                            <span className="price-annual block">
                                <span className="text-xs text-slate-400 line-through block">₹ 35,000/yr</span>
                                <span className="text-4xl font-bold">₹ 25,000</span><span className="text-slate-500">/yr</span>
                            </span>
                            <span className="price-monthly hidden">
                                <span className="text-xs text-slate-400 line-through block">₹ 3,500/mo</span>
                                <span className="text-4xl font-bold">₹ 2,500</span><span className="text-slate-500">/mo</span>
                            </span>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600 mb-8">
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> <strong>500</strong> Shipment Sets / Year</li>
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> Basic Compliance Checks</li>
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> Service Store Access</li>
                        </ul>
                        <a href="#early-access" className="block text-center w-full py-3 rounded-xl bg-slate-100 font-bold hover:bg-slate-200 transition">Join Waitlist</a>
                    </div>

                    {/* <!-- Growth --> */}
                    <div className="bg-white text-slate-900 rounded-3xl p-8 border-2 border-blue-600 relative shadow-2xl">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                        <h3 className="font-bold text-xl">Growth</h3>
                        <p className="text-slate-500 text-sm mt-1">For active trading houses.</p>
                        <div className="my-6">
                            <span className="price-annual block">
                                <span className="text-xs text-slate-400 line-through block">₹ 70,000/yr</span>
                                <span className="text-4xl font-bold">₹ 50,000</span><span className="text-slate-500">/yr</span>
                            </span>
                            <span className="price-monthly hidden">
                                <span className="text-xs text-slate-400 line-through block">₹ 7,000/mo</span>
                                <span className="text-4xl font-bold">₹ 5,000</span><span className="text-slate-500">/mo</span>
                            </span>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600 mb-8">
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> <strong>1,500</strong> Shipment Sets / Year</li>
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> <strong>Full Compliance Audit</strong></li>
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> EPCG & AA Tracking</li>
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> <strong>₹ 10,000</strong> Wallet Credit Included</li>
                        </ul>
                        <a href="#early-access" className="block text-center w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition">Join Waitlist</a>
                    </div>

                    {/* <!-- Enterprise --> */}
                    <div className="bg-white text-slate-900 rounded-3xl p-8 border border-slate-200">
                        <h3 className="font-bold text-xl">Enterprise</h3>
                        <p className="text-slate-500 text-sm mt-1">For multinational operations.</p>
                        <div className="my-6">
                            <span className="text-4xl font-bold">Custom</span>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600 mb-8">
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> Unlimited Shipment Sets</li>
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> <strong>Advanced Compliance Audit</strong></li>
                            <li className="flex gap-2"><i className="fas fa-star text-amber-500"></i> <strong>Quarterly Audit Strategy Review</strong></li>
                            <li className="flex gap-2"><i className="fas fa-check text-green-500"></i> Dedicated Compliance Officer</li>
                        </ul>
                        <a href="#early-access" className="block text-center w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-700 transition">Contact Sales</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};
export default TransparentPricing;