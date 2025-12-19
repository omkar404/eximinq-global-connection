import TopBar from "../components/CloudDeskBankEntry/TopBar";
import Navbar from "../components/CloudDeskBankEntry/Navbar";
import Hero from "../components/CloudDeskBankEntry/Hero";
import Fees from "../components/CloudDeskBankEntry/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  File,
  Check,
  FileOutput,
  HandCoins,
  RefreshCcw,
  CheckCircle,
  ChevronRight,
  FileArchiveIcon,
  Boxes,
  ShipIcon,
  ShieldCheckIcon,
  Flag,
  TriangleAlert,
  Ship,
  FileText,
  Shield,
  Award,
  AlertTriangle
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskBankEntry/MainNavbar";

const CloudDeskBankEntry = () => {
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
              What is a Bill of Entry?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>

          {/* Description */}
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              A <strong>Bill of Entry (BOE)</strong> is a legal document filed
              by an importer or their Custom House Agent (CHA) on the ICEGATE
              portal to claim imported goods from Customs. It declares the
              precise nature, quantity, and value of goods that have landed in
              India.
            </p>

            <p className="mb-4">
              Filing a BOE is the first step in the customs clearance process.
              Based on this declaration, the Customs authorities assess the duty
              payable. Late filing (beyond 24 hours of arrival) attracts strict
              penalties from Customs.
            </p>
          </div>
        </div>
      </section>

      <section id="types" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Classification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Types of Bill of Entry
            </h2>
            <p className="text-slate-500 mt-2">
              Choose the right type based on your clearance needs.
            </p>
          </div>

          {/* Types Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* White Bill */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-slate-300 hover:shadow-xl transition">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Home Consumption
                </h3>
                <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                  White Bill
                </span>
                <p className="text-slate-600 mt-4 text-sm">
                  Filed when the importer wants to clear the goods for immediate
                  use or sale. Import duty must be paid immediately upon
                  assessment to release cargo.
                </p>
              </div>
            </div>

            {/* Yellow Bill */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-yellow-400 hover:shadow-xl transition">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Warehousing (Into Bond)
                </h3>
                <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                  Yellow Bill
                </span>
                <p className="text-slate-600 mt-4 text-sm">
                  Filed when the importer wishes to store goods in a Customs
                  Bonded Warehouse without paying duty immediately. Duty is
                  deferred until clearance.
                </p>
              </div>
            </div>

            {/* Green Bill */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Ex-Bond Clearance
                </h3>
                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-800 rounded">
                  Green Bill
                </span>
                <p className="text-slate-600 mt-4 text-sm">
                  Filed to clear goods from the warehouse for home consumption.
                  Duty is paid at this stage (along with interest if stored
                  beyond free period).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Documents Checklist
            </h2>

            <p className="text-slate-600 mb-8">
              To file a Bill of Entry smoothly, ensure you have the following
              documents ready for e-Sanchit upload.
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
                    Must clearly mention HS Codes, Unit Price, Currency & Incoterms.
                  </span>
                </div>
              </li>

              {/* Packing List */}
              <li className="flex items-start gap-3">
                <Boxes className="text-brand-500 mt-1" size={22} />
                <div>
                  <strong className="block text-slate-800">
                    Packing List (PL)
                  </strong>
                  <span className="text-sm text-slate-500">
                    Details of contents, net weight & gross weight per package.
                  </span>
                </div>
              </li>

              {/* BL / AWB */}
              <li className="flex items-start gap-3">
                <Ship className="text-brand-500 mt-1" size={22} />
                <div>
                  <strong className="block text-slate-800">
                    Bill of Lading / Airway Bill
                  </strong>
                  <span className="text-sm text-slate-500">
                    Transport document issued by carrier or freight forwarder.
                  </span>
                </div>
              </li>

              {/* Insurance Copy */}
              <li className="flex items-start gap-3">
                <Shield className="text-brand-500 mt-1" size={22} />
                <div>
                  <strong className="block text-slate-800">
                    Insurance Copy
                  </strong>
                  <span className="text-sm text-slate-500">
                    Required for FOB/Ex-Works shipments to calculate CIF.
                  </span>
                </div>
              </li>

              {/* COO */}
              <li className="flex items-start gap-3">
                <Award className="text-brand-500 mt-1" size={22} />
                <div>
                  <strong className="block text-slate-800">
                    Country of Origin Certificate
                  </strong>
                  <span className="text-sm text-slate-500">
                    Mandatory to claim preferential duty benefits (FTA/PTA).
                  </span>
                </div>
              </li>

            </ul>
          </div>

          {/* RIGHT SIDE — Warning Card */}
          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 flex items-center justify-center text-center">
            <div>
              <AlertTriangle className="text-yellow-500 mx-auto mb-4" size={60} />

              <h3 className="text-xl font-bold text-brand-900 mb-2">
                Avoid Penalty
              </h3>

              <p className="text-slate-600 mb-6">
                Late filing charges apply if BOE is not filed before the arrival
                of the vessel/aircraft.
              </p>

              <a
                href="#contact"
                className="inline-block bg-brand-600 text-white font-bold py-2 px-6 rounded hover:bg-brand-700 transition"
              >
                File Advance Bill
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
              Workflow
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
                We verify documents and generate a draft checklist for your
                approval.
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
                Submission to ICEGATE system upon checklist confirmation.
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
              <h3 className="text-lg font-bold mb-2">Assessment</h3>
              <p className="text-sm text-slate-300">
                Customs appraiser reviews value and HS code. Queries raised if
                any.
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
              <h3 className="text-lg font-bold mb-2">Duty</h3>
              <p className="text-sm text-slate-300">
                Importer pays the assessed Customs Duty online.
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
              <h3 className="text-lg font-bold mb-2">OOC</h3>
              <p className="text-sm text-slate-300">
                Out of Charge (OOC) order is issued. Goods released for
                delivery.
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
                  Bill of Entry Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Shipping Bill Filing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  AD Code Registration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  IGST Refund
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
                  Duty Drawback
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Customs Circulars
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

export default CloudDeskBankEntry;
