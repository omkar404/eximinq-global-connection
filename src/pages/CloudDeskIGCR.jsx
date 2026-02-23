import { useState } from "react";
// import TopBar from "../components/CloudDeskIGCR/TopBar";
import Navbar from "../components/CloudDeskIGCR/Navbar";
import Hero from "../components/CloudDeskIGCR/Hero";
import Fees from "../components/CloudDeskIGCR/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Building,
  ShieldUser, 
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Coins,
  Calculator,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskIGCR/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskIGCR/ModalEnroll";

const CloudDeskIGCR = () => {
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What is IGCR?</h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
            </div>
            <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
                <p className="mb-4">
                    The <strong>Customs (Import of Goods at Concessional Rate of Duty) Rules, 2017 (IGCR Rules)</strong>, amended in 2022, govern the procedure for importers who avail of benefit of a Customs notification (like exemption or lower duty) for manufacturing or providing services.
                </p>
                [Image of IGCR Consumption Cycle Diagram]
                <p className="mb-4">
                    If you claim a duty benefit based on "End Use" (e.g., importing components for making mobile phones), you must prove to Customs that the goods were indeed used for that purpose. This is done by filing the <strong>IGCR-3 Monthly Statement</strong>. Failure to do so forces Customs to demand the differential duty with interest.
                </p>
            </div>
        </div>
    </section>


    <section id="forms" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Key Filings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            The 3 Pillars of IGCR
          </h2>
          <p className="text-slate-500 mt-2">
            Understanding the mandatory forms on ICEGATE.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* IGCR-1 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 hover:shadow-xl transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                Form IGCR-1
              </h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">
                One-Time
              </span>
            </div>

            <p className="text-sm text-slate-600">
              <strong>Prior Intimation:</strong> Filed before importing goods.
              Declares intent to avail concessional duty, details of the
              manufacturing unit, and generates an{" "}
              <strong>Import Identity Number (IIN)</strong>.
            </p>
          </div>

          {/* IGCR-2 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-orange-500 hover:shadow-xl transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                Form IGCR-2
              </h3>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold">
                Security
              </span>
            </div>

            <p className="text-sm text-slate-600">
              <strong>Bond Details:</strong> Submission of Continuity Bond and
              Bank Guarantee details on ICEGATE. This bond covers the
              differential duty amount in case of non-compliance.
            </p>
          </div>

          {/* IGCR-3 */}
          <div className="relative bg-white rounded-xl shadow-md p-8 border-t-4 border-green-600 hover:shadow-xl transition">
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs px-3 py-1 rounded shadow">
              Critical
            </div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                Form IGCR-3
              </h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">
                Monthly
              </span>
            </div>

            <p className="text-sm text-slate-600">
              <strong>Utilization Statement:</strong> Mandatory monthly return
              detailing consumption, stock, or re-export of imported goods.
              Must be filed by the <strong>10th</strong> of the following month.
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-12 bg-red-50 border border-red-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
          <h4 className="font-bold text-red-800 text-lg mb-2 flex justify-center items-center gap-2">
            <AlertTriangle size={20} />
            Non-Compliance Risk
          </h4>
          <p className="text-sm text-red-700">
            If IGCR-3 is not filed, the IIN may be deactivated, blocking future
            duty-free imports. Customs may also enforce the bond to recover duty.
          </p>
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
            Compliance Lifecycle
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">

          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-brand-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Import</h3>
            <p className="text-sm text-slate-300">
              Goods cleared at port using IIN. Bill of Entry details flow into the IGCR module.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-brand-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Receipt</h3>
            <p className="text-sm text-slate-300">
              File “Intimation of Receipt” on ICEGATE within 24 hours of goods reaching the factory.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-brand-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Usage</h3>
            <p className="text-sm text-slate-300">
              Maintain daily consumption records (Form B) for manufacturing.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center
                            text-2xl font-bold text-brand-900 mx-auto mb-4
                            border-4 border-brand-200 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Reporting</h3>
            <p className="text-sm text-slate-300">
              File IGCR-3 monthly statement consolidating receipts and usage.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center
                            mx-auto mb-4 border-4 border-white shadow-sm">
              <Check className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Closure</h3>
            <p className="text-sm text-slate-300">
              After full utilization, the bond amount is re-credited by Customs.
            </p>
          </div>

        </div>
      </div>
    </section>

    <Fees/>


{/* --- WHY CLOUDDESK SECTION (IGCR) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for IGCR Returns?</h2>
      <p className="text-slate-500">
        Concessional duty is a 'Loan' from the government. The IGCR-3 is your repayment schedule in terms of proof of use.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Automated Bond Re-Credit</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            In 2026, every time you file a return showing consumption, the system <strong>auto-credits your Continuity Bond</strong>. CloudDesk ensures your consumption data is uploaded accurately so your bond balance is always <strong>"High,"</strong> allowing for seamless back-to-back imports <strong>without fresh Bank Guarantees</strong>.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. The "6-Month Utilization" Watchdog</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            By law, goods imported under IGCR must be used within <strong>6 months</strong>. If they aren't, you must pay the <strong>full duty plus 15% interest</strong>. CloudDesk's <strong>Aging Report</strong> flags any inventory reaching the 5-month mark, giving you time to use it, re-export it, or seek an extension from the Commissioner.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Job-Work & Unit Transfer Management</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Are you sending goods to a third-party manufacturer? In 2026, the <strong>Form IGCR-2</strong> (Intimation of receipt/short-receipt) and tracking of goods at job-worker premises are strictly monitored. CloudDesk manages the <strong>digital trail from your warehouse to the job-worker and back</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Error-Free Excel Utility Filing</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The ICEGATE 2.0 portal is sensitive to data formatting. We use the <strong>official DG Systems Excel Utility</strong> to map your Bills of Entry (BE) to consumption, ensuring that <strong>BCD, IGST, and Cess values</strong> match the auto-populated backend data to avoid <strong>"Upload Rejections."</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (IGCR) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the deadline for filing IGCR returns?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You must submit the <strong>Form IGCR-3 monthly statement by the 10th day of the following month</strong>. For example, February 2026 consumption must be filed by March 10, 2026.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Do I need to file a return if I didn't import or use anything this month?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Filing a <strong>NIL Return is mandatory</strong>. Failure to file even a NIL return will result in the <strong>suspension of your IIN (IGCR Identification Number)</strong>.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I file intra-quarterly returns?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes, the portal allows <strong>Form IGCR-3A</strong> for intra-quarterly updates, which is useful for <strong>immediate bond re-credit</strong> if you have high-frequency imports.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What happens if I can't use the goods within 6 months?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You must pay the <strong>differential duty (the amount saved) along with interest</strong>. However, in 2026, the Jurisdictional Commissioner has the power to grant a <strong>3-month extension</strong> if the delay is beyond your control.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I re-export unutilized IGCR goods?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. You can re-export defective or unutilized goods under <strong>Rule 7</strong>, but you must <strong>record this in your monthly statement</strong> to close the entry in the system.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is IIN (IGCR Identification Number) a one-time thing?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. Once generated, the IIN is <strong>valid across all ports in India</strong>. However, you must update your <strong>Form IGCR-1 (Prior Intimation)</strong> if you add new items or change your manufacturing address.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the penalty for late filing of IGCR-3?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Apart from the system blocking your bond, you face penalties under the <strong>Customs Act, 1962</strong>. Repeated delays can lead to the <strong>permanent withdrawal of concessional benefits</strong> and a <strong>100% audit of your past five years</strong> of imports.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How does Customs verify my "Consumption"?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, Customs uses <strong>Risk-Based Data Analytics</strong>. If your <strong>"Output" (finished goods)</strong> doesn't logically match the <strong>"Input" (IGCR imports)</strong>, the system triggers a <strong>Physical Audit of your factory records</strong>.
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
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">IGCR-3 Filing</a></li>
                    <li><a href="#" class="hover:text-white transition">IIN Generation</a></li>
                    <li><a href="#" class="hover:text-white transition">MOOWR Scheme</a></li>
                    <li><a href="#" class="hover:text-white transition">Advance License</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">IGCR Rules 2022 PDF</a></li>
                    <li><a href="#" class="hover:text-white transition">Notification List</a></li>
                    <li><a href="#" class="hover:text-white transition">Bond Format</a></li>
                    <li><a href="#" class="hover:text-white transition">Penalty Clauses</a></li>
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

export default CloudDeskIGCR;
