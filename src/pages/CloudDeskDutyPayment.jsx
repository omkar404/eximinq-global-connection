import TopBar from "../components/CloudDeskDutyPayment/TopBar";
import Navbar from "../components/CloudDeskDutyPayment/Navbar";
import Hero from "../components/CloudDeskDutyPayment/Hero";
import Fees from "../components/CloudDeskDutyPayment/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  FileText,
  Key,
  Laptop2,
  CheckCircle,
  XCircle,
  Lightbulb,
  ScanLine,
  SlidersHorizontal,
  Signature,
  Calculator,
  Wallet,
  Info,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDutyPayment/MainNavbar";

const CloudDeskDutyPayment = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <TopBar />
      <MainNavbar />
      <Navbar />
      <Hero />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Electronic Cash Ledger (ECL)?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Electronic Cash Ledger (ECL)</strong> is a virtual
              wallet maintained on the ICEGATE portal. It was introduced to
              facilitate the payment of Customs Duty, Interest, Penalty, and
              other fees in a simplified manner.
            </p>
            <p className="mb-4">
              Instead of paying individual challans directly via bank (which
              often faced gateway failures), importers now "Top-Up" their ECL
              wallet using NEFT/RTGS. Once funds are in the wallet, they can be
              utilized to pay multiple Bill of Entry challans instantly with a
              single click.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Payment Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Comprehensive Duty Services
            </h2>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Calculator size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Duty Calculation
              </h3>
              <p className="text-sm text-slate-600">
                Accurate calculation of Basic Customs Duty (BCD), Social Welfare
                Surcharge (SWS), and IGST based on the latest notifications and
                FTA benefits.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wallet size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                ECL Wallet Management
              </h3>
              <p className="text-sm text-slate-600">
                We generate the Mandate Form for NEFT/RTGS, guide you on topping
                up the wallet, and track the credit reflection in the ICEGATE
                portal.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <FileText size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Interest Payment
              </h3>
              <p className="text-sm text-slate-600">
                If duty is not paid within the specified time (usually same day
                or next day of assessment), interest accrues. We help calculate
                and pay this interest to release cargo.
              </p>
            </div>
          </div>

          {/* IMPORTANT RULE BOX */}
          <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-lg text-center max-w-3xl mx-auto">
            <h4 className="font-bold text-blue-800 text-lg mb-2 flex justify-center items-center gap-2">
              <Info className="text-blue-600" size={20} />
              Important Rule
            </h4>
            <p className="text-sm text-blue-700">
              Customs Duty must be paid within <strong>24 hours</strong> of the
              Bill of Entry being returned to the importer for payment. Delay
              attracts interest @<strong> 15% p.a.</strong>
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              How to Pay
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              ECL Payment Workflow
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Generate Mandate</h3>
              <p className="text-sm text-slate-300">
                Create a NEFT/RTGS mandate form on ICEGATE for the required
                amount.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Bank Transfer</h3>
              <p className="text-sm text-slate-300">
                Transfer funds from your bank to the beneficiary (RBI/Customs)
                using the mandate details.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-accent-500"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Wallet Credit</h3>
              <p className="text-sm text-slate-300">
                Funds reflect in your ECL wallet usually within 1–2 hours.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-2xl font-bold text-white mx-auto mb-4 border-4 border-white"
              >
                <Check size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Pay Challan</h3>
              <p className="text-sm text-slate-300">
                Select the specific Bill of Entry challan and authorize payment
                from the wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Common Payment Queries
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I get a refund of the balance in my ECL?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, any unutilized balance in the Electronic Cash Ledger can be
                refunded to your registered bank account by filing a refund
                application on the ICEGATE portal.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does ECL work on weekends/holidays?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                The ICEGATE portal is available 24/7. However, NEFT/RTGS
                transfers depend on banking hours. If you use Netbanking
                (available for select banks), the top-up is usually instant even
                on holidays.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I pay duty for multiple Bills of Entry at once?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, this is the main advantage of ECL. You can top up a lump
                sum amount and then select multiple challans to pay them
                simultaneously from the wallet balance.
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
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  Duty Payment
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Bill of Entry Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  IGST Payment
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Interest Calculation
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
                  ECL User Manual
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Exchange Rates
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Duty Calculator
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Banking Partners
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

export default CloudDeskDutyPayment;
