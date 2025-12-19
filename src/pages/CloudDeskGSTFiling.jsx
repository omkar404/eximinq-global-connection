import { useState } from "react";
// import TopBar from "../components/CloudDeskGSTFiling/TopBar";
import Navbar from "../components/CloudDeskGSTFiling/Navbar";
import Hero from "../components/CloudDeskGSTFiling/Hero";
import Fees from "../components/CloudDeskGSTFiling/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
FileText, 
Calculator, 
RefreshCw, 
AlertCircle
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskGSTFiling/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskGSTFiling/ModalEnroll";

const CloudDeskGSTFiling = () => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      {/* <TopBar /> */}
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

    <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Exporters Need Specialized Filing</h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    For domestic businesses, GST filing is just about sales and purchases. But for <strong>Exporters</strong>, the GSTR-1 is the trigger for refunds. The data entered in <strong>Table 6A (Exports)</strong> must match exactly with the Shipping Bill details filed at Customs.
                </p>
                
                <p className="mb-4">
                    If the Invoice Number, Port Code, or Tax Amount differs even by a rupee, the ICEGATE system rejects the refund (Error SB005). General accountants often miss these critical validation checks. We ensure 100% data integrity before hitting 'Submit'.
                </p>
            </div>
        </div>
    </section>

    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-tax-600 font-bold uppercase tracking-wider text-sm">
            Monthly Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Core Filing Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-600 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-tax-100 rounded-lg flex items-center justify-center text-tax-600 mb-4 group-hover:bg-tax-600 group-hover:text-white transition">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              GSTR-1 Filing
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Detailed reporting of export invoices. We verify Port Code, SB
              Number, and Date against your actual export documents to prevent
              mismatch.
            </p>
            <span className="text-xs font-bold text-tax-700 bg-tax-50 px-2 py-1 rounded">
              Due: 11th of Month
            </span>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-accent-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 mb-4 group-hover:bg-accent-500 group-hover:text-white transition">
              <Calculator size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              GSTR-3B Filing
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Monthly summary return and tax payment. We ensure Input Tax Credit
              (ITC) is correctly claimed so it can be refunded later.
            </p>
            <span className="text-xs font-bold text-accent-700 bg-accent-50 px-2 py-1 rounded">
              Due: 20th of Month
            </span>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              2A/2B Reconciliation
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Matching your purchase invoices with supplier uploads. Essential
              to maximize your accumulated ITC refund claim.
            </p>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">
              Monthly Activity
            </span>
          </div>
        </div>

        {/* Warning Box */}
        <div className="mt-12 bg-green-50 border border-green-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
          <h4 className="font-bold text-green-900 text-lg mb-2 flex items-center justify-center gap-2">
            <AlertCircle size={18} />
            Don&apos;t Forget Table 6B
          </h4>
          <p className="text-sm text-green-800">
            Supplies to SEZ units/developers must be reported in Table 6B.
            Incorrectly filing them as normal exports stops the refund process.
          </p>
        </div>
      </div>
    </section>

       <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
            Monthly Routine
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our Filing Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-tax-300 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Data Collation</h3>
            <p className="text-sm text-slate-300">
              Collect Sales Register, Purchase Register, and Export Docs
              (Inv/SB).
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-tax-300 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Validation</h3>
            <p className="text-sm text-slate-300">
              Cross-verify Invoice Details against Shipping Bills for accuracy.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-tax-300 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Reconciliation</h3>
            <p className="text-sm text-slate-300">
              Check GSTR-2B to confirm eligible Input Tax Credit.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-tax-300 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Draft Filing</h3>
            <p className="text-sm text-slate-300">
              Share draft GSTR-1 &amp; 3B for client approval.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Check size={28} strokeWidth={3} />
            </div>
            <h3 className="text-lg font-bold mb-2">Submission</h3>
            <p className="text-sm text-slate-300">
              File return using EVC/DSC and share Acknowledgement.
            </p>
          </div>
        </div>
      </div>
    </section>


<Fees/>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {/* FAQ 1 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is the due date for GSTR-1 for exporters?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              For monthly filers, the due date is the{" "}
              <strong>11th</strong> of the following month. We strongly recommend
              filing by this date because the export data is pushed to ICEGATE
              only after GSTR-1 is filed.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Should I select &quot;Export with Payment&quot; or &quot;Without
              Payment&quot;?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              If you paid IGST on the invoice to claim a refund later, select
              &quot;Export with Payment of Tax&quot;. If you are exporting under
              LUT (Bond), select &quot;Export Without Payment of Tax&quot;.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Is GSTR-9 (Annual Return) mandatory?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Yes, for businesses with a turnover above ₹ 2 Crores. It
              consolidates all monthly returns filed during the financial year.
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
              EXIMINQ Cloud Desk: Your trusted partner for DGFT, Customs, and
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
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Monthly Returns</a></li>
                    <li><a href="#" class="hover:text-white transition">LUT Filing</a></li>
                    <li><a href="#" class="hover:text-white transition">IGST Refund</a></li>
                    <li><a href="#" class="hover:text-white transition">GST Registration</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">HSN SAC Codes</a></li>
                    <li><a href="#" class="hover:text-white transition">GST Rate Finder</a></li>
                    <li><a href="#" class="hover:text-white transition">Refund Manual</a></li>
                    <li><a href="#" class="hover:text-white transition">Invoice Format</a></li>
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

export default CloudDeskGSTFiling;