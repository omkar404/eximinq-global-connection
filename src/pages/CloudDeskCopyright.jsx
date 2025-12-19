import { useState } from "react";
// import TopBar from "../components/CloudDeskCopyright/TopBar";
import Navbar from "../components/CloudDeskCopyright/Navbar";
import Hero from "../components/CloudDeskCopyright/Hero";
import Fees from "../components/CloudDeskCopyright/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
Code, 
Paintbrush, 
Hourglass,
Book, 
Palette, 
Info,
Award,

} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskCopyright/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskCopyright/ModalEnroll";

const CloudDeskCopyright = () => {
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
            Why Register Copyright?
          </h2>
          <div className="w-24 h-1 bg-creative-500 mx-auto rounded"></div>
        </div>

        {/* Content */}
        <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
          <p className="mb-4">
            <strong>Copyright</strong> is a legal right given to the creators of
            literary, dramatic, musical, and artistic works. While copyright
            exists from the moment a work is created,{" "}
            <strong>Registration</strong> provides a prima facie evidence of
            ownership in a court of law.
          </p>

          {/* Image placeholder intentionally preserved */}
          {/* [Image of Copyright Symbol Concept] */}

          <p className="mb-4">
            It allows you to send legal notices for infringement, claim
            statutory damages, and is essential for software developers to
            protect their source code. Unlike Trademarks (which protect
            brands), Copyright protects the <em>expression</em> of an idea.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
          {/* Software Protection */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <Code size={40} className="mx-auto text-brand-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">
              Software Protection
            </h3>
            <p className="text-sm text-slate-500">
              Protect Source Code and GUI as &apos;Literary Works&apos;.
              Essential for SaaS and App developers.
            </p>
          </div>

          {/* Artistic Control */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <Paintbrush
              size={40}
              className="mx-auto text-brand-600 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">
              Artistic Control
            </h3>
            <p className="text-sm text-slate-500">
              Secure rights for Logos (with TM), Packing Designs, and Graphics.
            </p>
          </div>

          {/* Long Validity */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <Hourglass
              size={40}
              className="mx-auto text-brand-600 mb-4"
            />
            <h3 className="font-bold text-lg mb-2">
              Long Validity
            </h3>
            <p className="text-sm text-slate-500">
              Valid for the lifetime of the author + 60 years. No renewal
              needed.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section id="categories" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Classification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Classes of Work
          </h2>
          <p className="text-slate-500 mt-2">
            Identify the correct category for your creation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Literary */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-8 border-blue-600 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Book size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Literary Works
                </h3>
                <p className="text-sm font-semibold text-slate-500">
                  Text &amp; Code
                </p>
              </div>
            </div>

            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span>Software Source Code</span>
                <Check size={16} className="text-green-500" />
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Books / Manuscripts</span>
                <Check size={16} className="text-green-500" />
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Website Content</span>
                <Check size={16} className="text-green-500" />
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Training Manuals</span>
                <Check size={16} className="text-green-500" />
              </li>
            </ul>
          </div>

          {/* Artistic */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-8 border-purple-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-creative-100 rounded-full flex items-center justify-center text-purple-600">
                <Palette size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Artistic Works
                </h3>
                <p className="text-sm font-semibold text-slate-500">
                  Visual Assets
                </p>
              </div>
            </div>

            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span>Logos (Required for TM)</span>
                <Check size={16} className="text-green-500" />
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Paintings / Sketches</span>
                <Check size={16} className="text-green-500" />
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Architectural Plans</span>
                <Check size={16} className="text-green-500" />
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Photographs</span>
                <Check size={16} className="text-green-500" />
              </li>
            </ul>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center bg-yellow-50 p-4 rounded border border-yellow-200 max-w-3xl mx-auto">
          <p className="text-sm text-yellow-800">
            <strong className="inline-flex items-center gap-1">
              <Info size={14} />
              Note:
            </strong>{" "}
            For Artistic works used as a Trademark (Logo), a{" "}
            <strong>TM-C (Search Certificate)</strong> from the Trade Marks
            Registry is mandatory before applying for Copyright.
          </p>
        </div>
      </div>
    </section>

    <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-creative-400 font-bold uppercase tracking-wider text-sm">
            Registration Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            From Filing to ROC
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Filing</h3>
            <p className="text-sm text-slate-400">
              File Form XIV online. Diary Number generated instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Wait Period</h3>
            <p className="text-sm text-slate-400">
              Mandatory 30-day waiting period for any objections.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Scrutiny</h3>
            <p className="text-sm text-slate-400">
              Examiner reviews the work. Discrepancy letter issued if errors
              found.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-legal-600 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Re-Submission</h3>
            <p className="text-sm text-slate-400">
              Reply to discrepancy and send physical copies of work (if needed).
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-creative-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Award className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Registration</h3>
            <p className="text-sm text-slate-400">
              Extract from Register of Copyrights (ROC) is issued.
            </p>
          </div>
        </div>
      </div>
    </section>


    <Fees />

        <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {/* FAQ 1 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Is software patented or copyrighted in India?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              In India, software code is protected under the{" "}
              <strong>Copyright Act</strong> as a “Literary Work”. It is generally
              not patentable unless it is embedded in hardware with a unique
              technical effect.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              What is the difference between Trademark and Copyright?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              <strong>Trademark</strong> protects your Brand Identity (Name, Logo,
              Slogan) used in trade. <strong>Copyright</strong> protects the
              creative expression (Artistic design of the logo, content of a
              book, code of an app). For a logo, it is recommended to get both.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group">
            <summary className="font-bold text-slate-800 cursor-pointer flex justify-between items-center">
              Is copyright registration mandatory?
              <ChevronDown className="text-brand-500 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Registration is not mandatory for protection (copyright exists
              automatically upon creation), but the registration certificate is
              the primary evidence required to file a lawsuit for infringement or
              claim damages.
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
                    <li><a href="#" class="hover:text-white transition">Copyright Filing</a></li>
                    <li><a href="#" class="hover:text-white transition">Trademark Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Design Registration</a></li>
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
                    <li><a href="#" class="hover:text-white transition">Software Protection</a></li>
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

export default CloudDeskCopyright;