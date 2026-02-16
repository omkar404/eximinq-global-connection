const secureSaas = ({setShowModal}) => {
    return (
    <section id="early-access" className="py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Secure Your Launch Offer</h2>
                    <p className="text-slate-600">
                        Join the waiting list for <strong>April 19, 2026</strong>. Early sign-ups get a <span className="text-blue-600 font-bold">20% Discount</span> on "Historical Data Clean-up" packages.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('You are on the list! We will contact you before March 19, 2026.'); }}>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="+91 98765 43210" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="you@company.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Interest</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white">
                            <option>Annual SaaS Subscription only</option>
                            <option>1-Year Data Clean-up + SaaS</option>
                            <option>2-Year Data Clean-up + SaaS</option>
                            <option>3-Year Audit Shield + SaaS</option>
                            <option>6-Year Archive + SaaS</option>
                        </select>
                    </div>
                    <button 
                      onClick={() => setShowModal(true)}
                     className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition transform hover:-translate-y-1">
                        Join Priority List
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">We respect your inbox. Zero spam.</p>
                </form>
            </div>
        </div>
    </section>
    );
};

export default secureSaas;