import TopBar from "../components/CloudDeskRodtep/TopBar";
import Navbar from "../components/CloudDeskRodtep/Navbar";
import Hero from "../components/CloudDeskRodtep/Hero";
import Fees from "../components/CloudDeskRodtep/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser,
  CheckCircle, 
  FileSignature,
  FileText,
  Handshake,
  Globe2,
  Shirt,
  Sprout,
  Fish,
  Cog,
  FlaskConical,
  Workflow,
  ScrollText,
  BookUser,
  Coins,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskRodtep/MainNavbar";

const CloudDeskRodtep = () => {
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
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is the RoDTEP Scheme?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          {/* Description */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The{" "}
              <strong>
                RoDTEP (Remission of Duties and Taxes on Exported Products)
              </strong>{" "}
              scheme was introduced to replace the MEIS scheme. Its primary
              objective is to refund the embedded central, state, and local
              duties or taxes that were not being refunded under any other
              mechanism (like GST refund or Duty Drawback).
            </p>
            <p className="mb-4">
              These include taxes like VAT on fuel used in transportation, Mandi
              tax, and Electricity duty used during manufacturing. The rebate is
              issued in the form of a transferable electronic scrip (e-Scrip)
              which sits in an electronic ledger on the ICEGATE portal.
            </p>

            {/* Placeholder Image */}
            <div className="w-full text-center text-slate-400 italic mt-6">
              [Image of Tax Refund Flow Diagram]
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            {/* Card 1 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <FileText className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Electronic Scrip</h3>
              <p className="text-sm text-slate-500">
                No physical paper. Credits are maintained in a digital ledger on
                ICEGATE.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <Handshake className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Transferable</h3>
              <p className="text-sm text-slate-500">
                Scrips can be easily transferred to other IEC holders who need
                to pay Basic Customs Duty.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition">
              <Globe2 className="text-brand-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">All Sectors</h3>
              <p className="text-sm text-slate-500">
                Covers 8500+ tariff lines including Textiles, Agriculture,
                Marine, Leather, and Engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
      (
      <section id="rates" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Incentive Structure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              RoDTEP Rates & Caps
            </h2>
            <p className="text-slate-500 mt-2">
              Rates vary by product (0.5% to 4.3%) and often have a value cap.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                  <th className="px-6 py-4 border-b">Sector / Product</th>
                  <th className="px-6 py-4 border-b">Approx Rate (%)</th>
                  <th className="px-6 py-4 border-b">Cap (₹ per Unit)</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {/* Textiles */}
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-2">
                    <Shirt className="w-5 h-5 text-brand-600" />
                    Textiles (Apparel)
                  </td>
                  <td className="px-6 py-4">~ 2.5% - 4.3%</td>
                  <td className="px-6 py-4">Yes (varies)</td>
                </tr>

                {/* Agriculture */}
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-2">
                    <Sprout className="w-5 h-5 text-green-600" />
                    Agriculture
                  </td>
                  <td className="px-6 py-4">~ 1.4% - 2.0%</td>
                  <td className="px-6 py-4">None</td>
                </tr>

                {/* Marine */}
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-2">
                    <Fish className="w-5 h-5 text-blue-600" />
                    Marine Products
                  </td>
                  <td className="px-6 py-4">~ 2.5%</td>
                  <td className="px-6 py-4">₹ 16/kg (example)</td>
                </tr>

                {/* Engineering */}
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-2">
                    <Cog className="w-5 h-5 text-brand-600" />
                    Engineering Goods
                  </td>
                  <td className="px-6 py-4">~ 0.5% - 1.0%</td>
                  <td className="px-6 py-4">None</td>
                </tr>

                {/* Chemicals */}
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-purple-600" />
                    Chemicals / Plastics
                  </td>
                  <td className="px-6 py-4">~ 0.8% - 1.5%</td>
                  <td className="px-6 py-4">None</td>
                </tr>
              </tbody>
            </table>

            <div className="p-4 bg-brand-50 text-center text-xs text-brand-800">
              *Rates are subject to change by DGFT notifications. Contact us for
              the specific rate for your HS Code.
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              How to Claim RoDTEP
            </h2>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-5 gap-8 step-connector">
            {/* STEP 1 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-900 mx-auto mb-4 border-4 border-accent-500">
                <FileSignature className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Declaration</h3>
              <p className="text-sm text-slate-300">
                Mandatory declaration "RODTEPY" in the Shipping Bill.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-900 mx-auto mb-4 border-4 border-accent-500">
                <Workflow className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Processing</h3>
              <p className="text-sm text-slate-300">
                After EGM filing, RMS processes the Shipping Bill.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-900 mx-auto mb-4 border-4 border-accent-500">
                <ScrollText className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Scroll</h3>
              <p className="text-sm text-slate-300">
                Customs issues a RoDTEP Scroll with eligible bills.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-900 mx-auto mb-4 border-4 border-accent-500">
                <BookUser className="w-7 h-7 text-brand-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Ledger</h3>
              <p className="text-sm text-slate-300">
                Create RoDTEP Ledger on ICEGATE to receive credits.
              </p>
            </div>

            {/* STEP 5 */}
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
                <Coins className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Scrip</h3>
              <p className="text-sm text-slate-300">
                Generate e-Scrip. Use it or transfer to another importer.
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Most exporters lose 1-2% of their turnover because they don't know how to claim their scrips. CloudDesk ensures no rupee is left behind.</h2>
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
                        <h4 className="font-bold text-slate-900 mb-2">1.  The "Shipping Bill Declaration" Guard</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          You must claim<strong> RoDTEP </strong>at the time of filing the Shipping Bill. If you miss the<strong> "Intent" </strong>declaration on<strong> ICEGATE,</strong> the benefit is gone forever. 
                          <strong>CloudDesk’s</strong> Audit Engine scans every Shipping Bill before submission to ensure the correct<strong> "Scheme Code" </strong>is selected for your HSN.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 2 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">2. Digital Scrip Ledger Management</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Unlike old physical papers, these benefits are issued as Electronic Duty Credit Scrips in your ICEGATE ledger.
                          <strong>CloudDesk</strong> monitors your<strong> "Scrip Management Module,"</strong> tracks the generation of credits, and ensures they are<strong> "notarized" </strong>in the system so they don't expire.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 3 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">3. Monetization & Transfer (Cash Conversion)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                         If you don't have an <strong>import duty liability,</strong> these scrips are<strong> "Dead Capital."</strong> 
                         <strong>CloudDesk </strong>acts as your Scrip Broker. We help you transfer these scrips to other <strong>importers at a market premium, </strong>converting your tax credits into immediate cash flow.
                        </p>
                      </div>
                    </div>
        
                    {/* Feature 4 */}
                    <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
                        <ShieldUser size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">4. RoSCTL Specialization for Apparel</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          For the textile and garment<strong> sector, RoSCTL </strong>offers much higher rates than<strong> RoDTEP.</strong> 
                          We manage the specialized<strong> RoSCTL Ledger, </strong>ensuring that your garment exports are mapped to the correct<strong> "Apparel Category" </strong>for maximum rebate.
                        </p>
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
                Is RoDTEP applicable for Advance Authorisation / EOU?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Initially, it was excluded. However, the government has extended
                RoDTEP benefits to AA, EOU, and SEZ units for specific periods.
                Please check the latest notification or contact us for
                eligibility.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Does the RoDTEP scrip expire?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, the validity period of the scrip is generally{" "}
                <strong>one year</strong> from the date of its generation. It
                must be utilized for duty payment or transferred within this
                period.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                What duties can be paid using RoDTEP scrips?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                RoDTEP scrips can be used to pay{" "}
                <strong>Basic Customs Duty (BCD)</strong> only. They cannot be
                used to pay IGST, Compensation Cess, or other surcharges.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
               What is the main difference between RoDTEP and RoSCTL?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                "• RoDTEP: Covers almost all sectors (Engineering, Chemicals, Agriculture, etc.).
                 • RoSCTL: Specifically for Apparel, Garments, and Made-ups (Chapters 61, 62, and 63). It provides a higher rebate because the textile sector has more embedded taxes."
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is a "Duty Credit Scrip"?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It is a digital currency issued by Customs. You can use it to pay Basic Customs Duty (BCD) on your future imports, or you can sell it to someone else who needs to pay duty.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I claim RoDTEP if I am also using Advance Authorisation?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, but at a lower rate. In 2026, the government has enabled RoDTEP for AA/EPCG/EOU units, but the "RoDTEP for AA" rates are typically lower than the "Normal RoDTEP" rates. CloudDesk calculates which combination gives you the highest net saving.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              How do I claim the benefit?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                There is no separate application. You must declare your intent in the Shipping Bill (using specific codes for RoDTEP or RoSCTL). Once the EGM (Export General Manifest) is filed, the credit is automatically processed into your ICEGATE Ledger.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is the validity of the Scrip?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Typically, the scrips are valid for 1 or 2 years from the date of generation. If you don't use or sell them within this window, the value becomes zero. CloudDesk’s Expiry Alert ensures you never lose a scrip.
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Can I use RoDTEP to pay IGST?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. RoDTEP and RoSCTL scrips can only be used to pay Basic Customs Duty (BCD). They cannot be used for IGST, Compensation Cess, or Antidumping Duty.
              </p>
            </details>

            {/* FAQ 10 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Is it legal to sell RoDTEP scrips?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes. These scrips are "Freely Transferable." You can transfer them to any other IEC holder via the ICEGATE portal.
              </p>
            </details>

            {/* FAQ 11 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              How much "Cash" will I get if I sell my scrip?
                <ChevronDown className="text-brand-500 h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Scrips usually sell at a discount. For example, a ₹100 scrip might sell for ₹97 or ₹98 in the market. CloudDesk finds the buyer with the lowest discount (highest premium) for you.
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
                  SCOMET License
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Advance Authorisation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPCG Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Restricted Export License
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
                  Appendix 3 (SCOMET)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EUC Format (Appx 2S)
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  DGFT FAQs
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Wassenaar List
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

export default CloudDeskRodtep;
