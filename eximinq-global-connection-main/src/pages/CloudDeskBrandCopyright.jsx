import { useState } from "react";
// import TopBar from "../components/CloudDeskBrandCopyright/TopBar";
import Navbar from "../components/CloudDeskBrandCopyright/Navbar";
import Hero from "../components/CloudDeskBrandCopyright/Hero";
import Fees from "../components/CloudDeskBrandCopyright/Fees";
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
Video,
Award 
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskBrandCopyright/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskBrandCopyright/ModalEnroll";
import { BiRegistered } from "react-icons/bi";

const CloudDeskBrandCopyright = () => {
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
            Trademark vs. Copyright: What's the Difference?
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded"></div>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Trademark */}
          <div className="p-8 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <BiRegistered className="w-5 h-5" />
              Trademark
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Protects the <strong>Identity</strong>. It stops others from using a
              confusingly similar name or logo in the same industry. It protects
              the <em>brand value</em> and consumer trust.
            </p>

            <ul className="text-sm text-blue-800 font-semibold list-disc list-inside">
              <li>Brand Name</li>
              <li>Slogan / Tagline</li>
              <li>Logo (as a mark)</li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="p-8 bg-creative-50 rounded-xl border border-creative-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Copyright className="w-5 h-5" />
              Copyright
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Protects the <strong>Creativity</strong>. It stops others from
              copying the artistic design, the code, or the text. It confirms
              <em> ownership</em> of the work.
            </p>

            <ul className="text-sm text-blue-800 font-semibold list-disc list-inside">
              <li>Logo (Artistic Design)</li>
              <li>Website Content & Code</li>
              <li>Marketing Collaterals</li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mt-4">
            For complete protection of a Logo, legal experts recommend{" "}
            <strong>BOTH</strong> Trademark (for brand usage) and Copyright (for
            artistic ownership).
          </p>
        </div>
      </div>
    </section>


        <section id="assets" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            Protection Scope
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            What Can You Copyright?
          </h2>
          <p className="text-slate-500 mt-2">
            Any original expression of an idea fixed in a tangible medium.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visual Identity */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-8 border-purple-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-creative-100 rounded-full flex items-center justify-center text-purple-600">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Visual Identity
              </h3>
            </div>

            <ul className="text-sm text-slate-600 space-y-2">
              {[
                "Logo Design",
                "Packaging Graphics",
                "Marketing Flyers",
                "Mascots / Characters",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Written Content */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-8 border-blue-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Written Content
              </h3>
            </div>

            <ul className="text-sm text-slate-600 space-y-2">
              {[
                "Website Copy / Blogs",
                "User Manuals",
                "Product Catalogues",
                "Software Source Code",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Multimedia */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-8 border-purple-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Multimedia
              </h3>
            </div>

            <ul className="text-sm text-slate-600 space-y-2">
              {[
                "Corporate Videos",
                "Audio Jingles",
                "Training Videos",
                "Advertisements",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 bg-white border border-slate-200 p-6 rounded-lg text-center max-w-4xl mx-auto shadow-sm">
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            Prerequisite for Logo Copyright
          </h4>
          <p className="text-sm text-slate-600">
            If the artistic work (Logo) is capable of being used in relation to
            goods/services, you must obtain a{" "}
            <strong>No Objection Certificate (TM-60)</strong> from the Trademark
            Registrar before applying for Copyright. We handle this cross-filing
            process.
          </p>
        </div>
      </div>
    </section>

        <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-creative-300 font-bold uppercase tracking-wider text-sm">
            Registration Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            From Creation to Protection
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Search</h3>
            <p className="text-sm text-slate-300">
              TM-C Search to ensure no conflict with existing Trademarks.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Filing</h3>
            <p className="text-sm text-slate-300">
              File Form XIV. Upload work copies. Get Diary Number.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Wait</h3>
            <p className="text-sm text-slate-300">
              Mandatory 30-day waiting period for objections.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-creative-500 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Scrutiny</h3>
            <p className="text-sm text-slate-300">
              Registrar examines the work. We reply to discrepancies.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white shadow-sm">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">Registration</h3>
            <p className="text-sm text-slate-300">
              ROC (Register of Copyrights) extract issued.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Fees />

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

export default CloudDeskBrandCopyright;