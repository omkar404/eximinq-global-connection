import TopBar from "../components/CloudDeskShippingBills/TopBar";
import Navbar from "../components/CloudDeskShippingBills/Navbar";
import Hero from "../components/CloudDeskShippingBills/Hero";
import Fees from "../components/CloudDeskShippingBills/Fees";
import {
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
      {/* <TopBar /> */}
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


        {/* --- WHY CLOUDDESK SECTION (ADD BEFORE FAQ) --- */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">A Shipping Bill filed without "Incentive Strategy" is a direct loss of 3%–7% of your profit margin.</h2>
                    {/* <p className="text-slate-500">"• Primary: ICEGATE 2.0 Registration, Indian Customs EDI Gateway, ICEGATE ID Creation, DSC Mapping on ICEGATE, e-Sanchit Document Upload.
                    • Long-Tail: Fix ICEGATE signer utility error 2026, mandatory documents for ICEGATE registration, how to link DSC to ICEGATE 2.0, ICEGATE 2FA setup guide, register as importer/exporter on ICEGATE."
                    </p> */}
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
                        <AlertTriangle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">1. Incentive "Auto-Optimizer"</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Most exporters miss out on<strong> RoDTEP or Drawback </strong>because they use the wrong Scheme Code 
                          <strong>(e.g., filing under "Free" instead of "Drawback").
                          CloudDesk’s</strong> Incentive Engine maps your HSN code to every available government benefit, 
                          ensuring all claimable amounts are declared before the Let Export Order (LEO) is generated.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. GSTN-E-Way Bill Integration</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         For the first time in 2026, the <strong>"System Validation" </strong>between your <strong>E-Way Bill, GST Invoice, and Shipping Bill </strong>is instantaneous. 
                         <strong>CloudDesk</strong> performs a Triple-Check Sync to ensure values, quantity, and <strong>HSN codes </strong>match perfectly, preventing the dreaded "SB005" error that blocks IGST refunds.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Real-Time LEO Tracker</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          The moment the Customs officer grants the <strong>Let Export Order (LEO),</strong> your cargo is legally exported. 
                          <strong>CloudDesk </strong>provides a Live Milestones Dashboard—from Goods Arrival to Examination to LEO and finally <strong>EGM (Export General Manifest)</strong>—so you can tell your buyer exactly when the ship is sailing.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. Digital EGM Automation</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Your export is only "Complete" in the eyes of the law when the shipping line files the EGM. 
                          If the <strong>EGM is not filed or has errors,</strong> your incentives are blocked. 
                          <strong>CloudDesk </strong>Monitors EGM Status and automatically triggers a follow-up with the shipping line if it’s not filed within 48 hours of vessel sailing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                When should a Shipping Bill be filed?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Under Section 50, it must be filed before the goods are brought into the Customs Area (Port/Airport). In practice, it is usually filed 24–48 hours before the truck arrives at the gate to ensure smooth entry.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is "LEO" (Let Export Order)?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                LEO is the final approval from the Customs Officer that allows the goods to be loaded onto the ship or aircraft. Once LEO is granted, the Shipping Bill cannot be easily edited. CloudDesk ensures all your data is 100% accurate before it reaches the officer's screen.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How do I ensure I get my RoDTEP and Duty Drawback?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               "You must mention the Scheme Code in the Shipping Bill.
               • RoDTEP: Use the specific code for the Remission of Duties and Taxes on Exported Products.
               • Drawback: Mention the DBK Schedule number and ""Brand Rate"" or ""All Industry Rate.""
               CloudDesk’s Scheme Validator does this for you automatically based on your product."

              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               Can I claim IGST refund and Duty Drawback together?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes. You can claim the refund of the IGST paid on exports and also claim the "All Industry Rate" of Duty Drawback (for the Customs portion). CloudDesk ensures your declaration is set up to receive both without manual intervention.
              </p>
            </details>

            {/* Question 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is the "SB005" error, and how does CloudDesk fix it? 
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               This is a "Data Mismatch" error between ICEGATE and GSTN. It is the #1 reason IGST refunds are delayed. CloudDesk’s Pre-Filing Sync catches these mismatches (like a missing 'dot' in the address or a 1-paise difference in value) before you hit submit.
              </p>
            </details>

            {/* Question 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Can I amend a Shipping Bill after the ship has sailed?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Yes, but it requires a Section 149 Amendment and usually a physical hearing at the Customs house. It is time-consuming and can involve penalties. CloudDesk handles the drafting and follow-up for these "Post-LEO" amendments.
              </p>
            </details>

            {/* Question 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What is an EGM, and why is it important for me?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               The Export General Manifest (EGM) is filed by the carrier (Shipping Line/Airline). It is the final proof that the goods have actually left India. Without a "Clean EGM" status, the GST department will not release your refund.
              </p>
            </details>

            {/* Question 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is a "Checklist"?
                <ChevronDown
                  size={20}
                  className="text-brand-500 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
               Before the final Shipping Bill is generated, a "Checklist" is created. This is your last chance to verify all details. CloudDesk sends this checklist to your phone for a one-click "Approved" or "Edit" signal, ensuring no data is filed without your consent.
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
