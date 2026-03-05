import { useState } from "react";

export default function RecoveryAuditForm() {
    const issues = {
        RoDTEP: [
            "Scroll Expired / Lapsed",
            "Scroll Amount Mismatch",
            "EGM Error (Export General Manifest)",
            "Scrip Generation Issue",
            "Other"
        ],
        IGST: [
            "SB005 Error (Invoice Mismatch)",
            "PFMS Validation Pending",
            "Scroll Generated but Not Credited",
            "EGM Not Filed",
            "Other"
        ],
        Drawback: [
            "Brand Rate Fixation",
            "Supplementary Claim",
            "Drawback Amount Short Credited",
            "Section 74 Re-Export Claim",
            "Other"
        ]
    };

    const [licenseType, setLicenseType] = useState("RoDTEP");

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16 items-center max-w-6xl">

                {/* LEFT CONTENT */}
                <div className="lg:w-1/2">
                    <span className="text-green-400 font-bold uppercase tracking-wider text-sm mb-2 block">
                        Free Financial Check
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Find out how much cash is hiding in your old files.
                    </h2>

                    <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                        Submit your details. We will run a diagnostic on your IEC to find every
                        single unpaid Shipping Bill, expired scroll, or stuck refund legally owed to you.
                    </p>
                </div>

                {/* RIGHT FORM */}
                <div className="lg:w-1/2 w-full">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 border border-slate-200">

                        <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
                            Request Recovery Audit
                        </h3>

                        <form className="space-y-5">

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3"
                                        placeholder="John"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase mb-1">
                                    Company Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase mb-1">
                                    Incentive Type
                                </label>
                                <select
                                    value={licenseType}
                                    onChange={(e) => setLicenseType(e.target.value)}
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white"
                                >
                                    <option value="RoDTEP">RoDTEP / RoSCTL</option>
                                    <option value="IGST">IGST Refund</option>
                                    <option value="Drawback">Duty Drawback</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Est. Amount (Optional)</label>
                                <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="e.g. ₹5 Lakhs" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase mb-1">
                                    Issue Description
                                </label>
                                <select className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white">
                                    {issues[licenseType].map((issue, index) => (
                                        <option key={index} value={issue}>
                                            {issue}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg mt-2"
                            >
                                Recover My Money
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}