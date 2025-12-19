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
