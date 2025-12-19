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