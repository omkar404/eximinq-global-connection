import TopBar from "../components/CloudDeskShippingBills/TopBar";
import Navbar from "../components/CloudDeskShippingBills/Navbar";
import Hero from "../components/CloudDeskShippingBills/Hero";
import Fees from "../components/CloudDeskShippingBills/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  Boxes,
  FileText,
  FileCheck,
  BadgeIndianRupee,
  Box,
  FileSignature,
  Banknote,
  Tag,
  CheckCheck,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskShippingBills/MainNavbar";

const CloudDeskShippingBills = () => {
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
              What is a Shipping Bill?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              A <strong>Shipping Bill</strong> is the primary document required
              by Customs Authorities for the clearance of goods for export. It
              serves as an application by the exporter for the permission to
              load goods onto the ship or aircraft.
            </p>
            <p className="mb-4">
              Once the Customs officer grants the{" "}
              <strong>"Let Export Order" (LEO)</strong> on the Shipping Bill,
              the goods can be legally exported. This document is also the basis
              for claiming export incentives like Duty Drawback, RoDTEP, and
              IGST refunds.
            </p>
          </div>
        </div>
      </section>

      <section id="types" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Categorization
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Types of Shipping Bills
            </h2>

            <p className="text-slate-500 mt-2">
              Selecting the right category is crucial for claiming incentives.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free SB */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-slate-300 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileCheck className="text-slate-600" size={22} />
                  <h3 className="text-xl font-bold text-slate-800">
                    Duty Free Shipping Bill
                  </h3>
                </div>

                <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                  General Export
                </span>

                <p className="text-slate-600 mt-4 text-sm">
                  Filed for goods that do not attract any export duty and for
                  which no duty drawback is being claimed. Commonly used for
                  general merchandise under LUT (Letter of Undertaking).
                </p>
              </div>
            </div>

            {/* Drawback SB */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeIndianRupee className="text-green-700" size={22} />
                  <h3 className="text-xl font-bold text-slate-800">
                    Drawback Shipping Bill
                  </h3>
                </div>

                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-800 rounded">
                  Incentive Claim
                </span>

                <p className="text-slate-600 mt-4 text-sm">
                  Filed when the exporter intends to claim{" "}
                  <strong>Duty Drawback</strong> on duties paid on raw
                  materials. The Drawback Serial Number (DBK Sr No) must be
                  mentioned correctly.
                </p>
              </div>
            </div>

            {/* Scheme SB */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-500 hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Boxes className="text-blue-700" size={22} />
                  <h3 className="text-xl font-bold text-slate-800">
                    Scheme Shipping Bill
                  </h3>
                </div>

                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded">
                  License Based
                </span>

                <p className="text-slate-600 mt-4 text-sm">
                  Filed for exports under specific DGFT schemes like{" "}
                  <strong>Advance Authorization</strong>, <strong>EPCG</strong>,
                  or <strong>RoDTEP</strong>. The license details must be linked
                  in the declaration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE — DOCUMENT LIST */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Documents Checklist
              </h2>

              <p className="text-slate-600 mb-8">
                Ensure these documents are ready for e-Sanchit upload to
                generate the Shipping Bill.
              </p>

              <ul className="space-y-4">
                {/* Commercial Invoice */}
                <li className="flex items-start gap-3">
                  <FileText className="text-brand-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      Commercial Invoice
                    </strong>
                    <span className="text-sm text-slate-500">
                      Must include GSTIN, Tax Invoice No, Date, HS Code, and
                      Terms (FOB/CIF).
                    </span>
                  </div>
                </li>

                {/* Packing List */}
                <li className="flex items-start gap-3">
                  <Box className="text-brand-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      Packing List (PL)
                    </strong>
                    <span className="text-sm text-slate-500">
                      Details of Net Weight, Gross Weight, Number of Packages,
                      and Marks/Numbers.
                    </span>
                  </div>
                </li>

                {/* LUT Bond */}
                <li className="flex items-start gap-3">
                  <FileSignature className="text-brand-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      LUT Bond Copy
                    </strong>
                    <span className="text-sm text-slate-500">
                      Letter of Undertaking ARN is mandatory for exporting
                      without paying IGST.
                    </span>
                  </div>
                </li>

                {/* AD Code */}
                <li className="flex items-start gap-3">
                  <Banknote className="text-brand-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      AD Code Registration
                    </strong>
                    <span className="text-sm text-slate-500">
                      Authorized Dealer Code must be registered at the specific
                      port.
                    </span>
                  </div>
                </li>

                {/* RoDTEP Declaration */}
                <li className="flex items-start gap-3">
                  <Tag className="text-brand-500 mt-1" size={22} />
                  <div>
                    <strong className="block text-slate-800">
                      RoDTEP Declaration
                    </strong>
                    <span className="text-sm text-slate-500">
                      If claiming benefits, a declaration confirming intent to
                      claim is required.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — WARNING BOX */}
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 flex items-center justify-center text-center">
              <div>
                <CheckCheck className="text-brand-400 text-5xl mx-auto mb-4" />

                <h3 className="text-xl font-bold text-brand-900 mb-2">
                  AD Code Warning
                </h3>

                <p className="text-slate-600 mb-6">
                  Shipping Bill cannot be generated if your AD Code is not
                  registered at the Port of Loading. We can register it for you.
                </p>

                <a
                  href="#contact"
                  className="inline-block bg-brand-600 text-white font-bold py-2 px-6 rounded hover:bg-brand-700 transition"
                >
                  Register AD Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Export Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Clearance Process
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 
              border-4 border-accent-500"
              >
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Checklist</h3>
              <p className="text-sm text-slate-300">
                Draft filing based on Invoice/PL. Client approval is mandatory.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 
              border-4 border-accent-500"
              >
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Filing</h3>
              <p className="text-sm text-slate-300">
                Submit to ICEGATE. SB Number is generated.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 
              border-4 border-accent-500"
              >
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Goods Registration</h3>
              <p className="text-sm text-slate-300">
                Cargo arrives at port. Customs Officer registers goods in
                system.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
              text-2xl font-bold text-brand-900 mx-auto mb-4 
              border-4 border-accent-500"
              >
                4
              </div>
              <h3 className="text-lg font-bold mb-2">LEO</h3>
              <p className="text-sm text-slate-300">
                Let Export Order" granted after verification. Goods cleared for
                loading.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center relative z-10">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center 
              text-2xl font-bold text-white mx-auto mb-4 
              border-4 border-white"
              >
                <Check className="w-6 h-6"></Check>
              </div>
              <h3 className="text-lg font-bold mb-2">EGM</h3>
              <p className="text-sm text-slate-300">
                Export General Manifest filed by carrier. Proof of export
                generated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Fees Section */}
      <Fees />

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
                  Shipping Bill Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Bill of Entry Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  AD Code Registration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scrip
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
                  HSN Code Finder
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Exchange Rates
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Drawback Schedule
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Container Tracking
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

export default CloudDeskShippingBills;
