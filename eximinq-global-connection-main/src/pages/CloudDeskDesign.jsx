import { useState } from "react";
// import TopBar from "../components/CloudDeskBarcode/TopBar";
import Navbar from "../components/CloudDeskBarcode/Navbar";
import Hero from "../components/CloudDeskBarcode/Hero";
import Fees from "../components/CloudDeskBarcode/Fees";
import {
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Sparkles, 
  Lock, 
  Lightbulb,
  Ban,
  Wrench,
  Megaphone,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskBarcode/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskBarcode/ModalEnroll";
import { FaRegistered } from "react-icons/fa";

const CloudDeskBarcode = () => {
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
            What is Design Registration?
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded"></div>
        </div>

        {/* Description */}
        <div className="prose lg:prose-lg mx-auto text-slate-600 text-justify">
          <p className="mb-4">
            Design Registration grants exclusive rights for 10 years (renewable
            for 5 more) to the visual features of a manufactured article. These
            features include the{" "}
            <strong>
              shape, configuration, pattern, ornament or composition of lines or
              colours
            </strong>{" "}
            applied to any article.
          </p>

          <p className="mb-4">
            The registration provides the owner the right to prevent others from
            manufacturing, importing, or selling articles that infringe upon the
            registered design. This protection is crucial in consumer
            electronics, fashion, and industrial equipment industries where
            aesthetics drive sales.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
          {/* Card 1 */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <Sparkles
              size={40}
              className="mx-auto mb-4 text-brand-600"
            />
            <h3 className="font-bold text-lg mb-2">
              Aesthetic Protection
            </h3>
            <p className="text-sm text-slate-500">
              Protects the visual appeal, not the functional working principle
              (which is covered by Patents).
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <Lock
              size={40}
              className="mx-auto mb-4 text-brand-600"
            />
            <h3 className="font-bold text-lg mb-2">
              15 Year Term
            </h3>
            <p className="text-sm text-slate-500">
              Initial protection for 10 years, extendable once for an additional
              5 years.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
            <Lightbulb
              size={40}
              className="mx-auto mb-4 text-brand-600"
            />
            <h3 className="font-bold text-lg mb-2">
              Novelty is Key
            </h3>
            <p className="text-sm text-slate-500">
              The design must be new, original, and must not have been disclosed
              publicly before filing.
            </p>
          </div>
        </div>
      </div>
    </section>
    

    <section id="coverage" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
            IPR Overlap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Design vs. Other IP
          </h2>
          <p className="text-slate-500 mt-2">
            Ensuring you file under the correct category.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Trademark */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <FaRegistered className="text-blue-600" size={32} />
              <h3 className="text-xl font-bold text-slate-900">
                Trademark
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              A design used as a Trademark (e.g., a unique bottle shape) needs{" "}
              <strong>Design Registration</strong> for the shape and{" "}
              <strong>Trademark Registration</strong> for the brand
              name/logo on the bottle.
            </p>
          </div>

          {/* Copyright */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-600 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Ban className="text-brand-600" size={32} />
              <h3 className="text-xl font-bold text-slate-900">
                Copyright Exclusions
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              Once a design is registered under the Designs Act, it
              loses its <strong>Copyright</strong> protection. Only
              the <em>design itself</em> gets protection, not the
              artistic drawing.
            </p>
          </div>

          {/* Patent */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-red-600 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Wrench className="text-red-600" size={32} />
              <h3 className="text-xl font-bold text-slate-900">
                Patent Exclusions
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              The design must <strong>NOT</strong> be purely functional.
              Features dictated solely by function are protected under{" "}
              <strong>Patents</strong>, not Designs.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-design-50 border border-design-100 p-6 rounded-lg text-center max-w-4xl mx-auto">
          <h4 className="font-bold text-design-900 text-lg mb-2 flex items-center justify-center gap-2">
            <Megaphone size={20} />
            Classification Mandate
          </h4>
          <p className="text-sm text-slate-700">
            The design must be filed under the correct international{" "}
            <strong>Locarno Classification</strong> (e.g., Class 09 for
            Containers, Class 10 for Clocks/Watches). We ensure
            correct filing.
          </p>
        </div>
      </div>
    </section>

        <section id="process" className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold uppercase tracking-wider text-sm">
            Filing Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Registration Workflow
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-5 gap-8 step-connector">
          {/* Step 1 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Search</h3>
            <p className="text-sm text-slate-300">
              Search existing designs for novelty check (mandatory).
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Drawings</h3>
            <p className="text-sm text-slate-300">
              Prepare detailed drawings showing all six views of the article.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Filing</h3>
            <p className="text-sm text-slate-300">
              File online application with Statement of Novelty.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto mb-4 border-4 border-brand-600 shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Examination</h3>
            <p className="text-sm text-slate-300">
              Design office raises objection if it lacks novelty or is functional.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <Check className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Certificate</h3>
            <p className="text-sm text-slate-300">
              Registration Certificate issued upon acceptance.
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
                    <li><a href="#" class="hover:text-white transition">Design Registration</a></li>
                    <li><a href="#" class="hover:text-white transition">Trademark Filing</a></li>
                    <li><a href="#" class="hover:text-white transition">Copyright Protection</a></li>
                    <li><a href="#" class="hover:text-white transition">Patent Drafting</a></li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Designs Act 2000</a></li>
                    <li><a href="#" class="hover:text-white transition">Locarno Classification</a></li>
                    <li><a href="#" class="hover:text-white transition">IPR Fee Structure</a></li>
                    <li><a href="#" class="hover:text-white transition">Design Journal</a></li>
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

export default CloudDeskBarcode;