import { useState } from "react";
import TopBar from "../components/CloudDeskLogoCopyright/TopBar";
import Navbar from "../components/CloudDeskLogoCopyright/Navbar";
import Hero from "../components/CloudDeskLogoCopyright/Hero";
import Fees from "../components/CloudDeskLogoCopyright/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
Registered,
Copyright,
Palette, 
FileText,
AlertCircle, 
Video,
Award,
Globe,
Infinity,
Gavel 
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskLogoCopyright/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskLogoCopyright/ModalEnroll";
import { BiRegistered } from "react-icons/bi";

const CloudDeskLogoCopyright = () => {
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: "",
  });

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted - check console for data")
  }
  
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      {/* <TopBar /> */}
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: ""})}
        onSubmit={handleEnrollmentSubmit}
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

    {/* Comparison */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="prose lg:prose-lg text-slate-600 text-justify">
        <p className="mb-4">
          Many businesses confuse Trademark with Copyright. While a{' '}
          <strong>Trademark</strong> protects the logo as a "badge of origin"
          for specific goods/services, a <strong>Copyright</strong> protects
          the logo as an "Artistic Work" globally, regardless of the product
          category.
        </p>
        <p>[Image of Logo Design Blueprint]</p>
        <p className="mb-4">
          <strong>Example:</strong> If you design a unique character mascot for
          your food brand, Trademark stops others from selling food using that
          mascot. Copyright stops others from using that mascot in a comic
          book, movie, or toy, giving you wider artistic control.
        </p>
      </div>

<div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500">
  <h4 className="text-xl font-bold text-art-800 mb-4">
    Key Benefits
  </h4>

  <ul className="space-y-3">
    <li className="flex items-start gap-3">
      <Globe
        size={22}
        className="text-art-500 mt-1 flex-shrink-0"
      />
      <span className="text-slate-700 leading-relaxed">
        <strong>Global Protection:</strong> Copyright is
        recognized in 179+ countries (Berne Convention)
        without separate registration.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <Infinity
        size={22}
        className="text-art-500 mt-1 flex-shrink-0"
      />
      <span className="text-slate-700 leading-relaxed">
        <strong>Lifetime Validity:</strong> Valid for the
        lifetime of the artist + 60 years. No renewal fees.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <Gavel
        size={22}
        className="text-art-500 mt-1 flex-shrink-0"
      />
      <span className="text-slate-700 leading-relaxed">
        <strong>Criminal Remedy:</strong> Police can seize
        infringing goods directly based on Copyright
        registration.
      </span>
    </li>
  </ul>
</div>
    </div>
  </div>
</section>


<section id="assets" className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
        Mandatory Step
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
        The TM-C Requirement
      </h2>

      <p className="text-slate-500 mt-2">
        Connecting Trademark Registry with Copyright Office.
      </p>
    </div>

    {/* Card */}
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-blue-800 text-white p-6 flex items-center gap-4">
        <FileText className="w-10 h-10 flex-shrink-0" />

        <div>
          <h3 className="text-2xl font-bold">
            Search Certificate (TM-C)
          </h3>

          <p className="text-sm text-blue-200">
            Section 45 of Copyright Act, 1957
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          Before copyrighting any artistic work that{" "}
          <strong>can be used as a logo</strong> for goods/services,
          you must first obtain a{" "}
          <strong>No Objection Certificate</strong> from the Registrar
          of Trademarks. This certifies that no identical trademark
          exists on record.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-200 p-5 rounded-xl bg-slate-50 hover:shadow-md transition">
            <h4 className="font-bold text-slate-800 text-lg mb-2">
              Step 1: TM-C Application
            </h4>

            <p className="text-sm text-slate-500">
              We file Form TM-C with the Trademark Registry along with
              the artwork copies.
            </p>
          </div>

          <div className="border border-slate-200 p-5 rounded-xl bg-slate-50 hover:shadow-md transition">
            <h4 className="font-bold text-slate-800 text-lg mb-2">
              Step 2: Clearance
            </h4>

            <p className="text-sm text-slate-500">
              The Registrar issues a certificate confirming the artwork
              is clear for copyright.
            </p>
          </div>
        </div>

        {/* Warning + CTA */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-red-500" />

            <p className="text-sm text-red-500 font-bold">
              Without TM-C, the Copyright Application will be rejected.
            </p>
          </div>

          {/* <a
            href="#contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Apply for TM-C
          </a> */}
            <button
              onClick={() =>
                setShowEnrollModal({
                  open: true,
                  type: "Search_Certificate_TMC",
                })
              }
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Apply for TM-C
            </button>
        </div>
      </div>
    </div>
  </div>
</section>

        <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-creative-300 font-bold uppercase tracking-wider text-sm">
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
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">NOC</h3>
            <p className="text-sm text-slate-300">
              Obtain NOC from the artist/designer (if the applicant is a company).
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">TM-C</h3>
            <p className="text-sm text-slate-300">
              Apply and obtain Search Certificate from Trademark Registry.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Filing</h3>
            <p className="text-sm text-slate-300">
              File Form XIV with the Copyright Office (Delhi). Get Diary No.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Wait</h3>
            <p className="text-sm text-slate-300">
              Mandatory 30-day waiting period for objections.
            </p>
          </div>

          {/* Step 5 */}
<div className="text-center relative z-10">
  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
    <Check className="w-8 h-8 stroke-[3]" />
  </div>

  <h3 className="text-lg font-bold mb-2">ROC</h3>

  <p className="text-sm text-slate-300">
    Final Registration Certificate issued.
  </p>
</div>
        </div>
      </div>
    </section>

    <Fees setShowEnrollModal={setShowEnrollModal}/>

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
                    <li><a href="#" class="hover:text-white transition">Logo Copyright</a></li>
                    <li><a href="#" class="hover:text-white transition">Trademark Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Software Protection</a></li>
                    <li><a href="#" class="hover:text-white transition">IPR Litigation</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Copyright Act 1957</a></li>
                    <li><a href="#" class="hover:text-white transition">Fee Calculator</a></li>
                    <li><a href="#" class="hover:text-white transition">TM-C Search</a></li>
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

export default CloudDeskLogoCopyright;