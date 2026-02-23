// import TopBar from "../components/CloudDeskGSTLUT/TopBar";
import Navbar from "../components/CloudDeskGSTLUT/Navbar";
import Hero from "../components/CloudDeskGSTLUT/Hero";
import Fees from "../components/CloudDeskGSTLUT/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,   
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  IdCard,
  KeyRound,
  FileText,
  CheckCheck,
  Check,
  Wallet,
  Laptop,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskGSTLUT/MainNavbar";

const CloudDeskGSTLUT = () => {
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
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is a Letter of Undertaking (LUT)?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded" />
          </div>

          {/* Content */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              Under the GST regime, exports are treated as "Zero Rated
              Supplies". An exporter has two options:
              <br />
              1. Pay IGST on export and claim a refund later.
              <br />
              2. Export under <strong>Letter of Undertaking (LUT)</strong>{" "}
              without paying IGST.
            </p>

            {/* Replace this image src with your actual file */}
            <div className="my-6">
              <p>[Image of GST Export Options Flowchart]</p>
            </div>

            <p className="mb-4">
              Filing an LUT (Form GST RFD-11) is a compliance procedure where
              the exporter declares that they will fulfill all export
              requirements. If they fail to export goods within 3 months or
              receive payment for services within 1 year, they undertake to pay
              the applicable IGST along with interest.
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Why File?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Advantages of LUT
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Wallet className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Save Working Capital
              </h3>
              <p className="text-sm text-slate-600">
                Paying 18% IGST upfront blocks significant funds. With LUT, you
                pay Zero tax at the time of export, keeping your cash flow
                healthy.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Seamless Clearance
              </h3>
              <p className="text-sm text-slate-600">
                The LUT Reference Number (ARN) is mandatory in the Shipping
                Bill. Without it, customs may demand IGST payment before
                allowing export.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Laptop className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                100% Online
              </h3>
              <p className="text-sm text-slate-600">
                No physical visits to the GST department. The entire process,
                from application to approval (ARN generation), is digital and
                instant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Required Documents
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                To file Form GST RFD-11, you need details of two independent
                witnesses.
              </p>

              <ul className="space-y-4">
                {/* Item 1 */}
                <li className="flex items-start gap-3">
                  <IdCard className="text-accent-400 mt-1 w-5 h-5" />
                  <div>
                    <strong className="block text-white">
                      Witness Details (Two Persons)
                    </strong>
                    <span className="text-sm text-slate-400">
                      Name, Address, and Occupation of two independent
                      witnesses.
                    </span>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-3">
                  <KeyRound className="text-accent-400 mt-1 w-5 h-5" />
                  <div>
                    <strong className="block text-white">
                      Digital Signature (DSC)
                    </strong>
                    <span className="text-sm text-slate-400">
                      Of the Authorized Signatory (Proprietor / Partner /
                      Director).
                    </span>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-3">
                  <FileText className="text-accent-400 mt-1 w-5 h-5" />
                  <div>
                    <strong className="block text-white">
                      Letter of Authorization
                    </strong>
                    <span className="text-sm text-slate-400">
                      Board Resolution or Letter authorizing the signatory to
                      sign the LUT.
                    </span>
                  </div>
                </li>

                {/* Item 4 */}
                <li className="flex items-start gap-3">
                  <CheckCheck className="text-accent-400 mt-1 w-5 h-5" />
                  <div>
                    <strong className="block text-white">Previous LUT</strong>
                    <span className="text-sm text-slate-400">
                      Copy of previous year's LUT ARN (if applying for renewal).
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                Eligibility Criteria
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  <Check className="text-green-500 mr-2 inline-block" />
                  Must be a registered GST taxpayer.
                </p>

                <p>
                  <Check className="text-green-500 mr-2 inline-block" />
                  Must intend to supply goods/services to SEZ or Export.
                </p>

                <p className="bg-red-50 p-3 rounded border-l-4 border-red-500 text-red-700">
                  <strong>Restriction:</strong> Should not have been prosecuted
                  for any offence under the CGST Act or IGST Act where tax
                  evaded exceeds ₹ 250 Lakhs.
                </p>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="#contact"
                  className="inline-block bg-accent-500 text-brand-900 font-bold py-3 px-8 rounded-lg hover:bg-accent-600 transition"
                >
                  Confirm Eligibility
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
              Filing Steps
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              How We File LUT
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-4 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Login</h3>
              <p className="text-sm text-slate-500">
                Log in to GST Portal &gt; User Services &gt; Furnish Letter of
                Undertaking.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Data Entry</h3>
              <p className="text-sm text-slate-500">
                Select Financial Year. Enter details of two independent
                witnesses.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Signing</h3>
              <p className="text-sm text-slate-500">
                Generate Preview. Sign with DSC or EVC (OTP).
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
                text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm"
              >
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Approval</h3>
              <p className="text-sm text-slate-500">
                System instantly generates Acknowledgement Receipt Number (ARN).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fees />

{/* --- WHY CLOUDDESK SECTION (GST LUT) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for GST LUT Filing?</h2>
      <p className="text-slate-500">
        An LUT is a promise to the President of India. If you break it, the interest penalties are brutal.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Zero-Tax Invoicing</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The LUT converts your exports into <strong>"Zero-Rated Supplies."</strong> This means you don't charge a single rupee of GST to your foreign client, making your quotes <strong>18% more competitive instantly</strong>. CloudDesk ensures your LUT is filed before your first April shipment to avoid <strong>"Tax-Traps."</strong>
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Working Capital Protection</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Without an LUT, you pay IGST from your pocket and wait <strong>60–90 days for a refund</strong>. For a ₹1 Crore export, that's <strong>₹18 Lakhs blocked</strong>. CloudDesk's <strong>Same-Day Filing</strong> keeps that cash in your bank account, not the government's.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. Witness & Signatory Compliance</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The GST portal requires details of <strong>two independent witnesses</strong>. We ensure these details are legally sound and that the <strong>Authorized Signatory</strong> (Director/Partner/Proprietor) signs via <strong>DSC or EVC</strong> without technical glitches.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. The "12-Month Rule" Monitoring</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Filing the LUT is step one. Step two is <strong>Realizing the Payment</strong>. If you don't receive foreign exchange within <strong>1 year</strong>, you must pay back the IGST with <strong>18% interest</strong>. CloudDesk's <strong>EDPMS-GST Link</strong> alerts you 90 days before this deadline.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (GST LUT) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is LUT valid for a lifetime?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. The LUT is valid only for <strong>one Financial Year (1st April to 31st March)</strong>. It must be renewed at the start of every new year.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the difference between LUT and Bond?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          An <strong>LUT</strong> is a simple undertaking used by eligible exporters. A <strong>Bond with a Bank Guarantee</strong> is required only when the exporter is not eligible for LUT or has been prosecuted for tax evasion above <strong>₹2.5 Crores</strong>.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is LUT required for Service Exports?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. <strong>Service exporters</strong> (IT, Consultancy, BPO, SaaS, etc.) must file LUT to issue export invoices <strong>without charging IGST</strong>.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the validity of a GST LUT?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          An LUT is valid for <strong>one financial year only (April 1 to March 31)</strong>. You must file a <strong>fresh renewal for FY 2026-27</strong> immediately after the current year ends.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Who is eligible to file an LUT?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Any registered GST taxpayer who has <strong>not been prosecuted for tax evasion exceeding ₹2.5 Crore</strong>. If you are under investigation or have a history of major fraud, you must furnish a <strong>Bond (on Stamp Paper)</strong> instead of an LUT.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I file an LUT mid-year?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. But it only applies to exports made <strong>after the filing date</strong>. You cannot apply it retroactively to shipments already dispatched.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Do I need to upload any documents on the GST portal?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, the process is mostly <strong>self-declaration</strong>. You don't need to upload the IEC or GST cert, but you must have the <strong>Previous Year's LUT ARN</strong> handy if you are renewing.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can a Service Exporter (SaaS/Freelancer) file an LUT?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Absolutely. Whether you export <strong>software, consulting, or car parts</strong>, the LUT route is the standard way to avoid IGST.
        </p>
      </details>

      {/* FAQ 9 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What happens if I forget to mention the LUT ARN on my export invoice?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Customs may reject the shipping bill, or the GST department may treat it as a <strong>"Taxable Supply,"</strong> demanding IGST. CloudDesk provides a <strong>Standard Invoice Template</strong> that includes the mandatory <strong>"Export under LUT"</strong> declaration.
        </p>
      </details>

      {/* FAQ 10 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "Export Timeline" I agree to in the LUT?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You undertake to:<br />
          1. Export the goods within <strong>3 months of the invoice date</strong>.<br />
          2. Realize the payment in foreign currency within <strong>1 year</strong> (or as per RBI rules).
        </p>
      </details>

      {/* FAQ 11 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          If I fail to export within 3 months, what happens?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You must pay the applicable <strong>IGST plus 18% interest</strong> within <strong>15 days</strong> of the expiry of the 3-month period. If you don't, your <strong>LUT facility can be withdrawn</strong>.
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
                  GST LUT Filing
                </a>
              </li>
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
                  Export Licensing
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
                  GST Circulars
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  LUT Format
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Export Invoicing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Refund Manual
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

export default CloudDeskGSTLUT;
