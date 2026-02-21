import { Footer } from "../Common/Footer";
import TopBar from "../Common/TopBar";

export default function CloudDeskRefund() {
    return (
        <div className="bg-slate-50 text-slate-800 antialiased selection:bg-teal-200 selection:text-teal-900">
            <TopBar />

            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/3 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[80px] opacity-40 -z-10 -translate-x-1/3 translate-y-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text Content */}
                        <div className="lg:w-1/2">

                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-green-50 border border-green-100 text-xs font-bold text-green-700 uppercase tracking-wider shadow-sm">
                                <svg
                                    className="w-4 h-4"
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
                                Found Money
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                                Don't Write Off Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">
                                    Stuck Incentives.
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-light">
                                Expired RoDTEP scrolls and IGST errors (SB005) are not dead
                                losses. We re-validate your data with Customs and recover the
                                cash straight to your ledger.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">

                                <a
                                    href="#audit-form"
                                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition flex items-center justify-center shadow-xl shadow-slate-900/20 group"
                                >
                                    Check Recoverable Amount
                                    <svg
                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>

                                <div className="flex items-center justify-center gap-2 px-6 py-4 text-slate-600 font-semibold bg-white rounded-xl border border-slate-200 shadow-sm hover:border-indigo-500 transition cursor-default">
                                    <svg
                                        className="w-5 h-5 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Success Fee Model
                                </div>

                            </div>

                            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                                <p>
                                    Success Rate:{" "}
                                    <span className="font-bold text-green-600">
                                        98% Recovery
                                    </span>{" "}
                                    on Audit Findings
                                </p>
                            </div>

                        </div>

                        {/* Card Graphic */}
                        <div className="lg:w-1/2 relative">

                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-teal-500 rounded-3xl transform rotate-3 blur-3xl opacity-20 animate-pulse-slow"></div>

                            <div className="relative bg-white border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-10 max-w-md mx-auto transform hover:-translate-y-2 transition duration-500">

                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-inner">
                                        <svg
                                            className="w-7 h-7"
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

                                    <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full tracking-wide border border-green-200 shadow-sm">
                                        Cash Flow
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                    RoDTEP & Refund Recovery
                                </h2>

                                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                                    Recover lost scripts due to "Scroll Expired" errors. We fix EGM
                                    mismatches and re-validate expired scrolls on the portal.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "IGST Refund Resolution (SB005)",
                                        "RoDTEP Scrip Trading",
                                        "Interest Equalisation Claims",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100"
                                        >
                                            <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center mr-3 text-white text-xs">
                                                ✓
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                                            Success
                                        </p>
                                        <p className="text-2xl font-bold text-slate-900">98%</p>
                                    </div>

                                    <a
                                        href="#audit-form"
                                        className="text-indigo-600 font-bold flex items-center hover:text-indigo-800 transition"
                                    >
                                        Check Status
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                            The Leakage
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Why is your money stuck?
                        </h2>
                        <p className="text-slate-600 text-lg">
                            90% of unclaimed incentives are due to these three technical errors
                            in the ICEGATE system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-indigo-200 transition group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 font-bold text-xl relative z-10">
                                1
                            </div>
                            <h3 className="font-bold text-xl mb-3 relative z-10">
                                Scroll Expired
                            </h3>
                            <p className="text-slate-500 leading-relaxed relative z-10">
                                You missed generating the RoDTEP/RoSCTL scrip within the time
                                limit. The portal shows it as lapsed.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-indigo-200 transition group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 font-bold text-xl relative z-10">
                                2
                            </div>
                            <h3 className="font-bold text-xl mb-3 relative z-10">
                                SB005 Error (IGST)
                            </h3>
                            <p className="text-slate-500 leading-relaxed relative z-10">
                                Invoice mismatch between GSTN and ICEGATE. Your refund is approved
                                but not transmitted to the bank.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-indigo-200 transition group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 font-bold text-xl relative z-10">
                                3
                            </div>
                            <h3 className="font-bold text-xl mb-3 relative z-10">
                                EGM Not Filed
                            </h3>
                            <p className="text-slate-500 leading-relaxed relative z-10">
                                Carrier failed to file the Export General Manifest correctly,
                                blocking all post-export benefits.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <section id="process" className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">

                        {/* LEFT SIDE */}
                        <div className="md:w-1/2">
                            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                                The Roadmap
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                How we recover "Lost" Money.
                            </h2>

                            <p className="text-slate-600 text-lg mb-8">
                                We don't accept "System Error" as an answer. We use technical
                                amendments to force the system to release your funds.
                            </p>

                            <div className="space-y-8 relative">

                                {/* Vertical Line */}
                                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200"></div>

                                {/* Step 1 */}
                                <div className="relative flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg relative z-10 shadow-lg border-4 border-white">
                                        1
                                    </div>
                                    <div className="ml-6 pt-2">
                                        <h4 className="font-bold text-lg text-slate-900">
                                            Incentive Audit
                                        </h4>
                                        <p className="text-slate-500 text-sm">
                                            We scan your last 2 years of Shipping Bills to find
                                            unclaimed amounts.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg relative z-10 shadow-lg border-4 border-white">
                                        2
                                    </div>
                                    <div className="ml-6 pt-2">
                                        <h4 className="font-bold text-lg text-slate-900">
                                            Error Correction
                                        </h4>
                                        <p className="text-slate-500 text-sm">
                                            We file amendments for EGM, PFMS, or Scroll Re-validation.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 flex items-center justify-center font-bold text-lg relative z-10 shadow-sm">
                                        3
                                    </div>
                                    <div className="ml-6 pt-2">
                                        <h4 className="font-bold text-lg text-slate-900">
                                            Scroll Generation
                                        </h4>
                                        <p className="text-slate-500 text-sm">
                                            The system processes the correction and generates the final
                                            scroll.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg relative z-10 shadow-sm border-4 border-white">
                                        4
                                    </div>
                                    <div className="ml-6 pt-2">
                                        <h4 className="font-bold text-lg text-slate-900">
                                            Credit to Ledger
                                        </h4>
                                        <p className="text-slate-500 text-sm">
                                            Funds are credited to your bank (IGST) or Duty Ledger
                                            (RoDTEP).
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="md:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-600 rounded-2xl transform rotate-2 opacity-10"></div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative">
                                <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">
                                    The EximInq Advantage
                                </h3>

                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="text-slate-400 border-b border-slate-700">
                                            <th className="pb-3 font-medium">Feature</th>
                                            <th className="pb-3 font-medium text-indigo-400">
                                                EximInq CloudDesk
                                            </th>
                                            <th className="pb-3 font-medium text-slate-500">
                                                Regular Agent
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="py-4 font-medium">Expired Scroll logic</td>
                                            <td className="py-4 text-indigo-400 font-bold">
                                                ✅ Re-validation Expert
                                            </td>
                                            <td className="py-4 text-slate-500">
                                                ❌ "Time Barred" excuse
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="py-4 font-medium">SB005 Fixing</td>
                                            <td className="py-4 text-indigo-400 font-bold">
                                                ✅ Automated Check
                                            </td>
                                            <td className="py-4 text-slate-500">
                                                ❌ Manual / Slow
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="py-4 font-medium">Ledger Transfer</td>
                                            <td className="py-4 text-indigo-400 font-bold">
                                                ✅ Instant Trading
                                            </td>
                                            <td className="py-4 text-slate-500">
                                                ❌ Only generation
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="py-4 font-medium">Pricing Model</td>
                                            <td className="py-4 text-indigo-400 font-bold">
                                                ✅ % Success Fee
                                            </td>
                                            <td className="py-4 text-slate-500">
                                                ❌ Advance Charges
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section
                id="clouddesk"
                className="py-20 bg-slate-900 text-white border-t border-slate-800"
            >
                <div className="container mx-auto px-4 text-center mb-12">
                    <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2 block">
                        The Technology Advantage
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why use CloudDesk for Refunds?
                    </h2>

                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Manual tracking leads to expiry. Our SaaS platform monitors every
                        shipping bill status in real-time.
                    </p>
                </div>

                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">

                    {/* Card 1 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition">
                        <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
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
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        <h3 className="font-bold text-lg mb-2">Expiry Alerts</h3>

                        <p className="text-sm text-slate-400">
                            Never miss a timeline again. CloudDesk alerts you 15 days before
                            any scroll or application window expires.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition">
                        <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
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
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                />
                            </svg>
                        </div>

                        <h3 className="font-bold text-lg mb-2">Live Status Sync</h3>

                        <p className="text-sm text-slate-400">
                            Our system syncs with ICEGATE daily. You see exactly which Shipping
                            Bills have errors (SB005/PFMS) on one dashboard.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition">
                        <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
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
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </div>

                        <h3 className="font-bold text-lg mb-2">Scrip Marketplace</h3>

                        <p className="text-sm text-slate-400">
                            Don't let brokers lowball you. CloudDesk connects you to the
                            highest bidders to sell your RoDTEP/RoSCTL scrips instantly.
                        </p>
                    </div>

                </div>
            </section>

            <section id="faq" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">

                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                        Expert Answers to Tough Questions
                    </h2>

                    <div className="space-y-6">

                        {/* Q1 */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start">
                                <span className="text-indigo-600 mr-3">Q.</span>
                                My RoDTEP scroll expired last year. Can it be recovered?
                            </h3>
                            <p className="text-slate-600 text-sm pl-7 leading-relaxed">
                                Yes. While the automated system marks it as expired, there is a
                                provision to file a manual application with the Principal
                                Commissioner of Customs to re-validate the scroll. We handle this
                                petition process end-to-end.
                            </p>
                        </div>

                        {/* Q2 */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start">
                                <span className="text-indigo-600 mr-3">Q.</span>
                                My IGST refund is stuck with error SB005. What does it mean?
                            </h3>
                            <p className="text-slate-600 text-sm pl-7 leading-relaxed">
                                SB005 means "Invoice Mismatch." The invoice details you filed in
                                GST Return (GSTR-1) do not match exactly with the Shipping Bill in
                                ICEGATE. We perform a line-by-line reconciliation and file a
                                correction annexure to fix this.
                            </p>
                        </div>

                        {/* Q3 */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start">
                                <span className="text-indigo-600 mr-3">Q.</span>
                                How much do you charge for recovery?
                            </h3>
                            <p className="text-slate-600 text-sm pl-7 leading-relaxed">
                                For "Stuck" or "Lost" cases, we work on a{" "}
                                <strong>Success Fee</strong> model. We charge a percentage of the
                                recovered amount ONLY after the money hits your bank or ledger.
                                You pay nothing upfront.
                            </p>
                        </div>

                        {/* Q4 */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start">
                                <span className="text-indigo-600 mr-3">Q.</span>
                                Can you help sell the scrips once recovered?
                            </h3>
                            <p className="text-slate-600 text-sm pl-7 leading-relaxed">
                                Yes. We have a network of 500+ importers. We can help you sell
                                your RoDTEP or RoSCTL scrips at the highest market rate on the
                                same day they are generated.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section
                id="audit-form"
                className="py-24 bg-slate-900 text-white relative overflow-hidden"
            >
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
                            Submit your details. We will run a diagnostic on your IEC to find
                            every single unpaid Shipping Bill, expired scroll, or stuck refund
                            that is legally owed to you.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Free Recovery Potential Report",
                                "No Upfront Cost (Success Fee)",
                                "100% Confidential",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 text-green-400">
                                        ✓
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FORM */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 border border-slate-200">
                            <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
                                Request Recovery Audit
                            </h3>

                            <form className="space-y-5">

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                            placeholder="John"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                                        Company Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                                        Incentive Type
                                    </label>
                                    <select
                                        id="licenseType"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white transition"
                                    >
                                        <option value="RoDTEP">RoDTEP / RoSCTL</option>
                                        <option value="IGST">IGST Refund</option>
                                        <option value="Drawback">Duty Drawback</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                                        Est. Amount (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                        placeholder="e.g. ₹5 Lakhs"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                                        Issue Description
                                    </label>
                                    <select
                                        id="issueDesc"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white transition"
                                    >
                                        <option>Scroll Expired / Lapsed</option>
                                        <option>SB005 Error (Invoice Mismatch)</option>
                                        <option>EGM Not Filed</option>
                                        <option>PFMS Validation Error</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg mt-2 flex justify-center items-center group"
                                >
                                    Recover My Money
                                    <svg
                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>

                                <p className="text-xs text-center text-slate-400 mt-4">
                                    We respect your privacy. Your data is never shared.
                                </p>

                            </form>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />



        </div>
    );
}


