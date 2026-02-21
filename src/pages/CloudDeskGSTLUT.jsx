// import TopBar from "../components/CloudDeskGSTLUT/TopBar";
import Navbar from "../components/CloudDeskGSTLUT/Navbar";
import Hero from "../components/CloudDeskGSTLUT/Hero";
import Fees from "../components/CloudDeskGSTLUT/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
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
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. The LUT is valid only for{" "}
                <strong>one Financial Year</strong>
                (1st April to 31st March). It must be renewed at the start of
                every new year.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the difference between LUT and Bond?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                An <em>LUT</em> is a simple undertaking used by eligible
                exporters. A <em>Bond</em> with a Bank Guarantee is required
                only when the exporter is not eligible for LUT or has been
                prosecuted for tax evasion above ₹ 2.5 Crores.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is LUT required for Service Exports?
                <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. Service exporters (IT, Consultancy, BPO, SaaS, etc.) must
                file LUT to issue export invoices without charging IGST.
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
