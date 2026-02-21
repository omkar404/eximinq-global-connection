import React, { useState, useEffect } from "react";

import {Navbar} from "../components/CloudDeskRodstep/Navbar";
import SecondaryNavbar from "../components/CloudDeskRodstep/SecondaryNavbar";
import Hero from "../components/CloudDeskRodstep/Hero";
import LiveRates from "../components/CloudDeskRodstep/LiveRates";
import ProcessSteps from "../components/CloudDeskRodstep/ProcessSteps";
import Features from "../components/CloudDeskRodstep/Features";
import Calculator from "../components/CloudDeskRodstep/Calculator";
import InfoSection from "../components/CloudDeskRodstep/InfoSection";
import ContactCTA from "../components/CloudDeskRodstep/ContactCTA";
import Footer from "../components/CloudDeskRodstep/Footer";

import useLiveRates from "../components/CloudDeskRodstep/useLiveRates";
import {
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
const CloudDeskRodstep = () => {
  const [scrolled, setScrolled] = useState(false);

  const {
    rates,
    calcAmount,
    setCalcAmount,
    calcType,
    setCalcType,
    calcScheme,
    setCalcScheme,
    calculateTotal,
    appliedRate,
  } = useLiveRates();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar scrolled={scrolled} />
      <SecondaryNavbar scrollToSection={scrollToSection} />
      <Hero onViewRates={() => scrollToSection("rates")} />
      <LiveRates rates={rates} />
      <ProcessSteps />
      <Features />
      <Calculator
        rates={rates}
        calcAmount={calcAmount}
        setCalcAmount={setCalcAmount}
        calcType={calcType}
        setCalcType={setCalcType}
        calcScheme={calcScheme}
        setCalcScheme={setCalcScheme}
        calculateTotal={calculateTotal}
        appliedRate={appliedRate}
      />
      <InfoSection />
      <ContactCTA />


        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Scrips are like stocks; their value fluctuates based on import demand. CloudDesk ensures you sell at the peak 'Premium' and never at a 'Fire Sale' price.</h2>
                    {/* <p className="text-slate-500">"• Primary: ICEGATE 2.0 Registration, Indian Customs EDI Gateway, ICEGATE ID Creation, DSC Mapping on ICEGATE, e-Sanchit Document Upload.
                    • Long-Tail: Fix ICEGATE signer utility error 2026, mandatory documents for ICEGATE registration, how to link DSC to ICEGATE 2.0, ICEGATE 2FA setup guide, register as importer/exporter on ICEGATE."
                    </p> */}
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
