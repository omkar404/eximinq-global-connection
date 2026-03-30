import React, { useState } from "react";

const TransparentPricing = ({ setShowEnrollModal }) => {
  const [billing, setBilling] = useState("annual");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You are on the list! We will contact you before March 19, 2026.");
  };

  return (
    <>
      <section id="pricing" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">
              Transparent Pricing
            </span>
            <h2 className="text-4xl font-bold mt-2">
              Invest in Audit Readiness
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Clean up your past data first. Then, subscribe to keep your future
              compliant.
            </p>
          </div>

          {/* STEP 1 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px bg-slate-700 w-12 md:w-32"></div>
              <h3 className="text-xl font-bold text-blue-300 uppercase tracking-widest text-center">
                Step 1: Historical Data Clean-up
              </h3>
              <div className="h-px bg-slate-700 w-12 md:w-32"></div>
            </div>

            <div className="text-center mb-10 -mt-6">
              <p className="text-slate-300 font-medium">
                Get Audit-Ready Now. Pay Later.
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Book now with{" "}
                <span className="text-green-400 font-bold">30% advance</span>.
                Receive PDF Audit Report immediately. Pay balance when Clouddesk
                goes live.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {/* 1 Year */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col">
                <div className="text-slate-300 font-bold mb-1">
                  Last 1 Year Data
                </div>
                <div className="text-xs text-slate-500 line-through mb-1">
                  Launch Price: ₹ 35,000
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  ₹ 25,000{" "}
                  <span className="text-xs text-green-400">Early Bird</span>
                </div>

                <div className="my-4 pt-4 border-t border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                    Pay Now (30%)
                  </p>
                  <p className="text-3xl font-bold text-blue-400">₹ 7,500</p>
                  <p className="text-[10px] text-slate-500">
                    Balance ₹ 17,500 on Launch
                  </p>
                </div>

                <ul className="text-xs text-slate-400 space-y-2 mb-6 flex-1">
                  <li className="flex gap-2">Digitize Shipping Bills</li>
                  <li className="flex gap-2">PDF Compliance Report</li>
                  <li className="flex gap-2">Saved to Smart Vault</li>
                </ul>

                <button
                  onClick={() =>
                    setShowEnrollModal({ open: true, type: "Last 1 Year Data" })
                  }
                  className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold"
                >
                  Book for ₹ 7,500
                </button>
              </div>

              {/* 2 Year */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-blue-500 flex flex-col">
                <div className="text-white font-bold mb-1">
                  Last 2 Years Data
                </div>
                <div className="text-xs text-slate-500 line-through mb-1">
                  Launch Price: ₹ 60,000
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  ₹ 45,000{" "}
                  <span className="text-xs text-green-400">Early Bird</span>
                </div>

                <div className="my-4 pt-4 border-t border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                    Pay Now (30%)
                  </p>
                  <p className="text-3xl font-bold text-blue-400">₹ 13,500</p>
                  <p className="text-[10px] text-slate-500">
                    Balance ₹ 31,500 on Launch
                  </p>
                </div>

                <ul className="text-xs text-slate-400 space-y-2 mb-6 flex-1">
                  <li>24-Month Digitization</li>
                  <li>EPCG License Audit</li>
                  <li>Gap Analysis PDF</li>
                  <li>Saved to Smart Vault</li>
                </ul>

                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      type: "Last 2 Years Data",
                    })
                  }
                  className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold"
                >
                  Book for ₹ 13,500
                </button>
              </div>

              {/* 3 Year */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col">
                <div className="text-slate-300 font-bold mb-1">
                  Last 3 Years Data
                </div>
                <div className="text-xs text-slate-500 line-through mb-1">
                  Launch Price: ₹ 85,000
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  ₹ 60,000{" "}
                  <span className="text-xs text-green-400">Early Bird</span>
                </div>

                <div className="my-4 pt-4 border-t border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                    Pay Now (30%)
                  </p>
                  <p className="text-3xl font-bold text-blue-400">₹ 18,000</p>
                  <p className="text-[10px] text-slate-500">
                    Balance ₹ 42,000 on Launch
                  </p>
                </div>

                <ul className="text-xs text-slate-400 space-y-2 mb-6 flex-1">
                  <li>36-Month Deep Clean</li>
                  <li>Risk & Liability Report</li>
                  <li>Saved to Smart Vault</li>
                </ul>

                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      type: "Last 3 Years Data",
                    })
                  }
                  className="w-full py-3 rounded-lg border border-slate-600 text-slate-300"
                >
                  Book for ₹ 18,000
                </button>
              </div>

              {/* 6 Year */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-purple-500 flex flex-col">
                <div className="text-purple-300 font-bold mb-1">
                  Last 6 Years Archive
                </div>
                <div className="text-xs text-slate-500 line-through mb-1">
                  Launch Price: ₹ 1,50,000
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  ₹ 1,00,000{" "}
                  <span className="text-xs text-green-400">Early Bird</span>
                </div>

                <div className="my-4 pt-4 border-t border-purple-500">
                  <p className="text-[10px] text-purple-300 uppercase font-bold mb-1">
                    Pay Now (30%)
                  </p>
                  <p className="text-3xl font-bold text-purple-400">₹ 30,000</p>
                  <p className="text-[10px] text-slate-500">
                    Balance ₹ 70,000 on Launch
                  </p>
                </div>

                <ul className="text-xs text-slate-400 space-y-2 mb-6 flex-1">
                  <li>Full 72-Month Archives</li>
                  <li>Active License Status</li>
                  <li>Audit-Ready Vault</li>
                </ul>

                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      type: "Last 6 Years Archive",
                    })
                  }
                  className="w-full py-3 rounded-lg bg-purple-600 text-white"
                >
                  Book for ₹ 30,000
                </button>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div>
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px bg-slate-700 w-12 md:w-32"></div>
              <h3 className="text-xl font-bold text-blue-300 uppercase tracking-widest text-center">
                Step 2: Subscription
              </h3>
              <div className="h-px bg-slate-700 w-12 md:w-32"></div>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mb-10">
              <div className="bg-slate-800 p-1 rounded-xl flex items-center relative">

                <button
                  onClick={() => setBilling("quarterly")}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billing === "quarterly"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  Quarterly
                </button>

                <button
                  onClick={() => setBilling("annual")}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billing === "annual"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                    }`}
                >
                  Annually
                </button>

                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                  Pay 10, Get 2 Free
                </div>
              </div>
            </div>

            {/* SaaS cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* STARTER */}
              <div className="bg-white text-slate-900 rounded-3xl p-8 border border-slate-200">
                <h3 className="font-bold text-xl">Starter</h3>
                <p className="text-slate-500 text-sm mt-1">For small exporters.</p>

                <div className="my-6">
                  {billing === "annual" ? (
                    <>
                      <span className="text-xs text-slate-400 line-through block">
                        ₹ 35,000/yr
                      </span>
                      <span className="text-4xl font-bold">₹ 25,000</span>
                      <span className="text-slate-500">/yr</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-slate-400 line-through block">
                        ₹ 3,500/mo
                      </span>
                      <span className="text-4xl font-bold">₹ 7,500</span>
                      <span className="text-slate-500">/qtr</span>
                    </>
                  )}
                </div>

                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <strong>500</strong> Shipment Sets / Year
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    Basic Compliance Checks
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    Service Store Access
                  </li>
                </ul>

                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      plan: "Starter",
                      billing: billing,
                      price: billing === "annual" ? "₹ 25,000/yr" : "₹ 7,500/qtr"
                    })
                  }
                  className="block text-center w-full py-3 rounded-xl bg-slate-100 font-bold hover:bg-slate-200 transition"
                >
                  Join Waitlist
                </button>
              </div>

              {/* GROWTH */}
              <div className="bg-white text-slate-900 rounded-3xl p-8 border-2 border-blue-600 relative shadow-2xl">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  RECOMMENDED
                </div>

                <h3 className="font-bold text-xl">Growth</h3>
                <p className="text-slate-500 text-sm mt-1">
                  For active trading houses.
                </p>

                <div className="my-6">
                  {billing === "annual" ? (
                    <>
                      <span className="text-xs text-slate-400 line-through block">
                        ₹ 70,000/yr
                      </span>
                      <span className="text-4xl font-bold">₹ 50,000</span>
                      <span className="text-slate-500">/yr</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-slate-400 line-through block">
                        ₹ 7,000/mo
                      </span>
                      <span className="text-4xl font-bold">₹ 15,000</span>
                      <span className="text-slate-500">/qtr</span>
                    </>
                  )}
                </div>

                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <strong>1,500</strong> Shipment Sets / Year
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <strong>Full Compliance Audit</strong>
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    EPCG & AA Tracking
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <strong>₹ 10,000</strong> Wallet Credit Included
                  </li>
                </ul>

                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      plan: "Growth",
                      billing: billing,
                      price: billing === "annual" ? "₹ 50,000/yr" : "₹ 15,000/qtr"
                    })
                  }
                  className="block text-center w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
                >
                  Join Waitlist
                </button>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white text-slate-900 rounded-3xl p-8 border border-slate-200">
                <h3 className="font-bold text-xl">Enterprise</h3>
                <p className="text-slate-500 text-sm mt-1">
                  For multinational operations.
                </p>

                <div className="my-6">
                  <span className="text-4xl font-bold">Custom</span>
                </div>

                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    Unlimited Shipment Sets
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <strong>Advanced Compliance Audit</strong>
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-star text-amber-500"></i>
                    <strong>Quarterly Audit Strategy Review</strong>
                  </li>
                  <li className="flex gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    Dedicated Compliance Officer
                  </li>
                </ul>

                <button
                  onClick={() =>
                    setShowEnrollModal({
                      open: true,
                      plan: "Enterprise",
                      billing: billing,
                      price: "Custom"
                    })
                  }
                  className="block text-center w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-700 transition"
                >
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="text-center mt-12">
              <span className="text-lg font-bold text-white-500">
               One-time enrollment fee of ₹ 2,500.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransparentPricing;
