import { useState } from "react";
// import TopBar from "../components/CloudDeskLogoDesign/TopBar";
import Navbar from "../components/CloudDeskLogoDesign/Navbar";
import Hero from "../components/CloudDeskLogoDesign/Hero";
import Fees from "../components/CloudDeskLogoDesign/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
Globe, 
Infinity, 
Gavel,
FileText, 
AlertTriangle,
CheckCircle,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskLogoDesign/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskLogoDesign/ModalEnroll";
import { BiRegistered } from "react-icons/bi";

const CloudDeskLogoDesign = () => {
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
            Why Copyright a Logo?
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="prose lg:prose-lg text-slate-600 text-justify">
            <p className="mb-4">
              Many businesses confuse Trademark with Copyright. While a{" "}
              <strong>Trademark</strong> protects the logo as a “badge of origin”
              for specific goods/services, a <strong>Copyright</strong> protects
              the logo as an “Artistic Work” globally, regardless of the product
              category.
            </p>

            <p className="mb-4">
              {/* Placeholder for image if needed */}
              <strong>Example:</strong> If you design a unique character mascot
              for your food brand, Trademark stops others from selling food using
              that mascot. Copyright stops others from using that mascot in a
              comic book, movie, or toy, giving you wider artistic control.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-brand-500 shadow-sm">
            <h4 className="text-xl font-bold text-brand-800 mb-4">
              Key Benefits
            </h4>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-brand-500 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Global Protection:</strong> Copyright is recognized in
                  179+ countries (Berne Convention) without separate registration.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Infinity className="w-5 h-5 text-brand-500 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Lifetime Validity:</strong> Valid for the lifetime of
                  the artist + 60 years. No renewal fees.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-brand-500 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Criminal Remedy:</strong> Police can seize infringing
                  goods directly based on Copyright registration.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <section id="tmc" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Mandatory Step
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            The TM-60 Requirement
          </h2>
          <p className="text-slate-500 mt-2">
            Connecting Trademark Registry with Copyright Office.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Top Bar – BRAND BG */}
          <div className="bg-brand-900 text-white p-6 flex items-center gap-4">
            <FileText className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold">
                Search Certificate (TM-C)
              </h3>
              <p className="text-sm text-brand-200">
                Section 45 of Copyright Act, 1957
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-slate-600 mb-6">
              Before copyrighting any artistic work that{" "}
              <strong>can be used as a logo</strong> for goods/services, you must
              first obtain a <strong>No Objection Certificate</strong> from the
              Registrar of Trademarks. This certifies that no identical trademark
              exists on record.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
                <h4 className="font-bold text-slate-800 mb-2">
                  Step 1: TM-C Application
                </h4>
                <p className="text-xs text-slate-500">
                  We file Form TM-C with the Trademark Registry along with the
                  artwork copies.
                </p>
              </div>

              <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
                <h4 className="font-bold text-slate-800 mb-2">
                  Step 2: Clearance
                </h4>
                <p className="text-xs text-slate-500">
                  The Registrar issues a certificate confirming the artwork is
                  clear for copyright.
                </p>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-8 text-center">
              <p className="text-xs text-red-500 font-bold mb-3 flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Without TM-C, the Copyright Application will be rejected.
              </p>

              <a
                href="#contact"
                className="inline-block bg-brand-600 text-white font-bold py-2 px-6 rounded hover:bg-brand-700 transition"
              >
                Apply for TM-C
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-300 font-bold uppercase tracking-wider text-sm">
            Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Registration Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-500 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">NOC</h3>
            <p className="text-sm text-slate-300">
              Obtain NOC from the artist/designer (if the applicant is a company).
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-500 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">TM-C</h3>
            <p className="text-sm text-slate-300">
              Apply and obtain Search Certificate from Trademark Registry.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-500 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Filing</h3>
            <p className="text-sm text-slate-300">
              File Form XIV with the Copyright Office (Delhi). Get Diary No.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-500 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Wait</h3>
            <p className="text-sm text-slate-300">
              Mandatory 30-day waiting period for objections.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">ROC</h3>
            <p className="text-sm text-slate-300">
              Final Registration Certificate issued.
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
                    <li><a href="#" class="hover:text-white transition">Logo Copyright</a></li>
                    <li><a href="#" class="hover:text-white transition">TM-C Search Certificate</a></li>
                    <li><a href="#" class="hover:text-white transition">Brand Trademark</a></li>
                    <li><a href="#" class="hover:text-white transition">Design Registration</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Copyright Rules</a></li>
                    <li><a href="#" class="hover:text-white transition">Fee Calculator</a></li>
                    <li><a href="#" class="hover:text-white transition">NOC Format</a></li>
                    <li><a href="#" class="hover:text-white transition">Public Search</a></li>
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

export default CloudDeskLogoDesign;