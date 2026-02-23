// import TopBar from "../components/CloudDeskIES/TopBar";
import { useState } from "react";
import Navbar from "../components/CloudDeskIES/Navbar";
import Hero from "../components/CloudDeskIES/Hero";
import Fees from "../components/CloudDeskIES/Fees";
import { ModalEnroll } from "../components/CloudDeskIES/ModalEnroll";
import {
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser, 
  CheckCircle,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Factory,
  Building2,
  IdCard,
  FileCode,
  FileSignature,
  IndianRupee,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskIES/MainNavbar";

const CloudDeskIES = () => {
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is the Interest Equalisation Scheme?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Interest Equalisation Scheme (IES)</strong> allows
              eligible exporters to avail of Pre-shipment and Post-shipment
              export credit at a lower interest rate. The government reimburses
              the banks the difference (equalisation amount), and the banks pass
              this benefit to the exporter by charging a reduced rate.
            </p>

            <p className="mb-4">
              Example: If the bank's standard rate is 9% and you are eligible
              for a 3% subsidy, the bank will charge you only 6%. This scheme is
              crucial for making Indian exports competitive by lowering the cost
              of capital.
            </p>
          </div>
        </div>
      </section>

      <section id="rates" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Scheme Details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Who is Eligible?
            </h2>
            <p className="text-slate-500 mt-2">
              Current rates as per RBI/DGFT notifications.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* MSME */}
            <div
              className="bg-white rounded-xl shadow-lg border-t-8 border-green-500 overflow-hidden
                          hover:-translate-y-2 transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Factory className="text-green-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      MSME Manufacturers
                    </h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Highest Priority
                    </span>
                  </div>
                </div>

                <div className="text-4xl font-bold text-slate-900 mb-2">
                  3%{" "}
                  <span className="text-lg font-normal text-slate-500">
                    Subsidy
                  </span>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Available for <strong>All Products</strong> exported by MSME
                  manufacturers who have a valid Udyam Registration.
                </p>

                <div className="bg-green-50 p-4 rounded text-sm text-green-800 border border-green-200">
                  <strong>Requirement:</strong> Valid Udyam Certificate linked
                  to the export product.
                </div>
              </div>
            </div>

            {/* Non-MSME */}
            <div
              className="bg-white rounded-xl shadow-lg border-t-8 border-blue-500 overflow-hidden
                          hover:-translate-y-2 transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building2 className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Other Manufacturers
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Product Specific
                    </span>
                  </div>
                </div>

                <div className="text-4xl font-bold text-slate-900 mb-2">
                  2%{" "}
                  <span className="text-lg font-normal text-slate-500">
                    Subsidy
                  </span>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Available only for <strong>410 Specific Tariff Lines</strong>{" "}
                  identified by DGFT. Merchant exporters are generally excluded
                  unless specified.
                </p>

                <div className="bg-blue-50 p-4 rounded text-sm text-blue-800 border border-blue-200">
                  <strong>Requirement:</strong> ITC HS Code must match the 410
                  eligible lines.
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-slate-500 max-w-3xl mx-auto">
            *Note: The benefit is capped at ₹ 10 Crores per IEC per annum
            (subject to policy changes).
          </div>
        </div>
      </section>

      <section id="issues" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Do Banks Reject Claims?
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Even if you are eligible, simple documentation errors can lead
                to your bank denying the interest subvention. We audit your file
                to ensure zero rejections.
              </p>

              <ul className="space-y-4">
                {/* Issue 1 */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <IdCard className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Udyam Mismatch</h4>
                    <p className="text-xs text-slate-400">
                      NIC Code in Udyam does not match the product being
                      exported.
                    </p>
                  </div>
                </li>

                {/* Issue 2 */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <FileCode className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">HS Code Errors</h4>
                    <p className="text-xs text-slate-400">
                      Exporting under a generic HS code not listed in the 410
                      eligible lines.
                    </p>
                  </div>
                </li>

                {/* Issue 3 */}
                <li className="flex items-center gap-4 bg-brand-800 p-4 rounded-lg border border-brand-700">
                  <FileSignature className="text-accent-400 w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-lg">Late Submission</h4>
                    <p className="text-xs text-slate-400">
                      Failure to submit auditor certificate or UIN to the bank
                      on time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="relative bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                Retrospective Claim
              </h3>

              <p className="text-sm text-slate-600 mb-6">
                Did you miss claiming IES in the past? It may still be possible
                to claim retrospectively if the shipment falls within the
                eligible period and documents are in order.
              </p>

              <div class="mt-6 text-center">
                <a
                  href="#contact"
                  class="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 transition"
                >
                  Audit Past Shipments
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              How to Avail
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Claim Process
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
              <h3 className="text-lg font-bold mb-2">Check</h3>
              <p className="text-sm text-slate-500">
                Verify if your product (HS Code) is in the eligible list.
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
              <h3 className="text-lg font-bold mb-2">Code</h3>
              <p className="text-sm text-slate-500">
                Ensure the correct <strong>Scheme Code</strong> is mentioned on
                the Shipping Bill.
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
              <h3 className="text-lg font-bold mb-2">Submit</h3>
              <p className="text-sm text-slate-500">
                Provide Udyam Certificate and Undertaking to your AD Bank.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                            mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <IndianRupee className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Credit</h3>
              <p className="text-sm text-slate-500">
                Bank reduces the interest rate charged on your loan account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees />

        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Interest-Equalisation-scheme?</h2>
                    <p className="text-slate-500">
                          Banks won't give you the discount unless you give them the UIN. CloudDesk ensures your finance is 'Subvention-Ready' before you sign the loan.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. The "UIN-First" Compliance</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          In 2026, you cannot walk into a bank and ask for a subvention. You must first file an<strong> "Intent to Avail" </strong>on the DGFT portal to generate a<strong> Unique Identification Number (UIN).</strong> 
                          <strong>CloudDesk </strong>handles this digital filing, ensuring your HSN codes match the<strong> "Positive List" (which covers ~75% of tariff lines).</strong>
                         </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. The ₹50 Lakh Cap Sentinel</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The subvention is now capped at<strong> ₹50 Lakh per IEC per financial year.</strong> 
                          <strong>CloudDesk’s Finance </strong>Tracker monitors your aggregate claims across multiple banks. 
                          We alert you when you are nearing the cap so you don't over-claim, which now triggers a mandatory<strong> "Voluntary Surrender" </strong>and potential penalties.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. HSN Positive List Validation</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Not all products qualify anymore. The 2026 scheme excludes<strong> Waste/Scrap, PLI-covered products, and Restricted items.</strong> 
                          We perform a <strong>Product-Subvention Audit </strong>to confirm your HSN is on the current<strong> "Positive List" </strong>before you commit to an export order.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Bank Liaison & Auditor Certification</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Banks require a specific External Auditor Certification to claim the reimbursement from<strong> RBI. </strong>
                          <strong>CloudDesk </strong>coordinates with your auditors and the bank’s trade finance desk to ensure the<strong> "Interest-Relief" </strong>is passed on upfront—so you pay less interest from Day 1, rather than waiting for a refund.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the current interest subvention rate in 2026?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               The base rate is 2.75% per annum for all eligible MSME (Micro, Small, and Medium) manufacturer exporters.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Are Merchant Exporters still eligible?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. As of the 2026 revamp, the scheme is exclusively for MSME Manufacturers. Non-MSME and Merchant exporters have been moved out of the fresh claim cycle to focus resources on small-scale manufacturing.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is there a limit on how much I can save?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. The fiscal benefit is capped at ₹50 Lakh per exporting firm per financial year.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Do I need a new UIN for every loan?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                You need a UIN to be shared with your bank. The UIN is generally valid for one year. If you deal with multiple banks, you must ensure the total subvention across all banks stays under the ₹50 Lakh cap.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "Positive List"?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  The government now maintains a list of HSN 6-digit codes that are eligible for the 2.75% subvention. If your product is not on this list (e.g., certain steel or chemical lines), you cannot claim the benefit.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What documents are needed for the DGFT UIN?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  You need an Active IEC, Udyam Registration, and a valid Digital Signature (DSC). CloudDesk handles the portal navigation and document attachment (Export Orders, etc.).
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I claim Interest Subvention if I am also in a PLI Scheme?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  No. Products covered under any Production Linked Incentive (PLI) scheme are specifically excluded from interest subvention in 2026 to prevent "Incentive Overlap."
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What happens if I over-claim?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  If you exceed the ₹50 Lakh cap, you must voluntarily surrender the excess within the same financial year. Failure to do so renders you liable for the amount plus interest/penalties from the DGFT.
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
              <li>
                <a href="#" class="hover:text-white transition">
                  Interest Equalisation
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
                  GST Refund
                </a>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition">
                  410 Eligible Items
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RBI Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  MSME Classification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Bank Process
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
export default CloudDeskIES;
