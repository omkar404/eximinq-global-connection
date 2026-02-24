import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import TopBar from "../Common/TopBar";

export default function StrategicSolutions() {
    return (
        <div className="bg-slate-50 text-slate-800 antialiased selection:bg-teal-200 selection:text-teal-900">

            {/* ================= NAV ================= */}
            <TopBar />

            {/* ================= HERO ================= */}
            <header className="relative bg-slate-900 text-white pt-40 pb-32 overflow-hidden">

                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-multiply blur-[128px] opacity-20 animate-float"></div>

                    <div
                        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply blur-[128px] opacity-20 animate-float"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">

                    {/* Live Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-teal-400">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                        Live: SaaS Audit Platform
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
                        Compliance isn't just{" "}
                        <br className="hidden md:block" />
                        filing papers. It's <br />
                        <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                            recovering profit.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        We replace generic CHAs with specialist auditors. Using our proprietary{" "}
                        <strong>CloudDesk SaaS</strong>, we identify stuck incentives,
                        automate daily filings, and bulletproof your AEO status.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                        <a
                            href="#capital-recovery"
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold rounded-xl transition shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                            Start Financial Audit
                        </a>

                        <a
                            href="#virtual-desk"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition backdrop-blur-sm flex items-center justify-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            Replace Your Ops Team
                        </a>

                    </div>

                    {/* Trust Bar */}
                    <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-60">

                        <div>
                            <div className="text-2xl font-bold text-white">₹12 Cr+</div>
                            <div className="text-xs uppercase tracking-wider text-slate-400">
                                Incentives Recovered
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="text-xs uppercase tracking-wider text-slate-400">
                                AEO Audit Success
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-white">2 Hrs</div>
                            <div className="text-xs uppercase tracking-wider text-slate-400">
                                Avg. SIMS Filing
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-white">Zero</div>
                            <div className="text-xs uppercase tracking-wider text-slate-400">
                                Demurrage Recorded
                            </div>
                        </div>

                    </div>

                </div>
            </header>

            {/* ================= CAPITAL RECOVERY ================= */}
            <section id="capital-recovery" className="py-24 bg-white relative">
                <div className="container mx-auto px-4 relative z-10">

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                        <div className="max-w-2xl">
                            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                                Pillar 1
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Capital Recovery & Incentives
                            </h2>
                            <p className="text-lg text-slate-500">
                                Most exporters lose 2-5% of their margin due to unredeemed licenses
                                and expired scripts. We audit your last 3 years of shipping bills
                                to recover this lost cash.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold uppercase rounded-full">
                                    Urgent
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition">
                                EPCG & Advance Auth
                            </h3>

                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                Redeem stuck Bank Guarantees. We handle EODC retrieval, Bond
                                cancellation, and fix "missing shipping bill" errors in DGFT.
                            </p>

                            <ul className="text-sm text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-4">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                                    EOP Extension
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                                    DFIA License Redemption
                                </li>
                            </ul>

                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold text-slate-400">
                                    TAT: 45 Days
                                </span>
                                <a
                                    href="/epcg-closure-services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-600 font-bold text-sm"
                                >
                                    Audit Now →
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold uppercase rounded-full">
                                    Cash Flow
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition">
                                RoDTEP & Refund Recovery
                            </h3>

                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                Recover lost scripts due to "Scroll Expired" errors. We fix EGM
                                mismatches and re-validate expired scrolls on the portal.
                            </p>

                            <ul className="text-sm text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-4">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                    IGST Refund Resolution (SB005)
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                    RoDTEP Scrip Trading
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                    Interest Equalisation Claims
                                </li>
                            </ul>

                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold text-slate-400">
                                    Success: 98%
                                </span>
                                <button className="text-indigo-600 font-bold text-sm">
                                    <a
                                        href="/rodtep-refund-recovery"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 font-bold text-sm"
                                    >
                                        Check Status → 
                                    </a>
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                </div>
                                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold uppercase rounded-full">
                                    High ROI
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition">
                                Brand Rate Fixation
                            </h3>

                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                Don't settle for low All Industry Rates (AIR). We calculate actual
                                duties paid on inputs and fix a special higher rate for you.
                            </p>

                            <ul className="text-sm text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-4">
                                <li className="flex items-center space-x-2 mb-3">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                                    {/* Section 74 Re-Export Drawback */}
                                    <a
                                        href="/services/duty-drawback"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-600 text-sm hover:text-indigo-600 transition"
                                    >
                                        Section 74 Re-Export Drawback
                                    </a>
                                </li>
                                <li className="flex items-center space-x-2 mb-3">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                                    {/* Customs Duty Payments (ECL) */}
                                    <a
                                        href="/services/duty-payment-ecl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-600 text-sm hover:text-indigo-600 transition"
                                    >
                                        Customs Duty Payments (ECL)
                                    </a>
                                </li>
                            </ul>

                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold text-slate-400">
                                    Gain: +2-4% Margin
                                </span>
                                {/* <button className="text-orange-600 font-bold text-sm">
                                    <a
                                        href="/services/duty-drawback"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 font-bold text-sm"
                                    >
                                    </a>
                                </button> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= RISK AUDIT ================= */}
            <section
                id="complex-imports"
                className="py-24 bg-slate-900 text-white relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2 block">
                            Pillar 2
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Complex Regulatory Compliance
                        </h2>
                        <p className="text-lg text-slate-400">
                            We manage the specialized licenses that generic CHAs fail to handle.
                            Zero demurrage guarantee for technical imports.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Import Monitoring */}
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition group">
                            <h4 className="font-bold text-lg mb-2 text-teal-400 group-hover:text-white">
                                Import Monitoring
                            </h4>

                            <ul className="space-y-2 text-sm text-slate-400 mb-4">
                                <li>
                                    <Link to="/sims" className="hover:text-white transition">
                                        • SIMS (Steel Import)
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/nims" className="hover:text-white transition">
                                        • NIMS (Coal Import)
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/pims" className="hover:text-white transition">
                                        • PIMS (Paper/Chip Import)
                                    </Link>
                                </li>
                            </ul>

                            <p className="text-xs text-slate-500">
                                Filed within 2 hours of invoice receipt. 
                            </p>
                        
                        <button className="text-indigo-600 font-bold text-sm">
                                    <a
                                        href="/services/import-management-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 font-bold text-sm"
                                    >
                                        Click → 
                                    </a>
                        </button>
                        </div>

                        {/* BIS & EPR */}
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition group">
                            <h4 className="font-bold text-lg mb-2 text-blue-400 group-hover:text-white">
                                BIS , EPR & ISO
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-400 mb-4">
                                <li>
                                    <Link to="/services/bis-registration" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="hover:text-white transition">
                                        • BIS / CRS Registration   
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/epr-authorization" 
                                    target="_blank"
                                    rel="noopener noreferrer"  
                                    className="hover:text-white transition whitespace-nowrap">
                                        • EPR (Plastic Waste,E-Waste & Battery)
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/iso-certification" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="hover:text-white transition">
                                        • ISO Registration
                                    </Link>
                                </li>
                            </ul>

                            <p className="text-xs text-slate-500">
                                Mandatory for Electronics & Packaging.
                            </p>
                        </div>

                        {/* Specialized Licensing */}
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition group">
                            <h4 className="font-bold text-lg mb-2 text-purple-400 group-hover:text-white">
                                Specialized Licensing
                            </h4>

                            <ul className="space-y-2 text-sm text-slate-400 mb-4">
                                <li>
                                    <Link to="/services/scomet-licensing" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition">
                                        • SCOMET (Dual Use)
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/wpc-license"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="hover:text-white transition">
                                        • WPC (ETA) Wireless
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/fertiliser-import-license"
                                    target="_blank"
                                    rel="noopener noreferrer"  
                                    className="hover:text-white transition">
                                        • Fertilizer Import Authorization
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/defence-exim-license"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="hover:text-white transition">
                                        • Defence Exim License
                                    </Link>
                                </li>
                            </ul>

                            <p className="text-xs text-slate-500">
                                For Defense, Telecom & Agri sectors.
                            </p>
                        {/* <button className="text-indigo-600 font-bold text-sm">
                                    <a
                                        href="/rodtep-refund-recovery"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 font-bold text-sm"
                                    >
                                        Click → 
                                    </a>
                        </button> */}
                        </div>

                        {/* Food & Pharma */}
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition group">
                            <h4 className="font-bold text-lg mb-2 text-yellow-400 group-hover:text-white">
                                Food & Pharma
                            </h4>

                            <ul className="space-y-2 text-sm text-slate-400 mb-4">
                                <li>
                                    <Link to="/services/fssai-licensing"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="hover:text-white transition">
                                        • FSSAI Central License
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/aqcs-pqms"
                                    target="_blank"
                                    rel="noopener noreferrer"  
                                    className="hover:text-white transition">
                                        • AQCS / PQMS Clearance
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/cdsco-compliance"
                                    target="_blank"
                                    rel="noopener noreferrer"  
                                    className="hover:text-white transition">
                                        • CDSCO (Drug Controller)
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services/horticulture"
                                    target="_blank"
                                    rel="noopener noreferrer"  
                                    className="hover:text-white transition">
                                        • Horticulture Registration
                                    </Link>
                                </li>
                            </ul>

                            <p className="text-xs text-slate-500">
                                Single window clearance support.
                            </p>
                        {/* <button className="text-indigo-600 font-bold text-sm ">
                                    <a
                                        href="/rodtep-refund-recovery"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 font-bold text-sm"
                                    >
                                        Click → 
                                    </a>
                        </button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIRTUAL DESK ================= */}
            <section id="industrial" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Industrial Setup & Manufacturing Support
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* IGCR Rules */}
                        <div className="p-6 border border-slate-200 rounded-xl hover:border-teal-500 transition hover:shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg">IGCR Rules</h4>
                            </div>

                            <p className="text-sm text-slate-600 mb-4">
                                Import of Goods at Concessional Rate. Essential for manufacturers
                                to reduce duty burden on raw materials.
                            </p>

                            <a href="/services/igcr-returns"
                                target="_blank"
                                rel="noopener noreferrer"

                                className="text-teal-600 text-sm font-bold">
                                Start IGCR →
                            </a>
                        </div>

                        {/* Factory Licenses */}
                        <div className="p-6 border border-slate-200 rounded-xl hover:border-teal-500 transition hover:shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg">Factory Licenses</h4>
                            </div>

                            <ul className="text-sm text-slate-600 space-y-1 mb-4">
                                {/* <li>• Industrial License</li> */}
                                <li>
                                 <a
                                        href="/services/industrial-license"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                      •  Industrial License
                                </a>
                                </li>
                                {/* <li>• IEM (Industrial Entrepreneur Memo)</li> */}
                                <li>
                                 <a
                                        href="/services/iem-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                      •  IEM (Industrial Entrepreneur Memo)
                                </a>
                                </li>
                                {/* <li>• Factory License</li> */}
                                <li>
                                 <a
                                        href="/services/factory-license"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                      •  Factory License
                                </a>
                                </li>
                            </ul>

                            {/* <a href="/services/factory-license"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 text-sm font-bold">
                                Get Licensed →
                            </a> */}
                        </div>

                        {/* Environmental */}
                        <div className="p-6 border border-slate-200 rounded-xl hover:border-teal-500 transition hover:shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg">Environmental</h4>
                            </div>

                            <ul className="text-sm text-slate-600 space-y-1 mb-4">
                                <li>• Pollution Control (CTE/CTO)</li>
                                <li>• UN IIP Certification</li>
                            </ul>

                            <a href="/services/pollution-control"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 text-sm font-bold">
                                Ensure Compliance →
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Product-Specific Compliance
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">

                        <a
                            href="/services/lmpc-registration"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-indigo-500 transition block"
                        >
                            <div className="font-bold text-slate-800">
                                LMPC Registration
                            </div>
                            <div className="text-xs text-slate-500">
                                Legal Metrology (Packaging)
                            </div>
                        </a>

                        <a
                            href="/services/free-sale-certificate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-indigo-500 transition block"
                        >
                            <div className="font-bold text-slate-800">
                                Free Sale Cert
                            </div>
                            <div className="text-xs text-slate-500">
                                For Medical/Food Export
                            </div>
                        </a>

                        <a
                            href="/services/no-due-certificate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-indigo-500 transition block"
                        >
                            <div className="font-bold text-slate-800">
                                No Due Cert
                            </div>
                            <div className="text-xs text-slate-500">
                                Govt. Dues Clearance
                            </div>
                        </a>

                        <a
                            href="/services/no-incentive-certificate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-indigo-500 transition block"
                        >
                            <div className="font-bold text-slate-800">
                                No Incentive Cert
                            </div>
                            <div className="text-xs text-slate-500">
                                Avoid Double Dipping
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section id="risk-audit" className="py-24 bg-white">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-16">
                        <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                            Pillar 3: Risk Audit & Disputes
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Bulletproof your Compliance
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Card 1 */}
                        <div className="group border border-slate-200 bg-white p-8 rounded-2xl hover:border-slate-400 transition-colors">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                AEO & MOOWR Consultancy
                            </h3>

                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-green-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <a
                                        href="/services/aeo-certification"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        AEO T1/T2/T3 Certification & SOP Maintenance
                                    </a>
                                </li>

                                <li className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-green-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <a
                                        href="/services/moowr-scheme"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        MOOWR (Bonded Warehouse) Setup
                                    </a>
                                </li>

                                <li className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-green-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <a
                                        href="/services/svb-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        SVB (Special Valuation Branch) Registration
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="group border border-slate-200 bg-white p-8 rounded-2xl hover:border-slate-400 transition-colors">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                Dispute Resolution & Hearings
                            </h3>

                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-red-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <a
                                        href="/services/customs-adjudication"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >   
                                        Customs Adjudication (SCN Reply)
                                    </a>
                                </li>

                                <li className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-red-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <a
                                        href="/services/prc-relaxation"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        DGFT Policy Relaxation (PRC) Representation
                                    </a>
                                </li>

                                <li className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-red-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <a
                                        href="/services/rmcc-alert-removal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        RMCC Alert Removal
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section
                id="virtual-desk"
                className="py-24 bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] opacity-30"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
                    <span className="px-4 py-1 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-sm font-bold uppercase tracking-wider mb-6 inline-block">
                        Pillar 4: The "Virtual Desk" Model
                    </span>

                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                        Stop paying full-time salaries <br /> for part-time compliance.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">

                        {/* Daily Operations */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl">
                            <h4 className="font-bold text-lg text-teal-400 mb-2">
                                Daily Operations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                                {/* <li>• Certificate of Origin (Preferential/Non-Pref)</li> */}
                                 <li>
                                 <a
                                        href="/services/certificate-of-origin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                      •  Certificate of Origin (Preferential/Non-Pref)
                                </a>
                                </li>
                                {/* <li>• AD Code Registration</li> */}
                                <li>
                                <a
                                        href="/services/ad-code-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                       • AD Code Registration
                                </a>
                                </li>    
                                {/* <li>• ICEGATE Profile Management</li> */}
                                <li>
                                 <a
                                        href="/services/icegate-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                       • ICEGATE Profile Management
                                </a> 
                                </li>
                                {/* <li>• GST LUT Filing</li> */}
                                <li>
                                 <a
                                        href="/services/gst-lut-filing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                       • GST LUT Filing
                                </a> 
                                </li>
                            </ul>
                        </div>

                        {/* Payment Tracking */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl">
                            <h4 className="font-bold text-lg text-teal-400 mb-2">
                                Payment Tracking
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                                {/* <li>• e-BRC & EDPMS Closure</li> */}
                                <li>
                                 <a
                                        href="/services/edpms-ebrc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                       • e-BRC & EDPMS Closure
                                </a> 
                                </li>
                                {/* <li>• REX Registration (GSP)</li> */}
                                 <li>
                                 <a
                                        href="/services/rex-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                       • REX Registration (GSP)
                                </a> 
                                </li>
                                {/* <li>• No Due </li> */}
                                 <li>
                                 <a
                                        href="/services/interest-equalisation-scheme"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                       • Interest Equalisation
                                </a> 
                                </li>
                                {/* <li>• No Incentive Certificates</li> */}
                                <li>
                                 <a
                                        href="/services/rodtep-rosctl-trading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                       • Rodtep / Rosctl Script Trading
                                </a> 
                                </li>
                            </ul>
                        </div>

                    </div>

                    <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-slate-100 transition shadow-lg">
                        {/* Get Retainer Quote (Starts ₹25k/per months) */}
                         <a
                                        href="/services/certificate-of-origin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Get Exporter Quote (Starts ₹25k/per months)
                                </a>
                    </button>
                </div>
            </section>

            <section id="logistics" className="py-20 bg-slate-100">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Logistics & Infrastructure
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    Freight Forwarding
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/freight-forwarding" target="_blank" rel="noopener noreferrer">
                                    Sea/Air Booking
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    CHA Services
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/cha-services" target="_blank" rel="noopener noreferrer">
                                    Customs Clearance
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    Warehousing
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/warehousing-solutions" target="_blank" rel="noopener noreferrer">
                                    Bonded & General
                                </a>
                            </div>
                        </div>


                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    Factory Stuffing
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/factory-stuffing" target="_blank" rel="noopener noreferrer">
                                    On-site Packing
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    Inland Transport
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/inland-transportation" target="_blank" rel="noopener noreferrer">
                                    Factory to Port
                                </a>
                            </div>
                        </div>



                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    DPD Registration
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/dpd-registration" target="_blank" rel="noopener noreferrer">
                                    Direct Port Delivery
                                </a>
                            </div>
                        </div>


                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    Project Cargo
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/project-cargo" target="_blank" rel="noopener noreferrer">
                                    ODC Handling
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center hover:border-teal-500 transition">
                            <div className="font-bold text-slate-800">
                                <div className="font-bold text-slate-800">
                                    Marine Insurance
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                <a href="/services/marine-insurance" target="_blank" rel="noopener noreferrer">
                                    Risk Coverage
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section
                id="registrations"
                className="py-16 bg-white border-t border-slate-200"
            >
                <div className="container mx-auto px-4 max-w-6xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                        Business Registration & Certifications Directory
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-slate-600 border border-slate-200 rounded-lg">

                            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Business Setup
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Digital & Tax
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Certification
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Intellectual Property
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="bg-white border-b hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        {/* IEC (Import Export Code) */}
                                <a
                                        href="/services/import-export-code"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        IEC (Import Export Code)
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* DSC (Digital Signature) */}
                                <a
                                        href="/services/icegate-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        DSC (Digital Signature)
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* ISO Certification */}
                                <a
                                        href="/services/iso-certification"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        ISO Certification
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Trademark Registration */}
                                <a
                                        href="/services/trademark-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Trademark Registration
                                </a>
                                    </td>
                                </tr>

                                <tr className="bg-white border-b hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        {/* E-RCMC Issuance */}
                                 <a
                                        href="/services/e-rcmc-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        E-RCMC Issuance
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* GST Returns */}
                                 <a
                                        href="/services/gst-returns"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        GST Returns
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Star Export House */}
                                 <a
                                        href="/services/star-export-house"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Star Export House
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Copyright Filing */}
                                 <a
                                        href="/services/copyright-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Copyright Filing
                                </a>
                                    </td>
                                </tr>

                                <tr className="bg-white border-b hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        {/* GeM Registration */}
                                 <a
                                        href="/services/gem-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        GeM Registration
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* CA Certification */}
                                 <a
                                        href="/services/ca-certification-export-import"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        CA Certification
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Halal Certification */}
                                 <a
                                        href="/services/halal-certification"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Halal Certification
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Brand Registration */}
                                 <a
                                        href="/services/brand-copyright"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Brand 
                                </a>
                                    </td>
                                </tr>

                                <tr className="bg-white hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        {/* Customs License */}
                                 <a
                                        href="/services/customs-license-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Customs License
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Barcode Registration */}
                                 <a
                                        href="/services/barcode-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Barcode Registration
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Compliance Audit */}
                                 <a
                                        href="/services/compliance-audit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Compliance Audit
                                </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Design Registration */}
                                 <a
                                        href="/services/design-registration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition"
                                    >
                                        Design Registration
                                </a>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </section>

            <Footer />


        </div>
    );
}