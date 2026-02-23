// import TopBar from "../components/CloudDeskEDPMS/TopBar";
import Navbar from "../components/CloudDeskEDPMS/Navbar";
import Hero from "../components/CloudDeskEDPMS/Hero";
import Fees from "../components/CloudDeskEDPMS/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser, 
  CheckCircle,   
  Phone,
  Mail,
  MapPin,
  Check,
  Headphones,
  Wifi,
  Watch,
  Contact2,
  Drone,
  Smartphone,
  FileCheck,
  IdCard,
  FileText,
  Settings,
  XCircle,
  Banl,
  Link2,
  Award,
  Eraser,
  Ban,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskEDPMS/MainNavbar";

const CloudDeskEDPMS = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      {/* <TopBar /> */}
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is EDPMS?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The{" "}
              <strong>
                Export Data Processing and Monitoring System (EDPMS)
              </strong>{" "}
              is an IT platform launched by the Reserve Bank of India (RBI) to
              monitor export transactions. It links Customs, SEZs, STPIs, and
              Authorized Dealer (AD) Banks to track whether export proceeds are
              realized within the stipulated time (usually 9 months).
            </p>

            <p className="mb-4">
              When you export, Customs sends the Shipping Bill data to EDPMS.
              When you receive payment, the Bank issues an{" "}
              <strong>Inward Remittance Message (IRM)</strong>. "Closing an
              entry" involves mapping this IRM to the Shipping Bill in the
              system. If this link is missing, the entry remains
              "Open/Outstanding," leading to non-compliance.
            </p>
          </div>
        </div>
      </section>

      <section id="caution" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div>
              <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
                Major Risk
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                The RBI Caution List
              </h2>

              <p className="text-slate-600 mb-6">
                If export proceeds are not realized and documents are not closed
                in EDPMS within 2 years (automatic caution listing), the RBI
                flags the IEC.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500 mb-4">
                <h4 className="font-bold text-red-900 mb-2">Consequences:</h4>

                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2" size={18} />
                    Shipping Bills cannot be generated.
                  </li>

                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2" size={18} />
                    Banks refuse to handle export documents.
                  </li>

                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2" size={18} />
                    Denial of export incentives (RoDTEP/Drawback).
                  </li>

                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2" size={18} />
                    Negative impact on credit rating.
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-block bg-brand-600 text-white font-bold py-3 px-8 
                rounded hover:bg-brand-700 transition"
              >
                Get De-listed Now
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-200 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ban className="text-4xl text-red-600" size={40} />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Are you at risk?
              </h3>

              <p className="text-slate-500 text-sm mb-6">
                Even if you have received payment, if the bank hasn't mapped it
                in EDPMS, you are technically non-compliant.
              </p>

              <div className="bg-slate-50 p-4 rounded text-xs text-left">
                <strong>Common Reasons:</strong>

                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Bank charges deducted (Short Payment)</li>
                  <li>Payment received from third party</li>
                  <li>Goods re-imported or rejected</li>
                  <li>Sample shipments not declared properly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Banking Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              How We Help
            </h2>
            <p className="text-slate-500 mt-2">
              Bridging the gap between your Bank and DGFT.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-600 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 text-2xl mb-4">
                <Link2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                IRM Mapping
              </h3>
              <p className="text-sm text-slate-600">
                We coordinate with your AD Bank to map the Inward Remittance
                Message (IRM) with the specific Shipping Bill number to close
                the entry (Knock-off).
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                e-BRC Generation
              </h3>
              <p className="text-sm text-slate-600">
                Assistance with the new DGFT Self-Certification e-BRC process.
                We help you utilize the IRM data to generate valid certificates
                for claiming incentives.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-accent-500 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 text-2xl mb-4">
                <Eraser size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Write-off / Extension
              </h3>
              <p className="text-sm text-slate-600">
                If the foreign buyer has defaulted, we help file for "Write-off"
                or "Extension of Time" with the AD Bank as per RBI Master
                Directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Closure Process
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Audit</h3>
              <p className="text-sm text-slate-300">
                Download "Outstanding List" from EDPMS and reconcile with your
                bank statements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Submission</h3>
              <p className="text-sm text-slate-300">
                Submit Disposal Instructions (DI) or request letter to the Bank
                with SB/IRM details.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            text-2xl font-bold text-brand-900 mx-auto mb-4 
                            border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Processing</h3>
              <p className="text-sm text-slate-300">
                Bank uploads closure data to RBI server. e-BRC data flows to
                DGFT.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            text-2xl font-bold text-white mx-auto mb-4 
                            border-4 border-white shadow-sm"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Removal</h3>
              <p className="text-sm text-slate-300">
                Caution list flag is removed automatically or upon specific
                request by AD Bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees />

