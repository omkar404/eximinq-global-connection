// import TopBar from "../components/CloudDeskMarine/TopBar";
import { useState } from "react";
import Navbar from "../components/CloudDeskMarine/Navbar";
import Hero from "../components/CloudDeskMarine/Hero";
import Fees from "../components/CloudDeskMarine/Fees";
import { ModalEnroll } from "../components/CloudDeskMarine/ModalEnroll";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCheck,
  Factory,
  Cog,
  HandCoins,
  PackageCheck,
  CheckCircle,
  BadgePercent,
  Clock,
  ArrowDownCircle,
  TrendingUp,
  FileCheck,
  Stamp,
  PlaneTakeoff,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskMarine/MainNavbar";

const CloudDeskMarine = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: "",
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is EPCG Scheme?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Export Promotion Capital Goods (EPCG) Scheme</strong>
              facilitates the import of capital goods at{" "}
              <strong>Zero Customs Duty</strong>.
            </p>
            <p className="mb-4">
              Exporters must fulfill an <strong>Export Obligation (EO)</strong>{" "}
              equal to 6× the duty saved within 6 years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <Factory className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Any Sector</h3>
              <p className="text-sm text-slate-500">
                Manufacturer & Merchant Exporters both eligible.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <Cog className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">All Machinery</h3>
              <p className="text-sm text-slate-500">
                Covers capital goods, spares, moulds, dies, fixtures & tools.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <HandCoins className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Service Providers</h3>
              <p className="text-sm text-slate-500">
                Hotels, hospitals & logistics earning foreign exchange also
                eligible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              What Can You Import?
            </h2>
            <p className="text-slate-500 mt-2">
              Comprehensive coverage across the production lifecycle.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pre-Production */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-500 hover:shadow-xl transition">
              <Factory className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pre-Production
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Goods required before the actual manufacturing starts.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                {[
                  "Diesel Generator (DG) Sets",
                  "Transformers",
                  "Effluent Treatment Plants",
                  "Storage Racks",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Production */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-accent-500 hover:shadow-xl transition">
              <Cog className="w-12 h-12 text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Production
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Core machinery required for manufacturing the export product.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                {[
                  "CNC Machines / Lathes",
                  "Processing Plants",
                  "Textile Looms",
                  "Injection Moulding Machines",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-Production */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition">
              <PackageCheck className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Post-Production
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Equipment required for finishing, packing, and testing.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                {[
                  "Packaging Machinery",
                  "Testing Equipment / Labs",
                  "Quality Control Tools",
                  "Barcode Printers",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-green-500 w-4 h-4 mr-2" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="obligation" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
                The Commitment
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understanding Export Obligation
              </h2>

              <p className="text-slate-300 mb-6 leading-relaxed">
                To enjoy Zero Duty benefits, you must fulfill an Export
                Obligation (EO). Failure to do so results in repayment of saved
                duty plus high interest.
              </p>

              {/* Total Obligation Box */}
              <div className="bg-brand-800 p-6 rounded-lg border border-brand-700 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 flex items-center gap-2">
                    <BadgePercent className="w-4 h-4 text-accent-400" />
                    Total Obligation
                  </span>

                  <span className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent-400" />6 × Duty
                    Saved
                  </span>
                </div>

                <div className="w-full bg-brand-900 rounded-full h-2 mb-4">
                  <div
                    className="bg-accent-500 h-2 rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>

                <p className="text-xs text-slate-400">
                  Must be fulfilled in Foreign Currency (Free Foreign Exchange).
                </p>
              </div>

              {/* Time Period Box */}
              <div className="bg-brand-800 p-6 rounded-lg border border-brand-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-400" />
                    Time Period
                  </span>

                  <span className="text-xl font-bold text-white">6 Years</span>
                </div>

                <ul className="text-xs text-slate-400 space-y-1 mt-2">
                  <li>• Block 1 (1st – 4th Year): Minimum 50% EO</li>
                  <li>• Block 2 (5th – 6th Year): Remaining Balance</li>
                </ul>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl relative">
                <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                  Domestic Sourcing Benefit
                </h3>

                <p className="text-sm text-slate-600 mb-4">
                  If you procure capital goods from domestic manufacturers
                  instead of importing, the EO reduces by 25%.
                </p>

                <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-100">
                  <div>
                    <span className="block text-xs font-bold text-green-800">
                      Reduced EO
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      4.5 × Duty Saved
                    </span>
                  </div>

                  <ArrowDownCircle className="text-green-500 w-8 h-8" />
                </div>

                <p className="text-xs text-slate-500 mt-4">
                  *Supports the “Make in India” initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Lifecycle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              License Lifecycle
            </h2>
          </div>

          {/* STEPS */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <FileCheck className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-sm text-slate-500">
                File ANF 5A on DGFT portal. Submit Nexus Certificate if
                required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <Stamp className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-sm text-slate-500">
                Register license at Customs Port. Execute Bond/BG.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <PackageCheck className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Import</h3>
              <p className="text-sm text-slate-500">
                Clear goods at 0% Duty. Install machinery at factory within 6
                months.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                <PlaneTakeoff className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Export</h3>
              <p className="text-sm text-slate-500">
                Start production and export goods. Mention EPCG License on
                Shipping Bills.
              </p>
            </div>

            {/* Step 5 - Final */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 
                            border-4 border-white shadow-sm"
              >
                <CheckCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Redemption</h3>
              <p className="text-sm text-slate-500">
                Submit Installation Certificate and Export Proofs to get EODC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees setShowEnrollModal={setShowEnrollModal} />

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Epcg-Scheme?</h2>
                    <p className="text-slate-500">
                        An EPCG license is a 6-year marriage with the DGFT. CloudDesk ensures you don't end up in a messy divorce.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. "Capital-Saved" Valuation Audit</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The export obligation is directly proportional to the duty you save.<strong> CloudDesk </strong>performs a <strong>Pre-Import Duty Mapping </strong>to calculate exactly how much export growth you need. 
                          If the obligation is too high for your business plan, we advise on alternative schemes like<strong> MOOWR </strong>to save you from future legal traps.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Nexus & Technical Certificate Management</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          To import a machine duty-free, you must prove a<strong> "Nexus"</strong>—that the machine actually helps produce the goods you export. 
                          We handle the<strong> Chartered Engineer (CE)</strong> <strong>Certification, ensuring </strong>the technical description of your machinery is bulletproof for DGFT and Customs.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. The 6-Year "Obligation" Radar</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         You have 6 years to complete your<strong> Export Obligation (EO).</strong><strong> CloudDesk’s EO-Dashboard</strong> tracks your progress year-by-year.
                         We ensure you meet the<strong> "Block-wise" </strong>requirements <strong>(50% in the first 4 years, 50% in the next 2),</strong> so you don't lose your license halfway through. 
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Redemption & BG Release</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         The final hurdle is the<strong> Export Obligation Discharge Certificate (EODC).</strong> We manage the reconciliation of Shipping<strong> Bills and Bank Realization Certificates (e-BRC).</strong>
                         Once the<strong> EODC </strong>is issued, we coordinate with Customs to release your<strong> Bank Guarantee (BG),</strong> putting your collateral back into your bank account.
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
                What can I import under the EPCG Scheme?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Capital goods required for pre-production, production, and post-production. This includes machinery, spare parts, tools, jigs, and even specialized software (for service exporters). It also covers "Second-hand" machinery, though with stricter conditions.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Who is eligible for EPCG?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Manufacturer exporters (with or without supporting manufacturers), merchant exporters tied to a manufacturer, and Service Providers (like Hotels, Hospitals, or IT firms) who earn foreign exchange.  
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What is the Export Obligation (EO)?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                You must export goods/services worth 6 times the duty saved within 6 years. This is in addition to your "Average Export Level"—meaning you must maintain your past performance and add the new obligation on top.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What happens if I can't meet the Export Obligation?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               You must pay the saved duty plus 15% annual interest. CloudDesk’s primary value is identifying "Shortfalls" early and applying for EO Extensions or "Clubbing of Licenses" to avoid these penalties.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Can I sell the machinery after importing it?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              No. The machinery is subject to "Actual User Condition" until the EODC is issued. You cannot shift, sell, or lease the machine without prior permission. CloudDesk helps with Installation Certificates to prove the machine is in your factory.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "Average Export Level"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               This is the average of your exports in the 3 years preceding the license. You must maintain this average every year while the EPCG license is active. CloudDesk helps you track this "Invisible Obligation" so you don't default.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Is there any relief for "Green Technology" or "North East" units?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes. In 2026, units producing Green Energy equipment or units located in the North East/Hilly regions have a reduced Export Obligation (often 75% of the normal rate). CloudDesk checks your eligibility for these "Bonus Benefits."
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is "Post-Export EPCG"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              If you don't want to take the risk of future obligations, you pay the duty upfront, do the exports, and then claim the duty back as a "Duty Credit Scrip." CloudDesk manages the scrip application to ensure you get your cash back.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Contact: Your trusted partner for DGFT, Customs, and
              Logistics compliance.
            </p>

            <div className="flex gap-4">
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Linkedin size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Twitter size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Advance Authorisation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scrips
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Status Holder Certificate
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Chartered Engineer List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT Public Notices
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Average Export Performance
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  FTP 2023 Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-500" />
                +917400096950
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-brand-500" />
                clouddesk@eximinq.in
              </li>

              <li className="flex gap-3 items-center">
                <MapPin size={18} className="text-brand-500" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-slate-500">
          © 2025 EXIMINQ CloudDesk. All Rights Reserved. Not affiliated with
          DGFT.
        </div>
      </footer>
    </div>
  );
};

export default CloudDeskMarine;
