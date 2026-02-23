import { useState } from "react";
// import TopBar from "../components/CloudDeskCA/TopBar";
import Navbar from "../components/CloudDeskCA/Navbar";
import Hero from "../components/CloudDeskCA/Hero";
import Fees from "../components/CloudDeskCA/Fees";
import {
  Check,
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
  Star,
  Settings,
  Boxes,
  Link,
  FileCheck,

} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCA/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskCA/ModalEnroll";
import { FaRegistered } from "react-icons/fa";

const CloudDeskCA = () => {
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
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            The Necessity of CA Certificates
          </h2>
          <div className="w-24 h-1 bg-brand-600 mx-auto rounded" />
        </div>

        {/* Content */}
        <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
          <p className="mb-4">
            For almost every major scheme under the{" "}
            <strong>Foreign Trade Policy (FTP)</strong>, the government
            requires verifiable proof of export performance or
            consumption of imported inputs. Since DGFT and Customs
            authorities cannot audit internal company records directly,
            they rely on certificates issued by a{" "}
            <strong>Chartered Accountant (CA)</strong>.
          </p>

          <p className="mb-4">
            This certificate confirms the accuracy of financial data and
            is mandatory for:
          </p>

          <ol className="list-decimal pl-6 mb-4">
            <li>
              <strong>Claiming Incentives:</strong> Establishing
              eligibility based on prescribed turnover thresholds.
            </li>
            <li>
              <strong>Closing Obligations:</strong> Certifying that
              duty-free imported inputs have been correctly consumed in
              production.
            </li>
            <li>
              <strong>Renewal or Amendment:</strong> Demonstrating
              continued compliance with financial and regulatory norms.
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section id="schemes" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            DGFT Requirements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Key Schemes Requiring CA Audit
          </h2>
        </div>

        {/* Schemes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Scheme 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-600 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Star Export House
            </h3>
            <p className="text-sm text-slate-600">
              CA certificate confirming{" "}
              <strong>export turnover</strong> for the last
              3–4 financial years (Appendix 3C) to determine
              Star status.
            </p>
          </div>

          {/* Scheme 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-600 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <Settings className="text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              EPCG EODC
            </h3>
            <p className="text-sm text-slate-600">
              Certificate confirming{" "}
              <strong>export obligation fulfillment</strong>{" "}
              and installation of machinery—mandatory
              for final EODC and bank guarantee cancellation.
            </p>
          </div>

          {/* Scheme 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-600 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <Boxes className="text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Advance License
            </h3>
            <p className="text-sm text-slate-600">
              CA certificate proving{" "}
              <strong>consumption of imported inputs</strong>{" "}
              as per SION or ad-hoc norms for redemption.
            </p>
          </div>

          {/* Scheme 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-600 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <Link className="text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Misc. Certifications
            </h3>
            <p className="text-sm text-slate-600">
              Foreign exchange earnings (Status Holder),
              non-availment of drawback, and average
              export performance certificates.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold uppercase tracking-wider text-sm">
            Our In-House Audit Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            4 Steps to Your Certificate
          </h2>
          <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
            We streamline the process using financial data you already
            maintain, minimizing manual effort and turnaround time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Data Submission</h3>
            <p className="text-sm text-slate-400">
              Submit audited balance sheet, ledger extracts,
              and e-BRCs or Shipping Bills.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Verification</h3>
            <p className="text-sm text-slate-400">
              Our CA validates turnover against GST and ITR
              data and cross-checks physical usage records.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Draft &amp; Sign</h3>
            <p className="text-sm text-slate-400">
              Certificate is drafted as per DGFT appendix
              format and digitally signed by our CA.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <FileCheck size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Finalization</h3>
            <p className="text-sm text-slate-400">
              Certificate delivered with a UCN (Unique Certificate
              Number) for DGFT and Customs verification.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees/>


{/* --- WHY CLOUDDESK SECTION (CA CERTIFICATION) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for CA Certification?</h2>
      <p className="text-slate-500">
        Most CAs are generalists. We provide "Exim-Specialist" CAs who understand SION, Appendix formats, and e-BRC mapping.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Redemption & Closure Specialists</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Closing an EPCG or Advance Authorization requires specific annexures <strong>(Appendix 5C or 4H)</strong>. Our CAs don't just sign; they perform a <strong>"Pre-Audit"</strong> of your Shipping Bills and e-BRCs to ensure the <strong>Export Obligation (EO) is actually met</strong> before filing.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Remittance Compliance (15CA/15CB)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you are paying a foreign supplier, agent, or service provider more than <strong>₹5 Lakh</strong>, you need a <strong>Form 15CB</strong>. We determine the correct <strong>DTAA (Double Taxation Avoidance Agreement)</strong> benefit so you don't overpay TDS (Tax Deducted at Source).
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Star Export House Benchmarking</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            To get "Star Status," your turnover must be certified over a <strong>3-year period (Appendix 3C)</strong>. We reconcile your <strong>GSTR-1 sales with your Bank Realizations</strong> to ensure your application isn't rejected for data mismatch.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Instant UDIN Generation</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            In 2026, the gap between certification and government portal upload is critical. We provide <strong>real-time UDIN-enabled digital certificates</strong> that are instantly verifiable by DGFT and Customs, preventing <strong>"pending" status</strong> on your applications.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (CA CERTIFICATION) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Why do I need a CA for EPCG closure?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You must prove you installed the machinery (<strong>Installation Certificate</strong>) and used it to export (<strong>Appendix 5C</strong>). A CA verifies that the specific Shipping Bills used for EO haven't been <strong>"double-counted"</strong> for other licenses.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is an "Average Export Performance" certificate?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          When applying for a new license, DGFT often asks for your <strong>average exports over the last 3 years</strong>. A CA certifies this so the government knows you have the capacity to <strong>fulfill future obligations</strong>.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can my internal company accountant sign these?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. It must be a <strong>Practicing Chartered Accountant</strong> (holding a Certificate of Practice) who is <strong>independent of the firm</strong>.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          When is Form 15CB mandatory in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is mandatory if the remittance to a non-resident exceeds <strong>₹5 Lakh in a financial year</strong> AND the payment is <strong>taxable in India</strong>.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the penalty for a wrong CA Certificate?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          If a CA provides false data, both the exporter and the CA face penalties under the <strong>FTDR Act and Customs Act</strong>, including <strong>blacklisting (DEL)</strong> and <strong>professional misconduct proceedings by ICAI</strong>.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Does a CA need to verify my "Consumption of Inputs"?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. For Advance Authorization, a CA (or a Chartered Engineer) must certify that the <strong>raw materials imported duty-free were actually consumed</strong> in the final export product as per <strong>SION norms</strong>.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How do I verify if my CA's certificate is genuine?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Go to the <strong>ICAI UDIN Portal</strong> and enter the <strong>18-digit number</strong> printed on the document. It will show you the CA's name and the specific values they certified (e.g., Turnover amount).
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What if my CA forgot to generate a UDIN?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, the CA has <strong>15 days to update the UDIN</strong>. If they fail, the document becomes <strong>"Invalid"</strong> and your DGFT application will be <strong>automatically rejected by the system</strong>.
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
                          <li><a href="#" class="hover:text-white transition">Export Turnover Cert</a></li>
                    <li><a href="#" class="hover:text-white transition">EODC Consumption Cert</a></li>
                    <li><a href="#" class="hover:text-white transition">Installation Cert</a></li>
                    <li><a href="#" class="hover:text-white transition">Average Export Cert</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">DGFT Appendix List</a></li>
                    <li><a href="#" class="hover:text-white transition">e-BRC Verification</a></li>
                    <li><a href="#" class="hover:text-white transition">ICAI CA Verification</a></li>
                    <li><a href="#" class="hover:text-white transition">FTP 2023 Guidelines</a></li>
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

export default CloudDeskCA;