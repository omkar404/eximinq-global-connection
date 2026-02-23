import { Footer } from "../Common/Footer";
import TopBar from "../Common/TopBar";

export default function CloudDeskEPCGClosure() {
    return (
        <div className="bg-slate-50 text-slate-800 antialiased selection:bg-teal-200 selection:text-teal-900">
            <TopBar />
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center overflow-hidden bg-white">

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-50 rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/3 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[80px] opacity-40 -z-10 -translate-x-1/3 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* TEXT CONTENT */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-red-50 border border-red-100 text-xs font-bold text-red-600 uppercase tracking-wider shadow-sm">
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
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Stop Bleeding Working Capital
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                                Your Bank Guarantees are <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                                    Stuck at DGFT.
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-light">
                                Every month your EPCG license stays open, you pay bank commission fees and risk a demand notice with 15% interest.
                                We retrieve EODCs and cancel bonds in <strong>45 days flat.</strong>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#audit-form"
                                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition flex items-center justify-center shadow-xl shadow-slate-900/20 group"
                                >
                                    Release My BG
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

                                <div className="flex items-center justify-center gap-2 px-6 py-4 text-slate-600 font-semibold bg-white rounded-xl border border-slate-200 shadow-sm hover:border-teal-500 transition cursor-default">
                                    <svg
                                        className="w-5 h-5 text-teal-600"
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
                                    No Win, No Fee
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                                </div>
                                <p>
                                    Trusted by{" "}
                                    <span className="font-bold text-slate-700">
                                        120+ Engineering Exporters
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* CARD GRAPHIC */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-3xl transform rotate-3 blur-3xl opacity-20 animate-pulse-slow"></div>

                            <div className="relative bg-white border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-10 max-w-md mx-auto transform hover:-translate-y-2 transition duration-500">

                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shadow-inner">
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
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>

                                    <span className="px-4 py-1.5 bg-red-100 text-red-600 text-xs font-bold uppercase rounded-full tracking-wide border border-red-200 shadow-sm">
                                        Urgent Action
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                    EPCG & Advance Auth
                                </h2>

                                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                                    We specialize in the "Hard Files"—licenses stuck due to lost documents,
                                    excess imports, or block-wise defaults.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "EOP Extension Filing",
                                        "DFIA License Redemption",
                                        "Clubbing of Licenses",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100"
                                        >
                                            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center mr-3 text-white text-xs">
                                                ✓
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                                            Avg TAT
                                        </p>
                                        <p className="text-2xl font-bold text-slate-900">
                                            45 Days
                                        </p>
                                    </div>

                                    <a
                                        href="/epcg-closure-services"
                                        className="text-teal-600 font-bold flex items-center hover:text-teal-800 transition"
                                    >
                                        Audit Now
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
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2 block">
            The Bottleneck
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why are your files stuck?
          </h2>

          <p className="text-slate-600 text-lg">
            The DGFT portal says "Under Process," but usually, it's one of these three
            technical errors blocking your money.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Shipping Bill Mismatch",
              desc: "ICEGATE transmission failures mean DGFT cannot see your exports, even if you physically shipped the goods.",
            },
            {
              title: "EO Period Expiry",
              desc: "If you missed the block-wise extension, the system auto-calculates a massive penalty. We help you regularize this.",
            },
            {
              title: "Lost Original License",
              desc: "Physical file loss at the customs house prevents the final bond cancellation. We reconstruct the file for you.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-red-200 transition group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>

              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 font-bold text-xl relative z-10">
                {index + 1}
              </div>

              <h3 className="font-bold text-xl mb-3 relative z-10">
                {item.title}
              </h3>

              <p className="text-slate-500 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>

        <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* LEFT SIDE – TIMELINE */}
          <div className="md:w-1/2">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2 block">
              The Roadmap
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How we close files in 45 Days.
            </h2>

            <p className="text-slate-600 text-lg mb-8">
              We don't rely on "liaison." We rely on a structured, audit-first
              approach that clears technical errors before the file reaches the officer.
            </p>

            <div className="space-y-8 relative">

              {/* Connecting Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200"></div>

              {[
                {
                  step: "1",
                  title: "Gap Audit (Day 1-3)",
                  desc: "We pull data from DGFT & ICEGATE to identify mismatched shipping bills.",
                  style: "bg-slate-900 text-white border-4 border-white",
                },
                {
                  step: "2",
                  title: "Correction & Filing (Day 4-10)",
                  desc: "We file the ANF-5B application and submit physical copies to the RA.",
                  style: "bg-teal-500 text-white border-4 border-white",
                },
                {
                  step: "3",
                  title: "EODC Issuance (Day 30)",
                  desc: "Redemption Letter is issued by DGFT. We collect the hard copy.",
                  style: "bg-white border-2 border-teal-500 text-teal-600",
                },
                {
                  step: "4",
                  title: "Bond Cancellation (Day 45)",
                  desc: "Submission to Customs for BG release. Working capital unlocked.",
                  style: "bg-green-100 text-green-600 border-4 border-white",
                },
              ].map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg relative z-10 shadow-lg ${item.style}`}
                  >
                    {item.step}
                  </div>

                  <div className="ml-6 pt-2">
                    <h4 className="font-bold text-lg text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE – COMPARISON CARD */}
          <div className="md:w-1/2 relative">

            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl transform rotate-2 opacity-10"></div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative">

              <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">
                EximInq vs. The Others
              </h3>

              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="pb-3 font-medium">Feature</th>
                    <th className="pb-3 font-medium text-teal-400">
                      EximInq CloudDesk
                    </th>
                    <th className="pb-3 font-medium text-red-400">
                      Local Consultant
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="py-4 font-medium">Pre-Audit Technology</td>
                    <td className="py-4 text-teal-400 font-bold">
                      ✅ Automated 360° Check
                    </td>
                    <td className="py-4 text-slate-500">
                      ❌ Manual / Excel
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-medium">Live Tracking</td>
                    <td className="py-4 text-teal-400 font-bold">
                      ✅ Real-Time Dashboard
                    </td>
                    <td className="py-4 text-slate-500">
                      ❌ You have to call them
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-medium">Data Security</td>
                    <td className="py-4 text-teal-400 font-bold">
                      ✅ Encrypted Smart Vault
                    </td>
                    <td className="py-4 text-slate-500">
                      ❌ Files on personal laptop
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-medium">Pricing Model</td>
                    <td className="py-4 text-teal-400 font-bold">
                      ✅ Flat Professional Fee
                    </td>
                    <td className="py-4 text-slate-500">
                      ❌ % of License Value
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
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2 block">
          The Technology Advantage
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why use CloudDesk for EPCG?
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto">
          Manual consultants lose files. Our SaaS platform ensures your documents
          are digitized, secure, and audit-ready forever.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {[
          {
            title: "Automated EO Tracking",
            desc: "Our system pulls export data directly from ICEGATE to calculate exactly how much EO is pending, eliminating human calculation errors.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            ),
          },
          {
            title: "Smart Digital Vault",
            desc: "Never lose a 'Original Copy' again. We digitize your EODC and Bond Cancellation letters and store them in an encrypted vault for future audits.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            ),
          },
          {
            title: "Expiry Alerts",
            desc: "CloudDesk triggers automated alerts 90, 60, and 30 days before your Block Year or Installation Certificate deadline, preventing penalties.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition"
          >
            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-4 text-teal-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
            </div>

            <h3 className="font-bold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-slate-400">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>

        <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Expert Answers to Tough Questions
        </h2>

        <div className="space-y-6">

          {[
            {
              q: "Can you close a license if I lost the original copy?",
              a: `Yes. This is common. We file an FIR and obtain a duplicate license from the RA (Regional Authority) before proceeding with the redemption. It adds about 7-10 days to the timeline, but it is fully solvable. Do not let a lost file stop your closure.`,
            },
            {
              q: "My shipping bills are not showing in the DGFT repository. Why?",
              a: `This usually happens due to a data transmission failure from ICEGATE to DGFT. We have a specific technical process to "re-transmit" these shipping bills. Once re-transmitted, they appear in the repository within 48 hours, allowing us to link them to your license.`,
            },
            {
              q: "My EO period expired 2 years ago. Can I still close it?",
              a: `Yes, but you will likely need to pay a "Composition Fee" for the extension of the Export Obligation Period. We calculate the exact penalty beforehand so there are no surprises. Closing it now is always cheaper than waiting for a Demand Notice.`,
            },
            {
              q: `Do you handle "Clubbing" of multiple licenses?`,
              a: `Yes. If you have multiple licenses where some have excess exports and others have a shortfall, we can apply for "Clubbing" to offset the shortfall. This is a powerful way to save duty without paying penalties.`,
            },
            {
              q: "Do you handle Bond Cancellation at Customs too?",
              a: `Absolutely. Getting the EODC (Export Obligation Discharge Certificate) from DGFT is only half the job. We take that EODC to the Customs port (Nhava Sheva/Mundra/Air Cargo) and get your Bond/BG physically cancelled so your bank limit is released.`,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start">
                <span className="text-teal-600 mr-3">Q.</span>
                {item.q}
              </h3>

              <p className="text-slate-600 text-sm pl-7 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>

        <section
      id="audit-form"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2 block">
            Free Service
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get a Free "Risk Audit" of your pending licenses.
          </h2>

          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            Don't wait for the Demand Notice. Submit your license details. We
            will check the DGFT backend and tell you exactly how much duty +
            interest you are liable for, and the fastest way to fix it.
          </p>

          <ul className="space-y-4">
            {[
              "100% Confidential Data Handling",
              "Report Generated within 24 Hours",
              "No Obligation to Hire Us",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-4 text-teal-400">
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
              Request Audit
            </h3>

            <form className="space-y-5">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
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
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  License Type
                </label>
                <select
                  id="licenseType"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none bg-white transition"
                >
                  <option value="EPCG">EPCG Scheme</option>
                  <option value="AA">Advance Authorization (AA)</option>
                  <option value="DFIA">DFIA License</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  License Number (Optional)
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  placeholder="e.g. 033000..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Issue Description
                </label>
                <select
                  id="issueDesc"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none bg-white transition"
                >
                  <option>Stuck at EODC Stage</option>
                  <option>Bond Cancellation Pending</option>
                  <option>Shipping Bill Mismatch</option>
                  <option>Lost Original License</option>
                  <option>Block-wise Extension</option>
                  <option>Annual Average Shortfall</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg mt-2 flex justify-center items-center group"
              >
                Check My File
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
    )
}