// import TopBar from "../components/CloudDeskBisRegistration/TopBar";
import Navbar from "../components/CloudDeskBisRegistration/Navbar";
import Hero from "../components/CloudDeskBisRegistration/Hero";
import Fees from "../components/CloudDeskBisRegistration/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  AlertTriangle,
  Building,
  ShieldUser, 
  CheckCircle,
  HardHat,
  FlaskConical,
  Laptop,
  Footprints,
  Baby,
  BatteryCharging,
  Factory,
  FileSpreadsheet,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskBisRegistration/MainNavbar";

const CloudDeskBisRegistration = () => {
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
              Why is BIS Registration Mandatory?
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Bureau of Indian Standards (BIS)</strong> is the
              national standards body of India. To ensure the safety and quality
              of products entering the Indian market, the government issues{" "}
              <strong>Quality Control Orders (QCOs)</strong> making BIS
              certification mandatory for specific products.
            </p>
            <p className="mb-4">
              <br />
              Importing goods listed under a QCO without a valid BIS license
              number printed on the product/packaging is illegal. Such cargo
              will be detained by Customs and may be re-exported or destroyed.
            </p>
          </div>
        </div>
      </section>

      <section id="schemes" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Certification Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Which Scheme Applies to You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* <!-- Scheme I --> */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-brand-600 overflow-hidden group hover:-translate-y-2 transition duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-6 text-brand-700 text-3xl font-bold border-2 border-brand-200">
                  I
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  ISI Mark (Scheme-I)
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">
                  Product Certification Scheme
                </p>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Requires a physical <strong>Factory Audit</strong> by BIS
                  officers. The license is granted to the manufacturing unit
                  (Foreign or Domestic) after successful testing of samples
                  drawn during the audit.
                </p>
                <div className="bg-slate-50 p-4 rounded text-xs text-slate-700 font-medium">
                  <strong>Key Products:</strong> Steel, Chemicals, Cement,
                  Tyres, Toys, Glass, Footwear.
                </div>
              </div>
            </div>

            {/* <!-- Scheme II --> */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-accent-500 overflow-hidden group hover:-translate-y-2 transition duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 text-3xl font-bold border-2 border-orange-200">
                  II
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  CRS (Scheme-II)
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">
                  Compulsory Registration Scheme
                </p>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Based on <strong>Self-Declaration</strong>. No factory audit
                  is required. The manufacturer must send product samples to a
                  BIS-recognized lab in India. Registration is granted based on
                  the test report.
                </p>
                <div className="bg-slate-50 p-4 rounded text-xs text-slate-700 font-medium">
                  <strong>Key Products:</strong> Electronics, IT Goods, Solar
                  Panels, Batteries, LED Lights.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Regulated Industries
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                The list of mandatory products is expanding rapidly. Check if
                your product falls under these major categories currently under
                Quality Control Orders (QCOs).
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* Steel & Iron */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <HardHat className="text-accent-400 w-5 h-5" />
                  <span>Steel & Iron</span>
                </div>

                {/* Chemicals */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <FlaskConical className="text-accent-400 w-5 h-5" />
                  <span>Chemicals</span>
                </div>

                {/* Electronics */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <Laptop className="text-accent-400 w-5 h-5" />
                  <span>Electronics</span>
                </div>

                {/* Footwear */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <Footprints className="text-accent-400 w-5 h-5" />
                  <span>Footwear</span>
                </div>

                {/* Toys */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <Baby className="text-accent-400 w-5 h-5" />
                  <span>Toys</span>
                </div>

                {/* Batteries */}
                <div className="flex items-center gap-3 bg-brand-800 p-3 rounded border border-brand-700">
                  <BatteryCharging className="text-accent-400 w-5 h-5" />
                  <span>Batteries</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-brand-900 border-b pb-4">
                Special Focus: FMCS
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                <strong>
                  Foreign Manufacturers Certification Scheme (FMCS)
                </strong>{" "}
                allows overseas factories to use the ISI mark.
              </p>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                  Requires Authorized Indian Representative (AIR).
                </li>

                <li className="flex gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                  Mandatory Factory Visit by BIS Officers.
                </li>

                <li className="flex gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                  Performance Guarantee Bond required.
                </li>
              </ul>

              <div className="mt-6 text-center">
                <a
                  href="#contact"
                  className="inline-block bg-accent-500 text-brand-900 font-bold py-3 px-8 rounded-lg hover:bg-accent-600 transition"
                >
                  Appoint Indian Rep
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Certification Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              How to Get Certified
            </h2>
          </div>

          {/* TWO COLUMN PROCESS */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* LEFT BLOCK – ISI Mark */}
            <div className="relative pl-8 border-l-2 border-brand-200">
              {/* Step number circle */}
              <div
                className="absolute -left-3 top-0 w-6 h-6 bg-brand-600 rounded-full 
                            text-white text-xs flex items-center justify-center font-bold"
              >
                1
              </div>

              <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5 text-brand-600" />
                For ISI Mark (Steel / Chemicals)
              </h3>

              <ol className="space-y-4 text-sm text-slate-600 list-decimal list-inside">
                <li>
                  <strong>Application:</strong> Submit application with factory
                  layout and machinery list.
                </li>
                <li>
                  <strong>Audit:</strong> BIS officers visit the
                  foreign/domestic factory for inspection.
                </li>
                <li>
                  <strong>Testing:</strong> Samples are drawn during audit and
                  tested in the factory lab + sent to India.
                </li>
                <li>
                  <strong>Grant:</strong> License issued upon successful test
                  report.
                </li>
                <li>
                  <strong>Marking:</strong> Apply ISI mark on product before
                  shipping.
                </li>
              </ol>
            </div>

            {/* RIGHT BLOCK – CRS */}
            <div className="relative pl-8 border-l-2 border-accent-200">
              {/* Step number circle */}
              <div
                className="absolute -left-3 top-0 w-6 h-6 bg-accent-500 rounded-full 
                            text-white text-xs flex items-center justify-center font-bold"
              >
                2
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-accent-500" />
                For CRS (Electronics / IT)
              </h3>

              <ol className="space-y-4 text-sm text-slate-600 list-decimal list-inside">
                <li>
                  <strong>Sample:</strong> Send product sample to a
                  BIS-recognized lab in India.
                </li>
                <li>
                  <strong>Testing:</strong> Lab issues Test Report (approx 15
                  days).
                </li>
                <li>
                  <strong>Filing:</strong> Submit Test Report and documents
                  online on CRS portal.
                </li>
                <li>
                  <strong>Grant:</strong> Registration number generated
                  (R-XXXXXXXX).
                </li>
                <li>
                  <strong>Labeling:</strong> Display “Standard Mark” on
                  packaging.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>


{/* --- WHY CLOUDDESK SECTION (BIS) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for Bis-Certification?</h2>
      <p className="text-slate-500">
        BIS is not just a certificate; it's a rigorous technical audit of your factory and your product.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. CRS & ISI Scheme Selection</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Exporters often confuse <strong>CRS (Compulsory Registration Scheme)</strong> for electronics with the <strong>ISI Mark (Product Certification)</strong> for industrial goods. CloudDesk performs a <strong>Scheme Mapping</strong> to ensure you apply under the correct "Schedule," preventing rejected applications and wasted testing fees.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. NABL Lab Coordination</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            BIS requires testing in <strong>BIS-recognized NABL labs</strong> within India. For foreign manufacturers, this means shipping samples under a <strong>"Temporary Import" bond</strong>. CloudDesk manages the <strong>Sample Logistics</strong>, lab scheduling, and technical follow-ups to ensure the "Test Report" meets the exact Indian Standard (IS) requirements.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. FMCS (Foreign Manufacturers Certification Scheme)</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you are a manufacturer outside India, you need <strong>FMCS</strong> to use the ISI mark. CloudDesk acts as your <strong>Authorized Indian Agent (AIR)</strong>, managing the physical factory audit by BIS officers, the nomination of the technical personnel, and the execution of the <strong>Performance Bank Guarantee</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. QCO (Quality Control Order) Watch</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The government adds new products to the <strong>"Mandatory BIS List"</strong> almost every month. CloudDesk's <strong>Compliance Radar</strong> alerts you <strong>90 days before</strong> a new QCO kicks in for your HSN code, giving you enough time to get certified before the port-blockade begins.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (BIS) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the difference between BIS CRS and ISI Mark?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>CRS:</strong> Mostly for Electronics, IT products, and Solar (e.g., Laptops, Mobile phones). It is based on Self-Declaration of conformity.<br />
          • <strong>ISI Mark:</strong> For "Core" sectors like Steel, Cement, Electrical Cables, Toys, and Chemicals. It involves a Factory Audit by BIS officials.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How do I know if my product needs BIS?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          You must check the <strong>Compulsory Registration List</strong> on the BIS portal. In 2026, over <strong>600 products</strong> are under mandatory certification. CloudDesk provides an <strong>HSN-to-BIS Mapping</strong> service to confirm your status instantly.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I import "Samples" for testing without BIS?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. You can import limited samples for R&D or BIS testing by obtaining an <strong>Exemption Letter</strong> or a <strong>"Provisional Entry"</strong> from Customs. CloudDesk manages this specialized clearance.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I use my UL, CE, or IEC test reports for BIS?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          No. While Indian Standards (IS) are often aligned with International Standards (ISO/IEC), BIS mandates <strong>testing in an Indian Lab</strong> for most categories.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the role of an "Authorized Indian Representative" (AIR)?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          For foreign manufacturers, an AIR is a local legal entity (like CloudDesk) that takes <strong>responsibility for the product's quality and compliance</strong> in India. Having a competent AIR is a <strong>mandatory requirement</strong> for FMCS and CRS.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long does the registration take?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>CRS:</strong> 15–30 days (after lab reports).<br />
          • <strong>ISI/FMCS:</strong> 3–6 months (due to factory inspections and international travel for officers).
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long is the BIS certificate valid?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Typically <strong>2 years</strong>. You must apply for renewal at least <strong>3 months before expiry</strong>. CloudDesk's <strong>Renewal Bot</strong> ensures your certification never lapses.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What are the penalties for selling without BIS?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Under the <strong>BIS Act, 2016</strong>, penalties include heavy fines (up to <strong>10x the value of goods</strong>), seizure of stock, and even <strong>imprisonment for company directors</strong>. In 2026, Customs has "Zero Tolerance" for BIS violations.
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
                  Duty Drawback
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  RoDTEP Scheme
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  IGST Refund
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  MOOWR Scheme
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
                  Drawback Schedule
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Rule 6 Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Section 74 Rules
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition">
                  Depreciation Chart
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

export default CloudDeskBisRegistration;
