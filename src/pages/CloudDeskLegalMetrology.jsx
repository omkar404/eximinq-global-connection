// import TopBar from "../components/CloudDeskLegalMetrology/TopBar";
import Navbar from "../components/CloudDeskLegalMetrology/Navbar";
import Hero from "../components/CloudDeskLegalMetrology/Hero";
import Fees from "../components/CloudDeskLegalMetrology/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  IdCard,
  PackageOpen,
  Scale,
  CalendarDays,
  IndianRupee,
  Headphones,
  AlertTriangle,
  CheckCircle,
  Stamp,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskLegalMetrology/MainNavbar";

const CloudDeskLegalMetrology = () => {
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
              What is LMPC Certificate?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              <strong>LMPC (Legal Metrology Packaged Commodities)</strong>{" "}
              Registration is mandatory under the Legal Metrology Act, 2009 and
              LMPC Rules, 2011. It applies to all pre-packaged commodities
              imported into India for sale, distribution, or consumption.
            </p>
            <p className="mb-4">
              <br />
              Under <strong>Rule 27</strong>, every importer must register their
              name and address with the Director of Legal Metrology (Central) or
              the Controller of Legal Metrology (State) <strong>before</strong>{" "}
              making any import. Customs authorities often withhold clearance if
              this certificate is not produced.
            </p>
          </div>
        </div>
      </section>

      <section id="declarations" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Labeling Norms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              The 6 Mandatory Declarations
            </h2>
            <p className="text-slate-500 mt-2">
              Every retail package must carry these details clearly.
            </p>
          </div>

          {/* Declarations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 — Importer Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded text-brand-600">
                <IdCard size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Importer Details</h4>
                <p className="text-sm text-slate-600">
                  Name and complete address of the Importer (Verified with IEC).
                </p>
              </div>
            </div>

            {/* 2 — Generic Name */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded text-brand-600">
                <PackageOpen size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Generic Name</h4>
                <p className="text-sm text-slate-600">
                  Common or generic name of the commodity (e.g., "LED Bulb").
                </p>
              </div>
            </div>

            {/* 3 — Net Quantity */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded text-brand-600">
                <Scale size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Net Quantity</h4>
                <p className="text-sm text-slate-600">
                  Net weight or measure in standard units (kg, liter, meters).
                </p>
              </div>
            </div>

            {/* 4 — Date of Import */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded text-brand-600">
                <CalendarDays size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Date of Import</h4>
                <p className="text-sm text-slate-600">
                  Month and Year of Import or Manufacture/Packing.
                </p>
              </div>
            </div>

            {/* 5 — MRP */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded text-brand-600">
                <IndianRupee size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">MRP</h4>
                <p className="text-sm text-slate-600">
                  Maximum Retail Price (inclusive of all taxes).
                </p>
              </div>
            </div>

            {/* 6 — Consumer Care */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded text-brand-600">
                <Headphones size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Consumer Care</h4>
                <p className="text-sm text-slate-600">
                  Name, Address, Phone No, and Email for consumer complaints.
                </p>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-500 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-red-900 text-sm">
                  Sticker Rules
                </h4>
                <p className="text-sm text-red-800">
                  Stickers are allowed for importer details, but original labels
                  from the foreign manufacturer must not be tampered with.
                  Overwriting MRP is strictly prohibited.
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
                Documents Required
              </h2>

              <p className="text-slate-600 mb-8">
                The application is filed online. Ensure you have the following
                documents ready.
              </p>

              <ul className="space-y-4">
                {/* Item 1 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">IEC Code</strong>
                    <span className="text-sm text-slate-500">
                      Import Export Code issued by DGFT.
                    </span>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      GST Registration
                    </strong>
                    <span className="text-sm text-slate-500">
                      GST certificate of the importer.
                    </span>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      Label Sample
                    </strong>
                    <span className="text-sm text-slate-500">
                      Sample or artwork of the label/packaging showing all
                      declarations.
                    </span>
                  </div>
                </li>

                {/* Item 4 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      Passport Size Photo
                    </strong>
                    <span className="text-sm text-slate-500">
                      Photograph of Partners/Directors/Proprietor.
                    </span>
                  </div>
                </li>

                {/* Item 5 */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <strong className="block text-slate-800">
                      Address Proof
                    </strong>
                    <span className="text-sm text-slate-500">
                      Registered office proof (Rent Agreement / Electricity
                      Bill).
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 flex items-center justify-center text-center">
              <div>
                <Stamp
                  className="text-brand-300 text-5xl mx-auto mb-4"
                  size={60}
                />
                <h3 className="text-xl font-bold text-brand-900 mb-2">
                  Validity
                </h3>
                <p className="text-slate-600 mb-6">
                  The LMPC Registration is generally valid for a lifetime
                  (unless changes in address/directors occur) or 1–5 years
                  depending on the state authority.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-brand-600 text-white font-bold py-2 px-6 rounded hover:bg-brand-700 transition"
                >
                  Apply Now
                </a>
              </div>
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
                Can I stick labels after importing?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Yes, if the goods arrive without proper labels, you can apply
                for permission to carry out labeling in a Customs Bonded
                Warehouse. However, goods cannot be cleared for home consumption
                without compliance.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                Is LMPC required for industrial raw materials?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                No. Goods meant for industrial or institutional consumers (who
                buy directly for use and not for resale) are exempt from LMPC
                rules, provided the package is marked "Not for Retail Sale".
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
              <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
                How long does it take to get the certificate?
                <ChevronDown
                  className="text-brand-500 transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                It typically takes 7 to 20 working days depending on the state
                department's workload and query response time.
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
                  LMPC Registration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  BIS Certification
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  WPC Approval
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  EPR Authorization
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
                  Labeling Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Rule 27 Explained
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Penalty Clauses
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Exemptions List
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

export default CloudDeskLegalMetrology;