{/* --- WHY CLOUDDESK SECTION (EDPMS / e-BRC) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for EDPMS & e-BRC?</h2>
      <p className="text-slate-500">
        Banks are notorious for 'forgetting' to map your inward remittance to your shipping bills. CloudDesk ensures your ledger is always zeroed out.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. IRM-to-Shipping Bill Mapping</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            When you receive foreign exchange, the bank creates an <strong>IRM (Inward Remittance Message)</strong> in EDPMS. If this isn't mapped to your Shipping Bill (SB), the bill stays <strong>"Open."</strong> CloudDesk performs a <strong>Weekly EDPMS Audit</strong>, identifying unmapped bills and forcing your AD Bank to close them before the <strong>15-month deadline</strong>.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. The New "Self-Certification" e-BRC</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            In late 2025/2026, the DGFT shifted from Bank-issued e-BRCs to <strong>Exporter Self-Certification</strong>. CloudDesk manages this digital filing on the DGFT portal, using your bank's transaction data to "Self-Certify" realization, which instantly unlocks your <strong>RoDTEP, Drawback, and AA/EPCG redemption</strong>.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Caution List Rescue</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you have "Open" bills older than 15 months, the RBI's automated system places your IEC on the <strong>Caution List</strong> — meaning you cannot ship without 100% advance payment or a Bank Guarantee. CloudDesk manages the <strong>Extension of Time (EOT)</strong> applications and coordinates with the <strong>RBI's Regional Office</strong> to delist your firm.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Write-off & Extension Management</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Sometimes buyers don't pay. In 2026, you can self-write off up to <strong>10% of your total annual realization</strong>. CloudDesk calculates your <strong>"Write-off Eligibility"</strong> and files the necessary <strong>"V-Form"</strong> with the bank to ensure your EDPMS reflects a <strong>"Closed" status</strong> even for bad debts.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (EDPMS / e-BRC) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Does the new e-BRC system require bank intervention?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Under the new DGFT system (2023), the process is self-certified. The bank issues the IRM, and the exporter can <strong>self-generate the e-BRC</strong> on the DGFT portal by linking the IRM to the Shipping Bill. However, closing the entry in <strong>EDPMS still requires bank action</strong>.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What if my payment came with a deduction (Bank Charges)?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Small deductions ("Bank Charges") are allowed. You must instruct the bank to close the Shipping Bill fully by accounting for the <strong>"Bank Charges" component separately</strong> in the EDPMS system.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I get removed from the Caution List instantly?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is not instant. Once the AD Bank marks the bills as <strong>"Realized" or "Extension Granted"</strong> in the EDPMS, the system updates the status <strong>overnight or within a few days</strong>, removing the caution flag.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the difference between EDPMS and e-BRC?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>EDPMS:</strong> An RBI system where the Shipping Bill (money expected) and IRM (money received) are matched.<br />
          • <strong>e-BRC:</strong> A DGFT certificate that proves the money was received, used to claim government incentives.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the time limit to realize export proceeds in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The standard window is <strong>15 months from the date of export</strong>. For "Status Holders" and specific "INR-Invoiced" exports, this can be extended up to <strong>18 months</strong> with prior bank approval.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Does EDPMS apply to Service Exports?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Service exports are monitored via the <strong>Unified EDF (Export Declaration Form)</strong>. In 2026, your <strong>FIRC (Foreign Inward Remittance Certificate)</strong> must be mapped to the EDF in the bank's portal to avoid a FEMA violation.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Why is my Shipping Bill still "Open" despite receiving payment?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The bank likely hasn't updated the <strong>"Object Code"</strong> or the <strong>"SB Mapping"</strong> in the EDPMS server. This is a common manual error by bank staff. CloudDesk provides the <strong>Reconciliation Report</strong> you need to send to your bank manager to fix this.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What happens if I receive payment in a different currency?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          EDPMS can handle currency fluctuations within a <strong>5% tolerance</strong>. If the difference is higher (due to bank charges or FX moves), you must provide a <strong>"Reason for Short-Realization"</strong> to the bank.
        </p>
      </details>

      {/* FAQ 9 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I get an e-BRC for a "Third-Party" payment?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes, but it's complex. You must mention the third-party details in the Shipping Bill and have a <strong>"Tripartite Agreement."</strong> Without this, the bank will refuse to issue the e-BRC and you'll <strong>lose your incentives</strong>.
        </p>
      </details>

      {/* FAQ 10 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What are the penalties for not closing EDPMS entries?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Under <strong>FEMA 1999/2026</strong>, non-realization is a serious offense. Penalties can be up to <strong>3x the amount not realized</strong>. More practically, your bank will stop issuing <strong>"Forward Contracts"</strong> and <strong>"PCFC" (Pre-shipment Credit)</strong> for your future orders.
        </p>
      </details>

      {/* FAQ 11 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How does the new e-BRC system affect GST refunds?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, the GST portal is <strong>directly linked to the DGFT's e-BRC server</strong>. If your e-BRC isn't generated within the time limit, the GST department can issue a <strong>"Demand"</strong> to recover the IGST refund they previously paid you.
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
                  e-BRC Generation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EDPMS Closure
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scrips
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Duty Drawback
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
                  RBI Master Circular
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT e-BRC Help
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Write-off Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  FEMA Regulations
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

export default CloudDeskEDPMS;
