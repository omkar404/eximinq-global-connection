import { useEffect, useRef, useState } from "react";
import { Footer } from "../Common/Footer";
import MainNavbar from "../Common/MainNavbar";
import TopBar from "../Common/TopBar";

export default function About() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const [values, setValues] = useState({
        crores: 0,
        days: 0,
        clients: 0,
    });

    // Trigger animation when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Counter animation
    useEffect(() => {
        if (!visible) return;

        const animate = (key, target) => {
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 20);

            const timer = setInterval(() => {
                start += increment;

                if (start >= target) {
                    setValues((prev) => ({ ...prev, [key]: target }));
                    clearInterval(timer);
                } else {
                    setValues((prev) => ({
                        ...prev,
                        [key]: Math.ceil(start),
                    }));
                }
            }, 20);
        };

        animate("crores", 50);
        animate("days", 45);
        animate("clients", 150);
    }, [visible]);

    return (
        <div className="bg-slate-900 text-slate-200 antialiased selection:bg-teal-500 selection:text-white">

            {/* NAV */}
            <TopBar />

            {/* HERO */}
            <header className="relative pt-40 pb-32 overflow-hidden">

                {/* Animated Background Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600 rounded-full mix-blend-multiply blur-[128px] opacity-20 animate-float"></div>

                <div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-multiply blur-[128px] opacity-20 animate-float"
                    style={{ animationDelay: "2s" }}
                ></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <div className="reveal active">

                        <span className="inline-block px-4 py-1 mb-6 rounded-full bg-slate-800 border border-slate-700 text-teal-400 font-bold uppercase tracking-wider text-xs">
                            The EximInq Story
                        </span>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                            Most consultants are postmen. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                                We are forensic auditors.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed mb-10 font-light max-w-3xl mx-auto">
                            We built EximInq on a single, uncomfortable truth:
                            <br className="hidden md:block" />
                            <strong className="text-white">
                                {" "}
                                90% of Indian exporters leave money on the table
                            </strong>{" "}
                            because their current agents treat compliance as data entry,
                            not financial strategy.
                        </p>

                    </div>
                </div>
            </header>


            <section className="py-24 bg-slate-800 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* LEFT SIDE */}
                        <div className="lg:w-1/2 reveal">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                The "Leakage" Problem
                            </h2>

                            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                                In 2020, we audited a mid-sized Engineering firm. They had a full-time logistics team and a reputed CHA. Yet, we found{" "}
                                <strong className="text-teal-400">
                                    ₹12 Lakhs in unclaimed RoDTEP benefits
                                </strong>{" "}
                                and 3 expired EPCG licenses accumulating 15% penal interest.
                            </p>

                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                It wasn't incompetence. It was a lack of visibility. The "System" was broken.
                                Manual spreadsheets and "trust-based" filing were causing massive revenue leakage.
                            </p>

                            <div className="pl-6 border-l-4 border-teal-500 bg-slate-900/50 p-6 rounded-r-xl">
                                <p className="text-xl font-bold text-slate-200 italic">
                                    "Exporters didn't need another agent. They needed a Tech-Enabled Auditor."
                                </p>
                                <p className="text-sm text-teal-500 mt-2 font-bold uppercase tracking-widest">
                                    — Jaggdish Acharya, Founder
                                </p>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:w-1/2 w-full reveal">
                            <div className="glass-card p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-teal-500/30 transition-colors duration-500">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 blur-[80px] opacity-20"></div>

                                <h3 className="text-2xl font-bold mb-8 text-white">
                                    The Old Way vs. The EximInq Way
                                </h3>

                                <div className="space-y-6">

                                    {/* Item 1 */}
                                    <div className="flex items-start p-4 rounded-xl hover:bg-white/5 transition duration-300">
                                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 border border-red-500/20">
                                            ✖
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-1">
                                                Reactive Filing
                                            </h4>
                                            <p className="text-sm text-slate-500">
                                                "File the paper when the shipment leaves."
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-start p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 transform translate-x-2 transition duration-300 shadow-lg shadow-teal-500/5">
                                        <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">
                                                CloudDesk Audit
                                            </h4>
                                            <p className="text-sm text-teal-200">
                                                "Audit the HSN code & RoDTEP eligibility{" "}
                                                <em>before</em> the invoice is generated."
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex items-start p-4 rounded-xl hover:bg-white/5 transition duration-300">
                                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 border border-red-500/20">
                                            ✖
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-1">
                                                Lost Files
                                            </h4>
                                            <p className="text-sm text-slate-500">
                                                "Sorry, the original license is misplaced."
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 4 */}
                                    <div className="flex items-start p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 transform translate-x-2 transition duration-300 shadow-lg shadow-teal-500/5">
                                        <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">
                                                Smart Vault
                                            </h4>
                                            <p className="text-sm text-teal-200">
                                                Every EODC & BRC digitized and stored in the cloud forever.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto px-4">

                    {/* Section Heading */}
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Not Just a Website. A War Room.
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We are not a one-man consultancy. EximInq is powered by a team of 15+
                            specialized compliance officers in Mumbai, split into dedicated cells.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal">

                        {/* Card 1 */}
                        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-teal-500/50 transition group">
                            <div className="w-12 h-12 bg-teal-900/30 rounded-lg flex items-center justify-center mb-6 text-teal-400">
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

                            <h3 className="text-xl font-bold text-white mb-2">
                                DGFT Policy Analysts
                            </h3>

                            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                                Former practitioners who interpret the fine print of notifications.
                                They handle your Advance Auth Norms Fixation and EPCG Clubbing strategies.
                            </p>

                            <span className="text-xs font-bold text-teal-500 uppercase tracking-wide">
                                3 Senior Consultants
                            </span>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-teal-500/50 transition group">
                            <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 text-indigo-400">
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
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                Field Liaison Officers
                            </h3>

                            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                                Boots on the ground at Mumbai (NCH), Nhava Sheva (JNPT),
                                and Air Cargo (Sahar). They physically chase files
                                where digital systems fail.
                            </p>

                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                                6 Field Runners
                            </span>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-teal-500/50 transition group">
                            <div className="w-12 h-12 bg-teal-900/30 rounded-lg flex items-center justify-center mb-6 text-teal-400">
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
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                CloudDesk Tech Team
                            </h3>

                            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                                Data analysts who run the SaaS audits. They reconcile
                                your ICEGATE vs. DGFT data to find the hidden
                                "SB005" errors and expired scrolls.
                            </p>

                            <span className="text-xs font-bold text-teal-500 uppercase tracking-wide">
                                4 Data Auditors
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-24 bg-white text-slate-900">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Heading */}
                    <div className="text-center mb-16 reveal">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-xs mb-2 block">
                            Our Track Record
                        </span>

                        <h2 className="text-3xl font-bold mb-6">
                            Milestones that Matter
                        </h2>

                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We don't measure success in "years of experience." We measure it in duty saved and penalties avoided.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">

                        {/* Milestone 1 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-teal-500 transition h-full">
                            <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl mb-4">
                                ₹8Cr+
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">RoDTEP Scroll Recovery</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Recovered expired and time-barred RoDTEP scrolls by filing manual petitions with the Principal Commissioner.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 2 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-indigo-500 transition h-full">
                            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                                500+
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">EPCG Licenses Closed</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Successfully retrieved EODC for over 500 licenses, including cases where original files were lost by the department.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 3 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-teal-500 transition h-full">
                            <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl mb-4">
                                100%
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">AEO Audit Success Rate</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Every client we pre-audited for AEO T1/T2 certification passed the physical customs verification on the first attempt.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 4 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-indigo-500 transition h-full">
                            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                                Zero
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">Demurrage Record</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    For our retainer clients, we have maintained a record of Zero Demurrage due to documentation delays since 2023.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 5 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-teal-500 transition h-full">
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl mb-4">
                                200+
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">Advance Authorisations</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Closed complex Advance Licenses involving SION fixation and Ad-hoc norms ratification.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 6 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-indigo-500 transition h-full">
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl mb-4">
                                50+
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">SCOMET Licenses</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Secured dual-use export authorizations for Defense and Aerospace clients with zero rejections.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 7 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-teal-500 transition h-full">
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl mb-4">
                                300+
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">Restricted Imports</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Managed end-to-end licensing for restricted items like tires, chemicals, and refurbished machinery.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 8 */}
                        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl hover:shadow-lg hover:border-indigo-500 transition h-full">
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl mb-4">
                                100+
                            </div>
                            <div>
                                <h4 className="font-bold text-md mb-2">Star Export House</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Helped exporters upgrade their Status Holder certificates to claim priority customs clearance.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section
                ref={sectionRef}
                className="py-20 bg-slate-900 border-y border-slate-800 relative"
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800 reveal">

                        {/* Crores */}
                        <div className="p-4">
                            <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-teal-300 to-teal-600 mb-2">
                                ₹{values.crores} Cr+
                            </div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                                Crores Saved
                            </div>
                        </div>

                        {/* Days */}
                        <div className="p-4">
                            <div className="text-4xl md:text-6xl font-extrabold text-white mb-2">
                                {values.days} Days
                            </div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                                Days Avg. Closure
                            </div>
                        </div>

                        {/* Clients */}
                        <div className="p-4">
                            <div className="text-4xl md:text-6xl font-extrabold text-white mb-2">
                                {values.clients}+
                            </div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                                Happy Clients
                            </div>
                        </div>

                        {/* Staff (Static) */}
                        <div className="p-4">
                            <div className="text-4xl md:text-6xl font-extrabold text-teal-400 mb-2">
                                15
                            </div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                                Expert Staff
                            </div>
                        </div>

                    </div>
                </div>
            </section>

                <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">
            Meet the Principal Auditor
          </h2>
        </div>

        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 flex flex-col md:flex-row items-center gap-12 group hover:border-teal-500/30 transition duration-500">
          
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-slate-700 rounded-full flex-shrink-0 border-4 border-slate-600 shadow-xl overflow-hidden relative group-hover:border-teal-500 transition duration-500">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm text-center bg-slate-800">
              Jaggdish Acharya
              <br />
              Photo
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            
            <h3 className="text-3xl font-bold text-white mb-2">
              Jaggdish Acharya
            </h3>

            <p className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-6">
              Founder & Lead Compliance Strategist
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              With over a decade of experience navigating the complex corridors
              of DGFT and Customs, Jaggdish specializes in{" "}
              <strong className="text-white">
                "Impossible Cases"
              </strong>
              —licenses stuck for 5+ years, rejected RoDTEP claims, and complex
              AEO audits.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              He built <strong>CloudDesk</strong> to ensure that no exporter
              ever pays a penalty due to a "human error" again.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              
              <a
                href="https://in.linkedin.com/in/eximinq-cloud-desk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="mailto:clouddesk@eximinq.in"
                className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>

            <section className="py-24 bg-white text-slate-900">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">

                    {/* LEFT SIDE */}
                    <div className="md:w-1/2 reveal">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-xs mb-2 block">
                            Our Base
                        </span>

                        <h2 className="text-3xl font-bold mb-6">
                            Located in the Heart of Mumbai's Export Hub
                        </h2>

                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Our operations center is strategically located in Andheri East,
                            giving us rapid access to Air Cargo Complex (Sahar) and ensuring
                            same-day document submission for time-sensitive clearances.
                        </p>

                        <div className="space-y-6">

                            {/* Address */}
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
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
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900">Headquarters</h4>
                                    <p className="text-slate-500 text-sm mt-1">
                                        #2, Navketan Ind. Est., Mahakali Caves Road,
                                        <br />
                                        Andheri East, Mumbai - 400 093
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
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
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        CloudDesk Support
                                    </h4>
                                    <p className="text-slate-500 text-sm mt-1">
                                        clouddesk@eximinq.in
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE (MAP) */}
                    <div className="md:w-1/2 w-full h-80 bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 reveal">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.870634288077!2d72.8675!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ5LjAiTiA3MsKwNTInMDMuMCJF!5e0!3m2!1sen!2sin!4v1635760000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%)" }}
                            allowFullScreen
                            loading="lazy"
                            title="EximInq Location"
                        ></iframe>
                    </div>

                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center relative overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

                <div className="container mx-auto px-4 relative z-10 reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Stop guessing. Start auditing.
                    </h2>

                    <p className="text-teal-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                        Let us check your last 2 years of data. If we don't find recoverable money,
                        you don't pay us a rupee.
                    </p>

                    <a
                        href="https://eximinq.in/contact"
                        className="px-10 py-5 bg-white text-teal-800 font-bold rounded-xl shadow-2xl hover:bg-slate-50 transition transform hover:-translate-y-1 inline-block"
                    >
                        Request Free Risk Audit
                    </a>
                </div>

            </section>

            <Footer />

        </div>
    );
}