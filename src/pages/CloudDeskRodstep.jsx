import React, { useMemo, useState, useEffect } from "react";

import {Navbar} from "../components/CloudDeskRodstep/Navbar";
import SecondaryNavbar from "../components/CloudDeskRodstep/SecondaryNavbar";
import Hero from "../components/CloudDeskRodstep/Hero";
import LiveRates from "../components/CloudDeskRodstep/LiveRates";
import ProcessSteps from "../components/CloudDeskRodstep/ProcessSteps";
import Features from "../components/CloudDeskRodstep/Features";
import Calculator from "../components/CloudDeskRodstep/Calculator";
import ContactCTA from "../components/CloudDeskRodstep/ContactCTA";
import Footer from "../components/CloudDeskRodstep/Footer";

import { SLABS } from "../components/CloudDeskRodstep/slabs";
import {
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const IMPORTANT_UPDATE_SESSION_KEY =
  "rodtep-technical-advisory-2026-07-02-dismissed";

const CloudDeskRodstep = () => {
  const [scrolled, setScrolled] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState("sell");
  const [calculatorRequest, setCalculatorRequest] = useState({ workflow: "sell", scheme: "rodtep" });
  const [showImportantUpdate, setShowImportantUpdate] = useState(false);

  const rates = useMemo(() => SLABS[0].rates, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!window.sessionStorage.getItem(IMPORTANT_UPDATE_SESSION_KEY)) {
      setShowImportantUpdate(true);
    }
  }, []);

  useEffect(() => {
    if (!showImportantUpdate) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        window.sessionStorage.setItem(IMPORTANT_UPDATE_SESSION_KEY, "true");
        setShowImportantUpdate(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showImportantUpdate]);

  const closeImportantUpdate = () => {
    window.sessionStorage.setItem(IMPORTANT_UPDATE_SESSION_KEY, "true");
    setShowImportantUpdate(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuoteRequest = (details, workflow) => {
    setSelectedWorkflow(workflow);
    setQuoteDetails(details);
  };

  const handleLiveRateAction = (scheme, actionType) => {
    const workflow = String(actionType).toLowerCase() === "buy" ? "sell" : "buy";
    const normalizedScheme = String(scheme).toLowerCase() === "rosctl" ? "rosctl" : "rodtep";
    setCalculatorRequest({ workflow, scheme: normalizedScheme });
    scrollToSection(`${workflow}-calculator`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* {showImportantUpdate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="important-update-title"
          aria-describedby="important-update-description"
        >
          <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-2xl">
            <div className="flex shrink-0 items-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-4 py-3.5 pr-14 text-white sm:px-7 sm:py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-11 sm:w-11">
                <AlertTriangle size={24} aria-hidden="true" />
              </span>
              <div>
                <h2
                  id="important-update-title"
                  className="text-xl font-bold leading-tight sm:text-2xl"
                >
                  Important Update
                </h2>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-amber-50 sm:text-sm">
                  Technical Advisory: Systemic Issues with RoDTEP/RoSCTL Debits
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeImportantUpdate}
              className="absolute right-2.5 top-2.5 flex h-10 w-10 items-center justify-center rounded-full text-3xl leading-none text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-4 sm:top-3.5"
              aria-label="Close important update"
            >
              &times;
            </button>

            <div className="overscroll-contain overflow-y-auto px-4 py-4 sm:px-7 sm:py-5">
              <div className="mb-4 grid gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm sm:grid-cols-[150px_1fr] sm:gap-x-6">
                <p>
                  <strong className="text-slate-900">Date:</strong>{" "}
                  <span className="text-slate-600">July 2, 2026</span>
                </p>
                <p>
                  <strong className="text-slate-900">Subject:</strong>{" "}
                  <span className="text-slate-600">
                    Industry-wide Technical Disruption – RoDTEP/RoSCTL Scrip
                    Utilization
                  </span>
                </p>
              </div>

              <p
                id="important-update-description"
                className="text-sm leading-6 text-slate-700 sm:text-base"
              >
                We are writing to address the ongoing technical failures
                currently affecting RoDTEP and RoSCTL scrip utilization
                nationwide.
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <section className="rounded-xl border border-amber-200 bg-amber-50/70 p-4">
                  <h3 className="mb-2 font-bold text-slate-900">Root Cause</h3>
                  <p className="text-sm leading-6 text-slate-700">
                    Following the government’s notification No. 15/2026-27
                    (effective May 1, 2026), a mandatory technical alignment of
                    RoDTEP schedules with the revised Customs Tariff Act was
                    implemented. This process involved the addition of 142 new
                    tariff lines and the deletion of 50 existing tariff lines.
                  </p>
                </section>

                <section className="rounded-xl border border-red-200 bg-red-50/70 p-4">
                  <h3 className="mb-2 font-bold text-slate-900">Current Impact</h3>
                  <p className="text-sm leading-6 text-slate-700">
                    The ICEGATE Customs Automated System is currently
                    experiencing synchronization failures, leading to widespread
                    validation errors (including codes 415, 407, 408, and 427).
                    Because of these systemic discrepancies, many scrips have
                    become temporarily unusable, and significant numbers of
                    these assets are being returned by importers to sellers as
                    they cannot be debited against Bills of Entry.
                  </p>
                </section>
              </div>

              <section className="mt-3 rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                <h3 className="mb-3 font-bold text-slate-900">
                  Operational Notice to Partners
                </h3>
                <ul className="space-y-2 text-sm leading-6 text-slate-700">
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Standby Status:</strong> EXIMINQ has placed all
                      pending RoDTEP purchase transactions on standby until the
                      Customs EDI infrastructure achieves full stability.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Suspension of Purchases:</strong> We are currently
                      unable to complete any further RoDTEP purchase
                      transactions.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Asset Security:</strong> We strongly advise all
                      partners to retain scrip assets within their original
                      source accounts to avoid the administrative and legal
                      complications of returning scrips already transferred into
                      a new system.
                    </span>
                  </li>
                </ul>
              </section>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                We are monitoring the stability of the ICEGATE infrastructure
                daily and will notify all partners once the technical
                environment permits the resumption of transactions. We
                appreciate your patience as the authorities work through these
                mandatory system-level updates.
              </p>

              <div className="mt-4 flex justify-end border-t border-slate-200 pt-4">
                <button
                  type="button"
                  onClick={closeImportantUpdate}
                  className="w-full rounded-lg bg-slate-900 px-6 py-2.5 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:w-auto"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <Navbar scrolled={scrolled} />
      <SecondaryNavbar scrollToSection={scrollToSection} />
      <Hero onViewRates={() => scrollToSection("rates")} />
      <LiveRates rates={rates} onSellClick={handleLiveRateAction} />
      <ProcessSteps />
      <Features />
      <Calculator
        rates={rates}
        requestedTrade={calculatorRequest}
        onSendQuote={handleQuoteRequest}
      />
      <ContactCTA
        selectedWorkflow={selectedWorkflow}
        selectedScheme={quoteDetails?.scheme || "RODTEP"}
        quoteDetails={quoteDetails}
        onClose={() => setQuoteDetails(null)}
      />


        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Rodtep-Rosctl-Trading?</h2>
                    <p className="text-slate-500">
                      Scrips are like stocks; their value fluctuates based on import demand. CloudDesk ensures you sell at the peak 'Premium' and never at a 'Fire Sale' price.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. Digital "Escrow" Management</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The biggest risk in scrip trading is<strong> "Payment Default" </strong>(you transfer the scrip, but the buyer doesn't pay).<strong> CloudDesk </strong>acts as your Transaction Guard. 
                          We verify the buyer's<strong> IEC </strong>and creditworthiness before you initiate the transfer on<strong> ICEGATE, ensuring a secure "Delivery vs. Payment" cycle.</strong>
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Market-Driven Premium Optimization</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         Scrip rates vary from<strong> 95% to 99% </strong>of the face value. 
                         <strong>CloudDesk’s </strong>Trading Desk monitors the daily demand at <strong>major ports (JNPT, Mundra, Chennai). </strong>
                         We bundle your small scrips into <strong>"Bulk Lots" </strong>to command a higher premium from large importers, getting you more cash for every rupee of credit.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. End-to-End ICEGATE Transfer</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The transfer process involves creating a<strong> "Transfer Request," </strong>the buyer<strong> "Accepting" it, </strong>and a multi-factor authentication<strong> (DSC/OTP).</strong> 
                          <strong>CloudDesk </strong>handles the<strong> Technical Execution, </strong>ensuring the scrip moves from your ledger to the buyer's ledger without<strong> "System Hang" </strong>errors or expiry risks.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Tax-Compliant Accounting</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Selling a scrip has<strong> GST and Income Tax </strong>implications (it’s considered<strong> "Other Income" </strong>and is an exempt supply under GST). 
                          <strong>CloudDesk </strong>provides the Accounting Reconciliation Statement, helping your<strong> CA book </strong>the profit correctly and claim the necessary tax exemptions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How do I "sell" my digital scrip?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                You don't "sell" it in a physical sense. You log into your ICEGATE Financial Module, select the scrip, enter the Buyer's IEC, and initiate a "Transfer." Once the buyer accepts, the credit is moved to their account.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Who buys these scrips?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Any Importer who has to pay Basic Customs Duty (BCD) in cash. By buying your scrip at a 2-3% discount, they save money on their imports, and you get immediate cash.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is there a minimum amount for trading?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No, but small scrips (under ₹50,000) are harder to sell individually. CloudDesk pools your small credits to make them attractive to large-scale buyers.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "Premium" or "Discount"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               If you have a scrip worth ₹1,00,000 and you sell it for ₹98,000, you have sold it at a 2% discount (or 98% premium). In 2026, the standard market rate hovers between 97% to 98.5%.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               How long does it take to get the cash?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Once the transfer is completed on ICEGATE (which takes 5 minutes), the cash is typically settled via IMPS/RTGS instantly or within 24 hours.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does the scrip expire if I don't sell it? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes. Most scrips are valid for 12–24 months. If you don't sell or use them, the value becomes zero. CloudDesk’s Inventory Tracker ensures you sell at least 90 days before expiry to avoid "Panic Discounts."
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is scrip trading legal under GST?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes. Duty Credit Scrips are classified as "Goods" under GST (HSN 4907), but they are exempt from GST. You do not need to charge GST on the sale price.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can a buyer "return" a scrip after the transfer?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               No. Once the transfer is "Accepted" on ICEGATE, it is irreversible. This is why CloudDesk performs the Buyer Verification before the transfer.
              </p>
            </details>
          </div>
        </div>
      </section>     
      <Footer />
    </div>
  );
};

export default CloudDeskRodstep;
