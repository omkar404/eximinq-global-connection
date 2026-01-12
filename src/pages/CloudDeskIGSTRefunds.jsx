import TopBar from "../components/CloudDeskIGSTRefunds/TopBar";
import Navbar from "../components/CloudDeskIGSTRefunds/Navbar";
import Hero from "../components/CloudDeskIGSTRefunds/Hero";
import Fees from "../components/CloudDeskIGSTRefunds/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  FileSignature,
  Ship,
  Landmark,
  Database,
  SearchCheck,
  Table,
  Scroll,
  MapPin,
  Phone,
  Mail,
  FileText
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskIGSTRefunds/MainNavbar";

const CloudDeskIGSTRefunds = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <TopBar />
      <MainNavbar />
      <Navbar />
      <Hero />
      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}
      <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-900 mb-4">
              How Automated Refunds Work (And Fail)
            </h2>
            <div class="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div class="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p class="mb-4">
              Under <strong>Rule 96 of CGST Rules</strong>, exporters who pay
              IGST on exports can claim a refund. The process is designed to be
              automated: once the GSTR-3B is filed and the Export General
              Manifest (EGM) is submitted, the GSTN portal transmits invoice
              data to ICEGATE.
            </p>
            <p class="mb-4">
              Ideally, the ICEGATE system matches the GST return data with the
              Shipping Bill data. If they match, a{" "}
              <strong>Refund Scroll</strong> is generated, and money is credited
              to your bank account. However, even a tiny mismatch (like a comma
              in an invoice number or a ₹1 difference in tax value) causes the
              system to reject the refund, leading to specific{" "}
              <strong>Error Codes</strong>.
            </p>
          </div>
        </div>
      </section>
      <section id="errors" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Troubleshooting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Why is Your Refund Stuck?
            </h2>
            <p className="text-slate-500 mt-2">
              Identifying the error code is the first step to resolution.
            </p>
          </div>

          {/* ERROR CARDS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SB005 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 hover:shadow-xl transition">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-red-600">SB005</h3>
                <FileText className="text-slate-300 w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">
                Invoice Mismatch
              </h4>
              <p className="text-sm text-slate-600">
                The Invoice Number or Amount in the Shipping Bill does not match
                Table 6A of GSTR-1.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-brand-600">
                Solution: Amendment via Annexure
              </div>
            </div>

            {/* SB006 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-xl transition">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-orange-600">SB006</h3>
                <Ship className="text-slate-300 w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">EGM Error</h4>
              <p className="text-sm text-slate-600">
                Gateway EGM not filed OR error in container/rotation number.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-brand-600">
                Solution: Coordinate with Liner
              </div>
            </div>

            {/* PFMS */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-xl transition">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-blue-600">PFMS</h3>
                <Landmark className="text-slate-300 w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Bank Validation</h4>
              <p className="text-sm text-slate-600">
                PFMS rejected the bank account due to name mismatch or IFSC
                update.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-brand-600">
                Solution: Re-validation on ICEGATE
              </div>
            </div>

            {/* SB002 / SB004 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-xl transition">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-purple-600">SB002</h3>
                <Database className="text-slate-300 w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">EGM Not Filed</h4>
              <p className="text-sm text-slate-600">
                Common for ICD exports where gateway port EGM is missing.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-brand-600">
                Solution: Follow up with Carrier
              </div>
            </div>
          </div>
        </div>
      </section>
      (
      <section id="process" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Resolution Process
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We don't just identify the error; we fix it. Our team liaises
                with GSTN, ICEGATE, and Customs Officers to manually trigger the
                refund scroll.
              </p>

              <ul className="space-y-4">
                {/* Step 1 */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-900 font-bold">
                    <SearchCheck className="w-5 h-5 text-brand-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Detailed Diagnosis</h4>
                    <p className="text-xs text-slate-400">
                      Analysis of GST Returns vs Shipping Bills.
                    </p>
                  </div>
                </li>

                {/* Step 2 */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Table className="w-5 h-5 text-brand-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Concordance Table</h4>
                    <p className="text-xs text-slate-400">
                      Preparing the mapping sheet required by Customs.
                    </p>
                  </div>
                </li>

                {/* Step 3 */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FileSignature className="w-5 h-5 text-brand-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Officer Interface</h4>
                    <p className="text-xs text-slate-400">
                      Physical submission of documents for data correction.
                    </p>
                  </div>
                </li>

                {/* Step 4 */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Scroll className="w-5 h-5 text-brand-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Scroll Generation</h4>
                    <p className="text-xs text-slate-400">
                      Ensuring your name appears in the final payment scroll.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                Professional Fees
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                We operate on a transparent model.
              </p>

              <div className="space-y-4">
                {/* Fees Block 1 */}
                <div className="p-4 bg-slate-50 rounded border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-700">
                      Audit & Diagnosis
                    </span>
                    <span className="font-bold text-brand-600">₹ 1,500</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Per Shipping Bill Analysis
                  </p>
                </div>

                {/* Fees Block 2 */}
                <div className="p-4 bg-brand-50 rounded border border-brand-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-brand-900">
                      Success Fee
                    </span>
                    <span className="font-bold text-accent-600">
                      % of Refund
                    </span>
                  </div>
                  <p className="text-xs text-brand-700">
                    Payable only after scroll generation.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="#home"
                  className="inline-block bg-accent-500 text-brand-900 font-bold py-3 px-8 rounded-lg hover:bg-accent-600 transition"
                >
                  Start Recovery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What if I filed GSTR-3B but refund is not received?
                <ChevronDown className="w-5 h-5 text-brand-500 transition-transform group-open:rotate-180" />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Filing GSTR-3B is just the first step. You must check if the
                GSTR-1 data was transmitted to ICEGATE. Log in to the GST portal
                and check the "Track Status of IGST Refund" tab.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I amend the invoice details in Shipping Bill after export?
                <ChevronDown className="w-5 h-5 text-brand-500 transition-transform group-open:rotate-180" />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, Section 149 of the Customs Act allows amendment. However,
                for IGST refund purposes, officers often use the "Officer
                Interface" to manually correct the mismatch rather than amending
                the bill itself.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the time limit for claiming IGST refund?
                <ChevronDown className="w-5 h-5 text-brand-500 transition-transform group-open:rotate-180" />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Technically, the Shipping Bill is the application for refund, so
                there is no separate time limit if the bill was filed on time.
                However, resolving errors should be done promptly, ideally
                within 2 years.
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
                  IGST Refund
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
              <li>
                <a href="#" class="hover:text-white transition">
                  GST Lut Filing
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
                  Error Code List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  GST Circulars
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  ICEGATE Advisories
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  PFMS Validation
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

export default CloudDeskIGSTRefunds;
