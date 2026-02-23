// import TopBar from "../components/CloudDeskLegalMetrology/TopBar";
import Navbar from "../components/CloudDeskLegalMetrology/Navbar";
import Hero from "../components/CloudDeskLegalMetrology/Hero";
import Fees from "../components/CloudDeskLegalMetrology/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Building,
  ShieldUser,  
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

{/* --- WHY CLOUDDESK SECTION (LMPC) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for LMPC Registration?</h2>
      <p className="text-slate-500">
        A missing MRP or a font size error can lead to a 100% seizure of your shipment. CloudDesk ensures your packaging is "Customs-Proof."
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Label Artwork Audit (Rule 6 Compliance)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The most common reason for detention is non-compliant labels. CloudDesk's <strong>Visual Compliance Engine</strong> reviews your digital artwork to ensure the <strong>"Seven Mandatory Declarations"</strong> are in the prescribed font size (<strong>minimum 1mm to 6mm</strong> based on area) and placed in the <strong>"Principal Display Panel."</strong>
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Central vs. State Jurisdictional Routing</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you import and sell in more than one state, you need a <strong>Director (Central) Registration</strong>. If you are a local manufacturer/packer for one state, you need a <strong>Controller (State) License</strong>. CloudDesk routes your application to the correct authority via the <strong>LM Portal (version 2.0)</strong>, preventing jurisdictional rejection.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. The "Pre-Arrival" Registration Strategy</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Under the 2026 rules, you must apply for LMPC registration within <strong>90 days of starting imports</strong>, but Customs will not clear your goods without it. CloudDesk handles your registration <strong>before your cargo hits the port</strong>, avoiding high demurrage and detention charges.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. Model Approval & Verification (For Weights/Measures)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If your product is a weighing or measuring instrument (e.g., electronic scales, thermometers), you need <strong>Model Approval from the Ministry</strong>. CloudDesk manages the sample submission to the <strong>RRSL (Regional Reference Standards Laboratory)</strong> and the subsequent <strong>"Verification" stamping</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (LMPC) --- */}
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
          Yes, if the goods arrive without proper labels, you can apply for permission to carry out labeling in a <strong>Customs Bonded Warehouse</strong>. However, goods cannot be cleared for home consumption without compliance.
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
          No. Goods meant for <strong>industrial or institutional consumers</strong> (who buy directly for use and not for resale) are exempt from LMPC rules, provided the package is marked <strong>"Not for Retail Sale"</strong>.
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
          It typically takes <strong>7 to 20 working days</strong> depending on the state department's workload and query response time.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is a "Pre-Packaged Commodity"?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Any commodity placed in a package of whatever nature, <strong>without the purchaser being present</strong>, such that the quantity has a predetermined value. If you sell it in a box, tin, or bottle with a weight/volume/number on it, you need LMPC.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Who is exempt from LMPC registration?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          In 2026, exemptions are narrow: (1) Packages over <strong>25kg or 25L</strong> (except cement/fertilizer), (2) <strong>Institutional/Industrial consumers</strong> who buy directly for their own use (not for retail), and (3) Packages weighing <strong>10g/10ml or less</strong>.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I stick a "Correction Sticker" at the port?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Only for specific fields. You can fix the <strong>Importer's address, MRP,</strong> and the <strong>Veg/Non-Veg logo</strong> in a Customs Bonded Warehouse. However, you cannot "sticker over" an incorrect <strong>Net Quantity or Date of Import/Manufacture</strong>.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What MUST be on every retail label in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          1. <strong>Name and Address</strong> of the Manufacturer/Packer/Importer.<br />
          2. <strong>Common/Generic Name</strong> of the commodity.<br />
          3. <strong>Net Quantity</strong> (Standard units only: kg, l, m, or number).<br />
          4. <strong>Month and Year</strong> of Manufacture/Import.<br />
          5. <strong>Maximum Retail Price (MRP)</strong> (Inclusive of all taxes).<br />
          6. <strong>Country of Origin</strong> (Mandatory for imports).<br />
          7. <strong>Consumer Care Details</strong> (Name, address, phone, and email).
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Are "MRP Stickers" allowed?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. In 2026, the MRP must be <strong>printed on the package</strong>. Stickers are generally considered a violation and are only allowed in very specific, pre-authorized scenarios (like price changes due to GST revisions).
        </p>
      </details>

      {/* FAQ 9 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What are the government fees for LMPC?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The registration fee is generally <strong>₹500</strong>, but varies slightly by state. However, the true cost of non-compliance is the penalty — starting at <strong>₹10,000 for the first offense</strong> and scaling to <strong>₹50,000 or imprisonment</strong> for repeat violations.
        </p>
      </details>

      {/* FAQ 10 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long is the certificate valid?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Usually between <strong>1 to 5 years</strong>. CloudDesk recommends the <strong>5-year option</strong> to minimize the administrative burden of frequent renewals.
        </p>
      </details>

      {/* FAQ 11 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is "Section 36" of the Legal Metrology Act?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          This is the most "feared" section by importers. It empowers officials to <strong>seize non-standard packages</strong> and impose <strong>heavy fines for misleading declarations</strong>.
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
