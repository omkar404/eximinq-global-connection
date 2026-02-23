import { useState } from "react";
// import TopBar from "../components/CloudDeskUN/TopBar";
import Navbar from "../components/CloudDeskUN/Navbar";
import Hero from "../components/CloudDeskUN/Hero";
import Fees from "../components/CloudDeskUN/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Building,
  ShieldUser, 
  CheckCircle,   
  Phone,
  Mail,
  MapPin,
  PackageOpen,
  Layers,
  Droplets,
  Gauge,
  Dot, 
  AlertTriangle
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskUN/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskUN/ModalEnroll";
import { FaRegistered } from "react-icons/fa";

const CloudDeskUN = () => {
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
            Why UN Certification?
          </h2>
          <div className="w-24 h-1 bg-brand-600 mx-auto rounded" />
        </div>

        {/* Content */}
        <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
          <p className="mb-4">
            The <strong>United Nations (UN)</strong> has established
            global standards for the safe transport of{" "}
            <strong>Dangerous Goods (DG)</strong>. These standards are
            enforced worldwide through regulations such as IMDG
            (Sea), IATA DGR (Air), and ADR (Road). The{" "}
            <strong>UN Mark</strong> on packaging confirms that the
            container complies with these safety requirements.
          </p>

          <p className="mb-4">
            In India, the{" "}
            <strong>Indian Institute of Packaging (IIP)</strong>, under
            the Ministry of Commerce &amp; Industry, is the authorized
            body responsible for testing and certifying packaging as
            per UN specifications. Without a valid UN Mark and
            supporting test certificate, carriers such as airlines
            and shipping lines will{" "}
            <strong>refuse to accept the cargo</strong>.
          </p>
        </div>
      </div>
    </section>


    <section id="tests" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Testing Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Mandatory UN Performance Tests
          </h2>
          <p className="text-slate-500 mt-2">
            Your packaging must successfully pass these rigorous
            physical tests.
          </p>
        </div>

        {/* Tests */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Test 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-500 hover:shadow-xl transition text-center">
            <PackageOpen className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Drop Test
            </h3>
            <p className="text-sm text-slate-600">
              Simulates accidental drops. Height varies based on
              Packaging Group I, II, or III.
            </p>
          </div>

          {/* Test 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-500 hover:shadow-xl transition text-center">
            <Layers className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Stacking Test
            </h3>
            <p className="text-sm text-slate-600">
              Confirms resistance to crushing from the weight
              of identical packages stacked above.
            </p>
          </div>

          {/* Test 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-500 hover:shadow-xl transition text-center">
            <Droplets className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Leakproofness
            </h3>
            <p className="text-sm text-slate-600">
              Mandatory for liquid packaging. Verifies seals
              and closures under internal pressure.
            </p>
          </div>

          {/* Test 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brand-500 hover:shadow-xl transition text-center">
            <Gauge className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Pressure Test
            </h3>
            <p className="text-sm text-slate-600">
              Ensures stability of packaging under varying
              atmospheric pressure conditions.
            </p>
          </div>
        </div>
      </div>
    </section>

        <section id="marking" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Decoding the UN Mark
            </h2>

            <p className="text-slate-300 mb-8 leading-relaxed">
              The UN Marking (for example{" "}
              <strong>UN 4G/Y145/S/99/IND/B9000</strong>) contains
              critical information about the packaging’s suitability,
              strength, and compliance level.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Dot className="text-brand-400 mt-1" />
                <div>
                  <strong className="block text-white">
                    Packaging Type (e.g. 4G)
                  </strong>
                  <span className="text-sm text-slate-400">
                    Box (4), Fibreboard (G) or Drum (1), Steel (A).
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Dot className="text-brand-400 mt-1" />
                <div>
                  <strong className="block text-white">
                    Packing Group (X, Y, Z)
                  </strong>
                  <span className="text-sm text-slate-400">
                    X = High Danger, Y = Medium Danger, Z = Low Danger.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Dot className="text-brand-400 mt-1" />
                <div>
                  <strong className="block text-white">
                    Year &amp; Country (e.g. 99 / IND)
                  </strong>
                  <span className="text-sm text-slate-400">
                    Year of manufacture and certifying country (India).
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-white text-slate-800 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 border-b pb-4">
              <AlertTriangle className="text-brand-600" size={20} />
              <h3 className="text-xl font-bold text-brand-900">
                Packaging Groups
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex justify-between items-center">
                <span className="font-bold">Group I: High Danger</span>
                <span className="bg-red-200 text-red-800 px-2 rounded text-xs font-semibold">
                  Mark: X
                </span>
              </li>

              <li className="flex justify-between items-center">
                <span className="font-bold">Group II: Medium Danger</span>
                <span className="bg-orange-200 text-orange-800 px-2 rounded text-xs font-semibold">
                  Mark: Y
                </span>
              </li>

              <li className="flex justify-between items-center">
                <span className="font-bold">Group III: Low Danger</span>
                <span className="bg-yellow-200 text-yellow-800 px-2 rounded text-xs font-semibold">
                  Mark: Z
                </span>
              </li>
            </ul>

            <p className="text-xs text-slate-500 mt-4">
              We advise on the minimum packaging group required
              for your specific UN Number.
            </p>
          </div>
        </div>
      </div>
    </section>


        <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            IIP Procedure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Certification Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Design</h3>
            <p className="text-sm text-slate-500">
              Packaging manufacturer prepares the prototype
              strictly as per UN specifications.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Testing</h3>
            <p className="text-sm text-slate-500">
              IIP (Mumbai / Chennai) conducts mandatory
              drop, leak, and stacking tests.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-200 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Certification</h3>
            <p className="text-sm text-slate-500">
              IIP issues the UN Certificate and authorizes
              use of the UN Mark.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <Check size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Marking</h3>
            <p className="text-sm text-slate-500">
              Manufacturer prints the UN Mark on every
              unit for carrier acceptance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees/>



{/* --- WHY CLOUDDESK SECTION (UN IIP CERTIFICATION) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Why CloudDesk for UN IIP Certification?</h2>
      <p className="text-slate-500">
        UN Certification is a 'Destructive Test.' If your packaging fails the drop test, your production stops.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-red-100 p-3 rounded-lg text-red-600 h-fit">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">1. Mandatory Nodal Liaison</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The IIP is the <strong>only body authorized by DG Shipping and DGCA</strong> to issue these certificates. CloudDesk manages the entire workflow on the <strong>IIP Online Portal</strong>, from technical application to securing the final digital certificate.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
          <CheckCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">2. Pre-Test Technical Audit</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Before you send 24 samples to the lab for <strong>"Destructive Testing"</strong> (Drop, Stack, Hydraulic Pressure), CloudDesk reviews your packaging specifications. If your 5-ply box or HDPE drum isn't up to the <strong>IMDG/ICAO severity standards</strong> for your specific chemical (Class 1–9), we tell you <strong>before you waste money on lab fees</strong>.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-green-100 p-3 rounded-lg text-green-600 h-fit">
          <Building size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">3. MSDS & Class Mapping</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every application requires a <strong>Material Safety Data Sheet (MSDS)</strong>. We map your product to the correct <strong>UN Number and Packing Group (I, II, or III)</strong>. Mismatching a "High Danger" chemical with "Low Danger" packaging is the <strong>#1 reason for certification rejection</strong>.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 h-fit">
          <ShieldUser size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">4. ISO-Linkage for Maximum Validity</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            In 2026, your certificate's lifespan depends on your quality status. CloudDesk ensures your <strong>ISO 9001 certificate is correctly linked</strong> to your IIP profile to secure the <strong>18-month validity</strong>, rather than the standard 9 months for non-ISO units.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- FAQ SECTION (UN IIP CERTIFICATION) --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the UN Mark?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          It is a unique code (e.g., <strong>4G/X15/S/26/IND/IIP-1234</strong>) printed on the package. It tells port authorities that this specific design has <strong>passed the UN's rigorous safety tests</strong> for dangerous goods.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Which products need UN IIP Certification?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Any item classified under the <strong>9 Classes of Dangerous Goods</strong>, including:<br />
          • <strong>Chemicals &amp; Flammable Liquids</strong> (Paints, Solvents).<br />
          • <strong>Lithium Batteries &amp; Lead-Acid Batteries.</strong><br />
          • <strong>Pesticides &amp; Pharmaceuticals.</strong><br />
          • <strong>Aerosols &amp; Compressed Gases.</strong>
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Is the certificate issued for the product or the package?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          The certificate is issued to the <strong>Packaging Manufacturer</strong> for a specific Package Design. However, it also lists the <strong>Exporter's Name</strong> who will be using that specific packaging.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How many samples do I need to send for testing?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Depending on the package type (Drums, Boxes, Bags), you typically need to send <strong>18 to 24 empty samples</strong> to the nearest IIP lab (Mumbai, Delhi, Chennai, Kolkata, Hyderabad, or Ahmedabad).
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the validity of the UN IIP Certificate in 2026?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>ISO-Certified Manufacturers:</strong> 18 Months.<br />
          • <strong>Non-ISO Manufacturers:</strong> 9 Months.<br />
          • <strong>Note:</strong> No extensions are granted. You must re-test fresh samples before expiry.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          What is the "X, Y, Z" marking?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          • <strong>X:</strong> Packing Group I (High Danger).<br />
          • <strong>Y:</strong> Packing Group II (Medium Danger).<br />
          • <strong>Z:</strong> Packing Group III (Low Danger).<br />
          <em>Pro-Tip: An 'X' certified box can carry Y and Z goods, but a 'Z' box cannot carry X goods.</em>
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          How long does the process take?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          From sample submission to certificate issuance, it takes <strong>7 to 10 working days (Normal)</strong> or <strong>3 to 5 days (Tatkal/Express)</strong>.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
        <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
          Can I use the same certificate for both Sea and Air?
          <ChevronDown
            className="text-brand-500 transition-transform group-open:rotate-180"
            size={20}
          />
        </summary>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Yes. You can apply for a <strong>Combined Certificate</strong> that complies with both <strong>IMDG (Sea)</strong> and <strong>IATA/ICAO (Air)</strong> regulations. CloudDesk always recommends the combined route to give you <strong>logistics flexibility</strong>.
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
                 <li><a href="#" class="hover:text-white transition">IIP Test Locations</a></li>
                    <li><a href="#" class="hover:text-white transition">UN Packing Instruction</a></li>
                    <li><a href="#" class="hover:text-white transition">DG Class List</a></li>
                    <li><a href="#" class="hover:text-white transition">Carrier Policies</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Bond Forms (B/C/D)</a></li>
                    <li><a href="#" class="hover:text-white transition">Customs Act (Sec 57-65)</a></li>
                    <li><a href="#" class="hover:text-white transition">Site Security Norms</a></li>
                    <li><a href="#" class="hover:text-white transition">BG Reduction Rules</a></li>
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

export default CloudDeskUN;